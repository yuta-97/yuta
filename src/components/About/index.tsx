import Section from "@/components/common/Section";

const WORKING_TRAITS = [
  {
    number: "01",
    title: "제품의 경계에서 문제를 봅니다",
    description:
      "화면에서 발견한 문제를 프론트엔드 우회 처리로 끝내지 않습니다. 데이터 흐름과 API 구조까지 살펴 원인이 있는 곳에서 해결하려고 합니다.",
  },
  {
    number: "02",
    title: "기술보다 선택의 이유를 남깁니다",
    description:
      "Next.js를 쓰지 않은 결정, 상태 관리 도구를 바꾼 순서처럼 제품 환경과 유지 비용을 근거로 선택하고 팀이 재사용할 수 있는 기준으로 정리합니다.",
  },
  {
    number: "03",
    title: "반복되는 마찰을 그냥 두지 않습니다",
    description:
      "수동 QA, 번역, 컴포넌트 확인, 코드 리뷰처럼 누군가 계속 감당하는 비용을 발견하면 자동화와 문서화로 더 나은 흐름을 만듭니다.",
  },
] as const;

const About = () => {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="기능을 만드는 사람에서, 제품이 성장할 조건을 만드는 사람으로"
      subtitle="백엔드로 커리어를 시작했지만 사용자와 직접 맞닿는 화면의 매력 때문에 프론트엔드를 선택했습니다. 그 경험 덕분에 UI와 서버 사이를 나누기보다 하나의 제품 흐름으로 바라봅니다."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {WORKING_TRAITS.map(trait => (
          <article
            key={trait.number}
            className="rounded-2xl border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-slate-900"
          >
            <p className="font-mono text-sm font-semibold text-cyan-700 dark:text-cyan-300">
              {trait.number}
            </p>
            <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
              {trait.title}
            </h3>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
              {trait.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default About;
