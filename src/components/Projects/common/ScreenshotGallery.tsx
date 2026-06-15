"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import type { Screenshot } from "@/data/case-studies";

type Props = {
  screenshots: Screenshot[];
};

const ScreenshotGallery = ({ screenshots }: Props) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (selectedImage === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
      if (event.key === "ArrowLeft") {
        setSelectedImage(current =>
          current === null
            ? null
            : current > 0
              ? current - 1
              : screenshots.length - 1,
        );
      }
      if (event.key === "ArrowRight") {
        setSelectedImage(current =>
          current === null
            ? null
            : current < screenshots.length - 1
              ? current + 1
              : 0,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [screenshots.length, selectedImage]);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        {screenshots.map((screenshot, index) => (
          <button
            key={screenshot.url}
            type="button"
            onClick={() => setSelectedImage(index)}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-left transition hover:-translate-y-0.5 hover:border-cyan-600 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 focus-visible:outline-none dark:border-slate-700 dark:bg-slate-900"
            aria-label={`${screenshot.caption} 크게 보기`}
          >
            <span className="relative block aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
              <Image
                src={screenshot.url}
                alt={screenshot.caption}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </span>
            <span className="block px-4 py-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {screenshot.caption}
            </span>
          </button>
        ))}
      </div>

      {selectedImage !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-slate-950/95 p-4 sm:p-6"
          onMouseDown={event => {
            if (event.currentTarget === event.target) setSelectedImage(null);
          }}
        >
          <div className="my-auto w-full max-w-6xl py-2">
            <div className="mb-4 flex items-center justify-between gap-4 text-white">
              <h2 id={titleId} className="font-semibold">
                {screenshots[selectedImage].caption}
              </h2>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setSelectedImage(null)}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 text-2xl hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none"
                aria-label="이미지 크게 보기 닫기"
              >
                ×
              </button>
            </div>

            <div className="relative h-[65vh] max-h-[720px] min-h-64 overflow-hidden rounded-xl bg-black">
              <Image
                src={screenshots[selectedImage].url}
                alt={screenshots[selectedImage].caption}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() =>
                  setSelectedImage(current =>
                    current !== null && current > 0
                      ? current - 1
                      : screenshots.length - 1,
                  )
                }
                className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none"
              >
                ← 이전
              </button>
              <span className="text-sm text-slate-300">
                {selectedImage + 1} / {screenshots.length}
              </span>
              <button
                type="button"
                onClick={() =>
                  setSelectedImage(current =>
                    current !== null && current < screenshots.length - 1
                      ? current + 1
                      : 0,
                  )
                }
                className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none"
              >
                다음 →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ScreenshotGallery;
