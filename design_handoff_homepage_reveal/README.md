# Handoff: Homepage — scroll-reveal rhythm + layout options + CTA

## Overview
Reveal-on-scroll motion system for Natthapath Damrongsri's portfolio homepage, tuned **subtle, for recruiters / hiring managers** (fast scanners). The package also carries three homepage **layout directions** and four **CTA treatments** to choose from. The star deliverable is the **reveal rhythm** — how text and elements enter as the user scrolls, to control reading pace without ever hiding content from people or crawlers.

## About the Design Files
The files in this bundle are **design references created in HTML** — interactive prototypes showing intended look and behavior, **not production code to copy directly**. The two `.dc.html` files are authored in a small in-house component runtime (`support.js`); treat them as a spec, not a dependency.

The task is to **recreate these designs in the target codebase's existing environment** (the portfolio is plain HTML/CSS/JS today — see the original `uploads/` files: `index.html`, `style.css`, `scroll.js`). Reuse its established patterns: the existing CSS custom properties, the `[data-reveal]` IntersectionObserver hook already in `scroll.js`, and the editorial type system. Do **not** introduce a framework — this is a static site.

## Fidelity
**High-fidelity.** Colors, type, spacing, timing and easing are final values, taken from the live portfolio stylesheet. Recreate the motion timing exactly; layout/CTA are decisions still open (see "Open decisions").

---

## The reveal system (primary deliverable)

### Principle
Content is **never permanently hidden**. Reveal applies to the *entrance* of an element, not to whether it exists. No-JS, `prefers-reduced-motion`, and any stalled animation must all leave the page fully visible. This keeps it accessible and SEO-safe — important for a portfolio that recruiters and search crawlers read.

### Three levels (user-selectable in the prototype; ship ONE)
| Level | Behavior | Use when |
|---|---|---|
| **Off** | No motion. Everything visible immediately. | Accessibility baseline; auto-selected for `prefers-reduced-motion`. |
| **Subtle** | Each *section* fades up as a single block. No per-child offset. | **Recommended default for recruiters** — calm, almost invisible, no reading delay. |
| **Stagger** | Within a section, children enter in sequence (label → text → image), guiding the eye top-down. | When you want to deliberately pace reading on key sections. Use sparingly. |

### Exact timing & easing
- **Trigger line:** a section begins revealing when `element.getBoundingClientRect().top < window.innerHeight * 0.92` (just before it fully enters the viewport).
- **Per-element tween:** duration **620ms**, easing **easeOutCubic** = `1 - Math.pow(1 - t, 3)`.
  - `opacity`: 0 → 1
  - `transform`: `translateY(12px)` → `translateY(0)` (Subtle uses `8px`; hand-note uses `10px`)
- **Stagger offset between children:** **95ms × child index** (0ms, 95ms, 190ms, 285ms…), in DOM order.
- **Hand-note (`[data-reveal-note]`):** trails its hero — delay **460ms** in Stagger, **150ms** in Subtle.

### Recommended production implementation
The portfolio already has IntersectionObserver in `scroll.js` — **prefer that in production** (the prototype only avoids IO because the preview sandbox suppresses IO callbacks; a real browser does not). Pattern:

```js
// prefers-reduced-motion → do nothing; CSS leaves content visible by default.
const mq = matchMedia('(prefers-reduced-motion: reduce)');
if (!mq.matches) {
  // hide only once JS confirms it can animate:
  document.documentElement.classList.add('js-reveal');

  const STAGGER = 95;   // ms between children
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const sec = en.target;
      const items = sec.matches('[data-stagger]')
        ? [...sec.querySelectorAll('[data-reveal-item]')]
        : [sec];
      items.forEach((el, i) => { el.style.transitionDelay = (i * STAGGER) + 'ms'; el.classList.add('in'); });
      io.unobserve(sec);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

  document.querySelectorAll('[data-reveal-section]').forEach((s) => io.observe(s));
}
```
```css
/* Only hides when JS is present AND motion is allowed */
.js-reveal [data-reveal-section],
.js-reveal [data-stagger] [data-reveal-item] {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity .62s cubic-bezier(.215,.61,.355,1),
              transform .62s cubic-bezier(.215,.61,.355,1);
}
.js-reveal [data-reveal-section].in,
.js-reveal [data-stagger] [data-reveal-item].in { opacity: 1; transform: none; }
```
> `cubic-bezier(.215,.61,.355,1)` is the CSS equivalent of easeOutCubic.

> NOTE on the prototype's JS: in `Reveal Rhythm — Homepage.dc.html` the reveal runs on a persistent `requestAnimationFrame` loop with a manual `getBoundingClientRect` check and a JS-driven tween (`tweenIn`), **purely to work around the preview sandbox** which freezes CSS transitions and never fires IntersectionObserver. In a real browser, the IO + CSS approach above is simpler and preferred. Match its *numbers*, not its mechanism.

### What gets which attribute
- `[data-reveal-section]` — every section/row that reveals as a unit (hero, meta strip, each work row, CTA block).
- `[data-reveal-item]` — direct children that should stagger inside a section (only meaningful in Stagger).
- `[data-reveal-note]` — the handwritten margin annotation (trails the hero).

---

## Screens / Views

### Homepage (single scrolling page)
Max content width **780px**, centered, **32px** side padding. Background `#F4F2EE`, text `#1C1B1A`, font Inter. (The control bar at the top of the prototype is a **demo harness only — do not ship it.**)

**1. Nav** — flex row, space-between, baseline-aligned. Left: name `Inter 500 / 14px`. Right: `Work · Approach · About · Contact` `Inter 400 / 14px`.

**2. Hero** — three layout variants (see Open decisions):
- *Original:* left-aligned. Eyebrow `Inter 500 / 13px`, uppercase, `.09em`, `#565450`. Headline `Newsreader 300 / 56px`, line-height 1.05, `-.018em`, max-width 600px. Lead `Inter 400 / 18px / 1.65`, max-width 540px. Button (see CTA #1). Hand-note in right margin: `Caveat 500 / 21px`, color `#34404C`, `rotate(-3deg)`.
- *Scannable:* same hero + a 3-column **meta strip** (`Reach / Surfaces / Domains`) — 1.5px top rule `#1C1B1A`, 1px bottom rule `#D8D5D0`, cells split by 1px `#E7E4DF`. Labels `Inter 500 / 10px` uppercase `#9A958D`; values `Inter 400 / 15px`. Values are pulled from real content — no invented metrics.
- *Editorial:* hero centered, max-width 680px.

**3. Work index — "Situations I've worked through"** (`Inter 500 / 12px` uppercase `#565450`):
- *Row style (Original/Scannable):* grid `40px / minmax(0,1fr) / 200px`, 36px gap, 42px vertical padding, 1px `#D8D5D0` row borders. Number `Newsreader 300 / 22px`; headline `Newsreader 400 / 27px` underlined `#D8D5D0` offset 6px; meta `Inter 500 / 11px` uppercase; desc `Inter 400 / 15px / 1.6` `#565450`; cover thumb 16:10; CTA right-aligned underlined.
- *Zig-zag (Editorial):* 2-col `1fr 1fr`, 44px gap, image alternates side via `order`, cover 4:3, headline `Newsreader 400 / 29px`.
- Three projects: CDP Segment Builder, 3BB Member migration, Counter Service POS. (Copy is in the prototype `renderVals()`.)

**4. CTA block** — four treatments, 2×2 grid, 18px gap, cards `#FCFBF9` with 1px `#E2DED7` border, 2px radius, ~34px padding:
1. **Quiet button** — `Newsreader 300 / 26px` prompt + outline button `Inter 500 / 13px` uppercase, 1px `#1C1B1A` border, 15px×24px padding. *(= current site direction, tightened.)*
2. **Availability signal** — green dot `#1F6B3B` + "Open to product design roles" + email link.
3. **Question-led** — "Got a problem that won't sit still?" + solid dark button (`#1C1B1A` bg, `#F4F2EE` text).
4. **In-character** — dark card `#34404C`, light text, a `Caveat` handwritten line, outline button. Carries the annotation signature into the close.

---

## Open decisions (for the user, not the dev to invent)
- **Layout:** Original vs Scannable vs Editorial — not yet chosen. `Layout Options — Homepage.dc.html` shows them side by side.
- **CTA:** one of the four above.
- **Reveal level to ship:** Subtle recommended.
Implement whichever the user selects; the prototype lets them toggle all combinations.

## Design Tokens
- **Colors:** ink `#1C1B1A` · muted ink `#565450` · faint `#9A958D` · hairline `#D8D5D0` · light hairline `#E7E4DF` / `#E2DED7` · page bg `#F4F2EE` · card bg `#FCFBF9` · ink-card `#34404C` (text on it `#F4F2EE`, accent `#9DB0C4`) · annotation blue `#34404C` · status green `#1F6B3B`.
- **Type:** Newsreader (serif display, weights 300/400/500) · Inter (UI/body, 400/500/600) · Caveat (handwritten annotation, 500). Match the existing `style.css` stack first if it differs.
- **Spacing rhythm:** content width 780px; side pad 32px; section gaps ~48–96px; row pad 42px.
- **Motion:** 620ms · easeOutCubic / `cubic-bezier(.215,.61,.355,1)` · 95ms stagger step · translateY 8–12px · trigger at 92% viewport.
- **Radius:** 2px. **No shadows** in content (cards use borders, not elevation).

## Assets
- **Fonts:** Google Fonts — Newsreader, Inter, Caveat.
- **Project covers:** placeholders only in the prototype (`cover.png` hatched boxes). Real case-study cover images need to be supplied — they 404'd in the source. Drop them into the work thumbnails (16:10 in rows, 4:3 in zig-zag).
- No icons used (the green status dot is a CSS circle).

## Files
- `Reveal Rhythm — Homepage.dc.html` — the reveal prototype + layout switcher + CTA gallery (primary reference). Reveal logic is in its `<script>` logic class (`tweenIn`, `checkReveal`, `reset`).
- `Layout Options — Homepage.dc.html` — the three layout directions side by side (pannable canvas).
- `support.js` — the in-house runtime the `.dc.html` files load. Reference only; not needed in production.
- Original site (in the conversation's `uploads/`, not bundled): `index.html`, `style.css`, `scroll.js` — the real codebase to implement into.
