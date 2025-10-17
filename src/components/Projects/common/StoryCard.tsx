"use client";

import { useState, useRef, useEffect } from "react";

type Props = {
  title: string;
  content: string;
  type?: "success" | "challenge" | "learning";
  collapsible?: boolean;
  maxHeight?: number;
};

const getStyles = (type: Props["type"]) => {
  switch (type) {
    case "challenge":
      return {
        bg: "bg-red-50 dark:bg-red-900/10",
        border: "border-red-200 dark:border-red-800",
        accent: "bg-red-500",
        buttonBg:
          "bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-900/50",
        buttonText: "text-red-700 dark:text-red-300",
        gradient:
          "from-red-50/0 via-red-50/60 to-red-50 dark:from-red-900/0 dark:via-red-900/30 dark:to-red-900/10",
      };
    case "learning":
      return {
        bg: "bg-emerald-50 dark:bg-emerald-900/10",
        border: "border-emerald-200 dark:border-emerald-800",
        accent: "bg-emerald-500",
        buttonBg:
          "bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:hover:bg-emerald-900/50",
        buttonText: "text-emerald-700 dark:text-emerald-300",
        gradient:
          "from-emerald-50/0 via-emerald-50/60 to-emerald-50 dark:from-emerald-900/0 dark:via-emerald-900/30 dark:to-emerald-900/10",
      };
    default:
      return {
        bg: "bg-blue-50 dark:bg-blue-900/10",
        border: "border-blue-200 dark:border-blue-800",
        accent: "bg-blue-500",
        buttonBg:
          "bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-900/50",
        buttonText: "text-blue-700 dark:text-blue-300",
        gradient:
          "from-blue-50/0 via-blue-50/60 to-blue-50 dark:from-blue-900/0 dark:via-blue-900/30 dark:to-blue-900/10",
      };
  }
};

const StoryCard = (props: Props) => {
  const {
    title,
    content,
    type = "success",
    collapsible = true,
    maxHeight = 300,
  } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsCollapse, setNeedsCollapse] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const styles = getStyles(type);

  useEffect(() => {
    if (contentRef.current && collapsible) {
      const height = contentRef.current.scrollHeight;
      setNeedsCollapse(height > maxHeight);
    }
  }, [content, collapsible, maxHeight]);

  return (
    <div
      className={`relative rounded-xl border ${styles.border} ${styles.bg} p-6 transition-all duration-200 hover:shadow-lg`}
    >
      <div
        className={`absolute top-0 left-0 h-full w-1 rounded-l-xl ${styles.accent}`}
      ></div>
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
              className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-colors ${styles.buttonBg} ${styles.buttonText} text-sm font-medium`}
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
