# Portfolio — Spec & Copy (single source of truth)

> The one reference for this site: current rules + page copy + history.
> It replaces the separate brief / content / voice-spec / notes files
> (now under `archive/` as provenance). If anything here conflicts with an
> archived doc, **this wins**. If it conflicts with the actual code, the
> **code wins** — fix this doc.

Contents:
- **Part 1 — Current rules** (build to these)
- **Part 2 — Page copy** (source of truth for wording)
- **Part 3 — History & superseded decisions** (do not rebuild)

---

# PART 1 — CURRENT RULES

## Project order (locked)
CDP (01) → 3BB (02) → POS (03)
(Naaraan was dropped — see Part 3. Do not re-add it.)

## Tech facts (verified against code)
- Pure static HTML + one shared `style.css`. **No JavaScript anywhere.**
- Fonts: Newsreader (serif) · Inter (UI/labels, uppercase kickers) · Caveat
  (handwritten notes, `var(--script)`).
- NOT used (dropped brief ideas): Fraunces / DM Sans fonts · GSAP · any JS motion.
- Name on site: **Natthapath Damrongsri** (older drafts use placeholder "G").
- Spacing: every gap uses scale tokens `--sp-1`…`--sp-10` (4px base —
  8/12/16/20/24/32/48/64/96/128). Keep new spacing on these steps; don't hand-pick px.

## Layout rhythm & grouping (Laws of UX)
The reader must always know which part they're in without thinking. **Space does the work;
lines are the exception.** Build to these:

1. **Spacing first — separate parts with space, not lines.** Tier every gap so the structure
   reads by proximity alone: section gap (`--sp-10`) **>** group/decision gap (`--sp-6`) **>**
   row gap (`--sp-4/5`). If the read feels flat, *increase the gap before reaching for a rule.*
   *(Law of Proximity.)*
2. **A line never touches an image.** If a figure sits directly above or below, there is **no
   rule** in that seam — ever. (This is why decisions, which each end in a figure, are spaced,
   not divided; and why the fact strip under the cover has no top rule.)
3. **Lines are for emphasis or the ending only.** A divider must earn its place. One job per
   line; never trailing/doubled. A line is allowed **only** in these cases — anywhere else,
   use space:
   - **Image frame** — the 1px box around a cover / figure / preview thumbnail (it frames, it
     doesn't divide).
   - **Emphasis** — one pulled-out block (the reflection's left bar).
   - **Ending** — the close of the page (`case-nav` top rule, `footer` top rule).
   - **Global header** — the `site-nav` underline (one structural rule under the masthead).
   - **List rows** — repeated peer rows in a scannable list (homepage `proj-index` work rows).
     This is the *one* place a rule may sit near an image, because it's a list pattern, not a
     content seam. Do not import it into case-study sections.
4. **Inter-group gap > intra-group gap, always.** The space *between* parts must be clearly
   larger than the space *inside* one, or the reader can't tell where a part ends. *(Proximity.)*
5. **Don't invert hierarchy.** A parent heading must never look smaller/quieter than the
   children under it. *(Von Restorff — the boundary has to stand out, via space + position.)*

## Figures & evidence (rules)
Case-study figures are *proof* for a fast-scanning reader. Build every figure to these:

1. **No text baked into the image.** No `Fig x.x`, no title bar, no caption, no watermark
   inside the PNG. The figure's label lives in HTML only (`.fig-lead` → "Part N"). Caption in
   both = duplicate, and the baked one can't match the site's type or get fixed without a
   re-export. *(Current assets violate this — see `image-assets-todo.md`.)*
2. **One thing, legible at render width.** A figure shows a single focused screen/diagram that
   reads without zooming. Never a tiny multi-screen board. If multiple screens are essential,
   show **≤3 at large size**, not a grid of thumbnails.
3. **Content must match its `fig-lead` and `alt`.** No swapped, placeholder, or wrong-domain
   images (e.g. never a "banking app" frame on a telecom case). When in doubt, open the file
   and check it depicts what the lead claims.
4. **Aspect: `16:9` for everything** — covers and inline figures alike (uniform across the
   site). Author UI screenshots *composed* to 16:9: pad / letterbox a non-16:9 screen (e.g.
   the 800×600 legacy POS) within a 16:9 canvas. Do **not** rely on CSS `object-fit:cover` to
   force the ratio on UI shots — it crops the interface. Covers may crop (they're photographic).
5. **Filenames lowercase** (`fig-1-1.png`) to match what git tracks (`core.ignorecase` hides
   case drift locally but breaks on Linux/Pages).

## Annotation / margin-voice system (current)
One handwritten voice. Single ink tone **`#34404C`**, Caveat. The old two-color
blue/red ("Thinking Mark" / "Self-bite") system is **deprecated — do not reintroduce.**

**Four principles**
1. **Anchor at the work.** Point to a real spot, never a floating block. If the note
   reads complete without seeing the work, it's a paragraph, not a margin note.
2. **One sentence. No exceptions.** ~8–12 words. If it needs two, it's body copy.
3. **Replace, don't add.** Each note cuts the paragraph it replaces. (Gloss is the
   exception — purely additive.)
4. **Why, not what.** Reasoning, not component names. Exception: a *gloss* may define
   a hard word. Footnote: when the subject is the user (not your decision), drop the
   edge — warmth, not wit.

**Meta-principle:** the best annotation is often rewriting the sentence so none is
needed. (That's why the landing carries almost no marks.)

**Marks** (locked unless noted)

| Mark | Glyph | Job |
|---|---|---|
| Reasoning | underline + solid connector | why a choice was made (load-bearing) |
| Gloss | circle + dashed connector | a hard word made plain (additive) |
| Cut | strikethrough | what was removed, and why |
| Gap | caret `^` | what's missing / what I'd add |
| Cause | connector arrow | this forced that (max 1/page) |
| Weight | double underline / bold arrow | sharpest line on the page (max 1/page; execution undecided) |
| Group | brace `{` | one region as a unit (glyph undecided) |

**Two axes:** A — mark on the word (underline = reasoning phrase · circle = gloss word);
B — line weight (solid = primary · dashed = secondary). Default: reasoning→solid, gloss→dashed.

**Rejected on purpose:** checkmarks · asterisk-footnotes · standalone `?` · numbered
circles · highlighter fill · multiple ink colors.

**Per-page budget:** Landing ~1–2 · one per project card ·
CDP 4–6 · 3BB 4–5 · POS 3.

## The component (as built in `style.css`)
Block "HANDWRITTEN — reasoning mark". Single ink tone `#34404C`, CSS-only, static
(no draw-on-scroll animation).
- Wrap the phrase: `<span class="anno-anchor">…</span>` — the underline is a
  hand-drawn SVG background, **never `text-decoration`** (that reads as a link).
- The host element is `position:relative` (e.g. `.easier`). Add a sibling `.anno-mark`
  containing `.anno-conn` (connector SVG path, `stroke #34404C`; `.is-gloss` → dashed,
  reserved/unused) and `.anno-note` (Caveat text).
- Responsive <1080px: the note drops directly under the anchor, the connector hides,
  and a small arrow shows via `.anno-mark::before`.
- Only the *reasoning* mark is built. Gloss / cut / gap / cause / weight / group are
  spec'd but not implemented.

## Current state
Only **one** annotation exists site-wide: the demo reasoning mark on `index.html`
("stops being the user's problem" → *do it well and no one sees it happened*).
Every 🔵/🔴 marker in Part 2 below is an annotation *candidate pool*, not built — add
marks per the budget above, single ink tone, reasoning mark only.

---

# PART 2 — PAGE COPY (source of truth for wording)

Verbatim copy for every page — use it for WORDING. The inline 🔵 Thinking Mark /
🔴 Self-bite labels below are **legacy** (the deprecated two-color system); treat the
quoted sentences as candidate annotation text only. Styling and placement follow
Part 1 (single ink tone, reasoning mark).

## ═══════════════════════════════════════
## ส่วนที่ 1: LANDING / HERO
## ═══════════════════════════════════════

### Main Copy

**Name + Title**
G
Product Designer

**Headline**
Making the complex, clear.

**Sub-copy**
I design enterprise platforms, data systems, and operational tools.
The kind that break when conditions stack — and shouldn't.

**Metadata sidebar**
FOCUS: Enterprise UX · Data Systems · Operational Tools
BASED IN: Bangkok
STATUS: Available

**CTA**
VIEW SELECTED WORK ●

### Annotations

🔴 **Self-bite** (ข้าง headline):
> _"Making the complex, clear." sounds good — until you have to prove it._

🔵 **Thinking Mark** (ข้าง sub-copy):
> _enterprise tools — where "user-friendly" goes to die_

---

## ═══════════════════════════════════════
## ส่วนที่ 2: WORK — PROJECT CARDS
## ═══════════════════════════════════════

### CARD 01 — CDP (Customer Data Platform)

**01** · ENTERPRISE SAAS · 2024 · Handed off

**Title:** Customer Data Platform

**One-liner:**
Marketers built condition logic that quietly resolved to zero people.
Nothing warned them.

🔵 **Thinking Mark:**
> _the hardest screen was the one that showed nothing_

---

### CARD 02 — 3BB Member

**02** · MOBILE APP · 2024 – Present · Live on Play Store & App Store

**Title:** 3BB Member

**One-liner:**
The file had everything.
Except an answer for which version was current.

🔵 **Thinking Mark:**
> _design problem zero: which version is real?_

---

### CARD 03 — Counter Service POS

**03** · OPERATIONAL UX · 2023 · Design spec

**Title:** Counter Service POS

**One-liner:**
Every button was locked in place. Every flow was fixed.
The only thing left to design was the space between them.

🔴 **Self-bite:**
> _800×600 in 2023 — yes, really_

---

## ═══════════════════════════════════════
## ส่วนที่ 3: PROJECT PAGE — 01 CDP (Hero Case Study)
## ═══════════════════════════════════════

---

### THE SETUP

Marketing teams used this customer data platform to build audience segments from attributes, events, consent rules, and campaign conditions. The hard part was not showing more data. It was turning layered logic into a workspace they could read, configure, and trust.

The interface already existed. It worked. But "works" and "works confidently" are different things.

A marketer could build a segment, nest AND/OR groups two or three levels deep, and still miss that the logic quietly resolved to zero people.

That was the problem.

### WHAT WAS LOCKED

- Legacy data schemas and variable mappings — untouchable.
- Backend logic constraints — what the system could actually query.
- No complete rebuild. Limited dev resources. Improve the workspace inside the existing platform.

### WHAT I ACTUALLY DID

**Decision 1: A workspace for layered audience logic**

Problem: Marketers had to combine attributes, events, consent rules, and AND/OR groups inside one workspace. The risk was not only choosing the wrong condition — it was building logic that looked valid while quietly resolving to the wrong audience.

Decision: I structured the builder around visible condition groups, clear operator blocks, and an estimated-reach panel, so the user could understand the segment as it was being assembled.

Trade-off: Showing logic clearly takes space. The interface had to stay readable before it tried to show everything.

**Decision 2: Search that shows what you're choosing**

Problem: The event and attribute catalog was large and growing. A plain dropdown meant scrolling through entries and trusting that a label meant what it seemed to mean.

Decision: I designed a categorized auto-complete selector with metadata visible inside each result row, so users could verify a condition before adding it to the segment.

Trade-off: A richer selector is heavier to specify and build. Every empty state, loading state, and overflow case needed explicit rules.

**Decision 3: Specs that answer the questions devs actually ask**

Problem: Dynamic inputs changed behavior based on selected conditions. Without explicit specs, developers had to guess — and every guess became a QA ticket.

Decision: I mapped button states, focus rings, validation alerts, and input adapters per data variable into handoff specs the team could implement and QA against.

Trade-off: More upfront design work before any code gets written. But fewer conversations that start with "what should this do when..."

### EVIDENCE

[Fig 1.1] Primary segment builder workspace: structured event and condition setup.
[Fig 2.1] Advanced search selector: categorized auto-complete with metadata rows.
[Fig 2.2] Nested query blocks: AND/OR logic groups with spacing parameters.
[Fig 2.3] Handoff specs: component layouts, interaction states, edge cases.

### WHAT I'D DO DIFFERENTLY

The riskiest moment in this tool is invisible: a marketer builds conditions that resolve to zero people and launches an empty campaign without knowing. I'd add a validation layer — a check that warns before nothing goes out to nobody. I'd also watch how deep real users actually nest their groups. I designed for 2–3 levels. I don't know if that matches how people really work.

### METADATA STRIP

Role: UX/UI Designer (core feature design)
Platform: Web application
Timeline: 3 months · 2024
Team: Tech lead · PM · Front-end engineers · QA
Scope: Segment builder · Condition logic · Advanced search · Handoff docs
Status: Handed off · Implementation supported

---

## ═══════════════════════════════════════
## ส่วนที่ 4: PROJECT PAGE — 02 3BB MEMBER
## ═══════════════════════════════════════

---

### THE SETUP

3BB Member already had an app. Millions of users on Play Store and App Store. Billing, packages, service access, account management — established flows that people used every day without thinking.

🔵 **Thinking Mark:**
> _the file was the archaeology site — every layer was a different era_

🔴 **Self-bite:**
> _design problem zero: which version is current?_

---

### WHAT WAS LOCKED

- Established user journeys — members already knew the app. Unnecessary redesign could confuse routine tasks.
- A large inherited file — previous versions, migration sets, archived sections all living together.
- Migration-state complexity — same screen, different behavior depending on customer group.
- Phased delivery — flows had to hold together mid-transition, not just in a final-state mockup.

🔵 **Thinking Mark:**
> _"don't break what works" — a constraint that sounds simple until you have to find what works first_

---

### WHAT I ACTUALLY DID

**Decision 1: Map current vs. legacy before touching anything**

The file contained years of accumulated work.
Not every screen needed updating — most didn't.
But no one had clearly marked which flow was intended
and which was leftover.

I separated active states from inherited content,
then updated only where migration logic, service state,
or implementation requirements actually changed the user's path.

The tradeoff: less visually dramatic.
More stable, more shippable.

🔵 **Thinking Mark:**
> _restraint is a design decision — the hardest one_

---

**Decision 2: Treat errors and service changes as first-class screens**

Login errors, registration conditions, billing options —
these aren't edge cases. These are the moments
where users feel the most uncertainty.

I added and refined specific states: login error handling, mobile OTP registration, auto-pay setup, and bill-delivery channel selection. Each state got clear copy, hierarchy, and a next action that QA and dev could implement consistently.

The tradeoff: more screens to maintain.
Fewer implementation gaps to argue about.

🔴 **Self-bite:**
> _edge cases are where trust is built or lost_

---

### EVIDENCE

[Fig 1.1] Selected member flows — development-ready states for migration conditions
[Fig 2.1] Contribution scope — inherited context vs. selected updates

---

### WHAT I'D DO DIFFERENTLY

Map the inherited-vs-contribution boundary on day one.

I found it eventually. But the time spent figuring out
which screen was current and which was legacy
could have been saved with an explicit audit upfront.

That clarity was worth more to the team
than any single screen I delivered.

🔴 **Self-bite:**
> _next time: audit first, design second_

---

### METADATA STRIP

Role: UX/UI Designer
Platform: Mobile app · Web
Year: 2024 – Present
Status: Live — Play Store & App Store
Scope: Selected flow updates · Migration states · Dev/QA handoff
Team: Product · Business · Developers · QA

---

## ═══════════════════════════════════════
## ส่วนที่ 5: PROJECT PAGE — 03 COUNTER SERVICE POS (สั้น)
## ═══════════════════════════════════════

---

### THE SETUP

Cashiers process hundreds of transactions per shift. They do not read every screen from scratch — they rely on positions, repeated flows, and muscle memory built over time.

The interface needed clearer hierarchy and more consistent spacing. But the flow was fixed. The button positions were fixed. The brand identity was fixed. The screens ranged from 800×600 to 1920×1080.

Everything was locked except spacing, hierarchy, and contrast.

### WHAT I ACTUALLY DID

**Improve hierarchy without moving the controls**

Problem: The interface had uneven spacing, weak grouping, and competing visual weight. During routine transactions, important information had to stand out without changing the controls cashiers already knew.

Decision: I kept the button positions in place and adjusted hierarchy through spacing, grouping, contrast, and clearer separation between transaction areas and action areas.

Trade-off: The result is less dramatic than a full redesign. That was the point — a cashier should not have to relearn the screen to read it better.

**Build layout rules for two screen realities**

Problem: The same POS experience had to work across legacy 800×600 terminals and wider 1920×1080 displays. A simple scale-up or scale-down would either crowd the small screen or overinflate the larger one.

Decision: I designed separate layout profiles for compact and expanded screens. The compact version prioritized essential metadata and tighter rows. The wider version gave more room to transaction details, product areas, and payment actions without simply enlarging everything.

Trade-off: Two layout profiles meant more design maintenance. But one flexible mockup would have hidden the real hardware constraint.

### EVIDENCE

[Fig 1.1] Proposed POS interface: clearer hierarchy within fixed control positions.

[Fig 2.1] Dual-resolution specs: spacing, padding, and border adjustments across hardware profiles.

### WHAT I'D DO DIFFERENTLY

This project needs proof. The entire design rests on one claim: better hierarchy and spacing speed up checkout without moving a single control. If it reaches live testing, I'd log keystroke timing on the terminals — real transaction-speed data, no cashier interrupted.

### METADATA STRIP

Role: UX/UI Designer
Platform: POS terminal · 800×600 & 1920×1080
Year: 2023
Status: Design spec · Review completed
Scope: Visual hierarchy · Spacing system · Dual-resolution layouts

---

# PART 3 — HISTORY & SUPERSEDED (do not rebuild)

This site evolved, and the earlier docs contradict the shipped code. Kept here so the
reasoning isn't lost. The original files are in `archive/`.

**Naaraan Store Builder — dropped (2026-06-23).** Previously project 04 (a reserve
thumbnail, e-commerce SaaS · 2022 prototype). Removed from the portfolio entirely: no
card, page, or nav reference remains, and it is no longer mentioned in the active rules
above. `naaraan.html` and its assets were moved to `docs/archive/naaraan/`. Do **not**
re-add it.

**Original v2 brief (`claude-code-brief.md`) — historical.** The first plan. Several
ideas were later dropped: a two-color blue/red annotation system, Fraunces/DM Sans
fonts, and GSAP motion. None shipped.

**Dual-annotation content (`portfolio-content-v2-dual-annotation.md`) — copy kept, spec dropped.**
Its page copy is the source for Part 2. Its 🔵/🔴 two-color annotation system is deprecated.

**Implementation notes (`PORTFOLIO-UPDATE-NOTES.md`) — largely superseded / never shipped.**
Described a "pencil-writing trace" system: JS IntersectionObserver draw-on-scroll,
classes `.a-note` / `.a-pen`, an SVG `pencil-wobble` filter, a trial on `3bb-member.html`
Evidence Fig 1.1, and two annotation colors `#3E5C8A` / `#8C857B`. **None of this exists
in the code** — the site is static with no JS, and the only annotation is the single
reasoning mark on `index.html`. Ignore that doc's mechanism; Part 1 is what's real.

**Margin-voice spec (`landing-final-and-margin-voice-spec.md`) — folded into Part 1.**
This was the accurate, latest direction (single ink tone, reasoning mark), and its rules
are now Part 1. Three open design decisions remain:
1. **Group / brace** — its own glyph (needs a small legend) or folded into the connector?
2. **Thesis note** — one page-level framing line per page: yes or no?
3. **Weight execution** — double-underline or a bold single arrow?
