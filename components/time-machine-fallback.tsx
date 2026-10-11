import { useId } from "react";

/** An original static diagram remains visible during loading and without WebGL. */
export function TimeMachineFallback() {
    const id = useId();
    return <svg viewBox="0 0 900 560" fill="none" aria-hidden="true">
        <defs>
            <radialGradient id={`${id}-glow`}><stop stopColor="currentColor" stopOpacity=".16"/><stop offset="1" stopColor="currentColor" stopOpacity="0"/></radialGradient>
            <linearGradient id={`${id}-hull`} x1="360" y1="210" x2="510" y2="400" gradientUnits="userSpaceOnUse"><stop stopColor="#254653"/><stop offset="1" stopColor="#07121d"/></linearGradient>
        </defs>
        <g style={{ color: "var(--drive-color)" }}>
            <ellipse cx="450" cy="300" rx="325" ry="245" fill={`url(#${id}-glow)`}/>
            <g stroke="currentColor">
                <ellipse cx="450" cy="458" rx="275" ry="44" opacity=".2"/>
                <ellipse cx="450" cy="270" rx="233" ry="207" transform="rotate(-22 450 270)" opacity=".65"/>
                <ellipse cx="450" cy="270" rx="133" ry="224" transform="rotate(42 450 270)" strokeWidth="3" opacity=".65"/>
                <ellipse cx="450" cy="270" rx="219" ry="93" transform="rotate(-27 450 270)" strokeWidth="2"/>
                {Array.from({ length: 48 }, (_, i) => <path key={i} d={i % 4 === 0 ? "M450 60v16" : "M450 60v7"} transform={`rotate(${i * 7.5} 450 270)`} opacity={i % 4 === 0 ? ".8" : ".3"}/>)}
            </g>
            <path d="m450 221 155 50 88 94-210-50-33 81-38-81-178 34 94-84Z" fill={`url(#${id}-hull)`} stroke="currentColor" strokeWidth="2"/>
            <path d="m450 221 0 175M450 315l-122-50M450 315l155-44M450 242l-25 47 25 41 29-42Z" stroke="currentColor"/>
            <path d="m360 269-19 23M553 282l20 16" stroke="#ff9b45" strokeWidth="8"/>
            <circle cx="450" cy="302" r="13" stroke="currentColor" strokeWidth="2"/>
            <circle cx="450" cy="302" r="5" fill="currentColor"/>
        </g>
    </svg>;
}
