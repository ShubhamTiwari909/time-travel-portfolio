import type { SVGProps } from "react";
import * as ui from "@/styles/portfolio";
export type IconName = "arrow" | "arrowUp" | "play" | "pause" | "reverse" | "reset" | "close" | "menu" | "spark" | "sun" | "branch" | "chevron" | "download" | "mail" | "check";
const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M4 12h16M14 6l6 6-6 6"/></>,
    arrowUp: <><path d="M6 18 18 6M6 6h12v12"/></>,
    play: <path d="m9 5 11 7-11 7Z"/>,
    pause: <><path d="M8 5v14M16 5v14"/></>,
    reverse: <><path d="m12 5-9 7 9 7ZM21 5l-9 7 9 7Z"/></>,
    reset: <><path d="M4 10a8 8 0 1 1 1 8M4 4v6h6"/></>,
    close: <path d="m6 6 12 12M6 18 18 6"/>,
    menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
    spark: <><path d="m12 3 2.2 6.8L21 12l-6.8 2.2L12 21l-2.2-6.8L3 12l6.8-2.2Z"/></>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5"/></>,
    branch: <><circle cx="7" cy="5" r="2"/><circle cx="7" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M7 7v10M18 7v3c0 4-11 1-11 5"/></>,
    chevron: <path d="m9 5 7 7-7 7"/>,
    download: <><path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
};
export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & {
    name: IconName;
}) {
    return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}
export function ObservatoryMark({ small = false }: {
    small?: boolean;
}) {
    return <svg className={ui.observatoryMark} width={small ? 29 : 36} height={small ? 29 : 36} viewBox="0 0 40 40" fill="none" aria-hidden="true"><circle cx="20" cy="20" r="15" stroke="currentColor"/><ellipse cx="20" cy="20" rx="8" ry="18" transform="rotate(45 20 20)" stroke="currentColor"/><circle cx="20" cy="20" r="3" fill="currentColor"/><path d="M20 1v5M20 34v5M1 20h5M34 20h5" stroke="currentColor"/></svg>;
}
