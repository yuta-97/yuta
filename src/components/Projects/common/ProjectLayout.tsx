type Props = {
  children: React.ReactNode;
};

const ProjectLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-[#f6f7f2] dark:bg-slate-950">
      <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        {children}
      </article>
    </div>
  );
};

export default ProjectLayout;
