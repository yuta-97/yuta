import {
  ProjectLayout,
  ProjectHeader,
  ProjectSection,
  TechStack,
  KeyPoint,
  StoryCard,
} from "@/components/Projects/common";

const TECHNOLOGIES = [
  "TypeScript",
  "React.js",
  "Storybook",
  "Emotion",
  "Styled-Components",
];

const KEYFEATURES = [
  {
    title: "경량화된 설계",
    description: "각 컴포넌트는 최소한의 번들 크기로 최적화",
  },
  {
    title: "State-less 아키텍처",
    description: "외부 상태에 의존하지 않는 독립적인 컴포넌트 구조",
  },
  {
    title: "개발자 친화적",
    description: "TypeScript 지원으로 타입 안정성과 개발 생산성 향상",
  },
  {
    title: "UI/UX & DX 균형",
    description: "사용자 경험과 개발자 경험 모두를 고려한 설계",
  },
];

const EXPERIENCES = [
  {
    title: "Storybook 도입 및 컴포넌트 문서화",
    content: `공용 컴포넌트 관리의 어려움을 해소하고 협업 효율을 높인 경험

업무 참여 비중 : 100% (기획, 도입, 작성, 협업 전반)

배경 및 문제점 :
• 여러 프로젝트에서 공통으로 사용하는 UI 라이브러리 관리 어려움
• 컴포넌트 사용법과 props를 매번 코드를 열어 확인해야 하는 비효율
• 디자이너와 기획자가 개발된 컴포넌트를 확인하기 어려움
• 신규 입사자가 어떤 컴포넌트가 있는지 파악하는 데 많은 시간 소요
• 이미 존재하는 컴포넌트를 재 개발하는 경우 발생

도입 과정 :
• Storybook 환경 구축 및 빌드 파이프라인 설정
• 30개 이상의 UI 컴포넌트에 대한 스토리 작성
• 모든 컴포넌트의 다양한 상태(variant, size, disabled 등) 시각화
• MDX 기반 사용 가이드 문서 작성 - 사용법, Best Practice 등등
• Interactions 통해 실시간 props 변경 및 테스트코드 작성

협업 개선 :
• 디자이너-개발자 협업: Figma 디자인과 실제 구현 비교 용이
• 기획자도 개발 완료된 컴포넌트 직접 확인 가능
• 컴포넌트 변경 시 작성된 테스트 코드로 예상치 못한 side-effect 사전 발견

성과 :
• 디자이너·기획자와의 협업 효율 향상
• 신규 입사자 온보딩 시간 2주 → 3일로 단축
• 컴포넌트 재사용률 증가, 중복 코드 감소
• 개발 생산성 향상`,
  },
  {
    title: "MUI에서 자체 디자인 시스템으로 전환",
    content: `서드파티 의존성을 줄이고 완전한 커스터마이징을 위해 자체 디자인 시스템 구축 경험

업무 참여 비중 : 30% (약 40개 중 12개 컴포넌트 설계 및 개발)

배경 및 문제점 :
• 기존 MUI(Material-UI) 프레임워크 사용 중 커스터마이징 한계 경험
• 프로젝트 요구사항에 맞는 경량화된 컴포넌트 필요
• 브랜드 아이덴티티에 맞춘 유연한 디자인 구현 어려움

MUI의 한계 :
• 번들 사이즈 과다 - 사용하지 않는 기능도 포함되어 초기 로딩 느림
• 커스터마이징 제약 - 디자인 토큰 변경에 한계
• 오버헤드 - Material Design 컨셉이 우리 서비스와 맞지 않음

성과 :
• 번들 사이즈 35% 감소 - 초기 로딩 속도 1.5초 개선
• 완전한 디자인 자유도 달성
`,
  },
];

const CleverUI = () => {
  return (
    <ProjectLayout>
      <ProjectHeader
        title="CleverUI Design System"
        subtitle="자체 제작 디자인 프레임워크 & 컴포넌트 라이브러리"
        liveUrl="https://ui-story.dev2.vnclever.com/"
        description="기존 MUI 프레임워크의 최적화 문제와 커스터마이징의 한계를 극복하기 위해 자체 디자인 시스템을 구축한 프로젝트입니다. 각 컴포넌트를 가볍고 상태 비의존적(state-less)으로 설계하여 개발자 경험(DX)과 사용자 경험(UI/UX) 사이의 최적의 균형을 찾는 데 집중했습니다."
      />

      <ProjectSection title="기술 스택">
        <TechStack technologies={TECHNOLOGIES} />
      </ProjectSection>

      <ProjectSection title="주요 특징">
        <div className="space-y-4">
          {KEYFEATURES.map((feature, index) => (
            <KeyPoint
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </ProjectSection>

      <ProjectSection title="개발 경험과 성장">
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

export default CleverUI;
