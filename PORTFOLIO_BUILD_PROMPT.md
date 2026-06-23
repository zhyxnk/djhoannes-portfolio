# PORTFOLIO BUILD PROMPT
# For: Djhoannes "Zhek" B. Digal
# Paste this entire file into Claude Code and say: "Build this portfolio exactly as specified."

---

## PROJECT OVERVIEW

Build a **multi-page personal portfolio website** for Djhoannes "Zhek" B. Digal — a Philippines-based Virtual Assistant, Freelancer, and Certified Bookkeeper. The site should feel **cinematic, premium, and interactive** — inspired by sites like getlayers.ai. Deploy-ready for GitHub Pages (pure HTML/CSS/JS, no frameworks required, no build step).

---

## FOLDER STRUCTURE

```
/
├── index.html              ← Home / Landing
├── tools.html
├── certifications.html
├── experience.html
├── works.html
├── about.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    ├── profile.png         ← user's photo (already in folder)
    ├── badges/             ← certificate badge PNGs (QB L1, QB L2, etc.)
    └── certs/              ← certificate PDFs / scanned images
```

---

## DESIGN SYSTEM

### Aesthetic
- **Style:** Liquid glass / frosted glassmorphism on deep void-black background
- **Feel:** Premium, cinematic, interactive — like a high-end SaaS landing page
- **Reference vibe:** getlayers.ai — smooth scroll, floating cards, subtle glow

### Color Palette
```
--bg-void:        #080808        ← page background
--bg-surface:     #0f0f0f        ← section backgrounds
--glass-bg:       rgba(255,255,255,0.04)
--glass-border:   rgba(255,255,255,0.10)
--glass-hover:    rgba(255,255,255,0.08)
--accent-white:   #ffffff
--accent-silver:  #c0c0c0
--accent-glow:    rgba(255,255,255,0.15)
--text-primary:   #f5f5f5
--text-secondary: #a0a0a0
--text-muted:     #555555
```

### Typography
- **Display / Hero:** `'Syne', sans-serif` (Google Fonts) — bold, modern
- **Body:** `'Inter', sans-serif` (Google Fonts) — clean, readable
- **Mono / Labels:** `'JetBrains Mono', monospace` (Google Fonts) — tech feel

### Glassmorphism Card Style (reuse everywhere)
```css
.glass-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.10);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: all 0.3s ease;
}
.glass-card:hover {
  background: rgba(255,255,255,0.08);
  border-color: rgba(255,255,255,0.20);
  transform: translateY(-4px);
  box-shadow: 0 20px 60px rgba(255,255,255,0.05);
}
```

### Animations
- Smooth page scroll: `scroll-behavior: smooth`
- Fade-in on scroll: use IntersectionObserver with class `fade-in` (opacity 0 → 1, translateY 20px → 0)
- Hover: subtle lift + border brighten on all cards
- Nav: frosted glass sticky navbar that darkens on scroll
- Hero: animated text typewriter or word-swap for the role title
- Particle/ambient background: subtle floating dots or mesh gradient animation in hero

---

## NAVIGATION

Sticky frosted glass navbar across all pages:
```
Logo: "Zhek." (white, Syne bold)     |     Home  Tools  Certifications  Experience  Works  About
```
- Active page link has white color + underline glow
- Mobile: hamburger menu with slide-in glass drawer
- Smooth scroll highlight on single-page sections if any

---

## PAGE 1: HOME (index.html)

### Hero Section
- Full viewport height
- Ambient animated background: subtle slow-moving radial gradient blobs (white/silver, very low opacity)
- Left side: Text content
  - Small label (mono font, silver): `Virtual Assistant · Freelancer · Bookkeeper`
  - Large display heading (Syne, white, ~72px):
    ```
    Hi, I'm Zhek.
    I keep things
    running.
    ```
  - Subtext (Inter, text-secondary, ~18px):
    `Remote-ready professional helping businesses stay organized, efficient, and ahead — from executive support to clean books.`
  - Two CTA buttons:
    - Primary glass button: `View My Work` → links to works.html
    - Secondary ghost button: `Download Resume` → placeholder href="#"
- Right side: Profile photo
  - Circular or rounded-square frame with white glow ring
  - Subtle float animation (gentle up-down loop)
  - Image src: `assets/profile.png`

### Stats Bar (below hero)
Glass card row with 4 stats:
| 4+ Years | 3 Certifications | 5+ Roles | 100% Remote |
| Experience | Industry-Recognized | Across Industries | Ready |

### Services Snapshot (6 glass cards in 3x2 grid)
Quick overview of what Zhek does:
1. 🗓 Executive Assistance — Calendar, email, and operations management
2. 📚 Bookkeeping — QuickBooks, Xero, full-cycle financial records
3. 📊 Data & Reporting — Dashboards, spreadsheets, analytics support
4. 📱 Social Media Management — Scheduling, engagement, content coordination
5. 🛒 E-commerce Support — Product listing, inventory, platform management
6. 🎬 Content & Admin Support — Video editing, transcription, file management

### Footer CTA Strip
Dark glass strip: `Ready to work together?` + button → `about.html#contact`

---

## PAGE 2: TOOLS (tools.html)

### Hero
- Small heading: `Tools & Tech Stack`
- Subtitle: `Platforms and software I work with daily across bookkeeping, VA work, and data.`

### Tool Categories (glass cards, grouped)

**Accounting & Finance**
- QuickBooks Online (ProAdvisor Level 1 & 2)
- Xero (Advisor Certified)
- Intuit Bookkeeping

**Productivity & Admin**
- Google Workspace (Docs, Sheets, Drive, Calendar, Gmail)
- Microsoft Office (Word, Excel, PowerPoint)
- Notion, Trello, Asana

**Communication**
- Slack, Zoom, Microsoft Teams
- Email management (Gmail, Outlook)

**Content & Creative**
- Canva (graphics)
- CapCut (video editing)
- Loom (screen recording)

**Data & Analytics**
- Tableau
- Google Sheets (advanced)
- Microsoft Excel

**Social Media**
- TikTok, Instagram, Facebook
- Buffer / scheduling tools

**Other**
- CRM systems
- Shopify / e-commerce platforms
- VS Code, GitHub

### Layout
- Category label in silver mono font
- Tools displayed as pill/chip tags inside glass containers
- Hover: chip glows white border

---

## PAGE 3: CERTIFICATIONS (certifications.html)

### Hero
- Heading: `Certifications & Badges`
- Subtitle: `Proof of practice — industry-recognized credentials across bookkeeping, VA work, and data.`

### Badge Section (from uploaded images — display as image cards)

**Intuit / QuickBooks Badges** (display badge PNG images):
1. QuickBooks Online ProAdvisor — Level 1 (Certified)
2. QuickBooks Online ProAdvisor — Level 2 (Certified)
3. Intuit ProAdvisor — Client Advisory Services Foundations (Graduate)
4. Intuit Bookkeeping (Trained)

**Xero**
5. Xero Advisor Certified (June 22, 2025 · Expires Dec 12, 2026)

**Data Science**
6. Certified Data Science Associate / CDSA (June 1, 2026) — East West IES / USeP / ICTIC

**TESDA**
7. Introduction to Bookkeeping (June 14, 2026)

**Nexora Digital**
8. Remote Work Cybersecurity (July 25, 2025)

**JoBS eSolutions**
9. General Virtual Assistance Training — 100 hours (August 13, 2024)

### Awards / Recognition Section

**Alorica / XPO / RXO Awards** (display as certificate image cards):
1. XPO Logistics — Certificate of Completion (Product Specifics Training, July 9, 2022)
2. XPO Logistics — Top Nester (100% Overall Score — highest in nesting period)
3. XPO Logistics — Nester Passer (Fully Certified, July 24, 2022)
4. RXO — Overall Outbound Top QA Performer (100% QA Score, 85s OB ATT, Dec 2022)
5. RXO — December 2022 Outbound Top Agent (107.25% Weighted Average Score)
6. RXO — December 2022 Overall Top Quality (85s OB ATT, 100% Attendance Rate)

### Layout
- Badges: 4-column grid of image cards with glass frame + hover zoom
- Awards: 3-column grid, same glass card style
- Lightbox on click: clicking any cert/badge opens a modal with full-size image view

---

## PAGE 4: WORK EXPERIENCE (experience.html)

### Hero
- Heading: `Work Experience`
- Subtitle: `A track record built across remote, hybrid, and on-site environments.`

### Timeline Layout
Vertical timeline with glass cards, alternating left/right on desktop, single column on mobile.

---

**Role 1**
- Title: Executive Virtual Assistant
- Company: Derek Lord LLC
- Period: Sep 2024 – Mar 2026
- Note: Supported Ugo Lord — U.S.-based TikTok lawyer & influencer with 6.9M followers
- Bullets:
  - Managed 50+ appointments and calendar events monthly across multiple time zones
  - Triaged and responded to 100+ emails/week, reducing inbox backlog with a priority-flagging system that cut response time by 30%
  - Built a follow-up tracking system from scratch that flagged 20+ pending items daily
  - Coordinated vendor relationships across 5+ service providers with 100% on-time delivery
  - Managed TikTok presence for a 6.9M-follower creator across 3+ platforms
  - Listed and managed products across 3+ online selling platforms with 100% inventory accuracy
  - Coordinated wardrobe and tailoring services for 10+ content shoots with zero scheduling conflicts
  - Handled travel logistics across 5+ trips — hotels, dining, court scheduling — zero last-minute issues
  - Processed payroll records and managed confidential legal, financial, and personal documentation
  - Conducted research and prepared recommendations across 15+ travel, scheduling, and content decisions

---

**Role 2**
- Title: Bookkeeper
- Company: Surge Freelancing Marketplace
- Period: Jul 2024 – Jan 2025
- Bullets:
  - Maintained books for 3–5 small business clients across service-based and e-commerce industries
  - Reconciled 150–200 transactions monthly per client with zero unresolved discrepancies
  - Managed invoicing, billing, accounts payable and receivable
  - Performed monthly bank reconciliations and prepared P&L, balance sheets, and cash flow reports
  - Processed payroll and maintained fixed asset schedules with depreciation documentation
  - Organized tax compliance documentation for year-end reporting

---

**Role 3**
- Title: General Virtual Assistant
- Company: JoBS eSolutions, Inc.
- Period: Jul 2024 – Dec 2024 (6 months) · Hybrid, Davao
- Bullets:
  - Managed email and calendar for 3–5 clients simultaneously — 50+ emails/week per client, zero missed follow-ups
  - Performed data entry across large datasets with 99%+ accuracy
  - Completed 2–3 hours of audio/video transcription per week
  - Produced 1–2 Canva graphics per week for client content needs
  - Created and edited 3–5 short-form videos per week using CapCut
  - Managed social media accounts across 3+ platforms
  - Provided customer support via email and chat — 20–30 inquiries/week
  - Organized digital file systems across Google Drive for 5+ clients

---

**Role 4**
- Title: Customer Experience Representative
- Company: Alorica Teleservices, Inc.
- Period: Jun 2022 – Sep 2024
- Note: Handled U.S. logistics support for XPO Logistics and RXO
- Bullets:
  - Managed 80–100 calls daily across inbound and outbound campaigns
  - Processed emails, data entry, and CRM case logging following strict SOPs
  - Coordinated with hubs, vendors, and escalation teams on freight operations
- Achievements:
  - 🏆 XPO Logistics Top Nester — 100% Overall Score, highest in nesting period
  - 🏆 RXO December 2022 Overall Outbound Top QA Performer — 100% QA Score
  - 🏆 RXO December 2022 Outbound Top Agent — 107.25% Weighted Average Score
  - 🏆 RXO December 2022 Overall Top Quality — 85s OB ATT, 100% Attendance Rate

---

**Role 5**
- Title: Data Encoder
- Company: TUPAD (LGU Davao City)
- Period: Jun 2021 – Dec 2021
- Bullets:
  - Encoded and validated 7,600+ scholar records across multiple institutions
  - Organised data by district following LGU documentation standards
  - Created charts to visualize scholar data distribution for program administrators

---

## PAGE 5: HANDS-ON WORKS (works.html)

### Hero
- Heading: `Hands-On Works`
- Subtitle: `Selected projects, outputs, and real deliverables from my professional journey.`

### Project Cards (glass cards, 2-column grid)

Note to Claude Code: These are placeholder cards. User will add real screenshots/links later. Build the card structure so it's easy to update.

1. **Tableau Dashboard — Mario Game Sales**
   - Type: Data Analytics
   - Description: CDSA final project. Built 5 visualizations on Mario game sales data (Makeover Monday 2026 Week 10). Published on Tableau Public.
   - Link: `https://public.tableau.com/app/profile/djhoannes.digal`
   - Tag: Tableau · Data Viz · CDSA

2. **Portfolio Website**
   - Type: Web Development
   - Description: This site — built from scratch using HTML, CSS, and JavaScript. Deployed on Netlify/GitHub Pages.
   - Link: `https://benevolent-caramel-01b3d2.netlify.app`
   - Tag: HTML · CSS · JavaScript

3. **Bookkeeping Sample — Full Cycle**
   - Type: Bookkeeping
   - Description: Sample QuickBooks Online workflow: chart of accounts setup, transaction categorization, bank reconciliation, and P&L report.
   - Tag: QuickBooks · Bookkeeping · Finance
   - Note: `[Add screenshot or PDF link here]`

4. **Content Calendar & Scheduling System**
   - Type: Executive VA
   - Description: Built a content scheduling and follow-up tracking system for a 6.9M-follower TikTok creator across 3 platforms.
   - Tag: Notion · Social Media · VA

5. **Scholar Data Dashboard**
   - Type: Data / Government
   - Description: Encoded, validated, and visualized 7,600+ scholar records for LGU Davao City's TUPAD program.
   - Tag: Data Entry · Excel · Charts

6. **[Add Your Next Project]**
   - Placeholder card with dashed glass border and `+` icon

### Card Layout Per Project
- Top: Category badge (pill tag)
- Middle: Project title + description
- Bottom: Tech/tool tags + external link button

---

## PAGE 6: ABOUT ME (about.html)

### Hero
- Large heading: `About Me`
- Subheading in silver: `The person behind the work.`

### Bio Section (glass card, left text / right photo)
Photo: `assets/profile.png`

Bio text:
```
I'm Zhek — a Virtual Assistant, Freelancer, and Certified Bookkeeper based in Davao City, Philippines.

I've spent the last few years working across remote and hybrid environments, helping businesses and executives stay organized, on schedule, and financially clear-headed. From managing the calendar and inbox of a 6.9M-follower TikTok lawyer, to reconciling hundreds of monthly transactions for small business clients, I bring precision and reliability to every role I take on.

My toolkit spans executive support, full-cycle bookkeeping (QuickBooks & Xero), data entry, content coordination, and social media management. I'm also a Certified Data Science Associate — so when the work calls for dashboards, reporting, or turning raw data into decisions, I can deliver that too.

I thrive in fast-paced, remote environments where initiative matters and attention to detail is non-negotiable. I'm always building, always learning — and always ready for the next challenge.
```

### Quick Facts (glass card grid, 2x2 or 1x4)
- 📍 Based in: Davao City, Philippines
- 🌐 Available for: Remote / International Clients
- 🕐 Timezone: PHT (UTC+8) — flexible overlap
- 💼 Open to: Full-time, Part-time, Project-based

### Skills Summary (progress bars or pill tags)
Group by category:
- Executive VA: Calendar Management, Email Triage, Travel Coordination, Vendor Management
- Bookkeeping: QuickBooks Online, Xero, Bank Reconciliation, Financial Reporting, Payroll
- Data: Tableau, Google Sheets, Data Entry, Data Visualization
- Content: Canva, CapCut, Social Media Management, Content Scheduling
- Tech: Google Workspace, Microsoft Office, CRM Systems, GitHub

### Contact Section (id="contact")
Glass form card:
- Name field
- Email field
- Message textarea
- Send button (glass style)
- Below form: Email link + LinkedIn placeholder

---

## TECHNICAL REQUIREMENTS

1. **Pure HTML/CSS/JS** — no React, no Vue, no build tools. Must work by opening index.html in a browser or with VS Code Live Server.
2. **GitHub Pages ready** — relative paths only, no absolute localhost references.
3. **Responsive** — mobile-first, works on 320px to 1440px+.
4. **Performance** — lazy-load images, minimal external dependencies (only Google Fonts + optionally GSAP from CDN for animations).
5. **Accessibility** — semantic HTML, alt text on all images, keyboard-navigable nav.
6. **Smooth scroll** — between sections, nav links.
7. **IntersectionObserver** — fade-in elements as they enter viewport.
8. **Active nav state** — current page link highlighted in navbar.
9. **Lightbox** — for certifications page, clicking a cert/badge opens full-size modal.
10. **No broken links** — use `href="#"` for anything not yet available.

---

## ASSETS REFERENCE

When building, use these placeholder `src` values. User will drop actual files into the `assets/` folder:

| File | Description |
|------|-------------|
| `assets/profile.png` | Profile photo (already available — professional headshot, black leather jacket) |
| `assets/badges/qb-level1.png` | QuickBooks ProAdvisor Level 1 badge |
| `assets/badges/qb-level2.png` | QuickBooks ProAdvisor Level 2 badge |
| `assets/badges/qb-cas.png` | Client Advisory Services Foundations badge |
| `assets/badges/intuit-bookkeeping.png` | Intuit Bookkeeping Trained badge |
| `assets/certs/xero.pdf` | Xero Advisor Certified |
| `assets/certs/cdsa.pdf` | Certified Data Science Associate |
| `assets/certs/tesda-bookkeeping.pdf` | TESDA Introduction to Bookkeeping |
| `assets/certs/nexora-cybersecurity.pdf` | Remote Work Cybersecurity |
| `assets/certs/jobs-gva.pdf` | JoBS eSolutions GVA Training |
| `assets/certs/xpo-completion.png` | XPO Logistics Certificate of Completion |
| `assets/certs/xpo-top-nester.png` | XPO Top Nester award |
| `assets/certs/xpo-nester-passer.png` | XPO Nester Passer |
| `assets/certs/rxo-top-qa.png` | RXO Overall Outbound Top QA Performer |
| `assets/certs/rxo-top-agent.png` | RXO Outbound Top Agent |
| `assets/certs/rxo-top-quality.png` | RXO Overall Top Quality |

---

## DEPLOY NOTES

- Add a `README.md` with: "Portfolio of Djhoannes B. Digal — Built with HTML, CSS, JavaScript"
- Add a `.nojekyll` file (empty) so GitHub Pages doesn't process with Jekyll
- All internal links should work both locally and on GitHub Pages
- The site will be hosted at: GitHub Pages URL (user to configure)

---

## FINAL INSTRUCTION TO CLAUDE CODE

Build all 6 HTML pages + shared CSS + shared JS as described above. Start with:
1. `css/style.css` — full design system, glass card styles, animations
2. `js/main.js` — nav scroll behavior, IntersectionObserver fade-ins, lightbox, mobile menu
3. `index.html` — home page
4. Then remaining pages in order: tools, certifications, experience, works, about

Make it beautiful. Make it premium. Make it Zhek.
