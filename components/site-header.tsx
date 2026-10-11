"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon, ObservatoryMark } from "./icons";
import { useMotion } from "./motion-provider";
import * as ui from "@/styles/portfolio";
const links = [{ href: "/projects", label: "The work" }, { href: "/about", label: "The person" }, { href: "/lab", label: "The lab" }];
export function SiteHeader() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const { reduced, toggle } = useMotion();
    return <header className={ui.siteHeader + " " + ui.wrap}>
    <Link href="/" className={ui.brand} aria-label="The Time Observatory home" onClick={() => setOpen(false)}><ObservatoryMark /><span>The Time<br /><b>Observatory</b></span></Link>
    <nav className={ui.mainNav + " " + (open ? "is-open" : "")} aria-label="Main navigation" id="main-navigation">
      {links.map((link) => <Link key={link.href} href={link.href} aria-current={pathname.startsWith(link.href) ? "page" : undefined} onClick={() => setOpen(false)}>{link.label}</Link>)}
      <Link href="/contact" className={ui.mobileContact} onClick={() => setOpen(false)}>Get in touch</Link>
    </nav>
    <div className={ui.headerActions}><button className={ui.motionToggle} onClick={toggle} aria-pressed={reduced} aria-label={reduced ? "Enable motion" : "Reduce motion"}><span className={ui.statusDot + " " + (reduced ? "off" : "")}/> <span>Motion {reduced ? "off" : "on"}</span></button><Link href="/contact" className={ui.headerContact}>Let’s talk <Icon name="arrowUp" width="15" height="15"/></Link><button className={ui.menuToggle + " " + ui.iconButton} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}><Icon name={open ? "close" : "menu"}/></button></div>
  </header>;
}
