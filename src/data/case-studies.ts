type CaseStudyLink = {
  label: string;
  href: string;
};

type Screenshot = {
  url: string;
  caption: string;
};

type Decision = {
  title: string;
  description: string;
};

type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  period: string;
  company: string;
  role: string;
  contribution?: string;
  image?: string;
  imageFit?: "cover" | "contain";
  featured?: boolean;
  focus: "제품 개발" | "아키텍처" | "품질 시스템" | "업무 자동화";
  tags: string[];
  stack: string[];
  impact: string;
  metrics: {
    value: string;
    label: string;
  }[];
  context: string;
  challenges: string[];
  decisions: Decision[];
  execution: string[];
  outcomes: string[];
  lessons: string[];
  screenshots?: Screenshot[];
  links?: CaseStudyLink[];
};

const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "clever-lab",
    title: "Clever Lab 현대화",
    eyebrow: "현재 진행 중인 제품",
    summary:
      "기공소 업무 시스템을 JavaScript에서 TypeScript로 전환하고, 팀이 함께 유지할 수 있는 FSD 구조와 공통 디자인 시스템을 적용했습니다.",
    period: "2026.01 ~ 현재",
    company: "이우소프트",
    role: "프론트엔드 개발 · 마이그레이션 · 아키텍처",
    featured: true,
    focus: "아키텍처",
    tags: ["레거시 현대화", "FSD", "디자인 시스템"],
    stack: ["React", "TypeScript", "Feature-Sliced Design"],
    impact:
      "새 기능을 더 예측 가능하게 추가할 수 있는 제품 구조를 만들었습니다.",
    metrics: [
      { value: "JS → TS", label: "점진적 기술 스택 전환" },
      { value: "FSD", label: "팀 규칙을 합의해 적용" },
      { value: "End-to-end", label: "기획부터 QA까지 참여" },
    ],
    context:
      "계열사에서 인계받은 기공소 업무 시스템은 오래된 JavaScript와 React 구조를 사용하고 있었습니다. 도메인 지식이 복잡한 제품인 만큼 단순 재작성보다, 운영을 이어가면서 팀 전체가 구조를 이해하고 확장할 수 있는 전환 방식이 필요했습니다.",
    challenges: [
      "기존 기능을 유지하면서 타입 안정성을 단계적으로 확보해야 했습니다.",
      "새 아키텍처가 문서 속 규칙에 머물지 않고 팀의 실제 작업 방식이 되어야 했습니다.",
      "업무용 소프트웨어 특성상 유행하는 프레임워크보다 제품에 필요한 기술을 선택해야 했습니다.",
    ],
    decisions: [
      {
        title: "Next.js를 선택하지 않았습니다",
        description:
          "SEO와 SSR의 이점이 거의 없는 내부 업무 시스템이므로 프레임워크 비용보다 React의 단순한 실행 모델이 더 적합하다고 판단했습니다.",
      },
      {
        title: "FSD를 팀의 언어로 만들었습니다",
        description:
          "구조를 일방적으로 적용하지 않고 스터디와 논의를 거쳐 레이어별 책임과 import 규칙을 합의했습니다.",
      },
      {
        title: "마이그레이션과 기능 개발을 병행했습니다",
        description:
          "전체 재작성 대신 변경이 발생하는 영역부터 TypeScript와 새 구조로 옮겨 제품 리스크를 낮췄습니다.",
      },
    ],
    execution: [
      "기공물과 의뢰서 관리 등 핵심 업무 기능을 개발하고 사용자 요구사항을 반영했습니다.",
      "공통 UI의 사용 규칙을 정리하고 디자인 시스템 컴포넌트를 제작했습니다.",
      "기획, 개발, QA 사이의 맥락 손실을 줄이기 위해 초기 논의부터 검증까지 참여했습니다.",
    ],
    outcomes: [
      "기능 위치와 의존 관계가 명확해져 코드 파악과 변경에 드는 부담이 줄었습니다.",
      "기존 기능을 운영하면서도 TypeScript 전환을 지속할 수 있는 경로를 만들었습니다.",
      "기술을 선택할 때 익숙함보다 제품의 사용 환경과 운영 비용을 우선하는 기준을 팀과 공유했습니다.",
    ],
    lessons: [
      "좋은 아키텍처는 디렉터리 모양보다 팀이 같은 기준으로 판단하게 만드는 데 가치가 있습니다.",
      "마이그레이션은 완성된 미래 상태보다 오늘의 변경을 안전하게 만드는 순서가 중요합니다.",
    ],
  },
  {
    slug: "ai-translation",
    title: "로컬 LLM 번역 자동화",
    eyebrow: "업무 병목을 코드로 해결",
    summary:
      "4명의 QA 인력이 수작업으로 처리할 예정이던 대규모 테스트 케이스 번역을 로컬 LLM 파이프라인으로 전환했습니다.",
    period: "2025.11",
    company: "이우소프트",
    role: "문제 정의 · 자동화 설계 · 실행",
    featured: true,
    focus: "업무 자동화",
    tags: ["Local LLM", "데이터 보안", "업무 자동화"],
    stack: ["Qwen3 8B", "Local LLM", "Data Processing"],
    impact:
      "사람이 반복 번역하는 대신 QA가 검수와 제품 품질에 집중하도록 바꿨습니다.",
    metrics: [
      { value: "15,000", label: "테스트 케이스" },
      { value: "30,000+", label: "번역 대상 항목" },
      { value: "28h", label: "전체 자동 번역 시간" },
    ],
    context:
      "계열사 프로젝트를 인계받으며 영문 테스트 케이스를 한글로 번역해야 했습니다. 테스트 조건, 과정, 결과, 설명을 합치면 3만 건이 넘었고, 약 4명의 QA 인력이 직접 처리하기에는 일정과 집중력 모두에 부담이 큰 작업이었습니다.",
    challenges: [
      "회사 데이터를 외부 AI 서비스로 전송하지 않아야 했습니다.",
      "개발 머신 한 대에서 처리 가능한 모델 크기와 품질의 균형이 필요했습니다.",
      "긴 작업이 중단되더라도 처음부터 다시 시작하지 않는 실행 구조가 필요했습니다.",
    ],
    decisions: [
      {
        title: "외부 API 대신 로컬 모델을 선택했습니다",
        description:
          "정보 유출 가능성을 원천적으로 줄이기 위해 모든 데이터가 개발 머신 안에서 처리되도록 구성했습니다.",
      },
      {
        title: "하드웨어에 맞는 모델을 골랐습니다",
        description:
          "M3 Pro와 32GB 메모리에서 처리량과 번역 품질을 함께 확보할 수 있도록 Qwen3 8B를 사용했습니다.",
      },
      {
        title: "완전 자동화보다 검수 가능한 결과를 목표로 했습니다",
        description:
          "AI가 최종 판단을 대신하기보다 반복 작업을 줄이고 QA가 품질 검수에 집중하는 흐름으로 설계했습니다.",
      },
    ],
    execution: [
      "번역이 필요한 필드를 식별하고 일관된 프롬프트와 출력 형식을 정의했습니다.",
      "장시간 실행을 고려해 처리 단위를 나누고 결과를 누적 저장했습니다.",
      "용어와 문장 형식이 흔들리는 구간을 표본 검수해 후처리 기준을 보완했습니다.",
    ],
    outcomes: [
      "3만 건 이상의 항목을 약 28시간 안에 번역했습니다.",
      "QA 인력의 시간을 단순 번역이 아닌 결과 검수와 실제 테스트 준비에 사용할 수 있게 했습니다.",
      "AI 도입의 기준을 신기함이 아니라 보안, 비용, 정확도와 사람의 역할로 정리했습니다.",
    ],
    lessons: [
      "프론트엔드 개발자의 범위보다 중요한 것은 팀의 병목을 정확히 발견하는 일입니다.",
      "AI 자동화는 사람을 제거할 때보다 사람이 더 중요한 판단에 집중하게 할 때 효과가 큽니다.",
    ],
  },
  {
    slug: "e2e-test",
    title: "E2E 테스트 프로세스 구축",
    eyebrow: "릴리즈 신뢰도와 QA 효율",
    summary:
      "Playwright로 핵심 사용자 흐름 40개를 자동화해 매일 반복하던 회귀 테스트 시간을 2시간에서 20분으로 줄였습니다.",
    period: "2025.08 ~ 2025.10",
    company: "바텍 · 이우소프트",
    role: "테스트 전략 · 구현 · 운영 프로세스",
    contribution: "핵심 자동화 영역 주도",
    image: "/screenshots/playwright.png",
    imageFit: "contain",
    featured: true,
    focus: "품질 시스템",
    tags: ["Playwright", "QA 자동화", "CI/CD"],
    stack: ["Playwright", "GitHub Actions", "TypeScript"],
    impact:
      "반복 검증을 자동화해 QA가 새로운 기능의 탐색적 테스트에 집중하게 했습니다.",
    metrics: [
      { value: "40", label: "핵심 E2E 시나리오" },
      { value: "120 → 20m", label: "회귀 테스트 시간" },
      { value: "약 83%", label: "소요 시간 감소" },
    ],
    context:
      "QA 팀은 매일 환자 등록, 예약, 차트, 결제 같은 핵심 흐름을 수동으로 확인했습니다. 반복 작업에 약 2시간이 들었고, 사람의 집중력에 따라 누락 가능성도 달라졌습니다.",
    challenges: [
      "병렬 실행 시 테스트 데이터가 서로 충돌하지 않아야 했습니다.",
      "모든 테스트에서 로그인을 반복하면 실행 시간이 길고 불안정해졌습니다.",
      "파일 업로드와 다운로드처럼 브라우저 이벤트가 개입하는 흐름도 검증해야 했습니다.",
    ],
    decisions: [
      {
        title: "핵심 사용자 흐름부터 자동화했습니다",
        description:
          "화면 수나 코드 커버리지를 늘리기보다 장애 시 영향이 큰 업무 시나리오 40개를 우선했습니다.",
      },
      {
        title: "테스트 독립성을 먼저 설계했습니다",
        description:
          "고유 데이터와 정리 절차를 적용해 실행 순서나 병렬 여부에 결과가 좌우되지 않도록 했습니다.",
      },
      {
        title: "인증 상태를 재사용했습니다",
        description:
          "storageState를 활용해 반복 로그인을 제거하고 테스트 시작 지점을 안정화했습니다.",
      },
    ],
    execution: [
      "환자 등록, 예약 생성, 차트 작성, 결제, 파일 처리 등 핵심 흐름을 구현했습니다.",
      "Fixture로 인증과 사용자 정보를 재사용하고 테스트별 데이터를 분리했습니다.",
      "GitHub Actions와 일일 점검 흐름에 연결해 실패를 빠르게 확인할 수 있게 했습니다.",
    ],
    outcomes: [
      "수동 회귀 테스트 시간을 2시간에서 20분으로 줄였습니다.",
      "반복 검증의 편차를 낮추고 버그를 더 이른 시점에 발견할 수 있게 했습니다.",
      "QA가 자동화하기 어려운 신규 기능과 탐색적 테스트에 집중할 여유를 만들었습니다.",
    ],
    lessons: [
      "E2E 테스트의 가치는 개수보다 제품에서 반드시 지켜야 할 약속을 선별하는 데 있습니다.",
      "테스트하기 어려운 화면은 대체로 책임과 상태 경계도 불명확하다는 신호였습니다.",
    ],
    screenshots: [
      {
        url: "/screenshots/playwright-report.png",
        caption: "Playwright 테스트 실행 리포트",
      },
      {
        url: "/screenshots/playwright-detail.png",
        caption: "실패 원인을 추적하는 상세 결과",
      },
    ],
  },
  {
    slug: "clever-ui",
    title: "CleverUI와 Storybook",
    eyebrow: "공통 UI를 팀의 자산으로",
    summary:
      "MUI의 제약을 줄이는 공통 컴포넌트 라이브러리를 만들고 Storybook으로 상태, 사용법, 협업 기준을 문서화했습니다.",
    period: "2025.01 ~ 2025.03",
    company: "바텍",
    role: "도입 제안 · 환경 구축 · 컴포넌트 문서화",
    image: "/screenshots/storybook.png",
    imageFit: "cover",
    featured: true,
    focus: "품질 시스템",
    tags: ["디자인 시스템", "Storybook", "협업"],
    stack: ["React", "TypeScript", "Storybook", "MDX"],
    impact:
      "공통 UI를 코드 안의 구현물이 아니라 여러 직군이 함께 확인하는 제품 언어로 바꿨습니다.",
    metrics: [
      { value: "30+", label: "문서화한 UI 컴포넌트" },
      { value: "3 roles", label: "개발·디자인·기획 협업" },
      { value: "Visual", label: "상태와 변경 영향 확인" },
    ],
    context:
      "프로젝트가 커지면서 이미 있는 컴포넌트를 다시 만들거나 사용법을 확인하기 위해 소스 코드를 열어보는 일이 반복됐습니다. 디자이너와 기획자는 구현된 상태를 직접 확인하기 어려웠습니다.",
    challenges: [
      "컴포넌트 목록만 만드는 것이 아니라 실제 사용 규칙을 전달해야 했습니다.",
      "다양한 variant와 상호작용 상태를 빠짐없이 보여줘야 했습니다.",
      "기존 MUI 중심 UI와 자체 컴포넌트가 함께 존재하는 전환기를 다뤄야 했습니다.",
    ],
    decisions: [
      {
        title: "Storybook을 협업 화면으로 사용했습니다",
        description:
          "개발 문서에 머무르지 않고 디자이너와 기획자가 구현 상태를 직접 확인하는 공통 기준점으로 만들었습니다.",
      },
      {
        title: "상태를 중심으로 문서화했습니다",
        description:
          "기본 예시보다 size, variant, disabled, error와 같은 실제 제품 상태를 우선해 스토리를 작성했습니다.",
      },
      {
        title: "설명과 검증을 함께 두었습니다",
        description:
          "MDX 사용 가이드와 interaction을 연결해 사용법과 예상 동작이 따로 관리되지 않도록 했습니다.",
      },
    ],
    execution: [
      "Storybook 환경과 빌드 흐름을 구성했습니다.",
      "30개 이상의 공통 컴포넌트에 주요 상태와 사용 예시를 작성했습니다.",
      "Figma와 실제 구현을 비교하고 컴포넌트 변경의 영향을 릴리즈 전에 확인했습니다.",
    ],
    outcomes: [
      "컴포넌트를 찾고 이해하는 시간이 줄고 중복 구현을 예방할 기반이 생겼습니다.",
      "디자인과 구현의 차이를 더 빠르게 발견할 수 있게 됐습니다.",
      "신규 구성원이 코드 전체를 읽기 전에 UI 시스템을 파악할 수 있는 진입점을 만들었습니다.",
    ],
    lessons: [
      "디자인 시스템은 컴포넌트 수보다 팀이 같은 이름과 상태를 공유하는지가 중요합니다.",
      "문서는 실제 개발 흐름 안에서 갱신될 때만 신뢰할 수 있습니다.",
    ],
  },
  {
    slug: "zustand-refactoring",
    title: "Zustand 상태 관리 리팩토링",
    eyebrow: "상태 흐름을 더 작고 명확하게",
    summary:
      "Context API와 reducer에 흩어진 전역 상태를 Zustand로 점진적으로 옮겨 구독 범위와 디버깅 경로를 단순화했습니다.",
    period: "2025.04 ~ 2025.06",
    company: "바텍",
    role: "기술 검토 · 점진적 마이그레이션",
    image: "/screenshots/zustand.png",
    imageFit: "contain",
    focus: "아키텍처",
    tags: ["Zustand", "상태 관리", "리팩토링"],
    stack: ["React", "TypeScript", "Zustand"],
    impact:
      "상태가 바뀌는 이유와 영향을 받는 화면을 더 쉽게 추적할 수 있게 했습니다.",
    metrics: [
      { value: "Context", label: "중첩 Provider 제거" },
      { value: "Selector", label: "필요한 상태만 구독" },
      { value: "Gradual", label: "기능별 점진적 전환" },
    ],
    context:
      "Context API와 useReducer 조합이 늘어나며 Provider가 중첩되고, 한 상태의 변경이 넓은 화면을 다시 렌더링했습니다. 비동기 로직과 action 타입도 여러 파일에 흩어져 상태 흐름을 추적하기 어려웠습니다.",
    challenges: [
      "운영 중인 기능을 멈추지 않고 상태 관리 방식을 바꿔야 했습니다.",
      "새 라이브러리 도입이 또 다른 전역 상태 남용으로 이어지지 않아야 했습니다.",
      "팀원이 쉽게 이해하고 디버깅할 수 있는 패턴이 필요했습니다.",
    ],
    decisions: [
      {
        title: "작은 상태부터 옮겼습니다",
        description:
          "모달과 토스트처럼 경계가 분명한 상태부터 시작해 기존 Context와 병행 운영했습니다.",
      },
      {
        title: "선택적 구독을 기본 규칙으로 삼았습니다",
        description:
          "store 전체를 읽지 않고 selector로 필요한 값만 구독해 변경의 영향을 좁혔습니다.",
      },
      {
        title: "도메인별 slice로 책임을 나눴습니다",
        description:
          "하나의 거대한 store 대신 기능 경계에 맞춰 상태와 action을 함께 배치했습니다.",
      },
    ],
    execution: [
      "전역 상태의 소유권과 사용처를 먼저 정리했습니다.",
      "Context와 Zustand를 병행하며 기능 단위로 전환했습니다.",
      "DevTools를 연결해 상태 변경의 원인과 순서를 확인할 수 있게 했습니다.",
    ],
    outcomes: [
      "중첩 Provider를 줄이고 컴포넌트 트리를 단순화했습니다.",
      "필요한 상태만 구독해 렌더링 영향 범위를 줄였습니다.",
      "상태와 action의 위치가 명확해져 디버깅과 신규 기능 추가가 쉬워졌습니다.",
    ],
    lessons: [
      "상태 관리 도구보다 먼저 전역이어야 하는 상태인지 질문해야 합니다.",
      "점진적 전환은 기술 리스크뿐 아니라 팀이 새 패턴을 학습할 시간을 확보합니다.",
    ],
  },
  {
    slug: "sonarqube",
    title: "SonarQube와 개발 표준",
    eyebrow: "도구보다 합의가 먼저인 품질 개선",
    summary:
      "코드가 늘며 커진 유지보수 비용을 줄이기 위해 정적 분석을 도입하고, 팀이 합의한 개발 표준과 리뷰 기준을 문서화했습니다.",
    period: "2024.08 ~ 2024.12",
    company: "바텍",
    role: "도입 제안 · CI 연동 · 표준 문서화",
    image: "/screenshots/sonarqube.png",
    imageFit: "contain",
    focus: "품질 시스템",
    tags: ["SonarQube", "개발 표준", "팀 문화"],
    stack: ["SonarQube", "ESLint", "Prettier", "CI/CD"],
    impact:
      "취향 중심의 리뷰를 줄이고 유지보수성에 대해 대화할 공통 기준을 만들었습니다.",
    metrics: [
      { value: "Static", label: "반복 지적 자동화" },
      { value: "Shared", label: "팀 개발 표준 합의" },
      { value: "CI", label: "변경 흐름에 품질 검사 연결" },
    ],
    context:
      "코드와 개발 인원이 늘면서 스타일 편차와 기술 부채가 코드 리뷰 시간을 차지했습니다. 암묵적인 규칙은 신규 구성원이 빠르게 적응하기 어렵게 만들었습니다.",
    challenges: [
      "품질 도구가 개발 속도를 늦추는 통제 장치로 받아들여지지 않아야 했습니다.",
      "분석 결과를 모두 고치는 대신 제품과 팀에 맞는 우선순위를 정해야 했습니다.",
      "개인의 선호가 아닌 유지보수 관점에서 규칙을 합의해야 했습니다.",
    ],
    decisions: [
      {
        title: "도입 전에 문제를 공유했습니다",
        description:
          "도구의 기능보다 현재 리뷰와 유지보수에서 반복되는 비용을 구체적으로 정리해 팀과 논의했습니다.",
      },
      {
        title: "품질과 개발 편의의 균형을 합의했습니다",
        description:
          "모든 규칙을 강제하지 않고 영향과 수정 비용을 함께 살펴 적용 범위를 정했습니다.",
      },
      {
        title: "자동 검사와 사람의 리뷰를 분리했습니다",
        description:
          "형식과 반복 패턴은 도구가 맡고, 리뷰에서는 설계와 제품 맥락에 집중하도록 했습니다.",
      },
    ],
    execution: [
      "SonarQube 분석 환경과 CI 흐름을 연결했습니다.",
      "TypeScript, 컴포넌트 설계, Git, 코드 리뷰 기준을 문서화했습니다.",
      "분석 결과를 팀과 함께 검토하며 규칙과 예외를 조정했습니다.",
    ],
    outcomes: [
      "코드 품질을 개인의 감각이 아니라 함께 확인할 수 있는 데이터로 다루게 됐습니다.",
      "반복적인 스타일 논의를 줄이고 리뷰가 기능과 구조에 집중할 기반을 만들었습니다.",
      "신규 구성원이 따라갈 수 있는 명시적인 개발 기준을 마련했습니다.",
    ],
    lessons: [
      "도구 도입의 성패는 기능보다 팀이 왜 필요한지 납득하는 과정에 달려 있습니다.",
      "좋은 표준은 예외를 금지하는 규칙이 아니라 판단 비용을 줄이는 기본값입니다.",
    ],
    screenshots: [
      {
        url: "/screenshots/sonarqube-detail.png",
        caption: "코드 이슈의 위치와 개선 근거를 확인하는 화면",
      },
    ],
  },
  {
    slug: "clever-dent",
    title: "Clever Dent 글로벌 의료 SaaS",
    eyebrow: "3년 넘게 개발하고 운영한 핵심 제품",
    summary:
      "치과의 환자, 예약, 차트, 파일, 급여 업무를 다루는 글로벌 SaaS를 개발하고 레거시 프론트엔드를 단계적으로 현대화했습니다.",
    period: "2021.11 ~ 2024.12",
    company: "바텍",
    role: "핵심 기능 개발 · 운영 · 프론트엔드 현대화",
    image: "/dent-logo.svg",
    imageFit: "contain",
    featured: true,
    focus: "제품 개발",
    tags: ["의료 SaaS", "글로벌", "레거시 현대화"],
    stack: [
      "Next.js",
      "TypeScript",
      "GraphQL",
      "Apollo Client",
      "TanStack Query",
      "i18next",
    ],
    impact:
      "복잡한 의료 업무를 안정적으로 운영하면서 기술 부채를 단계적으로 줄였습니다.",
    metrics: [
      { value: "3 countries", label: "이집트·베트남·인도 대응" },
      { value: "3+ years", label: "핵심 제품 개발·운영" },
      { value: "Full flow", label: "환자부터 수납까지" },
    ],
    context:
      "개발 초기 단계에 합류해 치과에서 매일 사용하는 환자 관리 시스템을 만들었습니다. 기능이 빠르게 늘고 여러 국가로 확장되면서 초기 React와 JavaScript 구조는 타입 안정성, UI 일관성, 데이터 요청 관리에서 한계를 보였습니다.",
    challenges: [
      "환자, 예약, 전자 차트, 수납처럼 서로 강하게 연결된 업무 흐름을 다뤄야 했습니다.",
      "국가별 의료 체계, 언어, 날짜와 통화 형식의 차이를 제품에 반영해야 했습니다.",
      "대용량 X-ray와 CT 이미지가 브라우저와 서버에 주는 부하를 안정적으로 처리해야 했습니다.",
    ],
    decisions: [
      {
        title: "제품 운영과 현대화를 함께 진행했습니다",
        description:
          "React와 JavaScript 코드를 Next.js와 TypeScript로 옮기되, 사용자 기능 개발을 멈추지 않는 점진적 방식을 택했습니다.",
      },
      {
        title: "데이터 성격에 맞는 도구를 나눴습니다",
        description:
          "GraphQL은 Apollo Client로, 파편화된 REST API는 TanStack Query로 관리해 캐시와 오류 처리의 책임을 명확히 했습니다.",
      },
      {
        title: "UI 일관성을 제품 내부에서 통제했습니다",
        description:
          "MUI의 제약을 줄이고 제품 요구에 맞춘 공통 디자인 시스템으로 전환했습니다.",
      },
    ],
    execution: [
      "환자 관리, 예약, 전자 차트, 파일, 급여, 기공 의뢰 등 핵심 기능을 개발했습니다.",
      "i18next와 국가별 포맷 처리를 적용하고 현지 요구사항에 맞춰 UI를 조정했습니다.",
      "대용량 의료 이미지에 썸네일과 캐시 전략을 적용해 처리 부하를 줄였습니다.",
      "프론트엔드 우회 처리보다 API와 데이터 구조의 근본 원인을 함께 논의했습니다.",
    ],
    outcomes: [
      "초기 제품을 여러 국가에서 사용하는 글로벌 서비스로 성장시키는 과정에 참여했습니다.",
      "타입, 데이터 요청, UI 시스템을 단계적으로 정비해 다음 기능을 만들기 쉬운 기반을 마련했습니다.",
      "프론트엔드 문제를 화면 안에 한정하지 않고 서버 인터페이스와 데이터 흐름까지 함께 판단하는 방식을 익혔습니다.",
    ],
    lessons: [
      "운영 제품에서 가장 좋은 개선은 새 기술의 양보다 이후 변경 비용을 실제로 줄이는 개선입니다.",
      "의료 도메인에서는 편리함뿐 아니라 데이터 정합성과 예외 상황을 끝까지 고려해야 합니다.",
    ],
    screenshots: [
      {
        url: "/screenshots/dent-dashboard.png",
        caption: "치과 운영 정보를 모아보는 대시보드",
      },
      {
        url: "/screenshots/dent-patient-list.png",
        caption: "환자 목록과 검색 흐름",
      },
      {
        url: "/screenshots/dent-chart.png",
        caption: "환자 진료 정보를 기록하는 전자 차트",
      },
      {
        url: "/screenshots/dent-schedule.png",
        caption: "예약 현황을 확인하는 스케줄 화면",
      },
      {
        url: "/screenshots/dent-schedule-create.png",
        caption: "예약 생성과 충돌 확인 흐름",
      },
      {
        url: "/screenshots/dent-file.png",
        caption: "X-ray와 CT 등 의료 이미지 관리",
      },
    ],
  },
  {
    slug: "clever-manager",
    title: "Clever Manager와 마이그레이션 도구",
    eyebrow: "운영자를 위한 제품",
    summary:
      "여러 치과의 계정, 구독, 기능과 공지를 관리하는 백오피스와 환자 데이터 이관을 위한 데스크톱 도구를 개발했습니다.",
    period: "2023.06 ~ 2024.08",
    company: "바텍",
    role: "프론트엔드 · 관리자 UX · Electron 도구",
    image: "/manager-logo.svg",
    imageFit: "contain",
    focus: "제품 개발",
    tags: ["백오피스", "Electron", "관리자 UX"],
    stack: ["React", "TypeScript", "Electron", "C#"],
    impact:
      "운영팀이 여러 고객사를 더 안전하고 빠르게 관리할 수 있는 도구를 만들었습니다.",
    metrics: [
      { value: "Admin", label: "다수 치과 통합 관리" },
      { value: "Desktop", label: "데이터 이관 도구" },
      { value: "Traceable", label: "민감 작업 확인과 기록" },
    ],
    context:
      "Clever Dent의 고객사가 늘면서 대리점과 법인이 여러 치과의 가입, 기능, 구독과 공지를 한곳에서 관리할 제품이 필요했습니다. 동시에 타사 서비스의 환자 데이터를 안전하게 옮기는 도구도 필요했습니다.",
    challenges: [
      "계정 정지와 기능 제한처럼 실수의 영향이 큰 작업을 안전하게 설계해야 했습니다.",
      "숙련도가 다른 운영자가 많은 데이터를 빠르게 찾고 처리해야 했습니다.",
      "서로 다른 형식의 대용량 환자 데이터를 손실 없이 변환해야 했습니다.",
    ],
    decisions: [
      {
        title: "관리자 작업에도 사용자 경험을 적용했습니다",
        description:
          "검색과 필터뿐 아니라 위험 작업의 미리보기, 확인 단계, 작업 결과 피드백을 중요하게 다뤘습니다.",
      },
      {
        title: "데이터 이관은 데스크톱 도구로 만들었습니다",
        description:
          "로컬 파일과 시스템 자원에 접근해야 하므로 Electron과 C#을 사용해 웹 UI와 네이티브 처리를 결합했습니다.",
      },
      {
        title: "긴 작업이 화면을 멈추지 않게 했습니다",
        description:
          "대용량 파일 처리를 UI 실행 흐름에서 분리하고 진행 상태를 보여줬습니다.",
      },
    ],
    execution: [
      "병원 가입 현황, 기능 제한, 공지, 구독 기간과 통계 화면을 개발했습니다.",
      "CSV와 Excel 데이터를 읽고 기존 구조를 새 데이터 모델로 변환했습니다.",
      "민감한 관리 작업에 확인 단계와 추적 가능한 로그를 적용했습니다.",
    ],
    outcomes: [
      "운영자가 여러 치과의 상태를 한곳에서 파악하고 처리할 수 있게 했습니다.",
      "반복적인 데이터 이관 작업을 전용 도구로 표준화했습니다.",
      "내부 도구도 실제 사용자의 실수와 학습 비용을 줄여야 한다는 기준을 갖게 됐습니다.",
    ],
    lessons: [
      "백오피스의 품질은 화면의 화려함보다 오류를 예방하고 복구 가능하게 만드는 데서 드러납니다.",
      "웹 기술을 제품 환경에 맞게 확장하면 데스크톱 업무도 일관된 경험으로 만들 수 있습니다.",
    ],
    screenshots: [
      {
        url: "/screenshots/manager-dashboard.png",
        caption: "여러 치과의 현황을 확인하는 대시보드",
      },
      {
        url: "/screenshots/manager-user.png",
        caption: "병원 계정과 기능을 관리하는 화면",
      },
      {
        url: "/screenshots/manager-notice.png",
        caption: "고객사 공지 관리",
      },
      {
        url: "/screenshots/migration.png",
        caption: "환자 데이터를 옮기는 마이그레이션 도구",
      },
    ],
  },
  {
    slug: "clever-login",
    title: "OIDC 통합 로그인 서비스",
    eyebrow: "첫 단독 프로젝트",
    summary:
      "외부 소셜 로그인을 붙이는 수준을 넘어 OIDC와 OAuth 2.0을 학습하고 자사 서비스가 함께 사용하는 인증 서버를 직접 구현했습니다.",
    period: "2021.06 ~ 2021.10",
    company: "바텍",
    role: "기술 리서치 · 설계 · 서버 구현",
    contribution: "단독 수행",
    image: "/screenshots/oidc.png",
    imageFit: "contain",
    focus: "아키텍처",
    tags: ["OIDC", "OAuth 2.0", "Node.js"],
    stack: ["TypeScript", "Node.js", "oidc-provider", "OAuth 2.0"],
    impact:
      "여러 자사 서비스가 하나의 계정으로 이어지는 인증 기반을 만들었습니다.",
    metrics: [
      { value: "100%", label: "리서치부터 구현까지 담당" },
      { value: "SSO", label: "자사 서비스 계정 통합" },
      { value: "RFC", label: "표준 문서 기반 학습" },
    ],
    context:
      "입사 초기에 자사 서비스 사이의 통합 로그인을 만드는 과제를 맡았습니다. 당시 경험은 외부 인증 API를 사용하는 정도였고, 인증 서버를 직접 구현한 국내 사례와 자료는 많지 않았습니다.",
    challenges: [
      "인증과 권한 위임의 차이부터 프로토콜 흐름을 정확히 이해해야 했습니다.",
      "제한된 자료 속에서 보안성과 사용성을 함께 고려해야 했습니다.",
      "프론트엔드, 클라이언트, 인증 서버 사이의 redirect와 token 흐름을 끝까지 검증해야 했습니다.",
    ],
    decisions: [
      {
        title: "프로토콜을 먼저 이해했습니다",
        description:
          "라이브러리 사용법보다 OAuth 2.0과 OpenID Connect의 역할, authorization code flow와 token 수명주기를 먼저 정리했습니다.",
      },
      {
        title: "검증된 구현체를 활용했습니다",
        description:
          "표준을 직접 재구현하기보다 oidc-provider를 기반으로 제품의 계정과 동의 흐름을 연결했습니다.",
      },
      {
        title: "학습 내용을 공개 문서로 남겼습니다",
        description:
          "두 달간의 리서치와 구현 과정을 블로그에 정리해 이후 유지보수와 다른 개발자의 학습에 활용했습니다.",
      },
    ],
    execution: [
      "클라이언트 등록, 로그인, 동의, token 발급과 검증 흐름을 구현했습니다.",
      "초기 Express 기반 서비스를 이후 NestJS 백엔드 모노레포로 통합했습니다.",
      "오류 상황과 redirect URI, session 처리 등 인증 경계의 예외를 검증했습니다.",
    ],
    outcomes: [
      "메인 플랫폼 계정으로 여러 자사 서비스에 로그인할 수 있게 했습니다.",
      "프론트엔드 밖의 문제도 표준 문서와 오픈소스를 따라 해결할 수 있다는 자신감을 얻었습니다.",
      "인증 서버 구현 경험을 글로 남겨 기술적 판단과 설명 능력을 함께 키웠습니다.",
    ],
    lessons: [
      "보안 영역에서는 동작하는 코드보다 표준이 의도한 경계를 이해하는 것이 먼저입니다.",
      "낯선 문제를 작은 개념과 흐름으로 분해하면 담당 영역 밖에서도 해결책을 만들 수 있습니다.",
    ],
    links: [
      {
        label: "NestJS 기반 인증 서버 구현기",
        href: "https://yuta-97.github.io/posts/Typescript%EB%A1%9C-OAuth-%EC%9D%B8%EC%A6%9D%EC%84%9C%EB%B2%84-%EB%A7%8C%EB%93%A4%EA%B8%B0-oidc-provider/",
      },
      {
        label: "초기 Node.js 구현기",
        href: "https://yuta-97.github.io/posts/Nodejs%EB%A1%9C-OAuth-%EC%9D%B8%EC%A6%9D%EC%84%9C%EB%B2%84-%EB%A7%8C%EB%93%A4%EA%B8%B0-oidc-provider/",
      },
    ],
  },
];

const getCaseStudy = (slug: string) =>
  CASE_STUDIES.find(project => project.slug === slug);

export { CASE_STUDIES, getCaseStudy };
export type { CaseStudy, Screenshot };
