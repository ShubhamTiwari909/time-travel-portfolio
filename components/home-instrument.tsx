"use client";
import { OrbitalInstrument } from "./orbital-instrument";
import { TimeControls } from "./time-controls";
import { useSceneClock } from "./use-scene-clock";
import * as ui from "@/styles/portfolio";
export function HomeInstrument() {
    const clock = useSceneClock();
    return <div className={ui.homeInstrument}><div className={ui.instrumentCoordinates}><span>EST. 2026</span><span>TIME IS A PERSPECTIVE</span></div><OrbitalInstrument time={clock.time}/><TimeControls clock={clock} minimal/></div>;
}
