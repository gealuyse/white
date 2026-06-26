# Note — 2026-06-26

## Done

**1. Adopted the `test-js` idea (approach 3): hand annotations that draw on scroll.**
Took B/C/D from `test-js`, dropped A (section content-fade).
- `index.html` — new hero copy (`UX/UI Product Designer · Bangkok`, dropped hero-proof),
  CTA button `Start a conversation`, + hero hand note + scroll cue. `data-reveal` kept
  only on `.hero` and `#easier` (the two annotation hosts).
- `style.css` — removed the content-fade block; kept annotation-draw CSS + `.btn-contact`.
- `scroll.js` — new, 28 lines, no deps: only toggles `.in-view`; CSS does the drawing.
  No JS, reduced-motion → annotations show already-drawn, page stays static.

**2. Synced the docs to the new reality.**
- `portfolio-spec.md` Part 1 Tech facts — "No JS anywhere" → "keep scripting to the bare
  minimum" (one script only). Mechanism + double reduced-motion gating moved under
  "The component". "Current state" now lists 3 built annotations.
- Part 3 — the PORTFOLIO-UPDATE-NOTES draw-on-scroll mechanism logged as "partly revived".
- `README.md` — three "no JS" claims updated.
- Project order heading softened: `(locked)` → `(current)`.

**3. Reviewed Part 1 rules** — Project order, Tech facts (shortened, minimised the word
"JS"), Layout rhythm: all kept / current.

**4. Read all 4 pages as a reader** — per-section reading time + emotion. Signature voice:
*capable + honest + restrained*. CDP is the heaviest page (~5 min vs ~3); all pages share
one skeleton (setup → locked → did → differently → shipped).

**5. Built a trial of the new case page** — `cdp-editorial.html` (Editorial Spread, from
`design_handoff_portfolio_refresh/reference/`). Self-contained, real CDP copy + images,
2 decision spreads with color-wake on hover. `cdp.html` left untouched for comparison.
Rendered + screenshotted desktop. Uses 2 decisions = matches the planned CDP 3→2 trim.

## Pending decisions

- **Scroll cue** — puts Landing at 3 marks (budget is ~1–2); keep or cut?
- **Weight mark** — hero note's double-underline de-facto decides the open "Weight
  execution" question; confirm or treat as decoration.
- **Editorial direction** — roll out to `style.css` + 3BB + POS + home (Gallery), or adjust
  first (mobile color-wake has no hover; "What was locked" + full reflection dropped;
  figure 4:5 crop vs the 16:9 figure rule)?
- **CDP 3→2 + POS "What was locked"** — agreed but not yet applied to the live pages.
