import {
  ProjectLayout,
  ProjectHeader,
  ProjectSection,
  TechStack,
  StoryCard,
} from "@/components/Projects/common";

const TECHNOLOGIES = [
  "React",
  "TypeScript",
  "Zustand",
  "Context API",
  "React DevTools",
];

const EXPERIENCES = [
  {
    title: "Context API 기반 구조의 한계",
    content: `기존 상태 관리 방식의 문제점과 개선 필요성 인식

기존 구조 (Context API + useReducer):
• 여러 Context가 중첩되어 Provider Hell 발생
• 상태 변경 시 불필요한 컴포넌트까지 리렌더링
• Reducer 로직이 복잡해지면서 유지보수 어려움
• 상태 디버깅 어려움

구체적 문제 사례 :
• 전역 모달, 토스트 알림 상태가 여러 Context로 분산
• 사용자 정보 Context 변경 시 관련 없는 컴포넌트도 리렌더링
• Reducer action 타입 관리의 복잡성
• 비동기 로직을 Reducer에서 처리하기 어려움
• 앱 성능 저하 - 불필요한 리렌더링으로 버벅임 발생
• 개발 생산성 저하 - 상태 추적 및 디버깅 시간 증가
• 신규 개발자의 높은 러닝 커브`,
  },
  {
    title: "Zustand 도입 및 마이그레이션",
    content: `경량화되고 직관적인 상태 관리 라이브러리로의 전환 경험

Zustand 선택 이유 :
• 기존 사용하던 Flux 패턴과 유사한 API 제공
• 컴포넌트 리렌더링 최적화 - 필요한 상태만 구독
• DevTools 지원 - Redux DevTools로 상태 변화 추적
• 작은 번들 사이즈 (1.3KB) - 다른 상태관리 라이브러리 보다 가볍고 빠름
• 러닝 커브 낮음 - 팀원들의 빠른 적응 가능

마이그레이션 전략 :
• 작은 스토어부터 순차적 전환 (모달, 토스트 → 사용자 정보 → 앱 설정)
• 기존 Context와 Zustand 병행 운영하며 점진적 이전
• Selector 함수로 필요한 상태만 구독하도록 최적화
• Persist 미들웨어로 localStorage 연동

리팩토링 과정 :
• 중첩된 Provider 제거 - 컴포넌트 트리 단순화
• useStore 훅으로 선택적 구독 - 리렌더링 최소화
• Slice 패턴으로 스토어 모듈화 - 관심사 분리
• 비동기 로직을 store actions에 통합 - 로직 응집도 향상

성과 :
• 상태 의존성 감소로 리렌더링 30% 감소
• DevTools로 상태 디버깅 시간 단축
• 코드 라인 수 20% 감소 - 보일러플레이트 제거
• 앱 성능 개선 
• 팀 생산성 향상

느낀 점 :
• 상태 관리는 단순할수록 좋다
• 적절한 도구 선택이 생산성과 성능에 직결된다
• 마이그레이션은 점진적으로, 안정성 확보하며 진행해야 한다
• DevTools의 중요성 - 디버깅 효율 극대화`,
  },
];

const ZustandProject = () => {
  return (
    <ProjectLayout>
      <ProjectHeader
        title="Zustand 기반 상태관리 리팩토링"
        subtitle="Context API에서 Zustand로의 전환"
        description="복잡하게 중첩된 Context API 구조를 경량화된 Zustand로 전환하여 성능을 개선하고 개발 생산성을 높인 프로젝트입니다. 상태 흐름을 단순화하고 리렌더링을 최소화하여 더 나은 사용자 경험을 제공하게 되었습니다."
      />

      <ProjectSection title="기술 스택">
        <TechStack technologies={TECHNOLOGIES} />
      </ProjectSection>

      <ProjectSection title="프로젝트 배경">
        <div className="prose dark:prose-invert max-w-none">
          <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
            초기에는 React의 Context API와 useReducer를 활용하여 전역 상태
            관리를 구현했습니다. 순수 React 내장 기능만으로도 충분할 것이라
            판단했기 때문입니다.
          </p>
          <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
            서비스가 성장하면서 관리해야 할 전역 상태가 증가했고, Context API
            기반의 상태 관리는 한계를 보이기 시작했습니다. 여러 Context가
            중첩되면서 코드 복잡도가 증가하고, 불필요한 리렌더링으로 성능 저하가
            발생했습니다.
          </p>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            이를 해결하기 위해 경량화되고 직관적인 Zustand를 도입하여 상태 관리
            구조를 개선하고, 개발 생산성과 앱 성능을 모두 향상시킬 수
            있었습니다.
          </p>
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

export default ZustandProject;
