import {
  ProjectLayout,
  ProjectHeader,
  ProjectSection,
  TechStack,
  FeatureCard,
  StoryCard,
  ScreenshotGallery,
} from "@/components/Projects/common";

const TECHNOLOGIES = [
  "TypeScript",
  "React.js",
  "Node.js",
  "Next.js",
  "GraphQL",
  "Apollo Client",
  "Tanstack Query",
  "Playwright",
];

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

const CHALLENGES = [
  {
    title: "E2E 테스트 자동화 구축 (Playwright)",
    content: `QA 팀에 의존하던 Daily check 수동 테스트를 자동화 하여 테스트 효율성과 품질을 향상시킨 경험

업무 참여 비중 : 100% (기획, 설계, 구현, CI/CD 통합 전반)

배경 및 동기 :
• QA 팀이 매일 수행하는 Daily-Check 리스트의 반복 작업 리소스 소모
• 수동 테스트의 휴먼 에러 발생 가능성
• 회귀 테스트(Regression Test)에 소요되는 시간 증가
• 배포 전 핵심 시나리오 검증 자동화 필요성

기술 선택 - Playwright :
• 크로스 브라우저 지원 (Chromium, Firefox, WebKit)
• 안정적인 자동 대기 메커니즘 (Auto-waiting)
• 강력한 선택자 엔진 및 UI 테스트에 최적화
• 스크린샷, 비디오 녹화 등 디버깅 도구 제공

구현 내용 :
• 약 40개 테스트 케이스 작성 - 핵심 사용자 시나리오 커버
  - 환자 등록/수정/삭제 플로우
  - 예약 생성 및 관리 시나리오
  - 차트 작성 및 조회 기능
  - 파일 업로드 및 다운로드
  - 급여 계산 및 결제 프로세스
• 테스트 픽스처(Fixture)로 공통 설정 재사용

기술적 도전 과제 :

1. 테스트 케이스 간 의존성 관리:
• 순차적 실행이 필요한 케이스 그룹화 (test.describe.serial)
• 테스트 간 데이터 공유를 위한 전역 상태 관리(로그인 세션 정보 등)
• 각 테스트의 독립성 보장을 위한 beforeEach 훅 활용

2. 테스트 환경 구축 :
• 테스트용 시드 데이터 자동 생성 및 정리(config/teardown)
• 테스트 계정 및 권한 설정 자동화
• CI/CD 파이프라인 통합 (GitHub Actions)

3. 대용량 파일 처리 테스트 :
• 파일 업로드 시나리오 검증
• 이미지 로딩 및 렌더링 테스트
• 타임아웃 설정 최적화

개선 과정 :
• 초기에는 단순 UI 클릭 테스트로 시작
• 점진적으로 복잡한 사용자 플로우까지 확장
• 실패한 테스트의 스크린샷 자동 저장/trace 수집 데이터 활용하여 디버깅 효율화
• 테스트 실행 시간 단축을 위한 병렬 처리 최적화

성과 :
• QA 팀의 Daily-Check 시간 1시간 → 5분으로 84% 단축
• 회귀 테스트 자동화로 배포 신뢰도 향상
• 버그 조기 발견 - 프로덕션 배포 전 차단
• 수동 테스트 휴먼 에러 제로화
• CI/CD 파이프라인에서 자동 실행으로 개발 워크플로우 개선

배운 점 :
• E2E 테스트는 핵심 시나리오 위주로 작성하는 것이 효율적
• 테스트를 염두해 두지 않은 설계는 유지보수를 어렵게 함
• 적절한 테스트 커버리지 균형 - 모든 것을 테스트할 필요 없음`,
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

성과: 더 이상 성능 이슈 없이 안정적인 서비스 운영`,
  },
  {
    title: "다국어 서비스 구축 경험",
    content: `3개국(이집트, 베트남, 인도)을 대상으로 서비스를 제공하면서 마주한 현지화 과제들.

업무 참여 비중 : 20% (기획 및 일부 구현 참여)

• i18next를 활용한 다국어 시스템 구축 및 번역 관리 프로세스 정립
• 국가별 날짜/시간/통화 포맷 차이 처리 및 타임존 이슈 해결
• 각국의 의료 체계와 문화 차이에 따른 UI/UX 분기 처리
• 번역 누락 방지를 위한 자동화 검증 시스템 구축

경험: 글로벌 서비스의 복잡성과 문화적 차이를 고려한 개발의 어려움`,
  },
  {
    title: "GraphQL 성능 최적화",
    content: `환자 차트 페이지의 느린 로딩 속도 개선 경험

업무 참여 비중 : 50% (문제 분석, 최적화 방안 연구 및 적용)

문제 인식: 평균 로딩 시간 3초 이상, 사용자 불만 증가
원인 분석: 과도한 데이터 페칭, 캐싱 전략 부재
해결 과정:
• Apollo Client의 캐싱 전략 (InMemoryCache 최적화)
• GraphQL 쿼리 최적화 - 불필요한 필드는 요청하지 않도록 리팩토링
• 컴포넌트 레벨 코드 스플리팅으로 첫 요청 번들 사이즈 감소

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
];

const SCREENSHOTS = [
  {
    url: "/screenshots/dent-dashboard.png",
    caption: "대시보드 - 에인 화면",
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
  {
    url: "/screenshots/playwright-report.png",
    caption: "E2E 테스트 자동화 - Playwright 리포트 페이지",
  },
  {
    url: "/screenshots/playwright-detail.png",
    caption: "E2E 테스트 자동화 - Playwright 상세 페이지",
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

      <ProjectSection title="경험 및 성과">
        <div className="space-y-6">
          {CHALLENGES.map((story, index) => (
            <StoryCard
              key={index}
              title={story.title}
              content={story.content}
            />
          ))}
        </div>
      </ProjectSection>

      <ProjectSection title="이미지">
        <ScreenshotGallery screenshots={SCREENSHOTS} />
      </ProjectSection>
    </ProjectLayout>
  );
};

export default CleverDent;
