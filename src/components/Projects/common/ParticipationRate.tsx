"use client";

import { useRef } from "react";

type Props = {
  percentage: number;
  label?: string;
};

const ParticipationRate = (props: Props) => {
  const { percentage, label = "업무 기여도" } = props;
  const progressRef = useRef<HTMLDivElement>(null);

  return (
    <div className="my-8 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 dark:from-gray-800 dark:to-gray-900">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {label}
        </h3>
        <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          {percentage}%
        </span>
      </div>
      <div className="relative h-4 overflow-visible rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          ref={progressRef}
          className="relative h-full overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
          style={{
            width: `${percentage}%`,
            transformOrigin: "center",
            transition: "transform 150ms ease-out",
          }}
        >
          {/* 흐르는 애니메이션 */}
          <div className="animate-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        프로젝트 전체 기간 대비 참여 비중
      </div>
    </div>
  );
};

export default ParticipationRate;
