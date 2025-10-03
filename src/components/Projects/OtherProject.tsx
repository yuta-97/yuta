import { Project } from ".";
import TechTag from "../common/TechTag";
import ExternalLinkIcon from "../common/icons/ExternalLinkIcon";
import GitHubIcon from "../common/icons/GitHubIcon";

type Props = {
  projectData: Project;
};

const OtherProject = (props: Props) => {
  const { projectData } = props;
  const { title, description, technologies, link, githubUrl } = projectData;

  return (
    <div
      className={`group rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-900`}
    >
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
          {title}
        </h4>
        <div className="flex gap-2">
          {link && (
            <a
              href={link}
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

export default OtherProject;
