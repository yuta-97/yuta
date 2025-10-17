import Section from "@/components/common/Section";
import FeaturedProjectsSection from "./Section";
import OtherProjectsSection from "./Others";

type Project = {
  id: number;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  link?: string;
  githubUrl?: string;
  featured?: boolean;
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
    featured: true,
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
    featured: true,
  },
  {
    id: 3,
    title: "공용 컴포넌트 라이브러리 구축",
    description:
      "자사 제품 공통으로 사용하는 UI 컴포넌트 라이브러리를 구축하였고, Storybook을 활용해 문서화도 진행했습니다.",
    technologies: ["React", "TypeScript", "Storybook", "Styled-Component"],
    link: "/project/clever-ui",
    featured: true,
  },
  {
    id: 4,
    title: "통합 로그인 서비스",
    description:
      "메인 플랫폼의 계정을 통해 자사의 여러 서비스에 로그인이 가능하도록 하는 통합 로그인 기능을 개발했습니다. OIDC 오픈소스를 활용하여 구현했습니다.",
    technologies: ["TypeScript", "Node.js", "node-oidc-provider", "OAuth 2.0"],
    link: "/project/clever-login",
    featured: true,
  },
  {
    id: 5,
    title: "Zustand 기반 상태관리 리팩토링",
    description:
      "Context API의 복잡성을 해결하기 위해 Zustand로 전환하여 상태 흐름을 단순화하고 리렌더링을 최소화했습니다. 앱 성능과 개발 생산성 모두 향상시켰습니다.",
    technologies: ["React", "TypeScript", "Zustand", "Context API"],
    link: "/project/zustand-refactoring",
    featured: false,
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
      subtitle="실제 서비스 운영 중인 제품들을 만들며 겪은 기술적 도전과 문제 해결 과정을 담았습니다. 사용자 중심의 기능 개발부터 코드 품질 개선까지, 지속 가능한 소프트웨어를 만들기 위한 고민들을 소개합니다."
      background="gray"
    >
      <FeaturedProjectsSection projects={featuredProjects} />
      <OtherProjectsSection projects={otherProjects} />
    </Section>
  );
};

export default Projects;

export type { Project };
