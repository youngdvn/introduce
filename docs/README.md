# DỰ ÁN PORTFOLIO CAO TẤN DUY (YoungD) — ROADMAP & TIẾN ĐỘ

Tài liệu này tổng hợp toàn bộ lộ trình triển khai dự án website portfolio cá nhân cho **Cao Tấn Duy (YoungD)** - Full Stack Developer, được bóc tách từ file yêu cầu gốc [`desc.md`](../desc.md).

---

## 📌 Tổng Quan Dự Án

- **Họ và tên:** Cao Tấn Duy
- **Display Name:** YoungD
- **Vai trò:** Full Stack Developer
- **Định hướng:** Full Stack Web Development (React, Next.js, TypeScript, Node.js, Go, PostgreSQL)
- **GitHub:** [https://github.com/duycao04](https://github.com/duycao04)
- **Vị trí:** Việt Nam
- **Ngôn ngữ hiển thị website:** Tiếng Anh (English)
- **Phong cách thiết kế:** Modern Minimal Developer Portfolio (Dark-first, Electric Blue accent, Bento grid)
- **Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui, Ant Design, Framer Motion, Lucide React, pnpm.

---

## 📊 Bảng Theo Dõi Tiến Độ Toàn Dự Án

| Phase | Tên Giai Đoạn | File Chi Tiết | Trạng Thái | Tiến Độ |
| :--- | :--- | :--- | :---: | :---: |
| **Phase 1** | **Planning & Requirements** | [phase-1-planning.md](./phase-1-planning.md) | 🟢 Hoàn thành | 7/7 Tasks |
| **Phase 2** | **Design System** | [phase-2-design-system.md](./phase-2-design-system.md) | 🟢 Hoàn thành | 7/7 Tasks |
| **Phase 3** | **Foundation & Layout** | [phase-3-foundation.md](./phase-3-foundation.md) | 🟢 Hoàn thành | 7/7 Tasks |
| **Phase 4** | **Main Page Sections** | [phase-4-main-sections.md](./phase-4-main-sections.md) | 🟢 Hoàn thành | 7/7 Tasks |
| **Phase 5** | **Project Detail Pages** | [phase-5-project-detail-pages.md](./phase-5-project-detail-pages.md) | 🟢 Hoàn thành | 5/5 Tasks |
| **Phase 6** | **Polish, SEO & Accessibility** | [phase-6-polish.md](./phase-6-polish.md) | 🟢 Hoàn thành | 5/5 Tasks |
| **Phase 7** | **Verification & Deployment** | [phase-7-verification.md](./phase-7-verification.md) | 🟢 Hoàn thành | 7/7 Tasks |

---

## 📋 Checklist Tổng Hợp Các Phase

### [Phase 1: Planning & Requirements Analysis](./phase-1-planning.md)
- [x] Đọc và phân tích toàn diện yêu cầu kỹ thuật từ `desc.md`
- [x] Xây dựng cấu trúc điều hướng (Sitemap) và luồng người dùng (User Flow)
- [x] Thiết lập sơ đồ kiến trúc mã nguồn chuẩn Next.js App Router (Feature-driven)
- [x] Rà soát và liệt kê các thông tin cá nhân/dự án còn thiếu cần xác nhận
- [x] Lập kế hoạch chi tiết từng phase và xuất bản tài liệu vào thư mục `docs/`
- [x] Nhận thông tin bổ sung còn thiếu từ Developer (Email, Education, Experience, ChiNex status, Skills)
- [x] Developer phê duyệt bản kế hoạch Phase 1 để chuyển sang Phase 2

### [Phase 2: Design System & Visual Identity](./phase-2-design-system.md)
- [x] Định nghĩa bảng màu (Dark-first, near-black, electric blue accent) & Typography (Geist/Inter + Mono)
- [x] Thiết lập file cấu hình Design Tokens (Colors, Spacing, Border Radius, Shadow)
- [x] Cấu hình hệ thống UI/UX Ant Design v5 (`ConfigProvider`, Theme Tokens & SSR `AntdRegistry`)
- [x] Chuẩn hóa bộ thành phần Ant Design (`Button`, `Badge`, `Card`, `Timeline`, `Tag`, `Drawer`, `Form`)
- [x] Thiết lập quy tắc Motion (Framer Motion variants, transition timings, reduced motion)
- [x] Quy định chuẩn bố cục Bento-grid kết hợp Tailwind CSS và Ant Design Grid
- [x] Tạo Mockup hình ảnh chất lượng cao cho dự án ChiNex (`public/images/projects/chinex/cover.jpg`)
- [x] Kiểm thử và đảm bảo 100% tỷ lệ tương phản đạt và vượt chuẩn WCAG 2.2 AA (AAA 19.85:1)

### [Phase 3: Foundation & Core Layout](./phase-3-foundation.md)
- [x] Khởi tạo dự án Next.js 16 (TypeScript strict mode, App Router, pnpm 10)
- [x] Cài đặt các dependencies cốt lõi (`antd`, `@ant-design/nextjs-registry`, `@ant-design/icons`, `tailwindcss`, `lucide-react`, `next-themes`, `framer-motion`)
- [x] Cấu hình font chữ (`next/font` Inter + JetBrains_Mono), CSS global variables và `next.config.ts`
- [x] Thiết lập Theme Provider kết hợp `next-themes` và Ant Design `ConfigProvider` chống giật style (Zero FOUC)
- [x] Xây dựng Root Layout chuẩn (`app/layout.tsx`) với metadata toàn diện
- [x] Xây dựng Sticky Navigation Bar (Logo YoungD, active section spy, theme toggle, mobile `Drawer` menu)
- [x] Xây dựng Footer (Brand, dynamic copyright year, GitHub link, email, `FloatButton.BackTop`)

### [Phase 4: Main Landing Page Sections](./phase-4-main-sections.md)
- [x] Thiết lập cấu trúc dữ liệu tách biệt (`src/data/profile.ts`, `skills.ts`, `projects.ts`, `experience.ts`)
- [x] Xây dựng Hero Section (Availability badge pulse, Headline, CTA buttons, stats highlights)
- [x] Xây dựng About Me Section (Bio chuyên nghiệp, highlight 1 năm FE, pillars cards)
- [x] Xây dựng Skills Section (Phân nhóm 4 danh mục Frontend, Backend, Database, Tools qua Bento Grid)
- [x] Xây dựng Featured Projects Section & Project Card (Showcase ChiNex với Ant Design Image Lightbox)
- [x] Xây dựng Experience & Education Timeline Section (Ant Design Timeline hiển thị Cao Đẳng Công Thương & kinh nghiệm FE)
- [x] Xây dựng Contact Section (Contact info, nút copy email tương tác, Ant Design Form validation & submission)

### [Phase 5: Dynamic Project Detail Pages](./phase-5-project-detail-pages.md)
- [x] Xây dựng Dynamic Route `app/projects/[slug]/page.tsx` và hàm `generateStaticParams`
- [x] Xây dựng giao diện Case Study 10 phần theo đúng chuẩn kiến trúc phần mềm
- [x] Xây dựng Image / Screenshot gallery component cho dự án
- [x] Xây dựng Breadcrumbs và nút điều hướng quay về danh sách dự án
- [x] Cấu hình SEO dynamic metadata cho từng dự án (`generateMetadata`)

### [Phase 6: Polish, Motion, SEO & Accessibility](./phase-6-polish.md)
- [x] Tích hợp hiệu ứng cuộn trang (scroll reveal, staggered cards) với Framer Motion
- [x] Kiểm tra và hỗ trợ chế độ giảm chuyển động (`prefers-reduced-motion`)
- [x] Tối ưu hóa SEO toàn diện (OpenGraph, Twitter card, `sitemap.ts`, `robots.ts`, JSON-LD Person)
- [x] Tối ưu hóa hiệu năng & Core Web Vitals (Tối ưu Next Image, Next Font, dynamic import)
- [x] Kiểm tra khả năng tiếp cận WCAG 2.2 AA (Color contrast, keyboard navigation, focus states, ARIA)

### [Phase 7: Verification & Deployment](./phase-7-verification.md)
- [x] Kiểm tra kiểu tĩnh TypeScript (`pnpm tsc --noEmit`)
- [x] Kiểm tra chất lượng mã nguồn với ESLint (`pnpm lint`)
- [x] Kiểm tra bản build thành phẩm (`pnpm build`)
- [x] Kiểm tra hiển thị đa thiết bị (Mobile 320px+, Tablet 768px+, Desktop 1024px+, Wide 1440px+)
- [x] Chạy audit hiệu năng Lighthouse (Performance, Accessibility, Best Practices, SEO)
- [x] Kiểm tra toàn bộ đường dẫn nội bộ và liên kết ngoài (Broken links test)
- [x] Viết tài liệu `README.md` chính của repository và hướng dẫn triển khai lên Vercel / Render

---

## 📁 Cấu Trúc Thư Mục Tài Liệu `docs/`

docs/
├── README.md                      # Tài liệu tổng quan roadmap & tiến độ (file hiện tại)
├── required-information.md        # 📝 Biểu mẫu thông tin còn thiếu cần Developer cung cấp
├── phase-1-planning.md            # Chi tiết Phase 1: Phân tích & Kế hoạch
├── phase-2-design-system.md       # Chi tiết Phase 2: Hệ thống thiết kế
├── phase-3-foundation.md          # Chi tiết Phase 3: Khởi tạo & Cấu trúc nền tảng
├── phase-4-main-sections.md       # Chi tiết Phase 4: Các Section trang chủ
├── phase-5-project-detail-pages.md# Chi tiết Phase 5: Trang chi tiết dự án
├── phase-6-polish.md              # Chi tiết Phase 6: Hiệu ứng, SEO & Accessibility
└── phase-7-verification.md        # Chi tiết Phase 7: Kiểm thử & Triển khai
```

---

> 💡 **Hành động hiện tại:** Để cung cấp thông tin còn thiếu cho dự án, vui lòng xem và điền vào biểu mẫu [docs/required-information.md](./required-information.md).
