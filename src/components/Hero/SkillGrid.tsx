import GraphQLIcon from "../common/icons/GraphQLIcon";
import NextJSIcon from "../common/icons/NextJSIcon";
import ReactIcon from "../common/icons/ReactIcon";
import TypeScriptIcon from "../common/icons/TypeScriptIcon";
import SkillCard from "../common/SkillCard";

const SKILLS = [
  { icon: <ReactIcon size={48} />, title: "React" },
  { icon: <TypeScriptIcon size={48} />, title: "TypeScript" },
  { icon: <NextJSIcon size={48} />, title: "Next.js" },
  { icon: <GraphQLIcon size={48} />, title: "GraphQL" },
];

const SkillsGrid = () => {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-2 gap-6 md:grid-cols-4">
      {SKILLS.map((skill, index) => (
        <SkillCard key={index} icon={skill.icon} title={skill.title} />
      ))}
    </div>
  );
};

export default SkillsGrid;
