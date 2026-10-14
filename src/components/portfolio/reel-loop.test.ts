import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { autoplayDelta, loopPosition } from "./reel-loop";

describe("independently scrollable looping reel", () => {
  test("forward scrolling wraps to the same frame without reaching an end", () => {
    assert.equal(loopPosition(2450, 1200), 1250);
  });
  test("backward scrolling wraps to the same frame without reaching a start", () => {
    assert.equal(loopPosition(1150, 1200), 2350);
  });
  test("manual position inside the middle copy is preserved", () => {
    assert.equal(loopPosition(1640, 1200), 1640);
  });
});

describe("automatic reel motion", () => {
  test("moves at a regular pace when the reel is not being hovered", () => {
    assert.equal(autoplayDelta(25, 24, 1, false, false), 0.6);
    assert.equal(autoplayDelta(25, 24, -1, false, false), -0.6);
  });

  test("stops while hovered so frames can be inspected manually", () => {
    assert.equal(autoplayDelta(25, 24, 1, true, false), 0);
  });
});