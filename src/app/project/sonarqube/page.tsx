import {
  FeatureCard,
  ProjectHeader,
  ProjectLayout,
  ProjectSection,
  StoryCard,
  TechStack,
} from "@/components/Projects/common";

const technologies = [
  "SonarQube",
  "TypeScript",
  "ESLint",
  "Prettier",
  "GitHub Actions",
];

const FEATURES = [
  {
    title: "SonarQube 도입 주도",
    description: "팀 내 코드 품질 관리를 위한 SonarQube 도입 기획 및 추진",
    details:
      "팀원들을 대상으로 SonarQube 필요성 설득 및 도입 계획 수립. 프로젝트별 Quality Gate 설정 기준 정의 및 코드 커버리지 목표 설정.",
  },
  {
    title: "CI/CD 파이프라인 통합",
    description: "GitHub Actions와 SonarQube 연동으로 자동화된 코드 품질 검사",
    details:
      "Pull Request 시 자동으로 코드 품질 분석이 실행되고 결과를 PR에 코멘트로 표시하는 워크플로우 구축.",
  },
  {
    title: "개발 표준 문서화",
    description: "팀 내 코딩 컨벤션과 개발 가이드라인 정립",
    details:
      "ESLint, Prettier 룰셋 정의 및 TypeScript 스타일 가이드 작성. 신규 입사자도 쉽게 따라할 수 있는 개발 표준 문서 제작.",
  },
  {
    title: "레거시 코드 개선",
    description: "기존 코드베이스의 기술 부채 해결 및 리팩토링",
    details:
      "SonarQube 분석 결과를 바탕으로 우선순위를 정해 단계적으로 코드 품질 개선. Code Smell 및 보안 취약점 수정.",
  },
];

const EXPERIENCES = [
  {
    title: "도입 과정에서의 설득과 협업",
    content: `기술 도입에 대한 팀원들의 공감대 형성과 실행 과정.

업무 참여 비중 : 80% (도입 건의, 구현, CI/CD 통합 전반)

배경 및 문제점 :
• 코드와 개발 인력이 증가하면서 유지보수성과 코드 품질이 중요한 과제로 논의 됨
• 개발자 간 코딩 스타일 편차로 코드 리뷰 시간 증가
• 신규 입사자의 코드 적응 기간이 길어지는 문제

도전 과제 :
• 새로운 도구 도입에 대한 팀원들의 부담감
• 기존 개발 워크플로우 변경에 대한 우려
• 추가 업무로 인한 개발 속도 저하 걱정

내가 한 일 :
• SonarQube의 필요성과 장점에 대한 구체적인 자료 준비
• 팀 미팅에서 도입 제안 및 충분한 토론 시간 확보
• 팀원들과 함께 코드 품질과 개발 편의성 사이의 균형점 논의
• 단순 도입을 넘어 지속적인 개선을 목표로 실행

성과 :
• 팀 전체의 합의를 통한 원활한 도입 진행
• 코드 리뷰 효율 35% 증가
• 신규 인력의 빠른 적응 - 온보딩 기간 2주 단축
• 코드 품질에 대한 공통 기준 확립`,
  },
  {
    title: "개발 표준 정립 및 문서화",
    content: `유지보수성 중심의 개발 표준 수립 과정.

업무 참여 비중 : 90% (표준 수립, 문서화, 팀 공유 전반)

문제 인식 :
• 개발자마다 다른 코딩 스타일로 일관성 부족
• 암묵적인 규칙만 있고 문서화된 표준 부재
• 코드 리뷰 시 주관적인 의견 충돌

내가 한 일 :
• TypeScript 코딩 컨벤션 작성 - 팀 전체 합의 도출
• ESLint, Prettier 룰셋 정의 및 자동화
• 컴포넌트 설계 가이드라인 정립 (재사용성, 테스트 용이성 고려)
• Git 브랜칭 전략 및 커밋 메시지 규칙 표준화
• 코드 리뷰 체크리스트 작성으로 일관된 리뷰 품질 유지

효과 :
• 신규 입사자도 쉽게 따라할 수 있는 명확한 가이드
• 코드 리뷰 시간 건당 30분 → 15분으로 단축
• 스타일 논쟁 없이 기능과 로직에 집중할 수 있는 환경 조성`,
  },
];

const SonarQubePage = () => {
  return (
    <ProjectLayout>
      <ProjectHeader
        title="SonarQube 도입 & 코드 품질 개선"
        subtitle="데이터 기반 코드 품질 관리 시스템 구축"
        description="팀의 기술 부채 해결과 지속 가능한 개발을 위해 SonarQube를 도입하고 체계적인 코드 품질 관리 프로세스를 구축한 프로젝트입니다. 단순한 도구 도입을 넘어서 팀 문화 개선과 개발 생산성 향상까지 이끌어낸 경험을 공유합니다."
      />

      <ProjectSection title="기술 스택">
        <TechStack technologies={technologies} />
      </ProjectSection>

      <ProjectSection title="프로젝트 배경">
        <div className="prose dark:prose-invert max-w-none">
          <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
            서비스가 성장하면서 코드베이스도 점점 복잡해지고, 기술 부채가
            쌓여가는 상황이었습니다. 버그 발생률이 증가하고 새로운 기능 개발
            속도가 느려지면서 체계적인 코드 품질 관리의 필요성을 느꼈습니다.
          </p>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            단순히 도구만 도입하는 것이 아니라, 팀 전체가 코드 품질에 대한
            공통된 기준을 가지고 지속적으로 개선해 나갈 수 있는 문화와
            프로세스를 만드는 것이 목표였습니다.
          </p>
        </div>
      </ProjectSection>

      <ProjectSection title="주요 성과">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {FEATURES.map(feature => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              details={feature.details}
            />
          ))}
        </div>
      </ProjectSection>

      <ProjectSection title="경험 및 성과">
        <div className="space-y-6">
          {EXPERIENCES.map((story, index) => (
            <StoryCard
              key={index}
              title={story.title}
              content={story.content}
            />
          ))}
        </div>
      </ProjectSection>
    </ProjectLayout>
  );
};

export default SonarQubePage;
