import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type Props = {
  projectData: Project;
  priority?: boolean;
};

const ProjectCard = ({ projectData, priority = false }: Props) => {
  const {
    title,
    summary,
    slug,
    image,
    imageFit = "cover",
    period,
    eyebrow,
    role,
    tags,
    stack,
    focus,
    impact,
    featured,
  } = projectData;

  return (
    <article
      className={`group overflow-hidden rounded-3xl border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-900 ${
        featured
          ? "border-slate-300 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.55)] dark:border-slate-700"
          : "border-slate-200 dark:border-slate-800"
      }`}
    >
      <Link
        href={`/project/${slug}`}
        className="block h-full rounded-3xl focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-4 focus-visible:outline-none"
      >
        <div className="relative flex aspect-[16/8] items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#0f172a_0%,#155e75_60%,#0e7490_100%)]">
          {image ? (
            <Image
              src={image}
              alt=""
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`transition duration-500 group-hover:scale-[1.03] ${
                imageFit === "contain"
                  ? "object-contain p-10"
                  : "object-cover opacity-90"
              }`}
            />
          ) : (
            <>
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.25),transparent_28%),radial-gradient(circle_at_75%_60%,rgba(250,204,21,0.24),transparent_24%)]"
              />
              <div
                aria-hidden
                className="relative z-10 flex h-full w-full items-end justify-between p-6 text-white"
              >
                <p className="text-2xl font-semibold tracking-tight">{focus}</p>
                <p className="rounded-full border border-white/30 px-3 py-1 text-xs font-semibold">
                  {stack[0]}
                </p>
              </div>
            </>
          )}
          <p className="absolute top-5 left-5 rounded-full border border-white/25 bg-slate-950/40 px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur">
            {eyebrow}
          </p>
        </div>

        <div className="p-6 sm:p-7">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
            <span>{period}</span>
            <span aria-hidden>·</span>
            <span>{role}</span>
          </div>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 transition group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300">
            {title}
          </h3>
          <p className="mt-3 line-clamp-3 leading-7 text-slate-600 dark:text-slate-300">
            {summary}
          </p>
          <p className="mt-5 border-l-2 border-cyan-600 pl-4 text-sm leading-6 font-medium text-slate-800 dark:border-cyan-400 dark:text-slate-200">
            {impact}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.slice(0, 3).map(tag => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-7 inline-flex items-center text-sm font-semibold text-cyan-700 dark:text-cyan-300">
            사례 자세히 보기
            <span
              aria-hidden
              className="ml-2 transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </p>
        </div>
      </Link>
    </article>
  );
};

export default ProjectCard;
