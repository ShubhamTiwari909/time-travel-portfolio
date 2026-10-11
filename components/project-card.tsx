import { Icon } from "./icons";
import { ProjectExhibit } from "./project-exhibit";
import { ProjectLink } from "./orbital-transition";
import type { Project } from "@/content/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article className="project-card"><ProjectExhibit project={project} /><div className="project-card-meta"><span>0{index + 1} / {project.category}</span><span className="live-indicator"><span className="status-dot" />{project.year}</span></div><ProjectLink color={project.color} href={`/projects/${project.slug}`} className="project-title-link"><h3>{project.title}</h3><Icon name="arrowUp" /></ProjectLink><p>{project.summary}</p><div className="tag-list">{project.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div></article>;
}
