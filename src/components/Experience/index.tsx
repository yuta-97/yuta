import Section from "@/components/common/Section";
import { EXPERIENCES } from "@/data/profile";

const Experience = () => {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="한 제품을 오래 운영하며, 다음 문제까지 해결했습니다"
      subtitle="기능 개발에서 시작해 아키텍처, 품질, 협업과 자동화까지 책임의 범위를 넓혀 왔습니다."
      background="muted"
    >
      <ol className="relative border-l border-slate-300 dark:border-slate-700">
        {EXPERIENCES.map(experience => (
          <li
            key={experience.company}
            className="relative ml-6 pb-14 last:pb-0"
          >
            <span className="absolute top-2 -left-[1.86rem] h-3 w-3 rounded-full border-2 border-[#eef1ec] bg-cyan-700 dark:border-slate-950 dark:bg-cyan-300" />
            <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
              <div>
                <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
                  {experience.period}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">
                  {experience.company}
                </h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {experience.team}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900">
                <p className="font-semibold text-slate-900 dark:text-white">
                  {experience.role}
                </p>
                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                  {experience.description}
                </p>
                <ul className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-3 dark:text-slate-300">
                  {experience.highlights.map(highlight => (
                    <li
                      key={highlight}
                      className="rounded-xl bg-slate-100 px-4 py-3 leading-6 dark:bg-slate-800"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Experience;
