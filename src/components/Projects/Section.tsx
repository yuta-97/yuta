import { Project } from ".";
import MainProjects from "./MainProject";

const FeaturedProjectsSection = (props: { projects: Project[] }) => {
  const { projects } = props;

  return (
    <div className="mb-16">
      <h3 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
        🚀 주요 프로젝트
      </h3>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map(project => (
          <MainProjects key={project.id} projectData={project} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjectsSection;
