"use client";
import { useEffect, useState } from "react";
import type { Project } from "@/content/portfolio";
export function MilestoneReader({ project }: { project: Project }) {
  const [selected, setSelected] = useState("present");
  const [message, setMessage] = useState("");
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("milestone");
    if (!id) return;
    /* eslint-disable react-hooks/set-state-in-effect -- Read a committed URL checkpoint after hydration. */
    if (project.milestones.some((milestone) => milestone.id === id)) setSelected(id);
    else setMessage("That checkpoint is unavailable. Showing the documented project.");
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [project]);
  const milestone = project.milestones.find((item) => item.id === selected)!;
  return <div className="milestone-reader"><div className="checkpoint-tabs">{project.milestones.map((item, index) => <button className={selected === item.id ? "active" : ""} key={item.id} aria-pressed={selected === item.id} onClick={() => { setSelected(item.id); setMessage(""); const url = new URL(window.location.href); url.searchParams.set("milestone", item.id); window.history.replaceState(null, "", url); }}><span>0{index + 1}</span>{item.id === "origin" ? "The beginning" : item.id === "present" ? "The present" : "Possibilities"}</button>)}</div><div aria-live="polite" className="milestone-content"><span className="eyebrow muted">{milestone.period}</span><h3>{milestone.title}</h3><p>{milestone.description}</p></div>{message && <p role="status" className="small muted">{message}</p>}<p className="small muted">These are reading perspectives. Exact historical dates and prototype artifacts haven’t been supplied.</p></div>;
}
