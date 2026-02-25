import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

const ProjectLayout = (props: Props) => {
  const { children } = props;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-1 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          목록으로
        </Link>
        {children}
      </div>
    </div>
  );
};

export default ProjectLayout;
