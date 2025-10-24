"use client";

import { useState, useMemo } from "react";
import Section from "@/components/common/Section";
import ProjectCard from "./ProjectCard";

type Project = {
  id: number;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  link?: string;
  githubUrl?: string;
  period: string; // e.g., "2024.01 ~ 2024.06" or "2024.01 ~ 진행중"
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Clever-Dent (메인 서비스)",
    image: "/dent-logo.svg",
    description:
      "치과 관리 플랫폼의 FE 개발을 담당했습니다. 환자관리, 예약, 전자 차트, 파일 첨부, 급여관리 등의 핵심 기능을 개발하고 국가별 특별 요구사항에 대응했습니다.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Apollo-client",
      "GraphQL",
      "i18n",
    ],
    link: "/project/clever-dent",
    period: "2023.01 ~ 2024.12",
  },
  {
    id: 2,
    title: "Clever-Manager (Admin 서비스)",
    image: "/manager-logo.svg",
    description:
      "관리자를 위한 백오피스 시스템 개발을 담당했습니다. 신규 가입, 병원별 기능제한, 공지사항, 구독기간 관리 등의 관리 기능을 구현했습니다.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tanstack-Query",
      "Styled-Component",
    ],
    link: "/project/clever-manager",
    period: "2023.06 ~ 2024.08",
  },
  {
    id: 3,
    title: "공용 컴포넌트 라이브러리 구축",
    description:
      "자사 제품 공통으로 사용하는 UI 컴포넌트 라이브러리를 구축하였고, Storybook을 활용해 문서화도 진행했습니다.",
    technologies: ["React", "TypeScript", "Storybook", "Styled-Component"],
    link: "/project/clever-ui",
    period: "2024.03 ~ 2024.09",
  },
  {
    id: 4,
    title: "통합 로그인 서비스",
    description:
      "메인 플랫폼의 계정을 통해 자사의 여러 서비스에 로그인이 가능하도록 하는 통합 로그인 기능을 개발했습니다. OIDC 오픈소스를 활용하여 구현했습니다.",
    technologies: ["TypeScript", "Node.js", "node-oidc-provider", "OAuth 2.0"],
    link: "/project/clever-login",
    period: "2024.01 ~ 2024.04",
  },
  {
    id: 5,
    title: "Zustand 기반 상태관리 리팩토링",
    description:
      "Context API의 복잡성을 해결하기 위해 Zustand로 전환하여 상태 흐름을 단순화하고 리렌더링을 최소화했습니다. 앱 성능과 개발 생산성 모두 향상시켰습니다.",
    technologies: ["React", "TypeScript", "Zustand", "Context API"],
    link: "/project/zustand-refactoring",
    period: "2025.04 ~ 2025.06",
  },
  {
    id: 6,
    title: "SonarQube 도입 및 개발표준 정립",
    description:
      "기술부채 해결을 위해 SonarQube 도입을 주도하고, 팀 내 개발 표준 문서를 정립하여 코드 품질과 유지보수성을 향상시켰습니다.",
    technologies: [
      "SonarQube",
      "TypeScript",
      "ESLint",
      "Prettier",
      "Git Action",
    ],
    link: "/project/sonarqube",
    period: "2024.09 ~ 2024.12",
  },
];

const Projects = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  // 모든 프로젝트에서 사용된 기술 추출 (중복 제거)
  const allSkills = useMemo(() => {
    const skillsSet = new Set<string>();
    PROJECTS.forEach(project => {
      project.technologies.forEach(tech => skillsSet.add(tech));
    });
    return Array.from(skillsSet).sort();
  }, []);

  // 선택된 스킬로 프로젝트 필터링
  const filteredProjects = useMemo(() => {
    if (selectedSkills.length === 0) return PROJECTS;

    return PROJECTS.filter(project =>
      selectedSkills.every(skill => project.technologies.includes(skill)),
    );
  }, [selectedSkills]);

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill],
    );
  };

  const clearFilters = () => {
    setSelectedSkills([]);
  };

  return (
    <Section
      id="projects"
      title="프로젝트"
      subtitle="실제 서비스 운영 중인 제품들을 만들며 겪은 기술적 도전과 문제 해결 과정을 담았습니다. 사용자 중심의 기능 개발부터 코드 품질 개선까지, 지속 가능한 소프트웨어를 만들기 위한 고민들을 소개합니다."
      background="gray"
    >
      {/* Skills 필터 */}
      <div className="border-t border-gray-300 py-8 dark:border-gray-700">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Skills
          </h3>
          {selectedSkills.length > 0 && (
            <button
              onClick={clearFilters}
              className="cursor-pointer text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            >
              초기화 ({selectedSkills.length}개 선택)
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-3">
          {allSkills.map(skill => {
            const isSelected = selectedSkills.includes(skill);
            const projectCount = PROJECTS.filter(p =>
              p.technologies.includes(skill),
            ).length;

            return (
              <button
                key={skill}
                onClick={() => toggleSkill(skill)}
                className={`cursor-pointer rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isSelected
                    ? "border-blue-500 bg-blue-500 text-white shadow-md"
                    : "border-gray-300 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-500 dark:hover:bg-gray-700"
                }`}
              >
                {skill}
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

export type { Project };
