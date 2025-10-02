type Props = {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
  background?: "default" | "gray" | "gradient";
};

const Section = (props: Props) => {
  const {
    id,
    title,
    subtitle,
    className = "",
    children,
    background = "default",
  } = props;
  const backgroundClasses = {
    default: "bg-white dark:bg-gray-900",
    gray: "bg-gray-50 dark:bg-gray-800",
    gradient:
      "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800",
  };

  return (
    <section
      id={id}
      className={`py-20 ${backgroundClasses[background]} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-16 text-center">
            {title && (
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
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
