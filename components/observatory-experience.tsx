"use client";
import Link from "next/link";
import { Component, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { projects } from "@/content/portfolio";
import { commit, createJourney, deserializeJourney, effectiveHistory, reconstruct, returnToChoice, STORAGE_KEY, switchBranch, type Journey, type JourneyAction } from "@/engine/history";
import { OrbitalInstrument } from "./orbital-instrument";
import { TimeControls } from "./time-controls";
import { useSceneClock } from "./use-scene-clock";
import { Icon } from "./icons";

const times = { origin: 0, present: 30, future: 60 };
const chapters = [{ id: "origin", label: "The beginning", color: "past" }, { id: "present", label: "The present", color: "present" }, { id: "future", label: "Possible futures", color: "future" }] as const;

function Observatory() {
  const [journey, setJourney] = useState<Journey>(createJourney);
  const [saved, setSaved] = useState<Journey | null>(null);
  const [ready, setReady] = useState(false);
  const [started, setStarted] = useState(false);
  const [message, setMessage] = useState("");
  const [storageAvailable, setStorageAvailable] = useState(true);
  const perspectiveRef = useRef<HTMLDivElement>(null);
  const focusPerspective = useRef(false);
  const clock = useSceneClock(30);
  const { seek } = clock;
  const state = useMemo(() => reconstruct(journey), [journey]);
  const project = projects.find((item) => item.slug === state.project)!;
  const milestone = project.milestones.find((item) => item.id === state.milestone)!;
  const history = effectiveHistory(journey);

  useEffect(() => {
    if (focusPerspective.current) {
      perspectiveRef.current?.focus({ preventScroll: true });
      focusPerspective.current = false;
    }
  }, [state.perspective]);

  useEffect(() => {
    // Restore browser-owned data after hydration, while retaining an identical server render.
    /* eslint-disable react-hooks/set-state-in-effect */
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setSaved(deserializeJourney(raw));
    } catch (error) {
      setMessage(error instanceof Error && error.message.startsWith("Saved") ? error.message : "Local storage is unavailable. You can still explore; this journey stays in this tab.");
      if (!(error instanceof Error && error.message.startsWith("Saved"))) setStorageAvailable(false);
    }
    const query = new URLSearchParams(window.location.search);
    let initial = createJourney();
    const selected = query.get("project");
    const checkpoint = query.get("milestone");
    if (selected && projects.some((item) => item.slug === selected)) initial = commit(initial, { type: "project", slug: selected }, 30);
    if (checkpoint && chapters.some((item) => item.id === checkpoint)) {
      const id = checkpoint as keyof typeof times;
      initial = commit(initial, { type: "milestone", id }, times[id]);
      seek(times[id]);
    }
    if ((selected && !projects.some((item) => item.slug === selected)) || (checkpoint && !chapters.some((item) => item.id === checkpoint))) setMessage("That checkpoint is unavailable. Here is the current project instead.");
    setJourney(initial);
    setReady(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [seek]);

  useEffect(() => {
    if (!ready || !started || !storageAvailable) return;
    const save = () => {
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(journey)); }
      catch { setStorageAvailable(false); setMessage("Your browser could not save this journey. Your choices still work in this tab."); }
    };
    const timer = window.setTimeout(save, 200);
    return () => { window.clearTimeout(timer); save(); };
  }, [journey, ready, started, storageAvailable]);

  function choose(action: JourneyAction) {
    try {
      if (action.type === "perspective") focusPerspective.current = true;
      setJourney(commit(journey, action, clock.time));
      setStarted(true);
      setSaved(null);
      setMessage(action.type === "perspective" ? "Your choice is saved in this path. Return to the choice to explore the other perspective." : "");
    } catch (error) { setMessage(error instanceof Error ? error.message : "This choice could not be saved."); }
  }
  function checkpoint(id: keyof typeof times) { choose({ type: "milestone", id }); seek(times[id]); }
  function switchPath(id: string) {
    const next = switchBranch(journey, id);
    setJourney(next); setStarted(true); setSaved(null);
    const last = effectiveHistory(next).at(-1); seek(last?.sceneTime ?? 30);
    setMessage("You’re back on this path. Your other paths are still here.");
  }
  function reset() {
    setJourney(createJourney()); setSaved(null); setStarted(true); seek(30);
    try { localStorage.removeItem(STORAGE_KEY); } catch { /* Only this application's record is affected. */ }
    setMessage("A fresh journey. Pick a project and see where it takes you.");
  }
  function exportJourney() {
    const url = URL.createObjectURL(new Blob([JSON.stringify(journey, null, 2)], { type: "application/json" }));
    const anchor = document.createElement("a"); anchor.href = url; anchor.download = "time-observatory-journey.json"; anchor.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return <div className="observatory-experience">
    {saved && <div className="restore-banner"><div><strong>A path you’ve walked before.</strong><span>Your saved journey has {saved.branches.length} {saved.branches.length === 1 ? "path" : "paths"}. Continue, or make a fresh start.</span></div><button className="button button-small" onClick={() => { setJourney(saved); setSaved(null); setStarted(true); seek(effectiveHistory(saved).slice(0, saved.cursor).at(-1)?.sceneTime ?? 30); }}>Continue saved journey <Icon name="arrow" width="16" height="16" /></button><button className="text-button" onClick={reset}>Start fresh</button></div>}
    <div className="observatory-projects" aria-label="Choose a project">{projects.map((item, index) => <button key={item.slug} className={item.slug === state.project ? "active" : ""} aria-pressed={item.slug === state.project} onClick={() => { choose({ type: "project", slug: item.slug }); seek(30); }}><span>0{index + 1}</span>{item.title}<span className="project-year">{item.year}</span></button>)}</div>
    <div className="observatory-layout"><div className="observatory-stage"><div className="stage-topline"><span><span className="status-dot" />INSTRUMENT 01 / ORBITAL CLOCK</span><span>SVG / {clock.reduced ? "STILL VIEW" : "INTERACTIVE"}</span></div><OrbitalInstrument time={clock.time} /><TimeControls clock={clock} /></div><section className="observation-panel" aria-label="Selected project and perspective"><div className="eyebrow muted">OBSERVING / {project.category}</div><h2>{project.title}</h2><div className="checkpoint-tabs" aria-label="Project checkpoints">{chapters.map((chapter, i) => <button key={chapter.id} className={`${chapter.color} ${state.milestone === chapter.id ? "active" : ""}`} aria-pressed={state.milestone === chapter.id} onClick={() => checkpoint(chapter.id)}><span>0{i + 1}</span>{chapter.label}</button>)}</div><div className="milestone-content" aria-live="polite" aria-atomic="true"><div className={`eyebrow ${chapters.find((item) => item.id === state.milestone)!.color}`}>{milestone.period}</div><h3>{milestone.title}</h3><p>{milestone.description}</p>{milestone.evidenceUrl && <a href={milestone.evidenceUrl} target="_blank" rel="noreferrer" className="text-link">See the live project <Icon name="arrowUp" width="15" height="15" /></a>}</div><div className="checkpoint-navigation"><button className="text-button" disabled={state.milestone === "origin"} onClick={() => checkpoint(state.milestone === "future" ? "present" : "origin")}>← Previous checkpoint</button><button className="text-button" disabled={state.milestone === "future"} onClick={() => checkpoint(state.milestone === "origin" ? "present" : "future")}>Next checkpoint →</button></div><div className="perspective-panel" ref={perspectiveRef} tabIndex={-1}><span className="eyebrow muted">YOUR JOURNEY / CHOOSE A PERSPECTIVE</span>{!state.perspective ? <><h3>Same work. A different lens.</h3><p>Choose a path. You can come back and try the other.</p><div className="perspective-choices"><button className="button" onClick={() => choose({ type: "perspective", value: "design" })}>Explore the design <Icon name="arrow" width="16" height="16" /></button><button className="button" onClick={() => choose({ type: "perspective", value: "engineering" })}>Explore the engineering <Icon name="arrow" width="16" height="16" /></button></div></> : <><h3>{state.perspective === "design" ? "The shape of the experience." : "The system underneath."}</h3><p>{state.perspective === "design" ? project.problem : project.approach}</p><button className="text-link text-button" onClick={() => { focusPerspective.current = true; setJourney(returnToChoice(journey)); clock.pause(); setMessage("You’ve returned to your choice. Choose differently to create another path; the original stays saved."); }}><Icon name="branch" width="16" height="16" />Return to your choice</button></>}</div><Link href={`/projects/${project.slug}?milestone=${state.milestone}`} className="text-link case-study-link">Read the full project <Icon name="arrowUp" width="16" height="16" /></Link></section></div>
    <p className="journey-message" role="status">{message || "Scene time moves the instrument. Project checkpoints change what you read. Your journey remembers your choices."}</p>
    <details className="journey-panel" open={journey.branches.length > 1}><summary><span><Icon name="branch" />Your journey <span className="count-badge">{journey.branches.length} {journey.branches.length === 1 ? "path" : "paths"}</span></span><span className="muted">Revisit a choice <Icon name="chevron" width="16" height="16" /></span></summary><div className="journey-body"><div><p className="muted small">Each path preserves its own choices. Rewinding scene time keeps this history intact.</p><ol className="branch-list">{journey.branches.map((branch, index) => <li key={branch.id}><button className={branch.id === journey.activeBranchId ? "active" : ""} aria-pressed={branch.id === journey.activeBranchId} onClick={() => switchPath(branch.id)}><span className="branch-node" /><span><strong>{branch.label}</strong><small>{branch.parentId ? `Branches from path ${journey.branches.findIndex((item) => item.id === branch.parentId) + 1}` : "Original path"} · {effectiveHistory(journey, branch.id).length} choices</small></span><span className="branch-index">0{index + 1}</span>{branch.id === journey.activeBranchId && <Icon name="check" width="16" height="16" />}</button></li>)}</ol></div><div className="journey-history"><span className="eyebrow muted">CHOICES ON THIS PATH</span>{history.length ? <ol>{history.map((event, index) => <li key={event.id} className={index >= journey.cursor ? "discarded-event" : ""}><button onClick={() => { setJourney({ ...journey, cursor: index + 1 }); setStarted(true); seek(event.sceneTime); }} aria-label={`Return to choice ${index + 1}`}><span>{index + 1}</span>{event.action.type === "perspective" ? `${event.action.value} perspective` : event.action.type === "project" ? projects.find((item) => item.slug === (event.action as { type: "project"; slug: string }).slug)?.title : `${event.action.id} checkpoint`}</button></li>)}</ol> : <p className="muted small">Your first choice begins here.</p>}<div className="journey-actions"><button className="text-button" onClick={exportJourney}>Export journey <Icon name="download" width="14" height="14" /></button><button className="text-button" onClick={reset}>Start again <Icon name="reset" width="14" height="14" /></button></div><span className="small muted">{storageAvailable ? "Saved on this device. No account needed." : "In-memory journey · Storage unavailable."}</span></div></div></details>
  </div>;
}

class ExperienceBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (this.state.failed) return <div className="fallback-panel"><h2>A moment to regroup.</h2><p>The instrument couldn’t load. All of the work is still available in the direct portfolio.</p><Link href="/projects" className="button button-primary">Explore the projects <Icon name="arrow" /></Link><button className="text-button" onClick={() => this.setState({ failed: false })}>Try the instrument again</button></div>;
    return this.props.children;
  }
}
export function ObservatoryExperience() { return <ExperienceBoundary><Observatory /></ExperienceBoundary>; }
