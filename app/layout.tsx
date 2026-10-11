import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MotionProvider } from "@/components/motion-provider";
import { ScrollBackground } from "@/components/scroll-background";
import { OrbitalTransitionProvider } from "@/components/orbital-transition";
import { OpeningSceneProvider } from "@/components/opening-scene";
import { profile } from "@/content/portfolio";
import { openingBootstrapScript } from "@/lib/opening-bootstrap";
import * as ui from "@/styles/portfolio";
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
export const metadata: Metadata = {
    title: {
        default: "The Time Observatory — Shubham Tiwari",
        template: "%s — The Time Observatory",
    },
    description: "A creative developer's portfolio, observed through time. Explore the work, rewind a moment, and take a different path.",
    applicationName: "The Time Observatory",
    openGraph: {
        title: "The Time Observatory",
        description: "Good work takes time. A portfolio you can explore, rewind, and branch.",
        type: "website",
    },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
    return (<html lang="en" className={"" + geistSans.variable + " " + geistMono.variable} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: openingBootstrapScript }}/></head>
      <body id="top">
        <MotionProvider>
          <OrbitalTransitionProvider>
            <OpeningSceneProvider name={profile.name} role={profile.role} yearsExperience={profile.yearsExperience}>
              <ScrollBackground />
              <a className={ui.skipLink} href="#main-content">Skip to content</a>
              <SiteHeader />
              {children}
              <SiteFooter />
            </OpeningSceneProvider>
          </OrbitalTransitionProvider>
        </MotionProvider>
      </body>
    </html>);
}
