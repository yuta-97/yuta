import type { ReactElement } from "react";
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

type Skill = {
  icon: ReactElement;
  title: string;
};

const SKILLS: Skill[] = [
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

export { SKILLS };
