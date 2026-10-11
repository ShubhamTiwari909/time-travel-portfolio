"use client";
import { useState } from "react";
import { projects } from "@/content/portfolio";
import { ProjectCard } from "./project-card";
const filters = ["All work", "Design systems", "Content platforms", "AI & experimentation", "Personal portfolio"];
export function ProjectIndex() {
  const [filter, setFilter] = useState("All work");
  const selected = projects.filter((project) => filter === "All work" || project.category === filter);
  return <><div className="project-filters" aria-label="Filter projects">{filters.map((item) => <button key={item} className={filter === item ? "active" : ""} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}{item === "All work" && <span className="count-badge">04</span>}</button>)}</div><div className="project-grid archive-grid" aria-live="polite">{selected.map((project) => <ProjectCard key={project.slug} project={project} index={projects.indexOf(project)} />)}</div></>;
}
