# Session Handoff — gyip.com Portfolio

## Project Overview
Static HTML/CSS/JS portfolio site targeting Apple ACD role. No framework. All styles are inline `<style>` blocks per page.

**SECURITY CONSTRAINT:** Do NOT list Apple as a past client anywhere. Marquee names: Toyota / Nissan / Disney / Google.

**Live files:** `C:\Users\gyipl\OneDrive\Desktop\Claude\code\`

---

## Before Deploy Checklist
1. Run `fix-quotes.ps1` — right-click in File Explorer → "Run with PowerShell". Cleans smart/curly quotes in JS that break project pages.

---

## All Projects Page — Layout

Three sections, all driven by `projects-data.js`:

### Featured Row (`#ap-featured`)
- 3 columns desktop, 1 column mobile (stacked)
- Dark `#1a1a1a` background, white text, light-on-dark pill tags
- Controlled by `featured: true` in `projects-data.js`
- Currently: Toyota AI Pipeline, Nissan Branding, Storyfire

### Selected Work (`#ap-grid`)
- 5 columns, 2 rows (10 cards), light grey `#f2f2f2` background
- 2 columns on mobile (640px)

### Earlier Work (`#ap-grid-older`)
- 6 columns, 1 row (remaining cards), smaller card size
- 3 columns on mobile (640px)
- Label appears automatically once 10 non-featured cards are rendered

---

## projects-data.js — Key Fields

- `order` — controls sort order across all sections
- `featured: true` — promotes card to dark top row
- `url` — overrides default `project.html?id=` link (used for case study pages)
- `images[0]` — card thumbnail filename

**Custom URL projects:**
- `toyota-ai-pipeline` → `toyota-case-study.html`
- `nissan-global-branding` → `nissan-case-study.html`
- `storyfire` → `storyfire-case-study.html`

**Known export gotcha (FIXED in admin.html):** The export always writes `url:` as its own line. If you manually edit `projects-data.js` and add a `url` field, make sure the line before it ends with a comma. The admin export now handles this correctly — `url` is always written, even as `""` for projects without one.

---

## Admin (admin.html)

- **Featured checkbox** — tick to promote a project to the dark top row; shows "Featured" badge on collapsed card
- **Custom URL field** — overrides the card link; leave blank for default `project.html?id=`
- After editing, click **Export projects-data.js**, replace the file in the project folder
- Always hard-refresh (Ctrl+Shift+R) admin.html in the browser after updating the file on disk

---

## Mobile Homepage (index-mobile.html)

- Separate static page — no canvas, no scroll animation, no frame loading
- Redirect in `index.html`: `if (window.innerWidth <= 768) window.location.replace('index-mobile.html')`
- Dark background (`#1a1a1a`) project cards with rounded corners, numbered 01/02/03
- Hero area is white (matches desktop); project cards are dark
- Keyframe stills used per project:
  - Toyota AI Pipeline → `frames/frames2/frames200.jpg` (first frame)
  - Nissan Rebrand → `frames/frames2/frames284.jpg` (last frame)
  - Storyfire → `frames/frames3/frames3150.jpg` (last frame)
- Hero text order: BRAND DESIGN tagline → headline → "Creative direction..." sub → clients
- Headline: Bebas Neue, `4.5rem`, `letter-spacing:-0.015em`, `margin-left:-0.03em`

---

## index.html — Video / First Frame

- Video switched to `frames/frames1/frames1.mp4` (smaller, car visible in frame)
- `preload="auto"` — browser downloads immediately on load
- JS shows first frame before play: `video1.style.display='block'` + `loadeddata` seek to 0
- No white flash — car is on screen from page load

---

## Navigation
- No megamenu anywhere on the site (fully removed)
- GARMAN nav brand links to `index.html` on all pages (full page load, clean intro restart)
- Nav links: Projects → `all-projects.html`, Resume → `resume.html`, Contact → `contact.html`

---

## index.html — Intro Animation

- Scroll-scrub video sequence followed by project panels (Toyota, Nissan, Storyfire)
- After final stop, auto-redirects to `all-projects.html` (`window.location.href`)
- End card removed — redirect is the transition
- Mobile (≤768px): skips intro video, goes directly to `startToyotaHold()`
- Static truck image fallback: `#mobile-truck` shown at ≤480px

### Hero Headline
`.hero-brand-design` desktop font-size: `5rem !important`
Original clamp was `clamp(3.2rem,10.5vw,9.5rem)` — user dialing this in.

### Mobile Breakpoints
- Only ONE mobile breakpoint: `max-width: 480px`
- All mobile overrides use `!important`
- Mobile `.hero-brand-design`: `clamp(3rem, 12vw, 5rem) !important`

### Nav Mobile Override (all pages)
```css
@media(max-width:480px){
  #nav-brand { font-size: 1.5rem !important; }
  #nav-links a { font-size: 1.4rem !important; }
}
```

---

## Case Study Pages

### toyota-case-study.html
- All Figma URLs replaced with local files
- Responsive stacking (640px): process stacks 16:9, outputs stack at 200px
- Images: hero=hero.jpg, process=final4/final7/final5.png, variations=Ph.png, workflow=WF1-WF5.png, outputs=Out1/Out1-1.png

### nissan-case-study.html
- All Figma URLs replaced with local files
- Responsive stacking (640px): brand-grid, vehicle-grid, section-side, hero-2col, psi-row
- Title: "Nissan Brand System" (word "Global" removed everywhere on site)
- Images: hero=nissan8.jpg, design system=nissan7.png, modular=nissan5.jpg, visual identity=nissan2.jpg

### storyfire-case-study.html
- All Figma URLs replaced with local files
- Responsive stacking (640px): platform-grid, section-side on Platform Experience/Ecosystem/Product System/Creator+Viewer Flows

---

## Key Architecture Notes
- `window.PROJECTS` in `projects-data.js` — single source of truth for project cards
- CSS class names for responsive stacking: `.psi-row`, `.psi-div`, `.hero-2col`, `.hero-img`, `.section-side`, `.process-row`, `.process-arrow`, `.outputs-row`, `.brand-grid`, `.vehicle-grid`, `.platform-grid`
- `.hero-tagline-block { display:inline-block; max-width:250px; }` — constrains BRAND DESIGN + CREATIVE DIRECTOR block width on desktop
