import {
  ProjectLayout,
  ProjectHeader,
  ProjectSection,
  TechStack,
  FeatureCard,
  StoryCard,
  KeyPoint,
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

도전과제:
• 새로운 도구 도입에 대한 팀원들의 부담감
• 기존 개발 워크플로우 변경에 대한 우려
• 추가 업무로 인한 개발 속도 저하 걱정

내가 한 일:
• SonarQube의 필요성과 장점에 대한 구체적인 자료 준비
• 팀 미팅에서 도입 제안 및 충분한 토론 시간 확보
• 파일럿 프로젝트로 작은 규모부터 시작하여 효과 검증
• 팀원들의 피드백을 받아 도입 계획 지속적으로 개선

결과:
• 팀 전체의 합의를 통한 원활한 도입 진행
• 코드 품질에 대한 공통 기준 확립
• 개발 프로세스 개선으로 장기적 생산성 향상`,
    type: "challenge" as const,
  },
  {
    title: "기술 부채 해결의 체계적 접근",
    content: `무작정 리팩토링하는 것이 아닌 데이터 기반의 개선 전략 수립.

학습 내용:
• SonarQube 메트릭을 활용한 우선순위 설정 방법
• 기술 부채의 비즈니스 임팩트 측정 및 설득 논리
• 점진적 개선을 위한 로드맵 수립과 실행 계획

성과:
• 코드 복잡도 지수 25% 개선
• 테스트 커버리지 40% → 75% 향상
• 신규 기능 개발 속도 향상`,
    type: "learning" as const,
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

      <ProjectSection title="주요 구현 내용">
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

      <ProjectSection title="도전과 성장">
        <div className="space-y-6">
          {EXPERIENCES.map((story, index) => (
            <StoryCard
              key={index}
              title={story.title}
              content={story.content}
              type={story.type}
            />
          ))}
        </div>
      </ProjectSection>

      <ProjectSection title="프로젝트 성과">
        <div className="space-y-4">
          <KeyPoint
            title="코드 품질 정량화"
            description="SonarQube 메트릭을 통해 코드 품질을 수치로 측정하고 개선 목표 설정"
          />
          <KeyPoint
            title="자동화된 품질 검사"
            description="CI/CD 파이프라인 통합으로 모든 코드 변경사항에 대한 자동 품질 검사 실현"
          />
          <KeyPoint
            title="팀 문화 개선"
            description="코드 리뷰와 품질 개선에 대한 팀원들의 자발적 참여 문화 조성"
          />
          <KeyPoint
            title="기술 부채 해결"
            description="체계적이고 단계적인 접근으로 레거시 코드 개선 및 유지보수성 향상"
          />
        </div>
      </ProjectSection>
    </ProjectLayout>
  );
};

export default SonarQubePage;
