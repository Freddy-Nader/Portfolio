import test from "node:test";
import assert from "node:assert/strict";

test("top-level year/slug routes rewrite to the words post route", async () => {
  const { default: nextConfig } = await import("../next.config.ts");
  const rewrites = typeof nextConfig.rewrites === "function"
    ? await nextConfig.rewrites()
    : [];

  assert.ok(
    rewrites.some(
      rewrite =>
        rewrite.source === "/:year(\\d{4})/:slug" &&
        rewrite.destination === "/words/:year/:slug"
    ),
    "expected a rewrite from /:year/:slug to /words/:year/:slug"
  );
});
