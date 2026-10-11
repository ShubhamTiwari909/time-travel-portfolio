export const SCENE_DURATION = 60;
export type PlaybackRate = -2 | -1 | -0.5 | 0.5 | 1 | 2;

export function clampTime(time: number, duration = SCENE_DURATION) {
  return Math.max(0, Math.min(duration, Number.isFinite(time) ? time : 0));
}

export function advanceClock(time: number, elapsed: number, rate: PlaybackRate, duration = SCENE_DURATION) {
  const next = clampTime(time + Math.max(0, elapsed) * rate, duration);
  return { time: next, atBoundary: rate > 0 ? next === duration : next === 0 };
}

export function orbitPoint(time: number, radius = 150) {
  const angle = clampTime(time) / SCENE_DURATION * Math.PI * 2;
  return { x: 300 + Math.cos(angle) * radius, y: 300 + Math.sin(angle) * radius };
}
