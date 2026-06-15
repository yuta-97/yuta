"use client";

import { useMemo, useState } from "react";
import Section from "@/components/common/Section";
import { PROJECTS } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const FILTERS = [
  "전체",
  "대표 사례",
  "제품 개발",
  "아키텍처",
  "품질 시스템",
  "업무 자동화",
] as const;

const Projects = () => {
  const [selectedFilter, setSelectedFilter] =
    useState<(typeof FILTERS)[number]>("전체");

  const filteredProjects = useMemo(
    () =>
      selectedFilter === "대표 사례"
        ? PROJECTS.filter(project => project.featured)
        : selectedFilter === "전체"
          ? PROJECTS
          : PROJECTS.filter(project => project.focus === selectedFilter),
    [selectedFilter],
  );

  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="결과보다, 결과를 만든 판단을 보여드립니다"
      subtitle="각 사례에는 무엇을 만들었는지뿐 아니라 왜 그 선택을 했고, 팀과 제품의 다음 변화에 무엇을 남겼는지 담았습니다."
    >
      <div
        className="mb-10 flex flex-wrap gap-2"
        role="group"
        aria-label="프로젝트 유형 필터"
      >
        {FILTERS.map(filter => {
          const isSelected = selectedFilter === filter;

          return (
            <button
              key={filter}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setSelectedFilter(filter)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 focus-visible:outline-none ${
                isSelected
                  ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                  : "border border-slate-300 bg-white text-slate-600 hover:border-slate-500 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-white"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        {filteredProjects.length}개의 사례가 표시됩니다.
      </p>

      <div className="grid gap-7 md:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            projectData={project}
            priority={index < 2}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
