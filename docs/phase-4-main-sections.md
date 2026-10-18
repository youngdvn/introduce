# PHASE 4 — MAIN PAGE SECTIONS

> **Trạng thái:** ✅ ĐÃ HOÀN THÀNH TOÀN BỘ (7/7 Tasks)  
> **Mục tiêu:** Xây dựng toàn bộ 6 phần nội dung cốt lõi của trang chủ (`Hero`, `About Me`, `Technical Skills`, `Featured Projects`, `Experience & Education`, `Contact`) dựa trên các tệp dữ liệu cấu hình độc lập (`src/data/`).

---

## 📌 1. Danh Sách Nhiệm Vụ & Checklist (Phase 4)

- [x] **Task 4.1: Thiết lập cấu trúc dữ liệu tách biệt (`src/data/`)**
  - Tạo `src/data/profile.ts`: lưu tên `Cao Tan Duy`, danh xưng `YoungD`, vai trò `Full Stack Developer`, câu slogan, mạng xã hội, trạng thái làm việc `Available for Work`.
  - Tạo `src/data/skills.ts`: phân loại 4 nhóm kỹ năng (Frontend, Backend, Database, Tools) kèm danh sách icon tương ứng.
  - Tạo `src/data/projects.ts`: chứa dữ liệu mẫu chuẩn của dự án `ChiNex` (tag, mô tả, tính năng, demo link, github repo, case study data).
  - Tạo `src/data/experience.ts`: lưu học vấn Cao Đẳng Công Thương TP.HCM (2022-2026) và 1 năm kinh nghiệm FE.
- [x] **Task 4.2: Xây dựng Hero Section (`features/home/hero-section.tsx`)**
  - Hiển thị nhãn trạng thái làm việc (Availability Status Badge) với radar pulse animation.
  - Tiêu đề lớn hiển thị tên `Cao Tan Duy (YoungD)` và vai trò `Full Stack Developer`.
  - Khẩu hiệu: *"Building thoughtful digital experiences, from frontend to backend."*
  - Đoạn giới thiệu ngắn gọn, súc tích về giá trị mang lại.
  - Nút Primary CTA: `"View My Work"` (cuộn mượt tới `#projects`).
  - Nút Secondary CTA: `"Contact Me"` (cuộn mượt tới `#contact`).
  - Icon link tới GitHub: `https://github.com/duycao04`.
  - Hiệu ứng trang trí nền nhẹ nhàng với Framer Motion và ambient glow.
- [x] **Task 4.3: Xây dựng About Me Section (`features/about/about-section.tsx`)**
  - Nội dung tập trung vào: đam mê lập trình Full Stack, tư duy viết mã sạch (clean code), hiệu năng và trải nghiệm người dùng, khả năng tự học và giải quyết vấn đề.
  - Tránh tuyệt đối các phát biểu sáo rỗng hoặc phóng đại.
  - Nút `"Download Resume"`: Liên kết với file `CaoTanDuy - FullStack Develop.pdf` trong `public/resume/`.
- [x] **Task 4.4: Xây dựng Technical Skills Section (`features/skills/skills-section.tsx`)**
  - Tổ chức theo bố cục Bento Grid hiện đại thành 4 nhóm rõ rệt:
    - **Frontend:** HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Ant Design.
    - **Backend:** Node.js, Express.js, REST APIs, Authentication, API Design.
    - **Database:** PostgreSQL, MySQL.
    - **Tools & Deployment:** Git, GitHub, Vercel, Render, pnpm.
  - Sử dụng Ant Design `Card` kết hợp hệ thống `Tag` công nghệ và icon nhận diện rõ ràng.
  - Tuyệt đối không dùng thang điểm phần trăm (%) kỹ năng ảo hay thanh đo kỹ năng vô căn cứ.
- [x] **Task 4.5: Xây dựng Featured Projects Section (`features/projects/projects-section.tsx` & `project-card.tsx`)**
  - Thiết kế Project Card component tái sử dụng được (sử dụng Ant Design `Card`, `Tag`, `Button`):
    - Tên dự án, hình ảnh thumbnail chất lượng cao kèm `Image.PreviewGroup` lightbox.
    - Mô tả ngắn gọn về bài toán và giải pháp.
    - Danh sách các tag công nghệ (Ant Design Tags).
    - Các tính năng nổi bật (Bullet points checklist).
    - Nút liên kết xem GitHub repository.
    - Nút liên kết chuyển đến trang Case Study chi tiết (`/projects/[slug]`).
  - Đưa dữ liệu dự án thực tế **ChiNex**:
    - Thể loại: *Chinese Vocabulary Learning Web Application*.
    - Tech: Next.js, TypeScript, Node.js, PostgreSQL, Tailwind CSS, PWA, Web Speech API.
    - Tính năng: Quản lý từ vựng, Tìm kiếm & lọc, Phát âm tiếng Trung qua Web Speech API, Giao diện Responsive, Hỗ trợ PWA.
- [x] **Task 4.6: Xây dựng Experience & Education Timeline (`features/experience/experience-section.tsx`)**
  - Xây dựng giao diện dòng thời gian bằng Ant Design `Timeline` thanh lịch.
  - Hiển thị các mốc thực tế:
    - **Học vấn:** Cao Đẳng Công Thương TP.HCM (2022 - 2026) — Ngành CNTT.
    - **Kinh nghiệm:** 1 năm kinh nghiệm với vai trò Frontend Developer.
  - Logic điều kiện: Tự động render mượt mà theo cấu hình `src/data/experience.ts`.
- [x] **Task 4.7: Xây dựng Contact Section (`features/contact/contact-section.tsx`)**
  - Lời mời hợp tác lịch thiệp, ngắn gọn.
  - Tương tác thông minh: Nút "Copy Email" (`dcao59995@gmail.com`) kèm Ant Design `message.success("Email copied to clipboard!")`.
  - Kênh liên hệ: GitHub, Email.
  - Form liên hệ (Contact Form):
    - Sử dụng Ant Design `Form`, `Input`, `Button` kết hợp validation và chuyển tiếp qua Formspree / mailto fallback.
    - Các trường: Họ tên, Email, Tiêu đề, Nội dung tin nhắn.
    - Trạng thái phản hồi giao diện rõ ràng: Loading state, Error message có khả năng tiếp cận (ARIA), Success message qua Ant Design `message.success`.
    - Đảm bảo cơ chế gửi thực tế (Formspree, Resend hoặc EmailJS) - không dùng alert thành công giả lập mà không gửi mail.

---

## 🔒 2. Quy Tắc Dữ Liệu Bắt Buộc (Working Rules)

1. Mọi thông tin hiển thị trên 6 section này đều phải được import từ thư mục `src/data/`, không hardcode chuỗi text trực tiếp vào JSX của component để đảm bảo tính tái sử dụng và dễ cập nhật.
2. Không bịa đặt số năm kinh nghiệm, các giải thưởng hay số lượng khách hàng.
3. Dự án chỉ đưa vào khi có thông tin thật từ Developer.
