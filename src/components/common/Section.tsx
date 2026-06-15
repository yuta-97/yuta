import { cn } from "@/lib/cn";

type Props = {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
  background?: "default" | "muted" | "dark";
};

const Section = (props: Props) => {
  const {
    id,
    eyebrow,
    title,
    subtitle,
    className = "",
    children,
    background = "default",
  } = props;
  const backgroundClasses = {
    default: "bg-[#fbfcf8] dark:bg-slate-950",
    muted: "bg-[#eef1ec] dark:bg-slate-950",
    dark: "bg-slate-950 text-white",
  };
  const isDark = background === "dark";

  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-16 border-b border-slate-200 py-20 sm:py-28 dark:border-slate-800",
        backgroundClasses[background],
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || subtitle) && (
          <div className="mb-14 max-w-4xl sm:mb-16">
            {eyebrow && (
              <p className="mb-4 font-mono text-sm font-semibold tracking-wider text-cyan-700 uppercase dark:text-cyan-300">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                className={cn(
                  "text-3xl leading-tight font-semibold tracking-[-0.03em] sm:text-4xl",
                  isDark ? "text-white" : "text-slate-950 dark:text-white",
                )}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={cn(
                  "mt-6 max-w-2xl text-lg leading-8",
                  isDark
                    ? "text-slate-300"
                    : "text-slate-600 dark:text-slate-300",
                )}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
