import {
  ProjectLayout,
  ProjectHeader,
  ProjectSection,
  ParticipationRate,
  StoryCard,
  ScreenshotGallery,
} from "@/components/Projects/common";

const SCREEN_SHOTS = [
  {
    url: "/screenshots/playwright-report.png",
    caption: "E2E 테스트 자동화 - Playwright 리포트 페이지",
  },
  {
    url: "/screenshots/playwright-detail.png",
    caption: "E2E 테스트 자동화 - Playwright 상세 페이지",
  },
];

const E2ETestPage = () => {
  return (
    <ProjectLayout>
      <ProjectHeader
        title="E2E 테스트 자동화 구축"
        subtitle="Playwright를 활용한 핵심 기능 테스트 자동화"
        description="Clever-Dent의 핵심 기능에 대한 E2E 테스트 자동화를 구축하여 QA 효율성을 85% 향상시켰습니다."
      />

      {/* 업무 참여 비중 */}
      <ParticipationRate percentage={85} />

      {/* Gallery */}
      <ProjectSection title="Gallery">
        <ScreenshotGallery screenshots={SCREEN_SHOTS} />
      </ProjectSection>

      {/* 배경 및 동기 */}
      <ProjectSection title="배경 및 동기">
        <div className="space-y-4">
          <StoryCard
            title="수동 QA의 한계"
            content={`• QA 팀이 매일 수행하는 Daily-Check 리스트의 반복 작업 리소스 소모
• 수동 테스트의 휴먼 에러 발생 가능성
• 회귀 테스트(Regression Test)에 소요되는 시간 증가
• 배포 전 핵심 시나리오 검증 자동화 필요성
`}
          />
          <StoryCard
            title="왜 Playwright인가?"
            content={`• 크로스 브라우저 지원 (Chromium, Firefox, WebKit)
• 안정적인 자동 대기 메커니즘 (Auto-waiting)
• 강력한 선택자 엔진 및 UI 테스트에 최적화
• 스크린샷, 비디오 녹화 등 디버깅 도구 제공`}
          />
        </div>
      </ProjectSection>

      <ProjectSection title="구현 내용">
        <div className="space-y-4">
          <StoryCard
            title="약 40개의 E2E 테스트 케이스 작성"
            content={`환자 등록, 예약 생성, 차트 작성, 결제 처리 등 핵심 사용자 플로우를 커버하는 40개의 테스트를 작성했습니다.
  - 환자 등록/수정/삭제 플로우
  - 예약 생성 및 관리 시나리오
  - 차트 작성 및 조회 기능
  - 파일 업로드 및 다운로드
  - 급여 계산 및 결제 프로세스
  - 테스트 픽스처(Fixture)로 공통 설정 재사용
  `}
          />
          <StoryCard
            title="Daily-Check 워크플로우 자동화"
            content="매일 아침 자동으로 실행되는 테스트 워크플로우를 구축했습니다. 테스트 실패 시 메신저 알림을 보내 빠르게 대응할 수 있도록 했습니다."
          />
          <StoryCard
            title="CI/CD 파이프라인 통합"
            content="GitHub Actions를 활용하여 main 브랜치로의 PR 생성 시 자동으로 E2E 테스트가 실행되도록 설계 했습니다. 병렬 실행으로 전체 테스트 시간을 10분 이내로 단축했습니다."
          />
        </div>
      </ProjectSection>

      {/* 기술적 도전 과제 */}
      <ProjectSection title="기술적 도전 과제">
        <div className="space-y-4">
          <StoryCard
            title="테스트 환경의 데이터 일관성 보장"
            content={`매 테스트마다 동일한 초기 상태를 보장하기 어려웠습니다. 특히 병렬 테스트 실행 시 데이터 충돌 문제가 발생했습니다.

이런 문제를 해결하기 위해 각 테스트가 고유한 데이터셋을 사용하도록 설계했습니다. beforeEach 훅에서 테스트용 계정과 데이터를 생성하고, afterEach에서 정리하는 방식으로 독립성을 확보했습니다. UUID를 활용해 테스트별 고유 식별자를 부여하여 병렬 실행 시에도 충돌이 발생하지 않도록 했습니다.`}
          />
          <StoryCard
            title="인증 상태 관리 및 세션 최적화"
            content={`초기에는 모든 테스트가 시작될 때마다 로그인 과정을 반복했습니다. 40개의 테스트에서 각각 로그인하면 전체 실행 시간이 크게 증가하는 문제가 있었습니다.

Playwright의 storageState 기능을 활용하여 한 번 로그인한 인증 상태를 JSON 파일로 저장하고, 이후 테스트에서 재사용하도록 개선했습니다. globalSetup에서 사전에 인증 상태를 준비하고, 각 테스트는 이를 불러와 즉시 시작할 수 있게 했습니다.

결과적으로 전체 테스트 실행 시간을 약 40% 단축할 수 있었고, 세션 만료나 로그인 실패로 인한 테스트 불안정성도 크게 줄었습니다.`}
          />
          <StoryCard
            title="파일 업로드/다운로드 검증"
            content={`치과 차트 시스템에서는 X-ray 이미지, 동의서 PDF 등 다양한 파일을 업로드하고 다운로드하는 기능이 핵심입니다. 브라우저의 파일 다이얼로그는 일반적인 방법으로는 자동화하기 어려웠습니다.

Playwright의 setInputFiles() API를 사용해 파일 선택 다이얼로그를 우회하여 직접 파일을 input 요소에 할당했습니다. 다운로드의 경우 page.waitForEvent('download')로 다운로드 이벤트를 감지하고, 다운로드된 파일의 경로, 크기, MIME 타입을 검증했습니다.

특히 대용량 이미지 파일 업로드 시 Progress Bar가 정상 작동하는지, 업로드 완료 후 미리보기가 제대로 표시되는지까지 E2E로 검증할 수 있게 되었습니다.`}
          />
          <StoryCard
            title="복잡한 사용자 인터랙션 시뮬레이션"
            content={`예약 스케줄러의 Drag & Drop, 멀티 스텝 차트 작성 폼, 중첩된 모달 팝업 등 복잡한 UI 인터랙션을 테스트하는 것이 까다로웠습니다. 단순 클릭만으로는 재현할 수 없는 시나리오들이었습니다.

Page Object Model(POM) 패턴을 도입하여 각 페이지별로 인터랙션 로직을 캡슐화했습니다. 예를 들어 SchedulerPage 클래스에는 dragAppointment(), selectTimeSlot() 같은 메서드를 정의하여 테스트 코드의 가독성과 재사용성을 높였습니다.

Drag & Drop은 Playwright의 dragAndDrop() API를 활용했고, 멀티 스텝 폼은 각 단계별로 명시적인 검증 포인트를 두어 중간 상태를 확인하도록 했습니다. 이를 통해 실제 사용자가 겪을 수 있는 복잡한 시나리오를 빠짐없이 자동화할 수 있었습니다.`}
          />
          <StoryCard
            title="외부 서비스 의존성 처리"
            content={`결제 API, 알림톡 발송, 보험 청구 연동 등 외부 서비스에 의존하는 기능들이 많았습니다. 실제 서비스를 호출하면 비용이 발생하거나, 테스트 환경에서 접근할 수 없는 경우가 있었습니다.

page.route()를 사용해 특정 API 엔드포인트를 가로채고 Mock 응답을 반환하도록 구현했습니다. 예를 들어 결제 승인 API는 항상 성공 응답을 반환하도록 하고, 알림톡 발송은 요청만 검증하고 실제 발송은 하지 않도록 했습니다.

또한 환경 변수로 TEST_MODE 플래그를 설정하여, 백엔드에서도 테스트 시에는 외부 API 호출을 스킵하고 Mock 데이터를 반환하도록 협업했습니다. 이를 통해 외부 의존성 없이도 안정적인 E2E 테스트 환경을 구축할 수 있었습니다.`}
          />
        </div>
      </ProjectSection>

      <ProjectSection title="성과">
        <div className="space-y-4">
          <StoryCard
            title="성과: QA 시간 85% 단축"
            content="수동 테스트 2시간 → 자동화 테스트 20분으로 단축했습니다. QA팀은 자동화된 회귀 테스트 대신 새로운 기능의 탐색적 테스트에 집중할 수 있게 되었습니다."
          />
        </div>
      </ProjectSection>
    </ProjectLayout>
  );
};

export default E2ETestPage;
