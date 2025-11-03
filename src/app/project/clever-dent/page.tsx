import {
  ProjectLayout,
  ProjectHeader,
  ProjectSection,
  FeatureCard,
  StoryCard,
  ScreenshotGallery,
} from "@/components/Projects/common";

const FEATURES = [
  {
    title: "Salary",
    description: "치과 직원들의 근태 관리와 급여 관리 기능",
    details:
      "직원별 급여 형태나 보너스 등 복잡한 요소들을 고려한 급여 계산 시스템. 초기 복잡성을 단순화하여 성공적으로 구현.",
  },
  {
    title: "Schedule",
    description: "치과 환자들의 예약 관리 기능",
    details:
      "Grid-Layout을 활용한 캘린더 기능으로 예약 항목의 렌더링 위치 계산을 효율화. 기존 수동 계산 방식에서 성능을 크게 개선.",
  },
  {
    title: "LabOrder",
    description: "치과와 기공소를 연결하는 기공물 의뢰 시스템",
    details:
      "기공 의뢰서 작성부터 진행 상황 관리까지. 복잡한 데이터(기공물 설정, 기공소 데이터, 환자 정보)를 통합 처리.",
  },
  {
    title: "File & Explorer",
    description: "환자 및 병원 이미지 데이터 관리 기능",
    details:
      "대용량 X-ray, CT 이미지 처리 및 공유 기능. 다양한 파일 타입과 크기에 대한 최적화 및 예외처리 구현.",
  },
];

const EXPERIENCES = [
  {
    title: "다국어 서비스 구축 경험",
    content: `3개국(이집트, 베트남, 인도)을 대상으로 서비스를 제공하면서 마주한 현지화 과제들.

업무 참여 비중 : 20% (기획 및 일부 구현 참여)

• i18next를 활용한 다국어 시스템 구축 및 번역 관리 프로세스 정립
• 국가별 날짜/시간/통화 포맷 차이 처리
• 각국의 의료 체계와 문화 차이에 따른 UI/UX 분기 처리
• 번역 누락 방지를 위한 자동화 검증 시스템 구축

경험: 글로벌 서비스의 복잡성과 문화적 차이를 고려한 개발의 어려움`,
  },
  {
    title: "GraphQL 성능 최적화",
    content: `환자 및 차트 페이지의 느린 로딩 속도 개선 경험

업무 참여 비중 : 50% (문제 분석, 최적화 방안 연구 및 적용)

문제 인식: 평균 로딩 시간 3초 이상, 사용자 불만 증가
원인 분석: 과도한 데이터 페칭, 캐싱 전략 부재
해결 과정:
• Next.js dynamic import로 코드 스플리팅 적용
• Lazy loading 및 Suspense 적용으로 초기 렌더링 최적화
• GraphQL 쿼리 최적화
  • 중복으로 호출하는 정보들을 단일 쿼리로 통합
  • 불필요한 필드는 요청하지 않도록 리팩토링

성과: 로딩 시간 3초 → 1.2초로 60% 개선, 불필요한 네트워크 요청 50% 감소`,
  },
  {
    title: "REST API 상태 관리 라이브러리 추가 (Tanstack Query)",
    content: `REST API에 적합한 상태 관리 라이브러리 추가.

업무 참여 비중 : 100% (도입 결정, 구현, 팀 공유 전반)

배경 및 문제:
• REST API로 구현되어있는 일부 기능 호출에 axios/fetch 사용
• Apollo Client는 GraphQL에 최적화되어 REST API에는 부적합
• 상태 관리 및 캐싱, 에러 핸들링의 일관성 부족

도입 이유:
• Tanstack Query는 REST API와 잘 맞는 데이터 페칭 라이브러리
• 자동 캐싱, 백그라운드 데이터 동기화, 쿼리 무효화 등 강력한 기능 제공
• React Query DevTools로 상태 디버깅 용이

구체적 개선:
• errorPolicy 설정으로 부분 실패 시에도 성공 데이터 활용
• Suspense boundary로 로딩 상태 통합 관리
• staleTime, cacheTime 설정으로 불필요한 재요청 방지

성과:
• 코드 가독성 향상 - 선언적 데이터 페칭
• 개발 생산성 향상 - DevTools로 쿼리 상태 실시간 모니터링
• 에러 핸들링 일관성 확보`,
  },
  {
    title: "Next.js Image 최적화 문제 해결",
    content: `프로젝트 내 이미지 처리 관련 성능 이슈 해결 경험.

업무 참여 비중 : 100% (문제 분석, 해결책 연구 및 적용 전반)

문제 인식 : File-Explorer 기능 배포 후 특정 계정에서 이미지 처리 기능 사용 시 Next 서버 리부팅 현상 발견.
원인 분석 : Next/Image 컴포넌트가 30MB 이상의 대용량 의료 이미지를 최적화하면서 과부하 발생
해결 과정 : 
• 기본 이미지 최적화 모듈을 성능이 우수한 모듈로 교체(sharp).
• 썸네일이미지에 캐싱 적용으로 네트워크 비용 절감 및 성능 최적화
• 업로드 이미지의 사이즈별 썸네일 생성 시 비동기 처리 도입

성과: 더 이상 성능 이슈 없이 안정적인 서비스 운영`,
  },
];

const SCREENSHOTS = [
  {
    url: "/screenshots/dent-dashboard.png",
    caption: "대시보드 - 메인 화면",
  },
  {
    url: "/screenshots/dent-patient-list.png",
    caption: "환자 목록",
  },
  {
    url: "/screenshots/dent-chart.png",
    caption: "전자 차트",
  },
  {
    url: "/screenshots/dent-schedule-create.png",
    caption: "예약 관리 - 신규 생성",
  },
  {
    url: "/screenshots/dent-schedule.png",
    caption: "예약 관리",
  },
  {
    url: "/screenshots/dent-file.png",
    caption: "파일 관리 - X-Ray, CT 등 대용량 의료 이미지 처리 및 공유",
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
      <ProjectSection title="이미지">
        <ScreenshotGallery screenshots={SCREENSHOTS} />
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
            />
          ))}
        </div>
      </ProjectSection>
    </ProjectLayout>
  );
};

export default CleverDent;
