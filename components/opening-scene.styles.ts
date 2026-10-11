// Static Tailwind utility strings. Keep each utility complete for source detection.
// Semantic hooks support descendant/state variants; they carry no authored CSS rules.

export const scene =
  "opening-scene-scene p-0 m-0 fixed top-0 right-0 bottom-0 left-0 w-full h-full max-w-none max-h-none border-[0] [border-style:none]" +
  " border-current text-foreground [background:radial-gradient(ellipse_at_28%_52%,_#00d8ff18,_transparent_52%),_#050b12] overflow-auto" +
  " overscroll-contain [&::backdrop]:[background:transparent]" +
  " [&[data-phase=leaving]]:animate-[depart_480ms_cubic-bezier(.2,.65,.3,1)_both] [&[data-phase=leaving]]:pointer-events-none" +
  " motion-reduce:[&[data-phase=leaving]]:animate-[none]";

export const grid =
  "opening-scene-grid [&::after]:[content:''] [&::after]:absolute [&::after]:bottom-[-25vh] [&::after]:left-[-25%]" +
  " [&::after]:w-[150%] [&::after]:h-[55vh]" +
  " [&::after]:[background:linear-gradient(#62f5ff28_1px,transparent_1px),linear-gradient(90deg,#62f5ff28_1px,transparent_1px)]" +
  " [&::after]:[background-size:70px_70px] [&::after]:[transform:perspective(550px)_rotateX(62deg)]" +
  " [&::after]:[transform-origin:center_top] [&::after]:[mask-image:linear-gradient(transparent,#0008_30%,#000)]" +
  " [&::after]:pointer-events-none absolute top-0 right-0 bottom-0 left-0 overflow-hidden pointer-events-none" +
  " [background:linear-gradient(#62f5ff08_1px,_transparent_1px),_linear-gradient(90deg,_#62f5ff08_1px,_transparent_1px)]" +
  " [background-size:64px_64px] [mask-image:linear-gradient(#0005,#000)]";

export const shell =
  "opening-scene-shell my-0 mx-auto relative w-[calc(100%_-_112px)] max-w-290 min-h-full flex flex-col" +
  " intro-tablet:w-[calc(100%_-_64px)] intro-mobile:w-[calc(100%_-_40px)]";

export const header =
  "opening-scene-header flex justify-between items-center gap-5 min-h-27 border-b [border-bottom-style:solid] border-b-[#62f5ff18]" +
  " intro-compact-desktop:min-h-20 intro-mobile:min-h-19.5 intro-tiny:min-h-15 intro-landscape:min-h-14";

export const brand =
  "opening-scene-brand flex items-center gap-3 font-mono text-[11px] leading-[1.45] font-normal not-italic uppercase tracking-[1px]" +
  " intro-mobile:text-[9px] intro-mobile:gap-[9px]";

export const identity =
  "opening-scene-identity text-right uppercase text-muted font-mono text-[9px] leading-[1.8] font-normal not-italic tracking-[1.5px]" +
  " [&>span]:block [&>span]:text-faint [&>span]:text-[8px] [&>span]:tracking-[1px] intro-mobile:text-[7px]" +
  " intro-mobile:tracking-[.7px] intro-mobile:[&>span]:text-[6px]";

export const body =
  "opening-scene-body py-9 px-0 [flex:1] grid grid-cols-[1.08fr_1fr] items-center gap-[clamp(30px,_6vw,_92px)]" +
  " intro-compact-desktop:py-6 intro-tablet:gap-6.5 intro-mobile:px-0 intro-mobile:grid-cols-[1fr] intro-mobile:gap-4" +
  " intro-mobile:pt-5.5 intro-mobile:pb-3.5 intro-short:pt-3 intro-short:gap-2.5 intro-tiny:py-2.5 intro-landscape:py-3" +
  " intro-landscape:gap-7.5";

export const instrument =
  "opening-scene-instrument mx-auto relative w-full max-w-120 intro-compact-desktop:max-w-90 intro-mobile:max-w-[235px]" +
  " intro-short:max-w-42.5 intro-tiny:max-w-32 intro-landscape:max-w-55";

export const coordinate =
  "opening-scene-coordinate block mb-3 text-center font-mono text-[8px] leading-[1.5] font-normal not-italic tracking-[2px]" +
  " text-[#829fb0] intro-tablet:text-[7px] intro-tablet:tracking-[1px] intro-mobile:text-[6px] intro-mobile:mb-0.5" +
  " intro-mobile:tracking-[1px] intro-tiny:hidden intro-landscape:text-[6px] intro-landscape:mb-1";

export const dial =
  "opening-scene-dial block w-full text-accent overflow-visible";

export const outerRing =
  "opening-scene-outerRing [stroke:#62f5ff45]";

export const tickRing =
  "opening-scene-tickRing [stroke:#62f5ff26]";

export const majorTick =
  "opening-scene-majorTick [stroke:#62f5ff7a]";

export const minorTick =
  "opening-scene-minorTick [stroke:#62f5ff37]";

export const orbits =
  "opening-scene-orbits [stroke:#62f5ff7a] [filter:drop-shadow(0_0_4px_#62f5ff45)] [transform-origin:220px_220px]" +
  " animate-[align_2800ms_cubic-bezier(.2,.6,.3,1)_both] [&_ellipse:nth-child(2)]:[stroke:#8ea5ff53] motion-reduce:animate-[none]";

export const innerRing =
  "opening-scene-innerRing [stroke:#62f5ff2b] [stroke-dasharray:2_7]";

export const progressRing =
  "opening-scene-progressRing [stroke:var(--accent)] [stroke-width:2] [stroke-linecap:round] [filter:drop-shadow(0_0_5px_#62f5ff88)]" +
  " [stroke-dasharray:var(--opening-progress)_100] [transform:rotate(-90deg)] [transform-origin:220px_220px]" +
  " [transition:stroke-dasharray_400ms_ease] motion-reduce:[transition:none]";

export const hand =
  "opening-scene-hand [stroke:currentColor] [transform-origin:220px_220px] animate-[synchronize_2800ms_cubic-bezier(.2,.6,.3,1)_both]" +
  " motion-reduce:animate-[none]";

export const crosshair =
  "opening-scene-crosshair [stroke:#62f5ff3f]";

export const dialCenter =
  "opening-scene-dialCenter absolute top-[calc(50%_+_10px)] left-[50%] [transform:translate(-50%,-50%)] w-[52%] text-center" +
  " [&>span]:text-[#93adbc] [&>span]:font-mono [&>span]:text-[7px] [&>span]:leading-[1.5] [&>span]:font-normal [&>span]:not-italic" +
  " [&>span]:tracking-[1.6px] [&_strong]:mx-0 [&_strong]:block [&_strong]:mt-[15px] [&_strong]:mb-[19px] [&_strong]:text-accent" +
  " [&_strong]:font-mono [&_strong]:text-[52px] [&_strong]:leading-[.95] [&_strong]:font-normal [&_strong]:not-italic" +
  " [&_strong]:tracking-[-3px] [&_strong]:tabular-nums [&_strong]:[text-shadow:0_0_20px_#62f5ff30] [&_strong_i]:text-[#93adbc]" +
  " [&_strong_i]:font-mono [&_strong_i]:text-[12px] [&_strong_i]:leading-[normal] [&_strong_i]:font-normal [&_strong_i]:not-italic" +
  " [&_strong_i]:tracking-[0] intro-mobile:top-[calc(50%_+_5px)] intro-mobile:[&>span]:text-[5px]" +
  " intro-mobile:[&>span]:tracking-[.5px] intro-mobile:[&_strong]:my-2.5 intro-mobile:[&_strong]:mx-0" +
  " intro-mobile:[&_strong]:text-[36px] intro-mobile:[&_strong_i]:text-[8px] intro-short:[&>span]:hidden" +
  " intro-short:[&_strong]:text-[30px] intro-tiny:top-[50%] intro-tiny:[&_strong]:my-2 intro-tiny:[&_strong]:mx-0" +
  " intro-tiny:[&_strong]:text-[27px] intro-landscape:[&_strong]:my-2.5 intro-landscape:[&_strong]:mx-0" +
  " intro-landscape:[&_strong]:text-[36px] intro-landscape:[&>span]:text-[5px]";

export const segments =
  "opening-scene-segments flex justify-center gap-[7px] [&_i]:w-4 [&_i]:h-[3px] [&_i]:[background:#62f5ff26]" +
  " [&_i]:[transition:background_250ms] [&_i[data-lit=true]]:[background:var(--accent)] intro-mobile:gap-1 intro-mobile:[&_i]:w-2.5" +
  " intro-mobile:[&_i]:h-0.5 motion-reduce:[&_i]:[transition:none]";

export const eras =
  "opening-scene-eras px-5 flex justify-around mt-2.5 text-faint font-mono text-[8px] leading-[1.5] font-normal not-italic" +
  " tracking-[2px] [&_span:first-child]:text-past [&_span:nth-child(2)]:text-accent [&_span:last-child]:text-future" +
  " intro-mobile:text-[6px] intro-mobile:mt-0 intro-tiny:hidden intro-landscape:mt-1 intro-landscape:text-[6px]";

export const copy =
  "opening-scene-copy min-w-0 [&_h2]:mt-5 [&_h2]:font-display [&_h2]:text-[44px] [&_h2]:leading-[1.12] [&_h2]:font-medium" +
  " [&_h2]:not-italic [&_h2]:tracking-[-1.6px] [&_h2]:uppercase [&_h2_em]:text-accent [&_h2_em]:font-medium [&_h2_em]:not-italic" +
  " [&_h2_em]:[text-shadow:0_0_25px_#62f5ff20] intro-compact-desktop:[&_h2]:text-[44px] intro-tablet:[&_h2]:text-[43px]" +
  " intro-mobile:[&_h2]:text-[30px] intro-mobile:[&_h2]:leading-[1.12] intro-mobile:[&_h2]:mt-2.5 intro-mobile:[&_h2]:tracking-[-1px]" +
  " intro-short:[&_h2]:text-[30px] intro-tiny:[&_h2]:text-[28px] intro-tiny:[&_h2]:mt-2 intro-landscape:[&_h2]:text-[30px]" +
  " intro-landscape:[&_h2]:mt-2.5";

export const eyebrow =
  "opening-scene-eyebrow flex items-center gap-[9px] text-accent font-mono text-[9px] leading-[1.8] font-normal not-italic" +
  " tracking-[1.7px] [&>span]:w-[5px] [&>span]:h-[5px] [&>span]:rounded-full [&>span]:[background:currentColor]" +
  " intro-mobile:text-[7px]";

export const introduction =
  "opening-scene-introduction mt-5 text-muted text-[12px] leading-[1.85] intro-mobile:text-[11px] intro-mobile:mt-3" +
  " intro-mobile:[&_br]:hidden intro-short:mt-2 intro-tiny:hidden intro-landscape:hidden";

export const steps =
  "opening-scene-steps p-0 mx-0 mt-[35px] mb-5 list-none [&_li]:flex [&_li]:gap-3 [&_li]:items-center [&_li]:min-h-10.5" +
  " [&_li]:text-[#819dab] [&_li]:text-[11px] [&_li]:[transition:color_250ms] [&_li[data-state=current]]:text-foreground" +
  " [&_li[data-state=complete]]:text-foreground [&_li[data-state=current]_.opening-scene-stepMarker]:border-[#62f5ff80]" +
  " [&_li[data-state=current]_.opening-scene-stepMarker]:text-accent" +
  " [&_li[data-state=current]_.opening-scene-stepMarker]:[background:#62f5ff0a]" +
  " [&_li[data-state=complete]_.opening-scene-stepMarker]:text-accent" +
  " [&_li[data-state=complete]_.opening-scene-stepMarker]:border-[#62f5ff3d]" +
  " [&_li[data-state=current]_.opening-scene-stepState]:text-accent [&_li[data-state=complete]_.opening-scene-stepState]:text-accent" +
  " intro-compact-desktop:mt-5 intro-mobile:mx-0 intro-mobile:mt-4.5 intro-mobile:mb-3.5 intro-mobile:[&_li]:min-h-[35px]" +
  " intro-mobile:[&_li]:text-[10px] intro-short:mt-3 intro-tiny:mx-0 intro-tiny:mt-3.5 intro-tiny:mb-2.5 intro-tiny:[&_li]:min-h-8" +
  " intro-landscape:my-3 intro-landscape:mx-0 intro-landscape:[&_li]:min-h-7 motion-reduce:[&_li]:[transition:none]";

export const stepMarker =
  "opening-scene-stepMarker inline-flex w-[25px] h-[25px] items-center justify-center shrink-0 border border-solid border-[#62f5ff35]" +
  " rounded-none font-mono text-[8px] leading-[normal] font-normal not-italic text-faint intro-mobile:w-[23px] intro-mobile:h-[23px]";

export const stepState =
  "opening-scene-stepState ml-auto font-mono text-[7px] leading-[normal] font-normal not-italic tracking-[1px] text-faint";

export const progress =
  "opening-scene-progress h-0.5 [background:#62f5ff1a] overflow-hidden [&>span]:block [&>span]:h-full" +
  " [&>span]:[background:var(--accent)] [&>span]:[box-shadow:0_0_10px_#62f5ff88] [&>span]:[transition:width_400ms_ease]" +
  " motion-reduce:[&>span]:[transition:none]";

export const status =
  "opening-scene-status flex items-center gap-2 min-h-[35px] mt-2.5 text-[#a5bac6] font-mono text-[8px] leading-[1.7] font-normal" +
  " not-italic [&>span:first-child]:w-1 [&>span:first-child]:h-1 [&>span:first-child]:rounded-full" +
  " [&>span:first-child]:[background:var(--accent)] [&>span:first-child]:shrink-0 intro-tablet:flex-wrap intro-mobile:mt-[7px]" +
  " intro-mobile:min-h-6 intro-mobile:text-[7px] intro-landscape:min-h-5 intro-landscape:mt-1.5";

export const readiness =
  "opening-scene-readiness ml-auto text-faint text-right intro-tablet:hidden";

export const footer =
  "opening-scene-footer flex items-center justify-between gap-5 min-h-[85px] border-t [border-top-style:solid] border-t-[#62f5ff18]" +
  " [&>span]:text-faint [&>span]:font-mono [&>span]:text-[8px] [&>span]:leading-[1.8] [&>span]:font-normal [&>span]:not-italic" +
  " [&>span]:tracking-[1px] [&_button]:py-0 [&_button]:px-1 [&_button]:flex [&_button]:items-center [&_button]:justify-center" +
  " [&_button]:gap-3.5 [&_button]:min-h-11 [&_button]:text-accent [&_button]:[background:none] [&_button]:border-[0]" +
  " [&_button]:[border-style:none] [&_button]:border-current [&_button]:text-[11px] [&_button]:shrink-0" +
  " [&_button:hover]:text-foreground [&_button:focus-visible]:outline-offset-[1px] [&_kbd]:py-[3px] [&_kbd]:px-[5px] [&_kbd]:border" +
  " [&_kbd]:border-solid [&_kbd]:border-[#62f5ff2a] [&_kbd]:[border-radius:3px] [&_kbd]:text-muted [&_kbd]:font-mono" +
  " [&_kbd]:text-[7px] [&_kbd]:leading-[normal] [&_kbd]:font-normal [&_kbd]:not-italic intro-compact-desktop:min-h-16" +
  " intro-tablet:[&>span]:max-w-57.5 intro-mobile:min-h-[65px] intro-mobile:gap-2.5 intro-mobile:[&>span]:max-w-[145px]" +
  " intro-mobile:[&>span]:text-[6px] intro-mobile:[&>span]:tracking-[.5px] intro-mobile:[&_button]:text-[10px]" +
  " intro-mobile:[&_button]:gap-[9px] intro-mobile:[&_kbd]:hidden intro-tiny:min-h-14 intro-landscape:min-h-13";

