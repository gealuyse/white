# Design Spec — Editorial Layout + Reveal System
**Date:** 2026-06-27

---

## Scope

Two parallel changes applied to the whole site:

1. **Editorial layout** — Port `cdp-editorial.html` styles into `style.css`; rebuild all 3 case-study pages in the editorial structure; delete the trial file.
2. **Reveal system** — Sequential reveal on `index.html` (C+A: text instant, decor stagger on load, sections reveal on scroll) and scroll-triggered reveals on all project pages (spreads reveal one-by-one as the reader scrolls).

---

## Part 1 — Editorial Layout

### CSS strategy

Remove the existing case-study block in `style.css` (`.project-header`, `.project-title`, `.project-intro`, `.project-result`, `.project-cover`, `.proj-meta`, `.proj-sect`, `.decisions`, `.decision`, `.d-title`, `.d-row`, `.d-key`, `.d-val`, `.screen-item`, `.screen-link`, `.screen-caption`, `.case-fig`, `.fig-lead`, `.reflection` as case-study variant). Replace with editorial classes ported from `cdp-editorial.html`.

Keep: `.case-nav`, `.back-link`, `.locked-list`, `.sect-label` (reused on index), `.reading`.

New editorial classes to add to `style.css`:

| Class | Purpose |
|---|---|
| `.ed-nav` | Case-page nav: name left, `← All work` right |
| `.ed-title-page` | Label + H1 + intro block |
| `.ed-stats` | 3-cell outcome strip, thick top border |
| `.ed-cover` | 16:9 cover image |
| `.ed-setup` | Centered setup text, max-width 62ch |
| `.ed-spread` | 2-col decision grid (text + figure) |
| `.ed-spread.flip` | Figure left, text right (alternating) |
| `.ed-fig` | Figure well: 4:5 desktop, 16:10 mobile; desaturated at rest, full on hover |
| `.ed-note` | Handwritten `.note` in Caveat, `#34404C` |
| `.ed-reflection` | Centered pull quote |

Max-width for `.wrap` on editorial pages: `1128px` (matches `cdp-editorial.html`). Index stays `1240px`.

Two wraps in one `style.css`: `.wrap` keeps `1240px`; add `.wrap-ed` at `1128px` for case pages.

### Page structure (all 3 case pages)

```
<nav class="ed-nav">            ← name | ← All work
<section class="ed-title-page"> ← label · h1 · intro
<div class="ed-stats">          ← Outcome · Timeline · Role (3 cells)
<figure class="ed-cover">       ← cover.png 16:9
<section class="ed-setup">      ← lead paragraph + body copy
<section class="ed-spread">     ← decision 01: text left / fig right
<section class="ed-spread flip"> ← decision 02: fig left / text right
[...more spreads if needed]
<section class="ed-reflection">  ← pull quote + "What I'd do differently"
<nav class="case-nav">           ← prev | next (existing class, kept)
```

"What was locked" and "What it shipped" sections are **dropped** from the editorial layout — their content is absorbed into the setup or the spreads. The editorial format is deliberately shorter.

### Content mapping per page

**`cdp.html`** (currently 3 decisions → editorial 2 spreads):
- Spread 01 (text left): "A workspace for layered audience logic" → `fig-1-1.png` · note: *"readable first, complete second"*
- Spread 02 (fig left): "Search that shows what you're choosing" → `fig-2-2.png` · note: *"verify before you commit"*
- Decision 3 (specs/handoff) **dropped entirely** — `cdp-editorial.html` already uses 2 spreads only; the handoff decision is implicit in the outcome stat "Dev- & QA-ready specs"
- Reflection quote: *"The riskiest moment in this tool is invisible — an empty campaign that goes out to nobody."*
- Stats: Outcome "Dev- & QA-ready specs" | Timeline "3 months · 2024" | Role "UX/UI Designer"

**`3bb-member.html`** (2 decisions → 2 spreads):
- Spread 01 (text left): "Map current vs. legacy before touching anything" → `fig-2-1.png` · note: *"restraint is a design decision"*
- Spread 02 (fig left): "Treat errors as first-class screens" → `fig-1-1.png` · note: *"edge cases are where trust is built"*
- Reflection quote: *"Map the inherited-vs-contribution boundary on day one."*
- Stats: Outcome "Live — Play Store & App Store" | Timeline "2024–Present" | Role "UX/UI Designer"

**`counter-service-pos.html`** (2 decisions → 2 spreads):
- Spread 01 (text left): "Improve hierarchy without moving the controls" → `screen_proof.png` · note: *"better, without making anyone relearn"*
- Spread 02 (fig left): "Build layout rules for two screen realities" → `fig-2-1.png` · note: *"two profiles, one constraint made visible"*
- Reflection quote: *"This project needs proof. The entire design rests on one claim."*
- Stats: Outcome "Review-approved spec" | Timeline "2023" | Role "UX/UI Designer"

### Figure aspect ratio

Desktop: `4/5` portrait (magazine crop, `object-fit: cover`). Accepts top-crop on landscape UI screenshots — intentional editorial feel.
Mobile (≤860px): `16/10`, figure moves `order: 2` below the text column.

### Cleanup

Delete `cdp-editorial.html` after all 3 pages are rebuilt.

---

## Part 2 — Reveal System

### Guiding rule (C+A)

**Text is never hidden.** Body copy, headings, nav — instant. Only decoration, images, and UI affordances (button, annotation) stagger in. This means no content is gated behind JS; with reduced-motion or no JS the page is the complete static document.

### index.html — hero stagger (CSS-only, on page load)

Gate with `.js-reveal` on `<html>` (already done). Add `animation` keyframe `fade-up` to `style.css`:

```
@keyframes fade-up { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:none; } }
```

Elements and their delays (all use `animation: fade-up .5s ease both`):

| Element | Selector | Delay |
|---|---|---|
| CTA button | `.js-reveal .hero .btn-contact` | 300ms |
| Hero annotation note | `.js-reveal .hero .anno-hero` | 500ms |
| Scroll cue note | `.js-reveal .hero .anno-scroll .anno-note` | 600ms |
| Scroll cue arrow draw | handled by existing CSS in `.js-reveal .hero.in-view` | 700ms (after in-view) |

Nav, role label, thesis H1, hero paragraph — **no animation, instant.**

### index.html — sections below fold (scroll-triggered via `scroll.js`)

Add `data-reveal` to: `#easier` (already has it), each `.proj-row` in `#work`, `#approach` section, `#habits`, `#about`, `#contact`.

For `.proj-row` stagger: add `data-reveal-delay` attribute (`0`, `100`, `200` ms) and read it in `scroll.js`:

```js
entry.target.style.animationDelay = (entry.target.dataset.revealDelay || 0) + 'ms';
```

CSS pattern (same for all scroll-revealed elements): element starts `opacity:0` via `[data-reveal]:not(.in-view)` selector — guarantees no flash if JS loads late. `.in-view` applies the `fade-up` animation. Gated by `.js-reveal` so without JS elements are fully visible.

### Project pages — scroll-triggered (scroll.js, same observer)

Add `data-reveal` to: `.ed-setup`, each `.ed-spread`, `.ed-reflection`, `.case-nav`.

Stats cells stagger on load (same as hero CTA, CSS-only):
- `.ed-stats .cell:nth-child(1)` → delay 200ms
- `.ed-stats .cell:nth-child(2)` → delay 300ms
- `.ed-stats .cell:nth-child(3)` → delay 400ms

Cover image: `.ed-cover` → fade-up delay 450ms (load stagger, CSS-only).

Handwritten note (`.ed-note`) inside each spread: starts `opacity:0`. When parent `.ed-spread` gets `.in-view`, `.ed-note` transitions to `opacity:1` with `transition-delay: 400ms`.

### scroll.js changes

Current: observes `[data-reveal]`, adds `.in-view`.

Add: reads `data-reveal-delay` on each element, sets `el.style.animationDelay` before adding `.in-view`. No other changes — CSS does the rest.

### Reduced-motion

All animations are gated by `@media (prefers-reduced-motion: no-preference)`. With reduced-motion: elements are visible immediately, no animation. Already the pattern for annotation draws — extend to all new rules.

---

## Files changed

| File | Change |
|---|---|
| `style.css` | Remove old case-study block · Add `.wrap-ed`, `.ed-*` editorial classes · Add `fade-up` keyframe · Add hero stagger delays · Add scroll-reveal CSS for project pages |
| `scroll.js` | Add `data-reveal-delay` support (3 lines) |
| `index.html` | Add `data-reveal` to sections below fold · Add `data-reveal-delay` to `.proj-row` elements |
| `cdp.html` | Full rebuild in editorial structure |
| `3bb-member.html` | Full rebuild in editorial structure |
| `counter-service-pos.html` | Full rebuild in editorial structure |
| `cdp-editorial.html` | Delete (trial → promoted to production) |

---

## Out of scope

- No changes to `og.png`, `_config.yml`, or any project image files
- Annotation budget / scroll cue "keep or cut" decision (from `note.md`) — not resolved here, scroll cue stays
- Mobile nav `.nav-approach` hide — unchanged
