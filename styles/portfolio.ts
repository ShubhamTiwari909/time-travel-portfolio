// Static Tailwind utility strings. Keep each utility complete for source detection.
// Semantic hooks support descendant/state variants; they carry no authored CSS rules.

export const siteShell =
  "site-shell relative isolate min-h-[100svh]";

export const wrap =
  "wrap mx-auto w-[calc(100%_-_112px)] max-w-314 below-desktop:w-[calc(100%_-_72px)] below-tablet:w-[calc(100%_-_48px)]" +
  " mobile:w-[calc(100%_-_40px)]";

export const muted =
  "muted text-muted";

export const small =
  "small text-[12px]";

export const past =
  "past text-past";

export const present =
  "present text-accent";

export const future =
  "future text-future";

export const eyebrow =
  "eyebrow flex items-center gap-2.5 font-mono text-[10px] font-normal tracking-[1.6px] leading-[1.8] uppercase";

export const eyebrowDivider =
  "eyebrow-divider px-[3px] text-faint";

export const statusDot =
  "status-dot inline-block h-[5px] w-[5px] rounded-full [background:var(--accent)] shrink-0 [box-shadow:0_0_10px_#62f5ff75]" +
  " [&.off]:[background:var(--faint)] [&.off]:[box-shadow:none]";

export const skipLink =
  "skip-link p-3.5 absolute top-[-60px] left-5 z-100 [background:var(--accent)] text-background [&:focus]:top-2.5";

export const siteHeader =
  "site-header h-[103px] flex items-center justify-between border-b [border-bottom-style:solid] border-b-[#62f5ff35] gap-5" +
  " below-tablet:h-[85px] mobile:h-[77px] mobile:relative";

export const brand =
  "brand flex items-center gap-[13px] font-mono text-[12px] leading-[1.22] tracking-[1.4px] uppercase [&_b]:font-medium" +
  " below-tablet:gap-2.5 below-tablet:[&>svg]:w-7.5 mobile:text-[10px] mobile:tracking-[.8px]";

export const observatoryMark =
  "observatory-mark text-accent shrink-0 [filter:drop-shadow(0_0_7px_#62f5ff5c)]";

export const mainNav =
  "main-nav flex items-center gap-7.5 ml-16.5 [&_a]:py-3.5 [&_a]:text-muted [&_a]:text-[10px] [&_a]:[transition:color_.2s]" +
  " [&_a]:font-mono [&_a]:uppercase [&_a]:tracking-[.8px] [&_a:hover]:text-foreground [&_a[aria-current]]:text-foreground" +
  " [&_a[aria-current]::after]:mx-auto [&_a[aria-current]::after]:block [&_a[aria-current]::after]:[content:'']" +
  " [&_a[aria-current]::after]:h-[1px] [&_a[aria-current]::after]:w-5 [&_a[aria-current]::after]:rounded-none" +
  " [&_a[aria-current]::after]:[background:var(--accent)] [&_a[aria-current]::after]:mt-[7px] [&_a[aria-current]::after]:mb-[-10px]" +
  " [&_a[aria-current]::after]:[box-shadow:0_0_9px_#62f5ff99] below-desktop:ml-0 below-desktop:gap-5 mobile:py-[17px] mobile:px-5" +
  " mobile:hidden mobile:absolute mobile:top-19 mobile:right-[-20px] mobile:bottom-auto mobile:left-[-20px] mobile:z-20" +
  " mobile:[background:#0a1520] mobile:border-b mobile:[border-bottom-style:solid] mobile:border-b-line mobile:[&.is-open]:flex" +
  " mobile:[&.is-open]:flex-col mobile:[&.is-open]:items-stretch mobile:[&.is-open]:gap-0 mobile:[&_a]:p-[15px]" +
  " mobile:[&_a]:text-[12px] mobile:[&_.mobile-contact]:block mobile:[&_a[aria-current]::after]:hidden";

export const headerActions =
  "header-actions flex items-center gap-6.5 below-desktop:gap-4.5 mobile:gap-4.5";

export const motionToggle =
  "motion-toggle py-3 px-0 flex items-center gap-2 border-[0] [border-style:none] border-current [background:none] text-[10px]" +
  " text-muted below-tablet:text-[9px] mobile:min-h-11";

export const headerContact =
  "header-contact flex items-center gap-[17px] text-[10px] font-mono uppercase tracking-[.8px] below-tablet:hidden";

export const menuToggle =
  "menu-toggle [&.icon-button]:hidden mobile:[&.icon-button]:inline-flex";

export const mobileContact =
  "mobile-contact hidden";

export const hero =
  "hero grid grid-cols-[1fr_1fr] items-center gap-7.5 min-h-[655px] pt-12.5 pb-[55px] [&_h1]:text-[clamp(64px,6.1vw,88px)]" +
  " [&_h1]:leading-[1.03] [&_h1]:tracking-[-3.5px] [&_h1]:mt-7 [&_h1]:font-medium wide:min-h-182.5 wide:gap-20 below-desktop:min-h-145" +
  " below-desktop:gap-2.5 below-desktop:[&_h1]:text-[70px] below-tablet:pt-[35px] below-tablet:pb-[43px] below-tablet:min-h-130" +
  " below-tablet:[&_h1]:text-[64px] mobile:grid-cols-[1fr] mobile:gap-7.5 mobile:pt-[37px] mobile:pb-[33px] mobile:[&_h1]:mt-[27px]" +
  " mobile:[&_h1]:text-[clamp(42px,13.5vw,72px)] mobile:[&_h1]:tracking-[-2px] [&_h1_em]:[text-shadow:0_0_30px_#62f5ff30]";

export const heroCopy =
  "hero-copy py-5.5 relative z-1 below-tablet:[&>.eyebrow]:max-w-60 below-tablet:[&>.eyebrow]:flex-wrap" +
  " below-tablet:[&>.eyebrow]:gap-1.5 mobile:p-0 mobile:[&>.eyebrow]:max-w-none mobile:[&>.eyebrow]:gap-[7px]" +
  " mobile:[&>.eyebrow]:text-[7px] [&>.eyebrow]:text-accent [&>.eyebrow]:text-[9px]";

export const heroLede =
  "hero-lede text-[16px] max-w-[415px] mt-7 text-[#b4c8d4] leading-[1.7] below-tablet:text-[13px] mobile:text-[14px] mobile:max-w-85" +
  " mobile:mt-6";

export const heroInvitation =
  "hero-invitation text-[12px] text-muted mt-[17px] below-tablet:text-[11px] mobile:mt-[17px] mobile:text-[12px]";

export const heroActions =
  "hero-actions flex items-center gap-[27px] mt-7.5 below-desktop:gap-4 below-desktop:[&_.button]:px-[13px]" +
  " below-desktop:[&_.button]:text-[10px] below-desktop:[&_.button]:gap-3 below-tablet:flex-wrap below-tablet:gap-4.5 mobile:flex-wrap" +
  " mobile:gap-4 mobile:mt-6.5 mobile:[&_.button]:px-[13px] mobile:[&_.button]:min-h-12 mobile:[&_.button]:text-[9px]" +
  " mobile:[&_.button]:gap-2.5 mobile:[&_.button]:tracking-[.4px] mobile:[&>.text-link]:text-[10px] mobile:[&>.text-link]:gap-[7px]";

export const button =
  "button py-[13px] px-5 inline-flex items-center justify-center gap-[17px] min-h-[47px] border border-solid border-[#62f5ff46]" +
  " [background:#06131dcc] rounded-none text-[10px] font-medium" +
  " [transition:background_180ms,border-color_180ms,box-shadow_180ms,transform_180ms] whitespace-nowrap relative font-mono uppercase" +
  " tracking-[.6px] [&:hover]:border-accent [&:hover]:[background:#0b2633] [&:hover]:[transform:translateY(-1px)]" +
  " [&:hover]:[box-shadow:0_0_22px_#62f5ff16,inset_0_0_15px_#62f5ff08]";

export const buttonPrimary =
  "button-primary [&.button-primary]:[background:#62f5ff0c] [&.button-primary]:text-accent [&.button-primary]:border-[#62f5ffb3] [box-shadow:inset_0_0_18px_#62f5ff08,0_0_18px_#62f5ff0d]" +
  " [&.button-primary:hover]:[background:#62f5ff1a] [&.button-primary:hover]:border-accent [&::after]:[content:''] [&::after]:absolute [&::after]:right-[3px]" +
  " [&::after]:bottom-[3px] [&::after]:w-1 [&::after]:h-1 [&::after]:[background:currentColor]" +
  " [&::after]:[box-shadow:0_0_7px_currentColor]";

export const buttonSmall =
  "button-small py-2.5 px-[15px] min-h-10";

export const textLink =
  "text-link inline-flex items-center gap-3 text-[10px] leading-[1.8] font-mono [&:hover]:text-accent" +
  " [&_svg]:[transition:transform_.2s] [&:hover_svg]:[transform:translate(2px,-2px)]";

export const heroFootnote =
  "hero-footnote flex gap-[23px] mt-[39px] text-faint text-[8px] font-mono [&_span+span]:pl-[23px] [&_span+span]:border-l" +
  " [&_span+span]:[border-left-style:solid] [&_span+span]:border-l-line below-desktop:gap-3.5 below-desktop:[&_span+span]:pl-3.5" +
  " below-tablet:flex-col below-tablet:gap-[7px] below-tablet:mt-6 below-tablet:[&_span+span]:p-0" +
  " below-tablet:[&_span+span]:border-[0] below-tablet:[&_span+span]:[border-style:none] below-tablet:[&_span+span]:border-current" +
  " mobile:flex-row mobile:gap-3.5 mobile:mt-6 mobile:text-[6.5px] mobile:[&_span+span]:pl-3.5 mobile:[&_span+span]:border-l" +
  " mobile:[&_span+span]:[border-left-style:solid] mobile:[&_span+span]:border-l-line";

export const homeInstrument =
  "home-instrument max-w-146.5 w-full relative self-center [background:radial-gradient(ellipse_at_50%_45%,#00d8ff0b,transparent_65%)]" +
  " [&_.orbital-instrument]:mt-[-12px] [&_.orbital-instrument]:mb-[-36px] mobile:mx-auto mobile:max-w-110" +
  " mobile:[&_.orbital-instrument]:mb-[-17px] [&::before]:[content:''] [&::before]:absolute [&::before]:top-4.5 [&::before]:right-2" +
  " [&::before]:bottom-22.5 [&::before]:left-2 [&::before]:pointer-events-none [&::before]:border [&::before]:border-solid" +
  " [&::before]:border-[#62f5ff16]" +
  " [&::before]:[background:linear-gradient(var(--accent),var(--accent))_0_0/25px_1px_no-repeat,linear-gradient(var(--accent),var(--accent))_0_0/1px_25px_no-repeat,linear-gradient(var(--accent),var(--accent))_100%_100%/25px_1px_no-repeat,linear-gradient(var(--accent),var(--accent))_100%_100%/1px_25px_no-repeat]" +
  " mobile:[&::before]:top-[15px] mobile:[&::before]:right-0 mobile:[&::before]:bottom-[75px] mobile:[&::before]:left-0";

export const instrumentCoordinates =
  "instrument-coordinates px-[15px] flex justify-between font-mono text-[8px] tracking-[1.1px] text-[#8cb8ca] below-tablet:text-[6px]" +
  " mobile:text-[7px]";

export const orbitalInstrument =
  "orbital-instrument block w-full h-auto mt-1.5";

export const timeControls =
  "time-controls px-0 my-0 mx-5 pt-4.5 pb-3 border-t [border-top-style:solid] border-t-line [&.minimal]:my-0 [&.minimal]:mx-auto" +
  " [&.minimal]:w-[70%] below-tablet:[&.minimal]:w-[85%] mobile:[&.minimal]:w-[86%]";

export const timeControlLabel =
  "time-control-label flex justify-between items-center gap-2.5 font-mono text-[9px] text-muted [&_label]:tracking-[1px]" +
  " [&_label]:uppercase";

export const tinyDot =
  "tiny-dot px-1 text-faint";

export const timeButtons =
  "time-buttons flex justify-between items-center gap-2";

export const playbackButtons =
  "playback-buttons flex gap-[3px]";

export const iconButton =
  "icon-button inline-flex items-center justify-center w-9 min-h-9 border-[0] [border-style:none] border-current" +
  " [background:transparent] text-muted [border-radius:3px] [&:hover]:[background:#102336] [&:hover]:text-accent mobile:min-h-11" +
  " mobile:w-11";

export const primaryPlay =
  "primary-play [&.primary-play]:text-accent";

export const controlHint =
  "control-hint text-faint text-[8px] below-tablet:text-[7px] mobile:text-[8px]";

export const chapterStrip =
  "chapter-strip border border-solid border-[#62f5ff30] rounded-none grid grid-cols-3 [background:#06121acc] [&>a]:py-6 [&>a]:px-7.5" +
  " [&>a]:flex [&>a]:items-center [&>a]:gap-6 [&>a]:[transition:background_.2s] [&>a:hover]:[background:#0b2330] [&>a+a]:border-l" +
  " [&>a+a]:[border-left-style:solid] [&>a+a]:border-l-line [&_p]:text-[10px] [&_p]:text-muted [&_p]:mt-1.5 [&>a>svg]:ml-auto" +
  " [&>a>svg]:text-faint below-desktop:[&>a]:p-5.5 below-desktop:[&>a]:gap-[15px] below-desktop:[&_p]:text-[9px]" +
  " below-tablet:[&>a]:py-4.5 below-tablet:[&>a]:px-[15px] below-tablet:[&>a]:gap-2.5 below-tablet:[&>a>svg]:hidden" +
  " below-tablet:[&_p]:text-[8px] mobile:grid-cols-[1fr] mobile:[&>a]:py-[19px] mobile:[&>a]:px-[23px] mobile:[&>a]:gap-5.5" +
  " mobile:[&>a+a]:border-l-[0] mobile:[&>a+a]:[border-left-style:none] mobile:[&>a+a]:border-l-current mobile:[&>a+a]:border-t" +
  " mobile:[&>a+a]:[border-top-style:solid] mobile:[&>a+a]:border-t-line mobile:[&_p]:text-[10px] mobile:[&>a>svg]:block";

export const chapterNumber =
  "chapter-number font-mono text-accent text-[11px] self-start mt-1 below-tablet:text-[9px] mobile:text-[10px]";

export const chapterLabel =
  "chapter-label font-mono text-[9px] tracking-[1.5px] flex items-center gap-2.5 below-tablet:text-[7px] below-tablet:tracking-[1px]" +
  " mobile:text-[9px]";

export const chapterCurrent =
  "chapter-current [background:linear-gradient(120deg,#62f5ff0b,transparent)] [box-shadow:inset_0_2px_var(--accent)]";

export const sectionSpace =
  "section-space py-21.5 below-tablet:py-[65px] mobile:py-14";

export const sectionHeading =
  "section-heading flex items-end justify-between gap-5 mb-[33px] [&_h2]:text-[40px] [&_h2]:tracking-[-1.3px] [&_h2]:leading-[1.15]" +
  " [&_h2]:mt-[13px] [&_h2]:font-medium [&>.text-link]:mb-[5px] below-tablet:[&_h2]:text-[35px] mobile:mb-6.5 mobile:items-end" +
  " mobile:[&_h2]:text-[30px] mobile:[&_.eyebrow]:text-[7px] mobile:[&_.eyebrow]:tracking-[1.1px] mobile:[&>.text-link]:text-[9px]" +
  " mobile:[&>.text-link]:gap-2 mobile:[&>.text-link]:whitespace-nowrap [&_.eyebrow]:text-accent";

export const countBadge =
  "count-badge py-[1px] px-1.5 border border-solid border-line [border-radius:3px] text-[9px] text-muted font-mono";

export const projectGrid =
  "project-grid grid grid-cols-3 gap-[25px] below-desktop:gap-4.5 below-tablet:grid-cols-2 below-tablet:gap-[30px_22px]" +
  " mobile:grid-cols-[1fr] mobile:gap-[37px]";

export const projectCard =
  "project-card min-w-0 [&>p]:text-muted [&>p]:text-[11px] [&>p]:leading-[1.8] [&>p]:mt-2.5 [&>p]:min-h-10 [&>.tag-list]:mt-[17px]" +
  " mobile:[&>p]:text-[12px] mobile:[&>p]:min-h-0";

export const projectArt =
  "project-art relative overflow-hidden aspect-[1.45] border border-solid border-[#62f5ff45] rounded-none text-[#89d0d8]" +
  " [background:#0b1926] [&.sage]:[background:radial-gradient(ellipse_at_50%_45%,#0d3343,#06111c_80%)] [&.sage]:text-accent" +
  " [&.amber]:text-past [&.amber]:border-[#ff9b4545] [&.amber]:[background:radial-gradient(ellipse_at_50%_45%,#2d211c,#0c1017_80%)]" +
  " [&.lilac]:text-future [&.lilac]:border-[#8ea5ff45] [&.lilac]:[background:radial-gradient(ellipse_at_50%_45%,#182442,#090f1e_80%)]" +
  " [&[data-art-reveal=played]_.component-composition]:animate-[component-arrive_900ms_cubic-bezier(.2,.65,.3,1)_both]" +
  " [&[data-art-reveal=played]_.mini-swatch-row_i]:animate-[detail-arrive_600ms_ease_both]" +
  " [&[data-art-reveal=played]_.mini-swatch-row_i]:[animation-delay:230ms]" +
  " [&[data-art-reveal=played]_.mini-swatch-row_i:nth-child(2)]:[animation-delay:300ms]" +
  " [&[data-art-reveal=played]_.mini-swatch-row_i:nth-child(3)]:[animation-delay:370ms]" +
  " [&[data-art-reveal=played]_.mini-swatch-row_i:nth-child(4)]:[animation-delay:440ms]" +
  " [&[data-art-reveal=played]_.mini-swatch-row_i:nth-child(5)]:[animation-delay:510ms]" +
  " [&[data-art-reveal=played]_.floating-chip]:animate-[chip-arrive_750ms_260ms_ease_both]" +
  " [&[data-art-reveal=played]_.cms-composition]:animate-[cms-arrive_850ms_cubic-bezier(.2,.65,.3,1)_both]" +
  " [&[data-art-reveal=played]_.cms-lines_i]:[transform-origin:left]" +
  " [&[data-art-reveal=played]_.cms-lines_i]:animate-[line-arrive_650ms_300ms_ease_both]" +
  " [&[data-art-reveal=played]_.cms-lines_i:nth-child(2)]:[animation-delay:420ms]" +
  " [&[data-art-reveal=played]_.cms-lines_i:nth-child(3)]:[animation-delay:540ms]" +
  " [&[data-art-reveal=played]_.cms-pill]:animate-[detail-arrive_650ms_550ms_ease_both]" +
  " [&[data-art-reveal=played]_.signature-path]:[stroke-dasharray:1]" +
  " [&[data-art-reveal=played]_.signature-path]:animate-[signature-draw_1400ms_ease-out_both] mobile:aspect-[1.5]";

export const artGrid =
  "art-grid absolute top-0 right-0 bottom-0 left-0" +
  " [background:linear-gradient(currentColor_1px,transparent_1px),linear-gradient(90deg,currentColor_1px,transparent_1px)]" +
  " [background-size:29px_29px] opacity-[.065]";

export const artIndex =
  "art-index absolute z-1 top-4 left-4.5 font-mono text-[7px] tracking-[1px] opacity-[.55]";

export const artCaption =
  "art-caption absolute bottom-3 left-0 right-0 text-center font-mono text-[5.5px] tracking-[1px] opacity-[.55]" +
  " below-desktop:text-[4.5px] mobile:text-[6px]";

export const projectArtLink =
  "project-art-link block [transition:filter_.25s] [&:hover]:[filter:brightness(1.1)]";

export const componentComposition =
  "component-composition w-[72%] absolute left-[14%] top-[22%] border border-solid border-[#62f5ff69] rounded-none transform-none" +
  " [background:#081e2c] [box-shadow:0_0_24px_#62f5ff0d] mobile:top-[20%]";

export const miniToolbar =
  "mini-toolbar py-[9px] px-2.5 flex items-center border-b [border-bottom-style:solid] border-b-[#62f5ff30] gap-[3px] [&_i]:w-[3px]" +
  " [&_i]:h-[3px] [&_i]:rounded-full [&_i]:[background:var(--accent)] [&_span]:text-[5px] [&_span]:ml-auto [&_span]:opacity-[.6]" +
  " [&_span]:[font-family:monospace]";

export const miniUi =
  "mini-ui px-[17px] pt-3 pb-[15px] below-desktop:py-2.5 below-desktop:px-3 mobile:py-3 mobile:px-4";

export const miniLabel =
  "mini-label text-[5px] tracking-[1.5px] opacity-[.65] [font-family:monospace] mobile:text-[6px]";

export const miniType =
  "mini-type my-2 mx-0 font-display text-[38px] leading-[1.2] flex items-center gap-[15px] font-medium [&>span]:font-mono" +
  " [&>span]:text-[10px] [&>span]:leading-[normal] [&>span]:font-normal [&>span]:not-italic below-desktop:text-[30px]" +
  " below-desktop:[&>span]:text-[8px] mobile:my-1.5 mobile:text-[38px] mobile:[&>span]:text-[11px]";

export const miniSwatchRow =
  "mini-swatch-row flex gap-[5px] [&_i]:w-[15px] [&_i]:h-[15px] [&_i]:[border-radius:2px] [&_i]:border [&_i]:border-solid" +
  " [&_i]:border-[#62f5ff55] [&_i]:[background:#83cdd6] [&_i:nth-child(2)]:[background:#6d8fa3]" +
  " [&_i:nth-child(3)]:[background:#338e98] [&_i:nth-child(4)]:[background:#24646b] [&_i:nth-child(5)]:[background:#102235]" +
  " mobile:[&_i]:h-4.5 mobile:[&_i]:w-4.5";

export const miniUiBottom =
  "mini-ui-bottom flex items-center justify-between mt-[13px] mobile:mt-2.5";

export const miniButton =
  "mini-button py-[7px] px-2.5 text-[#04111a] [background:#62f5ff] rounded-none text-[6px] [&>span]:pl-[13px] mobile:py-2 mobile:px-3" +
  " mobile:text-[7px]";

export const miniToggle =
  "mini-toggle p-0.5 [background:#64899e] w-[21px] h-3 [border-radius:9px] [&_i]:block [&_i]:[background:#62f5ff] [&_i]:h-2 [&_i]:w-2" +
  " [&_i]:ml-[9px] [&_i]:rounded-full";

export const floatingChip =
  "floating-chip py-2 px-[13px] absolute right-[-25px] bottom-[-12px] [background:#0d2635] border border-solid border-[#62f5ff66]" +
  " rounded-none text-accent text-[6px] [font-family:monospace] transform-none [box-shadow:0_5px_15px_#0003] mobile:text-[7px]";

export const cmsComposition =
  "cms-composition absolute w-[76%] h-[65%] top-[20%] left-[12%] flex [background:#171719] border border-solid border-[#ff9b4569]" +
  " rounded-none transform-none [box-shadow:0_0_24px_#ff9b450c]";

export const cmsSidebar =
  "cms-sidebar py-[13px] px-2.5 w-[33px] border-r [border-right-style:solid] border-r-[#714621] [&>span]:font-mono" +
  " [&>span]:text-[18px] [&>span]:leading-[normal] [&>span]:font-normal [&>span]:not-italic [&>span]:block [&>span]:mb-3.5 [&_i]:block" +
  " [&_i]:w-[9px] [&_i]:h-0.5 [&_i]:[background:#af6d33] [&_i]:mb-2.5";

export const cmsMain =
  "cms-main py-[13px] px-[15px] [flex:1] below-desktop:p-3 mobile:p-[13px]";

export const cmsTitle =
  "cms-title my-2.5 mx-0 font-display text-[23px] leading-[1.1] font-medium not-italic text-[#e4bd9b] below-desktop:text-[21px]" +
  " mobile:my-2 mobile:text-[26px] [&_em]:not-italic [&_em]:text-past";

export const cmsLines =
  "cms-lines mt-3 [&_i]:my-[5px] [&_i]:mx-0 [&_i]:block [&_i]:w-[85%] [&_i]:h-0.5 [&_i]:[background:#794b23] [&_i:last-child]:w-[62%]" +
  " mobile:mt-2";

export const cmsBottom =
  "cms-bottom flex items-center justify-between gap-1 mt-3 text-[5px] mobile:mt-2.5 mobile:text-[6px]";

export const cmsPill =
  "cms-pill py-[3px] px-1.5 border border-solid border-[#ff9b4566] rounded-none text-[5px] text-past mobile:text-[6px]";

export const signalComposition =
  "signal-composition absolute top-5 right-0 bottom-5 left-0 text-center [&_svg]:w-[90%] [&_svg]:h-full";

export const signalWordmark =
  "signal-wordmark absolute bottom-[17px] left-0 w-full font-mono text-[8px] tracking-[1.8px]";

export const projectCardMeta =
  "project-card-meta flex items-center justify-between gap-3 mt-5 font-mono text-[8px] text-muted mobile:text-[9px]";

export const liveIndicator =
  "live-indicator flex gap-1.5 items-center [&_.status-dot]:w-[3px] [&_.status-dot]:h-[3px]";

export const projectTitleLink =
  "project-title-link flex items-center justify-between mt-3 [&_h3]:text-[18px] [&_h3]:font-medium [&_h3]:tracking-[.1px]" +
  " [&_h3]:uppercase [&_svg]:text-accent [&_svg]:w-[17px] [&:hover]:text-accent mobile:[&_h3]:text-[20px]";

export const tagList =
  "tag-list flex gap-1.5 flex-wrap [&>span]:py-1 [&>span]:px-2 [&>span]:text-[8px] [&>span]:border [&>span]:border-solid" +
  " [&>span]:border-[#244355] [&>span]:[border-radius:2px] [&>span]:text-muted [&>span]:leading-[1.5] [&>span]:[background:#07131d80]" +
  " mobile:[&>span]:text-[9px]";

export const aboutTeaser =
  "about-teaser pt-[43px] pb-12.5 border-t [border-top-style:solid] border-t-line border-b [border-bottom-style:solid] border-b-line" +
  " [&_h2]:text-[34px] [&_h2]:leading-[1.23] [&_h2]:tracking-[-1px] [&_p]:text-[12px] [&_p]:text-muted [&_.text-link]:mt-[17px]" +
  " mobile:py-[35px] mobile:[&_h2]:text-[27px] mobile:[&_p]:text-[12px] below-desktop:[&_h2]:text-[30px]";

export const aboutTeaserBody =
  "about-teaser-body grid grid-cols-[1.35fr_1fr] gap-20 mt-5.5 items-center below-tablet:gap-[35px]" +
  " below-tablet:grid-cols-[1.1fr_1fr] mobile:grid-cols-[1fr] mobile:gap-5.5 mobile:mt-5.5";

export const noteList =
  "note-list border-t [border-top-style:solid] border-t-line";

export const noteRow =
  "note-row py-[25px] px-0 grid grid-cols-[30px_1fr_75px_20px] items-center gap-6 border-b [border-bottom-style:solid] border-b-line" +
  " [&_h3]:text-[13px] [&_h3]:font-normal [&_time]:text-[9px] [&_time]:font-mono [&_time]:text-muted [&>svg]:text-muted [&>svg]:w-4" +
  " [&:hover_h3]:text-accent below-tablet:gap-[15px] below-tablet:[&_h3]:text-[11px] mobile:py-[23px] mobile:grid-cols-[20px_1fr_17px]" +
  " mobile:gap-[15px] mobile:[&_h3]:text-[12px] mobile:[&_h3]:leading-[1.7] mobile:[&_time]:hidden";

export const noteNumber =
  "note-number text-[9px] font-mono text-faint";

export const contactCallout =
  "contact-callout py-[45px] px-[43px] [background:linear-gradient(115deg,#0b2838,#07131e)] text-foreground rounded-none flex" +
  " items-center justify-between gap-7.5 mb-19.5 border border-solid border-[#62f5ff65]" +
  " [box-shadow:inset_0_1px_#62f5ff90,0_0_36px_#62f5ff07] [&>.eyebrow]:text-[#286f77] [&_h2]:text-[34px] [&_h2]:leading-[1.2]" +
  " [&_h2]:mt-[15px] [&_h2]:tracking-[-1px] [&_h2_em]:text-accent [&_.button]:[background:#62f5ff0c] [&_.button.button-primary]:border-[#62f5ff88]" +
  " [&_.button]:text-accent [&_.button:hover]:[background:#62f5ff1a] below-tablet:p-8 below-tablet:[&_.button]:px-[13px]" +
  " below-tablet:[&_.button]:text-[9px] below-tablet:[&_.button]:gap-3 mobile:py-[29px] mobile:px-[25px] mobile:flex-col" +
  " mobile:items-start mobile:gap-[27px] mobile:mb-12.5 mobile:[&_h2]:text-[27px] mobile:[&_.button]:text-[10px]" +
  " mobile:[&_.button]:min-h-11.5 [&_.eyebrow]:text-accent";

export const siteFooter =
  "site-footer pt-7.5 pb-[27px] border-t [border-top-style:solid] border-t-line";

export const footerTop =
  "footer-top flex items-center justify-between gap-6 mobile:items-start mobile:gap-[15px]";

export const footerBottom =
  "footer-bottom flex items-center justify-between gap-6 mt-[33px] text-[8px] text-faint mobile:text-[7px] mobile:flex-wrap" +
  " mobile:gap-[15px] mobile:mt-7 mobile:[&>span:nth-child(2)]:ml-auto mobile:[&>a]:[flex-basis:100%]";

export const footerBrand =
  "footer-brand flex items-center gap-3.5 text-[10px] leading-[1.8] font-mono mobile:text-[9px] mobile:gap-2.5";

export const footerLinks =
  "footer-links flex items-center gap-6.5 text-[10px] text-muted font-mono uppercase tracking-[.7px] [&_a]:flex [&_a]:gap-[7px]" +
  " [&_a]:items-center mobile:gap-[13px] mobile:text-[8px] mobile:[&>a>svg]:hidden";

export const innerPage =
  "inner-page pt-9.5 pb-[65px] min-h-[70vh] mobile:pt-6.5 mobile:pb-[45px]";

export const pageKicker =
  "page-kicker flex items-center justify-between gap-5 text-muted text-[9px] font-mono tracking-[1px] [&_a]:inline-flex [&_a]:gap-2" +
  " [&_a]:items-center mobile:text-[7px] mobile:tracking-[.7px] mobile:gap-3";

export const pageIntro =
  "page-intro pt-14 pb-[53px] flex justify-between items-end gap-[35px] [&_h1]:text-[58px] [&_h1]:leading-[1.12]" +
  " [&_h1]:tracking-[-2px] [&_h1]:font-medium [&>p]:text-[12px] [&>p]:text-muted [&>p]:pb-[5px] below-tablet:[&_h1]:text-[48px]" +
  " below-tablet:gap-[25px] below-tablet:[&>p]:text-[10px] below-tablet:[&>p]:max-w-[225px] mobile:py-[37px] mobile:flex-col" +
  " mobile:items-start mobile:gap-5.5 mobile:[&_h1]:text-[clamp(32px,10vw,43px)] mobile:[&>p]:text-[11px] mobile:[&>p]:max-w-none";

export const projectFilters =
  "project-filters flex gap-[7px] mb-7.5 flex-wrap [&_button]:py-3 [&_button]:px-4 [&_button]:flex [&_button]:items-center" +
  " [&_button]:gap-2 [&_button]:border [&_button]:border-solid [&_button]:border-line [&_button]:[background:transparent]" +
  " [&_button]:text-muted [&_button]:text-[10px] [&_button]:rounded-none [&_button]:font-mono [&_button.active]:[background:#62f5ff0d]" +
  " [&_button.active]:text-accent [&_button.active]:border-[#62f5ff88] [&_button.active]:[box-shadow:inset_0_-1px_var(--accent)]" +
  " mobile:gap-[7px] mobile:[&_button]:p-3 mobile:[&_button]:text-[9px] mobile:[&_button]:min-h-11";

export const archiveGrid =
  "archive-grid [&.archive-grid]:grid-cols-2 mobile:[&.archive-grid]:grid-cols-1 gap-[48px_30px] [&_.project-art]:aspect-[1.6] [&_.component-composition]:w-[64%]" +
  " [&_.component-composition]:left-[18%] [&_.component-composition]:top-[23%] [&_.mini-type]:text-[62px]" +
  " [&_.mini-type>span]:text-[15px] [&_.mini-ui]:py-[21px] [&_.mini-ui]:px-[27px] [&_.mini-label]:text-[8px] [&_.mini-button]:py-2.5" +
  " [&_.mini-button]:px-[15px] [&_.mini-button]:text-[9px] [&_.mini-swatch-row_i]:w-6 [&_.mini-swatch-row_i]:h-6" +
  " [&_.cms-title]:text-[38px] [&_.cms-main]:p-[25px] [&_.cms-bottom]:mt-5 [&_.cms-bottom]:text-[8px] [&_.art-caption]:text-[7px]" +
  " below-desktop:[&_.mini-type]:text-[48px] below-desktop:[&_.cms-main]:p-[19px] below-tablet:[&_.component-composition]:w-[76%]" +
  " below-tablet:[&_.component-composition]:left-[12%] below-tablet:[&_.component-composition]:top-[20%]" +
  " below-tablet:[&_.mini-ui]:p-[13px] below-tablet:[&_.mini-type]:text-[35px] below-tablet:[&_.mini-type>span]:text-[8px]" +
  " below-tablet:[&_.mini-label]:text-[5px] below-tablet:[&_.mini-button]:py-[7px] below-tablet:[&_.mini-button]:px-2.5" +
  " below-tablet:[&_.mini-button]:text-[6px] below-tablet:[&_.mini-swatch-row_i]:h-[15px] below-tablet:[&_.mini-swatch-row_i]:w-[15px]" +
  " below-tablet:[&_.cms-title]:text-[24px] below-tablet:[&_.cms-main]:p-3.5 below-tablet:[&_.cms-bottom]:text-[5px]" +
  " below-tablet:[&_.cms-bottom]:mt-3 below-tablet:[&_.art-caption]:text-[5px] mobile:[&_.project-art]:aspect-[1.5]" +
  " mobile:[&_.mini-type]:my-1.5 mobile:[&_.mini-type]:text-[38px] mobile:[&_.mini-ui]:py-3 mobile:[&_.mini-ui]:px-4" +
  " mobile:[&_.mini-type>span]:text-[11px] mobile:[&_.cms-title]:my-2 mobile:[&_.cms-title]:text-[26px] mobile:[&_.cms-main]:p-[13px]" +
  " mobile:[&_.art-caption]:text-[6px] mobile:[&_.cms-bottom]:mt-2.5";

export const simpleCallout =
  "simple-callout flex justify-between gap-[25px] items-center border-t [border-top-style:solid] border-t-line pt-8 mt-16.5" +
  " text-muted text-[12px] mobile:flex-col mobile:items-start mobile:gap-[17px] mobile:mt-[43px]";

export const caseStudy =
  "case-study [&_.page-intro]:items-center [&_.page-intro_h1]:mt-5 [&>.project-art]:aspect-[3]" +
  " [&>.project-art_.component-composition]:w-90 [&>.project-art_.component-composition]:top-[17%]" +
  " [&>.project-art_.component-composition]:left-[calc(50%_-_180px)] [&>.project-art_.mini-type]:text-[68px]" +
  " [&>.project-art_.mini-ui]:py-5 [&>.project-art_.mini-ui]:px-7 [&>.project-art_.mini-type>span]:text-[14px]" +
  " [&>.project-art_.mini-label]:text-[7px] [&>.project-art_.mini-swatch-row_i]:w-[23px] [&>.project-art_.mini-swatch-row_i]:h-[23px]" +
  " [&>.project-art_.mini-button]:py-2.5 [&>.project-art_.mini-button]:px-[15px] [&>.project-art_.mini-button]:text-[9px]" +
  " [&>.project-art_.floating-chip]:py-3 [&>.project-art_.floating-chip]:px-5 [&>.project-art_.floating-chip]:text-[9px]" +
  " [&>.project-art_.cms-composition]:w-105 [&>.project-art_.cms-composition]:left-[calc(50%_-_210px)]" +
  " [&>.project-art_.cms-title]:text-[42px] [&>.project-art_.cms-main]:p-[25px] [&>.project-art_.cms-sidebar]:p-5" +
  " [&>.project-art_.cms-sidebar]:w-[55px] [&>.project-art_.art-caption]:text-[8px] [&>.project-art_.art-index]:text-[9px]" +
  " [&>.project-art_.art-index]:top-6 [&>.project-art_.art-index]:left-[27px] [--case-accent:var(--accent)]" +
  " [&.amber]:[--case-accent:var(--past)] [&.lilac]:[--case-accent:var(--future)] [&_.present]:text-[var(--case-accent)]" +
  " [&_.case-actions_.button-primary]:[background:color-mix(in_srgb,var(--case-accent)_6%,#050b12)]" +
  " [&_.case-actions_.button-primary]:border-[var(--case-accent)] [&_.case-actions_.button-primary]:text-[var(--case-accent)]" +
  " [&_.case-actions_.button-primary]:[box-shadow:0_0_18px_color-mix(in_srgb,var(--case-accent)_9%,transparent)]" +
  " [&_.case-actions_.button-primary:hover]:[filter:brightness(1.08)] [&_.case-meta_.eyebrow]:text-[var(--case-accent)]" +
  " below-tablet:[&_.page-intro]:items-start below-tablet:[&_.page-intro]:flex-col below-tablet:[&>.project-art]:aspect-[2]" +
  " below-tablet:[&>.project-art_.component-composition]:w-75 below-tablet:[&>.project-art_.component-composition]:top-[15%]" +
  " below-tablet:[&>.project-art_.component-composition]:left-[calc(50%_-_150px)]" +
  " below-tablet:[&>.project-art_.cms-composition]:w-82.5 below-tablet:[&>.project-art_.cms-composition]:left-[calc(50%_-_165px)]" +
  " mobile:[&_.page-intro_h1]:text-[49px] mobile:[&>.project-art]:aspect-[1.4] mobile:[&>.project-art_.component-composition]:w-[74%]" +
  " mobile:[&>.project-art_.component-composition]:left-[13%] mobile:[&>.project-art_.component-composition]:top-[20%]" +
  " mobile:[&>.project-art_.mini-type]:text-[40px] mobile:[&>.project-art_.mini-type>span]:text-[10px]" +
  " mobile:[&>.project-art_.mini-ui]:py-3.5 mobile:[&>.project-art_.mini-ui]:px-4 mobile:[&>.project-art_.mini-label]:text-[5px]" +
  " mobile:[&>.project-art_.mini-swatch-row_i]:w-4 mobile:[&>.project-art_.mini-swatch-row_i]:h-4" +
  " mobile:[&>.project-art_.mini-button]:p-2 mobile:[&>.project-art_.mini-button]:text-[6px]" +
  " mobile:[&>.project-art_.floating-chip]:py-[9px] mobile:[&>.project-art_.floating-chip]:px-3" +
  " mobile:[&>.project-art_.floating-chip]:text-[6px] mobile:[&>.project-art_.floating-chip]:right-[-14px]" +
  " mobile:[&>.project-art_.cms-composition]:w-[80%] mobile:[&>.project-art_.cms-composition]:left-[10%]" +
  " mobile:[&>.project-art_.cms-title]:text-[30px] mobile:[&>.project-art_.cms-main]:p-4.5" +
  " mobile:[&>.project-art_.cms-sidebar]:py-[15px] mobile:[&>.project-art_.cms-sidebar]:px-2.5" +
  " mobile:[&>.project-art_.cms-sidebar]:w-[35px] mobile:[&>.project-art_.art-caption]:text-[5px]" +
  " mobile:[&>.project-art_.art-index]:text-[6px] mobile:[&>.project-art_.art-index]:top-4 mobile:[&>.project-art_.art-index]:left-4";

export const caseLede =
  "case-lede max-w-152.5 text-[15px] leading-[1.8] text-muted mt-4.5 mobile:text-[12px]";

export const caseActions =
  "case-actions flex flex-col items-start gap-5 below-tablet:flex-row below-tablet:items-center below-tablet:gap-[25px]" +
  " mobile:flex-col mobile:items-start mobile:gap-[17px]";

export const caseBody =
  "case-body grid grid-cols-[260px_1fr] gap-20 pt-16 below-desktop:gap-12.5 below-desktop:grid-cols-[210px_1fr] below-tablet:gap-7.5" +
  " below-tablet:grid-cols-[170px_1fr] mobile:grid-cols-[1fr] mobile:gap-[33px] mobile:pt-[35px]";

export const caseMeta =
  "case-meta min-w-0 flex flex-col items-start gap-4 [&>.eyebrow:not(:first-child)]:mt-5 [&_.tag-list]:max-w-57.5 [&_p]:text-[12px]" +
  " [&_p]:text-muted mobile:pb-[25px] mobile:border-b mobile:[border-bottom-style:solid] mobile:border-b-line mobile:gap-3" +
  " mobile:[&_.tag-list]:max-w-full mobile:[&>.eyebrow:not(:first-child)]:mt-2.5";

export const caseProse =
  "case-prose min-w-0 max-w-175 [&>section]:mb-13 [&_h2]:mx-0 [&_h2]:text-[31px] [&_h2]:leading-[1.2] [&_h2]:tracking-[-.8px]" +
  " [&_h2]:mt-[15px] [&_h2]:mb-[19px] [&_p]:text-[14px] [&_p]:text-muted mobile:[&_h2]:text-[27px] mobile:[&_p]:text-[12px]" +
  " mobile:[&>section]:mb-9";

export const nextProject =
  "next-project flex items-center justify-between border-t [border-top-style:solid] border-t-line pt-9.5 mt-[15px] [&_h2]:text-[31px]" +
  " [&_h2]:mt-[15px] mobile:gap-5 mobile:[&_h2]:text-[23px] mobile:[&_.button]:px-[13px] mobile:[&_.button]:text-[9px]" +
  " mobile:[&_.button]:gap-2.5 mobile:[&_.eyebrow]:text-[7px]";

export const milestoneReader =
  "milestone-reader py-4.5 px-[23px] border border-solid border-[#62f5ff30] rounded-none bg-[#07131e99] [&>p]:mt-4.5" +
  " [&>p]:text-[11px] mobile:[&>p]:text-[12px] mobile:py-3.5 mobile:px-4 mobile:[&_.checkpoint-tabs_button]:py-3 mobile:[&_.checkpoint-tabs_button]:px-[7px]" +
  " mobile:[&_.checkpoint-tabs_button]:text-[8px]";

export const compactIntro =
  "compact-intro [&.compact-intro]:pt-[37px] [&.compact-intro]:pb-9.5 [&.compact-intro_h1]:text-[44px]" +
  " below-tablet:[&.compact-intro_h1]:text-[48px] mobile:[&.compact-intro]:py-[37px] mobile:[&.compact-intro_h1]:text-[34px]";

export const observatoryProjects =
  "observatory-projects flex border border-solid border-[#62f5ff30] rounded-none bg-[#07131e99] [&>button]:py-4.5 [&>button]:px-5" +
  " [&>button]:flex [&>button]:items-center [&>button]:gap-[13px] [&>button]:[flex:1] [&>button]:[background:transparent]" +
  " [&>button]:border-[0] [&>button]:[border-style:none] [&>button]:border-current [&>button]:text-[10px] [&>button]:text-muted" +
  " [&>button+button]:border-l [&>button+button]:[border-left-style:solid] [&>button+button]:border-l-line" +
  " [&>button.active]:text-accent [&>button.active]:[background:#0e1e2e] [&>button>span:first-child]:font-mono" +
  " [&>button>span:first-child]:text-[8px] [&>button>span:first-child]:opacity-[.5] below-desktop:[&>button]:py-[17px]" +
  " below-desktop:[&>button]:px-3.5 below-desktop:[&>button]:gap-2.5 mobile:flex-wrap mobile:[&>button]:py-[15px]" +
  " mobile:[&>button]:px-3 mobile:[&>button]:[flex-basis:50%] mobile:[&>button]:min-h-13 mobile:[&>button]:text-[9px]" +
  " mobile:[&>button:nth-child(3)]:border-l-[0] mobile:[&>button:nth-child(3)]:[border-left-style:none]" +
  " mobile:[&>button:nth-child(3)]:border-l-current mobile:[&>button:nth-child(3)]:border-t" +
  " mobile:[&>button:nth-child(3)]:[border-top-style:solid] mobile:[&>button:nth-child(3)]:border-t-line" +
  " mobile:[&>button:nth-child(4)]:border-t mobile:[&>button:nth-child(4)]:[border-top-style:solid]" +
  " mobile:[&>button:nth-child(4)]:border-t-line";

export const projectYear =
  "project-year ml-auto text-[8px] opacity-[.6] below-desktop:hidden";

export const observatoryLayout =
  "observatory-layout grid grid-cols-[1.08fr_1fr] border border-solid border-[#62f5ff30] border-t-[0] [border-top-style:none]" +
  " rounded-none bg-[#07131e99] below-tablet:grid-cols-[1fr]";

export const observatoryStage =
  "observatory-stage px-5 pt-5 pb-[9px] flex flex-col [&_.orbital-instrument]:mt-0 [&_.time-controls]:mt-auto below-tablet:max-w-full" +
  " below-tablet:[&_.orbital-instrument]:max-w-125 below-tablet:[&_.orbital-instrument]:self-center mobile:px-2.5 mobile:pt-4" +
  " mobile:pb-[9px]";

export const stageTopline =
  "stage-topline flex justify-between gap-3 text-[7px] font-mono tracking-[1px] text-muted [&>span:first-child]:flex" +
  " [&>span:first-child]:gap-[7px] [&>span:first-child]:items-center mobile:text-[6px] mobile:tracking-[.5px]";

export const observationPanel =
  "observation-panel py-[29px] px-[31px] border-l [border-left-style:solid] border-l-line" +
  " [background:linear-gradient(130deg,#0a1f2b,#07131d)] [&>h2]:text-[36px] [&>h2]:leading-[1.2] [&>h2]:mt-[11px]" +
  " [&>h2]:tracking-[-1px] below-desktop:p-[25px] below-tablet:border-l-[0] below-tablet:[border-left-style:none]" +
  " below-tablet:border-l-current below-tablet:border-t below-tablet:[border-top-style:solid] below-tablet:border-t-line" +
  " below-tablet:[&>h2]:text-[39px] mobile:py-6 mobile:px-5 mobile:[&>h2]:text-[29px]";

export const checkpointTabs =
  "checkpoint-tabs my-6 flex gap-0 border-t [border-top-style:solid] border-t-line border-b [border-bottom-style:solid] border-b-line" +
  " [&_button]:py-3.5 [&_button]:px-[7px] [&_button]:[flex:1] [&_button]:flex [&_button]:flex-col [&_button]:gap-[7px]" +
  " [&_button]:border-[0] [&_button]:[border-style:none] [&_button]:border-current [&_button]:border-b" +
  " [&_button]:[border-bottom-style:solid] [&_button]:border-b-transparent [&_button]:[background:transparent] [&_button]:text-muted" +
  " [&_button]:text-left [&_button]:text-[9px] [&_button>span]:text-faint [&_button>span]:font-mono [&_button>span]:text-[8px]" +
  " [&_button.active]:text-accent [&_button.active]:border-b-accent [&_button.active]:[background:#0e1f2f]" +
  " [&_button.past.active]:text-past [&_button.past.active]:border-b-past [&_button.future.active]:text-future" +
  " [&_button.future.active]:border-b-future below-tablet:[&_button]:py-4 below-tablet:[&_button]:px-3" +
  " below-tablet:[&_button]:text-[11px] mobile:[&_button]:py-[15px] mobile:[&_button]:px-[7px] mobile:[&_button]:text-[9px]";

export const milestoneContent =
  "milestone-content [&_h3]:text-[18px] [&_h3]:leading-[1.5] [&_h3]:font-normal [&_h3]:mt-[11px] [&.milestone-content_p]:mt-2.5 [&.milestone-content_p]:text-muted" +
  " [&.milestone-content_p]:text-[12px] [&_.text-link]:mt-3.5 mobile:[&_h3]:text-[19px] mobile:[&.milestone-content_p]:text-[12px]";

export const checkpointNavigation =
  "checkpoint-navigation flex justify-between gap-3 mt-[13px] mobile:[&_.text-button]:text-[9px] mobile:[&_.text-button]:min-h-11";

export const textButton =
  "text-button py-2 px-0 inline-flex items-center gap-2 border-[0] [border-style:none] border-current [background:transparent]" +
  " text-muted text-[10px] [&:hover]:text-accent";

export const perspectivePanel =
  "perspective-panel border-t [border-top-style:solid] border-t-line pt-[25px] mt-5 [&_h3]:font-display [&_h3]:text-[21px]" +
  " [&_h3]:font-medium [&_h3]:mt-[13px] [&_h3]:leading-[1.3] [&_p]:text-[11px] [&_p]:text-muted [&_p]:mt-2.5 [&>.text-link]:mt-3" +
  " [&>.text-link]:text-accent below-tablet:[&_p]:text-[12px]";

export const perspectiveChoices =
  "perspective-choices flex gap-2.5 mt-4.5 [&_.button]:py-[11px] [&_.button]:px-3 [&_.button]:text-[9px] [&_.button]:gap-2.5" +
  " [&_.button]:min-h-11 below-desktop:flex-col below-desktop:[&_.button]:justify-between below-tablet:flex-row mobile:flex-col" +
  " mobile:gap-[9px] mobile:[&_.button]:px-[15px] mobile:[&_.button]:text-[11px] mobile:[&_.button]:min-h-12";

export const caseStudyLink =
  "case-study-link mt-[25px]";

export const journeyMessage =
  "journey-message my-[15px] mx-0 min-h-9.5 text-[10px] text-muted text-center mobile:px-2.5 mobile:text-[9px]";

export const journeyPanel =
  "journey-panel border border-solid border-[#62f5ff30] rounded-none bg-[#07131e99] [&_summary]:py-[19px] [&_summary]:px-6" +
  " [&_summary]:flex [&_summary]:items-center [&_summary]:justify-between [&_summary]:gap-4.5 [&_summary]:[cursor:pointer]" +
  " [&_summary]:list-none [&_summary::-webkit-details-marker]:hidden [&_summary>span]:flex [&_summary>span]:items-center" +
  " [&_summary>span]:gap-3 [&_summary>span]:text-[12px] [&_summary>span:last-child]:text-[9px] [&[open]_summary]:border-b" +
  " [&[open]_summary]:[border-bottom-style:solid] [&[open]_summary]:border-b-line" +
  " [&[open]_summary>span:last-child>svg]:[transform:rotate(90deg)] mobile:[&_summary]:py-4.5 mobile:[&_summary]:px-[15px]" +
  " mobile:[&_summary>span]:gap-2 mobile:[&_summary>span]:text-[11px] mobile:[&_summary>span:last-child]:text-[8px]" +
  " mobile:[&_summary_.count-badge]:text-[7px]";

export const journeyBody =
  "journey-body p-[25px] grid grid-cols-[1fr_1fr] gap-10 below-tablet:gap-[25px] mobile:p-[19px] mobile:grid-cols-[1fr]" +
  " mobile:gap-[25px]";

export const branchList =
  "branch-list p-0 mx-0 list-none mt-[17px] mb-0 [&>li+li]:mt-2.5 [&_button]:p-[15px] [&_button]:flex [&_button]:items-center" +
  " [&_button]:gap-[15px] [&_button]:w-full [&_button]:border [&_button]:border-solid [&_button]:border-line" +
  " [&_button]:[background:transparent] [&_button]:[border-radius:3px] [&_button]:text-left [&_button.active]:border-[#29737c]" +
  " [&_button.active]:[background:#0e1e2e] [&_button.active_.branch-node]:[background:var(--accent)] [&_strong]:font-normal" +
  " [&_strong]:text-[12px] [&_strong]:block [&_small]:block [&_small]:mt-1.5 [&_small]:text-[9px] [&_small]:text-muted";

export const branchNode =
  "branch-node h-[9px] w-[9px] border border-solid border-accent rounded-full";

export const branchIndex =
  "branch-index ml-auto font-mono text-[9px] text-muted";

export const journeyHistory =
  "journey-history [&_ol]:p-0 [&_ol]:my-[15px] [&_ol]:mx-0 [&_ol]:list-none [&_li_button]:py-2 [&_li_button]:px-0 [&_li_button]:flex" +
  " [&_li_button]:items-center [&_li_button]:gap-2.5 [&_li_button]:border-[0] [&_li_button]:[border-style:none]" +
  " [&_li_button]:border-current [&_li_button]:[background:none] [&_li_button]:text-[10px] [&_li_button]:text-left" +
  " [&_li_button]:text-muted [&_li_button>span]:font-mono [&_li_button>span]:text-[8px] [&_li_button>span]:leading-[normal]" +
  " [&_li_button>span]:font-normal [&_li_button>span]:not-italic [&_li_button>span]:border [&_li_button>span]:border-solid" +
  " [&_li_button>span]:border-line [&_li_button>span]:rounded-full [&_li_button>span]:w-4.5 [&_li_button>span]:h-4.5" +
  " [&_li_button>span]:grid [&_li_button>span]:place-items-center mobile:border-t mobile:[border-top-style:solid] mobile:border-t-line" +
  " mobile:pt-[23px] mobile:[&_li_button]:min-h-11";

export const discardedEvent =
  "discarded-event opacity-[.45]";

export const journeyActions =
  "journey-actions flex gap-[25px] border-t [border-top-style:solid] border-t-line pt-[11px] mt-[15px] mb-2";

export const restoreBanner =
  "restore-banner p-5 flex gap-5 items-center border border-solid border-[#2a767e] [background:#0e1f30] [border-radius:4px] mb-5.5" +
  " [&>div]:[flex:1] [&_strong]:block [&_strong]:font-normal [&_strong]:text-[13px] [&>div>span]:block [&>div>span]:text-muted" +
  " [&>div>span]:text-[10px] [&>div>span]:mt-1.5 below-tablet:flex-wrap below-tablet:[&>div]:w-full" +
  " below-tablet:[&>div]:[flex-basis:100%] mobile:p-[17px] mobile:gap-[13px] mobile:[&_.button]:text-[9px]";

export const fallbackPanel =
  "fallback-panel p-[45px] border border-solid border-line [&_h2]:text-[36px] [&_p]:my-5 [&_p]:mx-0 [&_.text-button]:block" +
  " [&_.text-button]:mt-5";

export const signatureLab =
  "signature-lab grid grid-cols-[1fr_1fr] border border-solid border-[#62f5ff30] rounded-none bg-[#07131e99]" +
  " below-tablet:grid-cols-[1fr]";

export const labStage =
  "lab-stage p-5.5 below-tablet:[&_.signature-svg]:max-w-100 mobile:py-[17px] mobile:px-2.5";

export const signatureSvg =
  "signature-svg my-[23px] mx-auto block w-full max-w-112.5 [filter:drop-shadow(0_0_7px_#62f5ff22)]";

export const labSettings =
  "lab-settings p-9.5 border-l [border-left-style:solid] border-l-line [background:linear-gradient(130deg,#0a1f2b,#07131d)]" +
  " [&_h2]:text-[36px] [&_h2]:mt-4 [&_h2]:leading-[1.2] [&>p]:text-[12px] [&>p]:text-muted [&>p]:mt-4.5 below-desktop:p-[29px]" +
  " below-tablet:border-l-[0] below-tablet:[border-left-style:none] below-tablet:border-l-current below-tablet:border-t" +
  " below-tablet:[border-top-style:solid] below-tablet:border-t-line mobile:py-[25px] mobile:px-5 mobile:[&_h2]:text-[29px]";

export const ratioFieldset =
  "ratio-fieldset p-0 mx-0 border-[0] [border-style:none] border-current mt-6.5 mb-0 [&_legend]:text-[11px] [&_legend]:w-full" +
  " [&_legend>span]:[float:right] [&_legend>span]:font-mono";

export const ratioButtons =
  "ratio-buttons flex gap-2.5 mt-3.5 [&>button]:[flex:1] [&>button]:min-h-11 [&>button]:[background:none] [&>button]:border" +
  " [&>button]:border-solid [&>button]:border-line [&>button]:rounded-none [&>button]:font-mono [&>button]:text-[12px]" +
  " [&>button]:text-muted [&>button.active]:border-[#62f5ff88] [&>button.active]:text-accent [&>button.active]:[background:#62f5ff0d]" +
  " [&>button.active]:[box-shadow:inset_0_-1px_var(--accent)]";

export const phaseControl =
  "phase-control mt-5.5 [&_label]:flex [&_label]:items-center [&_label]:justify-between [&_label]:text-[11px]" +
  " [&_label>span]:font-mono [&_label>span]:text-accent";

export const signatureMatch =
  "signature-match p-[19px] mx-0 border border-solid border-line [background:#0d1c2b] mt-5.5 mb-[15px] [border-radius:3px] min-h-30" +
  " [&_h3]:mx-0 [&_h3]:font-display [&_h3]:text-[21px] [&_h3]:font-medium [&_h3]:mt-3 [&_h3]:mb-2 [&_p]:my-2.5 [&_p]:mx-0" +
  " [&_p]:text-[11px] [&_p]:text-muted";

export const labExplanation =
  "lab-explanation grid grid-cols-[1fr_1fr] gap-20 pt-[65px] [&_h2]:mx-0 [&_h2]:text-[41px] [&_h2]:leading-[1.2] [&_h2]:mt-4" +
  " [&_h2]:mb-[21px] [&_p]:text-muted [&_p]:text-[12px] [&_.text-link]:mt-5 below-tablet:gap-7.5 below-tablet:[&_h2]:text-[34px]" +
  " mobile:grid-cols-[1fr] mobile:gap-7.5 mobile:pt-[45px] mobile:[&_h2]:text-[30px]";

export const equationPanel =
  "equation-panel p-7.5 border border-solid border-[#62f5ff30] rounded-none bg-[#07131e99] [&_p+p]:mt-5 below-tablet:p-[23px]";

export const equation =
  "equation my-[15px] mx-0 font-mono text-[25px] leading-[1.7] font-normal not-italic text-accent mobile:text-[21px]";

export const aboutBody =
  "about-body grid grid-cols-[360px_1fr] gap-22.5 pt-2.5 below-desktop:grid-cols-[300px_1fr] below-desktop:gap-[55px]" +
  " below-tablet:grid-cols-[240px_1fr] below-tablet:gap-8 mobile:grid-cols-[1fr] mobile:gap-[35px]";

export const profilePlate =
  "profile-plate p-[27px] border border-solid border-[#62f5ff30] rounded-none" +
  " [background:linear-gradient(135deg,#0f2031,#09131e)_#07131e99] self-start [&>.eyebrow]:mt-5.5 [&>.eyebrow]:text-[8px]" +
  " below-tablet:p-5.5 mobile:p-[25px] mobile:max-w-full";

export const profileInitials =
  "profile-initials flex items-center justify-between font-display text-[120px] leading-[1.5] font-normal not-italic text-accent" +
  " tracking-[-7px] [text-shadow:0_0_25px_#62f5ff22] [&>span]:text-[50px] [&>span]:text-[#425b69] [&>span]:mt-12.5" +
  " below-tablet:text-[90px] mobile:text-[110px] mobile:leading-[1.35]";

export const profilePlateBottom =
  "profile-plate-bottom flex items-center justify-between pb-[23px] border-b [border-bottom-style:solid] border-b-line text-[11px]" +
  " leading-[1.8]";

export const profileData =
  "profile-data mt-5 [&>div]:flex [&>div]:gap-5 [&>div]:mt-3 [&>div]:text-[9px] [&>div>span]:text-faint [&>div>span]:min-w-14.5" +
  " [&_strong]:font-normal [&_strong]:text-muted";

export const aboutProse =
  "about-prose [&_h2]:mx-0 [&_h2]:text-[39px] [&_h2]:leading-[1.2] [&_h2]:mt-3.5 [&_h2]:mb-[27px] [&>p]:text-muted [&>p]:text-[14px]" +
  " [&>p]:mb-5 [&_blockquote]:py-2 [&_blockquote]:my-8 [&_blockquote]:mx-0 [&_blockquote]:pr-0 [&_blockquote]:pl-5.5" +
  " [&_blockquote]:border-l [&_blockquote]:[border-left-style:solid] [&_blockquote]:border-l-[#318892] [&_blockquote]:font-display" +
  " [&_blockquote]:text-[21px] [&_blockquote]:leading-[1.5] [&_blockquote]:font-normal [&_blockquote]:not-italic" +
  " [&_blockquote]:text-accent below-tablet:[&>p]:text-[12px] mobile:[&_h2]:text-[32px]";

export const aboutLinks =
  "about-links flex gap-6.5";

export const achievementGrid =
  "achievement-grid grid grid-cols-3 gap-6.5 [&_article]:p-[23px] [&_article]:border [&_article]:border-solid" +
  " [&_article]:border-[#62f5ff30] [&_article]:rounded-none [&_article]:bg-[#07131e99] [&_h3]:mx-0 [&_h3]:text-[16px]" +
  " [&_h3]:leading-[1.5] [&_h3]:font-normal [&_h3]:mt-[17px] [&_h3]:mb-[13px] [&_p]:text-[11px] [&_p]:text-muted" +
  " below-tablet:grid-cols-2 mobile:grid-cols-[1fr] mobile:gap-3.5 mobile:[&_article]:p-[23px] mobile:[&_h3]:text-[18px]" +
  " mobile:[&_p]:text-[12px]";

export const achievementMetric =
  "achievement-metric flex items-center gap-[15px] mt-5 [&>strong]:font-mono [&>strong]:text-[36px] [&>strong]:leading-[normal]" +
  " [&>strong]:font-normal [&>strong]:not-italic [&>strong]:text-accent [&>span]:text-[9px] [&_small]:block [&_small]:text-muted" +
  " [&_small]:text-[8px] [&_small]:leading-[1.7] [&_small]:mt-[5px]";

export const architectureSection =
  "architecture-section p-[35px] border border-solid border-[#62f5ff30] rounded-none bg-[#07131e99] [&_h2]:text-[37px]" +
  " [&_h2]:mt-[15px] [&_h2]:leading-[1.2] [&>p]:text-muted [&>p]:text-[12px] [&>p]:mt-[15px] mobile:py-6 mobile:px-5" +
  " mobile:[&_h2]:text-[27px]";

export const architectureDiagram =
  "architecture-diagram grid grid-cols-3 gap-[35px] mt-[35px] below-tablet:grid-cols-[1fr] below-tablet:gap-8";

export const architectureLayer =
  "architecture-layer relative [&:not(:last-child)::after]:[content:'→'] [&:not(:last-child)::after]:absolute" +
  " [&:not(:last-child)::after]:top-[48%] [&:not(:last-child)::after]:right-[-27px] [&:not(:last-child)::after]:text-faint" +
  " [&>span]:text-[9px] [&>span]:text-muted [&>span]:font-mono [&>div]:flex [&>div]:flex-wrap [&>div]:gap-2 [&>div]:mt-[17px]" +
  " [&>div>span]:py-3.5 [&>div>span]:px-2 [&>div>span]:[flex:1] [&>div>span]:text-center [&>div>span]:whitespace-nowrap" +
  " [&>div>span]:text-[10px] [&>div>span]:[background:#0e1f30] [&>div>span]:border [&>div>span]:border-solid" +
  " [&>div>span]:border-[#225f66] [&>div>span]:[border-radius:3px] [&>p]:text-[9px] [&>p]:text-faint [&>p]:mt-[13px]" +
  " below-tablet:[&:not(:last-child)::after]:[content:'↓'] below-tablet:[&:not(:last-child)::after]:right-[50%]" +
  " below-tablet:[&:not(:last-child)::after]:top-auto below-tablet:[&:not(:last-child)::after]:bottom-[-23px]" +
  " mobile:[&>div>span]:py-[13px] mobile:[&>div>span]:px-[7px] mobile:[&>div>span]:text-[9px]";

export const skillsGrid =
  "skills-grid grid grid-cols-3 gap-10 [&_.tag-list]:mt-[17px] [&_.tag-list>span]:py-1.5 [&_.tag-list>span]:px-2.5" +
  " [&_.tag-list>span]:text-[10px] below-tablet:grid-cols-[1fr_1fr] below-tablet:gap-7.5 mobile:grid-cols-[1fr] mobile:gap-7.5";

export const skillsInvitation =
  "skills-invitation mx-0 text-muted text-[12px] mt-[-10px] mb-7";

export const homePage =
  "home-page below-desktop:[&+.site-footer]:pb-[85px]";

export const contactLayout =
  "contact-layout grid grid-cols-[1.45fr_1fr] gap-20 items-center pt-[85px] pb-[65px] [&_h1]:text-[66px] [&_h1]:tracking-[-2.5px]" +
  " [&_h1]:leading-[1.1] [&_h1]:mt-6.5 below-desktop:gap-10 below-tablet:grid-cols-[1fr] below-tablet:pt-12.5 below-tablet:pb-5" +
  " below-tablet:gap-[45px] below-tablet:[&_h1]:text-[55px] mobile:pt-9 mobile:[&_h1]:text-[47px] mobile:[&_.eyebrow]:text-[8px]";

export const contactLede =
  "contact-lede text-[14px] text-muted mt-[27px]";

export const contactEmail =
  "contact-email flex items-center gap-[25px] text-[clamp(16px,2.1vw,27px)] tracking-[-.7px] text-accent mt-8" +
  " [overflow-wrap:anywhere] mobile:text-[20px] mobile:gap-3.5 mobile:[&>svg]:w-[21px] mobile:[&>svg]:shrink-0";

export const copyEmail =
  "copy-email mt-[9px] [&>span]:block";

export const contactActions =
  "contact-actions flex gap-3 mt-6.5 below-desktop:flex-col below-desktop:items-start below-tablet:flex-row mobile:flex-col" +
  " mobile:gap-3 mobile:items-start mobile:[&_.button]:text-[11px]";

export const contactCard =
  "contact-card p-[35px] border border-solid border-[#62f5ff30] rounded-none [background:#07131e99] [&>.eyebrow]:mt-[35px]" +
  " [&>.eyebrow]:mb-[21px] [&>a]:py-[21px] [&>a]:px-0 [&>a]:flex [&>a]:items-center [&>a]:justify-between [&>a]:border-t" +
  " [&>a]:[border-top-style:solid] [&>a]:border-t-line [&>a]:text-[15px] [&>a:hover]:text-accent below-tablet:max-w-full mobile:p-7" +
  " mobile:[&>a]:min-h-16";

export const contactNote =
  "contact-note flex items-start gap-[13px] mt-7.5 text-[10px] [&>.status-dot]:mt-2";

export const notFound =
  "not-found py-25 [&_h1]:my-5 [&_h1]:mx-0 [&_h1]:text-[80px] [&_h1]:leading-[1.15] [&_p]:text-muted [&_p]:mb-7.5 mobile:py-[65px]" +
  " mobile:[&_h1]:text-[65px]";

export const selectedWork =
  "selected-work below-tablet:[&_.project-card:last-child]:[grid-column:1/-1] below-tablet:[&_.project-card:last-child]:grid" +
  " below-tablet:[&_.project-card:last-child]:grid-cols-[1fr_1fr] below-tablet:[&_.project-card:last-child]:gap-x-[25px]" +
  " below-tablet:[&_.project-card:last-child]:[align-items:start]" +
  " below-tablet:[&_.project-card:last-child>.project-art-link]:[grid-row:1/5]" +
  " below-tablet:[&_.project-card:last-child>.project-card-meta]:mt-[7px] below-tablet:[&_.project-card:last-child>.tag-list]:mt-0" +
  " mobile:[&_.project-card:last-child]:block mobile:[&_.project-card:last-child>.project-card-meta]:mt-5" +
  " mobile:[&_.project-card:last-child>.tag-list]:mt-[17px]";

export const experienceSection =
  "experience-section mobile:[&_.section-heading]:flex-col mobile:[&_.section-heading]:items-start";

export const instrumentTrail =
  "instrument-trail [filter:drop-shadow(0_0_4px_#62f5ff75)]";

export const signaturePath =
  "signature-path [stroke-width:1.5] [filter:drop-shadow(0_0_4px_currentColor)]";

export const footerActions =
  "footer-actions flex items-center gap-5.5 [&>a]:inline-flex [&>a]:items-center [&>a]:min-h-11 mobile:[flex-basis:100%]" +
  " mobile:justify-between mobile:gap-3 mobile:text-[8px]";

export const replayOpening =
  "replay-opening p-0 inline-flex items-center min-h-11 border-[0] [border-style:none] border-current [background:none] text-accent" +
  " [font-family:inherit] [font-size:inherit] leading-[inherit] [font-weight:inherit] [font-style:inherit] [cursor:pointer]" +
  " [&:hover]:text-foreground";

