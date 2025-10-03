type Props = {
  children: React.ReactNode;
};

const ProjectLayout = (props: Props) => {
  const { children } = props;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-4xl px-6 py-12">{children}</div>
    </div>
  );
};

export default ProjectLayout;
