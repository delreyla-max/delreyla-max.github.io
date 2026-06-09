# gyip.com — Portfolio Brief for Apple Applications

**Prepared as a hiring-manager review. Hand this to Claude Code to implement.**

## Context

Garman is applying to two Apple roles:

1. **Associate Creative Director, Design — Apple Ads (Marketing)** — `200663704-0670`. Wants 12+ yrs, art direction & visual design *for the web*, marketing major global brands, leading a multidisciplinary team, running video/photo shoots end-to-end, connecting design decisions to insights and business goals.
2. **Product Designer, Wallet & Apple Pay (Design)** — `200654821-0670`. Wants 8+ yrs *hands-on product/UI design across iOS, watchOS, macOS*, Sketch/Keynote, payments/fintech, deep native-platform craft, prototypes, accessibility.

### Fit reality (read this first)

- **Apple Ads ACD = strong fit.** Garman's brand/creative-director background (RAPP, Toyota/Nissan global campaigns, team leadership, generative AI, experiential) maps almost 1:1. The site's brand-showcase format works *for this role*. **Optimize the site primarily for this.**
- **Wallet Product Designer = stretch.** Garman's center of gravity is brand and creative direction; product work is web (Storyfire, Toyota.com tools, Mr. Cooper portal), not native iOS. The current homepage actively mis-signals him as "brand CD, not product designer." Only pursue with the dedicated changes in **Section B**.

**Do NOT list Apple as a past client anywhere.** It's verifiable internally and reads as padding. Toyota / Nissan / Disney / Google are real and strong.

---

## Section A — Do for BOTH roles

Priority order. Each item: the problem → the change → how we know it's done.

### A1. Make the work reachable immediately
- **Problem:** The scroll-jacked truck animation hijacks scroll, runs long, and preloads 660 frames before anything is usable. Hiring managers (often on mobile, ~30 sec) bounce before reaching the project cards.
- **Change:** Keep the animation as an *optional* flourish. Add a persistent, visible path to the work — a "View Work" / skip control on load — and let a single scroll or click reach the project grid. Shorten the scrub distance so the full sequence isn't required to progress.
- **Done when:** From a cold load, a first-time visitor reaches real project cards in ≤1 click or ≤1 scroll gesture, on desktop and mobile.

### A2. Fix the above-the-fold value proposition
- **Problem:** "A brand without a story is just a name" is a mood, not positioning. No name, level, years, or marquee clients without effort.
- **Change:** Above the fold show: **name**, a **one-line positioning** (e.g. "Creative Director — brand, art direction & generative AI for global brands"), the **strongest real client logos/wordmarks** (Toyota, Nissan, Disney, Google), and a clear nav to Work / Resume / Contact.
- **Done when:** A stranger can state who he is, his level, and three real clients within 8 seconds of load, no scrolling.

### A3. Add depth to case studies (highest hiring-leverage)
- **Problem:** Projects are title + 2 tags + a glamour shot. Both JDs hire on portfolio *thinking* ("connecting design decisions to insights"; "demonstrating design thinking and problem solving"). Thumbnails alone fail at Apple.
- **Change:** Give each flagship project a real case-study structure: **Problem → Role → Approach & key decisions → Outcome (quantified)**. Use the rewritten copy in **Section C**.
- **Done when:** Top 3 projects (Toyota AI Pipeline, Nissan, Storyfire) each have problem, role, process, and a measurable outcome visible on the project page.

### A4. Accessibility (Apple will notice)
- **Problem:** Canvas scroll-jack, low-contrast subtitle, no keyboard/screen-reader path. Both JDs foreground accessibility ("a fundamental human right"; "inclusive and accessible products"). Accessibility failures on your *own* portfolio are a credibility hit.
- **Change:** Keyboard navigation throughout; a working skip link to the content; semantic landmarks/headings; WCAG-AA contrast on all text; honor `prefers-reduced-motion` so the animation does not auto-run for users who opt out (show a static hero + reachable work instead).
- **Done when:** Site is fully navigable by keyboard, passes an automated a11y scan (e.g. axe) with no critical issues, and `prefers-reduced-motion: reduce` disables the scroll-jack.

### A5. Surface metrics & business outcomes
- **Problem:** Strong numbers are buried in the resume, absent from the site. ACD JD: "solving business problems… distill data and measurement."
- **Change:** Pull quantified outcomes onto project pages and (selectively) the homepage: "millions of monthly users," "100+ screens," "thousands of parts without a reshoot," Nissan system "live for 3 years." Where a real number is missing, insert a `[FILL: metric]` placeholder — never fabricate.
- **Done when:** Each flagship case study leads or closes with at least one concrete, true outcome.

### A6. Performance & mobile
- **Problem:** 660-frame preload is heavy on anything but fast wifi; mobile is where managers often open links.
- **Change:** Lazy/progressive frame loading or a lighter hero on mobile; compress assets; ensure work is reachable fast on a phone.
- **Done when:** Homepage is interactive and work is reachable within a few seconds on a throttled mobile connection.

---

## Section B — Only if pursuing Wallet & Apple Pay

The product role needs a different front door. If targeting it:

- **Lead with product, not brand.** Create a product-design entry (a dedicated page or a clearly product-first section) that foregrounds Storyfire, Toyota.com / Digital Garage, and the Mr. Cooper portal — not the truck film.
- **Show the rigor product teams hire on:** user flows, information architecture, iteration/wireframes-to-final, and systematic UI (type scale, color, components) — not just final beauty shots.
- **Demonstrate native-platform fluency.** Apple cares about iOS/watchOS/macOS and HIG. Include at least one case study that shows platform-aware thinking and accessibility. If the work is web-only, say so honestly and frame the transferable product thinking.
- **Reframe the positioning line** on this entry to "Product / UX Designer" language rather than "Brand Design + Creative Director."
- **Reality check:** without genuine native product depth, this remains a stretch. Spend the larger effort on the Apple Ads application.

---

## Section C — Rewritten case-study copy (paste-ready)

Grounded in facts already on the resume. `[FILL: …]` = needs a real number before publishing; do not invent.

### Toyota AI Pipeline — *Associate Creative Director, RAPP*
**Problem.** Toyota's Parts & Accessories catalog spans thousands of SKUs that each need seasonal lifestyle imagery — an impossible volume to photograph and reshoot campaign after campaign.

**Approach & decisions.** Built a proprietary generative-AI pipeline that converts raw engineering sketches into photoreal lifestyle product imagery. Defined the system end-to-end — input prep, model/compositing workflow (Adobe Firefly), and quality controls — so non-specialists could produce on-brand assets at scale. Led a small team and set the creative bar across digital, direct, and in-person touchpoints.

**Outcome.** Enabled seasonal campaigns across thousands of parts **without a single reshoot**, compressing production time and cost from `[FILL: weeks → days]` and `[FILL: % cost reduction]` while holding brand consistency.

**Tags:** Generative AI · Art Direction · Production Pipeline · Compositing

---

### Nissan Global Rebrand — *Associate Creative Director, TBWA\Chiat\Day*
**Problem.** Nissan needed one global brand system that let each vehicle keep its own personality while staying unmistakably Nissan across every market and surface.

**Approach & decisions.** Led creative for the "Innovation for All" platform and built the visual identity system + comprehensive style guide deployed across corporate, retail, and experiential touchpoints. The color-grid system became the brand's visual signature and gave regional teams a flexible-but-consistent toolkit.

**Outcome.** The system stayed live as Nissan's visual signature for **three years** across `[FILL: # markets]` markets and multi-channel vehicle launches.

**Tags:** Brand Design · Visual Identity · Design System · Global

---

### Storyfire — *Solo Designer*
**Problem.** A creator platform for collaborative content (writing, video, blogs) with a "Blaze" token economy needed a coherent product designed from zero across web and mobile.

**Approach & decisions.** Sole designer end-to-end: IA, user flows, and UI for **100+ screens** across web and native app. Designed the token-economy mechanics into the experience and built a consistent component and type system so the product could scale.

**Outcome.** Delivered a full product design system spanning `[FILL: # core flows]` flows and 100+ screens, taking the platform from concept to a buildable, consistent experience. `[FILL: any launch/engagement metric]`

**Tags:** Product Design · UI/UX · Design System · Web & App

---

## Section D — Resume quick tweaks

- **Tailor the title line per role.** Current "Brand Design | Creative Director | Generative AI" is ideal for Apple Ads. For Wallet, lead with "Product / UX Designer."
- **Cut buzzwords for precision.** Replace lines like "low ego and a bias toward action" and "culturally resonant" with concrete outcomes; Apple favors specific over aspirational.
- **Promote the product-relevant bullets** (Toyota.com redesign serving millions, Digital Garage, Storyfire 100+ screens) near the top when applying to Wallet.
- **Keep two résumé variants** — one Apple-Ads-weighted (brand/AD), one Wallet-weighted (product/UI) — rather than one generic file.

---

## Suggested implementation order

1. A4 accessibility + A1 reachable work (these are table stakes and currently failing).
2. A2 above-the-fold positioning + A5 metrics.
3. A3 + Section C case-study depth.
4. A6 performance/mobile pass.
5. Section B only if committing to the Wallet application.

---

## Section E — Homepage Flow Spec (animation rebuild)

Goal: keep the Toyota truck animation, but stop it from trapping the user or burying the work. Replace the 660-frame scroll-jack with a short autoplay hero + one short scrub into the strongest project, then static, scannable work.

**Global rules**
- 24fps throughout (keeps scrub speed consistent; matches current export).
- The animation never blocks access to content. Normal scrolling always works.
- One focal point at a time — text, explosion, and project panel take turns; they never max out simultaneously.
- Honor `prefers-reduced-motion: reduce` everywhere (see fallback at the end).

### Format split (this is what keeps it light)
- **Autoplay beats → a single compressed video** (H.264/HEVC `.mp4` + `.webm`). A clip that only plays should never be 80+ individual JPGs.
- **Scrubbed beats → numbered JPG sequence** (same dimensions as today). Only the part the user actually drags needs frames.

### Beat-by-beat

**Beat 1 — Autoplay hero (no scroll required)**
- Truck drives in and explodes; plays automatically + muted on load.
- Length: **84 frames (3.5s) @ 24fps.** Acceptable range 72–96.
- Format: **video file**, not a sequence.
- Choreography (so headline and explosion don't fight):
  - Frames 0–24: truck establishing/calm. Headline reveals cleanly, owns the screen.
  - Frames 24–60: blast builds; headline lifts and shrinks toward a small top-left corner lockup.
  - Frames 60–84: explosion peak, unobstructed. Headline is now a small persistent mark.
- After it plays: hold on the final frame (or a subtle ~12-frame loop). The explosion's settle is the visual bridge into Beat 2.

**Beat 2 — Toyota AI reveal (first scroll)**
- On first scroll, a short scrub resolves the settled explosion into the Toyota AI panel — the strongest, most role-relevant work, so it leads.
- Length: **48 frames (2s).** Panel fades in over the last ~12 frames.
- Scroll budget: ~8px/frame ≈ ~380px scroll = one comfortable wheel flick.
- Format: **JPG sequence.**
- When the panel rises: drop background energy — video/last frame goes calm and darkens behind a scrim; headline already reduced to corner mark; the panel is the single focal point.

**Beat 3 — Nissan & Storyfire (pick one path)**
- **Recommended (lean):** stop the film here. Transition to a clean static grid of cards (Nissan, Storyfire, + the rest). **0 additional frames.**
- **Optional (keep scrubbing):** give each its own short segment, **~40 frames (1.7s) each**, settling on its panel. Do not exceed this or the "too long" problem returns.

**Beat 4 — Work index + contact**
- Static. Project cards, All Projects, contact. No frames.

### Frame budget summary
| Beat | Format | Frames | ~Time |
|---|---|---|---|
| 1 — Autoplay hero | Video | ~84 | 3.5s |
| 2 — Toyota AI scrub | JPG seq | ~48 | 2.0s |
| 3 — Nissan (optional) | JPG seq | ~40 | 1.7s |
| 3 — Storyfire (optional) | JPG seq | ~40 | 1.7s |
| **Total (lean)** | | **~132** | |
| **Total (full scrub)** | | **~212** | |

Down from 660 frames today (~70–80% cut), with the heaviest beat now a small video instead of 152 JPGs.

### Headline
- Primary (short, scannable, identity-first): **"Garman Yip — Creative Director. Brand, art direction & generative AI."**
- Optional kicker (only if kept, smaller/secondary): "A brand without a story is just a name."
- Do **not** ship a wordless hero — the reviewer must know who he is within ~2 seconds.
- Legibility: keep headline text out of the busiest explosion zone; add a subtle scrim/gradient behind text; corner lockup persists once the hero plays.

### Reduced-motion fallback (`prefers-reduced-motion: reduce`)
- No autoplay, no scrub. Show a single static hero frame (the strong post-explosion or establishing still).
- Headline + positioning + client wordmarks visible immediately.
- Toyota AI panel and the rest of the work reachable by normal scroll, as plain content.
- This path must be fully keyboard-navigable and screen-reader friendly (ties to A4).

### Acceptance criteria
- Cold load: hero plays once (≤4s) and the visitor knows who Garman is and sees marquee clients without scrolling.
- One scroll reaches the Toyota AI work; normal scrolling is never hijacked.
- With reduced-motion on, the animation does not run and all work is still reachable.
- Total homepage frames ≤ ~212; autoplay hero delivered as a compressed video.
