import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yuta - Frontend Developer Portfolio",
  description:
    "프론트엔드 개발자 강주의 포트폴리오입니다. React, TypeScript, Next.js 기반의 웹 서비스 개발 경험을 소개합니다.",
  keywords: ["프론트엔드", "포트폴리오", "React", "TypeScript", "Next.js"],
  authors: [{ name: "Yuta" }],
  creator: "Yuta",
  openGraph: {
    title: "Yuta - Frontend Developer Portfolio",
    description: "프론트엔드 개발자 강주의 포트폴리오입니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-gray-900 antialiased transition-colors duration-300 dark:bg-gray-900 dark:text-white`}
      >
        <SpeedInsights />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
