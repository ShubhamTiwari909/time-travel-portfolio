import Link from "next/link";
import { Icon } from "./icons";
import { ProjectArt } from "./project-art";
import type { Project } from "@/content/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article className="project-card"><Link href={`/projects/${project.slug}`} className="project-art-link" tabIndex={-1} aria-hidden="true"><ProjectArt project={project} /></Link><div className="project-card-meta"><span>0{index + 1} / {project.category}</span><span className="live-indicator"><span className="status-dot" />{project.year}</span></div><Link href={`/projects/${project.slug}`} className="project-title-link"><h3>{project.title}</h3><Icon name="arrowUp" /></Link><p>{project.summary}</p><div className="tag-list">{project.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div></article>;
}
