import test from "node:test";
import assert from "node:assert/strict";

test("getPostContent loads a post from its year and slug", async () => {
  const { getPostContent } = await import("../lib/get-post-content.ts");
  const post = await getPostContent("2025", "become-the-embodiment-of-your-art");

  assert.ok(post);
  assert.equal(post.title, "Become the Embodiment of Your Art");
  assert.equal(post.date, "Feb 11, 2025");
  assert.match(post.content, /embodiment of my art/i);
});

test("getPostContent returns null for an unknown year and slug", async () => {
  const { getPostContent } = await import("../lib/get-post-content.ts");
  const post = await getPostContent("2024", "become-the-embodiment-of-your-art");

  assert.equal(post, null);
});
