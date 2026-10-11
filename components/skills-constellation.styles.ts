// Static Tailwind utility strings. Keep each utility complete for source detection.
// Semantic hooks support descendant/state variants; they carry no authored CSS rules.

export const constellation =
  "skills-constellation-constellation grid grid-cols-[minmax(0,1fr)_325px] border border-solid border-[#18344f] rounded-none" +
  " [background:#09131e] overflow-hidden below-desktop:grid-cols-[minmax(0,1fr)_270px] below-tablet:grid-cols-[1fr]";

export const explorer =
  "skills-constellation-explorer min-w-0 [background:radial-gradient(ellipse_at_35%_35%,#10223555,transparent_62%),#081019]";

export const map =
  "skills-constellation-map relative w-full aspect-[800/620] mobile:aspect-[800/660]";

export const mapHeading =
  "skills-constellation-mapHeading absolute top-[17px] left-5.5 right-5.5 flex justify-between gap-5 text-faint font-mono text-[7px]" +
  " leading-[normal] font-normal not-italic tracking-[1px] mobile:text-[6px] mobile:left-4 mobile:right-4";

export const connections =
  "skills-constellation-connections absolute top-0 right-0 bottom-0 left-0 w-full h-full mobile:h-auto";

export const nodes =
  "skills-constellation-nodes absolute top-0 right-0 bottom-0 left-0 mobile:hidden";

export const node =
  "skills-constellation-node p-0 absolute w-11 h-11 [transform:translate(-50%,-50%)] [background:transparent] border-[0]" +
  " [border-style:none] border-current rounded-full text-muted [&:hover]:[background:#62f5ff0a]" +
  " [&[aria-pressed=true]_.skills-constellation-nodeLabel]:text-[var(--node-color)]" +
  " [&[aria-pressed=true]_.skills-constellation-nodeLabel]:opacity-[1]" +
  " [&[aria-pressed=true]_.skills-constellation-nodeLabel]:font-semibold" +
  " [&:hover_.skills-constellation-nodeLabel]:text-[var(--node-color)] [&:hover_.skills-constellation-nodeLabel]:opacity-[1]" +
  " [&[data-connected=true]_.skills-constellation-nodeLabel]:text-[var(--node-color)]" +
  " [&[data-connected=true]_.skills-constellation-nodeLabel]:opacity-[1]";

export const nodeLabel =
  "skills-constellation-nodeLabel absolute top-[33px] left-[50%] [transform:translateX(-50%)] whitespace-nowrap text-muted" +
  " opacity-[1] font-mono text-[10px] leading-[1.5] font-normal not-italic [transition:color_180ms,opacity_180ms]" +
  " below-desktop:text-[8px] below-tablet:text-[9px]";

export const legend =
  "skills-constellation-legend absolute bottom-4 left-5.5 flex gap-[21px] text-muted text-[8px] [&_span]:flex [&_span]:items-center" +
  " [&_span]:gap-1.5 [&_i]:block [&_i]:w-1 [&_i]:h-1 [&_i]:rounded-full below-desktop:gap-3 below-desktop:text-[7px] mobile:bottom-3" +
  " mobile:left-4 mobile:gap-[11px] mobile:text-[7px]";

export const selector =
  "skills-constellation-selector px-5.5 flex items-center gap-4.5 pt-4.5 pb-2.5 border-t [border-top-style:solid] border-t-line" +
  " [&_label]:text-muted [&_label]:text-[10px] [&_label]:whitespace-nowrap [&_select]:py-2.5 [&_select]:px-3 [&_select]:[flex:1]" +
  " [&_select]:min-w-0 [&_select]:min-h-11 [&_select]:border [&_select]:border-solid [&_select]:border-[#374c58]" +
  " [&_select]:rounded-none [&_select]:[background:#0c1b29] [&_select]:text-foreground" +
  " [&_select]:[font-family:var(--font-geist-sans),sans-serif] [&_select]:text-[11px] [&_select]:leading-[normal]" +
  " [&_select]:font-normal [&_select]:not-italic [&_select]:[color-scheme:dark]" +
  " [&_select:focus-visible]:[outline:2px_solid_var(--accent)] [&_select:focus-visible]:outline-offset-[3px] mobile:px-4" +
  " mobile:pt-[17px] mobile:pb-2.5 mobile:gap-3 mobile:[&_label]:text-[10px] mobile:[&_select]:text-[16px]";

export const instructions =
  "skills-constellation-instructions px-5.5 pt-0 pb-5 text-faint text-[9px] mobile:px-4 mobile:pt-0 mobile:pb-4";

export const reading =
  "skills-constellation-reading py-[29px] px-[25px] flex flex-col min-w-0 border-l [border-left-style:solid] border-l-line" +
  " [background:radial-gradient(ellipse_at_90%_0%,color-mix(in_srgb,var(--skill-accent)_7%,transparent),transparent_65%)] [&_h3]:mx-0" +
  " [&_h3]:font-display [&_h3]:text-[34px] [&_h3]:leading-[1.15] [&_h3]:font-medium [&_h3]:not-italic [&_h3]:mt-[25px]" +
  " [&_h3]:mb-[15px] [&_h3]:tracking-[-.8px] [&_h3]:[overflow-wrap:anywhere] below-desktop:py-[25px] below-desktop:px-[19px]" +
  " below-desktop:[&_h3]:text-[32px] below-tablet:border-l-[0] below-tablet:[border-left-style:none] below-tablet:border-l-current" +
  " below-tablet:border-t below-tablet:[border-top-style:solid] below-tablet:border-t-line mobile:py-6 mobile:px-5 mobile:[&_h3]:mt-5";

export const readingTop =
  "skills-constellation-readingTop flex items-center justify-between gap-2.5";

export const eyebrow =
  "skills-constellation-eyebrow font-mono text-[8px] leading-[normal] font-normal not-italic tracking-[1px]" +
  " text-[var(--skill-accent)] uppercase";

export const tier =
  "skills-constellation-tier py-1 px-2 text-[8px] text-muted capitalize border border-solid border-line rounded-none";

export const groupNote =
  "skills-constellation-groupNote text-[11px] text-muted";

export const linkedHeading =
  "skills-constellation-linkedHeading mx-0 flex gap-[9px] items-center text-[var(--skill-accent)] text-[10px] mt-[29px] mb-3.5";

export const projectLinks =
  "skills-constellation-projectLinks flex flex-col gap-[9px] below-tablet:grid below-tablet:grid-cols-[1fr_1fr]" +
  " mobile:grid-cols-[1fr]";

export const projectLink =
  "skills-constellation-projectLink p-[15px] flex items-center justify-between gap-3 border border-solid" +
  " border-[color-mix(in_srgb,var(--project-accent)_28%,transparent)] rounded-none" +
  " [background:color-mix(in_srgb,var(--project-accent)_4%,transparent)] text-[var(--project-accent)]" +
  " [&:hover]:border-[var(--project-accent)] [&:hover]:[background:color-mix(in_srgb,var(--project-accent)_9%,transparent)]" +
  " [&_small]:block [&_small]:mb-1.5 [&_small]:font-mono [&_small]:text-[7px] [&_small]:leading-[normal] [&_small]:font-normal" +
  " [&_small]:not-italic [&_small]:uppercase [&_small]:tracking-[.7px] [&_small]:text-muted [&_strong]:text-[12px]" +
  " [&_strong]:font-medium [&_svg]:shrink-0";

export const wider =
  "skills-constellation-wider p-[17px] [background:#0b1825] border border-solid border-line rounded-none [&_p]:text-muted" +
  " [&_p]:text-[11px] [&_a]:text-[10px] [&_a]:mt-3.5";

export const neighbors =
  "skills-constellation-neighbors mt-7 [&>div]:flex [&>div]:flex-wrap [&>div]:gap-[7px] [&>div]:mt-[13px] [&_button]:py-[9px]" +
  " [&_button]:px-2.5 [&_button]:min-h-11 [&_button]:[background:transparent] [&_button]:border [&_button]:border-solid" +
  " [&_button]:border-line [&_button]:rounded-none [&_button]:text-muted [&_button]:text-[10px]" +
  " [&_button:hover]:text-[var(--skill-accent)] [&_button:hover]:border-[var(--skill-accent)]";

export const coordinates =
  "skills-constellation-coordinates mt-auto pt-7.5 font-mono text-[7px] leading-[1.8] font-normal not-italic text-faint" +
  " below-tablet:pt-6";

export const keyboardHint =
  "skills-constellation-keyboardHint mobile:hidden";

