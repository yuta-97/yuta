type ValueData = {
  title: string;
  description: string;
  principles: string[];
  evidence: {
    title: string;
    link: string;
  };
};

const VALUES: ValueData[] = [
  {
    title: "제품에 필요한 만큼의 기술",
    description:
      "유명하거나 익숙한 선택보다 사용 환경, 운영 비용과 팀의 이해도를 먼저 봅니다.",
    principles: [
      "SEO가 필요 없는 업무 시스템에서 React를 선택",
      "기존 기능을 멈추지 않는 점진적 TypeScript 전환",
      "GraphQL과 REST의 성격에 맞춰 데이터 도구 분리",
    ],
    evidence: {
      title: "Clever Lab 현대화",
      link: "/project/clever-lab",
    },
  },
  {
    title: "사람이 판단에 집중하는 자동화",
    description:
      "반복 작업을 줄이는 목적은 속도만이 아니라 동료가 더 중요한 문제에 집중하게 만드는 데 있습니다.",
    principles: [
      "2시간의 수동 회귀 테스트를 20분으로 단축",
      "3만 건 이상의 번역을 로컬 LLM으로 처리",
      "정적 분석으로 반복 리뷰와 스타일 논쟁 자동화",
    ],
    evidence: {
      title: "E2E 테스트 프로세스",
      link: "/project/e2e-test",
    },
  },
  {
    title: "팀에 남는 기술적 결정",
    description:
      "혼자 이해한 해결책보다 팀이 다음에도 사용할 수 있는 규칙, 문서와 도구를 남깁니다.",
    principles: [
      "FSD 도입 전 팀 스터디와 경계 규칙 합의",
      "Storybook에 UI 상태와 사용법을 함께 문서화",
      "개발 표준을 가독성과 유지보수 관점에서 정리",
    ],
    evidence: {
      title: "CleverUI와 Storybook",
      link: "/project/clever-ui",
    },
  },
];

export { VALUES };
export type { ValueData };
