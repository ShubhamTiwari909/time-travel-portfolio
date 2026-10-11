# Verification — 11 October 2026

## Automated checks

| Check | Result |
| --- | --- |
| `npm test` | 9 tests passed: clock bounds, zero-elapsed first frames at either endpoint, deterministic seek, frame cadence, fork isolation, duplicate choices, nested history, invalid storage, and limits |
| `npm run typecheck` | Passed |
| `npm run lint` | Passed |
| `npm run build` | Passed; all portfolio routes generated |

## Browser checks

Checked with the connected Chromium browser at 1440 × 1000 and 390 × 844 CSS pixels. Mobile checks use emulation, not physical devices.

- Choose design, rewind to the decision, choose engineering, and switch back to the original path: passed.
- Seek, play, pause, and reverse scene time without changing visitor history: passed. Playback from 0 and reverse from 60, including automatic stops at the opposite bounds, also passed on the home, observatory, and lab pages.
- Reload and explicitly continue a saved journey: passed.
- Filter projects and return to the full collection: passed.
- Open known and malformed milestone links: correct content and recovery message.
- Change lab frequency and phase, reset the experiment, and use keyboard Home/End on the scene range: passed.
- System reduced motion disables continuous playback while retaining seek and branching: passed.
- Focus moves to the changed perspective panel after a choice: passed.
- Disabled local storage retains an in-memory journey: passed.
- JavaScript disabled: project collection and contact remain readable.
- Mobile menu opens and closes; all 10 portfolio/project routes fit a 390-pixel viewport.
- Production navigation, branching, case-study link, and résumé download: passed with no runtime or console errors in the checked flow.
- All four source-provided live project URLs returned HTTP 200 on a HEAD request.

## Scroll background

- Removed the code film, GIF, poster, captions, renderer, and player section.
- Inspected the faded background at 1440 × 1000 and 390 × 844. Both fit the viewport without horizontal overflow.
- Scrolling changes the three SVG layers at different speeds; mobile uses smaller offsets. Background elements ignore pointer input and are hidden from assistive technology.
- The header motion toggle resets transforms and stops scroll updates. A fresh browser with system reduced motion also kept every layer still after scrolling.
- Navigating to projects resets scroll progress correctly and retains the shared background. Current Next.js diagnostics are clear.
- Focused ESLint checks on the background, motion provider, layout, and home page passed. Full build, type checks, and engine tests were not rerun for this visual change; the earlier results above remain from the preceding implementation.

## Remaining evaluation

Physical-device performance, Safari/Firefox, screen-reader testing, independent WCAG evaluation, moderated usability, and VisualGuard comparisons have not been performed. Exact historical dates and original prototype artifacts are still needed for chronological project evolution; current checkpoints are labeled reading perspectives. The 3D chamber and expansion exhibits are intentionally deferred according to the plan's vertical-slice gate.
