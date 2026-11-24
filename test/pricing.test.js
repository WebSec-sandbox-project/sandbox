import { test } from "node:test";
import assert from "node:assert/strict";
import { formatPrice } from "../src/pricing.js";

test("formatPrice returns a string starting with £", () => {
  assert.equal(typeof formatPrice(100), "string");
  assert.ok(formatPrice(100).startsWith("£"));
});
