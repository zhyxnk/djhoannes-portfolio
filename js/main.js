/* ============================================================
   Djhoannes Digal — Portfolio interactions
   Vanilla JS · nav, fade-ins, lightbox, mobile menu,
   typewriter, particles, tilt, skill bars, cursor glow
   ============================================================ */
(function () {
  "use strict";

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Inject shared chrome (mesh bg, grain, cursor, progress) ---------- */
  function injectChrome() {
    if (!$(".bg-mesh")) {
      const mesh = document.createElement("div");
      mesh.className = "bg-mesh";
      mesh.innerHTML = '<span class="blob b1"></span><span class="blob b2"></span><span class="blob b3"></span>';
      document.body.prepend(mesh);
    }
    if (!$(".bg-grain"))        { const g = document.createElement("div"); g.className = "bg-grain"; document.body.prepend(g); }
    if (!$(".scroll-progress")) { const p = document.createElement("div"); p.className = "scroll-progress"; document.body.appendChild(p); }
    if (!$(".cursor-glow") && window.matchMedia("(pointer:fine)").matches) {
      const c = document.createElement("div"); c.className = "cursor-glow"; document.body.appendChild(c);
    }
  }

  /* ---------- Navbar scroll state + progress bar ---------- */
  function navScroll() {
    const nav = $(".nav");
    const bar = $(".scroll-progress");
    const onScroll = () => {
      if (nav) nav.classList.toggle("scrolled", window.scrollY > 24);
      if (bar) {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Mobile drawer ---------- */
  function mobileMenu() {
    const burger   = $(".hamburger");
    const drawer   = $(".drawer");
    const backdrop = $(".drawer-backdrop");
    if (!burger || !drawer) return;
    const toggle = (open) => {
      burger.classList.toggle("open", open);
      drawer.classList.toggle("open", open);
      if (backdrop) backdrop.classList.toggle("open", open);
      document.body.style.overflow = open ? "hidden" : "";
    };
    burger.addEventListener("click", () => toggle(!drawer.classList.contains("open")));
    if (backdrop) backdrop.addEventListener("click", () => toggle(false));
    $$(".drawer a").forEach(a => a.addEventListener("click", () => toggle(false)));
    document.addEventListener("keydown", e => { if (e.key === "Escape") toggle(false); });
  }

  /* ---------- IntersectionObserver fade-ins ---------- */
  function fadeIns() {
    const els = $$(".fade-in");
    if (!els.length) return;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach(el => el.classList.add("visible")); return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(el => io.observe(el));
  }

  /* ---------- Animated count-up for stats ---------- */
  function countUp() {
    const nums = $$("[data-count]");
    if (!nums.length || reduceMotion) { nums.forEach(n => n.firstChild && (n.querySelector(".val").textContent = n.dataset.count)); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target, target = parseFloat(el.dataset.count), valEl = el.querySelector(".val");
        let cur = 0; const step = Math.max(1, target / 40);
        const tick = () => {
          cur += step;
          if (cur >= target) { valEl.textContent = target; }
          else { valEl.textContent = Math.floor(cur); requestAnimationFrame(tick); }
        };
        tick(); io.unobserve(el);
      });
    }, { threshold: 0.5 });
    nums.forEach(n => io.observe(n));
  }

  /* ---------- Typewriter (hero role swap) ---------- */
  function typewriter() {
    const el = $("[data-typewriter]");
    if (!el) return;
    const words = JSON.parse(el.dataset.typewriter);
    if (reduceMotion) { el.textContent = words[0]; el.classList.remove("typewriter"); return; }
    let wi = 0, ci = 0, deleting = false;
    const tick = () => {
      const word = words[wi];
      el.textContent = word.slice(0, ci);
      if (!deleting && ci < word.length) { ci++; setTimeout(tick, 90); }
      else if (!deleting && ci === word.length) { deleting = true; setTimeout(tick, 1600); }
      else if (deleting && ci > 0) { ci--; setTimeout(tick, 45); }
      else { deleting = false; wi = (wi + 1) % words.length; setTimeout(tick, 350); }
    };
    tick();
  }

  /* ---------- Cursor glow (zero-lag: follows pointer instantly) ---------- */
  function cursorGlow() {
    const glow = $(".cursor-glow");
    if (!glow) return;
    glow.style.transition = "opacity .25s";   // no transform smoothing → no lag
    let shown = false;
    window.addEventListener("mousemove", e => {
      glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      if (!shown) { glow.style.opacity = "1"; shown = true; }
    }, { passive: true });
  }

  /* ---------- Global twinkling starfield ---------- */
  function starfield() {
    let canvas = $("#starfield");
    if (!canvas) {
      canvas = document.createElement("canvas");
      canvas.id = "starfield";
      document.body.prepend(canvas);
    }
    const ctx = canvas.getContext("2d");
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let w, h, stars = [];
    const build = () => {
      // use the layout viewport (clientWidth/Height) so the canvas never
      // exceeds the page width and triggers horizontal scroll
      w = document.documentElement.clientWidth; h = document.documentElement.clientHeight;
      canvas.width = w * DPR; canvas.height = h * DPR;
      canvas.style.width = w + "px"; canvas.style.height = h + "px";
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      const count = Math.max(150, Math.min(200, Math.floor((w * h) / 9000)));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        r: Math.random() * 1.5 + 0.5,        // 0.5px – 2px
        base: Math.random() * 0.5 + 0.25,    // base brightness
        amp: Math.random() * 0.45 + 0.2,     // twinkle depth
        speed: Math.random() * 0.025 + 0.004,// twinkle rate (random)
        phase: Math.random() * Math.PI * 2
      }));
    };
    const paint = (animated) => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#ffffff";
      for (const s of stars) {
        if (animated) s.phase += s.speed;
        const o = animated ? s.base + Math.sin(s.phase) * s.amp : s.base + s.amp * 0.5;
        ctx.globalAlpha = o < 0 ? 0 : o > 1 ? 1 : o;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 1;
    };
    build();
    window.addEventListener("resize", build);
    if (reduceMotion) { paint(false); return; }   // static stars, no twinkle
    const loop = () => { paint(true); requestAnimationFrame(loop); };
    loop();
  }

  /* ---------- 3D tilt on cards ---------- */
  function tilt() {
    if (reduceMotion || !window.matchMedia("(pointer:fine)").matches) return;
    $$(".tilt").forEach(card => {
      card.addEventListener("mousemove", e => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(800px) rotateX(${-py * 6}deg) rotateY(${px * 6}deg) translateY(-8px) scale(1.02)`;
      });
      card.addEventListener("mouseleave", () => { card.style.transform = ""; });
    });
  }

  /* ---------- Card press (click/tap spring) ---------- */
  function cardPress() {
    if (reduceMotion) return;
    $$(".glass-card").forEach(card => {
      card.addEventListener("pointerdown", () => card.classList.add("pressed"));
      card.addEventListener("animationend", e => {
        if (e.animationName === "cardPress") card.classList.remove("pressed");
      });
    });
  }

  /* ---------- Hero particle field ---------- */
  function particles() {
    const canvas = $("#particles");
    if (!canvas || reduceMotion) return;
    const ctx = canvas.getContext("2d");
    let w, h, pts = [];
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      const host = canvas.parentElement;
      w = host.offsetWidth; h = host.offsetHeight;
      canvas.width = w * DPR; canvas.height = h * DPR;
      canvas.style.width = w + "px"; canvas.style.height = h + "px";
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      const count = Math.min(70, Math.floor(w / 22));
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.4
      }));
    };
    let mx = -999, my = -999;
    canvas.parentElement.addEventListener("mousemove", e => {
      const r = canvas.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top;
    });
    canvas.parentElement.addEventListener("mouseleave", () => { mx = -999; my = -999; });
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        // links
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d = Math.hypot(dx, dy);
          if (d < 120) {
            ctx.strokeStyle = `rgba(255,255,255,${0.06 * (1 - d / 120)})`;
            ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        }
        // mouse repel
        const mdx = p.x - mx, mdy = p.y - my, md = Math.hypot(mdx, mdy);
        if (md < 120) { p.x += (mdx / md) * 0.6; p.y += (mdy / md) * 0.6; }
        ctx.fillStyle = "rgba(255,255,255,0.5)";
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      }
      requestAnimationFrame(draw);
    };
    resize(); draw();
    window.addEventListener("resize", resize);
  }

  /* ---------- Skill bars ---------- */
  function skillBars() {
    const bars = $$(".skill-bar .fill");
    if (!bars.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.style.width = e.target.dataset.level + "%"; io.unobserve(e.target); } });
    }, { threshold: 0.4 });
    bars.forEach(b => io.observe(b));
  }

  /* ---------- Certifications: filter + lightbox ---------- */
  function certFilter() {
    const btns = $$(".filter-btn");
    const cards = $$(".cert-card");
    if (!btns.length) return;
    btns.forEach(btn => btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.filter;
      cards.forEach(c => {
        const show = f === "all" || c.dataset.category === f;
        c.style.display = show ? "" : "none";
      });
    }));
  }

  function lightbox() {
    const lb = $(".lightbox");
    if (!lb) return;
    const imgWrap = $(".lightbox-content", lb);
    const cap = $(".lightbox-caption", lb);
    const close = () => { lb.classList.remove("open"); document.body.style.overflow = ""; };
    $$(".cert-card").forEach(card => {
      card.addEventListener("click", () => {
        const title = card.dataset.title || card.querySelector("h4")?.textContent || "";
        const img = card.querySelector(".thumb img");
        if (img && img.getAttribute("src") && !img.dataset.broken) {
          imgWrap.innerHTML = `<img src="${img.src}" alt="${title}">`;
        } else {
          imgWrap.innerHTML = `<div class="lightbox-frame"><span class="big">${card.dataset.icon || "🏅"}</span><span>Certificate image coming soon</span></div>`;
        }
        cap.textContent = title;
        lb.classList.add("open"); document.body.style.overflow = "hidden";
      });
    });
    $(".lightbox-close", lb)?.addEventListener("click", close);
    lb.addEventListener("click", e => { if (e.target === lb) close(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
  }

  /* ---------- Experience: expandable bullets ---------- */
  function timelineToggle() {
    $$(".tl-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        const target = btn.parentElement.querySelector(".tl-bullets");
        const open = btn.classList.toggle("open");
        target.classList.toggle("show", open);
        btn.querySelector(".label").textContent = open ? "Hide details" : "View details";
      });
    });
  }

  /* ---------- Image fallback (graceful placeholders) ---------- */
  function imageFallback() {
    $$("img[data-fallback]").forEach(img => {
      img.addEventListener("error", () => {
        img.dataset.broken = "1";
        const ph = img.dataset.fallback || "🖼";
        const box = document.createElement("div");
        box.className = "img-fallback";
        box.style.cssText = "width:100%;height:100%;font-size:1.6rem;";
        box.textContent = ph;
        img.replaceWith(box);
      }, { once: true });
    });
  }

  /* ---------- Contact form (demo) + copy email ---------- */
  function contactForm() {
    const form = $("#contact-form");
    if (form) {
      form.addEventListener("submit", e => {
        e.preventDefault();
        const status = $(".form-status", form);
        const name = form.querySelector("[name=name]").value.trim() || "there";
        status.textContent = `Thanks, ${name}! This is a demo form — email me directly to connect.`;
        form.reset();
      });
    }
    $$(".copy-email").forEach(btn => btn.addEventListener("click", () => {
      const email = btn.dataset.email;
      navigator.clipboard?.writeText(email).then(() => {
        const t = btn.querySelector(".txt"); const old = t.textContent;
        t.textContent = "Copied!"; setTimeout(() => t.textContent = old, 1600);
      }).catch(() => {});
    }));
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    injectChrome();
    starfield();
    navScroll();
    mobileMenu();
    fadeIns();
    countUp();
    typewriter();
    cursorGlow();
    tilt();
    cardPress();
    particles();
    skillBars();
    certFilter();
    lightbox();
    timelineToggle();
    imageFallback();
    contactForm();
  });
})();
