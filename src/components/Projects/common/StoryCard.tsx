"use client";

import { useState, useRef, useEffect } from "react";

type Props = {
  title: string;
  content: string;
  collapsible?: boolean;
  maxHeight?: number;
};

const StoryCard = (props: Props) => {
  const { title, content, collapsible = true, maxHeight = 300 } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsCollapse, setNeedsCollapse] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current && collapsible) {
      const height = contentRef.current.scrollHeight;
      setNeedsCollapse(height > maxHeight);
    }
  }, [content, collapsible, maxHeight]);

  return (
    <div className="group relative rounded-xl border border-gray-200 bg-white p-6 transition-all duration-200 hover:border-blue-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800/50 dark:hover:border-blue-600">
      <div className="absolute top-0 left-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-blue-400 to-indigo-500 opacity-60 transition-opacity group-hover:opacity-100"></div>
      <div className="pl-4">
        <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
          {title}
        </h3>
        <div className="relative">
          <div
            ref={contentRef}
            className={`space-y-3 overflow-hidden leading-relaxed whitespace-pre-line text-gray-700 transition-all duration-300 dark:text-gray-300 ${
              !isExpanded && needsCollapse ? `max-h-[${maxHeight}px]` : ""
            }`}
            style={
              !isExpanded && needsCollapse
                ? {
                    maxHeight: `${maxHeight}px`,
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 60%, transparent 100%)",
                    maskImage:
                      "linear-gradient(to bottom, black 60%, transparent 100%)",
                  }
                : undefined
            }
          >
            {content}
          </div>
        </div>
        {needsCollapse && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              {isExpanded ? (
                <>
                  <span>접기</span>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </>
              ) : (
                <>
                  <span>더 보기</span>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryCard;
