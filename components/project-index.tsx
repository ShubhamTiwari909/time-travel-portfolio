"use client";
import { useState } from "react";
import { projects } from "@/content/portfolio";
import { ProjectCard } from "./project-card";
import * as ui from "@/styles/portfolio";
const filters = ["All work", ...new Set(projects.map((project) => project.category))];
export function ProjectIndex() {
    const [filter, setFilter] = useState("All work");
    const selected = projects.filter((project) => filter === "All work" || project.category === filter);
    return <><div className={ui.projectFilters} aria-label="Filter projects">{filters.map((item) => <button key={item} className={filter === item ? "active" : ""} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}{item === "All work" && <span className={ui.countBadge}>04</span>}</button>)}</div><div className={ui.projectGrid + " " + ui.archiveGrid} aria-live="polite">{selected.map((project) => <ProjectCard key={project.slug} project={project} index={projects.indexOf(project)}/>)}</div></>;
}
