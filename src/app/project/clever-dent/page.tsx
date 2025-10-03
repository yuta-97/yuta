import {
  ProjectLayout,
  ProjectHeader,
  ProjectSection,
  TechStack,
  FeatureCard,
  StoryCard,
} from "@/components/Projects/common";

const TECHNOLOGIES = [
  "TypeScript",
  "React.js",
  "Node.js",
  "Next.js",
  "MongoDB",
  "AWS",
];

const FEATURES = [
  {
    title: "Salary 기능",
    description: "치과 직원들의 근태 관리와 급여 관리 시스템",
    details:
      "직원별 급여 형태나 보너스 등 복잡한 요소들을 고려한 급여 계산 시스템. 초기 복잡성을 단순화하여 성공적으로 구현.",
  },
  {
    title: "예약 관리 기능",
    description: "치과 환자들의 예약 현황과 방문 목적 관리",
    details:
      "Grid-Layout을 활용한 캘린더 기능으로 예약 시간 계산을 효율화. 기존 수동 계산 방식에서 성능을 크게 개선.",
  },
  {
    title: "LabOrder 기능",
    description: "치과와 기공소를 연결하는 기공물 의뢰 시스템",
    details:
      "기공 의뢰서 작성부터 진행 상황 관리까지. 복잡한 데이터(기공물 설정, 기공소 데이터, 환자 정보)를 통합 처리.",
  },
  {
    title: "File & Explorer 기능",
    description: "치과 전문 장비 이미지 데이터 관리 시스템",
    details:
      "대용량 X-ray, CT 이미지 처리 및 공유 기능. 다양한 파일 타입과 크기에 대한 최적화 및 예외처리 구현.",
  },
];

const CHALLENGES = [
  {
    title: "Next.js Image 최적화 문제 해결",
    content: `File-Explorer 기능 배포 후 특정 계정에서 서버 리부팅 현상 발견.
      
원인: Next/Image 컴포넌트가 30MB 이상의 대용량 의료 이미지를 최적화하면서 과부하 발생
해결: 기본 이미지 최적화 모듈을 성능이 우수한 모듈로 교체
추가 개선: 썸네일 캐시 적용으로 네트워크 비용 절감 및 성능 최적화

결과: 더 이상 성능 이슈 없이 안정적인 서비스 운영`,
    type: "challenge" as const,
  },
  {
    title: "개발자로서의 성장",
    content: `능동적 문제 인지와 해결 과정을 통해 좋은 개발자의 역할에 대해 고민하게 됨.
      
• 사용자 관점에서의 서비스 품질 고려
• 배포 후 지속적인 모니터링의 중요성  
• 성능 최적화와 사용자 경험의 균형점 찾기
• 기술적 문제를 비즈니스 관점에서 해결하는 능력`,
    type: "learning" as const,
  },
];

const CleverDent = () => {
  return (
    <ProjectLayout>
      <ProjectHeader
        title="Clever-Dent"
        subtitle="치과 관리 통합 플랫폼 - 메인 서비스"
        description="치과 운영에 필요한 모든 기능을 통합한 SaaS 플랫폼입니다. 예약 관리, 급여 시스템, 기공물 의뢰, 파일 관리 등 치과 업무의 디지털 전환을 지원합니다."
      />

      <ProjectSection title="기술 스택">
        <TechStack technologies={TECHNOLOGIES} />
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
          {CHALLENGES.map((story, index) => (
            <StoryCard
              key={index}
              title={story.title}
              content={story.content}
              type={story.type}
            />
          ))}
        </div>
      </ProjectSection>
    </ProjectLayout>
  );
};

export default CleverDent;
