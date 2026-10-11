import type { Metadata } from "next";
import Link from "next/link";
import { ObservatoryExperience } from "@/components/observatory-experience";
export const metadata: Metadata = { title: "The observatory", description: "Choose a project, explore its checkpoints, and create your own branching journey." };
export default function ObservatoryPage() {
  return <main id="main-content" className="wrap inner-page observatory-page"><div className="page-kicker"><span>01 / THE OBSERVATORY</span><Link href="/projects">Prefer a direct route? View projects ↗</Link></div><div className="page-intro compact-intro"><h1>A moment.<br /><em>A different perspective.</em></h1><p>Move the instrument through time.<br />Follow an idea. Then take another path.</p></div><ObservatoryExperience /><noscript><p>The instrument needs JavaScript for time controls. You can read every project through the direct portfolio.</p><Link href="/projects">View all projects</Link></noscript></main>;
}
