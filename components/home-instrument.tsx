"use client";
import { OrbitalInstrument } from "./orbital-instrument";
import { TimeControls } from "./time-controls";
import { useSceneClock } from "./use-scene-clock";

export function HomeInstrument() {
  const clock = useSceneClock();
  return <div className="home-instrument"><div className="instrument-coordinates"><span>EST. 2026</span><span>TIME IS A PERSPECTIVE</span></div><OrbitalInstrument time={clock.time} /><TimeControls clock={clock} minimal /></div>;
}
