# Architecture

## Rendering boundary

The root layout and page content are Server Components. Interactive islands own the navigation menu, motion preferences, time controls, project filters, checkpoint reading, lab parameters, and observatory journey. The server supplies useful initial HTML. An error boundary around the observatory preserves direct navigation if interaction fails.

The instrument is SVG with analytical geometry; no extra rendering dependency is required. It has one requestAnimationFrame authority per active exhibit. Rendering is capped at approximately 30 updates a second, stops when paused, and skips hidden-tab elapsed time. Initial playback is paused. System or explicit reduced motion disables continuous playback while leaving seeking available.

## Three domains

1. **Scene time:** bounded to 0–60 seconds in `engine/clock.ts`; it evaluates instrument positions independently of prior frames.
2. **Project content:** imported, authored records in `content/source/` and `content/portfolio.ts`; reading checkpoints do not invent historical screenshots or intermediate dates.
3. **Visitor history:** durable project, checkpoint, and perspective events in `engine/history.ts`.

A branch stores its parent, the count of inherited effective events, and its local event IDs. Reconstruction resolves ancestry, truncates each inherited prefix, and applies the current cursor. A new command at an earlier cursor creates a child branch. Existing event arrays are not mutated. Repeated identical choices do not emit duplicate events.

Pure reconstruction has no storage, navigation, clipboard, or download effects. These occur only through explicit UI commands or debounced persistence. Event sequence defines order; scene time may move backward.

## Persistence

Only `time-observatory:journey:v1` and `time-observatory:motion` are used. Reset clears this application's journey record. Deserialization checks schema/content compatibility, permissible actions and project IDs, finite time, unique event and branch IDs, chronological sequences, parent-before-child ancestry, event ownership, complete assignment, valid fork positions, and cursor bounds.

A saved journey is offered for continuation; it does not silently replace the landing state. Storage denial or quota failure retains an in-memory session. Canonical project links accept a known `milestone` query. Unknown checkpoints show useful content and a recovery message.

## Mathematics

Lissajous curves use x(t)=A sin(at+φ), y(t)=B sin(bt). Positive integer frequencies repeat after 2π/gcd(a,b). The scene range maps one complete period to 60 seconds. Geometry is sampled once per parameter change; only a marker is evaluated during playback. SVG coordinates are rounded for server/browser hydration consistency.

## Content and assets

Profile, projects, experience, writing, architecture, and code excerpts come from the user's supplied repository. New explanatory copy is editorial. The four project years come from that source. Exact historical milestones were not supplied, so project checkpoints explicitly present a starting question, a documented implementation, and a speculative future.

The résumé is copied from that repository's public directory. Illustrations and favicon were authored locally as CSS/SVG; project artwork is labeled conceptual. Geist and Geist Mono are self-hosted through next/font. Georgia uses the visitor's installed system font. No external images, sound, tracking, account, or database are required.

## Validation boundary

Node tests cover deterministic evaluation, clock bounds and cadence, branching isolation, nested reconstruction, deduplication, persistence corruption, and configured limits. Chromium browser checks cover play/reverse/seek, fork/switch/reload, project filtering, checkpoint links, reduced motion, mobile layout, disabled storage, and direct content without JavaScript.

Physical device performance, independent accessibility review, cross-browser visual baselines, and the proposed VisualGuard integration need separate evaluation before claiming the full launch checklist.
