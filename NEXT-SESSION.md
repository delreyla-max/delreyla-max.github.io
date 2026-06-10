# Portfolio Site — Next Session Handoff
**For: Claude Code | Project: gyip.com | Role: Apple ACD + Wallet applications**

---

## What's been done (do not redo)

| Item | Status | Notes |
|---|---|---|
| Skip link to work | ✅ Done | `#skip-to-work` pill, fixed bottom-right, links to `all-projects.html` |
| Hero tagline contrast + size | ✅ Done | `.hero-tagline` bumped to `clamp(1.25rem,3vw,2.1rem)`, opacity 0.72 |
| Client name line above fold | ✅ Done | "Toyota · Nissan · Disney · Google · PlayStation" in `.hero-clients` |
| Nav brand name color | ✅ Done | Changed `#999` → `#000` across all 5 pages |
| `prefers-reduced-motion` | ✅ Done | Detection in JS, `html.reduced-motion` CSS class, static CTA buttons shown, animation skipped |
| Toyota/Nissan/Storyfire copy | ✅ Done | Tags, brief, work, outcome rewritten in `projects-data.js` per Apple brief Section C |
| project.html rendering bug | ✅ Fixed | Curly smart quotes in JS were silently killing the entire render script |
| Curly quotes — all files | ✅ Fixed | `fix-quotes.ps1` cleans all HTML/JS/CSS/MD; run before every deploy |
| All pages committed + deployed | ✅ Live | GitHub → Cloudflare Pages |

---

## What's still pending

### 1. Animation rebuild (biggest item — needs Premiere exports first)

The current homepage scroll-jacks 660 frames. Apple hiring managers bounce before hitting project cards. The full spec is in `APPLE-PORTFOLIO-BRIEF.md` Section E. Summary:

**New structure:**
- **Beat 1** — Autoplay video (no scroll needed): truck drives in, explodes. Export as a single compressed `.mp4` / `.webm`, ~84 frames @ 24fps (~3.5s). NOT a JPG sequence.
- **Beat 2** — First scroll scrub: explosion resolves into Toyota AI panel. ~48 JPG frames. One wheel flick of scroll.
- **Beat 3** — Optional: Nissan + Storyfire panels, ~40 frames each. Or drop to static grid.
- **Beat 4** — Static project grid, no frames.

**Frame budget:** 132 frames (lean) to 212 frames (full scrub). Down from 660.

**Before the dev work can start, Garman needs to export from Premiere:**
- `hero.mp4` + `hero.webm` — Beat 1, ~84 frames, compressed video
- `beat2/` folder — Beat 2 JPG sequence, ~48 frames (Toyota AI scrub)
- `beat3a/` folder (optional) — Nissan scrub, ~40 frames
- `beat3b/` folder (optional) — Storyfire scrub, ~40 frames

**Current frame folders for reference:**
- `frames/frames1/` — 152 frames (truck approach)
- `frames/frames2/` — 242 frames (explosion)
- `frames/frames3/` — 182 frames (panels)
- `frames/frames4/` — 84 frames (end card)

**Animation config in `index.html`:**
- `FOLDER_FRAME_COUNTS = [152, 242, 182, 84]`
- `FPS=24`, `PX_PER_FRAME=12`, `PAUSE_MS=1000`
- `html, body { overflow:hidden }` at line 17 — this is the scroll-jack
- RAF loop drives virtualScroll; panels appear at configured stops

### 2. `[FILL]` metrics — Garman needs to supply real numbers

These placeholders are in `projects-data.js` outcome fields:
- Toyota: `[FILL: weeks → days]` and `[FILL: % cost reduction]`
- Nissan: `[FILL: # markets]`
- Storyfire: `[FILL: # core flows]` and `[FILL: any launch/engagement metric]`

Do not fabricate. Ask Garman for real numbers before publishing.

### 3. A4 accessibility — remaining gaps

Done: `prefers-reduced-motion`, skip link, nav color contrast.
Still needed:
- Full keyboard navigation audit (tab order through animation panels)
- Run axe DevTools scan, fix any critical issues
- Semantic landmarks (`<main>`, `<nav>` already exist; check `<h1>` hierarchy on project pages)

### 4. A6 performance / mobile

Tied to the animation rebuild. Once new frame exports land:
- Lazy-load frame images (only load Beat 2+ frames after Beat 1 plays)
- Ensure work is reachable within a few seconds on throttled mobile

### 5. Section B — Wallet role (only if pursuing)

Separate product-first entry page. Low priority until Apple Ads application is solid.

---

## Key technical facts

**File structure:**
```
index.html          — Homepage (animation + panels)
all-projects.html   — Full project grid (rendered from window.PROJECTS)
project.html        — Individual project page (?id= param lookup)
resume.html         — Resume
contact.html        — Contact
projects-data.js    — Single source of truth: window.PROJECTS array (19 projects)
admin.html          — Visual editor for projects-data.js
fix-quotes.ps1      — Run before every deploy to catch curly quote encoding bugs
frames/             — JPG frame sequences (frames1–frames4)
projects/           — Per-project image folders
```

**Gotchas:**
- Nissan folder is intentionally misspelled: `projects/nissal-global-branding-project` (not nissan)
- Nav HTML is duplicated across all 5 pages — changes must be applied to each
- `project.html` starts `#project-wrap` as `display:none` and shows it at line ~749 after JS renders content
- `window.PROJECTS` is the single source — `all-projects.html` and `project.html` both read from it
- Deploy = commit → push to GitHub → Cloudflare Pages auto-deploys
- Run `fix-quotes.ps1` before committing if any text was pasted from Word/Notion/Docs

**Apple brief constraint:**
> Do NOT list Apple as a past client anywhere. Toyota / Nissan / Disney / Google are the marquee names.

---

## Suggested order for this session

1. **If Garman has the new Premiere exports ready** → start the animation rebuild (Section E spec in `APPLE-PORTFOLIO-BRIEF.md`)
2. **If not** → fill in `[FILL]` metrics in `projects-data.js`, run A4 accessibility pass, then wait for exports
