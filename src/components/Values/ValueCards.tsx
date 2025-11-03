import Link from "next/link";
import { ValueData } from ".";

type Props = {
  value: ValueData;
};

const getColorClasses = (color: string) => {
  switch (color) {
    case "blue":
      return "bg-blue-500";
    case "green":
      return "bg-green-500";
    case "purple":
      return "bg-purple-500";
    case "orange":
      return "bg-orange-500";
    default:
      return "bg-gray-500";
  }
};

const ValueCard = (props: Props) => {
  const { value } = props;

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-900">
      <div className="mb-4 flex items-center">
        <div
          className={`mr-4 h-3 w-3 rounded-full ${getColorClasses(value.color)}`}
        ></div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {value.title}
        </h3>
      </div>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        {value.description}
      </p>
      <ul className="space-y-2">
        {value.principles.map((principle, index) => (
          <li key={index} className="flex items-start text-sm">
            <span className="mt-0.5 mr-2 text-green-500">✓</span>
            <span className="text-gray-700 dark:text-gray-300">
              {principle}
            </span>
          </li>
        ))}
      </ul>
      {value.relatedProjects && value.relatedProjects.length > 0 && (
        <div className="mt-6 border-t border-gray-200 pt-4 dark:border-gray-700">
          <p className="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
            관련 프로젝트
          </p>
          <div className="flex flex-wrap gap-2">
            {value.relatedProjects.map((project, index) => (
              <Link
                key={index}
                href={project.link}
                className="inline-flex items-center rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                {project.title}
                <svg
                  className="ml-1 h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ValueCard;
