import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/content/portfolio";
import { ProjectLink } from "@/components/orbital-transition";
import { ProjectArt } from "@/components/project-art";
import { Icon } from "@/components/icons";
import { MilestoneReader } from "@/components/milestone-reader";
import excerpts from "@/content/source/code-excerpts.json";
import * as ui from "@/styles/portfolio";
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: {
    params: Promise<{
        slug: string;
    }>;
}): Promise<Metadata> {
    const project = getProject((await params).slug);
    return { title: project?.title ?? "Project not found", description: project?.summary };
}
export default async function ProjectPage({ params }: {
    params: Promise<{
        slug: string;
    }>;
}) {
    const { slug } = await params;
    const project = getProject(slug);
    if (!project)
        notFound();
    const next = projects[(projects.indexOf(project) + 1) % projects.length];
    return <main id="main-content" className={ui.wrap + " " + ui.innerPage + " " + ui.caseStudy + " " + project.color}><div className={ui.pageKicker}><Link href="/projects">← All projects</Link><span>{project.year} / {project.category.toUpperCase()}</span></div><div className={ui.pageIntro}><div><div className={ui.eyebrow + " " + ui.present}><span className={ui.statusDot}/>{project.status}</div><h1>{project.title}</h1><p className={ui.caseLede}>{project.summary}</p></div><div className={ui.caseActions}><a href={project.projectUrl} target="_blank" rel="noreferrer" className={ui.button + " " + ui.buttonPrimary}>{project.linkLabel} <Icon name="arrowUp" width="17" height="17"/></a><Link href={`/observatory?project=${project.slug}`} className={ui.textLink}>Explore in the observatory <Icon name="spark" width="16" height="16"/></Link></div></div><ProjectArt project={project}/><div className={ui.caseBody}><aside className={ui.caseMeta}><span className={ui.eyebrow + " " + ui.muted}>THE TOOLKIT</span><div className={ui.tagList}>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><span className={ui.eyebrow + " " + ui.muted}>THE RECORD</span><p>{project.year}<br />Personal project</p><a href={project.sourceUrl} target="_blank" rel="noreferrer" className={ui.textLink}>{project.sourceLabel} <Icon name="arrowUp" width="13" height="13"/></a></aside><div className={ui.caseProse}><section><span className={ui.eyebrow + " " + ui.muted}>01 / THE QUESTION</span><h2>A reason to build.</h2><p>{project.problem}</p></section><section><span className={ui.eyebrow + " " + ui.muted}>02 / THE APPROACH</span><h2>From thought to interface.</h2><p>{project.approach}</p></section><section><span className={ui.eyebrow + " " + ui.muted}>03 / WHAT TOOK SHAPE</span><h2>The work, in context.</h2><p>{project.outcome}</p></section>{project.slug === "zentauri-ui" && <section className={"code-study"}><span className={ui.eyebrow + " " + ui.muted}>A LOOK UNDER THE SURFACE</span><h2>{excerpts[1].title}</h2><p>{excerpts[1].caption}</p><pre><code>{excerpts[1].code}</code></pre><p className={ui.small + " " + ui.muted}>{excerpts[1].source}</p></section>}<section><span className={ui.eyebrow + " " + ui.muted}>ANOTHER WAY TO READ THE WORK</span><h2>A project in three frames.</h2><MilestoneReader project={project}/></section></div></div><div className={ui.nextProject}><div><span className={ui.eyebrow + " " + ui.muted}>NEXT IN THE COLLECTION</span><h2>{next.title}</h2></div><ProjectLink color={next.color} href={`/projects/${next.slug}`} className={ui.button}>Next project <Icon name="arrow"/></ProjectLink></div></main>;
}
