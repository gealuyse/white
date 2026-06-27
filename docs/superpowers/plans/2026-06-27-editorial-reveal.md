# Editorial Layout + Reveal System — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Port `cdp-editorial.html` layout into `style.css`, rebuild all 3 case-study pages in the editorial structure, add sequential-reveal system (text instant, decor stagger, sections scroll-triggered) across the whole site.

**Architecture:** Pure static HTML + one shared `style.css` + `scroll.js`. No build tools. Edits are surgical: swap the old case-study CSS block for editorial classes, extend `scroll.js` by ~6 lines, add `data-reveal-section` attributes to section elements, fully rewrite the 3 case pages.

**Tech Stack:** HTML, CSS (custom properties, keyframes, IntersectionObserver via JS), no dependencies.

---

## File Map

| File | Change |
|---|---|
| `style.css` | Add `:root` tokens · Replace case-study block with editorial CSS · Add reveal CSS · Remove old mobile case rules |
| `scroll.js` | Combine observers, add `data-reveal-delay` support |
| `index.html` | Add `data-reveal-section` + `data-reveal-delay` to sections and proj-rows |
| `cdp.html` | Full rewrite — editorial structure |
| `3bb-member.html` | Full rewrite — editorial structure |
| `counter-service-pos.html` | Full rewrite — editorial structure |
| `cdp-editorial.html` | Delete |

---

## Task 1 — style.css: add `:root` tokens + replace case-study CSS block

The editorial CSS uses `--faint`, `--hair2`, `--slate` which don't exist in `:root` yet. Also, everything from the `/* CASE-STUDY PAGES */` comment through `.reflection p` (the old sidebar-style reflection) gets replaced with editorial classes. `.case-nav`, `.back-link`, `footer`, `.foot` are **kept**.

**Files:**
- Modify: `style.css`

- [ ] **Step 1: Add missing tokens to `:root`**

In `style.css`, find the `:root` block and add three tokens after `--hair`:

```css
/* FIND this line: */
  --hair:#D8D5D0;

/* REPLACE with: */
  --hair:#D8D5D0;
  --hair2:#E7E4DF;
  --faint:#9A958D;
  --slate:#34404C;
```

- [ ] **Step 2: Replace old case-study CSS with editorial CSS**

Find and replace the entire case-study block. The block starts at `/* =========================================================\n   CASE-STUDY PAGES` and ends at `.reflection p{font:400 20px/1.6 var(--serif); letter-spacing:-0.005em; margin:0;}`. Replace with:

```css
/* =========================================================
   EDITORIAL — case-study page layout
   Replaces old project-header / proj-meta / decisions / reflection
   ========================================================= */

.wrap-ed{max-width:1128px; margin:0 auto; padding:0 56px;}

/* nav */
.ed-nav{
  display:flex; justify-content:space-between; align-items:baseline;
  padding:24px 0 20px; border-bottom:1px solid var(--hair);
}
.ed-nav .name{font:500 14px/1 var(--sans);}
.ed-nav .back{font:400 13px/1 var(--sans); color:var(--sub);}
.ed-nav .back:hover{color:var(--ink);}

/* title page */
.ed-title-page{padding:60px 0 32px;}
.ed-title-page .label{
  font:500 12px/1 var(--sans); letter-spacing:.09em; text-transform:uppercase; color:var(--sub);
}
.ed-title-page h1{
  font:300 52px/1.08 var(--serif); letter-spacing:-.02em; margin:20px 0 0; max-width:18ch;
}
.ed-title-page .intro{
  font:400 19px/1.6 var(--sans); color:var(--sub); margin:28px 0 0; max-width:54ch;
}

/* outcome stat strip */
.ed-stats{
  display:grid; grid-template-columns:repeat(3,1fr);
  border-top:1.5px solid var(--ink); border-bottom:1px solid var(--hair);
}
.ed-stats .cell{padding:22px 24px;}
.ed-stats .cell:not(:last-child){border-right:1px solid var(--hair2);}
.ed-stats .cell:first-child{padding-left:0;}
.ed-stats .cell:last-child{padding-right:0;}
.ed-stats .k{
  font:500 10px/1 var(--sans); letter-spacing:.08em; text-transform:uppercase;
  color:var(--faint); margin:0 0 9px;
}
.ed-stats .v{font:400 15px/1.4 var(--sans); color:var(--ink);}

/* cover */
.ed-cover{margin:40px 0 0;}
.ed-cover img{display:block; width:100%; aspect-ratio:16/9; object-fit:cover; border:1px solid var(--hair);}

/* setup text */
.ed-setup{padding:56px 0 0; max-width:62ch; margin:0 auto;}
.ed-setup .lead{
  font:400 22px/1.55 var(--serif); letter-spacing:-.005em; color:var(--ink); margin:0 0 22px;
}
.ed-setup p{font:400 17px/1.75 var(--sans); color:var(--sub); margin:0 0 16px;}
.ed-setup p:last-child{margin-bottom:0;}

/* decision spread */
.ed-spread{display:grid; grid-template-columns:1fr 1fr; gap:44px; align-items:center; padding:64px 0 0;}
.ed-spread.tight{padding-top:56px;}
.ed-spread .num{font:300 30px/1 var(--serif); color:var(--hair);}
.ed-spread h2{font:400 30px/1.18 var(--serif); letter-spacing:-.008em; margin:10px 0 16px; max-width:18ch;}
.ed-spread p{font:400 16px/1.7 var(--sans); color:var(--sub); margin:0 0 14px;}
.ed-spread p:last-of-type{margin-bottom:0;}

/* figure well: 4:5 portrait (editorial crop) at rest, desaturated; full colour on hover */
.ed-fig{
  aspect-ratio:4/5; background:var(--panel); border:1px solid var(--hair);
  overflow:hidden; line-height:0;
}
.ed-fig img{display:block; width:100%; height:100%; object-fit:cover;}
@media (prefers-reduced-motion:no-preference){
  .ed-fig{filter:saturate(.55) brightness(1.05); transition:filter .5s ease;}
}
@media (hover:hover) and (pointer:fine){
  .ed-spread:hover .ed-fig{filter:none;}
}

/* handwritten note inside each spread */
.ed-note{font:500 18px/1.3 var(--script); color:var(--slate); margin:0;}

/* reflection pull */
.ed-reflection{padding:72px 0 0; text-align:center;}
.ed-reflection p{
  font:400 30px/1.4 var(--serif); letter-spacing:-.012em;
  color:var(--ink); margin:0 auto 16px; max-width:24ch;
}
.ed-reflection p:last-of-type{margin-bottom:0;}
.ed-reflection .k{
  display:block; font:500 11px/1 var(--sans); letter-spacing:.08em;
  text-transform:uppercase; color:var(--faint); margin:24px 0 0;
}

/* mobile */
@media (max-width:860px){
  .wrap-ed{padding:0 22px;}
  .ed-title-page{padding:48px 0 24px;}
  .ed-title-page h1{font-size:34px;}
  .ed-stats{grid-template-columns:1fr;}
  .ed-stats .cell{padding:16px 0; border-right:none !important; border-bottom:1px solid var(--hair2);}
  .ed-stats .cell:last-child{border-bottom:none;}
  .ed-spread,.ed-spread.tight{grid-template-columns:1fr; gap:24px; padding-top:48px;}
  .ed-spread .ed-fig{order:2; aspect-ratio:16/10;}
  .ed-reflection{padding-top:56px;}
  .ed-reflection p{font-size:22px;}
}
```

- [ ] **Step 3: Remove old mobile case-study rules**

Inside the `@media (max-width:860px)` block (near the bottom of `style.css`), find and delete these lines only — keep `.case-nav` and `.locked-list`:

```css
  /* case study */
  .project-header{padding:var(--sp-7) 0 0;}
  .project-intro{font-size:16px; line-height:1.66; margin-bottom:var(--sp-6);}
  .proj-meta{grid-template-columns:1fr 1fr; gap:var(--sp-4) var(--sp-5);}
  .proj-sect{padding-top:var(--sp-8);}              /* section gap 64 — biggest tier */
  .decision{padding:var(--sp-5) 0;}                 /* decision gap 48 — below section */
  .proj-sect .reading p{font-size:16px; line-height:1.66;}
  .d-title{font-size:21px;}
  .d-val{font-size:15px;}
  .screens{gap:var(--sp-6);}
  .reflection{padding-left:var(--sp-4);}
  .reflection p{font-size:18px; line-height:1.55;}
```

Replace those 12 lines with nothing (delete them). Keep:
```css
  .case-nav{margin-top:var(--sp-8);}
  .locked-list li{font-size:16px;}
```

- [ ] **Step 4: Commit**

```bash
git add style.css
git commit -m "style: replace case-study CSS with editorial layout (.ed-* classes)"
```

---

## Task 2 — style.css: add reveal system CSS

Insert a new `/* REVEAL SYSTEM */` block just before the `/* MOBILE */` section at the bottom of `style.css`.

**Files:**
- Modify: `style.css`

- [ ] **Step 1: Add reveal CSS block**

Find this line near the bottom of `style.css`:
```css
/* =========================================================
   MOBILE
   ========================================================= */
```

Insert the following block immediately before it:

```css
/* =========================================================
   REVEAL SYSTEM
   text is never hidden — only decoration/images stagger.
   Gated by .js-reveal (set by inline <script> in <head>).
   Without JS or with prefers-reduced-motion: everything visible.
   ========================================================= */
@keyframes fade-up{
  from{opacity:0; transform:translateY(8px);}
  to{opacity:1; transform:none;}
}

@media (prefers-reduced-motion:no-preference){
  /* Scroll-revealed sections: hidden until observer fires .in-view */
  .js-reveal [data-reveal-section]:not(.in-view){opacity:0;}
  .js-reveal [data-reveal-section].in-view{animation:fade-up .5s ease both;}

  /* Hero load-stagger: CTA → annotation note → scroll-cue note (text H1/para instant) */
  .js-reveal .hero .btn-contact{animation:fade-up .5s ease both; animation-delay:300ms;}
  .js-reveal .hero .anno-hero{animation:fade-up .5s ease both; animation-delay:500ms;}
  .js-reveal .hero .anno-scroll .anno-note{animation:fade-up .5s ease both; animation-delay:600ms;}

  /* Project pages — stats cells stagger on load */
  .js-reveal .ed-stats .cell:nth-child(1){animation:fade-up .5s ease both; animation-delay:200ms;}
  .js-reveal .ed-stats .cell:nth-child(2){animation:fade-up .5s ease both; animation-delay:300ms;}
  .js-reveal .ed-stats .cell:nth-child(3){animation:fade-up .5s ease both; animation-delay:400ms;}

  /* Cover image fades in after stats */
  .js-reveal .ed-cover{animation:fade-up .5s ease both; animation-delay:450ms;}

  /* Handwritten note writes in after its spread reveals */
  .js-reveal .ed-spread .ed-note{opacity:0; transition:opacity .4s ease;}
  .js-reveal .ed-spread.in-view .ed-note{opacity:1; transition-delay:400ms;}
}
```

- [ ] **Step 2: Commit**

```bash
git add style.css
git commit -m "style: add reveal system — load stagger + scroll-triggered section reveals"
```

---

## Task 3 — scroll.js: add `data-reveal-section` + delay support

Replace the entire file with the updated version that handles both `[data-reveal]` (annotation draws, existing) and `[data-reveal-section]` (content reveals, new).

**Files:**
- Modify: `scroll.js`

- [ ] **Step 1: Replace scroll.js**

```js
/* scroll.js — reveal on scroll, no dependencies.
   [data-reveal]         → annotation draw trigger (.hero, #easier). Adds .in-view; CSS animates.
   [data-reveal-section] → content section reveal. Reads data-reveal-delay (ms) for stagger.
   Both: fire once, then unobserve. Gated by .js-reveal on <html>. */
(function () {
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var delay = entry.target.dataset.revealDelay;
        if (delay) entry.target.style.animationDelay = delay + 'ms';
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );

  document.querySelectorAll('[data-reveal], [data-reveal-section]').forEach(function (el) {
    io.observe(el);
  });
}());
```

- [ ] **Step 2: Commit**

```bash
git add scroll.js
git commit -m "feat: extend scroll.js to handle data-reveal-section with optional delay"
```

---

## Task 4 — Rebuild `cdp.html`

Full rewrite. Keeps same `<head>` meta tags (canonical, OG, etc.) but new body structure. Adds `js-reveal` inline script to `<head>` and `<script src="scroll.js">` before `</body>`.

**Files:**
- Modify: `cdp.html`

- [ ] **Step 1: Rewrite cdp.html**

Replace the entire file with:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Customer Data Platform — Segment &amp; Condition Builder · Natthapath Damrongsri</title>
<meta name="description" content="Segment builder for a CDP where marketers build audience logic from attributes, events, consent rules, and nested conditions.">
<link rel="canonical" href="https://gealuyse.github.io/portfoilo/cdp.html">
<meta property="og:type" content="article">
<meta property="og:title" content="Customer Data Platform — Segment &amp; Condition Builder">
<meta property="og:description" content="Segment builder for a CDP where marketers build audience logic from attributes, events, consent rules, and nested conditions.">
<meta property="og:url" content="https://gealuyse.github.io/portfoilo/cdp.html">
<meta property="og:image" content="https://gealuyse.github.io/portfoilo/og.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Customer Data Platform — Segment &amp; Condition Builder">
<meta name="twitter:description" content="Segment builder for a CDP where marketers build audience logic from attributes, events, consent rules, and nested conditions.">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' fill='%23FCFBF9'/><text x='16' y='24' font-family='Georgia,serif' font-size='24' text-anchor='middle' fill='%231C1B1A'>N</text></svg>">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,300;6..72,400;6..72,500&family=Inter:wght@400;500;600&family=Caveat:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
<script>if(matchMedia('(prefers-reduced-motion: no-preference)').matches)document.documentElement.classList.add('js-reveal');</script>
</head>
<body>

<div class="wrap-ed">
  <nav class="ed-nav" aria-label="Main">
    <a class="name" href="index.html">Natthapath Damrongsri</a>
    <a class="back" href="index.html#work">← All work</a>
  </nav>

  <section class="ed-title-page">
    <span class="label">Enterprise SaaS / Customer Data Platform</span>
    <h1>Customer Data Platform — Segment &amp; Condition Builder</h1>
    <p class="intro">The hardest query logic in the system had to feel like the easiest screen — so marketers could nest conditions three levels deep and still trust the audience it resolved to.</p>
  </section>

  <div class="ed-stats">
    <div class="cell"><div class="k">Outcome</div><div class="v">Dev- &amp; QA-ready specs</div></div>
    <div class="cell"><div class="k">Timeline</div><div class="v">3 months · 2024</div></div>
    <div class="cell"><div class="k">Role</div><div class="v">UX/UI Designer</div></div>
  </div>

  <figure class="ed-cover">
    <img src="assets/projects/cdp/cover.png" alt="Customer Data Platform — overview of the segment and condition builder workspace.">
  </figure>

  <section class="ed-setup" data-reveal-section>
    <p class="lead">The hard part wasn't showing more data. It was turning layered logic into a workspace marketers could read, configure and trust.</p>
    <p>A marketer could build a segment, nest AND/OR groups two or three levels deep, and still miss that the logic quietly resolved to zero people. The interface already existed. It worked. But "works" and "works confidently" are different things.</p>
  </section>

  <section class="ed-spread" data-reveal-section>
    <div>
      <span class="num">01</span>
      <h2>A workspace for layered audience logic</h2>
      <p>Visible condition groups, clear operator blocks, and an estimated-reach panel — so the user understood the segment as it was being assembled.</p>
      <p class="ed-note">— readable first, complete second</p>
    </div>
    <figure class="ed-fig">
      <img src="assets/projects/cdp/fig-1-1.png" alt="CDP segment builder workspace — condition group and estimated-reach panel.">
    </figure>
  </section>

  <section class="ed-spread tight" data-reveal-section>
    <figure class="ed-fig">
      <img src="assets/projects/cdp/fig-2-2.png" alt="CDP advanced search selector — categorized auto-complete with metadata in each result row.">
    </figure>
    <div>
      <span class="num">02</span>
      <h2>Search that shows what you're choosing</h2>
      <p>A categorized auto-complete selector with metadata visible in each result row — so users could verify a condition before adding it to the segment.</p>
      <p class="ed-note">— verify before you commit</p>
    </div>
  </section>

  <section class="ed-reflection" data-reveal-section>
    <p>"The riskiest moment in this tool is invisible — an empty campaign that goes out to nobody."</p>
    <span class="k">What I'd do differently</span>
  </section>

  <nav class="case-nav" aria-label="More work" data-reveal-section>
    <a class="cn-prev" href="index.html#work"><span class="cn-label">Index</span><span class="cn-title">All work</span></a>
    <a class="cn-next" href="3bb-member.html"><span class="cn-label">Next case</span><span class="cn-title">3BB Member →</span></a>
  </nav>
</div>

<footer>
  <div class="wrap-ed">
    <p class="foot">Natthapath Damrongsri · 2026</p>
  </div>
</footer>

<script src="scroll.js"></script>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add cdp.html
git commit -m "feat: rebuild cdp.html in editorial layout with scroll reveals"
```

---

## Task 5 — Rebuild `3bb-member.html`

**Files:**
- Modify: `3bb-member.html`

- [ ] **Step 1: Rewrite 3bb-member.html**

Replace the entire file with:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>3BB Member — Case Study · Natthapath Damrongsri</title>
<meta name="description" content="Updating selected 3BB Member migration flows inside an inherited design file, preparing current screens for development and QA.">
<link rel="canonical" href="https://gealuyse.github.io/portfoilo/3bb-member.html">
<meta property="og:type" content="article">
<meta property="og:title" content="3BB Member — Case Study">
<meta property="og:description" content="Updating selected 3BB Member migration flows inside an inherited design file, preparing current screens for development and QA.">
<meta property="og:url" content="https://gealuyse.github.io/portfoilo/3bb-member.html">
<meta property="og:image" content="https://gealuyse.github.io/portfoilo/og.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="3BB Member — Case Study">
<meta name="twitter:description" content="Updating selected 3BB Member migration flows inside an inherited design file, preparing current screens for development and QA.">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' fill='%23FCFBF9'/><text x='16' y='24' font-family='Georgia,serif' font-size='24' text-anchor='middle' fill='%231C1B1A'>N</text></svg>">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,300;6..72,400;6..72,500&family=Inter:wght@400;500;600&family=Caveat:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
<script>if(matchMedia('(prefers-reduced-motion: no-preference)').matches)document.documentElement.classList.add('js-reveal');</script>
</head>
<body>

<div class="wrap-ed">
  <nav class="ed-nav" aria-label="Main">
    <a class="name" href="index.html">Natthapath Damrongsri</a>
    <a class="back" href="index.html#work">← All work</a>
  </nav>

  <section class="ed-title-page">
    <span class="label">Mobile App / Migration UX</span>
    <h1>3BB Member</h1>
    <p class="intro">A live app for millions, inside a design file where years of versions had stacked on top of each other — the job was finding which screen was real, then updating only the flows the migration actually changed.</p>
  </section>

  <div class="ed-stats">
    <div class="cell"><div class="k">Outcome</div><div class="v">Live — Play Store &amp; App Store</div></div>
    <div class="cell"><div class="k">Timeline</div><div class="v">2024 – Present</div></div>
    <div class="cell"><div class="k">Role</div><div class="v">UX/UI Designer</div></div>
  </div>

  <figure class="ed-cover">
    <img src="assets/projects/3bb-member/cover.png" alt="3BB Member — migration cover, 3BB to AIS, version 4.0.35.">
  </figure>

  <section class="ed-setup" data-reveal-section>
    <p class="lead">The first problem wasn't design. It was figuring out which screen was the real one.</p>
    <p>3BB Member already had an app — millions of users, established flows people used every day without thinking. I worked inside a shared design file holding years of flows, versions, and archived pages stacked on top of each other. Not every screen needed updating. Most didn't. But no one had clearly marked which was current.</p>
  </section>

  <section class="ed-spread" data-reveal-section>
    <div>
      <span class="num">01</span>
      <h2>Map current vs. legacy before touching anything</h2>
      <p>I separated active states from inherited content, then updated only where migration logic, service state, or implementation requirements actually changed the user's path.</p>
      <p class="ed-note">— restraint is a design decision</p>
    </div>
    <figure class="ed-fig">
      <img src="assets/projects/3bb-member/fig-2-1.png" alt="3BB Member — contribution scope: inherited context distinguished from screens selected for update.">
    </figure>
  </section>

  <section class="ed-spread tight" data-reveal-section>
    <figure class="ed-fig">
      <img src="assets/projects/3bb-member/fig-1-1.png" alt="3BB Member — home, package detail, and login error state prepared as development-ready screens.">
    </figure>
    <div>
      <span class="num">02</span>
      <h2>Treat errors as first-class screens</h2>
      <p>Login errors, registration conditions, billing options — these aren't edge cases. Each state got clear copy, hierarchy, and a next action that QA and dev could implement consistently.</p>
      <p class="ed-note">— edge cases are where trust is built</p>
    </div>
  </section>

  <section class="ed-reflection" data-reveal-section>
    <p>"Map the inherited-vs-contribution boundary on day one."</p>
    <span class="k">What I'd do differently</span>
  </section>

  <nav class="case-nav" aria-label="More work" data-reveal-section>
    <a class="cn-prev" href="cdp.html"><span class="cn-label">Previous case</span><span class="cn-title">← Customer Data Platform</span></a>
    <a class="cn-next" href="counter-service-pos.html"><span class="cn-label">Next case</span><span class="cn-title">Counter Service POS →</span></a>
  </nav>
</div>

<footer>
  <div class="wrap-ed">
    <p class="foot">Natthapath Damrongsri · 2026</p>
  </div>
</footer>

<script src="scroll.js"></script>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add 3bb-member.html
git commit -m "feat: rebuild 3bb-member.html in editorial layout with scroll reveals"
```

---

## Task 6 — Rebuild `counter-service-pos.html`

**Files:**
- Modify: `counter-service-pos.html`

- [ ] **Step 1: Rewrite counter-service-pos.html**

Replace the entire file with:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Counter Service POS — Case Study · Natthapath Damrongsri</title>
<meta name="description" content="A POS design proposal improving hierarchy, spacing, and contrast across 800×600 and 1920×1080 terminals without moving cashier controls.">
<link rel="canonical" href="https://gealuyse.github.io/portfoilo/counter-service-pos.html">
<meta property="og:type" content="article">
<meta property="og:title" content="Counter Service POS — Case Study">
<meta property="og:description" content="A POS design proposal improving hierarchy, spacing, and contrast across 800×600 and 1920×1080 terminals without moving cashier controls.">
<meta property="og:url" content="https://gealuyse.github.io/portfoilo/counter-service-pos.html">
<meta property="og:image" content="https://gealuyse.github.io/portfoilo/og.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Counter Service POS — Case Study">
<meta name="twitter:description" content="A POS design proposal improving hierarchy, spacing, and contrast across 800×600 and 1920×1080 terminals without moving cashier controls.">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' fill='%23FCFBF9'/><text x='16' y='24' font-family='Georgia,serif' font-size='24' text-anchor='middle' fill='%231C1B1A'>N</text></svg>">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,300;6..72,400;6..72,500&family=Inter:wght@400;500;600&family=Caveat:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
<script>if(matchMedia('(prefers-reduced-motion: no-preference)').matches)document.documentElement.classList.add('js-reveal');</script>
</head>
<body>

<div class="wrap-ed">
  <nav class="ed-nav" aria-label="Main">
    <a class="name" href="index.html">Natthapath Damrongsri</a>
    <a class="back" href="index.html#work">← All work</a>
  </nav>

  <section class="ed-title-page">
    <span class="label">Operational UX / POS</span>
    <h1>Counter Service POS</h1>
    <p class="intro">Everything was locked except spacing and contrast — and cashiers run on muscle memory, so the screen had to read better without making a single hand relearn where anything was.</p>
  </section>

  <div class="ed-stats">
    <div class="cell"><div class="k">Outcome</div><div class="v">Review-approved spec</div></div>
    <div class="cell"><div class="k">Timeline</div><div class="v">2023</div></div>
    <div class="cell"><div class="k">Role</div><div class="v">UX/UI Designer</div></div>
  </div>

  <figure class="ed-cover">
    <img src="assets/projects/counter-service-pos/cover.png" alt="Counter Service POS — categorized billers grid on the cashier home screen.">
  </figure>

  <section class="ed-setup" data-reveal-section>
    <p class="lead">Cashiers process hundreds of transactions per shift. They don't read every screen from scratch — they rely on positions and muscle memory built over time.</p>
    <p>The interface needed clearer hierarchy and more consistent spacing. But the flow was fixed. The button positions were fixed. The brand was fixed. The screens ranged from 800×600 to 1920×1080. Everything was locked except spacing, hierarchy, and contrast.</p>
  </section>

  <section class="ed-spread" data-reveal-section>
    <div>
      <span class="num">01</span>
      <h2>Improve hierarchy without moving the controls</h2>
      <p>I kept every button in place and adjusted hierarchy through spacing, grouping, contrast, and clearer separation between transaction areas and action areas.</p>
      <p class="ed-note">— better, without making anyone relearn</p>
    </div>
    <figure class="ed-fig">
      <img src="assets/projects/counter-service-pos/screen_proof.png" alt="Counter Service POS wide-screen proposal — order panel, product grid, payment actions, grouped controls.">
    </figure>
  </section>

  <section class="ed-spread tight" data-reveal-section>
    <figure class="ed-fig">
      <img src="assets/projects/counter-service-pos/fig-2-1.png" alt="Counter Service POS legacy 800×600 — compact profile with essential metadata and tighter rows.">
    </figure>
    <div>
      <span class="num">02</span>
      <h2>Build layout rules for two screen realities</h2>
      <p>Separate layout profiles for compact 800×600 and expanded 1920×1080 displays — the compact version prioritized essential metadata; the wider version gave more room without simply enlarging everything.</p>
      <p class="ed-note">— two profiles, one constraint made visible</p>
    </div>
  </section>

  <section class="ed-reflection" data-reveal-section>
    <p>"This project needs proof. The entire design rests on one claim."</p>
    <span class="k">What I'd do differently</span>
  </section>

  <nav class="case-nav" aria-label="More work" data-reveal-section>
    <a class="cn-prev" href="3bb-member.html"><span class="cn-label">Previous case</span><span class="cn-title">← 3BB Member</span></a>
    <a class="cn-next" href="index.html#work"><span class="cn-label">Index</span><span class="cn-title">All work →</span></a>
  </nav>
</div>

<footer>
  <div class="wrap-ed">
    <p class="foot">Natthapath Damrongsri · 2026</p>
  </div>
</footer>

<script src="scroll.js"></script>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add counter-service-pos.html
git commit -m "feat: rebuild counter-service-pos.html in editorial layout with scroll reveals"
```

---

## Task 7 — Update `index.html` + delete trial file

Add `data-reveal-section` and `data-reveal-delay` attributes to the sections below the hero on the landing page. Delete `cdp-editorial.html`.

**Files:**
- Modify: `index.html`
- Delete: `cdp-editorial.html`

- [ ] **Step 1: Add data-reveal-section to Work proj-rows**

Find the first proj-row:
```html
      <a class="proj-row" href="cdp.html" aria-label="Customer Data Platform — Segment &amp; Condition Builder, view case study">
```
Add attributes:
```html
      <a class="proj-row" href="cdp.html" aria-label="Customer Data Platform — Segment &amp; Condition Builder, view case study" data-reveal-section data-reveal-delay="0">
```

Find the second proj-row:
```html
      <a class="proj-row" href="3bb-member.html" aria-label="3BB Member App and Website — view case study">
```
Add:
```html
      <a class="proj-row" href="3bb-member.html" aria-label="3BB Member App and Website — view case study" data-reveal-section data-reveal-delay="100">
```

Find the third proj-row:
```html
      <a class="proj-row" href="counter-service-pos.html" aria-label="Counter Service POS — view proposal">
```
Add:
```html
      <a class="proj-row" href="counter-service-pos.html" aria-label="Counter Service POS — view proposal" data-reveal-section data-reveal-delay="200">
```

- [ ] **Step 2: Add data-reveal-section to remaining sections**

Find:
```html
  <section class="sect" id="approach">
```
Replace:
```html
  <section class="sect" id="approach" data-reveal-section>
```

Find:
```html
  <section class="sect" id="habits">
```
Replace:
```html
  <section class="sect" id="habits" data-reveal-section>
```

Find:
```html
  <section class="sect" id="about">
```
Replace:
```html
  <section class="sect" id="about" data-reveal-section>
```

Find:
```html
  <section class="contact" id="contact">
```
Replace:
```html
  <section class="contact" id="contact" data-reveal-section>
```

- [ ] **Step 3: Delete cdp-editorial.html**

```bash
rm cdp-editorial.html
```

- [ ] **Step 4: Commit**

```bash
git add index.html
git rm cdp-editorial.html
git commit -m "feat: add scroll reveals to landing sections; remove cdp-editorial trial file"
```

---

## Task 8 — Smoke test

Open each page in a browser and verify the following. No automated tests — this is pure HTML/CSS.

**Files:** None (read-only verification)

- [ ] **Step 1: Verify index.html**

Open `index.html` in a browser (or via `python -m http.server` from the project root if file:// causes font issues).

Check:
- Nav, role label, thesis H1, paragraph — all visible instantly on load, no fade
- CTA button fades up ~300ms after load
- Hero annotation (right margin, "mobile app (1,000,000+ users)") fades up ~500ms
- Scroll cue arrow draws itself ~700ms
- Scroll down: `#easier` section annotation draws (underline → connector → note)
- Scroll further: proj-rows appear staggered, one after another
- Scroll further: Approach, Habits, About, Contact sections fade up individually
- With `prefers-reduced-motion: reduce` (DevTools → Rendering → Emulate CSS media feature): nothing animates, all content visible

- [ ] **Step 2: Verify cdp.html**

Open `cdp.html`.

Check:
- Nav + H1 + intro text — instant
- Stats cells (Outcome / Timeline / Role) stagger in left-to-right, ~200/300/400ms
- Cover image fades in ~450ms
- Scroll: `.ed-setup` fades up
- Scroll: Spread 01 (text left / fig right) fades up; ~400ms later, `— readable first, complete second` handwritten note appears
- Scroll: Spread 02 (fig left / text right) fades up; handwritten note follows
- Hover over a spread → figure wakes to full colour
- Scroll: Reflection fades up
- Scroll: Case nav fades up
- Mobile (≤860px): spreads stack to 1 column, figure moves below text, fig aspect-ratio becomes 16:10

- [ ] **Step 3: Verify 3bb-member.html and counter-service-pos.html**

Same checklist as Step 2. Confirm:
- 3BB Member stats: "Live — Play Store & App Store" / "2024–Present" / "UX/UI Designer"
- POS stats: "Review-approved spec" / "2023" / "UX/UI Designer"
- Case nav prev/next links are correct (CDP ← 3BB → POS, 3BB ← POS → Index)

- [ ] **Step 4: Confirm cdp-editorial.html is gone**

```bash
ls cdp-editorial.html
```
Expected: `No such file or directory`

- [ ] **Step 5: Final commit if any fixes were needed**

```bash
git add -p
git commit -m "fix: smoke-test corrections"
```
