// Static Tailwind utility strings. Keep each utility complete for source detection.
// Semantic hooks support descendant/state variants; they carry no authored CSS rules.

export const exhibit =
  "project-exhibit-exhibit relative [--lens-x:50%] [--lens-y:50%] rounded-none" +
  " [&[data-lens-open=true]_.project-exhibit-lens]:opacity-[1] [&[data-lens-open=true]_.project-exhibit-lens]:visible" +
  " [&_.project-art]:[border-bottom-left-radius:0] [&_.project-art]:[border-bottom-right-radius:0]";

export const lens =
  "project-exhibit-lens absolute top-0 right-0 bottom-13.5 left-0 border border-solid" +
  " border-[color-mix(in_srgb,var(--exhibit-accent)_50%,transparent)] rounded-none [background:#08111af5] opacity-[0] invisible" +
  " [transition:opacity_220ms_ease,visibility_220ms] overflow-hidden";

export const blueprint =
  "project-exhibit-blueprint absolute top-0 right-0 bottom-0 left-0" +
  " [background:radial-gradient(circle_110px_at_var(--lens-x)_var(--lens-y),color-mix(in_srgb,var(--exhibit-accent)_11%,transparent),transparent),linear-gradient(#62f5ff08_1px,transparent_1px),linear-gradient(90deg,#62f5ff08_1px,transparent_1px)]" +
  " [background-size:auto,24px_24px,24px_24px] pointer-events-none";

export const reading =
  "project-exhibit-reading absolute top-5.5 right-5.5 bottom-5.5 left-5.5 overflow-auto [scrollbar-width:thin]" +
  " [scrollbar-color:#384d5a_transparent] [&_h4]:mx-0 [&_h4]:mt-[11px] [&_h4]:mb-2 [&_h4]:font-display [&_h4]:text-[21px]" +
  " [&_h4]:leading-[1.2] [&_h4]:font-medium [&_h4]:not-italic [&_h4]:uppercase [&_h4]:text-foreground [&_p]:text-[#a5bac6]" +
  " [&_p]:text-[10px] [&_p]:leading-[1.6] [&_p]:max-w-120 [&_pre]:py-[11px] [&_pre]:px-[13px] [&_pre]:mx-0 [&_pre]:mt-3" +
  " [&_pre]:mb-[9px] [&_pre]:[background:#0d1c2b] [&_pre]:border [&_pre]:border-solid [&_pre]:border-[#183450] [&_pre]:font-mono" +
  " [&_pre]:text-[10px] [&_pre]:leading-[1.65] [&_pre]:font-normal [&_pre]:not-italic [&_pre]:whitespace-pre-wrap" +
  " [&_pre]:[overflow-wrap:anywhere] [&_pre]:text-[var(--exhibit-accent)] [&_small]:block [&_small]:mt-[11px] [&_small]:text-faint" +
  " [&_small]:text-[8px] [&_small]:leading-[1.5] archive-desktop:[.archive-grid_&]:top-7.5 archive-desktop:[.archive-grid_&]:right-7.5" +
  " archive-desktop:[.archive-grid_&]:bottom-7.5 archive-desktop:[.archive-grid_&]:left-7.5" +
  " archive-desktop:[.archive-grid_&_h4]:text-[35px] archive-desktop:[.archive-grid_&_p]:text-[12px]" +
  " archive-desktop:[.archive-grid_&_pre]:text-[12px] lens-tablet:top-4 lens-tablet:right-4 lens-tablet:bottom-4 lens-tablet:left-4" +
  " lens-tablet:[&_h4]:text-[20px] lens-tablet:[&_p]:text-[9px] lens-tablet:[&_small]:hidden mobile:top-5 mobile:right-5" +
  " mobile:bottom-5 mobile:left-5 mobile:[&_h4]:text-[24px] mobile:[&_p]:text-[10px] mobile:[&_small]:text-[7px]";

export const eyebrow =
  "project-exhibit-eyebrow text-[var(--exhibit-accent)] font-mono text-[8px] leading-[normal] font-normal not-italic tracking-[1.2px]";

export const flow =
  "project-exhibit-flow p-0 mx-0 flex flex-wrap gap-1.5 list-none mt-[13px] mb-0 [&_li]:py-[7px] [&_li]:px-[9px] [&_li]:flex" +
  " [&_li]:items-center [&_li]:gap-[7px] [&_li]:text-[var(--exhibit-accent)] [&_li]:border [&_li]:border-solid" +
  " [&_li]:border-[color-mix(in_srgb,var(--exhibit-accent)_24%,transparent)] [&_li]:rounded-none [&_li]:text-[9px]" +
  " [&_li]:[background:#0c1a28] [&_li>span]:font-mono [&_li>span]:text-[7px] [&_li>span]:leading-[normal] [&_li>span]:font-normal" +
  " [&_li>span]:not-italic [&_li>span]:text-muted archive-desktop:[.archive-grid_&]:mt-5 archive-desktop:[.archive-grid_&_li]:p-[11px]" +
  " archive-desktop:[.archive-grid_&_li]:text-[11px]";

export const controls =
  "project-exhibit-controls py-1 px-[9px] min-h-13.5 flex items-center justify-between gap-2.5 [background:#0a1520] border" +
  " border-solid border-[#162f48] border-t-[0] [border-top-style:none] border-t-current rounded-none [&_button]:py-2" +
  " [&_button]:px-[11px] [&_button]:min-h-11 [&_button]:inline-flex [&_button]:items-center [&_button]:justify-center [&_button]:gap-2" +
  " [&_button]:border [&_button]:border-solid [&_button]:border-[color-mix(in_srgb,var(--exhibit-accent)_30%,transparent)]" +
  " [&_button]:rounded-none [&_button]:[background:#08111aed] [&_button]:text-[var(--exhibit-accent)] [&_button]:text-[9px]" +
  " [&_button]:[backdrop-filter:blur(8px)] [&_a]:p-2 [&_a]:min-h-11 [&_a]:inline-flex [&_a]:items-center [&_a]:justify-center" +
  " [&_a]:gap-2 [&_a]:border [&_a]:border-solid [&_a]:border-[color-mix(in_srgb,var(--exhibit-accent)_30%,transparent)]" +
  " [&_a]:rounded-none [&_a]:[background:#08111aed] [&_a]:text-[var(--exhibit-accent)] [&_a]:text-[9px]" +
  " [&_a]:[backdrop-filter:blur(8px)] [&_a]:w-11 [&_button:hover]:border-[var(--exhibit-accent)] [&_button:hover]:[background:#112538]" +
  " [&_button:hover]:[box-shadow:0_0_13px_color-mix(in_srgb,var(--exhibit-accent)_12%,transparent)]" +
  " [&_a:hover]:border-[var(--exhibit-accent)] [&_a:hover]:[background:#112538]" +
  " [&_a:hover]:[box-shadow:0_0_13px_color-mix(in_srgb,var(--exhibit-accent)_12%,transparent)]";

