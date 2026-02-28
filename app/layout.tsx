import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // 👈 [핵심] 이 줄이 없으면 CSS가 적용되지 않습니다!

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Life4Cuts Plus | Investment Pitch",
  description: "인생네컷 플러스 위탁 직영점 투자 제안서",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}