type Project = {
  id: number;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  link?: string;
  githubUrl?: string;
  period: string; // e.g., "2024.01 ~ 2024.06" or "2024.01 ~ 진행중"
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E2E 테스트 자동화 구축",
    image: "/screenshots/playwright.png",
    description:
      "Clever-Dent의 핵심 기능에 대한 E2E 테스트 자동화를 구축하여 QA 효율성을 크게 향상시켰습니다.",
    tags: ["테스트 자동화", "협업", "생산성", "CI/CD 통합"],
    link: "/project/e2e-test",
    period: "2025.08 ~ 2024.10",
  },
  {
    id: 2,
    title: "컴포넌트 품질 향상을 위한 Storybook 도입 및 문서화",
    image: "/screenshots/storybook.png",
    description:
      "자사 디자인 시스템 라이브러리에 Storybook을 도입하여 문서화하고, 디자이너 및 기획자와의 협업 효율을 크게 향상시켰습니다.",
    tags: ["디자인 시스템", "문서화", "협업", "생산성"],
    link: "/project/clever-ui",
    period: "2025.06 ~ 2025.08",
  },
  {
    id: 3,
    title: "Zustand 기반 상태관리 리팩토링",
    image: "/screenshots/zustand.png",
    description:
      "Context API의 복잡성을 해결하기 위해 Zustand로 전환하여 상태 흐름을 단순화하고 리렌더링을 최소화했습니다. 앱 성능과 개발 생산성 모두 향상시켰습니다.",
    tags: ["기술 부채 해결", "성능 최적화", "DX 개선", "리팩토링"],
    link: "/project/zustand-refactoring",
    period: "2025.04 ~ 2025.06",
  },
  {
    id: 4,
    title: "SonarQube 도입 및 개발표준 정립",
    image: "/screenshots/sonarqube.png",
    description:
      "기술부채 해결을 위해 SonarQube 도입을 주도하고, 팀 내 개발 표준 문서를 정립하여 코드 품질과 유지보수성을 향상시켰습니다.",
    tags: ["DX 개선", "CI/CD 통합", "기술 부채 해결", "협업", "문서화"],
    link: "/project/sonarqube",
    period: "2024.09 ~ 2024.12",
  },
  {
    id: 6,
    title: "Clever-Dent (메인 서비스)",
    image: "/dent-logo.svg",
    description:
      "치과 관리 플랫폼의 FE 개발을 담당했습니다. 환자관리, 예약, 전자 차트, 파일 첨부, 급여관리 등의 핵심 기능을 개발하고 국가별 특별 요구사항에 대응했습니다.",
    tags: ["성능 최적화", "다국어", "협업", "리팩토링"],
    link: "/project/clever-dent",
    period: "2021.06 ~ 2024.12",
  },
  {
    id: 7,
    title: "Clever-Manager (Admin 서비스)",
    image: "/manager-logo.svg",
    description:
      "관리자를 위한 백오피스 시스템 개발을 담당했습니다. 신규 가입, 병원별 기능제한, 공지사항, 구독기간 관리 등의 관리 기능을 구현했습니다.",
    tags: ["생산성", "백오피스", "리팩토링"],
    link: "/project/clever-manager",
    period: "2023.06 ~ 2024.08",
  },
  {
    id: 8,
    title: "통합 로그인 서비스",
    image: "/screenshots/oidc.png",
    description:
      "메인 플랫폼의 계정을 통해 자사의 여러 서비스에 로그인이 가능하도록 하는 통합 로그인 기능을 개발했습니다. OIDC 오픈소스를 활용하여 구현했습니다.",
    tags: ["OAuth/OIDC"],
    link: "/project/clever-login",
    period: "2021.01 ~ 2021.06",
  },
];

export { PROJECTS };
export type { Project };
