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
  "Node.js",
  "OAuth 2.0",
  "OIDC",
  "oidc-provider",
];

const FEATURES = [
  {
    title: "통합로그인 기능",
    description: "Clever-Dent 계정으로 자사 여러 서비스 접근 가능한 SSO 시스템",
    details:
      "OIDC-protocol과 OAuth2.0 구현체인 oidc-provider 라이브러리를 활용한 통합 인증 시스템 구축.",
  },
];

const EXPERIENCES = [
  {
    title: "첫 개인 업무 - 통합로그인 시스템",
    content: `입사 후 맡은 첫 개인 업무로 인증 서비스를 직접 구현하는 도전적인 과제.

어려웠던 점:
• 외부 API 활용 경험만 있던 상황에서 인증 서비스 직접 구현
• 제한적인 자료와 정보 속에서 혼자 진행해야 하는 부담
• 기술 리서치부터 설계, 구현까지 전 과정 담당

해낸 일!:
• OIDC와 OAuth 2.0 프로토콜에 대한 깊은 이해 습득
• 독립적인 문제 해결 능력과 자신감 향상
• 완성했을 때의 희열과 큰 성장을 경험`,
    type: "learning" as const,
  },
];

const CleverLogin = () => {
  return (
    <ProjectLayout>
      <ProjectHeader
        title="Clever-Login"
        subtitle="통합 인증 시스템 (SSO)"
        description="Clever-Dent 메인 플랫폼 계정을 통해 자사의 여러 서비스에 로그인이 가능하도록 하는 통합 로그인 시스템입니다. OIDC 프로토콜과 OAuth 2.0을 기반으로 구현된 Single Sign-On 솔루션입니다."
      />

      <ProjectSection title="기술 스택">
        <TechStack technologies={technologies} />
      </ProjectSection>

      <ProjectSection title="프로젝트 개요">
        <div className="prose dark:prose-invert max-w-none">
          <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
            입사 후 맡은 첫 개인 업무로, 외부 API를 활용하던 기존 방식에서
            벗어나 인증 관련 서비스를 직접 구현하는 도전적인 프로젝트였습니다.
          </p>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            OIDC-protocol과 OAuth2.0-protocol의 구현체인 oidc-provider
            라이브러리를 적용하여 자사 서비스 간 seamless한 사용자 경험을
            제공하는 통합 인증 시스템을 구축했습니다.
          </p>
        </div>
      </ProjectSection>

      <ProjectSection title="주요 기능">
        <div className="space-y-6">
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

      <ProjectSection title="핵심 성과 및 학습">
        <div className="space-y-4">
          <KeyPoint
            title="프로토콜 전문성 습득"
            description="OIDC와 OAuth 2.0 프로토콜에 대한 깊이 있는 이해와 실무 구현 경험"
          />
          <KeyPoint
            title="독립적 문제 해결"
            description="제한적인 자료 속에서 기술 리서치부터 설계, 구현까지 전 과정을 독립적으로 수행"
          />
          <KeyPoint
            title="인증 시스템 설계"
            description="보안성과 사용성을 모두 고려한 엔터프라이즈급 인증 시스템 아키텍처 설계"
          />
          <KeyPoint
            title="첫 개인 프로젝트 완주"
            description="입사 후 첫 개인 업무를 성공적으로 완료하며 자신감과 성장을 경험"
          />
        </div>
      </ProjectSection>
    </ProjectLayout>
  );
};

export default CleverLogin;
