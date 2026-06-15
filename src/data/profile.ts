const PROFILE = {
  name: "허강주",
  englishName: "Kangju Heo",
  role: "Frontend Engineer",
  email: "kj2693119@gmail.com",
  location: "서울, 대한민국",
  careerStart: "2021.01",
  currentCompany: "이우소프트",
  currentProduct: "Clever Lab",
} as const;

const LINKS = {
  resume:
    "https://www.rallit.com/hub/resumes/479627/%ED%97%88%EA%B0%95%EC%A3%BC",
  blog: "https://yuta-97.github.io/",
  github: "https://github.com/yuta-97",
  linkedin:
    "https://www.linkedin.com/in/%EA%B0%95%EC%A3%BC-%ED%97%88-68469614a/",
  email: `mailto:${PROFILE.email}`,
} as const;

const IMPACTS = [
  {
    value: "5+ years",
    label: "의료 SaaS 제품 개발·운영",
  },
  {
    value: "2h → 20m",
    label: "핵심 회귀 테스트 소요 시간",
  },
  {
    value: "30,000+",
    label: "로컬 LLM으로 자동 번역한 항목",
  },
  {
    value: "3 countries",
    label: "국가별 요구사항과 현지화 대응",
  },
] as const;

const CAPABILITIES = [
  {
    title: "Product Frontend",
    items: ["React", "TypeScript", "Next.js", "GraphQL", "TanStack Query"],
  },
  {
    title: "Quality & DX",
    items: ["Playwright", "Storybook", "SonarQube", "GitHub Actions"],
  },
  {
    title: "Beyond the UI",
    items: ["Node.js", "OIDC / OAuth 2.0", "Electron", "Local LLM"],
  },
] as const;

const EXPERIENCES = [
  {
    company: "이우소프트",
    team: "Cloud 개발팀",
    period: "2025.07 ~ 현재",
    role: "책임 연구원 · Frontend Engineer",
    description:
      "기공소 업무 시스템 Clever Lab을 개발합니다. 레거시 JavaScript 코드를 TypeScript 기반으로 전환하고, FSD 아키텍처와 공통 디자인 시스템을 팀에 적용하고 있습니다.",
    highlights: [
      "기획부터 QA까지 여러 직군과 제품 단위로 협업",
      "업무 특성을 근거로 Next.js 대신 React를 선택",
      "로컬 LLM을 활용해 3만 건 이상의 테스트 항목 번역 자동화",
    ],
  },
  {
    company: "바텍",
    team: "플랫폼사업본부 웹개발팀",
    period: "2021.01 ~ 2025.06",
    role: "책임 연구원 · Frontend Engineer",
    description:
      "글로벌 치과 관리 SaaS의 핵심 기능을 개발하고 운영했습니다. 제품 기능뿐 아니라 인증, 디자인 시스템, 테스트 자동화, 코드 품질과 개발 표준까지 팀의 반복적인 문제를 개선했습니다.",
    highlights: [
      "Clever Dent·Manager의 환자, 예약, 차트, 파일, 급여 기능 개발",
      "OIDC 기반 통합 로그인 서비스 리서치·설계·구현",
      "Storybook, SonarQube, Zustand, Playwright 도입 주도",
    ],
  },
] as const;

export { PROFILE, LINKS, IMPACTS, CAPABILITIES, EXPERIENCES };
