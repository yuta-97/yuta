import {
  ProjectLayout,
  ProjectHeader,
  ProjectSection,
  TechStack,
  FeatureCard,
  KeyPoint,
} from "@/components/Projects/common";

const TECHNOLOGIES = ["TypeScript", "React.js", "Emotion", "Styled-Components"];

const COMPONENTS = [
  {
    name: "Switch",
    description: "토글 기능을 제공하는 스위치 컴포넌트",
  },
  {
    name: "CheckBox",
    description: "다중 선택을 위한 체크박스 컴포넌트",
  },
  {
    name: "Radio/RadioGroup",
    description: "단일 선택을 위한 라디오 버튼 그룹",
  },
  {
    name: "FileUploader",
    description: "파일 업로드 기능을 제공하는 컴포넌트",
  },
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

      <ProjectSection title="구현된 컴포넌트">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {COMPONENTS.map(component => (
            <FeatureCard
              key={component.name}
              title={component.name}
              description={component.description}
            />
          ))}
        </div>
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
    </ProjectLayout>
  );
};

export default CleverUI;
