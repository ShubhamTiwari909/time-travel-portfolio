"use client";
import { useEffect, useRef } from "react";
import { useMotion } from "./motion-provider";
import * as styles from "./scroll-background.styles";
const stars = [
    [76, 108], [195, 261], [323, 79], [428, 437], [507, 168], [621, 324],
    [747, 94], [866, 213], [977, 67], [1106, 392], [1228, 144], [1351, 280],
    [123, 602], [254, 818], [369, 674], [490, 913], [593, 567], [716, 778],
    [836, 488], [947, 887], [1067, 648], [1185, 824], [1327, 584], [1392, 955],
];
export function ScrollBackground() {
    const rootRef = useRef<HTMLDivElement>(null);
    const { reduced } = useMotion();
    useEffect(() => {
        const root = rootRef.current;
        if (!root)
            return;
        if (reduced) {
            root.style.setProperty("--scroll-progress", "0");
            return;
        }
        let frame = 0;
        function update() {
            frame = 0;
            const distance = document.documentElement.scrollHeight - window.innerHeight;
            const progress = distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0;
            root!.style.setProperty("--scroll-progress", progress.toFixed(5));
        }
        function scheduleUpdate() {
            if (!frame)
                frame = window.requestAnimationFrame(update);
        }
        scheduleUpdate();
        window.addEventListener("scroll", scheduleUpdate, { passive: true });
        window.addEventListener("resize", scheduleUpdate);
        // Route changes and project filters can change the page's scroll distance.
        const resize = new ResizeObserver(scheduleUpdate);
        resize.observe(document.body);
        return () => {
            window.cancelAnimationFrame(frame);
            window.removeEventListener("scroll", scheduleUpdate);
            window.removeEventListener("resize", scheduleUpdate);
            resize.disconnect();
        };
    }, [reduced]);
    return <div ref={rootRef} className={styles.background} aria-hidden="true">
    <div className={styles.glow}/>
    <div className={styles.floor}/>
    <svg className={styles.circuits} viewBox="0 0 1440 1000" fill="none" stroke="currentColor" preserveAspectRatio="xMidYMid slice">
      <path d="M0 170h154l62 62h196l48-48h118M1440 126h-122l-88 88h-93l-54 54v118M0 755h171l70-70h147l43 43h88M1440 852h-153l-67-67h-201l-48-48H838"/>
      <path d="M0 182h148l62 62h206M1440 864h-159l-67-67h-189" opacity=".35"/>
      <g fill="currentColor" stroke="none"><rect x="576" y="181" width="5" height="5"/><rect x="1080" y="384" width="5" height="5"/><rect x="517" y="725" width="5" height="5"/><rect x="836" y="734" width="5" height="5"/></g>
    </svg>
    <svg className={styles.stars} viewBox="0 0 1440 1000" fill="currentColor" preserveAspectRatio="xMidYMid slice">
      {stars.map(([x, y], index) => <circle key={index} cx={x} cy={y} r={index % 5 === 0 ? 1.8 : 1} opacity={index % 3 === 0 ? 0.8 : 0.4}/>)}
      <path d="m76 108 119 153 128-182M1067 648l118 176 142-240" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.16"/>
    </svg>
    <svg className={styles.orbits} viewBox="0 0 1440 1000" fill="none" stroke="currentColor" preserveAspectRatio="xMidYMid slice">
      <circle cx="1160" cy="280" r="520" strokeWidth="0.8"/>
      <circle cx="1160" cy="280" r="565" strokeWidth="0.5" strokeDasharray="2 20"/>
      <circle cx="1160" cy="280" r="610" strokeWidth="0.7" opacity="0.6"/>
      <ellipse cx="880" cy="460" rx="720" ry="310" transform="rotate(-28 880 460)" strokeWidth="0.8"/>
      <ellipse cx="880" cy="460" rx="755" ry="335" transform="rotate(-28 880 460)" strokeWidth="0.5" opacity="0.4"/>
      <circle cx="704" cy="31" r="5" fill="currentColor" stroke="none"/>
      <circle cx="686" cy="932" r="3" fill="currentColor" stroke="none"/>
    </svg>
    <svg className={styles.dial} viewBox="0 0 1440 1000" fill="none" stroke="currentColor" preserveAspectRatio="xMidYMid slice">
      <circle cx="90" cy="900" r="390" strokeWidth="0.8"/>
      <circle cx="90" cy="900" r="408" strokeWidth="0.6" strokeDasharray="1 17"/>
      <path d="M90 488v22m-412 390h22m390 390v22m390-412h22M63 900h54m-27-27v54" strokeWidth="1"/>
      <path d="M140 240h26m-13-13v26M1257 697h24m-12-12v24" strokeWidth="0.8" opacity="0.7"/>
    </svg>
    <div className={styles.fade}/>
  </div>;
}
