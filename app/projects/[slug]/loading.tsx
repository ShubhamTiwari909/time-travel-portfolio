import Link from "next/link";

export default function LoadingProject() {
  return <main id="main-content" className="wrap inner-page project-loading" aria-busy="true"><div className="page-kicker"><Link href="/projects">← All projects</Link><span>THE WORK / A CLOSER LOOK</span></div><div className="page-intro"><h1>A story<br /><em>taking shape.</em></h1></div><p role="status" className="muted">Opening the project…</p></main>;
}
