import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LINKS, PROFILE } from "@/data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://yuta-97.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "허강주 | 제품과 팀의 마찰을 줄이는 프론트엔드 개발자",
    template: "%s | 허강주 포트폴리오",
  },
  description:
    "글로벌 의료 SaaS를 개발·운영하며 사용자 경험, 프론트엔드 아키텍처, 테스트 자동화와 개발 문화를 함께 개선해 온 허강주의 포트폴리오입니다.",
  keywords: [
    "허강주",
    "프론트엔드 개발자",
    "React",
    "TypeScript",
    "Next.js",
    "Playwright",
    "디자인 시스템",
    "포트폴리오",
  ],
  authors: [{ name: PROFILE.name, url: SITE_URL }],
  creator: PROFILE.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "허강주 | Frontend Engineer",
    description: "제품의 화면뿐 아니라 이를 만드는 구조와 흐름까지 개선합니다.",
    url: SITE_URL,
    siteName: "허강주 포트폴리오",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/porf.jpeg",
        width: 1200,
        height: 1200,
        alt: "프론트엔드 개발자 허강주",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "허강주 | Frontend Engineer",
    description: "제품의 화면뿐 아니라 이를 만드는 구조와 흐름까지 개선합니다.",
    images: ["/porf.jpeg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f7f2" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.name,
  alternateName: PROFILE.englishName,
  jobTitle: PROFILE.role,
  email: PROFILE.email,
  url: SITE_URL,
  sameAs: [LINKS.github, LINKS.blog, LINKS.linkedin, LINKS.resume],
  knowsAbout: [
    "React",
    "TypeScript",
    "Next.js",
    "Frontend Architecture",
    "Design Systems",
    "E2E Testing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#fbfcf8] text-slate-900 antialiased dark:bg-slate-950 dark:text-white`}
      >
        <a
          href="#main-content"
          className="fixed top-2 left-2 z-[100] -translate-y-20 rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition focus:translate-y-0 dark:bg-white dark:text-slate-950"
        >
          본문으로 바로가기
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
