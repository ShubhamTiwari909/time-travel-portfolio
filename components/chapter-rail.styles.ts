// Static Tailwind utility strings. Keep each utility complete for source detection.
// Semantic hooks support descendant/state variants; they carry no authored CSS rules.

export const rail =
  "chapter-rail-rail [--chapter-progress:0] fixed z-25 left-[max(14px,calc((100vw_-_1390px)/2))] top-[50%]" +
  " [transform:translateY(-50%)] w-11 flex flex-col gap-3 [&_a]:relative [&_a]:flex [&_a]:items-center [&_a]:justify-center [&_a]:w-11" +
  " [&_a]:min-h-11 [&_a]:[background:#08111af2] [&_a]:border [&_a]:border-solid [&_a]:border-line [&_a]:rounded-full [&_a]:text-faint" +
  " [&_a]:font-mono [&_a]:text-[8px] [&_a]:leading-[normal] [&_a]:font-normal [&_a]:not-italic" +
  " [&_a]:[transition:color_180ms,border-color_180ms,background_180ms] [&_a:hover]:text-accent [&_a:hover]:border-[#3698a3]" +
  " [&_a:hover]:[background:#0f2234] [&_a[aria-current]]:text-accent [&_a[aria-current]]:border-[#3698a3]" +
  " [&_a[aria-current]]:[background:#0f2234] [&_a[aria-current]]:[box-shadow:0_0_22px_#62f5ff0c]" +
  " [&_a:hover_.chapter-rail-label]:opacity-[1] [&_a:hover_.chapter-rail-label]:visible" +
  " [&_a:hover_.chapter-rail-label]:[transform:translate(0,-50%)] [&_a:focus-visible_.chapter-rail-label]:opacity-[1]" +
  " [&_a:focus-visible_.chapter-rail-label]:visible [&_a:focus-visible_.chapter-rail-label]:[transform:translate(0,-50%)]" +
  " below-desktop:p-1 below-desktop:top-auto below-desktop:left-[50%] below-desktop:bottom-[max(14px,env(safe-area-inset-bottom))]" +
  " below-desktop:[transform:translateX(-50%)] below-desktop:w-[calc(100%_-_40px)] below-desktop:max-w-107.5 below-desktop:flex-row" +
  " below-desktop:gap-0.5 below-desktop:border below-desktop:border-solid below-desktop:border-[#364b57] below-desktop:rounded-none" +
  " below-desktop:[background:#08111af2] below-desktop:[backdrop-filter:blur(15px)] below-desktop:[&_a]:border-[0]" +
  " below-desktop:[&_a]:[border-style:none] below-desktop:[&_a]:border-current below-desktop:[&_a]:rounded-none" +
  " below-desktop:[&_a]:w-auto below-desktop:[&_a]:[flex:1] below-desktop:[&_a]:min-w-0 below-desktop:[&_a]:min-h-11" +
  " below-desktop:[&_a]:[background:transparent] below-desktop:[&_a]:text-[9px]";

export const label =
  "chapter-rail-label py-2 px-[11px] absolute left-13.5 top-[50%] [transform:translate(5px,-50%)] text-accent [background:#0b1926]" +
  " border border-solid border-[#225f66] [border-radius:3px] text-[10px] opacity-[0] invisible" +
  " [transition:opacity_180ms,transform_180ms] below-desktop:p-0 below-desktop:[position:static] below-desktop:transform-none!" +
  " below-desktop:opacity-[1] below-desktop:visible below-desktop:border-[0] below-desktop:[border-style:none]" +
  " below-desktop:border-current below-desktop:[background:transparent] below-desktop:[font-family:inherit]" +
  " below-desktop:[font-size:inherit] below-desktop:leading-[inherit] below-desktop:[font-weight:inherit]" +
  " below-desktop:[font-style:inherit] below-desktop:text-inherit";

export const track =
  "chapter-rail-track absolute top-5.5 bottom-5.5 left-[21px] w-[1px] [background:var(--line)] [&_i]:block [&_i]:h-full" +
  " [&_i]:[background:#5ebec9] [&_i]:[transform-origin:top] [&_i]:[transform:scaleY(var(--chapter-progress))] below-desktop:hidden";

export const number =
  "chapter-rail-number below-desktop:hidden";

