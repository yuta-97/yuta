"use client";

import { useState, useMemo } from "react";
import Section from "@/components/common/Section";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "./Project";

const Projects = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // 모든 프로젝트에서 사용된 기술 추출 (중복 제거)
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    PROJECTS.forEach(project => {
      project.tags.forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort((a, b) => a.localeCompare(b));
  }, []);

  // 선택된 태그로 프로젝트 필터링
  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) return PROJECTS;

    return PROJECTS.filter(project =>
      selectedTags.some(tag => project.tags.includes(tag)),
    );
  }, [selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(s => s !== tag) : [...prev, tag],
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
  };

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="실제 서비스 운영 중인 제품들을 만들며 겪은 기술적 도전과 문제 해결 과정을 담았습니다. 사용자 중심의 기능 개발부터 코드 품질 개선까지, 지속 가능한 소프트웨어를 만들기 위한 고민들을 소개합니다."
      background="gray"
    >
      {/* Tags 필터 */}
      <div className="border-t border-gray-300 py-8 dark:border-gray-700">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Tags
          </h3>
          {selectedTags.length > 0 && (
            <button
              onClick={clearFilters}
              className="cursor-pointer text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            >
              Reset ({selectedTags.length} selected)
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-3">
          {allTags.map(tag => {
            const isSelected = selectedTags.includes(tag);
            const projectCount = PROJECTS.filter(p =>
              p.tags.includes(tag),
            ).length;

            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`cursor-pointer rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isSelected
                    ? "border-blue-500 bg-blue-500 text-white shadow-md"
                    : "border-gray-300 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-500 dark:hover:bg-gray-700"
                }`}
              >
                {tag}
                <span className="ml-1.5 text-xs opacity-70">
                  ({projectCount})
                </span>
              </button>
            );
          })}
        </div>
      </div>
      {/* 프로젝트 그리드 */}
      <div className="mb-12 grid gap-8 md:grid-cols-2">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} projectData={project} />
        ))}
      </div>

      {/* 필터링된 결과가 없을 때 */}
      {filteredProjects.length === 0 && (
        <div className="mb-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            선택한 기술 스택을 모두 사용한 프로젝트가 없습니다.
          </p>
          <button
            onClick={clearFilters}
            className="mt-4 cursor-pointer text-blue-600 hover:text-blue-700 dark:text-blue-400"
          >
            필터 초기화
          </button>
        </div>
      )}
    </Section>
  );
};

export default Projects;
