// Static Tailwind utility strings. Keep each utility complete for source detection.
// Semantic hooks support descendant/state variants; they carry no authored CSS rules.

export const portal =
  "orbital-transition-portal fixed top-0 right-0 bottom-0 left-0 z-60 pointer-events-none overflow-hidden text-[var(--orbit-color)]" +
  " animate-[portal-fade_700ms_ease-out_both] [&_i]:absolute [&_i]:left-[var(--orbit-x)] [&_i]:top-[var(--orbit-y)] [&_i]:w-10" +
  " [&_i]:h-10 [&_i]:border [&_i]:border-solid [&_i]:border-current [&_i]:rounded-full" +
  " [&_i]:[box-shadow:0_0_24px_color-mix(in_srgb,currentColor_35%,transparent),inset_0_0_16px_color-mix(in_srgb,currentColor_12%,transparent)]" +
  " [&_i]:animate-[orbit-expand_680ms_cubic-bezier(.15,.6,.2,1)_both] [&_i:nth-of-type(2)]:[animation-delay:45ms]" +
  " [&_i:nth-of-type(2)]:opacity-[.6] [&_i:nth-of-type(2)]:[border-style:dashed] [&_i:nth-of-type(3)]:[animation-delay:85ms]" +
  " [&_i:nth-of-type(3)]:opacity-[.3] motion-reduce:hidden";

export const halo =
  "orbital-transition-halo absolute top-0 right-0 bottom-0 left-0" +
  " [background:radial-gradient(circle_at_var(--orbit-x)_var(--orbit-y),color-mix(in_srgb,var(--orbit-color)_9%,transparent),transparent_65%)]";

