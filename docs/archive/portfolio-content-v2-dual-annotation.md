# Portfolio Content Structure (v2 — Dual Annotation System)
### G — Product Designer
### Tone: Quietly Distinct + มีเขี้ยว
### Strategy: Layered — ชั้นนอกจับ HM/Recruiter · ชั้นในจับ designer

---

## ═══════════════════════════════════════
## ANNOTATION SYSTEM — 2 LAYERS
## ═══════════════════════════════════════

### Layer A: 🔵 Thinking Marks (สีน้ำเงิน)
- น้ำเสียง: สังเกต วิเคราะห์ จดบันทึก
- เหมือน designer กำลัง annotate งานตัวเอง
- เป็นกลาง ไม่มีอารมณ์ — field notes
- ตัวอย่าง: "this is where design actually starts"
- Visual: handwritten font · สีน้ำเงิน · มีลูกศรหรือเส้นชี้

### Layer B: 🔴 Self-bites (สีแดง/สีอื่นที่แยกชัด)
- น้ำเสียง: กัดตัวเอง กัดปัญหา มี wit
- เป็นตัวตนของ G — personality layer
- self-aware ยอมรับสิ่งที่ยังไม่รู้ กวนนิดๆ
- ตัวอย่าง: "sounds good — until you have to prove it"
- Visual: handwritten font · สีแดง/warm tone · ลอยอิสระกว่า mark

### กฎร่วม
- ทั้งสองเป็น handwritten font เหมือนกัน
- แยกกันด้วยสีเท่านั้น — ไม่ต้องมี label บอก
- ไม่เกิน 1 mark + 1 bite ต่อ section (อาจมีแค่อย่างเดียว)
- Thinking Marks จะเยอะกว่า Self-bites เสมอ (ratio ~60:40)

---

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

### CARD 04 — Naaraan (thumbnail)

**04** · E-COMMERCE · 2022 · Prototype

**Title:** Naaraan Store Builder

**One-liner:**
Sellers didn't fail at features. They failed at sequence.

(ไม่มี annotation — card เล็ก)

---

## ═══════════════════════════════════════
## ส่วนที่ 3: PROJECT PAGE — 01 CDP (Hero Case Study)
## ═══════════════════════════════════════

---

### THE SETUP

A customer data platform for marketing teams.
Segments, consent rules, campaign conditions, journey logic —
layers of data that had to become something a marketer could scan,
configure, and trust.

The interface already existed. It worked.
But "works" and "works confidently" are different things.

A marketer could build a segment from event conditions,
nest AND/OR groups three levels deep,
and never know that the logic quietly resolved to zero people.

That was the problem.

🔵 **Thinking Mark:**
> _"works" ≠ "works confidently" — this distinction drove the whole project_

🔴 **Self-bite:**
> _zero-audience segments: the silent failure nobody designed for_

---

### WHAT WAS LOCKED

- Legacy data schemas and variable mappings — untouchable.
- Backend logic constraints — what the system could actually query.
- No complete rebuild. Limited dev resources. Improve what exists.

🔵 **Thinking Mark:**
> _this is where design actually starts_

---

### WHAT I ACTUALLY DID

**Decision 1: Search that shows what you're choosing**

The event catalog was large and growing.
A plain dropdown meant scrolling through hundreds of entries
hoping the name looked right.

I designed a categorized auto-complete selector
with metadata visible inside each result row —
so a marketer could verify a selection without leaving the search.

The tradeoff: a richer selector is heavier to specify and build.
Every empty state, loading state, and overflow case
needed explicit rules.

🔵 **Thinking Mark:**
> _dropdowns show labels without meaning_

---

**Decision 2: Nested logic that doesn't overflow the screen**

Condition groups needed AND/OR nesting — 2 to 3 levels deep.
On a 1440px workspace, deep nesting breaks fast.

I structured conditions as logical cards
separated by distinct operator blocks,
enforced on an 8px spacing standard
with strict horizontal sizing rules.

The tradeoff: hard sizing limits how deep nesting can go
before the UI has to summarize instead of display.

🔴 **Self-bite:**
> _at some point, showing everything becomes showing nothing_

---

**Decision 3: Specs that answer the questions devs actually ask**

Dynamic inputs changed behavior based on selected conditions.
Without explicit specs, developers had to guess —
and every guess became a QA ticket.

I mapped button states, focus rings, validation alerts,
and input adapters per data variable
into interactive spec documents.

The tradeoff: more upfront design work before any code gets written.
But fewer conversations that start with "what should this do when..."

🔵 **Thinking Mark:**
> _a spec that doesn't cover edge cases is a wish, not a spec_

---

### EVIDENCE

[Fig 1.1] Segment builder workspace — structured event and condition setup
[Fig 2.1] Advanced search selector — categorized auto-complete with metadata rows
[Fig 2.2] Nested query blocks — AND/OR logic groups with spacing parameters
[Fig 2.3] Handoff specs — component layouts, interaction states, edge cases

---

### WHAT I'D DO DIFFERENTLY

The riskiest moment in this tool is invisible:
a marketer builds conditions that resolve to zero people
and launches an empty campaign without knowing.

I'd add a validation layer — a check that warns
before nothing goes out to nobody.

I'd also watch how deep real users actually nest their groups.
I designed for 2–3 levels.
I don't know if that matches how people really work.

🔴 **Self-bite:**
> _still thinking about this one_

---

### METADATA STRIP

Role: UX/UI Designer (core feature design)
Platform: Web application
Timeline: 3 months · 2024
Team: Tech lead · PM · Front-end engineers · QA
Scope: Advanced search · Condition builder · IA · Handoff documentation

---

## ═══════════════════════════════════════
## ส่วนที่ 4: PROJECT PAGE — 02 3BB MEMBER
## ═══════════════════════════════════════

---

### THE SETUP

3BB Member already had an app.
Millions of users on Play Store and App Store.
Billing, packages, service access, account management —
established flows that people used every day without thinking.

I didn't redesign the product.
I worked inside a shared design file
that held years of flows, versions, archived pages,
and migration-era decisions stacked on top of each other.

The first problem wasn't design.
It was figuring out which screen was the real one.

🔵 **Thinking Mark:**
> _the file was the archaeology site — every layer was a different era_

🔴 **Self-bite:**
> _design problem zero: which version is current?_

---

### WHAT WAS LOCKED

- Established user journeys — members knew the app. Unnecessary redesign risks confusing routine tasks.
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

I added and refined specific states:
login error handling, mobile OTP registration,
auto-pay setup, bill-delivery channel selection.

Each state got clear copy, hierarchy, and a next action
that QA and dev could implement consistently.

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
Platform: Mobile app · Website
Year: 2024 – Present
Status: Live — Play Store & App Store
Scope: My Package · Home · Login error · SME DIY · Register OTP · Auto-pay · Bill Delivery
Team: Product · Business · Developers · QA

---

## ═══════════════════════════════════════
## ส่วนที่ 5: PROJECT PAGE — 03 COUNTER SERVICE POS (สั้น)
## ═══════════════════════════════════════

---

### THE SETUP

Cashiers process hundreds of transactions per shift.
They don't read the screen — they hit coordinates on muscle memory
built over months of the same layout, the same buttons, the same flow.

The interface needed better hierarchy and consistency.
But the flow was fixed. The button positions were fixed.
The brand identity was fixed. The screens ranged from 800×600 to 1920×1080.

Everything was locked except spacing and contrast.

🔴 **Self-bite:**
> _design with nothing left to design — that's the brief_

---

### WHAT I ACTUALLY DID

**Spacing rules inside a rigid grid**
Uneven margins and local offsets made the screen hard to scan during peak hours.
I standardized spacing across all button groups and transaction lists.
Peak-hour scanning speed depends on predictable alignment
more than any individual component style.

**Adaptive scaling for two worlds**
Linear scaling produced oversized buttons on 1080p
and unreadable text on 800×600.
I designed two separate layout profiles —
compact rows with essential metadata for legacy screens,
expanded sections with purchase details for modern ones.

The tradeoff: two wireframe sets maintained through every revision.

🔵 **Thinking Mark:**
> _two resolutions, two layouts, one muscle memory — don't break the third one_

---

### EVIDENCE

[Fig 1.1] Optimized POS interface — enhanced hierarchy within standard key alignments
[Fig 2.1] Dual-resolution specs — margin/padding/border adjustments across hardware profiles

---

### WHAT I'D DO DIFFERENTLY

This project needs proof.
The entire design rests on one claim:
better hierarchy and spacing speed up checkout
without moving a single control.

If it reaches live testing, I'd log keystroke timing on the terminals —
real transaction-speed data, no cashier interrupted.

🔴 **Self-bite:**
> _the honest answer: I don't know if it's faster yet_

---

### METADATA STRIP

Role: UX/UI Designer
Platform: POS terminal · 800×600 & 1920×1080
Year: 2023
Status: Design spec · Review completed
Scope: Visual hierarchy · Spacing system · Dual-resolution layouts

---

## ═══════════════════════════════════════
## ส่วนที่ 6: NAARAAN — THUMBNAIL ONLY
## ═══════════════════════════════════════

Naaraan Store Builder
E-commerce SaaS · 2022 · Prototype

Sellers didn't fail at features. They failed at sequence.
Setup and daily operations were mixed in one interface —
first-day merchants had to think like power users.

Separated one-time setup from routine management.
Setup became a guided path. Daily work became a cleaner workspace.

(ไม่มี full case study page — card + short description เท่านั้น)

---

## ═══════════════════════════════════════
## ANNOTATION SYSTEM — VISUAL SPEC
## ═══════════════════════════════════════

### สองสี สอง voice

| | 🔵 Thinking Mark | 🔴 Self-bite |
|---|---|---|
| **สี** | น้ำเงิน (muted/ink blue) | แดง/warm tone (ยังไม่ lock — อาจเป็นแดงเข้ม, terracotta, หรือ warm brown) |
| **น้ำเสียง** | สังเกต วิเคราะห์ จดบันทึก | กัดตัวเอง กัดปัญหา มี wit |
| **เหมือน** | Field notes ของนักวิจัย | Inner monologue ที่หลุดออกมา |
| **ตัวอย่าง** | "this is where design actually starts" | "sounds good — until you have to prove it" |
| **ความถี่** | เยอะกว่า (~60%) | น้อยกว่า (~40%) |
| **Visual** | ลูกศร/เส้นชี้ไปจุดที่ annotate | ลอยอิสระ ไม่ต้องชี้เสมอไป |

### Font
- ทั้งสองใช้ handwritten font ตัวเดียวกัน
- แยกกันด้วยสีเท่านั้น
- ไม่มี label "Thinking Mark" หรือ "Self-bite" บนเว็บ — คนอ่านจะจับ pattern เอง

### Placement
- Thinking Marks → ชิดขอบ ข้างๆ content มีเส้น/ลูกศรชี้ (เหมือน ref ภาพ 2 + 8)
- Self-bites → ลอยอิสระกว่า อาจเอียง/หมุนเล็กน้อย ไม่ต้องมีเส้นชี้เสมอ

### ข้อห้าม
- ห้ามมี 2 สีเดียวกันติดกัน (ถ้ามี 2 annotations ใน section ให้สลับสี)
- ห้ามมีมากกว่า 2 annotations ต่อ section
- ห้ามให้ self-bite เยอะกว่า thinking mark ในหน้าเดียว
- ห้ามใส่ annotation ใน metadata strip

---

## ═══════════════════════════════════════
## SUMMARY COUNT
## ═══════════════════════════════════════

| Section | 🔵 Thinking Mark | 🔴 Self-bite | รวม |
|---|---|---|---|
| Landing | 1 | 1 | 2 |
| Card — CDP | 1 | 0 | 1 |
| Card — 3BB | 1 | 0 | 1 |
| Card — POS | 0 | 1 | 1 |
| Card — Naaraan | 0 | 0 | 0 |
| CDP page | 4 | 3 | 7 |
| 3BB page | 3 | 3 | 6 |
| POS page | 1 | 2 | 3 |
| **รวมทั้งหมด** | **11** | **10** | **21** |

Ratio: 52:48 → เกือบ 60:40 — ปรับได้ตอน implement

---

## ═══════════════════════════════════════
## NOTES
## ═══════════════════════════════════════

- ลำดับ: CDP (01) → 3BB (02) → POS (03) → Naaraan (04 thumbnail)
- About + Contact sections ยังไม่ได้เขียน — รอ confirm
- สี Self-bite ยัง flexible — แดง, terracotta, warm brown เลือกตอน implement
- Annotation layer ทำได้ทั้ง static หรือ animated (fade in on scroll)
- ภาษาใน annotation ทั้งหมดเป็น EN ตาม portfolio language
