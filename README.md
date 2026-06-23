# Djhoannes B. Digal — Portfolio

Personal portfolio of **Djhoannes "Zhek" B. Digal** — a Philippines-based Virtual Assistant, Freelancer, and Certified Bookkeeper.

**Built with HTML, CSS, JavaScript** — no frameworks, no build step. Deploy-ready for GitHub Pages or Netlify.

## Pages
- `index.html` — Home / landing (animated hero, particle field, stats, services)
- `tools.html` — Tools & tech stack
- `certifications.html` — Certifications, badges & awards (filterable + lightbox)
- `experience.html` — Work experience (interactive expandable timeline)
- `works.html` — Hands-on works / projects
- `about.html` — About, skills, and contact form

## Interactivity
- Sticky frosted-glass navbar that darkens on scroll + scroll progress bar
- Animated typewriter hero + interactive particle network background
- Cursor glow, 3D tilt cards, fade-in-on-scroll (IntersectionObserver)
- Count-up stats, animated skill bars
- Certifications: category filters + click-to-zoom lightbox
- Experience: click a role to expand details
- Contact form (demo) + copy-email button
- Mobile hamburger drawer

## Run locally
Open `index.html` in a browser, or use VS Code **Live Server**.

## Adding your assets
Drop files into the `assets/` folder (paths are already wired up — missing
images fall back to placeholder icons automatically):

| File | Description |
|------|-------------|
| `assets/profile.png` | Profile photo |
| `assets/badges/qb-level1.png` | QuickBooks ProAdvisor Level 1 |
| `assets/badges/qb-level2.png` | QuickBooks ProAdvisor Level 2 |
| `assets/badges/qb-cas.png` | Client Advisory Services Foundations |
| `assets/badges/intuit-bookkeeping.png` | Intuit Bookkeeping Trained |
| `assets/certs/xero.png` | Xero Advisor Certified |
| `assets/certs/cdsa.png` | Certified Data Science Associate |
| `assets/certs/tesda-bookkeeping.png` | TESDA Introduction to Bookkeeping |
| `assets/certs/nexora-cybersecurity.png` | Remote Work Cybersecurity |
| `assets/certs/jobs-gva.png` | JoBS eSolutions GVA Training |
| `assets/certs/xpo-completion.png` | XPO Certificate of Completion |
| `assets/certs/xpo-top-nester.png` | XPO Top Nester |
| `assets/certs/xpo-nester-passer.png` | XPO Nester Passer |
| `assets/certs/rxo-top-qa.png` | RXO Top QA Performer |
| `assets/certs/rxo-top-agent.png` | RXO Top Agent |
| `assets/certs/rxo-top-quality.png` | RXO Top Quality |

> Cert images are referenced as `.png`. If you have PDFs, export a page to PNG/JPG (or update the `src` in `certifications.html`).

## Deploy
- **GitHub Pages:** push to a repo → Settings → Pages → deploy from branch root. `.nojekyll` is included.
- **Netlify:** drag-and-drop the folder, or connect the repo.
