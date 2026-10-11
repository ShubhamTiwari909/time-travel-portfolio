import { Icon } from "./icons";
import { ProjectExhibit } from "./project-exhibit";
import { ProjectLink } from "./orbital-transition";
import type { Project } from "@/content/portfolio";
import * as ui from "@/styles/portfolio";
export function ProjectCard({ project, index }: {
    project: Project;
    index: number;
}) {
    return <article className={ui.projectCard}><ProjectExhibit project={project}/><div className={ui.projectCardMeta}><span>0{index + 1} / {project.category}</span><span className={ui.liveIndicator}><span className={ui.statusDot}/>{project.year}</span></div><ProjectLink color={project.color} href={`/projects/${project.slug}`} className={ui.projectTitleLink}><h3>{project.title}</h3><Icon name="arrowUp"/></ProjectLink><p>{project.summary}</p><div className={ui.tagList}>{project.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div></article>;
}
