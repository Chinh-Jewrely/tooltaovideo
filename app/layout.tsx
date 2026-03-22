import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TooltaoVideo — AI Tạo Video Viral Tự Động",
  description: "Nền tảng AI toàn diện: Nghiên cứu Trend → Biên soạn Kịch bản → Tạo Video → Đăng tải Tự động. Biến ý tưởng thành video viral chỉ trong vài phút.",
  keywords: "AI video, tạo video tự động, kịch bản AI, TikTok, YouTube Shorts, viral content",
  openGraph: {
    title: "TooltaoVideo — AI Tạo Video Viral Tự Động",
    description: "Từ ý tưởng đến video viral chỉ trong 4 bước thông minh",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
