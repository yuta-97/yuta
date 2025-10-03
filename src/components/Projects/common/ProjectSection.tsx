type Props = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

const ProjectSection = (props: Props) => {
  const { title, children, className = "" } = props;

  return (
    <div
      className={`mb-8 rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800 ${className}`}
    >
      <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default ProjectSection;
