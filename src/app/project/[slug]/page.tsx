import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectLayout from "@/components/Projects/common/ProjectLayout";
import ScreenshotGallery from "@/components/Projects/common/ScreenshotGallery";
import { CASE_STUDIES, getCaseStudy } from "@/data/case-studies";

type Props = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = () =>
  CASE_STUDIES.map(project => ({ slug: project.slug }));

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { slug } = await params;
  const project = getCaseStudy(slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/project/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
      url: `/project/${project.slug}`,
      images: project.image ? [{ url: project.image }] : undefined,
    },
  };
};

const CaseStudyPage = async ({ params }: Props) => {
  const { slug } = await params;
  const project = getCaseStudy(slug);

  if (!project) notFound();

  const currentIndex = CASE_STUDIES.findIndex(item => item.slug === slug);
  const nextProject = CASE_STUDIES[(currentIndex + 1) % CASE_STUDIES.length];

  return (
    <ProjectLayout>
      <Link
        href="/#projects"
        className="inline-flex items-center rounded-md text-sm font-semibold text-slate-600 transition hover:text-cyan-700 focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:outline-none dark:text-slate-300 dark:hover:text-cyan-300"
      >
        <span aria-hidden className="mr-2">
          ←
        </span>
        전체 사례로 돌아가기
      </Link>

      <header className="mt-12 border-b border-slate-300 pb-12 dark:border-slate-700">
        <p className="font-mono text-sm font-semibold tracking-wider text-cyan-700 uppercase dark:text-cyan-300">
          {project.eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl leading-tight font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl dark:text-white">
          {project.title}
        </h1>
        <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-600 dark:text-slate-300">
          {project.summary}
        </p>

        <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-3 dark:border-slate-700 dark:bg-slate-700">
          {project.metrics.map(metric => (
            <div
              key={metric.label}
              className="bg-white px-5 py-6 dark:bg-slate-900"
            >
              <dt className="text-sm text-slate-500 dark:text-slate-400">
                {metric.label}
              </dt>
              <dd className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>

        <dl className="mt-8 grid gap-5 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="text-slate-500 dark:text-slate-400">기간</dt>
            <dd className="mt-1 font-semibold text-slate-900 dark:text-white">
              {project.period}
            </dd>
          </div>
          <div>
            <dt className="text-slate-500 dark:text-slate-400">소속</dt>
            <dd className="mt-1 font-semibold text-slate-900 dark:text-white">
              {project.company}
            </dd>
          </div>
          <div>
            <dt className="text-slate-500 dark:text-slate-400">역할</dt>
            <dd className="mt-1 font-semibold text-slate-900 dark:text-white">
              {project.role}
            </dd>
          </div>
          <div>
            <dt className="text-slate-500 dark:text-slate-400">기술</dt>
            <dd className="mt-1 font-semibold text-slate-900 dark:text-white">
              {project.stack.join(" · ")}
            </dd>
          </div>
        </dl>
      </header>

      <div className="grid gap-12 py-14 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
        <div>
          <p className="font-mono text-sm font-semibold text-cyan-700 uppercase dark:text-cyan-300">
            01 · Context
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
            어떤 문제였나요?
          </h2>
        </div>
        <div>
          <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
            {project.context}
          </p>
          <ul className="mt-7 space-y-3">
            {project.challenges.map(challenge => (
              <li
                key={challenge}
                className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 leading-7 text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              >
                <span aria-hidden className="font-semibold text-amber-600">
                  !
                </span>
                {challenge}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="border-t border-slate-300 py-14 dark:border-slate-700">
        <p className="font-mono text-sm font-semibold text-cyan-700 uppercase dark:text-cyan-300">
          02 · Decisions
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
          무엇을 기준으로 선택했나요?
        </h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {project.decisions.map((decision, index) => (
            <article
              key={decision.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="font-mono text-sm text-cyan-700 dark:text-cyan-300">
                0{index + 1}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">
                {decision.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                {decision.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <div className="grid border-t border-slate-300 py-14 lg:grid-cols-2 dark:border-slate-700">
        <section className="border-b border-slate-300 pb-10 lg:border-r lg:border-b-0 lg:pr-10 lg:pb-0 dark:border-slate-700">
          <p className="font-mono text-sm font-semibold text-cyan-700 uppercase dark:text-cyan-300">
            03 · Execution
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
            어떻게 실행했나요?
          </h2>
          <ol className="mt-7 space-y-5">
            {project.execution.map((item, index) => (
              <li key={item} className="flex gap-4">
                <span className="font-mono text-sm font-semibold text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="leading-7 text-slate-700 dark:text-slate-300">
                  {item}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="pt-10 lg:pt-0 lg:pl-10">
          <p className="font-mono text-sm font-semibold text-cyan-700 uppercase dark:text-cyan-300">
            04 · Outcome
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
            무엇이 달라졌나요?
          </h2>
          <ul className="mt-7 space-y-5">
            {project.outcomes.map(item => (
              <li key={item} className="flex gap-4">
                <span
                  aria-hidden
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500"
                />
                <p className="leading-7 text-slate-700 dark:text-slate-300">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {project.screenshots && (
        <section className="border-t border-slate-300 py-14 dark:border-slate-700">
          <p className="font-mono text-sm font-semibold text-cyan-700 uppercase dark:text-cyan-300">
            Product views
          </p>
          <h2 className="mt-3 mb-8 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
            실제 제품 화면
          </h2>
          <ScreenshotGallery screenshots={project.screenshots} />
        </section>
      )}

      <section className="border-t border-slate-300 py-14 dark:border-slate-700">
        <div className="rounded-3xl bg-slate-950 p-7 text-white sm:p-10 dark:bg-slate-900">
          <p className="font-mono text-sm font-semibold text-cyan-300 uppercase">
            What I learned
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            이 경험이 남긴 기준
          </h2>
          <ul className="mt-7 grid gap-4 md:grid-cols-2">
            {project.lessons.map(lesson => (
              <li
                key={lesson}
                className="rounded-2xl border border-slate-700 bg-slate-900 p-5 leading-7 text-slate-200 dark:bg-slate-950"
              >
                {lesson}
              </li>
            ))}
          </ul>

          {project.links && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-600 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200 focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <Link
        href={`/project/${nextProject.slug}`}
        className="group block rounded-3xl border border-slate-300 bg-white p-7 transition hover:border-cyan-600 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 focus-visible:outline-none sm:p-10 dark:border-slate-700 dark:bg-slate-900"
      >
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
          다음 사례
        </p>
        <div className="mt-3 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 group-hover:text-cyan-700 sm:text-3xl dark:text-white dark:group-hover:text-cyan-300">
              {nextProject.title}
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
              {nextProject.summary}
            </p>
          </div>
          <span
            aria-hidden
            className="text-3xl text-cyan-700 transition group-hover:translate-x-1 dark:text-cyan-300"
          >
            →
          </span>
        </div>
      </Link>
    </ProjectLayout>
  );
};

export default CaseStudyPage;
