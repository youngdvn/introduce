# PHASE 5 — PROJECT DETAIL PAGES (CASE STUDIES)

> **Trạng thái:** ✅ ĐÃ HOÀN THÀNH TOÀN BỘ (5/5 Tasks)  
> **Mục tiêu:** Xây dựng hệ thống trang chi tiết dự án theo cơ chế Dynamic Routing (`/projects/[slug]`), biến mỗi dự án thành một bài phân tích kỹ thuật (Technical Case Study) chuyên nghiệp gồm 10 phần, tập trung làm nổi bật tư duy giải quyết vấn đề và quyết định kiến trúc của Developer.

---

## 📌 1. Danh Sách Nhiệm Vụ & Checklist (Phase 5)

- [x] **Task 5.1: Xây dựng Dynamic Route & Data Model**
  - Tạo cấu trúc thư mục `src/app/projects/[slug]/page.tsx`.
  - Khai báo TypeScript Interface `ProjectCaseStudy` bao gồm đầy đủ 10 trường nội dung chuyên sâu.
  - Sử dụng hàm `generateStaticParams()` để Next.js pre-render tĩnh toàn bộ các trang dự án tại thời điểm build (SSG).
  - Xử lý trang `notFound()` của Next.js khi người dùng truy cập slug không tồn tại trong `data/projects.ts`.
- [x] **Task 5.2: Triển khai bố cục Case Study chuẩn 10 phần**
  - Xây dựng component `src/features/projects/project-case-study.tsx` với 10 phần:
    1. **Project Overview:** Tóm tắt mục tiêu, loại dự án, quy mô và đối tượng người dùng.
    2. **Problem & Motivation:** Bài toán thực tế gặp phải và lý do thúc đẩy xây dựng sản phẩm.
    3. **Proposed Solution:** Hướng tiếp cận và giải pháp được đề xuất để giải quyết vấn đề.
    4. **Tech Stack & Justification:** Bảng danh sách công nghệ và lý do lựa chọn từng công nghệ (Next.js, TypeScript, Node.js, PostgreSQL, Tailwind, Ant Design, Web Speech API, PWA).
    5. **Main Features:** Liệt kê các tính năng cốt lõi kèm giải thích kỹ thuật.
    6. **Technical Architecture:** Sơ đồ/Mô tả luồng dữ liệu 5 bước giữa Frontend, Web Speech API, Service Worker và Backend.
    7. **Engineering Challenges:** 3 khó khăn kỹ thuật phức tạp (Speech Synthesis cross-browser, Service Worker cache sync, 60fps animations) kèm giải pháp.
    8. **Lessons Learned:** 3 bài học kinh nghiệm đúc rút về multimedia APIs, PWA và database design.
    9. **Screenshots & Showcase:** Bộ sưu tập ảnh giao diện thực tế với Ant Design Image Lightbox zoom.
    10. **Action Links:** Nút điều hướng tới Live Demo và mã nguồn GitHub repo.
- [x] **Task 5.3: Xây dựng Thanh điều hướng & Breadcrumbs**
  - Nút quay lại danh sách dự án: `← Back to all projects`.
  - Breadcrumbs chuẩn: `Home / Projects / ChiNex`.
  - Điều hướng thảo luận dự án hoặc quay lại danh sách ở chân trang.
- [x] **Task 5.4: Xây dựng Thư viện ảnh dự án (Image Gallery / Lightbox)**
  - Tích hợp Ant Design `Image` với mask xem ảnh độ phân giải cao và zoom mượt mà.
- [x] **Task 5.5: Cấu hình Dynamic SEO Metadata**
  - Triển khai hàm `generateMetadata({ params })` trong `app/projects/[slug]/page.tsx`.
  - Tự động sinh tiêu đề trang: `[Tên Dự Án] — Technical Case Study | YoungD Portfolio`.
  - Meta description tóm tắt ngắn gọn bài toán của dự án.
  - OpenGraph & Twitter Card images dynamic theo từng dự án.

---

## 📚 2. Dữ Liệu Case Study Chuẩn Bị Cho Dự Án ChiNex

```typescript
// Trích xuất cấu trúc dữ liệu sẽ cấu hình trong src/data/projects.ts
export const chinexProject: Project = {
  slug: "chinex",
  title: "ChiNex",
  tagline: "Chinese Vocabulary Learning Web Application",
  thumbnail: "/images/projects/chinex/cover.webp",
  tags: ["Next.js", "TypeScript", "Go", "PostgreSQL", "Tailwind CSS", "PWA"],
  githubUrl: "https://github.com/duycao04", // Cập nhật repo cụ thể
  liveUrl: "", // Chờ link deploy
  caseStudy: {
    overview: "ChiNex là ứng dụng web giúp người học tổ chức, ghi nhớ và quản lý vốn từ vựng tiếng Trung một cách khoa học.",
    problem: "Người học tiếng Trung thường gặp khó khăn trong việc lưu trữ từ mới, tra cứu ngữ cảnh và nghe phát âm chuẩn một cách nhanh chóng trên cùng một nền tảng.",
    solution: "Cung cấp nền tảng PWA tích hợp Web Speech API, cho phép luyện phát âm, phân loại từ theo chủ đề và sử dụng ngoại tuyến (offline).",
    architecture: "Frontend Next.js App Router giao tiếp qua REST API với Backend Go (Golang), lưu trữ dữ liệu tại PostgreSQL.",
    challenges: "Tích hợp Web Speech API đảm bảo phát âm chuẩn tiếng Quan Thoại (Mandarin) trên đa trình duyệt và thiết lập PWA Service Worker caching mượt mà.",
    lessonsLearned: "Nắm vững kỹ thuật xử lý bất đồng bộ trong Go, quản lý State phức tạp với React và tối ưu hóa hiệu năng render PWA."
  }
};
```

---

## 🎯 3. Tiêu Chí Nghiệm Thu Phase 5

- [x] Khi truy cập `/projects/chinex`, toàn bộ 10 phần hiển thị đầy đủ, bố cục mạch lạc như một bài viết kỹ thuật trên blog công nghệ cao cấp.
- [x] Hệ thống dữ liệu hoàn toàn mở: Khi Duy có thêm dự án mới chỉ cần thêm một object vào `data/projects.ts`, hệ thống sẽ tự động tạo trang chi tiết mà không cần sửa code giao diện.
- [x] Hàm `generateStaticParams()` pre-render tĩnh thành công route `/projects/chinex`.
- [x] Dynamic Metadata API tự động tạo thẻ Title, Description, OpenGraph chuẩn mực cho từng dự án.
- [x] Dev server trả về HTTP 200 cho trang `/projects/chinex`.
