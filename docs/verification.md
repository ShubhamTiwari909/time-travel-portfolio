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

## Five portfolio interactions

- Desktop hover opens a time lens; keyboard Enter pins it and Escape closes it. A touch-emulated mobile browser opens and closes the lens on tap. Inspected its code reading at full opacity.
- Project illustrations remain unanimated before entering view, then use the component, CMS, or signature animation. System reduced motion renders all three as static artwork.
- Chapter anchors reach the work/contact sections and update the active indicator. The mobile rail fits a 390-pixel viewport with 44-pixel controls. The 800-pixel tablet layout also fits without overflow.
- Opening Payload CMS produced an amber orbital transition and an amber case-study accent; its overlay cleaned up after completion. Reduced-motion navigation to Gemini retained the lilac accent without adding an overlay.
- Skills selector: Next.js matches three projects, Tailwind CSS four, and TypeScript/accessibility Zentauri UI. Playwright displays the broader toolkit and its supplied accessibility connection. Arrow keys change the selected star and move focus. Mobile uses the native selector and remains free of horizontal overflow.
- Project category filtering still returns one design-system project and restores all four. Home scene playback still advances from the left endpoint.
- Production checks covered the chapter rail, keyboard lens, case-study/next-project navigation, and skill selection with no browser runtime or console errors.
- Current production build and TypeScript checks passed; all nine engine tests passed. Focused ESLint checks passed for the changed pages, components, and exhibit data. Next.js diagnostics were clear.

## Opening scene

- Observed all four readiness states and final reveal in Chromium. Normal completion restores scrolling, focuses `main-content`, and stores the tab-session completion marker. Navigation and reload do not replay the sequence.
- Inspected the SVG dial and loading steps at 1440 × 900, 800 × 1000, 390 × 844, 320 × 568, and 844 × 390. Compact layouts fit without horizontal or vertical overflow, and opening does not scroll the scene to its focused button.
- Touch Skip and keyboard Escape dismiss immediately. Tab does not reach background links; the native dialog returns focus to the skip control on the next cycle. Closing moves focus to the portfolio without changing the viewport.
- A fresh system-reduced-motion session never opens the dialog. JavaScript-disabled content remains readable. Denied session storage still allows dismissal and keeps the intro dismissed during client navigation.
- Simulated a font readiness promise that never resolves: the 4.5-second deadline releases the portfolio, restores scrolling, and leaves no runtime errors. All checked flows reported zero page errors.
- Focused ESLint checks passed for the opening component and root layout. Full production build, TypeScript, and engine tests were not rerun for this isolated presentation change; preceding results remain recorded above.

## Tron-inspired theme

- Checked all ten portfolio/project routes at 1440 × 1000, 390 × 844, and 320 × 568. All use the new cyan palette and Geist display typography, with no horizontal overflow or reported page errors.
- Inspected the home, project cards/lens, case study, and skills map. The background combines clipped perspective grids, circuit paths, orbital lines, and scroll parallax. Cyan, orange, and blue-violet project accents match the controls and destinations.
- The themed arrival fits desktop, tablet, mobile, small mobile, and landscape viewports without scrolling or overflow. Normal completion, touch Skip, and Escape restore focus to `main-content`. System reduced motion bypasses the arrival; the header motion setting freezes the grid during scrolling.
- Home scene playback advances from zero. Keyboard lenses open and close. Next.js still matches three supplied projects in the skill selector.
- Production checks confirmed stylesheet order and typography, desktop/mobile lenses, the mobile navigation menu, and matching orange portal/case-study accents. Checked flows reported no page errors.
- Production build and its TypeScript checks passed. Focused ESLint checks passed for all changed TS/TSX files. Engine tests were not rerun because the theme does not change clock, math, or journey logic.

## Remaining evaluation

Physical-device performance, Safari/Firefox, screen-reader testing, independent WCAG evaluation, moderated usability, and VisualGuard comparisons have not been performed. Exact historical dates and original prototype artifacts are still needed for chronological project evolution; current checkpoints are labeled reading perspectives. The 3D chamber and expansion exhibits are intentionally deferred according to the plan's vertical-slice gate.
