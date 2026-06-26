# Image assets — re-gen TODO

รูปที่ต้อง gen/re-export ใหม่ (แก้ #2 caption ฝัง + #4 อ่านไม่ออก). prompt อยู่ท้ายไฟล์.
ทุกรูป: **ห้ามมี caption / "Fig x.x" / ลายน้ำ overlay**, label ใน UI อ่านออกจริง, light theme.

## Checklist

| ☐ | ไฟล์ | บทบาท (Part) | ปัญหา | ขนาดเป้า | ลำดับ |
|---|---|---|---|---|---|
| ☐ | `assets/projects/cdp/fig-1-1.png` | P1 segment builder + estimated reach | #2 | 1600×900 | 🔴 |
| ☐ | `assets/projects/cdp/fig-2-2.png` | P2 nested AND/OR logic | #2 | 1600×900 | 🔴 |
| ☐ | `assets/projects/cdp/fig-2-1.png` | P3 search selector + metadata rows | #2 | 1600×900 | 🟡 |
| ☐ | `assets/projects/cdp/fig-2-3.png` | P4 handoff spec sheet | #2 | 1600×900 | 🟡 |
| ☐ | `assets/projects/cdp/cover.png` | cover (มี 16:9 แล้ว) | optional | 1600×900 | 🟢 |
| ☐ | `assets/projects/3bb-member/fig-1-1.png` | P2 updated flows (home/package/login-error) | **#2 + #4** บอร์ดจิ๋ว→3 จอใหญ่ | 1600×900 | 🔴 |
| ☐ | `assets/projects/3bb-member/fig-2-1.png` | P1 contribution-scope diagram | **รูปผิด (banking slide)** + #2 | 1600×900 | 🔴 |
| ☐ | `assets/projects/3bb-member/cover.png` | cover (มี 16:9 แล้ว) | optional | 1600×900 | 🟢 |
| ☐ | `assets/projects/counter-service-pos/screen_proof.png` | P1 wide proposal | #2 | 1920×1080 | 🔴 |
| ☐ | `assets/projects/counter-service-pos/fig-2-1.png` | P2 legacy 800×600 compact | **#2 + #4** | 1600×900 | 🟡 |
| ☐ | `assets/projects/counter-service-pos/cover.png` | cover (มี 16:9 แล้ว) | optional | 1600×900 | 🟢 |

หมายเหตุ: ไฟล์ 3BB บนดิสก์ชื่อ `Fig-1-1.png`/`Fig-2-1.png` (F ใหญ่) แต่ git track เป็นตัวเล็ก — ตอน export ใหม่ตั้งชื่อ **ตัวเล็ก** ให้ตรง

## สิ่งที่ audit เจอเพิ่ม (2026-06-24) — สำคัญ
- **CDP `fig-2-1` ↔ `fig-2-2` เนื้อหาสลับกัน** — ไฟล์ `fig-2-1.png` = *nested blocks* (caption ฝัง "Fig 2.2"), `fig-2-2.png` = *search selector* (caption ฝัง "Fig 2.1"). HTML เคยใส่สลับ → **แก้ src ใน cdp.html แล้ว** ให้เนื้อหาตรง lead. ตอน re-export: ตั้งชื่อให้ตรงเนื้อหา + ลบ caption ฝัง
- **CDP baked caption เลขมั่ว** — caption ในรูปไม่ตรงกับ "Part N" ใน HTML อยู่แล้ว → re-export ลบทิ้งให้หมด
- **3BB `Fig-2-1.png` เป็นรูปผิด/หลอก** — ตอนนี้เป็นสไลด์ generic *"Migrating a legacy banking app"* + BEFORE/AFTER (ผิดข้อเท็จจริง: 3BB = telecom ไม่ใช่ banking; และไม่ใช่ contribution-scope diagram ที่ lead ต้องการ) → **ต้อง gen ใหม่ตาม prompt** (ลำดับเลื่อนเป็น 🔴)
- **POS `screen_proof` vs `cover`** — เนื้อหาใกล้กัน (billers grid ทั้งคู่) และ screen_proof ไม่ตรง alt (alt บอก current-order/payment panel แต่รูปเป็น billers grid home) → ตอน re-export ทำให้ต่างกันชัด/ตรง alt

---

## Prompts

### CDP — enterprise web SaaS (อังกฤษ, light, dense-but-clean, สไตล์ Segment/Amplitude, accent น้ำเงิน/teal)

**cover.png** (1600×900)
> Clean enterprise SaaS dashboard, "Customer Data Platform" segment & condition builder workspace, wide overview: left nav rail, central segment canvas with condition groups, right estimated-reach summary panel showing a large audience count and a donut chart. Light theme, neutral grays + single blue accent, Inter-style type, hairline borders, generous spacing. Realistic readable labels. No overlaid captions or figure labels. 16:9.

**fig-1-1.png** (1600×900) — P1
> Close, legible view of a B2B segment builder workspace: one visible condition group (attribute + event rows with AND/OR operators) on the left, and a prominent "Estimated reach" panel on the right updating a numeric audience size with a small trend. Light UI, blue accent, readable English field labels. Single focused screen, large enough to read every row. No captions/figure numbers overlaid. 16:9.

**fig-2-2.png** (1600×900) — P2
> Enterprise condition builder showing AND/OR groups nested two-to-three levels deep, drawn as indented logical cards separated by distinct operator blocks, consistent 8px spacing, connector lines — deliberately NOT a wall of brackets. Light theme, readable labels, clear hierarchy between nesting levels. Single clean screen. No overlaid caption text. 16:9.

**fig-2-1.png** (1600×900) — P3
> Advanced search / event selector dropdown open over a builder: a categorized auto-complete list where each result row shows the item name plus inline metadata (type, source, last-seen) so a choice can be verified before adding. Light UI, highlighted hovered row, readable English entries. Focused crop on the selector. No overlaid captions. 16:9.

**fig-2-3.png** (1600×900) — P4
> A developer handoff spec sheet for a form component: button/focus/validation/disabled states laid out in a labeled grid, with per-variable input rules and an edge-case note column. Clean documentation layout, light theme, annotation callouts that are part of the spec (not figure captions), readable. Looks like a real design-handoff artboard. No "Fig" label overlaid. 16:9.

### 3BB — mobile telecom app (ไทย, consumer, brand ส้ม/น้ำเงิน, การ์ดมน)

**fig-1-1.png** (1600×900) — P2 — *แก้ #4: 3 จอใหญ่อ่านออก ไม่ใช่บอร์ดจิ๋ว*
> Three mobile app screens shown side by side at large, readable size in a clean light studio layout (no device clutter): (1) telecom app Home with service shortcuts and a package summary card, (2) "My Package" detail screen with plan, speed, billing, (3) a login-error state with clear error message and a next action. Consumer telecom app, orange + white brand, rounded cards, realistic Thai UI labels, legible. No captions or figure numbers overlaid. 16:9.

**fig-2-1.png** (1600×900) — P1 — *diagram ไม่ใช่ screen*
> A clean information-architecture / scope diagram on a light canvas: two labeled regions — "Inherited / legacy context" (muted, grayed cluster of small screen thumbnails) vs "Selected for update" (highlighted cluster with an accent outline), connected by simple lines showing which screens & states were chosen for the migration. Minimal, editorial, readable region labels. No figure-caption text overlaid. 16:9.

**cover.png** (1600×900) — optional
> Hero cover for a telecom app migration case: 2–3 phones angled, showing an orange-branded "Member" app home, with a subtle "3BB → AIS, v4.0.35" migration motif. Light premium background, cinematic but clean. Brand text on the device is fine; no figure caption overlaid. 16:9.

### POS — cashier terminal (ไทย, utilitarian, ปุ่มใหญ่, โลโก้ผู้ให้บริการไทย)

**screen_proof.png** (1920×1080) — P1
> Wide 1920×1080 point-of-sale cashier screen, proposed layout: left "current order" panel (line items + total), center product/biller catalogue grid with category tabs, right grouped payment actions and operational controls — grouped and weighted so the next action reads first. Utilitarian light UI, large touch targets, clear hierarchy via spacing/contrast (not flashy). Realistic Thai labels & biller logos. No overlaid captions. 16:9.

**fig-2-1.png** (1600×900, 16:9) — P2 — *แก้ #4: compact แต่อ่านออก*
> A compact 800×600 legacy POS cashier screen: top status bar (cashier, branch, date), a categorized biller/product grid in tight rows with essential metadata only, bottom action bar with pagination. Crowd-free despite small size — compact profile that stays legible. Functional light UI, Thai labels & service logos, readable at small scale. 16:9 — the compact 800×600 screen letterboxed/centered within a 16:9 canvas (do not stretch). No overlaid figure caption.

**cover.png** (1600×900) — optional
> Cover for a POS case study: a cashier terminal (monitor + small tablet) on a counter showing a categorized billers grid home screen, clean light scene, slight depth. Functional but premium. No figure caption overlaid. 16:9.
