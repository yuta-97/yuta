"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/data/navigation";
import { LINKS, PROFILE } from "@/data/profile";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      aria-label="주요 탐색"
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-[#f6f7f2]/90 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/90"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="rounded-md text-base font-semibold tracking-tight text-slate-950 focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:outline-none dark:text-white"
          onClick={() => setIsOpen(false)}
        >
          {PROFILE.name}
          <span className="ml-2 font-normal text-slate-500 dark:text-slate-400">
            Frontend
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-slate-950 focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:outline-none dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white"
            >
              {item.name}
            </Link>
          ))}
          <a
            href={LINKS.resume}
            target="_blank"
            rel="noreferrer"
            className="ml-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-700 focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 focus-visible:outline-none dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200"
          >
            이력서
            <span aria-hidden className="ml-1">
              ↗
            </span>
          </a>
        </div>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setIsOpen(current => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:outline-none md:hidden dark:border-slate-700 dark:text-slate-200"
        >
          <span aria-hidden className="text-xl leading-none">
            {isOpen ? "×" : "≡"}
          </span>
        </button>
      </div>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200 bg-[#f6f7f2] px-4 py-4 md:hidden dark:border-slate-800 dark:bg-slate-950"
        >
          <div className="mx-auto grid max-w-7xl gap-1">
            {NAV_ITEMS.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-xl px-4 py-3 font-medium text-slate-700 hover:bg-white dark:text-slate-200 dark:hover:bg-slate-900"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={LINKS.resume}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-xl bg-slate-950 px-4 py-3 text-center font-semibold text-white dark:bg-white dark:text-slate-950"
              onClick={() => setIsOpen(false)}
            >
              이력서 열기 ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
