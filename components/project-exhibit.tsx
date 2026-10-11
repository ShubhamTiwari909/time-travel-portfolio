"use client";
import { useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { lensReadings, projectColors } from "@/content/exhibits";
import type { Project } from "@/content/portfolio";
import { ProjectArt } from "./project-art";
import { ProjectLink } from "./orbital-transition";
import { Icon } from "./icons";
import { useMotion } from "./motion-provider";
import * as styles from "./project-exhibit.styles";
import * as ui from "@/styles/portfolio";
export function ProjectExhibit({ project }: {
    project: Project;
}) {
    const [hovered, setHovered] = useState(false);
    const [mode, setMode] = useState<"auto" | "open" | "closed">("auto");
    const stageRef = useRef<HTMLDivElement>(null);
    const { reduced } = useMotion();
    const reading = lensReadings[project.slug];
    const open = mode === "open" || mode === "auto" && hovered;
    const panelId = `time-lens-${project.slug}`;
    function moveLens(event: PointerEvent<HTMLDivElement>) {
        if (reduced || event.pointerType !== "mouse")
            return;
        const rect = event.currentTarget.getBoundingClientRect();
        stageRef.current?.style.setProperty("--lens-x", `${event.clientX - rect.left}px`);
        stageRef.current?.style.setProperty("--lens-y", `${event.clientY - rect.top}px`);
    }
    return <div className={ui.projectArtLink + " " + styles.exhibit} ref={stageRef} data-lens-open={open} style={{ "--exhibit-accent": projectColors[project.color] } as CSSProperties} onPointerEnter={(event) => { if (event.pointerType === "mouse")
        setHovered(true); }} onPointerLeave={() => { setHovered(false); if (mode === "closed")
        setMode("auto"); }} onPointerMove={moveLens} onKeyDown={(event) => { if (event.key === "Escape") {
        setMode("closed");
        setHovered(false);
    } }}>
    <ProjectArt project={project}/>
    <div id={panelId} className={styles.lens} aria-hidden={!open} inert={!open}>
      <div className={styles.blueprint} aria-hidden="true"/>
      <div className={styles.reading}>
        <span className={styles.eyebrow}>{reading.label}</span>
        <h4>{reading.title}</h4>
        <p>{reading.note}</p>
        {reading.code && <pre><code>{reading.code}</code></pre>}
        {reading.flow && <ol className={styles.flow}>{reading.flow.map((step, index) => <li key={step}><span>0{index + 1}</span>{step}{index < reading.flow!.length - 1 && <Icon name="arrow" width="12" height="12"/>}</li>)}</ol>}
        <small>{reading.source}</small>
      </div>
    </div>
    <div className={styles.controls}>
      <button type="button" aria-label={`Time lens for ${project.title}`} aria-expanded={open} aria-controls={panelId} onClick={() => setMode(open ? "closed" : "open")}><Icon name="spark" width="14" height="14"/><span>{open ? "Close lens" : "Time lens"}</span></button>
      {project.repositoryUrl ? <a href={project.repositoryUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`} title={project.linkLabel}><Icon name="arrowUp" width="16" height="16"/></a> : <ProjectLink color={project.color} href={`/projects/${project.slug}`} aria-label={`Open ${project.title} case study`}><Icon name="arrowUp" width="16" height="16"/></ProjectLink>}
    </div>
  </div>;
}
