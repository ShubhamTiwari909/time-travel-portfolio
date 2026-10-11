"use client";
import { useEffect, useRef } from "react";
import { curvePath } from "@/math/lissajous";
import type { Project } from "@/content/portfolio";
import { useMotion } from "./motion-provider";
import * as ui from "@/styles/portfolio";
export function ProjectArt({ project }: {
    project: Project;
}) {
    const artRef = useRef<HTMLDivElement>(null);
    const { reduced } = useMotion();
    useEffect(() => {
        const art = artRef.current;
        if (!art)
            return;
        if (reduced) {
            art.dataset.artReveal = "static";
            return;
        }
        if (art.dataset.artReveal === "played")
            return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                art.dataset.artReveal = "played";
                observer.disconnect();
            }
        }, { threshold: 0.18 });
        observer.observe(art);
        return () => observer.disconnect();
    }, [reduced]);
    return <div ref={artRef} className={ui.projectArt + " " + project.color} aria-hidden="true"><div className={ui.artGrid}/><span className={ui.artIndex}>{project.year} / {project.category.toUpperCase()}</span>{project.slug === "zentauri-ui" ? <div className={ui.componentComposition}><div className={ui.miniToolbar}><i /><i /><i /><span>zentauri / components</span></div><div className={ui.miniUi}><span className={ui.miniLabel}>BUILT TO FIT TOGETHER</span><div className={ui.miniType}>Aa<span>Interface, considered.</span></div><div className={ui.miniSwatchRow}><i /><i /><i /><i /><i /></div><div className={ui.miniUiBottom}><span className={ui.miniButton}>Make something <span>↗</span></span><span className={ui.miniToggle}><i /></span></div></div><div className={ui.floatingChip}>&lt;Button variant=&quot;primary&quot; /&gt;</div></div> : project.slug === "payload-cms" ? <div className={ui.cmsComposition}><div className={ui.cmsSidebar}><span>p.</span><i /><i /><i /><i /></div><div className={ui.cmsMain}><span className={ui.miniLabel}>YOUR IDEAS, PUBLISHED.</span><div className={ui.cmsTitle}>A place for<br /><em>your words.</em></div><div className={ui.cmsLines}><i /><i /><i /></div><div className={ui.cmsBottom}><span className={ui.cmsPill}>● Published</span><span>One idea at a time ↗</span></div></div></div> : <div className={ui.signalComposition}><svg viewBox="0 0 400 400"><circle cx="200" cy="200" r="145" fill="none" stroke="currentColor" strokeOpacity=".1"/><circle cx="200" cy="200" r="110" fill="none" stroke="currentColor" strokeOpacity=".1"/><path className={ui.signaturePath} pathLength="1" d={curvePath({ a: project.signature[0], b: project.signature[1], phase: Math.PI / 2 }, 115)} fill="none" stroke="currentColor" strokeWidth="1.1"/><circle cx="200" cy="200" r="5" fill="currentColor"/></svg><span className={ui.signalWordmark}>{project.slug === "visualguard" ? "visualguard / verify" : "portfolio / v1"}</span></div>}<span className={ui.artCaption}>CONCEPTUAL STUDY · NOT A PRODUCT SCREENSHOT</span></div>;
}
