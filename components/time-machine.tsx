"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons";
import { readMotionPreference, useMotion } from "@/components/motion-provider";
import { TimeMachineFallback } from "./time-machine-fallback";
import type { DriveController, DriveEra } from "@/lib/time-machine-scene";
import * as styles from "./time-machine.styles";
import * as ui from "@/styles/portfolio";

const destinations: { id: DriveEra; label: string; arrival: string }[] = [
    { id: "past", label: "01 / PAST", arrival: "Past coordinates locked." },
    { id: "present", label: "02 / PRESENT", arrival: "Present coordinates locked." },
    { id: "future", label: "03 / FUTURE", arrival: "Future coordinates locked." },
];

export function TimeMachine() {
    const sectionRef = useRef<HTMLElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const controllerRef = useRef<DriveController | null>(null);
    const eraRef = useRef<DriveEra>("present");
    const { reduced } = useMotion();
    const [era, setEra] = useState<DriveEra>("present");
    const [state, setState] = useState<"standby" | "ready" | "fallback">("standby");
    const [canvasVersion, setCanvasVersion] = useState(0);
    const [jumping, setJumping] = useState(false);
    const [status, setStatus] = useState("Awaiting destination.");

    // Next's Activity preserves DOM/state while effects release the renderer.
    // Reset transient readiness before hiding so return visits show the diagram.
    useLayoutEffect(() => () => {
        setState("standby");
        // A retained canvas cannot immediately reuse a deliberately lost context.
        setCanvasVersion((version) => version + 1);
        setJumping(false);
        setStatus("Awaiting destination.");
    }, []);

    useEffect(() => {
        const section = sectionRef.current;
        const canvas = canvasRef.current;
        if (!section || !canvas) return;
        let disposed = false;
        let requested = false;
        let visible = false;
        let controller: DriveController | null = null;

        async function loadScene() {
            if (requested || disposed) return;
            requested = true;
            try {
                const { createTimeMachine } = await import("@/lib/time-machine-scene");
                if (disposed) return;
                controller = createTimeMachine(canvas!, {
                    reduced: readMotionPreference(),
                    era: eraRef.current,
                    onArrival: () => {
                        if (disposed) return;
                        setJumping(false);
                        setStatus(destinations.find((item) => item.id === eraRef.current)!.arrival);
                    },
                    onUnavailable: () => {
                        if (disposed) return;
                        setState("fallback");
                        setJumping(false);
                        setStatus("Static view · flight controls unavailable.");
                    },
                });
                if (!controller.available) {
                    controller.dispose();
                    return;
                }
                controllerRef.current = controller;
                controller.setVisible(visible && !document.hidden);
                setState("ready");
                setStatus("Drive ready. Choose your destination.");
            } catch {
                if (!disposed) {
                    setState("fallback");
                    setStatus("Static view · flight controls unavailable.");
                }
            }
        }
        const nearby = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                void loadScene();
                nearby.disconnect();
            }
        }, { rootMargin: "200px" });
        const inView = new IntersectionObserver(([entry]) => {
            visible = entry.isIntersecting;
            controller?.setVisible(visible && !document.hidden);
        });
        const visibility = () => controller?.setVisible(visible && !document.hidden);
        nearby.observe(section);
        inView.observe(canvas);
        document.addEventListener("visibilitychange", visibility);
        return () => {
            disposed = true;
            nearby.disconnect();
            inView.disconnect();
            document.removeEventListener("visibilitychange", visibility);
            controller?.dispose();
            controllerRef.current = null;
        };
    }, [canvasVersion]);

    useEffect(() => { controllerRef.current?.setReduced(reduced); }, [reduced]);

    function chooseEra(destination: DriveEra) {
        eraRef.current = destination;
        setEra(destination);
        controllerRef.current?.setEra(destination);
        setStatus(state === "ready" ? "Destination set. Ready to jump." : "Destination preview selected.");
    }

    function jump() {
        const controller = controllerRef.current;
        if (!controller || state !== "ready" || jumping) return;
        setJumping(!reduced);
        setStatus(reduced ? "Coordinates locked." : "Jump sequence engaged…");
        controller.jump();
    }

    return <section id="chrono-drive" ref={sectionRef} className={styles.section} data-era={era} data-scene={state} aria-labelledby="drive-title">
        <div className={styles.ambient} aria-hidden="true"/>
        <div className={`${styles.header} ${ui.wrap}`}>
            <div><div className={styles.eyebrow}><span/>INTERMISSION / THE CHRONO DRIVE</div><h2 id="drive-title" className={styles.title}>Time, <em>re-engineered.</em></h2></div>
            <p className={styles.intro}>A small detour through a possible future. Pick a timeline. Take the machine for a spin.</p>
        </div>
        <div className={styles.viewport}>
            <div className={styles.fallback} data-hidden={state === "ready"}><TimeMachineFallback /></div>
            <canvas key={canvasVersion} ref={canvasRef} className={styles.canvas} data-ready={state === "ready"} aria-hidden="true"/>
            <div className={styles.label} aria-hidden="true"><span className={styles.labelNumber}>SHB—01 / TEMPORAL CRAFT</span><span className="mobile:hidden">GYRO CORE / ONLINE<br/>PROPULSION / ION DRIVE</span></div>
            <div className={styles.crosshair} aria-hidden="true"><Icon name="spark" width="16" height="16"/> {era.toUpperCase()} SECTOR</div>
            <p className={styles.guide}>{state === "fallback" ? "THE CHRONO DRIVE / STATIC EDITION" : "DRAG TO ROTATE · SCROLL TO CONTINUE"}</p>
        </div>
        <div className={`${styles.controls} ${ui.wrap}`}>
            <div className={styles.destination}><span className={styles.tiny}>DESTINATION / SELECT A TIMELINE</span><div className={styles.eras} role="group" aria-label="Time machine destination">{destinations.map((item) => <button type="button" key={item.id} className={styles.era} aria-pressed={era === item.id} disabled={jumping} onClick={() => chooseEra(item.id)}>{item.label}</button>)}</div></div>
            <div className={styles.rotate} role="group" aria-label="Rotate the time machine">
                <button type="button" aria-label="Rotate machine left" disabled={state !== "ready"} onClick={() => controllerRef.current?.rotate(-0.35)}><Icon name="chevron" className="rotate-180" width="16" height="16"/></button>
                <button type="button" aria-label="Reset machine view" disabled={state !== "ready"} onClick={() => controllerRef.current?.reset()}><Icon name="reset" width="16" height="16"/></button>
                <button type="button" aria-label="Rotate machine right" disabled={state !== "ready"} onClick={() => controllerRef.current?.rotate(0.35)}><Icon name="chevron" width="16" height="16"/></button>
            </div>
            <div className={styles.jump}><button type="button" className={styles.jumpButton} disabled={state !== "ready" || jumping} onClick={jump}><Icon name="spark" width="16" height="16"/>{jumping ? "JUMPING…" : "ENGAGE JUMP"}<Icon name="arrow" width="16" height="16"/></button><p role="status" className={styles.status}>{status}</p></div>
        </div>
        <p className="sr-only">An imaginative spacecraft with luminous gyro rings, an angular hull, and a clock-like reactor. This decorative exhibit previews three eras and does not change your saved portfolio journey.</p>
    </section>;
}
