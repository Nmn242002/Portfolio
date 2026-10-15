/** Native scroll direction is opposite to the images' visible travel direction. */
export const reelDirections = { upper: -1, lower: 1 } as const;

/** Keep the viewport in the middle copy while preserving its exact visual position. */
export function loopPosition(position: number, cycleWidth: number): number {
  if (cycleWidth <= 0) return position;
  return cycleWidth + ((position - cycleWidth) % cycleWidth + cycleWidth) % cycleWidth;
}

/** Advance the reel at a steady speed, stopping for direct interaction or reduced motion. */
export function autoplayDelta(
  elapsedMs: number,
  pixelsPerSecond: number,
  direction: number,
  paused: boolean,
  reducedMotion: boolean,
): number {
  if (paused || reducedMotion || elapsedMs <= 0) return 0;
  return Math.min(elapsedMs, 50) * pixelsPerSecond / 1000 * direction;
}