# PHASE 3 — FOUNDATION & CORE LAYOUT

> **Trạng thái:** ✅ ĐÃ HOÀN THÀNH TOÀN BỘ (7/7 Tasks)  
> **Mục tiêu:** Khởi tạo dự án Next.js với App Router, cài đặt dependencies, cấu hình Tailwind CSS theo tokens, xây dựng cấu trúc layout toàn cục (Root Layout), thanh điều hướng Sticky Navbar và Footer.

---

## 📌 1. Danh Sách Nhiệm Vụ & Checklist (Phase 3)

- [x] **Task 3.1: Khởi tạo dự án Next.js với pnpm**
  - Cấu hình TypeScript Strict Mode.
  - Sử dụng Next.js App Router convention (`src/app`).
  - Thiết lập file `.gitignore` và `.env.example`.
- [x] **Task 3.2: Cài đặt & cấu hình các thư viện cốt lõi**
  - Cài đặt `antd` (Ant Design v5.x/6.x) và `@ant-design/nextjs-registry` (cho SSR trong App Router).
  - Cài đặt `tailwindcss`, `postcss`, `autoprefixer`.
  - Cài đặt `clsx`, `tailwind-merge`.
  - Cài đặt `lucide-react` và `@ant-design/icons` cho hệ thống biểu tượng.
  - Cài đặt `next-themes` cho Dark/Light mode toggle.
  - Cài đặt `framer-motion` cho animations.
- [x] **Task 3.3: Cấu hình CSS Variables & Tailwind Theme**
  - Đưa toàn bộ bảng màu từ Phase 2 vào `src/app/globals.css` dưới dạng CSS variables.
  - Cấu hình `next.config.ts` với `transpilePackages` tối ưu hóa Ant Design.
- [x] **Task 3.4: Tích hợp Font chữ hiện đại với `next/font`**
  - Cấu hình `Inter` làm font chữ hiển thị mặc định (`--font-inter`).
  - Cấu hình `JetBrains_Mono` làm font biến số hiển thị code và tech labels (`--font-jetbrains-mono`).
- [x] **Task 3.5: Xây dựng Root Layout, Ant Design Registry & Theme Provider**
  - Bọc ứng dụng trong `AntdRegistry` từ `@ant-design/nextjs-registry` tại `app/layout.tsx`.
  - Tạo `src/components/layout/theme-provider.tsx` kết hợp `next-themes` và Ant Design `ConfigProvider`.
  - Đảm bảo 100% không bị chớp màn hình khi tải trang (Zero FOUC).
- [x] **Task 3.6: Xây dựng Sticky Navigation Bar (`Navbar`)**
  - Logo thương hiệu: `YoungD` với điểm nhấn màu xanh điện tử.
  - Các mục liên kết: `About`, `Skills`, `Projects`, `Experience`, `Contact`.
  - Tính năng cuộn mượt (Smooth scroll) tới từng section ID.
  - Tự động nhận diện section đang đọc (Active Section Spy).
  - Tích hợp nút chuyển chế độ Dark / Light mode.
  - Sử dụng Ant Design `Drawer` cho Mobile Navigation Drawer mượt mà.
  - Hỗ trợ điều hướng bằng bàn phím (Tab, Enter, Escape).
- [x] **Task 3.7: Xây dựng Footer Component & BackTop**
  - Hiển thị tên cá nhân & bản quyền với năm tự động cập nhật (`new Date().getFullYear()`).
  - Đường dẫn tới GitHub (`https://github.com/duycao04`) và Email.
  - Tích hợp Ant Design `FloatButton.BackTop` cuộn mượt về đầu trang.
  - Thiết kế tối giản, đồng bộ với toàn bộ trang web.

---

## 🛠️ 2. Danh Sách Gói Cài Đặt (Dependencies)

```bash
# Core & UI (Ant Design + Next.js App Router)
pnpm add next@latest react@latest react-dom@latest
pnpm add antd @ant-design/nextjs-registry @ant-design/icons
pnpm add lucide-react clsx tailwind-merge class-variance-authority
pnpm add next-themes framer-motion

# Form & Validation (Chuẩn bị sẵn cho Phase 4 Contact Form)
pnpm add react-hook-form zod @hookform/resolvers

# Dev Dependencies
pnpm add -D typescript @types/node @types/react @types/react-dom
pnpm add -D tailwindcss postcss autoprefixer
pnpm add -D eslint eslint-config-next prettier
```

---

## 📐 3. Quy Cách Kỹ Thuật Cho Navigation Bar

- **Vị trí:** Cố định trên cùng (`fixed top-0 left-0 right-0 z-50`).
- **Hiệu ứng kính mờ (Backdrop Blur):** `backdrop-blur-md bg-background/80 border-b border-border-subtle`.
- **Chiều cao tiêu chuẩn:** `h-16` (64px) trên desktop, có bù trừ `scroll-margin-top: 5rem` cho các section để không bị che khuất tiêu đề khi click điều hướng.
- **Trạng thái Active:** Link của section tương ứng sẽ sáng màu `--accent-primary` và có chỉ báo gạch chân mờ hoặc pill background tinh tế.

---

## 🎯 4. Tiêu Chí Nghiệm Thu Phase 3

- [x] Dự án khởi tạo với Next.js 16 App Router, TypeScript Strict Mode, pnpm 10.
- [x] Ant Design v5/v6 tích hợp cùng `@ant-design/nextjs-registry` chống giật style FOUC khi SSR.
- [x] Dark mode và Light mode chuyển đổi mượt mà, đồng bộ giữa Tailwind CSS và Ant Design `ConfigProvider`.
- [x] Navigation và Footer hiển thị đẹp mắt, co giãn chuẩn trên cả điện thoại (375px) và màn hình máy tính (1440px).
- [x] Đã chạy kiểm tra kiểu tĩnh `pnpm tsc --noEmit` đạt 0 lỗi.
- [x] Đã thực hiện `pnpm build` thành công xuất ra toàn bộ static routes (`/` và `/_not-found`).
