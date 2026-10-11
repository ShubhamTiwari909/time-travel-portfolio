import Link from "next/link";
import { Icon } from "@/components/icons";
import * as ui from "@/styles/portfolio";
export default function NotFound() {
    return <main id="main-content" className={ui.wrap + " " + ui.innerPage + " " + ui.notFound}><span className={ui.eyebrow + " " + ui.muted}>404 / AN UNCHARTED MOMENT</span><h1>A little<br /><em>out of time.</em></h1><p>This page isn’t on the map. The rest of the observatory is right here.</p><Link href="/" className={ui.button + " " + ui.buttonPrimary}>Return to the present <Icon name="arrow"/></Link></main>;
}
