"use client";
import { Icon } from "./icons";
import { useSceneClock } from "./use-scene-clock";
import { useId } from "react";

export function TimeControls({ clock, minimal = false }: { clock: ReturnType<typeof useSceneClock>; minimal?: boolean }) {
  const id = useId();
  return <div className={`time-controls ${minimal ? "minimal" : ""}`}><div className="time-control-label"><label htmlFor={id}>Scene time</label><span>{clock.playing ? (clock.rate < 0 ? "Reversing" : "Playing") : "Paused"} <span className="tiny-dot">·</span> {clock.time.toFixed(1).padStart(4, "0")} s</span></div><input id={id} className="time-range" type="range" min="0" max="60" step="0.1" value={clock.time} onChange={(event) => clock.seek(Number(event.target.value))} aria-valuetext={`${clock.time.toFixed(1)} seconds`} /><div className="time-buttons"><div className="playback-buttons"><button className="icon-button" aria-label="Reverse scene time" title="Reverse scene time" disabled={clock.reduced} onClick={() => clock.play(-1)}><Icon name="reverse" width="16" height="16" /></button><button className="icon-button primary-play" aria-label={clock.playing ? "Pause scene time" : "Play scene time"} title={clock.playing ? "Pause" : "Play"} disabled={clock.reduced} onClick={() => clock.playing ? clock.pause() : clock.play()}><Icon name={clock.playing ? "pause" : "play"} width="16" height="16" /></button><button className="icon-button" aria-label="Reset scene time" title="Reset scene time" onClick={() => clock.seek(0)}><Icon name="reset" width="16" height="16" /></button></div><span className="control-hint">{clock.reduced ? "Motion off · Scrub to explore" : "Every moment is yours to explore"}</span></div></div>;
}
