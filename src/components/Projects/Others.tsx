import { Project } from ".";
import ProjectCard from "../common/ProjectCard";

const OtherProjectsSection = (props: { projects: Project[] }) => {
  const { projects } = props;
  return (
    <div>
      <h3 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
        💻 기타 프로젝트
      </h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} featured={false} />
        ))}
      </div>
    </div>
  );
};
export default OtherProjectsSection;
