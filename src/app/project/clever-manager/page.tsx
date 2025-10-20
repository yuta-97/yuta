import {
  FeatureCard,
  ProjectHeader,
  ProjectLayout,
  ProjectSection,
  ScreenshotGallery,
  StoryCard,
  TechStack,
} from "@/components/Projects/common";

const technologies = [
  "TypeScript",
  "React.js",
  "Node.js",
  "C#",
  "Electron",
  "MongoDB",
];

const FEATURES = [
  {
    title: "Admin 서비스",
    description:
      "Clever Dent 메인 서비스를 사용하는 여러 치과를 관리하고자 하는 대리점/법인이 사용하는 관리 시스템",
    details:
      "치과들의 가입 현황 관리, 기능 제한 설정, 구독 기간 관리 등 통합 관리 기능 개발.",
  },
  {
    title: "마이그레이션 툴",
    description: "타사 서비스에서 자사 메인 서비스로의 환자 데이터 이관 도구",
    details:
      "C# 및 Electron을 활용한 Native 앱. 서로 다른 데이터 구조를 분석하여 무손실 마이그레이션 구현.",
  },
];

const EXPERIENCES = [
  {
    title: "크로스 플랫폼 개발 경험",
    content: `C#과 Electron을 활용한 데스크톱 애플리케이션 개발 경험.

업무 비중 : 100% (기획, 설계, 구현 전반)

도전과 학습:
• Native 앱의 성능 최적화와 사용자 경험 고려
• 파일 시스템 접근 및 로컬 데이터 처리 (CSV, Excel 파일 읽기/쓰기)
• 다양한 운영체제 환경에서의 호환성 테스트 (Windows, macOS)
• Electron의 Main Process와 Renderer Process 통신 구조 이해

기술적 성과:
• IPC(Inter-Process Communication)를 활용한 데이터 전송
• 대용량 파일 처리 시 UI 블로킹 방지 (Worker Thread 활용)
• 자동 업데이트 기능으로 버전 관리 자동화`,
    type: "learning" as const,
  },
  {
    title: "관리자 도구 UX 설계",
    content: `복잡한 관리 기능을 직관적으로 만드는 

업무 비중 : 50% (기획 및 구현 참여)

과제 :
• 수백 개 치과의 데이터를 효율적으로 관리할 수 있는 직관적인 UI 필요
• 클리닉 별 기능 제한, 구독 관리 등 민감한 작업의 실수 방지 필요
• 관리자들의 다양한 숙련도를 고려해야 함

해결 방법 :
• 일괄 작업 전 상세한 미리보기 및 확인 단계 추가
• 위험한 작업(계정 정지, 삭제)에 2단계 확인 프로세스 적용
• 검색, 필터링, 정렬 기능으로 빠른 데이터 접근성 확보
• 액션 로그 기록으로 모든 관리 작업 추적 가능하도록 설계

배운 점 : 
• 백오피스 툴 성격의 관리자 도구라도 UX가 중요하다
• 사용자 피드백을 반영한 지속적인 개선이 효과적이다
`,
    type: "challenge" as const,
  },
];

const SCREEN_SHOTS = [
  {
    url: "/screenshots/manager-dashboard.png",
    caption: "Clever-Manager 대시보드",
  },
  {
    url: "/screenshots/manager-user.png",
    caption: "병원 관리 페이지",
  },
  {
    url: "/screenshots/manager-notice.png",
    caption: "병원 공지 관리",
  },
  {
    url: "/screenshots/migration.png",
    caption: "환자 정보 Migration tool",
  },
];

const CleverManager = () => {
  return (
    <ProjectLayout>
      <ProjectHeader
        title="Clever-Manager & 관리 도구"
        subtitle="치과 관리 시스템 및 데이터 마이그레이션 도구"
        description="Clever-Dent를 사용하는 여러 치과를 관리하는 대리점/법인을 위한 관리 시스템과 기존 서비스에서 새로운 플랫폼으로의 데이터 마이그레이션을 지원하는 도구들을 제작 했습니다."
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
      <ProjectSection title="이미지">
        <ScreenshotGallery screenshots={SCREEN_SHOTS} />
      </ProjectSection>
    </ProjectLayout>
  );
};

export default CleverManager;
