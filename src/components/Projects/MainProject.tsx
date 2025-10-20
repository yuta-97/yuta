import Image from "next/image";
import { Project } from ".";
import Button from "../common/Button";
import TechTag from "../common/TechTag";

type Props = {
  projectData: Project;
};

const MainProjects = (props: Props) => {
  const { projectData } = props;
  const { title, description, technologies, link, githubUrl, image } =
    projectData;

  return (
    <div
      className={`group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-900`}
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
          {link && (
            <Button href={link} variant="primary" size="sm">
              View Detail
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
};

export default MainProjects;
