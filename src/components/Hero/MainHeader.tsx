"use client";

import { useState } from "react";
import GreetingAnimation from "./GreetingAnimation";

const MainHeader = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <h1 className="mb-6 flex flex-col gap-4 text-center text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
      <GreetingAnimation />
      <div className="flex items-center justify-center gap-[8px]">
        FE 개발자{" "}
        <span
          className="relative inline-block cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span
            className={`inline-block w-full bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-center text-transparent transition-all duration-500 ${
              isHovered
                ? "translate-y-[-100%] opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          >
            Yuta
          </span>
          <span
            className={`absolute top-0 left-0 inline-block w-full bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-center text-transparent transition-all duration-500 ${
              isHovered
                ? "translate-y-0 opacity-100"
                : "translate-y-[100%] opacity-0"
            }`}
          >
            강주
          </span>
        </span>
        입니다
      </div>
    </h1>
  );
};

export default MainHeader;
