# Site content inventory

> เนื้อหาจริงของแต่ละหน้า (ดึงจาก HTML). อัปเดต 2026-06-24.



---

# Landing / Homepage 
`index.html`
_Product Designer — Enterprise & data platforms · Bangkok_

# I design complex systems people can use with confidence.
3BB · AIS migration · millions of users · enterprise SaaS · operational tools
Real product work rarely starts from a clear brief. I work where the requirements are still shifting — turning unclear asks into interfaces that make sense, and choosing what works over what just looks good.
Open to product design opportunities — natthapath.d@gmail.com

## What gets easier
Complexity never really disappears — in good design it just stops being the user's problem. My job is to absorb it while designing, so the screen stays quiet.

## Situations I've worked through

### Complex logic that couldn't be simplified
SaaS · Segment Builder · Condition Logic
Customer Data Platform — Segment & Condition Builder
Marketing teams build audience segments out of layered attributes, events, and consent rules. I turned that tangle of logic into a workspace they could read and build in with confidence. The advanced search underneath was the hardest piece to get right — and the piece they'd never have to think about.

### A migration with a system underneath
Mobile · Web · Migration UX
3BB Member App and Website
3BB Member was already live for millions — my job wasn't to redesign it. It was to work inside a large inherited file, update the flows where migration logic actually changed the user's path, and get those screens ready for development and QA.

### A redesign that had to feel like no change at all
Retail · Physical Terminal · Operational UX
Counter Service POS
Point-of-sale terminals run on speed and muscle memory. The job was to improve the hierarchy without moving what cashiers' hands already knew — better, without making anyone relearn.

## Around the table
Shared understanding is the only way to build anything significant.
Design doesn't happen in a vacuum. It happens in meetings, Slack threads, and rough prototypes — I spend as much time writing and explaining as I do on pixels. If the engineer, the PM, and the designer aren't seeing the same problem, they won't build the same solution.

## How I work
- Start from what's there.
- Make a first useful version. (Perfection is for iteration three.)
- Reduce confusion before adding polish.
- Respect what can't change; question what can.
- Don't make people relearn.
- Learn enough for the next decision.

## About
I'm a Bangkok-based UX/UI designer who stays quiet at the start. I'd rather understand the messy reality before proposing a clean solution. And I care about what I leave behind — clean files, clear docs, a system that outlasts my time on the project.

## Contact
Let's talk about what you're building.
natthapath.d@gmail.com · LinkedIn · Résumé


---

# Case 01 — CDP 
`cdp.html`
_Enterprise SaaS / Customer Data Platform_

# Customer Data Platform — Segment & Condition Builder
The hardest query logic in the system had to feel like the easiest screen — so marketers could nest conditions three levels deep and still trust the audience it resolved to.
**Outcome:** Handed off as developer- and QA-ready specs — built on documented behaviour, not guesswork.
- **Role:** UX/UI Designer (core feature design)
- **Platform:** Web application
- **Timeline:** 3 months · 2024
- **Team:** Tech lead · PM · Front-end engineers · QA
- **Scope:** Segment builder · Condition logic · Advanced search · Handoff docs
- **Status:** Handed off · Implementation supported

## The setup
Marketing teams used this customer data platform to build audience segments from attributes, events, consent rules, and campaign conditions.
The hard part was not showing more data. It was turning layered logic into a workspace they could read, configure, and trust.
The interface already existed. It worked. But "works" and "works confidently" are different things.
A marketer could build a segment, nest AND/OR groups two or three levels deep, and still miss that the logic quietly resolved to zero people.
That was the problem.

## What was locked
- Legacy data schemas and variable mappings — untouchable.
- Backend logic constraints — what the system could actually query.
- No complete rebuild. Limited dev resources. Improve the workspace inside the existing platform.

## What I actually did

### A workspace for layered audience logic
**Problem** 
Marketers had to combine attributes, events, consent rules, and AND/OR groups inside one workspace. The risk was not only choosing the wrong condition — it was building logic that looked valid while quietly resolving to the wrong audience.
**Decision** 
I structured the builder around visible condition groups, clear operator blocks, and an estimated-reach panel, so the user could understand the segment as it was being assembled.
**Part 1** — What that looks like in use — the whole segment stays readable as it's built, with estimated reach updating in the same view.
**Part 2** — And when the logic goes deep — AND/OR groups nest two or three levels without becoming a wall of brackets.
**Trade-off** 
Showing logic clearly takes space. The interface had to stay readable before it tried to show everything.

### Search that shows what you're choosing
**Problem** 
The event and attribute catalog was large and growing. A plain dropdown meant scrolling through entries and trusting that a label meant what it seemed to mean.
**Decision** 
I designed a categorized auto-complete selector with metadata visible inside each result row, so users could verify a condition before adding it to the segment.
**Trade-off** 
A richer selector is heavier to specify and build. Every empty state, loading state, and overflow case needed explicit rules.
**Part 3** — In the selector itself — every result carries the metadata to verify a condition before it goes into the segment.

### Specs that answer the questions devs actually ask
**Problem** 
Dynamic inputs changed behavior based on selected conditions. Without explicit specs, developers had to guess — and every guess became a QA ticket.
**Decision** 
I mapped button states, focus rings, validation alerts, and input adapters per data variable into handoff specs the team could implement and QA against.
**Trade-off** 
More upfront design work before any code gets written. But fewer conversations that start with "what should this do when..."
**Part 4** — And the spec the team built from — states, validation, and per-variable input rules documented so behaviour wasn't left to guesswork.

## What I'd do differently
The riskiest moment in this tool is invisible: a marketer builds conditions that resolve to zero people and launches an empty campaign without knowing. I'd add a validation layer — a check that warns before nothing goes out to nobody.
I'd also watch how deep real users actually nest their groups. I designed for 2–3 levels. I don't know if that matches how people really work.

## What it shipped
It handed off as developer- and QA-ready specs: condition logic, search states, and per-variable input rules mapped explicitly — so the build ran on documented behaviour instead of guesswork, and the questions that usually turn into QA tickets were answered before any code was written.


---

# Case 02 — 3BB Member 
`3bb-member.html`
_Mobile App / Migration UX_

# 3BB Member
A live app for millions, inside a design file where years of versions stacked on top of each other — the job was finding which screen was real, then updating only the flows the AIS migration actually changed.
**Outcome:** Live on the Play Store & App Store; migration-critical flows handed off dev- and QA-ready.
- **Role:** UX/UI Designer
- **Platform:** Mobile app · Web
- **Year:** 2024 – Present
- **Status:** Live — Play Store & App Store
- **Scope:** Selected flow updates · Migration states · Dev/QA handoff
- **Team:** Product · Business · Developers · QA

## The setup
3BB Member already had an app. Millions of users on Play Store and App Store.
Billing, packages, service access, account management — established flows that people used every day without thinking.
I didn't redesign the product. I worked inside a shared design file that held years of flows, versions, archived pages, and migration-era decisions stacked on top of each other.
The first problem wasn't design. It was figuring out which screen was the real one.

## What was locked
- Established user journeys - members already knew the app. Unnecessary redesign could confuse routine tasks.
- A large inherited file — previous versions, migration sets, archived sections all living together.
- Migration-state complexity — same screen, different behavior depending on customer group.
- Phased delivery — flows had to hold together mid-transition, not just in a final-state mockup.

## What I actually did

### Map current vs. legacy before touching anything
**Problem** 
The file contained years of accumulated work. Not every screen needed updating — most didn't. But no one had clearly marked which flow was intended and which was leftover.
**Decision** 
I separated active states from inherited content, then updated only where migration logic, service state, or implementation requirements actually changed the user's path.
**Trade-off** 
Less visually dramatic. More stable, more shippable.
**Part 1** — What's mine versus what's inherited — the screens and states selected for update, separated from the legacy context around them.

### Treat errors and service changes as first-class screens
**Problem** 
Login errors, registration conditions, billing options — these aren't edge cases. These are the moments where users feel the most uncertainty.
**Decision** 
I added and refined specific states: login error handling, mobile OTP registration, auto-pay setup, and bill-delivery channel selection. Each state got clear copy, hierarchy, and a next action that QA and dev could implement consistently.
**Trade-off** 
More screens to maintain. Fewer implementation gaps to argue about.
**Part 2** — The updated flows themselves — home, package detail, and a login-error state prepared as a development-ready screen.

## What I'd do differently
Map the inherited-vs-contribution boundary on day one. I found it eventually. But the time spent figuring out which screen was current and which was legacy could have been saved with an explicit audit upfront.
That clarity was worth more to the team than any single screen I delivered.

## What it shipped
The migration-critical flows handed off as development- and QA-ready states — each with explicit copy, hierarchy, and a defined next action — and the working file was left with current screens clearly separated from the inherited content around them.


---

# Case 03 — Counter Service POS 
`counter-service-pos.html`
_Operational UX / POS_

# Counter Service POS
Everything was locked except spacing and contrast — and cashiers run on muscle memory, so the screen had to read better without making a single hand relearn where anything was.
**Outcome:** Delivered as a review-approved spec — two layout profiles for 800×600 and 1920×1080 terminals.
- **Role:** UX/UI Designer
- **Platform:** POS terminal · 800×600 & 1920×1080
- **Year:** 2023
- **Status:** Design spec · Review completed
- **Scope:** Visual hierarchy · Spacing system · Dual-resolution layouts

## The setup
Cashiers process hundreds of transactions per shift. They do not read every screen from scratch — they rely on positions, repeated flows, and muscle memory built over time.
The interface needed clearer hierarchy and more consistent spacing.
But the flow was fixed. The button positions were fixed. The brand identity was fixed. The screens ranged from 800×600 to 1920×1080.
Everything was locked except spacing, hierarchy, and contrast.

## What I actually did

### Improve hierarchy without moving the controls
**Problem** 
The interface had uneven spacing, weak grouping, and competing visual weight. During routine transactions, important information had to stand out without changing the controls cashiers already knew.
**Decision** 
I kept the button positions in place and adjusted hierarchy through spacing, grouping, contrast, and clearer separation between transaction areas and action areas.
**Trade-off** 
The result is less dramatic than a full redesign. That was the point — a cashier should not have to relearn the screen to read it better.
**Part 1** — The proposed interface — the same controls, now grouped and weighted so the next action reads first.

### Build layout rules for two screen realities
**Problem** 
The same POS experience had to work across legacy 800×600 terminals and wider 1920×1080 displays. A simple scale-up or scale-down would either crowd the small screen or overinflate the larger one.
**Decision** 
I designed separate layout profiles for compact and expanded screens. The compact version prioritized essential metadata and tighter rows. The wider version gave more room to transaction details, product areas, and payment actions without simply enlarging everything.
**Trade-off** 
Two layout profiles meant more design maintenance. But one flexible mockup would have hidden the real hardware constraint.
**Part 2** — The same screen on legacy 800×600 hardware — a compact profile that keeps the essentials legible without crowding.

## What I'd do differently
This project needs proof. The entire design rests on one claim: better hierarchy and spacing speed up checkout without moving a single control.
If it reaches live testing, I'd log keystroke timing on the terminals — real transaction-speed data, no cashier interrupted.

## What it shipped
It delivered as a review-approved spec: two layout profiles — compact and expanded — with hierarchy, spacing, and contrast rules defined per screen size, and every control left exactly where cashiers' hands already expected it.