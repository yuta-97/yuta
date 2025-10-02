import { Project } from ".";
import ProjectCard from "../common/ProjectCard";

const FeaturedProjectsSection = (props: { projects: Project[] }) => {
  const { projects } = props;
  return (
    <div className="mb-16">
      <h3 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
        🚀 주요 프로젝트
      </h3>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} featured={true} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjectsSection;
