"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { projects } from "@/content/portfolio";
import { curvePath, period, pointAt } from "@/math/lissajous";
import { useSceneClock } from "./use-scene-clock";
import { TimeControls } from "./time-controls";
import { Icon } from "./icons";
import * as ui from "@/styles/portfolio";
const ratios = [[1, 2], [2, 3], [3, 4], [3, 2]] as const;
export function SignatureLab() {
    const [a, setA] = useState(2);
    const [b, setB] = useState(3);
    const [phase, setPhase] = useState(90);
    const clock = useSceneClock(0);
    const signature = useMemo(() => ({ a, b, phase: phase * Math.PI / 180 }), [a, b, phase]);
    const path = useMemo(() => curvePath(signature), [signature]);
    const marker = pointAt(clock.time / 60 * period(a, b), signature);
    const matched = projects.find((project) => project.signature[0] === a && project.signature[1] === b && phase === 90);
    return <div className={ui.signatureLab}><div className={ui.labStage}><div className={ui.stageTopline}><span>INSTRUMENT 02 / LISSAJOUS</span><span>{a}:{b} / {phase}°</span></div><svg className={ui.signatureSvg} viewBox="0 0 400 400" role="img" aria-label={`Lissajous curve with a ${a} to ${b} frequency ratio and ${phase} degree phase`}><defs><pattern id="lab-grid" width="25" height="25" patternUnits="userSpaceOnUse"><path d="M25 0H0v25" fill="none" stroke="#95aebc" strokeOpacity=".07" strokeWidth=".5"/></pattern></defs><rect width="400" height="400" fill="url(#lab-grid)"/><path d="M200 28v344M28 200h344" stroke="#89d0d8" strokeOpacity=".18" strokeWidth=".6"/><circle cx="200" cy="200" r="155" fill="none" stroke="#89d0d8" strokeOpacity=".1"/><path d={path} fill="none" stroke="#62f5ff" strokeWidth="1.3"/><circle cx={marker.x.toFixed(3)} cy={marker.y.toFixed(3)} r="4" fill="#e9fdff"/><circle cx={marker.x.toFixed(3)} cy={marker.y.toFixed(3)} r="10" stroke="#62f5ff" strokeOpacity=".35" fill="none"/><text x="210" y="35" fill="#7495a8" fontFamily="monospace" fontSize="9">Y</text><text x="362" y="216" fill="#7495a8" fontFamily="monospace" fontSize="9">X</text></svg><TimeControls clock={clock}/></div><div className={ui.labSettings}><div className={ui.eyebrow + " " + ui.muted}>TWO WAVES, ONE SIGNATURE</div><h2>A little change.<br /><em>A different shape.</em></h2><p>One wave moves horizontally. The other moves vertically. Their relationship draws a pattern you can come back to, every time.</p><fieldset className={ui.ratioFieldset}><legend>Frequency ratio <span className={ui.muted}>x : y</span></legend><div className={ui.ratioButtons}>{ratios.map(([x, y]) => <button key={`${x}-${y}`} className={a === x && b === y ? "active" : ""} aria-pressed={a === x && b === y} onClick={() => { setA(x); setB(y); clock.seek(0); }}>{x} : {y}</button>)}</div></fieldset><div className={ui.phaseControl}><label htmlFor="phase-control">Phase offset <span>{phase}°</span></label><input id="phase-control" type="range" min="0" max="180" step="5" value={phase} onChange={(event) => { setPhase(Number(event.target.value)); clock.pause(); }} aria-valuetext={`${phase} degrees`}/></div><div className={ui.signatureMatch} aria-live="polite">{matched ? <><span className={ui.eyebrow + " " + ui.present}><Icon name="check" width="15" height="15"/>SIGNATURE ALIGNED</span><h3>{matched.title}</h3><Link href={`/projects/${matched.slug}`} className={ui.textLink}>Open the project <Icon name="arrowUp" width="16" height="16"/></Link></> : <><span className={ui.eyebrow + " " + ui.muted}>YOUR OWN SIGNAL</span><p>This combination is yours. Set the phase to 90° to discover a project signature.</p><Link href="/projects" className={ui.textLink}>Explore every project <Icon name="arrowUp" width="16" height="16"/></Link></>}</div><button className={ui.textButton} onClick={() => { setA(2); setB(3); setPhase(90); clock.seek(0); }}><Icon name="reset" width="15" height="15"/>Reset the experiment</button></div></div>;
}
