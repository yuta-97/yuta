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
  "TypeScript",
  "React.js",
  "Node.js",
  "C#",
  "Electron",
  "DynamoDB",
  "MongoDB",
];

const FEATURES = [
  {
    title: "Manager 서비스",
    description:
      "메인 서비스를 사용하는 여러 치과를 관리하는 대리점/법인 관리 시스템",
    details:
      "치과들의 가입 현황 관리, 기능 제한 설정, 구독 기간 관리 등 통합 관리 기능 개발.",
  },
  {
    title: "마이그레이션 툴",
    description: "다른 서비스에서 메인 서비스로의 환자 데이터 이관 도구",
    details:
      "C# 및 Electron을 활용한 Native 앱. 서로 다른 데이터 구조를 분석하여 무손실 마이그레이션 구현.",
  },
  {
    title: "HR 기능 (삭제됨)",
    description: "Clever-Dent의 근태관리 탭 개발",
    details:
      "MUI 기반 첫 React 프로젝트. 짧은 일정 내 개발 완료로 책임감과 성취감을 동시에 경험한 프로젝트.",
  },
];

const EXPERIENCES = [
  {
    title: "데이터베이스 구조 이해 향상",
    content: `마이그레이션 툴 개발을 통한 데이터 구조에 대한 이해도 증진.

학습 내용:
• DynamoDB와 MongoDB의 구조적 차이점 이해
• 서로 다른 데이터 스키마 간의 매핑 전략
• 데이터 무결성을 보장하는 마이그레이션 로직 설계
• NoSQL 데이터베이스의 특성과 활용법`,
    type: "success" as const,
  },
  {
    title: "크로스 플랫폼 개발 경험",
    content: `C#과 Electron을 활용한 데스크톱 애플리케이션 개발 경험.

도전과 학습:
• 웹 개발에서 데스크톱 앱 개발로의 패러다임 전환
• Native 앱의 성능 최적화와 사용자 경험 고려
• 파일 시스템 접근 및 로컬 데이터 처리
• 다양한 운영체제 환경에서의 호환성 고려`,
    type: "learning" as const,
  },
];

const CleverManager = () => {
  return (
    <ProjectLayout>
      <ProjectHeader
        title="Clever-Manager & 관리 도구"
        subtitle="치과 관리 시스템 및 데이터 마이그레이션 도구"
        description="Clever-Dent를 사용하는 여러 치과를 관리하는 대리점/법인을 위한 관리 시스템과 기존 서비스에서 새로운 플랫폼으로의 데이터 마이그레이션을 지원하는 도구들입니다. 관리 업무 효율화부터 데이터 이관까지 포괄적인 솔루션을 제공합니다."
      />

      <ProjectSection title="기술 스택">
        <TechStack technologies={technologies} />
      </ProjectSection>

      <ProjectSection title="주요 개발 기능">
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

      <ProjectSection title="개발 경험과 성장">
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

      <ProjectSection title="핵심 성과">
        <div className="space-y-4">
          <KeyPoint
            title="관리 시스템 설계"
            description="다중 테넌트 환경에서의 권한 관리 및 구독 시스템 설계 경험"
          />
          <KeyPoint
            title="데이터 아키텍처 이해"
            description="다양한 데이터베이스 구조와 마이그레이션 전략에 대한 실무 경험"
          />
          <KeyPoint
            title="크로스 플랫폼 개발"
            description="웹부터 데스크톱 앱까지 다양한 플랫폼에서의 개발 경험"
          />
          <KeyPoint
            title="레거시 시스템 연동"
            description="기존 시스템과의 호환성을 유지하면서 새로운 기능을 추가하는 경험"
          />
        </div>
      </ProjectSection>
    </ProjectLayout>
  );
};

export default CleverManager;
