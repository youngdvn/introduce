# PHASE 1 — PLANNING & REQUIREMENTS

> **Trạng thái:** ✅ ĐÃ HOÀN THÀNH TOÀN BỘ (7/7 Tasks)  
> **Mục tiêu:** Phân tích toàn bộ yêu cầu dự án, xác lập kiến trúc hệ thống, sơ đồ trang web, cấu trúc thư mục, bóc tách thông tin còn thiếu và tiếp nhận đầy đủ dữ liệu từ Developer mà chưa viết code triển khai.

---

## 📌 1. Danh Sách Nhiệm Vụ & Checklist (Phase 1)

- [x] **Task 1.1: Phân tích yêu cầu tổng thể từ `desc.md`**
  - Xác định đối tượng mục tiêu: Nhà tuyển dụng (Recruiters), Kỹ sư phỏng vấn (Technical Interviewers), Đối tác tiềm năng.
  - Định hình phong cách: "Modern Minimal Developer Portfolio", Dark-first, tinh tế, sang trọng, không dùng template rập khuôn.
  - Xác lập nguyên tắc cốt lõi: Không bịa đặt thành tích, số liệu hay kinh nghiệm làm việc; mọi dữ liệu đều phải cấu hình độc lập qua `data/`.
- [x] **Task 1.2: Thiết lập sơ đồ trang web (Sitemap) & Luồng tương tác**
  - Sitemap Single Page kết hợp Dynamic Route (`/` và `/projects/[slug]`).
  - Anchor navigation mượt mà (`#hero`, `#about`, `#skills`, `#projects`, `#experience`, `#contact`).
- [x] **Task 1.3: Đề xuất cấu trúc thư mục dự án (Project Architecture)**
  - Áp dụng Feature-driven Architecture trong Next.js App Router.
  - Tách bạch hoàn toàn tầng dữ liệu (`src/data/`), tầng trình diễn (`src/components/`, `src/features/`) và tiện ích (`src/lib/`).
- [x] **Task 1.4: Phân rã hệ thống thành phần (Component Breakdown)**
  - Liệt kê đầy đủ các component Layout, UI base, Feature sections và Dynamic pages.
- [x] **Task 1.5: Rà soát và liệt kê thông tin còn thiếu (Missing Information List)**
  - Tổng hợp danh sách các trường thông tin cần Developer cung cấp trước khi lên nội dung thật.
- [x] **Task 1.6: Developer cung cấp thông tin còn thiếu**
  - Developer đã hoàn thành điền thông tin vào `docs/required-information.md` (Email `dcao59995@gmail.com`, Cao Đẳng Công Thương TP.HCM, 1 năm kinh nghiệm FE, Formspree mechanism, điều chỉnh kỹ năng Backend/Database).
- [x] **Task 1.7: Developer phê duyệt kế hoạch Phase 1**
  - Developer đã phê duyệt toàn bộ kế hoạch Phase 1 và kích hoạt bước chuẩn bị chuyển sang Phase 2.

---

## 🗺️ 2. Sơ Đồ Trang Web (Website Sitemap & User Flow)

### 2.1 Cấu Trúc Các Trang
```text
Portfolio (YoungD)
│
├── 🌐 / (Trang chủ — Single Page Layout với Sticky Nav)
│    ├── #hero         : Hero Section (Giới thiệu ngắn, vai trò, CTA, link GitHub)
│    ├── #about        : About Me (Định hướng nghề nghiệp, mindset lập trình, nút tải CV)
│    ├── #skills       : Technical Skills (Frontend, Backend, Database, Tools theo dạng Bento Grid)
│    ├── #projects     : Featured Projects (Danh sách dự án tiêu biểu, tiêu điểm là ChiNex)
│    ├── #experience   : Timeline (Quá trình học vấn, kinh nghiệm, cột mốc học tập)
│    └── #contact      : Contact Section (Kênh liên hệ, tương tác copy email, contact form)
│
├── 📄 /projects/[slug] (Trang Case Study chi tiết cho từng dự án)
│    ├── Header & Breadcrumbs quay lại trang chủ
│    ├── 10 mục phân tích kỹ thuật chuyên sâu (Problem, Architecture, Tech Stack, Challenges...)
│    └── Image Showcase & Links (GitHub repo, Live Demo)
│
├── 🤖 /robots.txt
└── 🗺️ /sitemap.xml
```

### 2.2 Luồng Người Dùng (User Flow)
1. **Truy cập:** Khách vào trang chủ `/` → Hero section ngay lập tức truyền đạt tên (`YoungD`), vai trò (`Full Stack Developer`), và khẩu hiệu ngắn gọn.
2. **Khám phá năng lực:** Cuộn xuống `#about` và `#skills` để nắm rõ chuyên môn (React, Next.js, Node.js, Go, PostgreSQL).
3. **Đánh giá kinh nghiệm thực chiến:** Xem `#projects` → Click vào card dự án ChiNex để xem tóm tắt hoặc chuyển sang `/projects/chinex` để đọc Case Study phân tích bài toán kỹ thuật chuyên sâu.
4. **Hành động (Conversion):** Click CTA "Contact Me" hoặc "Copy Email" ở `#contact` để gửi tin nhắn/email trao đổi cơ hội việc làm.

---

## 🏗️ 3. Đề Xuất Cấu Trúc Thư Mục (Suggested Project Structure)

Tuân thủ kiến trúc Feature-driven sạch sẽ, phân tách rành mạch theo hướng dẫn từ master prompt:

```text
introduce/
├── docs/                      # Tài liệu lộ trình & checklist từng phase
│   ├── README.md
│   ├── phase-1-planning.md
│   └── ...
├── public/                    # Static assets
│   ├── fonts/                 # Custom local fonts (nếu cần)
│   ├── images/
│   │   ├── avatar.jpg         # Ảnh đại diện cá nhân
│   │   ├── og-image.png       # Ảnh OpenGraph chia sẻ mạng xã hội
│   │   └── projects/
│   │       ├── chinex/        # Ảnh chụp màn hình dự án ChiNex
│   │       │   ├── cover.webp
│   │       │   ├── vocab-list.webp
│   │       │   └── pwa-mobile.webp
│   └── resume/
│       └── Duy-Cao-Resume.pdf # File CV/Resume định dạng PDF (chỉ hiện khi có file)
├── src/
│   ├── app/                   # Next.js 14+ App Router
│   │   ├── layout.tsx         # Root layout (Fonts, NextThemesProvider, Metadata)
│   │   ├── page.tsx           # Trang chủ chứa các sections
│   │   ├── globals.css        # Tailwind directives, CSS variables & theme tokens
│   │   ├── robots.ts          # Cấu hình dynamic robots.txt
│   │   ├── sitemap.ts         # Cấu hình dynamic sitemap.xml
│   │   └── projects/
│   │       └── [slug]/
│   │           └── page.tsx   # Dynamic Case Study detail page
│   ├── components/            # UI components tái sử dụng
│   │   ├── layout/
│   │   │   ├── navbar.tsx     # Sticky navigation bar
│   │   │   ├── mobile-menu.tsx# Drawer điều hướng màn hình nhỏ
│   │   │   ├── footer.tsx     # Footer với dynamic year & social links
│   │   │   └── theme-toggle.tsx # Nút chuyển Dark/Light mode
│   │   ├── shared/
│   │   │   ├── section-heading.tsx # Tiêu đề section đồng nhất
│   │   │   ├── container.tsx  # Wrapper chuẩn căn lề theo layout
│   │   │   └── social-links.tsx
│   │   └── ui/                # Base UI (shadcn/ui style, primitives)
│   │       ├── button.tsx
│   │       ├── badge.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── textarea.tsx
│   │       └── dialog.tsx
│   ├── features/              # Components theo từng module tính năng
│   │   ├── home/
│   │   │   ├── hero-section.tsx
│   │   │   └── background-particles.tsx
│   │   ├── about/
│   │   │   ├── about-section.tsx
│   │   │   └── resume-button.tsx
│   │   ├── skills/
│   │   │   ├── skills-section.tsx
│   │   │   ├── skill-card.tsx
│   │   │   └── skill-category-group.tsx
│   │   ├── projects/
│   │   │   ├── projects-section.tsx
│   │   │   ├── project-card.tsx
│   │   │   ├── project-case-study.tsx
│   │   │   └── project-gallery.tsx
│   │   ├── experience/
│   │   │   ├── experience-section.tsx
│   │   │   └── timeline-item.tsx
│   │   └── contact/
│   │       ├── contact-section.tsx
│   │       ├── contact-form.tsx
│   │       └── copy-email-button.tsx
│   ├── data/                  # Nơi lưu toàn bộ dữ liệu cấu hình
│   │   ├── profile.ts         # Thông tin cá nhân, slogan, bio, mạng xã hội
│   │   ├── skills.ts          # Danh mục kỹ năng, icons, nhóm phân loại
│   │   ├── projects.ts        # Thông tin các dự án và dữ liệu case study chi tiết
│   │   └── experience.ts      # Kinh nghiệm làm việc, học vấn, chứng chỉ
│   ├── types/                 # TypeScript interfaces & types
│   │   ├── profile.types.ts
│   │   ├── project.types.ts
│   │   ├── skill.types.ts
│   │   └── experience.types.ts
│   └── lib/                   # Utility functions & helpers
│       ├── utils.ts           # Hàm cn() kết hợp clsx & tailwind-merge
│       └── validation.ts      # Zod schema cho contact form
├── .env.example
├── components.json            # Cấu hình shadcn/ui
├── package.json
├── pnpm-lock.yaml
├── tailwind.config.ts
├── tsconfig.json
└── desc.md
```

---

## 🧩 4. Phân Rã Hệ Thống Thành Phần (Component Breakdown)

| Tên Component | Loại (Server/Client) | Vị Trí | Mô Tả Chức Năng |
| :--- | :---: | :--- | :--- |
| `RootLayout` | Server | `app/layout.tsx` | Khung ứng dụng, font, SEO metadata toàn cục |
| `Navbar` | Client | `components/layout/navbar.tsx` | Thanh điều hướng dính đầu trang, theo dõi scroll position |
| `ThemeToggle` | Client | `components/layout/theme-toggle.tsx` | Chuyển đổi Dark / Light mode bằng `next-themes` |
| `HeroSection` | Client/Server | `features/home/hero-section.tsx` | Hiển thị tiêu đề, hiệu ứng gõ chữ hoặc chuyển động nền nhẹ |
| `AboutSection` | Server | `features/about/about-section.tsx` | Trình bày triết lý làm việc, nút tải CV (chỉ hiện khi có file) |
| `SkillsSection` | Server | `features/skills/skills-section.tsx` | Bento Grid các công nghệ Frontend, Backend, DB, Tools |
| `ProjectsSection`| Server | `features/projects/projects-section.tsx` | Danh sách project cards tiêu biểu (nổi bật là ChiNex) |
| `ProjectCard` | Client | `features/projects/project-card.tsx` | Card hiển thị thumbnail, tags, nút xem repo, live demo, xem chi tiết |
| `ExperienceSection`| Server | `features/experience/experience-section.tsx` | Timeline học vấn & kinh nghiệm (tự ẩn nếu mảng dữ liệu rỗng) |
| `ContactSection` | Client | `features/contact/contact-section.tsx` | Thông tin liên hệ, nút copy email và Form gửi lời nhắn |
| `ProjectCaseStudy`| Server | `features/projects/project-case-study.tsx` | Bố cục 10 phần chi tiết cho trang `/projects/[slug]` |

---

## 📋 5. Thông Tin Đã Tiếp Nhận Từ Developer (Confirmed Information)

Dựa trên biểu mẫu đã điền tại [docs/required-information.md](./required-information.md), các thông tin thực tế đã được chốt như sau:

| Mục | Thông Tin Tiếp Nhận | Áp Dụng Trên Website |
| :--- | :--- | :--- |
| **Email liên hệ** | `dcao59995@gmail.com` | Hiển thị tại Contact section & nhận email từ form |
| **LinkedIn** | `Chưa có` | Tạm ẩn icon/link LinkedIn, không hiển thị placeholder |
| **Mạng xã hội** | `GitHub: https://github.com/duycao04` | Hiển thị tại Navbar, Hero, Contact, Footer |
| **Trạng thái làm việc** | `Available for Work` | Bật badge trạng thái màu xanh lá/xanh điện tại Hero Section |
| **File CV/Resume** | `CaoTanDuy - FullStack Develop.pdf` | Đặt vào `public/resume/` để kích hoạt nút "Download Resume" |
| **Học vấn** | `Cao Đẳng Công Thương TP.HCM`<br>Ngành Công Nghệ Thông Tin (2022 - 2026) | Hiển thị trong mục Education của Timeline |
| **Kinh nghiệm** | `1 năm kinh nghiệm với vai trò Frontend Developer` | Hiển thị nổi bật trong phần About và Timeline |
| **Dự án ChiNex** | Trạng thái: Đang phát triển (Beta).<br>Mockup giao diện: AI tạo hình ảnh chất lượng cao. | Hiển thị làm Featured Project trọng tâm + Case study chi tiết |
| **Kỹ năng đã chốt** | **Frontend:** HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS<br>**Backend:** Node.js, Express.js, REST APIs, Authentication, API Design<br>**Database:** PostgreSQL, MySQL<br>**Tools:** Git, GitHub, Vercel, Render | Render thành Bento Grid trong Skills Section |
| **Cơ chế gửi Form** | `Formspree / Web3Forms` | Tích hợp vào Contact Form (Zod validation + endpoint forward email) |

---

## 🎯 6. Tiêu Chí Nghiệm Thu Phase 1

- [x] Tài liệu phân tích yêu cầu, sitemap, kiến trúc dự án và danh sách thông tin còn thiếu được hoàn thiện đầy đủ.
- [x] Developer đã duyệt tài liệu, điền hoàn tất biểu mẫu thông tin cần thiết tại `docs/required-information.md`.
- [x] Mọi dữ liệu thực tế đã được đồng bộ vào tài liệu quy hoạch dữ liệu, không có dữ liệu ảo hay bịa đặt.
- [x] Phase 1 hoàn tất 100%, sẵn sàng bàn giao để bước sang Phase 2 (Design System & Foundation).
