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
  title: "Yuta - Portfolio",
  description: "Full Stack Developer & Creative Problem Solver",
  keywords: ["portfolio", "developer", "web development", "next.js", "react"],
  authors: [{ name: "Yuta" }],
  creator: "Yuta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <SpeedInsights />
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-gray-900 antialiased transition-colors duration-300 dark:bg-gray-900 dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
