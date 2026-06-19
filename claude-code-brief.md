# Portfolio Content Update — Brief for Claude Code

## สิ่งที่เปลี่ยน

Content และ structure ของ portfolio ถูก rewrite ใหม่ทั้งหมด ไฟล์ content ฉบับเต็มอยู่ที่:
- `portfolio-content-v2-dual-annotation.md` (EN — ใช้เป็น source of truth สำหรับ copy)
- `portfolio-content-structure-TH.md` (TH — สำหรับ reference เท่านั้น ไม่ใช่ copy จริง)

---

## 1. Project Order เปลี่ยน

เดิม: 3BB (01) → CDP (02) → POS (03) → Naaraan (04)
ใหม่: **CDP (01) → 3BB (02) → POS (03) → Naaraan (04)**

- CDP เป็น hero case study — เนื้อหายาวที่สุด
- 3BB เป็นตัวที่ 2 — เน้น shipped/live proof
- POS เป็น short case — สั้นกว่าตัวอื่น
- Naaraan เป็น thumbnail/card เท่านั้น — ไม่มี full project page

---

## 2. Project Page Structure เปลี่ยน

เดิมมีหลาย sections ซ้ำกัน (thesis, summary, shortVersion, context, constraints, matrix, decisions, evidence, handoff, outcome, statusNote, reflection)

ใหม่ยุบเหลือ **5 sections ต่อ project page:**

```
1. THE SETUP        — ปัญหาคืออะไร ทำไมมันยาก (2-3 paragraphs)
2. WHAT WAS LOCKED  — constraints สั้นๆ
3. WHAT I ACTUALLY DID — 2-3 decisions เท่านั้น (problem → decision → tradeoff)
4. EVIDENCE         — รูป + captions
5. WHAT I'D DO DIFFERENTLY — reflection/honest closing
```

**ตัดออกทั้งหมด:**
- summary / thesis ซ้ำ
- shortVersion block
- handoff list
- statusNote / disclaimer
- outcome paragraph ยาว
- matrix block (เนื้อหาถูก merge เข้า WHAT WAS LOCKED แล้ว)

**Metadata strip** อยู่ล่างสุดของ project page (Role, Platform, Timeline, Team, Scope, Status)

---

## 3. Project Card (Work Section) เปลี่ยน

แต่ละ card แสดง:
- หมายเลข (01, 02, 03, 04)
- ชื่อ project
- Category tag (ENTERPRISE SAAS / MOBILE APP / OPERATIONAL UX / E-COMMERCE)
- ปี + สถานะ
- **One-liner** — ประโยคที่มี tension ไม่ใช่ summary (ดู copy จาก content file)
- ภาพ 1 ภาพ
- Annotation 1 ตัว (ดูระบบ annotation ด้านล่าง)

---

## 4. Annotation System — ระบบใหม่ทั้งหมด

เพิ่ม **handwritten annotation layer** ลอยอยู่ข้างๆ main content เหมือน margin notes

### มี 2 ประเภท แยกด้วยสี:

**🔵 Thinking Mark (สีน้ำเงิน — muted/ink blue)**
- น้ำเสียง: สังเกต วิเคราะห์ จดบันทึก
- มีลูกศรหรือเส้นชี้ไปยังจุดที่ annotate
- ตัวอย่าง: "this is where design actually starts"

**🔴 Self-bite (สีแดง/warm tone — อาจเป็นแดงเข้ม, terracotta, warm brown)**
- น้ำเสียง: กัดตัวเอง กัดปัญหา มี wit มี personality
- ลอยอิสระกว่า ไม่ต้องมีเส้นชี้เสมอ อาจเอียง/หมุนเล็กน้อย
- ตัวอย่าง: "sounds good — until you have to prove it"

### Visual spec:
- ทั้งสองใช้ **handwritten/script font** ตัวเดียวกัน (ต้องหา font ที่เหมาะ — ดู ref จากภาพ Alder & Co. และ Thinking Marks System)
- แยกกันด้วย **สีเท่านั้น** — ไม่มี label บอกประเภท
- Thinking Marks ชิดขอบ margin มีเส้นชี้
- Self-bites ลอยอิสระ อาจ rotate เล็กน้อย

### กฎ:
- ไม่เกิน 2 annotations ต่อ section
- ห้ามมี 2 สีเดียวกันติดกัน (ถ้ามี 2 ให้สลับสี)
- Self-bite ห้ามเยอะกว่า Thinking Mark ในหน้าเดียว
- ห้ามใส่ annotation ใน metadata strip
- Annotation ทั้งหมดเป็นภาษาอังกฤษ

### ตำแหน่งและเนื้อหาของ annotation แต่ละจุด:
ดูจาก `portfolio-content-v2-dual-annotation.md` — ระบุไว้ครบทุกจุดว่าอันไหนเป็น 🔵 อันไหนเป็น 🔴 และอยู่ข้าง section ไหน

---

## 5. Copy ใหม่ทั้งหมด

**ทุก copy (headline, sub-copy, one-liners, project page content) ถูก rewrite ใหม่**

ใช้ copy จาก `portfolio-content-v2-dual-annotation.md` เป็น source of truth

Tone guidelines:
- Evidence before adjectives — ไม่ใช้คำว่า innovative, impactful, seamless, user-friendly
- ประโยคสั้น จังหวะสลับ มี breathing room
- ซื่อสัตย์เรื่อง scope — ไม่ overclaim แต่ไม่ defensive ซ้ำ
- โชว์ decisions และ tradeoffs ไม่ใช่ผลลัพธ์สวยๆ

---

## 6. 3BB Member ปีเปลี่ยน

เดิม: 2024
ใหม่: **2024 – Present**
Status: **Live — Play Store & App Store**

---

## 7. Naaraan ไม่มี Full Page

Naaraan แสดงเป็น card/thumbnail ใน work section เท่านั้น
ไม่ต้องสร้าง project page
ถ้ามี project page อยู่แล้ว ให้ลบ route / ซ่อน หรือ redirect ไป work section

---

## 8. สิ่งที่ยังไม่เปลี่ยน

- Site structure (landing → work → project pages → about → contact) ยังเหมือนเดิม
- Font stack หลัก (Fraunces / DM Sans / JetBrains Mono) ยังเหมือนเดิม
- GSAP / motion system ยังเหมือนเดิม
- Color palette หลักยังเหมือนเดิม (เพิ่มแค่สี annotation 2 สี)
- About + Contact ยังไม่เปลี่ยน — รอ brief แยก

---

## สรุป priority

1. เปลี่ยน project order → CDP first
2. ใส่ copy ใหม่จาก content file
3. ยุบ project page structure เหลือ 5 sections
4. Implement annotation system (handwritten font + 2 สี + placement)
5. Naaraan → card only, ไม่มี full page
6. 3BB year → 2024 – Present
