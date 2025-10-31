import Image from "next/image";
import Link from "next/link";
import { Project } from "./Project";

type Props = {
  projectData: Project;
};

const ProjectCard = (props: Props) => {
  const { projectData } = props;
  const { title, description, link, image, period } = projectData;

  return (
    <Link
      href={link || "#"}
      className={`group block overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-900 ${link ? "cursor-pointer" : "cursor-default"}`}
    >
      <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-r from-blue-400 to-purple-500">
        {image ? (
          <Image
            src={image}
            width={200}
            height={100}
            alt=""
            className="object-contain"
          />
        ) : (
          <div className="text-6xl text-white transition-transform duration-300 group-hover:scale-110">
            🖥️
          </div>
        )}
        <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/10" />
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h4>
        </div>
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
          {period}
        </p>
        <p className="mb-4 line-clamp-3 text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
