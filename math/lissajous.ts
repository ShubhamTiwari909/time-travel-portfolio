export type Signature = { a: number; b: number; phase: number };

export function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

export function period(a: number, b: number) {
  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 1 || b < 1) throw new RangeError("Frequencies must be positive integers.");
  return 2 * Math.PI / gcd(a, b);
}

export function pointAt(time: number, { a, b, phase }: Signature, amplitude = 130) {
  return { x: 200 + amplitude * Math.sin(a * time + phase), y: 200 + amplitude * Math.sin(b * time) };
}

export function curvePath(signature: Signature, amplitude = 130, samples = 500) {
  const duration = period(signature.a, signature.b);
  return Array.from({ length: samples + 1 }, (_, i) => {
    const point = pointAt(i / samples * duration, signature, amplitude);
    return `${i === 0 ? "M" : "L"}${point.x.toFixed(3)},${point.y.toFixed(3)}`;
  }).join(" ");
}
