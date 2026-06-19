# Portfolio v2 — Implementation Notes

อัปเดตตาม `claude-code-brief.md` + `portfolio-content-v2-dual-annotation.md` (source of truth)
ไฟล์นี้บันทึกสถานะงาน + spec ของ annotation system ไว้กันลืม / ส่งต่อ

---

## 1. สถานะงานตาม brief (6 priorities)

| # | งาน | สถานะ |
|---|-----|-------|
| 1 | Project order → CDP first (CDP·3BB·POS·Naaraan) | ✅ |
| 2 | Copy ใหม่จาก content file (hero, one-liners, project pages) | ✅ |
| 3 | ยุบ project page เหลือ 5 sections + metadata strip ล่างสุด | ✅ |
| 4 | Annotation system (handwritten, 2 สี, placement) | 🚧 **trial เท่านั้น** (ดู §3) |
| 5 | Naaraan → card only, ลบ `naaraan.html` | ✅ |
| 6 | 3BB year → `2024 – Present`, Live | ✅ |

### โครงสร้าง project page (5 sections)
`The setup → What was locked → What I actually did → Evidence → What I'd do differently` + `metadata strip` (`.proj-meta-foot`) ล่างสุด
- POS เป็น short case → ไม่มี "What was locked" (รวมเข้า setup)
- ตัดทิ้ง: context / constraints / fixed-vs-flexible / handoff / outcome / status-note / access-note

### ไฟล์
- `index.html` — hero v2 + work cards (3 ลิงก์ + Naaraan thumbnail) + section กลางเดิม (What gets easier / Around the table / Working habits) + About + Contact (ยังไม่เปลี่ยนตาม brief)
- `cdp.html` / `3bb-member.html` / `counter-service-pos.html` — case studies
- `naaraan.html` — **ลบแล้ว**
- `style.css` — shared
- `project-details.raw.json` — ⚠️ stale (content เก่า, ไม่ได้ใช้ runtime)

---

## 2. Decisions ที่ล็อกแล้ว

- **ชื่อ:** Natthapath Damrongsri (เต็ม) — "G" ในไฟล์เป็นชื่อเล่นใน Claude เฉยๆ
- **Font stack:** คงเดิม Newsreader / Inter (+ Caveat สำหรับ annotation) — *ไม่ใช่* Fraunces/DM Sans ตาม brief
- **ไม่มี GSAP** — เว็บนี้ static; motion ใช้ vanilla JS (IntersectionObserver)
- **สี annotation:** 🔵 Thinking `--think:#3E5C8A` (น้ำเงิน) · 🔴 Self-bite `--bite:#8C857B` (เทาอ่านได้)
- **Self-bite = ตัวพิมพ์เล็กล้วน**
- **kicker label** ใช้ Inter ตัวพิมพ์ใหญ่ (ไม่เพิ่ม JetBrains Mono)
- Landing เก็บ section กลางทั้ง 3 ไว้

---

## 3. Annotation system — "pencil-writing trace"

### Concept
annotation วาง**ทับบนรูป screenshot** (ref-style) วาด/เขียนตัวเองตอน scroll เข้า แล้วจางพักไว้ · hover ยกเต็ม
แยก 2 voice ด้วยสี (ไม่มี label): 🔵 Thinking (สังเกต/วิเคราะห์, มีเส้นชี้) · 🔴 Self-bite (กัดตัวเอง, lowercase, ลอยอิสระ)

### สถานะ: TRIAL
ทำจริงแล้ว **เฉพาะ `3bb-member.html` → Evidence Fig 1.1** เท่านั้น
หน้าอื่น (cdp/pos/index) ยังเป็น annotation **static** เดิม (`<span class="anno anno-think|anno-bite">`)

### กลไก (อยู่ใน `style.css` block "PENCIL-WRITING TRACE")
- **เส้น/วง** (`.a-conn` `.a-ring`) วาดด้วย `stroke-dashoffset`
- **ตัวหนังสือ** (`.a-note` Caveat, `.a-kick` Inter uppercase, `.a-strike`) เขียนซ้าย→ขวาด้วย `clip-path` wipe
- **หัวปากกา** (`.a-pen`) วิ่งนำด้วย `@keyframes anno-penrun` (ตั้ง `--pen-dx` ต่อโน้ต)
- **wobble** = SVG `<filter id="pencil-wobble">` (feTurbulence + feDisplacementMap) ครอบ `<g>` — ทำงานทุกเบราว์เซอร์ (SVG ล้วน)
- trigger: JS เติม class `.is-drawn` บน `.anno-fig` เมื่อ scroll เข้า (IntersectionObserver ท้าย body)
- fallback: `.no-js` (flip ใน `<head>`) โชว์ครบ · `prefers-reduced-motion` โชว์ settled ไม่ animate

### Vocabulary (เลือกใช้ตามสิ่งที่โน้ตอยากสื่อ)
| element | class | ใช้เมื่อ |
|---|---|---|
| kicker label | `.a-kick` | หัวข้อสั้นๆ เหนือโน้ต (PATTERN, STATE) |
| handwritten note | `.a-note .think\|.bite` | ตัวข้อความลายมือ |
| connector + arrow + dot | `.a-conn` `.a-head` `.a-dot` | ชี้เข้าจุดในรูป (Thinking) |
| ring / วงรี | `.a-ring` | ล้อมพื้นที่ในรูป |
| strikethrough before→after | `.a-strike` (`.gone`/`.kept`) | decision แบบ "ตัดอันนี้ เอาอันนี้" (มักเป็น self-bite) |

### กฎ
- คุมให้ annotation กินพื้นที่ที่เห็น ~20% (อย่ารก)
- self-bite ห้ามมากกว่า thinking ในหน้าเดียว
- annotation ทั้งหมดเป็นภาษาอังกฤษ
- ห้ามใส่ใน metadata strip

### วิธีเพิ่ม annotated figure ใหม่
1. หน้านั้นต้องมี `<html class="no-js">` + `<script>…replace('no-js','js')</script>` ใน `<head>` และ IO script ท้าย `</body>` (ดูตัวอย่างใน `3bb-member.html`)
2. ห่อรูปด้วย:
```html
<div class="anno-fig" tabindex="0" aria-label="…">
  <img src="…" width="W" height="H" alt="…">
  <svg class="anno-layer" viewBox="0 0 W H" preserveAspectRatio="none" aria-hidden="true">
    <defs><filter id="pencil-wobble" …>…</filter></defs>
    <g filter="url(#pencil-wobble)"> …elements… </g>
  </svg>
</div>
```
3. ตั้ง `style="--d:<delay>; --pen-dx:<px>"` ต่อ element เพื่อ stagger ลำดับการเขียน

---

## 4. รอบ feedback / ค้างอยู่

- ⏳ **รอ approve feel ของ trial** (3bb Evidence) ก่อน roll out
- ⚠️ จุด anchor (เส้น/วงชี้) ใช้พิกัดประมาณจาก ref → ต้อง nudge ให้ตรง element จริงหลังเปิดดู
- ยังไม่ได้ทำ: annotation แบบ "ขยายความ text" (นอกเหนือจากบนรูป) ตาม brief ข้อ 5

### Rollout checklist (หลัง approve)
- [ ] เพิ่ม no-js flip + IO script ลง `cdp.html`, `counter-service-pos.html`, `index.html`
- [ ] แปลง annotation static ทั้ง 21 จุด → ระบบ pencil-writing (ตาม placement/copy ใน content file: index 5 · CDP 7 · 3BB 6 · POS 3)
- [ ] เพิ่ม annotated figure บน Evidence ของ CDP/POS ตามต้องการ
- [ ] nudge พิกัด anchor ให้ตรงทุกรูป
- [ ] tune `--d` / `--pen-dx` / ความเร็ว / มุมเอียง ให้ลงตัว

---

## 5. ค้างจาก QA (คนละเรื่องกับ brief — แก้ก่อน publish)

- `canonical` / `og:url` / `og:image` ยังเป็น placeholder `https://natthapath.example/…` ทุกหน้า
- ไม่มีไฟล์ `og.png` (social preview จะแตก)
- About + Contact ยังไม่เปลี่ยน — รอ brief แยก
