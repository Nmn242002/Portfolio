/** Keep the viewport in the middle copy while preserving its exact visual position. */
export function loopPosition(position: number, cycleWidth: number): number {
  if (cycleWidth <= 0) return position;
  return cycleWidth + ((position - cycleWidth) % cycleWidth + cycleWidth) % cycleWidth;
}