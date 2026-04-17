import postsData from "@/lib/posts.json";

/**
 * Represents a blog post with metadata and view counts.
 */
export type Post = {
  id: string;
  date: string;
  title: string;
};

/**
 * Fetches all posts from the posts.json file and merges them with real-time view counts from Redis.
 * @returns A promise that resolves to an array of post objects.
 */
export const getPosts = async () => {
  const posts = postsData.posts.map((post): Post => {
    return {
      ...post,
    };
  });
  return posts;
};
