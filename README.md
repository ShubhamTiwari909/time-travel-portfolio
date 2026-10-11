# The Time Observatory

Shubham Tiwari’s portfolio, observed through time. Built from `implementation.md`, with profile, projects, experience, writing, and links imported from the supplied [portfolio content](https://github.com/ShubhamTiwari909/astro-space-portfolio/tree/main/src/content).

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

- `/`: Introduction, an interactive orbital instrument, selected projects, writing, and contact.
- `/projects`: Filterable project collection.
- `/projects/[slug]`: Server-rendered case studies, original notes, live demos, and shareable reading checkpoints.
- `/observatory`: Play, pause, reverse, and seek scene time. Choose a design or engineering perspective, return to the choice, create a new path, and revisit either branch.
- `/lab`: Lissajous frequencies, phase offset, reversible playback, explained equations, and project signatures.
- `/about`: Biography, achievements, system architecture, skills, and résumé.
- `/contact`: Email, professional profiles, and the original résumé PDF.

The SVG instrument works without WebGL. It starts paused. Reduced motion follows the system setting and can be overridden in the header. Project pages and contact information are available independently of the instrument. Audio and analytics are omitted.

Faded orbital lines, stars, and soft light form a shared background. The layers move at different speeds as you scroll, with gentler travel on mobile. Reduced motion keeps them still. Scroll updates use a passive listener and a single scheduled frame, without an idle animation loop or media downloads.

## Authoring

The imported JSON lives in `content/source/`. `content/portfolio.ts` combines those records with editorial project descriptions and exhibit signatures. Update `CONTENT_VERSION` when changing identifiers or history compatibility. The résumé lives at `public/Shubham_resume_2026.pdf`.

Project illustrations are original CSS/SVG conceptual studies, explicitly labeled as such. They are not historical screenshots. The starting-point and future chapters are reading perspectives; only the documented project years are represented as factual dates. Supply original artifacts and dated milestones before describing a chronological project evolution.

## Time and journeys

See [architecture](docs/architecture.md). Scene seconds, factual project records, and the visitor’s choice sequence are separate. A scene seek never deletes a visitor’s choices. Rewinding a journey and choosing differently preserves its previous future as another branch.

Journeys are optional local records, offered for explicit continuation on a return visit. Storage failures keep the experience usable in memory. Saved input is validated against schema/content versions, known choices, ancestry, and size limits. Limits are 20 branches, 500 choices, and 200 KB. Export is available; importing or sharing arbitrary journey files is not implemented.

## Scope

This implements the plan’s SVG-first vertical slice and direct portfolio. The free-roaming 3D chamber, relativity exhibit, causal-loop narrative, hosted journey sharing, and VisualGuard integration remain later work. No scene is presented as a physical time-travel simulation.

The project uses Next.js 16.4.0 and React 19.3.0. Read the installed Next.js documentation in `node_modules/next/dist/docs/` before changing framework APIs.
