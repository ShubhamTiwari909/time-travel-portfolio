import { orbitPoint } from "@/engine/clock";
import { useId } from "react";

export function OrbitalInstrument({ time = 18, compact = false }: { time?: number; compact?: boolean }) {
  const id = useId().replace(/:/g, "");
  const marker = orbitPoint(time, 176);
  const rotation = time * 3;
  return <svg className={`orbital-instrument ${compact ? "compact" : ""}`} viewBox="0 0 600 600" role="img" aria-label="An orbital time instrument with concentric rings and a marker positioned by scene time">
    <defs>
      <radialGradient id={`${id}-ambient`}><stop stopColor="#62f5ff" stopOpacity=".14" /><stop offset=".5" stopColor="#00c8ff" stopOpacity=".045" /><stop offset="1" stopColor="#00c8ff" stopOpacity="0" /></radialGradient>
      <radialGradient id={`${id}-sphere`} cx="34%" cy="27%" r="78%"><stop stopColor="#c5eef3" stopOpacity=".78" /><stop offset=".18" stopColor="#84ced6" stopOpacity=".28" /><stop offset=".62" stopColor="#45606f" stopOpacity=".15" /><stop offset="1" stopColor="#050b12" stopOpacity=".9" /></radialGradient>
      <linearGradient id={`${id}-ring`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#62f5ff" stopOpacity=".8" /><stop offset=".45" stopColor="#008dbd" stopOpacity=".3" /><stop offset="1" stopColor="#b4faff" stopOpacity=".7" /></linearGradient>
      <filter id={`${id}-glow`} x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="4" /></filter>
      <clipPath id={`${id}-clip`}><circle cx="300" cy="284" r="67" /></clipPath>
    </defs>
    <circle cx="300" cy="300" r="288" fill={`url(#${id}-ambient)`} />
    <g stroke="#7e9daf" strokeWidth=".7" opacity=".2"><path d="M300 33v77M300 490v77M34 300h85M481 300h85" /><path d="m111 111 38 38m302 302 38 38M111 489l38-38m302-302 38-38" /></g>
    <circle cx="300" cy="300" r="240" fill="none" stroke="#62f5ff" strokeOpacity=".3" strokeWidth=".7" />
    <circle cx="300" cy="300" r="252" fill="none" stroke="#97b0be" strokeOpacity=".09" strokeWidth=".7" strokeDasharray="1 8" />
    {Array.from({ length: 80 }, (_, index) => {
      const angle = index * Math.PI / 40;
      const long = index % 10 === 0;
      const radius = long ? 230 : 235;
      return <line key={index} x1={(300 + Math.cos(angle) * radius).toFixed(3)} y1={(300 + Math.sin(angle) * radius).toFixed(3)} x2={(300 + Math.cos(angle) * 240).toFixed(3)} y2={(300 + Math.sin(angle) * 240).toFixed(3)} stroke="#a4dbe1" strokeWidth={long ? 1 : .6} opacity={long ? .5 : .23} />;
    })}
    <g fill="none" stroke={`url(#${id}-ring)`} strokeWidth="1"><ellipse cx="300" cy="300" rx="220" ry="105" transform="rotate(-30 300 300)" /><ellipse cx="300" cy="300" rx="220" ry="105" transform="rotate(45 300 300)" /><ellipse cx="300" cy="300" rx="204" ry="79" transform={`rotate(${76 + rotation / 8} 300 300)`} /><circle cx="300" cy="300" r="176" strokeOpacity=".33" /><circle cx="300" cy="300" r="148" strokeOpacity=".17" strokeDasharray="2 7" /></g>
    <g className="instrument-trail" transform={`rotate(${rotation} 300 300)`}><path d="M300 124a176 176 0 0 1 167 120" fill="none" stroke="#62f5ff" strokeWidth="1.7" opacity=".9" /><circle cx="300" cy="124" r="3" fill="#62f5ff" /></g>
    <g fill="none" strokeWidth="1.4"><circle cx="300" cy="284" r="84" stroke="#62f5ff" strokeOpacity=".12" /><path className="instrument-trail" d="M300 200a84 84 0 0 1 84 84" stroke="#62f5ff" /><path d="M300 368a84 84 0 0 1-84-84" stroke="#ff9b45" strokeOpacity=".7" /></g>
    <circle cx={marker.x.toFixed(3)} cy={marker.y.toFixed(3)} r="10" fill="#62f5ff" filter={`url(#${id}-glow)`} opacity=".5" /><circle cx={marker.x.toFixed(3)} cy={marker.y.toFixed(3)} r="4" fill="#d7fcff" /><circle cx={marker.x.toFixed(3)} cy={marker.y.toFixed(3)} r="11" fill="none" stroke="#d7fcff" strokeOpacity=".25" />
    <g><circle cx="300" cy="284" r="77" fill="none" stroke="#a7dce2" strokeOpacity=".12" /><circle cx="300" cy="284" r="67" fill={`url(#${id}-sphere)`} stroke="#a7dce2" strokeOpacity=".4" strokeWidth=".7" /><g clipPath={`url(#${id}-clip)`} fill="none" stroke="#b3e1e6" strokeOpacity=".2" strokeWidth=".6">{[15, 30, 45, 58].map((r) => <ellipse key={r} cx="300" cy="284" rx={r} ry="67" transform="rotate(-28 300 284)" />)}{[-40, -20, 0, 20, 40].map((offset) => <ellipse key={offset} cx="300" cy={284 + offset} rx="69" ry="16" transform="rotate(-28 300 284)" />)}</g><path d="m300 269 3.4 11.6L315 284l-11.6 3.4L300 299l-3.4-11.6L285 284l11.6-3.4Z" fill="#e9fdff" opacity=".8" /></g>
    <g fill="#92abba" fontFamily="monospace" fontSize="9" letterSpacing="2"><text x="300" y="28" textAnchor="middle">THE TIME INSTRUMENT</text><text x="300" y="582" textAnchor="middle">AN EXPLORATION OF POSSIBILITIES</text><text x="41" y="320" transform="rotate(-90 41 320)">PAST</text><text x="570" y="270" transform="rotate(90 570 270)">FUTURE</text></g>
    <g fill="#b5eaf3" fontFamily="monospace" textAnchor="middle"><text x="300" y="387" fontSize="18" letterSpacing="3">00:{Math.floor(time).toString().padStart(2, "0")}</text><text x="300" y="409" fontSize="8" letterSpacing="2.5" opacity=".6">SCENE TIME / SECONDS</text></g>
    <g fill="#a2b8c5"><circle cx="134" cy="190" r="2.5" /><circle cx="476" cy="323" r="2.5" /><circle cx="243" cy="507" r="2" /></g><g stroke="#a2b8c5" strokeOpacity=".24" fill="none" strokeWidth=".6"><path d="m134 190-35-27H43M476 323l33 30h45" /></g><g fill="#86a3b3" fontSize="8" fontFamily="monospace" letterSpacing="1.2"><text x="44" y="153">01 / ORIGIN</text><text x="509" y="365">02 / NOW</text></g>
    {Array.from({ length: 38 }, (_, i) => <circle key={`star-${i}`} cx={35 + (i * 137 % 530)} cy={40 + (i * 97 % 510)} r={i % 6 === 0 ? 1.2 : .55} fill="#a3dae0" opacity={i % 3 === 0 ? .4 : .16} />)}
  </svg>;
}
