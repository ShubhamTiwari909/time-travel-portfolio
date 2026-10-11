import type { Metadata } from "next";
import Link from "next/link";
import { ProjectIndex } from "@/components/project-index";
import { Icon } from "@/components/icons";
export const metadata: Metadata = { title: "The work", description: "Selected frontend platforms, design systems, and experiments by Shubham Tiwari." };
export default function ProjectsPage() {
  return <main id="main-content" className="wrap inner-page"><div className="page-kicker"><span>02 / THE WORK</span><span>2025 — 2026</span></div><div className="page-intro"><div><h1>Ideas, made<br /><em>into something.</em></h1></div><p>A collection of platforms, interfaces, and experiments.<br />Different questions. The same attention to detail.</p></div><ProjectIndex /><div className="simple-callout"><p>Want to see the work from another perspective?</p><Link href="/observatory" className="text-link">Enter the observatory <Icon name="arrowUp" /></Link></div></main>;
}
