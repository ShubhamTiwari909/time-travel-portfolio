# Architecture

## Rendering boundary

The root layout and page content are Server Components. Interactive islands own the navigation menu, motion preferences, time controls, project filters, checkpoint reading, lab parameters, and observatory journey. The server supplies useful initial HTML. An error boundary around the observatory preserves direct navigation if interaction fails.

The primary time instrument is SVG with analytical geometry; it runs independently of the optional Three.js intermission. It has one requestAnimationFrame authority per active exhibit. Rendering is capped at approximately 30 updates a second, stops when paused, and skips hidden-tab elapsed time. Initial playback is paused. System or explicit reduced motion disables continuous playback while leaving seeking available.

## Visual system

The Tron-inspired palette uses near-black backgrounds, cyan present-state controls, orange past accents, and blue-violet future accents. Tailwind CSS v4 compiles through `@tailwindcss/postcss`. `app/globals.css` defines the palette and font tokens with `@theme inline`, along with inclusive viewport variants that preserve the existing breakpoints. Shared layouts use static utility exports from `styles/portfolio.ts`; individual exhibits use colocated `*.styles.ts` exports. The separate Tron stylesheet and CSS modules have been removed.

Utility strings include semantic hooks for descendant, hover, data-state, and ARIA variants. Every utility is a complete literal, including the finite animation names and decorative gradients, so Tailwind source detection needs no runtime class construction or safelist. Era colors select from explicit static exports. Only native-element defaults, reduced-motion safeguards, the parser-time opening gate, and finite keyframes remain as authored global CSS. SVG colors and live custom properties use the same palette; `projectColors` matches the case-study tokens. Existing project color identifiers remain stable to preserve content and journey compatibility.

The shared background adds original SVG circuit traces and a CSS perspective grid. Both read the existing scroll-progress variable, so the theme introduces no idle rendering loop. The grid stays clipped within the decorative background, and the opening grid is clipped separately to avoid extending the dialog's scroll area. Reduced motion resets progress and disables scroll updates while retaining static grid perspective. Glows use CSS shadows and SVG filters; heading changes use the existing self-hosted Geist fonts, with no new assets or dependencies.

## Portfolio interactions

`OpeningSceneProvider` lives in the persistent root layout and renders the opening dialog alongside its server-rendered children. The native dialog starts closed, preserving direct content without JavaScript. A synchronous inline head script checks tab storage and motion preferences before the first paint. On an eligible first visit, a temporary `data-opening` attribute makes the server-rendered intro visible and hides the surrounding portfolio. The client adopts it as a native modal in `useLayoutEffect`, then releases the temporary gate. The effect reads the current motion preference directly, avoiding the store's initial server snapshot. Root attribute hydration warnings are suppressed only for this deliberate browser-side startup decision.

The startup gate has its own 4.5-second timeout if hydration is delayed or fails. It also handles Skip and Escape before React is ready. Expiry or early dismissal prevents a late-loading bundle from automatically showing the intro after the portfolio has been revealed; explicit replay remains available. The gate adds no request-time server dependency, so static prerendering is retained.

Four staged steps wait for font readiness and a painted frame; short minimum durations make the sequence readable. The progress indicator represents completed steps, not network bytes. Native dialog behavior prevents background interaction, while Skip and Escape close immediately. Normal completion uses a finite CSS reveal, restores scrolling, and moves focus to the main content without moving the viewport. A separate 4.5-second deadline releases the page if readiness stalls after hydration. Timers and frames are cancelled on dismissal or cleanup.

The footer's small `ReplayOpening` client control sends an explicit replay request through context without clearing storage. Each request remounts the scene with fresh progress and returns focus to its button on completion or dismissal, preserving the visitor's scroll position. The request is consumed only when the dialog opens; unfinished requests remain valid during Strict Mode's setup/cleanup retry. Reduced motion skips the automatic arrival, while explicit replay displays the same steps with no animated dial, progress transitions, or departure effect.

`ProjectExhibit` presents a hover preview and a persistent keyboard/touch lens. Its real code excerpt and authored flow readings live in `content/exhibits.ts`. `ProjectArt` uses an IntersectionObserver to start finite CSS animations on entry; the observer disconnects afterward, and static artwork remains the default HTML rendering.

The home page owns `ChapterRail`. Native section anchors retain normal hash navigation, while one scheduled scroll frame updates the current section and progress. The side rail becomes a bottom rail at narrower widths. These observers/listeners clean up when their components unmount.

`OrbitalTransitionProvider` persists in the root layout. `ProjectLink` uses Next Link's `onNavigate` event to start a brief, non-interactive ring overlay without intercepting or delaying routing. It captures the source link's center and project accent, then removes the overlay at animation completion with a timeout fallback. Modifier-key/new-tab navigation bypasses this event. The destination case study carries the same accent. Reduced motion suppresses the overlay.

`SkillsConstellation` reads the supplied skill positions and connections. Desktop star controls use a directional focus search and roving tab index, with Home/End support. A native grouped selector provides a direct alternative on every screen and is the primary mobile control. Project matches use explicit stack tags, named API aliases, or capabilities documented in the supplied project descriptions. A skill without project-specific evidence displays the broader toolkit rather than inventing a relationship.

Lens state, skill selection, chapter position, and navigation effects are transient presentation state. They do not append journey events, alter scene time, or require a saved-data version change. The Chrono Drive adds Three.js as a lazy-loaded rendering dependency.

## Chrono Drive intermission

`TimeMachine` renders the home page’s full-width section and static SVG diagram during prerendering. A nearby-section IntersectionObserver dynamically imports `lib/time-machine-scene.ts`, including Three.js, with no initial WebGL work. A separate canvas observer and the document visibility event pause and resume the scene. The existing motion preference is read directly at initialization and forwarded on subsequent changes.

The procedural model includes an extruded spacecraft, faceted cockpit, clock reactor, three independent gyro rings, instanced dial ticks, bounded stars/jump streaks, and a lightweight radial portal shader. No external model, texture, render target, or postprocessing pass is required. Three’s animation loop renders at most 30fps; capped deltas discard hidden/off-screen elapsed time. Device pixel ratio is capped at 1.5 on desktop and 1.25 on phones. A ResizeObserver adjusts the camera to preserve the craft on narrow screens.

Horizontal pointer dragging and native rotation/reset buttons control orientation; `touch-action: pan-y` preserves vertical scrolling. Era selection changes a finite palette, and a jump runs for 3.2 seconds of visible playback. Reduced motion disables the loop, allows explicit static orientation changes, and completes a jump immediately. This presentation state is separate from the time engine and persisted journey.

Unavailable WebGL2, shader failure, rendering failure, or context loss restores the original SVG diagram and disables flight controls while retaining era previews and all page content. Cleanup disconnects observers/listeners, stops the animation loop, releases pointer capture, disposes instancing/geometries/materials/renderer, and releases the context. Partially initialized resources are also disposed on failure. Next’s Activity retains page DOM/state on navigation while running effect cleanup; a layout-effect cleanup resets transient readiness/jump state and advances the canvas key, so returning creates a fresh canvas and shows the fallback until the renderer is recreated. The key matters because an explicitly lost WebGL context cannot immediately be reused on the retained DOM node. Era selection is preserved. This is an intermission exhibit; the plan’s free-roaming chamber remains future work.

## Three domains

1. **Scene time:** bounded to 0–60 seconds in `engine/clock.ts`; it evaluates instrument positions independently of prior frames.
2. **Project content:** imported, authored records in `content/source/` and `content/portfolio.ts`; reading checkpoints do not invent historical screenshots or intermediate dates.
3. **Visitor history:** durable project, checkpoint, and perspective events in `engine/history.ts`.

A branch stores its parent, the count of inherited effective events, and its local event IDs. Reconstruction resolves ancestry, truncates each inherited prefix, and applies the current cursor. A new command at an earlier cursor creates a child branch. Existing event arrays are not mutated. Repeated identical choices do not emit duplicate events.

Pure reconstruction has no storage, navigation, clipboard, or download effects. These occur only through explicit UI commands or debounced persistence. Event sequence defines order; scene time may move backward.

## Persistence

Local storage uses `time-observatory:journey:v1` and `time-observatory:motion`. Session storage uses `time-observatory:opening:v1` solely to suppress repeat arrivals in the same tab; an in-memory fallback covers navigation when storage is denied. Reset clears this application's journey record. Deserialization checks schema/content compatibility, permissible actions and project IDs, finite time, unique event and branch IDs, chronological sequences, parent-before-child ancestry, event ownership, complete assignment, valid fork positions, and cursor bounds.

A saved journey is offered for continuation; it does not silently replace the landing state. Storage denial or quota failure retains an in-memory session. Canonical project links accept a known `milestone` query. Unknown checkpoints show useful content and a recovery message.

## Mathematics

Lissajous curves use x(t)=A sin(at+φ), y(t)=B sin(bt). Positive integer frequencies repeat after 2π/gcd(a,b). The scene range maps one complete period to 60 seconds. Geometry is sampled once per parameter change; only a marker is evaluated during playback. SVG coordinates are rounded for server/browser hydration consistency.

## Content and assets

Profile, experience, writing, architecture, code excerpts, and three project records come from the user's supplied portfolio repository. VisualGuard replaces Gemini Zentauri using the supplied VisualGuard repository's README and package manifest, with 2026 verified from its creation date. New explanatory copy is editorial. Exact historical milestones were not supplied, so project checkpoints explicitly present a starting question, a documented implementation, and a speculative future. Repository projects use GitHub for their public action and README evidence; other projects retain their live-demo links. The content version changes when project identifiers change, so incompatible saved journeys receive the existing recovery message.

The résumé is copied from that repository's public directory. Illustrations and favicon were authored locally as CSS/SVG; the Chrono Drive is original procedural Three.js geometry with an SVG fallback; project artwork is labeled conceptual. Geist and Geist Mono are self-hosted through next/font and provide the themed display, interface, and console typography. No external images, sound, tracking, account, or database are required.

## Validation boundary

Node tests cover deterministic evaluation, clock bounds and cadence, branching isolation, nested reconstruction, deduplication, persistence corruption, and configured limits. Chromium browser checks cover play/reverse/seek, fork/switch/reload, project filtering, checkpoint links, reduced motion, mobile layout, disabled storage, and direct content without JavaScript.

Physical device performance, independent accessibility review, cross-browser visual baselines, and the proposed VisualGuard integration need separate evaluation before claiming the full launch checklist.
