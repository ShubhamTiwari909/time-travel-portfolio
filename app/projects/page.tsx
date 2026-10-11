import type { Metadata } from "next";
import Link from "next/link";
import { ProjectIndex } from "@/components/project-index";
import { Icon } from "@/components/icons";
import * as ui from "@/styles/portfolio";
export const metadata: Metadata = { title: "The work", description: "Selected frontend platforms, design systems, and experiments by Shubham Tiwari." };
export default function ProjectsPage() {
    return <main id="main-content" className={ui.wrap + " " + ui.innerPage}><div className={ui.pageKicker}><span>02 / THE WORK</span><span>2025 — 2026</span></div><div className={ui.pageIntro}><div><h1>Ideas, made<br /><em>into something.</em></h1></div><p>A collection of platforms, interfaces, and experiments.<br />Different questions. The same attention to detail.</p></div><ProjectIndex /><div className={ui.simpleCallout}><p>Want to see the work from another perspective?</p><Link href="/observatory" className={ui.textLink}>Enter the observatory <Icon name="arrowUp"/></Link></div></main>;
}
