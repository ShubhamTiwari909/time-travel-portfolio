import Link from "next/link";
import { Icon } from "@/components/icons";
export default function NotFound() {
  return <main id="main-content" className="wrap inner-page not-found"><span className="eyebrow muted">404 / AN UNCHARTED MOMENT</span><h1>A little<br /><em>out of time.</em></h1><p>This page isn’t on the map. The rest of the observatory is right here.</p><Link href="/" className="button button-primary">Return to the present <Icon name="arrow" /></Link></main>;
}
