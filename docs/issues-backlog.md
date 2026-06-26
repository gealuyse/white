# Issues backlog — portfolio

บันทึกงานค้างทั้งหมด (9 ข้อ) สำหรับยิงเข้า GitHub Issues
ที่มา: audit + การตรวจเอง. ตัวสร้าง issue อัตโนมัติ: `C:\Users\nattd130\Downloads\portfoilo-create-issues.ps1`

> **สร้าง issue อัตโนมัติไม่ได้** เพราะ `gh` ยังไม่ติดตั้ง + GCM ไม่คืน token แบบ non-interactive.
> รันเองได้ด้วย (พิมพ์ `!` นำหน้าใน session ได้):
> ```
> winget install --id GitHub.cli ; gh auth login
> powershell -ExecutionPolicy Bypass -File "C:\Users\nattd130\Downloads\portfoilo-create-issues.ps1"
> ```

จัดกลุ่มตาม impact:
- 🔴 ควรทำก่อน (เห็นชัด): #1 nav ✅, #2 caption ฝัง (รอรูปใหม่)
- 🟡 คุณภาพ/เครดิต: #3 cover (รอรูป), #4 screenshot (รอรูป), #5 fact strip ✅, #6 chunking ✅
- 🟢 เก็บกวาด: #7 mojibake ✅, #8 raw px ✅, #9 annotation (deferred)

**สรุปสถานะ (2026-06-24):** แก้ในโค้ดครบทุกข้อที่ทำได้แล้ว → #1, #5, #6, #7, #8 ✅
เหลือ #2/#3/#4 = ต้อง re-export รูป (codex), #9 = รอตัดสินใจว่าจะ ship annotation ไหม

---

## 1. Nav: "Approach" link only appears on cdp & counter (desktop) — inconsistent global nav — ✅ แก้แล้ว (2026-06-24)
🔴 จาก audit #4 (จริง) · ลงมือในโค้ดได้ทันที
**แก้แล้ว:** เพิ่ม Approach (`.nav-approach`) ทุกหน้า — index/3bb ลิงก์ `index.html#approach` (หน้าแรกลิงก์ section ตัวเอง). nav 4 ปุ่มเท่ากันทุกหน้า
**+ เจอบั๊กแฝงตอน verify:** กฎซ่อนบนมือถือ `.nav-approach{display:none}` (0,1,0) **แพ้** `.site-nav li{display:flex}` (0,1,1) → Approach ไม่เคยถูกซ่อนบนมือถือเลย. แก้ specificity เป็น `.site-nav .nav-approach{display:none}` (0,2,0). verify ด้วย headless chrome: desktop โชว์ 4 / mobile <860px โชว์ 3 (ซ่อน Approach) ✅

`index.html` และ `3bb-member.html` มี nav = Work / About / Contact ส่วน `cdp.html` และ `counter-service-pos.html` มีปุ่มที่ 4 `<li class="nav-approach">Approach</li>` เพิ่ม. กฎ `.nav-approach{display:none}` อยู่ใน `@media(max-width:860px)` เท่านั้น → บน desktop สองหน้านี้โชว์ 4 ปุ่ม ที่เหลือ 3 ปุ่ม.
**แก้:** เพิ่ม Approach ทุกหน้า หรือเอาออกจาก cdp/counter

## 2. Assets: figure captions baked into PNGs conflict with HTML "Part N" labels
🔴 ตรวจเจอเอง · ต้อง re-export รูป

รูป screenshot (เช่น `assets/projects/3bb-member/fig-1-1.png`, `fig-2-1.png` + ของ cdp/counter) มี caption "Fig 1.1 / Fig 2.1 —" ฝังในไฟล์ภาพ ขณะที่ HTML ใช้ "Part N" → label ซ้ำ และบน 3bb เลขสวนทางกัน (fig-2-1 ฝัง "Fig 2.1" แต่อยู่ใต้ "Part 1").
**แก้:** export รูปใหม่ไม่มี caption ฝัง

## 3. Assets: cdp cover is 4:3 but rendered in a 16:9 hero (crops ~25%)
🟡 known · ต้อง re-export รูป

`assets/projects/cdp/cover.png` = 1448×1086 (4:3) แต่กล่อง hero เป็น 16:9 + `object-fit:cover` → โดน crop บน-ล่าง ~25%.
**แก้:** export ใหม่เป็น 16:9 (~1600×900) — cover ของ 3bb/counter เป็น 16:9 อยู่แล้ว

## 4. Evidence: case-study screenshots illegible at scan size
🟡 secondary

รูปที่แทรกเป็น UI ทึบย่อเล็ก จุด proof (estimated-reach, nested AND/OR, per-variable specs) อ่านไม่ออกถ้าไม่คลิกซูม.
**แก้:** crop/zoom จุดสำคัญ หรือใส่ callout ให้อ่านได้ตั้งแต่สแกนรอบแรก

## 5. UI: fact strip renders all six fields at equal weight — ✅ แก้แล้ว (2026-06-24)
🟡 secondary
**แก้แล้ว:** เพิ่ม `.fact-key` ให้ Role + Status (dd หนัก 600 + สี ink) ทั้ง 3 case study + แถมแก้ 3bb fact strip ` - ` → ` · ` ให้ตรง convention

fact strip บนสุด (Role/Platform/Timeline/Team/Scope/Status) น้ำหนักเท่ากันหมด ทั้งที่ Role/Status มีน้ำหนักต่อ recruiter มากกว่า Team/Timeline.
**แก้:** เพิ่ม hierarchy ให้ field สำคัญ

## 6. Content: setup opener + reflection still single dense blocks (phase 2) — ✅ แก้แล้ว (2026-06-24)
🟡 secondary
**แก้แล้ว:** ซอย setup opener + reflection เป็นย่อหน้าสั้นตามจังหวะ ทั้ง 3 หน้า (แตก `<p>` ที่ beat ธรรมชาติ ไม่แก้ถ้อยคำ)

ย่อหน้าแรกของ "setup" อัด 3 ความคิด และ "What I'd do differently" เป็นก้อนเดียว 4–5 ประโยค.
**แก้:** ซอยเป็นช่วงสั้นๆ เพื่อจังหวะการอ่าน (เฟส 2 ที่ค้าง)

## 7. Docs: portfolio-spec.md has mojibake on non-ASCII glyphs — ✅ แก้แล้ว (2026-06-24)
🟢 จาก audit #5 (จริง)

`docs/portfolio-spec.md` ส่วนบนมีอักขระเพี้ยน (→, 🔵/🔴, em-dash, ไทย กลายเป็น byte เพี้ยน — CP874 mojibake + BOM + CRLF).
**แก้แล้ว:** ซ่อม mojibake ทั้งหมดกลับเป็น UTF-8, ลบ BOM, คืน LF, แก้ `?`→`×`/`—` ที่หลุด, และทำหัว section ทั้ง 5 ให้เข้าพวก. ดู [[utf8-encoding-gotcha]] กันพลาดซ้ำ

## 8. CSS: hardcoded px bypass the --sp token scale — ✅ แก้แล้ว (2026-06-24)
🟢 จาก audit #6 (จริง) · ลงมือในโค้ดได้ทันที · cosmetic ไม่มี user impact
**แก้แล้ว:** footer `140px`→`--sp-10`, `.foot` padding `26px 0 40px`→`--sp-5 0 --sp-7`. (หมายเหตุ: ยังมี raw px ที่อื่น เช่น nav/hero/btn ที่เป็น component-level off-scale — ถ้าจะ refactor ทั้งหมดเป็นงานใหญ่แยกต่างหาก)

`style.css:209` `footer{margin-top:140px}` และ `:210` `.foot{padding:26px 0 40px}` ใช้ px ดิบแทน `--sp-*`.
**แก้:** map เป็น token ใกล้สุด หรือ document ข้อยกเว้น

## 9. Feature: case-study margin annotations not built (only homepage demo)
🟢 deferred

component annotation (เส้นใต้+โน้ตขอบ) ทำเดโมไว้บน `index.html` จุดเดียว แต่ cdp/3bb/counter ยังไม่มี (portfolio-spec.md ระบุว่า defer, มีไฟล์ทดลอง `cdp-3marks.html`/`cdp-5marks.html`).
**แก้:** ตัดสินใจว่าจะ ship annotation บน case study ไหม

---

หมายเหตุ: ข้อที่ audit รอบนั้นรายงาน "ภาพซ้ำ CDP" และ "annotation-brittle" = เท็จ จึงไม่อยู่ในลิสต์
