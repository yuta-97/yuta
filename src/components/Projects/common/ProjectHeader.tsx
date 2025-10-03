type Props = {
  title: string;
  subtitle: string;
  liveUrl?: string;
  description?: string;
};

const ProjectHeader = (props: Props) => {
  const { title, subtitle, liveUrl, description } = props;

  return (
    <div className="mb-12 text-center">
      <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
        {title}
      </h1>
      <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
        {subtitle}
      </p>
      {description && (
        <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-gray-700 dark:text-gray-400">
          {description}
        </p>
      )}
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700"
        >
          Live Demo 보기
          <svg
            className="ml-2 h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      )}
    </div>
  );
};

export default ProjectHeader;
