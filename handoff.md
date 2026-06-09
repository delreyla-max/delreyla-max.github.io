# Portfolio Site — Developer Handoff

## Overview

A scroll-scrubbed personal portfolio site for Garman (Creative Director / Brand Design). The homepage is canvas-driven — the user scrubs through a frame-sequence animation by scrolling, with three project panels that slide in at set scroll points. At the end of the animation an "end card" reveals featured project cards and a full project list.

---

## File Structure

```
/
├── index.html              # Homepage — animation, panels, end card
├── all-projects.html       # Full project grid (auto-generated from projects-data.js)
├── project.html            # Individual project page (reads ?id= from URL)
├── resume.html             # Resume page
├── contact.html            # Contact page
├── admin.html              # Browser-based CMS (localStorage draft, exports projects-data.js)
├── projects-data.js        # Single source of truth for all project data
├── projects/               # All project asset folders
│   ├── toyota-ai-pipeline-project/
│   ├── nissal-global-branding-project/   ← note: "nissal" spelling is intentional
│   ├── storyfire-project/
│   ├── tacobell-redesign-project/
│   ├── toyota-garage-project/
│   ├── honda-motorsports-project/
│   ├── mr-cooper-portal-project/
│   ├── disney-habit-heroes-project/
│   ├── nissan-quest-project/
│   ├── google-chromebook-project/
│   ├── toyota-lexus-owners-project/
│   ├── xome-real-estate-project/
│   ├── jeffrys-bbq-project/
│   ├── playstation-3-launch-project/
│   ├── pixar-walle-project/
│   ├── nissan-leaf-project/
│   ├── nissan-versa-project/
│   ├── adidas-golf-project/
│   └── saints-row-iv-project/
└── frames/                 # Frame-sequence animation JPGs
    ├── frames1/            # frames1001.jpg … (scroll animation segment 1)
    ├── frames2/            # frames2001.jpg … (scroll animation segment 2)
    └── frames3/            # frames3001.jpg … (scroll animation segment 3)
```

---

## Key Concepts

### Frame-Sequence Scroll Animation (`index.html`)
- A `<canvas>` element covers the viewport. As the user scrolls, JS decodes the scroll position into a frame index and paints the corresponding JPEG onto the canvas — creating a video-scrub effect.
- Frames live in `frames/frames1/`, `frames/frames2/`, `frames/frames3/`. Filenames follow the pattern `frames1001.jpg`, `frames2042.jpg`, etc.
- The `framePath(folder, local)` function constructs paths: `frames/frames{folder}/frames{folder}{padded3digit}.jpg`
- Three project panels (`#panel-0` Toyota, `#panel-1` Nissan, `#panel-2` Storyfire) animate in/out at defined scroll ranges. Each has a thumbnail carousel (`data-folder`, `data-images` attributes) driven by `initThumbCarousel()`.

### `projects-data.js`
- Single source of truth — an array of project objects (`window.PROJECTS`).
- Consumed by `all-projects.html` (grid), `project.html` (detail view), and `admin.html` (CMS editor).
- **Critical:** All `folder:` values must be prefixed with `projects/` (e.g. `"projects/toyota-ai-pipeline-project"`). The Nissan entry uses the misspelled folder name `projects/nissal-global-branding-project` — this is intentional (matches actual folder on disk).
- `admin.html` exports a fresh `projects-data.js` via localStorage draft. If the admin is opened with a stale draft (from before the `projects/` folder reorganization), it can overwrite the correct paths. A `migrateFolderPath()` function in `admin.html` auto-corrects this on load.

### `admin.html` (CMS)
- Fully browser-based; no server required. Data is stored in `localStorage` under the key `garman_admin_projects_draft`.
- Has a canvas-based image cropper (`openImageCropper`) with drag-to-pan and zoom-to-fit. Card thumbnails prompt for 16/10 crop aspect; single media images do not force a crop.
- Exports `projects-data.js` on demand. **Do not open admin while editing `projects-data.js` by hand** — saving from admin will overwrite manual edits.

### Media Gallery Blocks (`projects-data.js`)
Each project's `media` array supports blocks of type:
```js
{ type: "image-grid", items: ["file1.jpg","file2.jpg"], columns: 2, caption: "" }
{ type: "video",      src: "filename.mp4" }
{ type: "youtube",    id: "VIDEO_ID" }
```

---

## Navigation

All pages share the same nav structure:

- **Logo**: `#nav-brand` — "GARMAN" stacked above "BRAND DES\GN + CREATIVE D\RECTOR" (the backslash in DES\GN and D\RECTOR is intentional — stylistic).
- **Nav links**: Resume, Contact, **Projects** (→ `all-projects.html`)
- **Mega-menu dropdown**: Opens on hover of "Projects". Contains 3 featured project cards (Toyota, Nissan, Storyfire) each with a clickable thumbnail and title linking to their project pages, plus an "All Projects" card with the full 19-project list (each linking to `project.html?id=<id>`).
- The same mega-menu HTML block is duplicated across all 5 pages (`index.html`, `all-projects.html`, `project.html`, `resume.html`, `contact.html`). Changes to the menu must be applied to all files.

---

## Project Routing

Individual project pages use query-string routing:
```
project.html?id=toyota-ai-pipeline
project.html?id=nissan-global-branding
project.html?id=storyfire
```
The `id` must match the `id:` field in `projects-data.js`. `project.html` reads `window.PROJECTS`, finds the matching entry, and renders it.

---

## Image Naming Conventions

All project images were renamed to simple sequential names during reorganization:

| Project folder | Pattern |
|---|---|
| adidas-golf-project | adidas1.jpg … adidas11.jpg |
| disney-habit-heroes-project | disney1.jpg … disney15.jpg |
| google-chromebook-project | google1.jpg, google2.jpg |
| jeffrys-bbq-project | jeffrys1.jpg … jeffrys8.jpg |
| mr-cooper-portal-project | mrcooper1.jpg … mrcooper6.jpg |
| nissal-global-branding-project | nissan1.jpg … nissan9.jpg |
| nissan-leaf-project | leaf1.jpg … leaf9.jpg |
| nissan-quest-project | quest1.jpg … quest6.jpg |
| nissan-versa-project | versa1.jpg … versa10.jpg |
| pixar-walle-project | walle1.jpg … walle11.jpg |
| playstation-3-launch-project | playstation1.jpg … playstation6.jpg |
| saints-row-iv-project | saintsrow1.jpg … saintsrow4.jpg |
| storyfire-project | storyfire1.png … storyfire7.png |
| tacobell-redesign-project | tacobell1.jpg … tacobell7.png (mixed extensions) |
| toyota-garage-project | toyotagarage1.jpg … toyotagarage11.jpg |
| xome-real-estate-project | xome1.jpg … xome7.jpg |

---

## Panel Thumbnail Carousels

The three homepage panels use `data-` attributes to drive their image carousels:

```html
<div class="panel-thumb"
     data-folder="projects/toyota-ai-pipeline-project"
     data-images="image1.png,image2.png,image3.png"
     data-alt="Toyota AI Pipeline">
```

- `data-folder` — path relative to site root
- `data-images` — comma-separated filenames within that folder
- JS function `initThumbCarousel()` (around line ~780 in `index.html`) reads these and auto-advances the carousel

**Current panel image assignments:**
| Panel | Folder | Images |
|---|---|---|
| Toyota AI Pipeline | `projects/toyota-ai-pipeline-project` | image1.png, image2.png, image3.png |
| Nissan Global Branding | `projects/nissal-global-branding-project` | nissan5.jpg, nissan2.jpg, nissan6.jpg |
| Storyfire | `projects/storyfire-project` | storyfire3.png, storyfire4.png, storyfire7.png |

---

## Hero Card Thumbnails

Three featured project thumbnails appear in two places on the homepage (mega-menu dropdown and end card) and are mirrored across all other pages in the mega-menu:

| Project | Image |
|---|---|
| Toyota AI Pipeline | `projects/toyota-ai-pipeline-project/fuel filter.png` |
| Nissan Global Branding | `projects/nissal-global-branding-project/nissan5.jpg` |
| Storyfire | `projects/storyfire-project/storyfire4.png` |

- Mega-menu thumbs use `object-fit: contain` (scoped via `#nav-megamenu .hero-card-thumb img`)
- End-card thumbs use `object-fit: contain` (scoped via `#end-card .hero-card-thumb img`)
- Mega-menu thumbnails are wrapped in `<a>` tags linking to their project pages

---

## Known Gotchas

1. **Admin overwrites `projects-data.js`** — Opening `admin.html` and clicking export will regenerate the file from its localStorage draft. The `migrateFolderPath()` function corrects old paths, but any hand-edits not reflected in the draft will be lost. Always back up `projects-data.js` before using admin.

2. **`nissal` spelling** — The Nissan Global Branding folder is spelled `nissal-global-branding-project` (typo preserved). The `projects-data.js` entry `id` is `nissan-global-branding` (correct spelling). These are different strings — don't "fix" the folder name without updating all references.

3. **`fuel filter.png` has a space** — The Toyota AI Pipeline thumbnail filename contains a space. It is URL-encoded as `fuel%20filter.png` in all HTML `src` attributes.

4. **Duplicate nav HTML** — The mega-menu dropdown is copy-pasted into all 5 HTML files. There is no shared include/template system. Any nav changes must be manually applied to all pages.

5. **Frame path helper** — If frames ever need to move, update the `framePath()` function in `index.html`. Currently: `frames/frames{n}/frames{n}{###}.jpg`.

---

## Pages Summary

| File | Purpose |
|---|---|
| `index.html` | Homepage — scroll animation, 3 panels, end card |
| `all-projects.html` | Full project grid, dynamically rendered from `projects-data.js` |
| `project.html` | Individual project detail, loaded via `?id=` param |
| `resume.html` | Resume / experience page |
| `contact.html` | Contact form |
| `admin.html` | Visual CMS — edit projects, export `projects-data.js` |
| `projects-data.js` | All project data — edit directly or via `admin.html` |
