"use client";
import Link from "next/link";
import { createContext, useContext, useEffect, useRef, useState, type ComponentProps, type CSSProperties, type ReactNode } from "react";
import { projectColors } from "@/content/exhibits";
import { useMotion } from "./motion-provider";
import * as styles from "./orbital-transition.styles";
type Orbit = {
    id: number;
    x: number;
    y: number;
    color: string;
};
const OrbitContext = createContext<(color: string, origin: {
    x: number;
    y: number;
}) => void>(() => { });
export function OrbitalTransitionProvider({ children }: {
    children: ReactNode;
}) {
    const { reduced } = useMotion();
    const [orbit, setOrbit] = useState<Orbit | null>(null);
    const sequence = useRef(0);
    useEffect(() => {
        if (!orbit)
            return;
        const timer = window.setTimeout(() => setOrbit(null), reduced ? 0 : 760);
        return () => window.clearTimeout(timer);
    }, [orbit, reduced]);
    function begin(color: string, origin: {
        x: number;
        y: number;
    }) {
        if (reduced)
            return;
        setOrbit({ id: ++sequence.current, ...origin, color: projectColors[color] ?? projectColors.sage });
    }
    return <OrbitContext value={begin}>
    {children}
    {orbit && !reduced && <div key={orbit.id} className={styles.portal} aria-hidden="true" style={{
                "--orbit-x": `${orbit.x}px`, "--orbit-y": `${orbit.y}px`, "--orbit-color": orbit.color,
            } as CSSProperties} onAnimationEnd={(event) => { if (event.target === event.currentTarget)
            setOrbit(null); }}>
      <div className={styles.halo}/><i /><i /><i />
    </div>}
  </OrbitContext>;
}
type ProjectLinkProps = ComponentProps<typeof Link> & {
    color?: string;
};
export function ProjectLink({ color = "sage", onNavigate, children, ...props }: ProjectLinkProps) {
    const begin = useContext(OrbitContext);
    const linkRef = useRef<HTMLAnchorElement>(null);
    return <Link {...props} ref={linkRef} onNavigate={(event) => {
            onNavigate?.(event);
            const rect = linkRef.current?.getBoundingClientRect();
            if (rect)
                begin(color, {
                    x: Math.min(window.innerWidth, Math.max(0, rect.left + rect.width / 2)),
                    y: Math.min(window.innerHeight, Math.max(0, rect.top + rect.height / 2)),
                });
        }}>{children}</Link>;
}
