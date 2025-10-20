import {
  ProjectLayout,
  ProjectHeader,
  ProjectSection,
  TechStack,
  FeatureCard,
  StoryCard,
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
    title: "통합로그인 시스템",
    content: `입사 후 맡은 첫 개인 업무로 인증 서비스를 직접 구현하는 도전적인 과제

업무 참여 비중 : 100% (기술 리서치, 설계, 구현 전반)

배경 및 동기 :
• 기존에는 서비스 간 통합 로그인 미지원
• 자사 서비스 간 원활한 사용자 경험 제공 필요성

도전과제 :
• 제한적인 자료와 정보 속에서 인증 서비스 직접 구현
• OIDC와 OAuth 2.0 프로토콜의 개념 이해
• 보안성과 사용성을 모두 고려한 시스템 설계

어려웠던 점 :
• 외부 인증 API 활용 경험만 있던 상황에서 인증 서비스 직접 구현
• 제한적인 자료와 정보 속에서 혼자 진행해야 하는 부담
• 기술 리서치부터 설계, 구현까지 전 과정 담당

성과 및 학습 :
• OIDC와 OAuth 2.0 프로토콜에 대한 이해
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
            라이브러리를 활용하여 구현하였고, 자사 서비스 간 매끄러운 사용자
            경험을 제공하는 통합 인증 시스템을 구축했습니다.
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

      <ProjectSection title="경험 및 성과">
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

      <ProjectSection title="관련 블로그 게시물">
        <div className="prose dark:prose-invert max-w-none">
          <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
            성공적으로 구현 후 개인 기술 블로그에 상세 구현기를 작성하여
            공유했습니다.
          </p>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            <a
              href="https://yuta-97.github.io/posts/Nodejs%EB%A1%9C-OAuth-%EC%9D%B8%EC%A6%9D%EC%84%9C%EB%B2%84-%EB%A7%8C%EB%93%A4%EA%B8%B0-oidc-provider/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Nodejs로 OAuth 인증서버 만들기 with oidc-provider
            </a>
          </p>
        </div>
      </ProjectSection>
    </ProjectLayout>
  );
};

export default CleverLogin;
