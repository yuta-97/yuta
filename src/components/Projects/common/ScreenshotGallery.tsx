"use client";

import { useState } from "react";
import Image from "next/image";

type Screenshot = {
  url: string;
  caption: string;
};

type Props = {
  screenshots: Screenshot[];
};

const ScreenshotGallery = (props: Props) => {
  const { screenshots } = props;
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {screenshots.map((screenshot, index) => (
          <div
            key={index}
            className="group relative cursor-pointer overflow-hidden rounded-lg border border-gray-200 transition-all hover:border-blue-500 dark:border-gray-700 dark:hover:border-blue-400"
            onClick={() => setSelectedImage(index)}
          >
            <div className="relative aspect-video bg-gray-100 dark:bg-gray-700">
              <Image
                src={screenshot.url}
                alt={screenshot.caption}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-10" />
            </div>
            <div className="bg-white p-3 dark:bg-gray-800">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {screenshot.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="bg-opacity-90 fixed inset-0 z-50 flex items-center justify-center bg-black p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-6xl">
            <button
              className="absolute top-4 right-4 z-10 text-4xl text-white transition-colors hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
              aria-label="닫기"
            >
              ×
            </button>
            <div className="relative aspect-video">
              <Image
                src={screenshots[selectedImage].url}
                alt={screenshots[selectedImage].caption}
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-center text-lg text-white">
              {screenshots[selectedImage].caption}
            </p>
            {/* Navigation Buttons */}
            <div className="mt-4 flex justify-between">
              <button
                className="rounded bg-gray-700 px-4 py-2 text-white hover:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-50"
                onClick={e => {
                  e.stopPropagation();
                  setSelectedImage(prev =>
                    prev! > 0 ? prev! - 1 : screenshots.length - 1,
                  );
                }}
                aria-label="이전 이미지"
              >
                ← 이전
              </button>
              <span className="self-center text-white">
                {selectedImage + 1} / {screenshots.length}
              </span>
              <button
                className="rounded bg-gray-700 px-4 py-2 text-white hover:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-50"
                onClick={e => {
                  e.stopPropagation();
                  setSelectedImage(prev =>
                    prev! < screenshots.length - 1 ? prev! + 1 : 0,
                  );
                }}
                aria-label="다음 이미지"
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
