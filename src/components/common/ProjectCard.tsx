import Button from "./Button";
import TechTag from "./TechTag";
import ExternalLinkIcon from "./icons/ExternalLinkIcon";
import GitHubIcon from "./icons/GitHubIcon";

type Props = {
  id: number;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  className?: string;
};

const ProjectCard = (props: Props) => {
  const {
    title,
    description,
    technologies,
    liveUrl,
    githubUrl,
    featured = false,
    className = "",
  } = props;
  if (featured) {
    return (
      <div
        className={`group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-900 ${className}`}
      >
        <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-r from-blue-400 to-purple-500">
          <div className="text-6xl text-white transition-transform duration-300 group-hover:scale-110">
            🖥️
          </div>
          <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/10" />
        </div>
        <div className="p-6">
          <h4 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h4>
          <p className="mb-4 line-clamp-3 text-gray-600 dark:text-gray-300">
            {description}
          </p>
          <div className="mb-6 flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <TechTag key={index} tech={tech} />
            ))}
          </div>
          <div className="flex gap-4">
            {liveUrl && (
              <Button href={liveUrl} variant="primary" size="sm">
                Live Demo
              </Button>
            )}
            {githubUrl && (
              <Button href={githubUrl} variant="outline" size="sm">
                GitHub
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`group rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-900 ${className}`}
    >
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
          {title}
        </h4>
        <div className="flex gap-2">
          {liveUrl && (
            <a
              href={liveUrl}
              className="text-blue-600 transition-colors duration-200 hover:text-blue-700"
              aria-label="Live Demo"
            >
              <ExternalLinkIcon />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              className="text-gray-600 transition-colors duration-200 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              aria-label="GitHub Repository"
            >
              <GitHubIcon />
            </a>
          )}
        </div>
      </div>
      <p className="mb-4 line-clamp-3 text-sm text-gray-600 dark:text-gray-300">
        {description}
      </p>
      <div className="flex flex-wrap gap-1">
        {technologies.slice(0, 3).map((tech, index) => (
          <TechTag key={index} tech={tech} size="sm" />
        ))}
        {technologies.length > 3 && (
          <span className="px-2 py-1 text-xs text-gray-500 dark:text-gray-400">
            +{technologies.length - 3}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
