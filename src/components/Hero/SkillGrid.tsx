import {
  ReactIcon,
  TypeScriptIcon,
  NextJSIcon,
  TailwindIcon,
  GraphQLIcon,
  PlaywrightIcon,
  ElectronIcon,
  OpenIdIcon,
  SonarqubeIcon,
  GitHubIcon,
  StorybookIcon,
} from "../common/icons";
import SkillCard from "../common/SkillCard";

const SKILLS = [
  { icon: <ReactIcon size={48} />, title: "React" },
  { icon: <TypeScriptIcon size={48} />, title: "TypeScript" },
  { icon: <TailwindIcon size={48} />, title: "Tailwind CSS" },
  { icon: <NextJSIcon size={48} />, title: "Next.js" },
  { icon: <GraphQLIcon size={48} />, title: "GraphQL" },
  { icon: <PlaywrightIcon size={48} />, title: "Playwright" },
  { icon: <ElectronIcon size={48} />, title: "Electron" },
  { icon: <OpenIdIcon size={48} />, title: "OIDC / OAuth 2.0" },
  { icon: <SonarqubeIcon size={48} />, title: "SonarQube" },
  { icon: <GitHubIcon size={48} />, title: "GitHub Actions" },
  { icon: <StorybookIcon size={48} />, title: "Storybook" },
];

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
