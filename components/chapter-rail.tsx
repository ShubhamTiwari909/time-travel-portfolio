"use client";
import { useEffect, useRef, useState } from "react";
import * as styles from "./chapter-rail.styles";
const chapters = [
    { id: "introduction", label: "Intro" }, { id: "selected-work", label: "Work" },
    { id: "perspective", label: "Thinking" }, { id: "field-notes", label: "Notes" },
    { id: "next-chapter", label: "Contact" },
];
export function ChapterRail() {
    const [active, setActive] = useState(chapters[0].id);
    const activeRef = useRef(chapters[0].id);
    const railRef = useRef<HTMLElement>(null);
    useEffect(() => {
        let frame = 0;
        function update() {
            frame = 0;
            const sections = chapters.map(({ id }) => document.getElementById(id));
            let current = chapters[0].id;
            sections.forEach((section, index) => {
                if (section && section.getBoundingClientRect().top <= window.innerHeight * 0.38)
                    current = chapters[index].id;
            });
            if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8)
                current = chapters.at(-1)!.id;
            if (current !== activeRef.current) {
                activeRef.current = current;
                setActive(current);
            }
            const distance = document.documentElement.scrollHeight - window.innerHeight;
            const progress = distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0;
            railRef.current?.style.setProperty("--chapter-progress", progress.toFixed(5));
        }
        function schedule() { if (!frame)
            frame = requestAnimationFrame(update); }
        schedule();
        window.addEventListener("scroll", schedule, { passive: true });
        window.addEventListener("resize", schedule);
        const observer = new ResizeObserver(schedule);
        observer.observe(document.body);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("scroll", schedule);
            window.removeEventListener("resize", schedule);
            observer.disconnect();
        };
    }, []);
    return <nav ref={railRef} className={styles.rail} aria-label="Page chapters">
    <span className={styles.track} aria-hidden="true"><i /></span>
    {chapters.map((chapter, index) => <a key={chapter.id} href={`#${chapter.id}`} aria-label={`Chapter ${index + 1}: ${chapter.label}`} aria-current={active === chapter.id ? "location" : undefined}><span className={styles.number}>0{index + 1}</span><span className={styles.label}>{chapter.label}</span></a>)}
  </nav>;
}
