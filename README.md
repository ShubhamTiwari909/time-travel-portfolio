# The Time Observatory

Shubham Tiwari’s portfolio, observed through time. Built from `implementation.md`, with profile, projects, experience, writing, and links imported from the supplied [portfolio content](https://github.com/ShubhamTiwari909/astro-space-portfolio/tree/main/src/content).

The visual direction is Tron-inspired: near-black surfaces, cyan light trails, geometric type, and thin circuit borders. Orange marks the past and blue-violet marks future possibilities. The arrival sequence, instruments, project lenses, case studies, and skills map share this palette. Styling uses Tailwind CSS v4; visuals are original HTML/SVG and procedural WebGL geometry.

## Run locally

```sh
npm install
npm run dev
```

Open the URL printed by Next.js. If port 3000 is occupied, Next.js chooses the next available port.

```sh
npm test             # Clock, curves, branching, limits, and saved-data validation
npm run typecheck    # TypeScript
npm run lint         # ESLint
npm run build        # Production compilation and static route generation
npm start            # Serve the production build
```

## Experience

- `/`: Introduction, an interactive orbital instrument, a scroll chapter rail, project time lenses, a full-width 3D Chrono Drive, writing, and contact.
- `/projects`: Filterable project collection.
- `/projects/[slug]`: Server-rendered case studies, original notes, live demos, and shareable reading checkpoints.
- `/observatory`: Play, pause, reverse, and seek scene time. Choose a design or engineering perspective, return to the choice, create a new path, and revisit either branch.
- `/lab`: Lissajous frequencies, phase offset, reversible playback, explained equations, and project signatures.
- `/about`: Biography, achievements, system architecture, an interactive skills constellation, and résumé.
- `/contact`: Email, professional profiles, and the original résumé PDF.

The SVG instrument works without WebGL. It starts paused. Reduced motion follows the system setting and can be overridden in the header. Project pages and contact information are available independently of the instrument. Audio and analytics are omitted.

Faded orbital lines, circuit traces, stars, soft light, and a perspective grid form a shared background. The layers move at different speeds as you scroll, with gentler travel on mobile. Reduced motion keeps them still. Scroll updates use a passive listener and a single scheduled frame, without an idle animation loop or media downloads.

## Exploring the details

- **Opening scene:** A brief observatory arrival runs once per tab, with four visible readiness steps, an orbital dial, and a soft reveal. A startup check shows the arrival before the portfolio's first paint, avoiding a flash of the main page. Use **Replay opening** in any page's footer to see it again. Skip with the button or Escape. Reduced motion skips the automatic arrival and shows a static version on explicit replay. Content stays available without JavaScript. The sequence measures completed steps rather than claiming network download percentages; font readiness and a painted frame inform its progression, with a 4.5-second escape hatch for stalled resources.
- **Time lenses:** Hover a project illustration to preview its underlying code or structure. Use the labeled lens button to open it with touch or a keyboard; Escape closes it. Zentauri shows an excerpt from the supplied public API declaration. Other lenses are architecture/design readings of the project descriptions.
- **Living illustrations:** Component cards assemble, publishing panels settle, and orbital signatures draw once when entering view. Without JavaScript, or with reduced motion, the finished artwork remains visible.
- **Chrono Drive:** A full-width WebGL intermission between selected work and the thinking section. An original spacecraft floats inside three clock-like gyro rings over a circuit grid. Drag horizontally or use the rotation/reset buttons. Past, present, and future change its light palette; **Engage jump** runs a finite portal effect. The scene loads only near the viewport, caps rendering at 30fps and device pixel ratio, and pauses off screen or in a hidden tab. Reduced motion keeps the model still and completes jumps immediately. A static SVG diagram remains available without JavaScript or WebGL2.
- **Chapter rail:** Five native anchors follow the introduction, work, thinking, notes, and contact sections. A compact bottom rail replaces the desktop side rail on smaller screens.
- **Orbital navigation:** Opening a project produces a brief expanding ring in its accent color. Navigation proceeds immediately; new-tab and external links keep their normal behavior. The same color appears in the case study. Reduced motion removes the rings.
- **Skills constellation:** Explore the 24 supplied skills, their authored connections, and related projects on the about page. Desktop stars support arrow keys and Home/End. A native grouped selector works on every screen, including mobile. Project relationships come from explicit stack tags or documented project capabilities; broader skills remain in the toolkit without fabricated project links.

These interface choices are local to the current view and do not alter scene time or saved journeys. The features use React, native browser APIs, Tailwind, and inline SVG; the lazy-loaded Chrono Drive uses Three.js without external models, textures, media, or an animation framework.

## Authoring

The imported JSON lives in `content/source/`. `content/portfolio.ts` combines those records with editorial project descriptions and exhibit signatures. Update `CONTENT_VERSION` when changing identifiers or history compatibility. The résumé lives at `public/Shubham_resume_2026.pdf`.

Shared Tailwind utilities live in `styles/portfolio.ts`, and individual exhibits have colocated `*.styles.ts` files. Their exported strings contain complete, static utilities so Tailwind can detect them. Semantic classes identify descendant and state variants; they have no separate component stylesheet. `app/globals.css` contains the Tailwind import, palette/font tokens, exact responsive variants, native-element defaults, the first-paint loading gate, and animation keyframes. Inline styles only supply live scene parameters, coordinates, and accent variables. PostCSS runs `@tailwindcss/postcss` during development and production builds.

Project illustrations are original CSS/SVG conceptual studies, explicitly labeled as such. They are not historical screenshots. The starting-point and future chapters are reading perspectives; only the documented project years are represented as factual dates. Supply original artifacts and dated milestones before describing a chronological project evolution.

VisualGuard replaces Gemini Zentauri in the featured collection, project archive, and interactive exhibits. Its details come from the supplied [VisualGuard repository](https://github.com/ShubhamTiwari909/visualguard-ai-testing); its project action opens GitHub, and its case-study evidence links to the README.

## Time and journeys

See [architecture](docs/architecture.md). Scene seconds, factual project records, and the visitor’s choice sequence are separate. A scene seek never deletes a visitor’s choices. Rewinding a journey and choosing differently preserves its previous future as another branch.

Journeys are optional local records, offered for explicit continuation on a return visit. Storage failures keep the experience usable in memory. Saved input is validated against schema/content versions, known choices, ancestry, and size limits. Limits are 20 branches, 500 choices, and 200 KB. Export is available; importing or sharing arbitrary journey files is not implemented.

## Scope

This implements the plan’s SVG-first vertical slice and direct portfolio, plus the optional 3D Chrono Drive intermission. The free-roaming 3D chamber, relativity exhibit, causal-loop narrative, hosted journey sharing, and automated VisualGuard checks for this portfolio remain later work. No scene is presented as a physical time-travel simulation.

The project uses Next.js 16.4.0 and React 19.3.0. Read the installed Next.js documentation in `node_modules/next/dist/docs/` before changing framework APIs.
