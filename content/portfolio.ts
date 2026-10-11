import sourceProfile from "./source/profile.json";
import sourceProjects from "./source/projects.json";
import sourceExperience from "./source/experience.json";
import sourceSkills from "./source/skills.json";
import sourceArticles from "./source/articles.json";

const person = sourceProfile[0];
export const profile = {
  ...person,
  github: person.socials.find((social) => social.network === "github")!.url,
  linkedin: person.socials.find((social) => social.network === "linkedin")!.url,
  resume: person.resumePdf,
};
export const experience = sourceExperience[0];
export const skills = sourceSkills;
export const articles = sourceArticles;
export const CONTENT_VERSION = "portfolio-2026-10-11-v2";

export type Project = {
  slug: string; title: string; category: string; status: string;
  kind: "project" | "experiment"; summary: string; problem: string;
  approach: string; outcome: string; tags: string[];
  signature: [number, number]; color: string; year: number;
  projectUrl: string; repositoryUrl?: string; linkLabel: string;
  sourceUrl: string; sourceLabel: string;
  milestones: { id: string; period: string; title: string; description: string; evidenceUrl?: string }[];
};

const editorial: Record<string, { category: string; problem: string; outcome: string; signature: [number, number]; color: string }> = {
  "zentauri-ui": {
    category: "Design systems",
    problem: "Reusable components need a consistent visual language, predictable APIs, and accessible interactions. A library also needs to leave room for different products and motion preferences.",
    outcome: "A published React library with a token contract, typed component variants, optional motion entry points, headless hooks, and a scaffolding CLI. The supplied project record reports 1,359 assertions across 139 test files, including 46 accessibility tests.",
    signature: [2, 3], color: "sage",
  },
  "payload-cms": {
    category: "Content platforms",
    problem: "Publishing a personal blog needs more than a page editor: authentication, media, administration, and a reliable way to bring new content to the frontend.",
    outcome: "A personal blog CMS with authentication, an admin dashboard, content and media management, analytics, PageSpeed testing, and on-demand revalidation.",
    signature: [3, 4], color: "amber",
  },
  "visualguard": {
    category: "Developer tools",
    problem: "A visual change needs more than a failing screenshot: reviewers need to understand what moved, whether it was intentional, and whether a repair actually resolves it.",
    outcome: "An open-source CLI and Playwright integration that brings screenshots, findings, optional AI analysis, and repair verification into a single report.",
    signature: [1, 2], color: "lilac",
  },
  "portfolio-v1": {
    category: "Personal portfolio",
    problem: "A portfolio should make project reading and navigation comfortable on a phone while allowing fresh writing to appear without manual copying.",
    outcome: "A single-page portfolio with a Material-3 inspired token system, live dev.to feed, mobile-first bottom navigation, and animated section reveals.",
    signature: [3, 2], color: "sage",
  },
};

export const projects: Project[] = sourceProjects.map((project) => {
  const detail = editorial[project.slug];
  const repositoryUrl = project.repositoryUrl;
  const projectUrl = project.liveUrl ?? repositoryUrl!;
  return {
    ...detail, slug: project.slug, title: project.name,
    status: repositoryUrl ? "Open-source project" : "Live project", kind: "project",
    summary: project.oneLiner, approach: project.description, tags: project.stack,
    year: project.year, projectUrl, repositoryUrl,
    linkLabel: repositoryUrl ? "View project on GitHub" : "Visit live project",
    sourceUrl: repositoryUrl ? `${repositoryUrl}#readme` : "https://github.com/ShubhamTiwari909/astro-space-portfolio/tree/main/src/content",
    sourceLabel: repositoryUrl ? "Project README" : "Original project notes",
    milestones: [
      { id: "origin", period: "The starting point", title: "The question behind the work", description: detail.problem },
      { id: "present", period: `${project.year} · Documented project`, title: "What took shape", description: project.description, evidenceUrl: projectUrl },
      { id: "future", period: "Future interest · Speculative", title: "What could come next?", description: "Explore the design or engineering perspective in the observatory. Future directions are prompts for exploration, not claims about completed work." },
    ],
  };
});

export function getProject(slug: string) { return projects.find((project) => project.slug === slug); }
