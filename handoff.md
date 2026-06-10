# Session Handoff — gyip.com Portfolio

## Project Overview
Static HTML/CSS/JS portfolio site targeting Apple ACD role. No framework. All styles are inline `<style>` blocks per page.

**SECURITY CONSTRAINT:** Do NOT list Apple as a past client anywhere. Marquee names: Toyota / Nissan / Disney / Google.

**Live files:** `C:\Users\gyipl\OneDrive\Desktop\Claude\code\`

---

## Current State

### index.html — Hero Headline Font Size (ACTIVE ISSUE)
`.hero-brand-design` desktop font-size is currently `5rem !important` (line ~104).
User is dialing this in — the original was `clamp(3.2rem,10.5vw,9.5rem)` (too big). Hard-coded `5rem` is the starting point — user will say bigger or smaller.

The combined rule (lines 102–107):
```css
.hero-brand-design, .hero-direction {
  font-family:'Bebas Neue',sans-serif;
  font-size:5rem !important;
  letter-spacing:-0.015em; color:#000;
  line-height:0.95; margin-left:-0.03em;
}
```
`.hero-direction` override (line 108):
```css
.hero-direction { font-size:clamp(0.8rem,2.6vw,2.4rem); color:#999999; max-width:250px; }
```

### Mobile Breakpoints
- Only ONE mobile breakpoint: `max-width: 480px`
- All mobile overrides use `!important` (media query block appears before base styles in source order — `!important` is required to win)
- Mobile `.hero-brand-design`: `clamp(3rem, 12vw, 5rem) !important`
- 640px block exists only for layout stacking (flex → column), NOT font sizes

### Mobile Features
- Intro video (frames1) SKIPPED on mobile (`window.innerWidth <= 768`) — JS removes src and calls `startToyotaHold()` directly
- Static truck image fallback: `#mobile-truck` — `src="projects/toyota-ai-pipeline-project/exploded truck.png"`, fixed right side, shown only at 480px

### Nav Mobile Override (all pages)
```css
@media(max-width:480px){
  #nav-brand { font-size: 1.5rem !important; }
  #nav-links a { font-size: 1.4rem !important; }
}
```
Applied to: index.html, project.html, all-projects.html, contact.html, resume.html

---

## Case Study Pages — Status

### nissan-case-study.html
- All Figma URLs replaced with local files
- Responsive stacking added (640px): brand-grid, vehicle-grid, section-side, hero-2col, psi-row
- Image mapping: hero=nissan8.jpg, design system=nissan7.png, modular=nissan5.jpg, visual identity=nissan2.jpg, vehicle backgrounds=nissan4.png, brand guidelines=nissan1.jpg, LEAF=leaf5/leaf2/leaf3, QUEST=quest4/quest2/quest1, VERSA=versa5/versa4/versa6

### toyota-case-study.html
- All Figma URLs replaced with local files
- Responsive stacking (640px): process stacks with 16:9 aspect ratio, outputs stack at 200px
- Selected outputs row height: 130px
- Image mapping: hero=hero.jpg, process=final4/final7/final5.png, variations=Ph.png, workflow=WF1-WF5.png, outputs=Out1/Out1-1.png

### storyfire-case-study.html
- All Figma URLs replaced with local files
- Responsive stacking (640px): platform-grid, section-side on Platform Experience/Ecosystem/Product System/Creator+Viewer Flows
- Mobile images: full-width, auto-height

---

## Before Deploy Checklist
1. Run `fix-quotes.ps1` — smart/curly quotes in JS break project pages
2. Finalize hero-brand-design desktop font size (currently 5rem, being dialed in)

---

## Key Architecture Notes
- `window.PROJECTS` in `projects-data.js` — single source of truth for project cards
- `p.url` field: if set, overrides default `project.html?id=` link
- CSS class names added for responsive stacking: `.psi-row`, `.psi-div`, `.hero-2col`, `.hero-img`, `.section-side`, `.process-row`, `.process-arrow`, `.outputs-row`, `.brand-grid`, `.vehicle-grid`, `.platform-grid`
- `.hero-tagline-block { display:inline-block; max-width:250px; }` — constrains BRAND DESIGN + CREATIVE DIRECTOR block width on desktop
