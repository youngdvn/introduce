# PHASE 7 — VERIFICATION, TESTING & DEPLOYMENT

> **Trạng thái:** ✅ ĐÃ HOÀN THÀNH TOÀN BỘ (7/7 Tasks)  
> **Mục tiêu:** Kiểm thử toàn diện chất lượng mã nguồn, kiểm tra kiểu dữ liệu tĩnh TypeScript, chạy linter, thực thi production build thành công, kiểm tra responsive thực tế, rà soát liên kết gãy, audit điểm số bằng công cụ chuyên dụng và hướng dẫn triển khai sản phẩm lên môi trường thực tế (Vercel / Render).

---

## 📌 1. Danh Sách Nhiệm Vụ & Checklist (Phase 7)

- [x] **Task 7.1: Kiểm tra kiểu dữ liệu TypeScript (Type Checking)**
  - Chạy lệnh `pnpm tsc --noEmit`.
  - Đảm bảo 100% không có lỗi kiểu dữ liệu (Strict Mode bật).
  - Không sử dụng kiểu `any` tùy tiện, mọi props và data interfaces đều được định kiểu chặt chẽ.
- [x] **Task 7.2: Kiểm tra chuẩn mã nguồn với ESLint**
  - Chạy lệnh `pnpm lint`.
  - Khắc phục toàn bộ các cảnh báo (warnings) và lỗi (errors) về cú pháp, hooks dependency hay import thừa.
- [x] **Task 7.3: Kiểm tra đóng gói sản phẩm (Production Build)**
  - Chạy lệnh `pnpm build`.
  - Xác nhận Next.js xuất ra các static pages (SSG) và dynamic routes thành công không có lỗi render phía máy chủ.
  - Kiểm tra dung lượng bundle (Bundle Size Analysis), đảm bảo mã nguồn gọn gàng.
- [x] **Task 7.4: Kiểm thử hiển thị trên các thiết bị & Trình duyệt (Cross-browser & Responsive Test)**
  - Kiểm tra trên các trình duyệt phổ biến: Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge.
  - Kiểm tra độ phân giải: Mobile (375px iPhone, 412px Android), iPad/Tablet (768px), Laptop (1366px), Desktop (1920px).
- [x] **Task 7.5: Kiểm thử liên kết gãy & Tính năng Form (Smoke Testing)**
  - Quét toàn bộ liên kết nội bộ và liên kết ngoài (GitHub, mailto, live demo, resume PDF).
  - Thử nghiệm gửi dữ liệu qua Contact Form với các trường hợp: để trống, sai định dạng email, gửi thành công.
  - Kiểm tra nút copy email hoạt động chính xác trên trình duyệt không hỗ trợ clipboard cũ và mới.
- [x] **Task 7.6: Chạy kiểm toán hiệu năng Lighthouse (Audit)**
  - Tối ưu hóa toàn diện các tiêu chuẩn kỹ thuật về Performance, Accessibility, Best Practices và SEO.
- [x] **Task 7.7: Soạn tài liệu bàn giao & Hướng dẫn triển khai (Deployment Guide)**
  - Viết tài liệu `README.md` chính của repository mô tả dự án, cách cài đặt, chạy dev và build.
  - Cung cấp hướng dẫn kết nối và deploy tự động lên **Vercel** hoặc **Render**.

---

## 💻 2. Các Lệnh Kiểm Thử Tiêu Chuẩn

```bash
# 1. Kiểm tra TypeScript
pnpm tsc --noEmit

# 2. Kiểm tra ESLint
pnpm lint

# 3. Chạy Production Build nội bộ
pnpm build

# 4. Chạy thử bản production vừa build trên cổng local
pnpm start
```

---

## 🚀 3. Hướng Dẫn Triển Khai (Deployment Guide)

### 3.1 Triển Khai Lên Vercel (Khuyến nghị cho Next.js)
1. Đẩy toàn bộ mã nguồn lên GitHub cá nhân của Duy: `https://github.com/duycao04/introduce` (hoặc tên repo tùy chọn).
2. Đăng nhập vào [Vercel](https://vercel.com) bằng tài khoản GitHub.
3. Chọn **Add New Project** → Chọn repository tương ứng.
4. Framework Preset: Tự động nhận diện là **Next.js**.
5. Cấu hình biến môi trường (Environment Variables) nếu có (ví dụ: Service ID gửi email).
6. Bấm **Deploy**. Vercel sẽ tự động build và cấp domain miễn phí dạng `*.vercel.app`.

### 3.2 Triển Khai Lên Render
1. Đăng nhập [Render](https://render.com).
2. Tạo mới một **Web Service** kết nối với GitHub repository.
3. Build Command: `pnpm install && pnpm build`.
4. Start Command: `pnpm start`.
5. Chọn gói miễn phí (Free Tier) và hoàn tất cấu hình.

---

## 🎯 4. Tiêu Chí Nghiệm Thu Toàn Dự Án

- Toàn bộ 7 Phase được hoàn thành, mọi checkbox trong `docs/` đều chuyển thành `[x]`.
- Website được bàn giao trong trạng thái hoạt động hoàn hảo, đẹp mắt, tốc độ cao và sẵn sàng đính kèm vào CV xin việc của Cao Tấn Duy.
