"use client";
import { createContext, useContext, useLayoutEffect, useId, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Icon, ObservatoryMark } from "./icons";
import { readMotionPreference, useMotion } from "./motion-provider";
import { openingSessionKey } from "@/lib/opening-bootstrap";
import * as styles from "./opening-scene.styles";
import * as ui from "@/styles/portfolio";
let openedInMemory = false;
const steps = [
    { title: "Establishing the present", detail: "Viewport ready" },
    { title: "Loading the letterforms", detail: "Typography ready" },
    { title: "Aligning the timelines", detail: "Scene prepared" },
    { title: "Opening the observatory", detail: "Welcome aboard" },
];
type Identity = {
    name: string;
    role: string;
    yearsExperience: number;
};
type ReplayRequest = {
    id: number;
    trigger: HTMLButtonElement;
};
const ReplayContext = createContext<((trigger: HTMLButtonElement) => void) | null>(null);
export function OpeningSceneProvider({ children, ...identity }: Identity & {
    children: ReactNode;
}) {
    const [replay, setReplay] = useState<ReplayRequest | null>(null);
    return <ReplayContext value={(trigger) => setReplay((previous) => ({ id: (previous?.id ?? 0) + 1, trigger }))}>
    <OpeningScene key={replay?.id ?? 0} {...identity} replay={replay}/>
    {children}
  </ReplayContext>;
}
export function ReplayOpening() {
    const replay = useContext(ReplayContext);
    return <button type="button" className={ui.replayOpening} aria-haspopup="dialog" aria-controls="opening-scene" onClick={(event) => replay?.(event.currentTarget)}>Replay opening</button>;
}
function OpeningScene({ name, role, yearsExperience, replay }: Identity & {
    replay: ReplayRequest | null;
}) {
    const { reduced } = useMotion();
    const dialogRef = useRef<HTMLDialogElement>(null);
    const dismissRef = useRef<((animate: boolean) => void) | null>(null);
    const lastReplayRef = useRef(0);
    const [scene, setScene] = useState({ completed: 0, phase: "running" });
    const glowId = useId();
    useLayoutEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog)
            return;
        const bootstrap = window.__timeObservatoryOpening;
        let seen = openedInMemory;
        try {
            seen ||= sessionStorage.getItem(openingSessionKey) === "seen";
        }
        catch { /* Memory covers navigation when storage is unavailable. */ }
        const requestedReplay = replay && replay.id !== lastReplayRef.current ? replay : null;
        // Read the same source as the parser script before the motion store hydrates.
        const reducedAtStart = readMotionPreference();
        if (((seen || reducedAtStart || bootstrap?.expired) && !requestedReplay) || typeof dialog.showModal !== "function") {
            bootstrap?.release();
            return;
        }
        let disposed = false;
        let exiting = false;
        let started = false;
        const timers = new Set<number>();
        const frames = new Set<number>();
        const previousOverflow = document.body.style.overflow;
        const schedule = (callback: () => void, ms: number) => {
            const timer = window.setTimeout(() => { timers.delete(timer); callback(); }, ms);
            timers.add(timer);
            return timer;
        };
        const delay = (ms: number) => new Promise<void>((resolve) => schedule(resolve, ms));
        const nextPaint = () => new Promise<void>((resolve) => {
            const first = requestAnimationFrame(() => {
                frames.delete(first);
                const second = requestAnimationFrame(() => { frames.delete(second); resolve(); });
                frames.add(second);
            });
            frames.add(first);
        });
        const close = () => {
            if (disposed)
                return;
            dialog.close();
            document.body.style.overflow = previousOverflow;
            setScene({ completed: steps.length, phase: "done" });
            dismissRef.current = null;
            if (requestedReplay?.trigger.isConnected) {
                requestedReplay.trigger.focus({ preventScroll: true });
                return;
            }
            // Move past the dismissed modal without changing a deep link's scroll position.
            const main = document.getElementById("main-content");
            if (main) {
                const previousTabIndex = main.getAttribute("tabindex");
                main.setAttribute("tabindex", "-1");
                main.focus({ preventScroll: true });
                main.addEventListener("blur", () => {
                    if (previousTabIndex === null)
                        main.removeAttribute("tabindex");
                    else
                        main.setAttribute("tabindex", previousTabIndex);
                }, { once: true });
            }
        };
        const finish = (animate: boolean) => {
            if (disposed || exiting || !started)
                return;
            exiting = true;
            timers.forEach((timer) => window.clearTimeout(timer));
            timers.clear();
            frames.forEach((frame) => cancelAnimationFrame(frame));
            frames.clear();
            openedInMemory = true;
            try {
                sessionStorage.setItem(openingSessionKey, "seen");
            }
            catch { /* The in-memory guard remains available. */ }
            if (animate && !reducedAtStart) {
                setScene({ completed: steps.length, phase: "leaving" });
                schedule(close, 480);
            }
            else
                close();
        };
        const active = () => !disposed && !exiting;
        // Hand off the visible SSR intro to the native modal before releasing the gate.
        dialog.showModal();
        started = true;
        if (requestedReplay)
            lastReplayRef.current = requestedReplay.id;
        document.body.style.overflow = "hidden";
        dismissRef.current = finish;
        bootstrap?.release();
        // Resource failures must never keep the portfolio behind the intro.
        schedule(() => finish(false), 4500);
        void (async () => {
            await delay(400);
            if (!active())
                return;
            setScene({ completed: 1, phase: "running" });
            await Promise.all([delay(550), document.fonts.ready.catch(() => undefined)]);
            if (!active())
                return;
            setScene({ completed: 2, phase: "running" });
            await Promise.all([delay(550), nextPaint()]);
            if (!active())
                return;
            setScene({ completed: 3, phase: "running" });
            await delay(600);
            if (!active())
                return;
            setScene({ completed: 4, phase: "running" });
            await delay(300);
            finish(true);
        })();
        return () => {
            disposed = true;
            timers.forEach((timer) => window.clearTimeout(timer));
            frames.forEach((frame) => cancelAnimationFrame(frame));
            dismissRef.current = null;
            if (started) {
                // A Strict Mode setup/cleanup retry must still honor an unfinished replay.
                if (requestedReplay && !exiting)
                    lastReplayRef.current = 0;
                dialog.close();
                document.body.style.overflow = previousOverflow;
            }
        };
    }, [reduced, replay]);
    const ready = scene.completed === steps.length;
    const currentStep = steps[Math.min(scene.completed, steps.length - 1)];
    const progress = scene.completed / steps.length * 100;
    return <dialog id="opening-scene" ref={dialogRef} className={styles.scene} data-phase={scene.phase} aria-labelledby="opening-title" aria-describedby="opening-status" onCancel={(event) => { event.preventDefault(); dismissRef.current?.(false); }}>
    <div className={styles.grid} aria-hidden="true"/>
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.brand}><ObservatoryMark small/><span>The Time<br />Observatory</span></div>
        <span className={styles.identity}>{name}<span>{role}</span></span>
      </header>

      <div className={styles.body}>
        <div className={styles.instrument} aria-hidden="true">
          <span className={styles.coordinate}>CHRONOLOGICAL ALIGNMENT / 001</span>
          <svg className={styles.dial} viewBox="0 0 440 440" fill="none">
            <defs><radialGradient id={glowId}><stop stopColor="#62f5ff" stopOpacity=".13"/><stop offset="1" stopColor="#62f5ff" stopOpacity="0"/></radialGradient></defs>
            <circle cx="220" cy="220" r="170" fill={`url(#${glowId})`}/>
            <circle className={styles.outerRing} cx="220" cy="220" r="195"/>
            <circle className={styles.tickRing} cx="220" cy="220" r="170"/>
            {Array.from({ length: 60 }, (_, index) => {
            const angle = index * Math.PI / 30;
            const inner = index % 5 === 0 ? 180 : 185;
            return <line key={index} x1={(220 + Math.sin(angle) * inner).toFixed(3)} y1={(220 - Math.cos(angle) * inner).toFixed(3)} x2={(220 + Math.sin(angle) * 190).toFixed(3)} y2={(220 - Math.cos(angle) * 190).toFixed(3)} className={index % 5 === 0 ? styles.majorTick : styles.minorTick}/>;
        })}
            <g className={styles.orbits}>
              <ellipse cx="220" cy="220" rx="157" ry="72" transform="rotate(-34 220 220)"/>
              <ellipse cx="220" cy="220" rx="157" ry="72" transform="rotate(34 220 220)"/>
              <circle cx="90" cy="145" r="4" fill="#ff9b45" stroke="none"/>
              <circle cx="350" cy="295" r="4" fill="#8ea5ff" stroke="none"/>
            </g>
            <circle className={styles.innerRing} cx="220" cy="220" r="107"/>
            <circle className={styles.progressRing} cx="220" cy="220" r="170" pathLength="100" style={{ "--opening-progress": progress } as CSSProperties}/>
            <g className={styles.hand}><path d="M220 53v24M212 53h16"/><circle cx="220" cy="53" r="3" fill="currentColor"/></g>
            <path className={styles.crosshair} d="M15 220h24M401 220h24M220 15v24M220 401v24"/>
          </svg>
          <div className={styles.dialCenter}><span>SEQUENCE POSITION</span><strong>{ready ? "04" : String(scene.completed + 1).padStart(2, "0")}<i> / 04</i></strong><div className={styles.segments}>{steps.map((step, index) => <i key={step.title} data-lit={index < scene.completed}/>)}</div></div>
          <div className={styles.eras}><span>PAST</span><span>PRESENT</span><span>FUTURE</span></div>
        </div>

        <div className={styles.copy}>
          <p className={styles.eyebrow}><span /> OPENING SEQUENCE</p>
          <h2 id="opening-title">A little time.<br /><em>A new perspective.</em></h2>
          <p className={styles.introduction}>Step into the work, the thinking,<br />and the possibilities between.</p>
          <ol className={styles.steps} aria-label="Opening steps">
            {steps.map((step, index) => {
            const complete = index < scene.completed;
            const current = index === scene.completed;
            return <li key={step.title} data-state={complete ? "complete" : current ? "current" : "pending"} aria-current={current ? "step" : undefined}>
                <span className={styles.stepMarker} aria-hidden="true">{complete ? <Icon name="check" width="14" height="14"/> : String(index + 1).padStart(2, "0")}</span>
                <span>{step.title}</span><span className={styles.stepState}>{complete ? "READY" : current ? "LOADING" : "QUEUED"}</span>
              </li>;
        })}
          </ol>
          <div className={styles.progress} role="progressbar" aria-label="Opening sequence progress" aria-valuemin={0} aria-valuemax={4} aria-valuenow={scene.completed} aria-valuetext={`${scene.completed} of 4 steps complete`}><span style={{ width: `${progress}%` }}/></div>
          <p id="opening-status" className={styles.status} role="status" aria-atomic="true"><span />{ready ? "All set. Welcome to the present." : `${currentStep.title}…`}<span className={styles.readiness}>{scene.completed > 0 ? steps[scene.completed - 1].detail : "Initializing"}</span></p>
        </div>
      </div>

      <footer className={styles.footer}><span>{yearsExperience} YEARS OF WORK. A FEW SECONDS TO ARRIVE.</span><button type="button" data-skip-opening autoFocus onClick={() => dismissRef.current?.(false)}>Skip intro <Icon name="arrow" width="16" height="16"/><kbd>ESC</kbd></button></footer>
    </div>
  </dialog>;
}
