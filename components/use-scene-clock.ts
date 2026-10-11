"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { advanceClock, clampTime, SCENE_DURATION, type PlaybackRate } from "@/engine/clock";
import { useMotion } from "./motion-provider";

export function useSceneClock(initial = 18) {
  const [time, setTime] = useState(initial);
  const [playing, setPlaying] = useState(false);
  const [rate, setRate] = useState<PlaybackRate>(1);
  const current = useRef(initial);
  const { reduced } = useMotion();

  const seek = useCallback((value: number) => {
    const bounded = clampTime(value);
    current.current = bounded;
    setTime(bounded);
    setPlaying(false);
  }, []);

  useEffect(() => {
    if (!playing || reduced) return;
    let frame = 0;
    let previous: number | null = null;
    let lastPaint = 0;
    function tick(now: number) {
      if (document.hidden) { previous = null; frame = requestAnimationFrame(tick); return; }
      const elapsed = previous === null ? 0 : Math.min((now - previous) / 1000, 0.1);
      previous = now;
      const next = advanceClock(current.current, elapsed, rate);
      current.current = next.time;
      if (now - lastPaint >= 32 || next.atBoundary) { setTime(next.time); lastPaint = now; }
      if (next.atBoundary) { setPlaying(false); return; }
      frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [playing, rate, reduced]);

  function play(direction: PlaybackRate = 1) {
    if (reduced) return;
    if (current.current === SCENE_DURATION && direction > 0) seek(0);
    if (current.current === 0 && direction < 0) seek(SCENE_DURATION);
    setRate(direction);
    setPlaying(true);
  }

  return { time, playing: playing && !reduced, rate, seek, play, pause: () => setPlaying(false), reduced };
}
