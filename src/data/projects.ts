import { CASE_STUDIES } from "./case-studies";

type Project = (typeof CASE_STUDIES)[number];

const PROJECTS = CASE_STUDIES;

export { PROJECTS };
export type { Project };
