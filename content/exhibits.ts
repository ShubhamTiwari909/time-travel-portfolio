import excerpts from "./source/code-excerpts.json";
import { projects, skills, type Project } from "./portfolio";

export const projectColors: Record<string, string> = {
  sage: "#d7e8b2", amber: "#dcb888", lilac: "#bcafd1",
};

export type LensReading = {
  label: string; title: string; note: string; code?: string;
  flow?: string[]; source: string;
};

export const lensReadings: Record<string, LensReading> = {
  "zentauri-ui": {
    label: "THE PUBLIC API", title: "A deliberate boundary.",
    note: "The public type removes an internal render seam, keeping the component’s API small.",
    code: excerpts[0].code.split("\n").slice(-1).join("\n"),
    source: "Published CopyButton type declaration",
  },
  "payload-cms": {
    label: "CONTENT ARCHITECTURE", title: "Publish once. Keep it fresh.",
    note: "Content and media management meet a frontend with on-demand revalidation.",
    flow: ["Next.js interface", "Content & media", "MongoDB"],
    source: "Architecture reading of the project notes",
  },
  "gemini-zentauri": {
    label: "THE CREATION FLOW", title: "From a prompt to a post.",
    note: "Generation sits inside a familiar interface for publishing and interaction.",
    flow: ["Create a prompt", "Gemini API", "Social feed"],
    source: "Flow reading of the project notes",
  },
  "portfolio-v1": {
    label: "THE INTERFACE SYSTEM", title: "One visual language.",
    note: "A Material-3 inspired token system supports the interface and a live writing feed.",
    flow: ["Design tokens", "Portfolio interface", "dev.to articles"],
    source: "Design reading of the project notes",
  },
};

export type Skill = (typeof skills)[number];
const tagAliases: Record<string, string[]> = {
  "tailwind-css": ["Tailwind CSS"], "nextjs": ["Next.js"], "nodejs": ["Node.js"],
  "gemini-llm-apis": ["Gemini API"],
};
// These relationships are explicitly described in the supplied project notes.
const documentedLinks: Record<string, string[]> = {
  "payload-cms": ["payload-cms"],
  accessibility: ["zentauri-ui"],
  "performance-optimisation": ["payload-cms"],
};

export function projectsForSkill(skill: Skill): Project[] {
  const tags = tagAliases[skill.id] ?? [skill.name];
  return projects.filter((project) => project.tags.some((tag) => tags.includes(tag))
    || documentedLinks[skill.id]?.includes(project.slug));
}

export const skillGroups = [
  { id: "INTERFACE", label: "Interface", note: "The elements people see and interact with." },
  { id: "SUBSTRATE", label: "Platforms & data", note: "The services and data behind the interface." },
  { id: "OPERATIONS", label: "Operations", note: "The tools and practices that support delivery." },
];
