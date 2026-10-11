import Link from "next/link";
import { ObservatoryMark, Icon } from "./icons";
import { profile } from "@/content/portfolio";

export function SiteFooter() {
  return <footer className="site-footer wrap"><div className="footer-top"><Link href="/" className="footer-brand"><ObservatoryMark small /><span>Built with curiosity.<br /><span className="muted">And a little sense of time.</span></span></Link><div className="footer-links"><Link href="/projects">Projects</Link><Link href="/about">About</Link><Link href="/contact">Contact <Icon name="arrowUp" width="13" height="13" /></Link></div></div><div className="footer-bottom"><span>© 2026 {profile.name} · The Time Observatory</span><span>No tracking. Just exploring.</span><a href="#top">Back to the present ↑</a></div></footer>;
}
