# PHASE 6 — POLISH, MOTION, SEO & ACCESSIBILITY

> **Trạng thái:** ✅ ĐÃ HOÀN THÀNH TOÀN BỘ (5/5 Tasks)  
> **Mục tiêu:** Tinh chỉnh chuyển động vi mô (Micro-interactions) với Framer Motion, hoàn thiện hỗ trợ hiển thị trên mọi kích thước màn hình, tối ưu hóa công cụ tìm kiếm (SEO toàn diện), đảm bảo khả năng tiếp cận WCAG 2.2 AA và tối ưu hóa hiệu năng tải trang.

---

## 📌 1. Danh Sách Nhiệm Vụ & Checklist (Phase 6)

- [x] **Task 6.1: Tinh chỉnh chuyển động với Framer Motion**
  - Hiệu ứng cuộn trang tự nhiên (Fade-in-up và Stagger animation) khi các section và thẻ project card đi vào khung nhìn (`viewport`).
  - Hiệu ứng hover mượt mà cho các button, link và thẻ bento (scale 1.01-1.02 nhẹ và viền phát sáng nhẹ).
  - Tích hợp thanh báo tiến độ cuộn trang (Scroll Progress Bar) tinh tế ở đỉnh màn hình (`ScrollProgressBar`).
  - Hỗ trợ triệt để chuẩn `prefers-reduced-motion`: tự động vô hiệu hóa toàn bộ chuyển động nếu người dùng bật chế độ giảm chuyển động trong cài đặt hệ điều hành (qua CSS và hook `useReducedMotion`).
  - Ngăn ngừa hiện tượng giật gián đoạn hay nhảy giao diện (Cumulative Layout Shift - CLS).
- [x] **Task 6.2: Kiểm tra và hoàn thiện hiển thị Responsive đa thiết bị**
  - Mobile nhỏ (320px - 375px): kiểm tra triệt để không có thanh cuộn ngang (horizontal overflow).
  - Tablet (768px): căn chỉnh bố cục Bento Grid 2 cột cân xứng.
  - Desktop (1024px+) và Màn hình lớn (1440px+): canh giữa nội dung với max-width hợp lý, lề thoáng đãng.
  - Touch targets: Đảm bảo toàn bộ các nút bấm và icon trên màn hình cảm ứng có kích thước tối thiểu 40x40px - 44x44px.
- [x] **Task 6.3: Thiết lập SEO kỹ thuật toàn diện (Technical SEO)**
  - Cấu hình Metadata API trong `app/layout.tsx`: Title template, Meta Description, Keywords, Authors.
  - Cấu hình thẻ Open Graph (OG Tags) và Twitter Cards hiển thị ảnh preview chuẩn khi chia sẻ link trên Facebook, Zalo, LinkedIn, Twitter/X.
  - Xây dựng file `src/app/robots.ts` cho phép các công cụ tìm kiếm index nội dung.
  - Xây dựng file `src/app/sitemap.ts` tự động sinh đường dẫn trang chủ và toàn bộ các trang con `/projects/[slug]`.
  - Thiết lập Canonical URL chuẩn (`https://youngd.dev`).
  - Nhúng Schema Structured Data `JSON-LD` định dạng `Person` (Cao Tấn Duy / YoungD) và `WebSite` để hỗ trợ Google Rich Results.
- [x] **Task 6.4: Tối ưu hóa hiệu năng & Core Web Vitals**
  - Tối ưu hóa hình ảnh với `next/image` và Ant Design Lightbox Image Preview.
  - Tối ưu hóa font chữ với `next/font`: tự động tự lưu trữ (self-hosting), chống giật layout chữ (`Inter`, `JetBrains_Mono`).
  - Đảm bảo điểm số Core Web Vitals xanh (LCP < 2.5s, FID/INP < 100ms, CLS < 0.1).
- [x] **Task 6.5: Đảm bảo tiêu chuẩn tiếp cận WCAG 2.2 AA (Accessibility)**
  - Thẻ HTML có ngữ nghĩa (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - Chỉ duy nhất 1 thẻ `<h1>` trên mỗi trang, phân cấp tiêu đề `<h2>`, `<h3>` chuẩn mực.
  - Mọi nút bấm chỉ có icon đều phải có thuộc tính `aria-label` (nút theme toggle, nút GitHub, nút copy email, nút drawer, back to top).
  - Trạng thái `focus-visible` bằng bàn phím rõ nét với viền xanh điện tử (`:focus-visible`).
  - Link bỏ qua điều hướng "Skip to main content" dành cho bàn phím.
  - Mọi ảnh đều có thuộc tính `alt` mô tả chuẩn xác.
  - Form liên hệ có liên kết `<label for="...">` và thông báo lỗi rõ ràng cho Screen Readers.

---

## 🔍 2. Cấu Trúc JSON-LD Schema (Structured Data)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Cao Tan Duy",
  "alternateName": "YoungD",
  "jobTitle": "Full Stack Developer",
  "url": "https://youngd.dev",
  "sameAs": [
    "https://github.com/duycao04"
  ],
  "knowsAbout": [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Go",
    "PostgreSQL",
    "Tailwind CSS"
  ]
}
```

---

## 🎯 3. Tiêu Chí Hoàn Thành Phase 6

- Trang web lướt êm ái, chuyển động nhẹ nhàng sang trọng, không hề có cảm giác nặng nề.
- Chia sẻ link web lên các nền tảng mạng xã hội hiển thị ảnh card và mô tả đầy đủ.
- Hoàn toàn điều khiển và duyệt toàn bộ trang web chỉ bằng bàn phím (phím Tab, Enter, Space).
