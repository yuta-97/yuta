import Section from "../common/Section";
import ValueCard from "./ValueCards";

type ValueData = {
  title: string;
  description: string;
  color: string;
  principles: string[];
  relatedProjects?: {
    title: string;
    link: string;
  }[];
};

const VALUES: ValueData[] = [
  {
    title: "효율성을 추구하는 개발",
    description: "반복되는 작업을 자동화하고 비효율적인 프로세스를 개선합니다",
    color: "blue",
    principles: [
      "GitHub Actions로 배포 자동화 구축",
      "백오피스 도구 개발로 업무 시간 단축",
      "반복 작업을 스크립트로 자동화",
      "개발 워크플로우 개선에 관심",
    ],
    relatedProjects: [
      { title: "E2E 테스트 자동화", link: "/project/e2e-test" },
      { title: "Clever-Dent", link: "/project/clever-dent" },
      { title: "Clever-Manager", link: "/project/clever-manager" },
    ],
  },
  {
    title: "지속가능한 코드 작성",
    description: "코드 품질과 유지보수성을 체계적으로 관리합니다",
    color: "green",
    principles: [
      "SonarQube 도입해서 코드 품질 체크",
      "팀 내 개발 컨벤션 정리하고 문서화",
      "레거시 코드를 점진적으로 개선",
      "미래의 나와 동료를 위한 가독성 추구",
    ],
    relatedProjects: [{ title: "SonarQube 도입", link: "/project/sonarqube" }],
  },
  {
    title: "기술적 도전을 즐기는 마음",
    description: "기술 부채 해결과 서비스 고도화를 통해 지속 성장을 추구합니다",
    color: "purple",
    principles: [
      "React에서 Next.js로 마이그레이션 리드",
      "MUI 한계 극복을 위한 자체 디자인 시스템 구축",
      "상태 관리 라이브러리 도입으로 복잡성 해결",
      "새로운 기술 도입 시 팀원들과 충분한 논의",
    ],
    relatedProjects: [
      { title: "인증서버 구축", link: "/project/clever-login" },
      { title: "Zustand 리팩토링", link: "/project/zustand-refactoring" },
      { title: "공용 컴포넌트 라이브러리", link: "/project/clever-ui" },
    ],
  },
  {
    title: "함께 성장하는 문화",
    description: "좋은 동료와 좋은 문화를 통해 함께 성장합니다",
    color: "orange",
    principles: [
      "기술적 결정 시 팀원들과 충분히 소통",
      "신입 개발자 온보딩 프로세스 개선",
      "코드 리뷰를 통한 지식 공유 문화",
      "개발 경험 공유와 회고를 통한 학습",
    ],
    relatedProjects: [
      { title: "팀 개발 표준 정립", link: "/project/sonarqube" },
    ],
  },
];

const Values = () => {
  return (
    <Section
      id="philosophy"
      title="Values"
      subtitle="좋은 코드를 만들기 위해 지키는 원칙들을 소개합니다"
      background="gradient"
    >
      <div className="grid gap-8 md:grid-cols-2">
        {VALUES.map((value, index) => (
          <ValueCard key={index} value={value} />
        ))}
      </div>
    </Section>
  );
};
export default Values;
export type { ValueData };
