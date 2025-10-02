import Section from "@/components/common/Section";
import FeaturedProjectsSection from "./Section";
import OtherProjectsSection from "./Others";

type Project = {
  id: number;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  className?: string;
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Clever-Dent (메인 서비스)",
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
    liveUrl: "https://dev.vnclever.com/",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Clever-Manager (Admin 서비스)",
    description:
      "관리자를 위한 백오피스 시스템 개발을 담당했습니다. 신규 가입, 병원별 기능제한, 공지사항, 구독기간 관리 등의 관리 기능을 구현했습니다.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tanstack-Query",
      "Styled-Component",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "통합 로그인 서비스",
    description:
      "메인 플랫폼의 계정을 통해 자사의 여러 서비스에 로그인이 가능하도록 하는 통합 로그인 기능을 개발했습니다. OIDC 오픈소스를 활용하여 구현했습니다.",
    technologies: ["TypeScript", "Node.js", "node-oidc-provider", "OAuth 2.0"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 4,
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
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

const Projects = () => {
  const featuredProjects = PROJECTS.filter(project => project.featured);
  const otherProjects = PROJECTS.filter(project => !project.featured);

  return (
    <Section
      id="projects"
      title="프로젝트"
      subtitle="Clean Code와 사용자 경험을 고민하며 만든 프로젝트들입니다"
      background="gray"
    >
      <FeaturedProjectsSection projects={featuredProjects} />
      <OtherProjectsSection projects={otherProjects} />
    </Section>
  );
};

export default Projects;

export type { Project };
