"use client";

import { useEffect, useRef } from "react";
import { curvePath } from "@/math/lissajous";
import type { Project } from "@/content/portfolio";
import { useMotion } from "./motion-provider";

export function ProjectArt({ project }: { project: Project }) {
  const artRef = useRef<HTMLDivElement>(null);
  const { reduced } = useMotion();
  useEffect(() => {
    const art = artRef.current;
    if (!art) return;
    if (reduced) { art.dataset.artReveal = "static"; return; }
    if (art.dataset.artReveal === "played") return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        art.dataset.artReveal = "played";
        observer.disconnect();
      }
    }, { threshold: 0.18 });
    observer.observe(art);
    return () => observer.disconnect();
  }, [reduced]);

  return <div ref={artRef} className={`project-art ${project.color}`} aria-hidden="true"><div className="art-grid" /><span className="art-index">{project.year} / {project.category.toUpperCase()}</span>{project.slug === "zentauri-ui" ? <div className="component-composition"><div className="mini-toolbar"><i /><i /><i /><span>zentauri / components</span></div><div className="mini-ui"><span className="mini-label">BUILT TO FIT TOGETHER</span><div className="mini-type">Aa<span>Interface, considered.</span></div><div className="mini-swatch-row"><i /><i /><i /><i /><i /></div><div className="mini-ui-bottom"><span className="mini-button">Make something <span>↗</span></span><span className="mini-toggle"><i /></span></div></div><div className="floating-chip">&lt;Button variant=&quot;primary&quot; /&gt;</div></div> : project.slug === "payload-cms" ? <div className="cms-composition"><div className="cms-sidebar"><span>p.</span><i /><i /><i /><i /></div><div className="cms-main"><span className="mini-label">YOUR IDEAS, PUBLISHED.</span><div className="cms-title">A place for<br /><em>your words.</em></div><div className="cms-lines"><i /><i /><i /></div><div className="cms-bottom"><span className="cms-pill">● Published</span><span>One idea at a time ↗</span></div></div></div> : <div className="signal-composition"><svg viewBox="0 0 400 400"><circle cx="200" cy="200" r="145" fill="none" stroke="currentColor" strokeOpacity=".1" /><circle cx="200" cy="200" r="110" fill="none" stroke="currentColor" strokeOpacity=".1" /><path className="signature-path" pathLength="1" d={curvePath({ a: project.signature[0], b: project.signature[1], phase: Math.PI / 2 }, 115)} fill="none" stroke="currentColor" strokeWidth="1.1" /><circle cx="200" cy="200" r="5" fill="currentColor" /></svg><span className="signal-wordmark">{project.slug === "gemini-zentauri" ? "gemini / zentauri" : "portfolio / v1"}</span></div>}<span className="art-caption">CONCEPTUAL STUDY · NOT A PRODUCT SCREENSHOT</span></div>;
}
