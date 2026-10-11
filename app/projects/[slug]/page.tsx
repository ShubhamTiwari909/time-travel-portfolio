import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/content/portfolio";
import { ProjectLink } from "@/components/orbital-transition";
import { ProjectArt } from "@/components/project-art";
import { Icon } from "@/components/icons";
import { MilestoneReader } from "@/components/milestone-reader";
import excerpts from "@/content/source/code-excerpts.json";
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  return { title: project?.title ?? "Project not found", description: project?.summary };
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <main id="main-content" className={`wrap inner-page case-study ${project.color}`}><div className="page-kicker"><Link href="/projects">← All projects</Link><span>{project.year} / {project.category.toUpperCase()}</span></div><div className="page-intro"><div><div className="eyebrow present"><span className="status-dot" />{project.status}</div><h1>{project.title}</h1><p className="case-lede">{project.summary}</p></div><div className="case-actions"><a href={project.liveUrl} target="_blank" rel="noreferrer" className="button button-primary">Visit live project <Icon name="arrowUp" width="17" height="17" /></a><Link href={`/observatory?project=${project.slug}`} className="text-link">Explore in the observatory <Icon name="spark" width="16" height="16" /></Link></div></div><ProjectArt project={project} /><div className="case-body"><aside className="case-meta"><span className="eyebrow muted">THE TOOLKIT</span><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><span className="eyebrow muted">THE RECORD</span><p>{project.year}<br />Personal project</p><a href="https://github.com/ShubhamTiwari909/astro-space-portfolio/tree/main/src/content" target="_blank" rel="noreferrer" className="text-link">Original project notes <Icon name="arrowUp" width="13" height="13" /></a></aside><div className="case-prose"><section><span className="eyebrow muted">01 / THE QUESTION</span><h2>A reason to build.</h2><p>{project.problem}</p></section><section><span className="eyebrow muted">02 / THE APPROACH</span><h2>From thought to interface.</h2><p>{project.approach}</p></section><section><span className="eyebrow muted">03 / WHAT TOOK SHAPE</span><h2>The work, in context.</h2><p>{project.outcome}</p></section>{project.slug === "zentauri-ui" && <section className="code-study"><span className="eyebrow muted">A LOOK UNDER THE SURFACE</span><h2>{excerpts[1].title}</h2><p>{excerpts[1].caption}</p><pre><code>{excerpts[1].code}</code></pre><p className="small muted">{excerpts[1].source}</p></section>}<section><span className="eyebrow muted">ANOTHER WAY TO READ THE WORK</span><h2>A project in three frames.</h2><MilestoneReader project={project} /></section></div></div><div className="next-project"><div><span className="eyebrow muted">NEXT IN THE COLLECTION</span><h2>{next.title}</h2></div><ProjectLink color={next.color} href={`/projects/${next.slug}`} className="button">Next project <Icon name="arrow" /></ProjectLink></div></main>;
}
