"use client";
import { useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { skills } from "@/content/portfolio";
import { projectColors, projectsForSkill, skillGroups, type Skill } from "@/content/exhibits";
import { ProjectLink } from "./orbital-transition";
import { Icon } from "./icons";
import * as styles from "./skills-constellation.styles";
import * as ui from "@/styles/portfolio";
const groupColors: Record<string, string> = { INTERFACE: projectColors.sage, SUBSTRATE: projectColors.amber, OPERATIONS: projectColors.lilac };
const edges = skills.flatMap((skill) => skill.connections.map((id) => ({ from: skill, to: skills.find((item) => item.id === id)! }))).filter((edge) => edge.to);
export function SkillsConstellation() {
    const [selectedId, setSelectedId] = useState("react");
    const nodeRefs = useRef(new Map<string, HTMLButtonElement>());
    const selected = skills.find((skill) => skill.id === selectedId)!;
    const linkedProjects = projectsForSkill(selected);
    const neighbors = skills.filter((skill) => selected.connections.includes(skill.id) || skill.connections.includes(selectedId));
    const group = skillGroups.find((item) => item.id === selected.constellation)!;
    function choose(skill: Skill, focus = false) {
        setSelectedId(skill.id);
        if (focus)
            nodeRefs.current.get(skill.id)?.focus();
    }
    function navigate(event: KeyboardEvent<HTMLButtonElement>, current: Skill) {
        if (event.key === "Home" || event.key === "End") {
            event.preventDefault();
            choose(event.key === "Home" ? skills[0] : skills[skills.length - 1], true);
            return;
        }
        if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key))
            return;
        event.preventDefault();
        const horizontal = event.key === "ArrowLeft" || event.key === "ArrowRight";
        const sign = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1;
        const candidates = skills.filter((skill) => skill.id !== current.id && (horizontal ? skill.x - current.x : skill.y - current.y) * sign > 0);
        const distance = (skill: Skill) => Math.abs(horizontal ? skill.x - current.x : skill.y - current.y) + 2 * Math.abs(horizontal ? skill.y - current.y : skill.x - current.x);
        candidates.sort((a, b) => distance(a) - distance(b));
        if (candidates[0])
            choose(candidates[0], true);
    }
    return <div className={styles.constellation} style={{ "--skill-accent": groupColors[selected.constellation] } as CSSProperties}>
    <div className={styles.explorer}>
      <div className={styles.map} role="group" aria-label="Skills constellation" aria-describedby="constellation-instructions">
        <div className={styles.mapHeading}><span>THE TOOLKIT / {skills.length} STARS</span><span>SELECT TO CONNECT</span></div>
        <svg viewBox="0 0 800 620" aria-hidden="true" className={styles.connections}>
          <ellipse cx="222" cy="164" rx="183" ry="143" fill="#62f5ff03" stroke="#62f5ff0f" strokeDasharray="2 10"/>
          <ellipse cx="594" cy="207" rx="167" ry="149" fill="#ff9b4503" stroke="#ff9b450f" strokeDasharray="2 10"/>
          <ellipse cx="397" cy="451" rx="303" ry="136" fill="#8ea5ff03" stroke="#8ea5ff0f" strokeDasharray="2 10"/>
          {edges.map(({ from, to }) => <line key={`${from.id}-${to.id}`} x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke={from.id === selectedId || to.id === selectedId ? groupColors[selected.constellation] : "#394f5b"} strokeWidth={from.id === selectedId || to.id === selectedId ? "1.5" : ".6"} opacity={from.id === selectedId || to.id === selectedId ? ".8" : ".45"}/>)}
          {linkedProjects.length > 0 && <path d={`M${selected.x},${selected.y} Q780,${selected.y} 785,310`} fill="none" stroke="var(--skill-accent)" strokeWidth=".8" strokeDasharray="3 8" opacity=".35"/>}
          {skills.map((skill) => <g key={skill.id}>
            {skill.id === selectedId && <circle cx={skill.x} cy={skill.y} r="20" fill="var(--skill-accent)" fillOpacity=".08" stroke="var(--skill-accent)" strokeOpacity=".4"/>}
            <circle cx={skill.x} cy={skill.y} r={skill.id === selectedId ? 4 : 2.5} fill={groupColors[skill.constellation]} opacity={skill.id === selectedId || neighbors.includes(skill) ? 1 : .45}/>
          </g>)}
        </svg>
        <div className={styles.nodes}>
          {skills.map((skill) => <button key={skill.id} ref={(node) => { if (node)
            nodeRefs.current.set(skill.id, node);
        else
            nodeRefs.current.delete(skill.id); }} className={styles.node} type="button" style={{ left: `${skill.x / 8}%`, top: `${skill.y / 6.2}%`, "--node-color": groupColors[skill.constellation] } as CSSProperties} tabIndex={skill.id === selectedId ? 0 : -1} aria-label={`Explore ${skill.name}`} aria-pressed={skill.id === selectedId} aria-controls="skill-reading" data-connected={neighbors.includes(skill)} onClick={() => choose(skill)} onKeyDown={(event) => navigate(event, skill)}>
            <span className={styles.nodeLabel}>{skill.name}</span>
          </button>)}
        </div>
        <div className={styles.legend}>{skillGroups.map((item) => <span key={item.id}><i style={{ background: groupColors[item.id] }}/>{item.label}</span>)}</div>
      </div>
      <div className={styles.selector}><label htmlFor="constellation-skill">Choose a star</label><select id="constellation-skill" value={selectedId} onChange={(event) => setSelectedId(event.target.value)}>{skillGroups.map((item) => <optgroup key={item.id} label={item.label}>{skills.filter((skill) => skill.constellation === item.id).map((skill) => <option key={skill.id} value={skill.id}>{skill.name}</option>)}</optgroup>)}</select></div>
      <p className={styles.instructions} id="constellation-instructions"><span className={styles.keyboardHint}>Use the arrow keys between stars, or </span>choose a skill to see its connections and related work.</p>
    </div>
    <div className={styles.reading} id="skill-reading" aria-live="polite" aria-atomic="false">
      <div className={styles.readingTop}><span className={styles.eyebrow}>{group.label}</span><span className={styles.tier}>{selected.tier.toLowerCase()}</span></div>
      <h3>{selected.name}</h3><p className={styles.groupNote}>{group.note}</p>
      <div className={styles.linkedHeading}><Icon name="branch" width="15" height="15"/><span>{linkedProjects.length ? `${linkedProjects.length} connected project${linkedProjects.length === 1 ? "" : "s"}` : "The wider toolkit"}</span></div>
      {linkedProjects.length ? <div className={styles.projectLinks}>{linkedProjects.map((project) => <ProjectLink color={project.color} key={project.slug} href={`/projects/${project.slug}`} className={styles.projectLink} style={{ "--project-accent": projectColors[project.color] } as CSSProperties}><span><small>{project.category}</small><strong>{project.title}</strong></span><Icon name="arrowUp" width="16" height="16"/></ProjectLink>)}</div> : <div className={styles.wider}><p>A part of my broader toolkit, beyond the technologies named in the featured projects.</p><a className={ui.textLink} href="#experience">Explore my experience <Icon name="arrowUp" width="14" height="14"/></a></div>}
      {neighbors.length > 0 && <div className={styles.neighbors}><span className={styles.eyebrow}>NEIGHBORING STARS</span><div>{neighbors.map((skill) => <button key={skill.id} onClick={() => choose(skill)}>{skill.name}</button>)}</div></div>}
      <span className={styles.coordinates}>A constellation of tools. A collection of real work.</span>
    </div>
  </div>;
}
