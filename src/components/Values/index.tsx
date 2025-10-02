import Section from "../common/Section";
import ValueCard from "./ValueCards";

type ValueData = {
  title: string;
  description: string;
  icon: string;
  principles: string[];
};

const VALUES: ValueData[] = [
  {
    title: "Process Automation",
    description: "반복되는 작업을 자동화하고 비효율적인 프로세스를 개선합니다",
    icon: "⚙️",
    principles: [
      "Git Action을 활용한 PR 자동화",
      "백오피스 툴 제작으로 업무 효율성 향상",
      "수동 작업의 자동화 프로세스 구축",
      "개발자 경험(DX) 개선",
    ],
  },
  {
    title: "Code Quality Management",
    description: "코드 품질과 유지보수성을 체계적으로 관리합니다",
    icon: "🔍",
    principles: [
      "SonarQube 도입을 통한 코드 품질 측정",
      "개발 표준 정립 및 문서화",
      "Next.js 마이그레이션 주도",
      "가독성과 유지보수성 중심의 코드 작성",
    ],
  },
  {
    title: "Technical Innovation",
    description: "기술 부채 해결과 서비스 고도화를 통해 지속 성장을 추구합니다",
    icon: "🚀",
    principles: [
      "React + JS에서 Next.js + TS로 마이그레이션",
      "자체 디자인 프레임워크 제작",
      "Zustand 도입으로 상태 관리 최적화",
      "Tanstack-Query 도입으로 데이터 페칭 최적화",
    ],
  },
  {
    title: "Collaboration Culture",
    description: "좋은 동료와 좋은 문화를 통해 함께 성장합니다",
    icon: "🤝",
    principles: [
      "팀원과의 협업을 통한 방향성 협의",
      "신규 인력의 빠른 적응 지원",
      "지식 공유와 코드 리뷰 문화",
      "",
    ],
  },
];

const Values = () => {
  return (
    <Section
      id="philosophy"
      title="Values"
      subtitle="좋은 코드를 만들기 위해 지키는 원칙들을 소개합니다"
      background="gray"
    >
      <div className="grid gap-8 md:grid-cols-2">
        {VALUES.map((philosophy, index) => (
          <ValueCard key={index} philosophy={philosophy} />
        ))}
      </div>
    </Section>
  );
};
export default Values;
export type { ValueData };
