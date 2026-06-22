# Natthapath Damrongsri — Portfolio

Static portfolio. Plain HTML + CSS, no build step, no framework, **no JavaScript**.
Open `index.html` in a browser to view.

> Live: **https://gealuyse.github.io/portfoilo/** (once the first deploy finishes).

## Stack
- HTML5 + one shared `style.css` — fully static, no JS
- Fonts: Newsreader (serif headings) · Inter (UI/labels) · Caveat (handwritten notes)
- Target: modern evergreen browsers (CSS uses box-decoration-break, data-URI SVG, `vector-effect`)

## Files
| Path | What |
|---|---|
| index.html | Landing — hero, work, about, contact |
| cdp.html | Case study 01 — Customer Data Platform |
| 3bb-member.html | Case study 02 — 3BB Member |
| counter-service-pos.html | Case study 03 — Counter Service POS (short) |
| naaraan.html | Project 04 — Naaraan — **reserve case only** (kept, not a primary case study) |
| style.css | All styles, shared across pages |
| assets/projects/<slug>/ | cover.png + screen_proof.png used by the site |
| docs/portfolio-spec.md | **Single source of truth** — rules + page copy + history |
| docs/archive/ | Superseded source docs + stale data (provenance) |
| docs/ref/ | Reference images |

## Project order (locked)
CDP (01) → 3BB (02) → POS (03) → Naaraan (04, reserve)

## Annotation system — definition (stable)
Single ink tone (`#34404C`) handwritten margin note (Caveat). CSS-only, static.
- The old TWO-COLOR blue/red system is DEPRECATED — do not reintroduce it.
- A note = anchor (hand-drawn SVG underline, never `text-decoration`) + connector
  line + one short sentence. One sentence, anchored to the work, says WHY not WHAT.
- Component in `style.css` (block "HANDWRITTEN — reasoning mark"):
  `.anno-anchor` inside a `position:relative` host + sibling `.anno-mark`
  → `.anno-conn` (connector) + `.anno-note` (Caveat).
- Only one mark is live today (the demo on `index.html`). Full rules + budget →
  `docs/portfolio-spec.md`.

## Reference
Everything — current rules, all page copy, and the project history — lives in one file:
**`docs/portfolio-spec.md`**. Older brief / content / spec / notes are in `docs/archive/`
as provenance (superseded; the spec wins).

## Adding / editing a project
1. Images → `assets/projects/<slug>/cover.png` + `screen_proof.png`
2. Page → copy an existing case study as a template, save as `<slug>.html`
3. Card + link → add the project card in `index.html` (respect the locked order)
4. Copy → add the page text to `docs/portfolio-spec.md` (Part 2)
5. Nav → update the prev/next links in the adjacent case-study pages

## Deploy
**GitHub Pages**, repo `gealuyse/portfoilo`. No custom domain.
- Pages source: branch `main`, folder `/ (root)`. `git push origin main` triggers the build.
- `_config.yml` excludes `docs/` and `README.md` from the published site. Do **NOT**
  add `.nojekyll` — that disables Jekyll and the excludes stop working (exposes `docs/`).
- URL: `https://gealuyse.github.io/portfoilo/`.

## For AI agents
- Edit HTML/CSS directly — nothing to compile, no JS to wire up.
- One reference: `docs/portfolio-spec.md`. If it conflicts with the code, the code
  wins (fix the doc). Treat everything in `docs/archive/` as superseded.
- Keep the name "Natthapath Damrongsri" (older drafts use placeholder "G").
- Do NOT reintroduce: blue/red two-color annotations · Fraunces/DM Sans fonts ·
  GSAP / any JS motion · the "pencil-writing trace" (it never shipped).

## Status & open issues
- [ ] Annotations barely started: only ONE mark exists site-wide (the `index.html`
      demo). Add more per the per-page budget in the spec.
- [x] Connected to GitHub (`gealuyse/portfoilo`); `git push` deploys. No custom domain.
- [x] SEO: canonical / og:url / og:image set to `https://gealuyse.github.io/portfoilo/`; `og.png` added.
- [ ] Finalize About + Contact copy.

## License
© Natthapath Damrongsri. All rights reserved. Code and content in this repository
are not licensed for reuse without written consent. See `LICENSE`.
