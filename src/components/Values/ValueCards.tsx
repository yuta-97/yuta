import Link from "next/link";
import type { ValueData } from "./data";

type Props = {
  value: ValueData;
  index: number;
};

const ValueCard = ({ value, index }: Props) => {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-slate-900">
      <p className="font-mono text-sm font-semibold text-cyan-700 dark:text-cyan-300">
        0{index + 1}
      </p>
      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
        {value.title}
      </h3>
      <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
        {value.description}
      </p>
      <ul className="mt-7 space-y-3">
        {value.principles.map(principle => (
          <li
            key={principle}
            className="flex gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300"
          >
            <span
              aria-hidden
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500"
            />
            {principle}
          </li>
        ))}
      </ul>
      <Link
        href={value.evidence.link}
        className="mt-8 inline-flex w-fit items-center rounded-md text-sm font-semibold text-cyan-700 hover:text-cyan-900 focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:outline-none dark:text-cyan-300 dark:hover:text-cyan-100"
      >
        근거가 된 사례: {value.evidence.title}
        <span aria-hidden className="ml-2">
          →
        </span>
      </Link>
    </article>
  );
};

export default ValueCard;
