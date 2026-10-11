import Link from "next/link";
import { ObservatoryMark, Icon } from "./icons";
import { profile } from "@/content/portfolio";
import { ReplayOpening } from "./opening-scene";
import * as ui from "@/styles/portfolio";
export function SiteFooter() {
    return <footer className={ui.siteFooter + " " + ui.wrap}><div className={ui.footerTop}><Link href="/" className={ui.footerBrand}><ObservatoryMark small/><span>Built with curiosity.<br /><span className={ui.muted}>And a little sense of time.</span></span></Link><div className={ui.footerLinks}><Link href="/projects">Projects</Link><Link href="/about">About</Link><Link href="/contact">Contact <Icon name="arrowUp" width="13" height="13"/></Link></div></div><div className={ui.footerBottom}><span>© 2026 {profile.name} · The Time Observatory</span><span>No tracking. Just exploring.</span><div className={ui.footerActions}><ReplayOpening /><a href="#top">Back to the present ↑</a></div></div></footer>;
}
