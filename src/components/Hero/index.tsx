import Image from "next/image";
import Link from "next/link";
import { CAPABILITIES, IMPACTS, LINKS, PROFILE } from "@/data/profile";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-200 bg-[#f6f7f2] pt-16 dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="pointer-events-none absolute top-[-10rem] right-[-8rem] h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-500/10" />
      <div className="pointer-events-none absolute bottom-[-12rem] left-[-8rem] h-96 w-96 rounded-full bg-amber-300/30 blur-3xl dark:bg-amber-500/10" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.65fr)]">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-3 py-1.5 text-sm font-medium text-slate-700 backdrop-blur dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {PROFILE.role} · {PROFILE.careerStart} — Present
            </p>

            <h1 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl dark:text-white">
              화면을 넘어,
              <br />
              <span className="block text-cyan-700 dark:text-cyan-300">
                제품이 더 잘 굴러가게
              </span>
              만듭니다.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl dark:text-slate-300">
              글로벌 의료 SaaS를 개발하고 운영하며 사용자 경험, 코드 구조,
              테스트와 AI 기반 업무 자동화를 함께 개선해 온 프론트엔드 개발자{" "}
              <strong className="font-semibold text-slate-950 dark:text-white">
                {PROFILE.name}
              </strong>
              입니다.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="#projects"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cyan-700 focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 focus-visible:outline-none dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                전체 사례 보기
              </Link>
              <a
                href={LINKS.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white/70 px-6 py-3 font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-500 hover:bg-white focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 focus-visible:outline-none dark:border-slate-700 dark:bg-slate-900/70 dark:text-white dark:hover:border-slate-500"
              >
                이력서 열기
                <span aria-hidden className="ml-2">
                  ↗
                </span>
              </a>
            </div>
          </div>

          <aside className="relative mx-auto w-full max-w-56">
            <div className="rotate-2 rounded-[1.5rem] border border-slate-200 bg-white p-3 shadow-[0_24px_70px_-32px_rgba(15,23,42,0.45)] dark:border-slate-700 dark:bg-slate-900">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1rem] bg-slate-200">
                <Image
                  src="/porf.jpeg"
                  alt={`${PROFILE.name} 프로필 사진`}
                  fill
                  priority
                  sizes="224px"
                  className="object-cover"
                />
              </div>
              <div className="px-1.5 pt-4 pb-1.5">
                <p className="text-sm font-medium text-cyan-700 dark:text-cyan-300">
                  Currently
                </p>
                <p className="mt-1 font-semibold text-slate-950 dark:text-white">
                  {PROFILE.currentCompany} · {PROFILE.currentProduct}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  레거시 현대화, FSD 아키텍처와 공통 디자인 시스템을 제품에
                  적용하고 있습니다.
                </p>
              </div>
            </div>
          </aside>
        </div>

        <dl className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4 dark:border-slate-800 dark:bg-slate-800">
          {IMPACTS.map(item => (
            <div
              key={item.value}
              className="bg-white/90 px-5 py-6 dark:bg-slate-900"
            >
              <dt className="text-sm leading-6 text-slate-500 dark:text-slate-400">
                {item.label}
              </dt>
              <dd className="mt-1 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {CAPABILITIES.map(capability => (
            <div
              key={capability.title}
              className="rounded-2xl border border-slate-200 bg-white/60 p-5 dark:border-slate-800 dark:bg-slate-900/60"
            >
              <h2 className="text-sm font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                {capability.title}
              </h2>
              <p className="mt-3 leading-7 font-medium text-slate-800 dark:text-slate-200">
                {capability.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
