// Static Tailwind utility strings. Keep each utility complete for source detection.
// Semantic hooks support descendant/state variants; they carry no authored CSS rules.

export const background =
  "scroll-background-background [--scroll-progress:0] fixed top-0 right-0 bottom-0 left-0 [z-index:-1] overflow-hidden" +
  " pointer-events-none select-none text-accent [contain:strict]";

export const glow =
  "scroll-background-glow absolute top-[-120px] right-[-120px] bottom-[-120px] left-[-120px]" +
  " [background:radial-gradient(ellipse_at_78%_26%,#00d8ff18,transparent_48%),radial-gradient(ellipse_at_8%_88%,#ff9b450b,transparent_42%)]" +
  " [transform:translate3d(0,calc(var(--scroll-progress)_*_-35px),0)] [[data-motion=reduced]_&]:transform-none" +
  " mobile:[transform:translate3d(0,calc(var(--scroll-progress)_*_-20px),0)]";

export const floor =
  "scroll-background-floor absolute left-[-25%] bottom-[-28vh] w-[150%] h-[65vh]" +
  " [background:linear-gradient(#62f5ff35_1px,transparent_1px),linear-gradient(90deg,#62f5ff35_1px,transparent_1px)]" +
  " [background-size:80px_80px] [transform:perspective(550px)_rotateX(62deg)_translateY(calc(var(--scroll-progress)_*_-70px))]" +
  " [transform-origin:center_top] [mask-image:linear-gradient(transparent,#0009_35%,#000_85%)] opacity-[.45] mobile:opacity-[.28]" +
  " mobile:[background-size:55px_55px]";

export const circuits =
  "scroll-background-circuits absolute top-[-50px] right-0 bottom-[-50px] left-0 w-full h-[calc(100%_+_100px)] [stroke-width:1]" +
  " opacity-[.17] [transform:translate3d(calc(var(--scroll-progress)_*_-12px),calc(var(--scroll-progress)_*_-55px),0)]" +
  " [[data-motion=reduced]_&]:transform-none mobile:opacity-[.12]";

export const stars =
  "scroll-background-stars absolute top-[-100px] right-[-40px] bottom-[-100px] left-[-40px] w-[calc(100%_+_80px)]" +
  " h-[calc(100%_+_200px)] opacity-[.32] [transform:translate3d(0,calc(var(--scroll-progress)_*_-28px),0)]" +
  " [[data-motion=reduced]_&]:transform-none mobile:opacity-[.24]" +
  " mobile:[transform:translate3d(0,calc(var(--scroll-progress)_*_-16px),0)]";

export const orbits =
  "scroll-background-orbits absolute top-[-100px] right-[-40px] bottom-[-100px] left-[-40px] w-[calc(100%_+_80px)]" +
  " h-[calc(100%_+_200px)] opacity-[.12]" +
  " [transform:translate3d(calc(var(--scroll-progress)_*_-18px),calc(var(--scroll-progress)_*_-78px),0)_rotate(calc(var(--scroll-progress)_*_-4deg))]" +
  " [[data-motion=reduced]_&]:transform-none mobile:opacity-[.09]" +
  " mobile:[transform:translate3d(0,calc(var(--scroll-progress)_*_-44px),0)_rotate(calc(var(--scroll-progress)_*_-2deg))]";

export const dial =
  "scroll-background-dial absolute top-[-100px] right-[-40px] bottom-[-100px] left-[-40px] w-[calc(100%_+_80px)]" +
  " h-[calc(100%_+_200px)] opacity-[.075]" +
  " [transform:translate3d(calc(var(--scroll-progress)_*_15px),calc(var(--scroll-progress)_*_-125px),0)_rotate(calc(var(--scroll-progress)_*_3deg))]" +
  " [[data-motion=reduced]_&]:transform-none mobile:opacity-[.06]" +
  " mobile:[transform:translate3d(0,calc(var(--scroll-progress)_*_-64px),0)]";

export const fade =
  "scroll-background-fade absolute top-0 right-0 bottom-0 left-0" +
  " [background:linear-gradient(90deg,#050b128c,transparent_45%,#050b1238),linear-gradient(0deg,#050b12b3,transparent_28%,transparent_75%,#050b1240)]";

