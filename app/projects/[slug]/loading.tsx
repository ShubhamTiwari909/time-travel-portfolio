import Link from "next/link";
import * as ui from "@/styles/portfolio";
export default function LoadingProject() {
    return <main id="main-content" className={ui.wrap + " " + ui.innerPage + " " + "project-loading"} aria-busy="true"><div className={ui.pageKicker}><Link href="/projects">← All projects</Link><span>THE WORK / A CLOSER LOOK</span></div><div className={ui.pageIntro}><h1>A story<br /><em>taking shape.</em></h1></div><p role="status" className={ui.muted}>Opening the project…</p></main>;
}
