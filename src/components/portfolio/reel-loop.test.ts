import { describe, expect, test } from "bun:test";
import { loopPosition } from "./reel-loop";

describe("independently scrollable looping reel", () => {
  test("forward scrolling wraps to the same frame without reaching an end", () => {
    expect(loopPosition(2450, 1200)).toBe(1250);
  });
  test("backward scrolling wraps to the same frame without reaching a start", () => {
    expect(loopPosition(1150, 1200)).toBe(2350);
  });
  test("manual position inside the middle copy is preserved", () => {
    expect(loopPosition(1640, 1200)).toBe(1640);
  });
});