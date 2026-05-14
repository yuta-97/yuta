import SkillCard from "../common/SkillCard";
import { SKILLS } from "./skills";

const SkillsGrid = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Gradient overlays for fade effect */}
      <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent dark:from-gray-900"></div>
      <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent dark:from-gray-900"></div>

      {/* Scrolling container */}
      <div className="animate-scroll-container flex">
        {/* First group */}
        <div className="animate-scroll-infinite flex gap-6 pr-6">
          {SKILLS.map((skill, index) => (
            <div key={`first-${index}`} className="w-40 flex-shrink-0">
              <SkillCard icon={skill.icon} title={skill.title} />
            </div>
          ))}
        </div>
        {/* Second group - duplicate */}
        <div aria-hidden className="animate-scroll-infinite flex gap-6 pr-6">
          {SKILLS.map((skill, index) => (
            <div key={`second-${index}`} className="w-40 flex-shrink-0">
              <SkillCard icon={skill.icon} title={skill.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsGrid;
