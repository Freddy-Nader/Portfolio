import { readFile } from "node:fs/promises";
import path from "node:path";

type PostMeta = {
  id: string;
  title: string;
  date: string;
};

export type PostContent = PostMeta & {
  content: string;
};

/**
 * Retrieves the metadata and MDX content for a specific post.
 * @param year The year of the post.
 * @param slug The unique identifier (slug) of the post.
 * @returns A promise that resolves to the post content or null if not found.
 */
export async function getPostContent(
  year: string,
  slug: string
): Promise<PostContent | null> {
  const postsPath = path.join(process.cwd(), "lib/posts.json");
  const postsRaw = await readFile(postsPath, "utf8");
  const posts = JSON.parse(postsRaw) as { posts: PostMeta[] };
  const post = posts.posts.find(candidate => candidate.id === slug);

  if (!post || String(new Date(post.date).getFullYear()) !== year) {
    return null;
  }

  const postPath = path.join(
    process.cwd(),
    "app",
    "words",
    "(post)",
    year,
    slug,
    "page.mdx"
  );

  try {
    const rawPost = await readFile(postPath, "utf8");
    const content = getBody(rawPost);

    return {
      ...post,
      content,
    };
  } catch {
    return null;
  }
}

/**
 * Extracts the body content from a raw MDX string by skipping initial frontmatter-like lines.
 * @param rawPost The raw content of the MDX file.
 * @returns The body content of the post.
 */
function getBody(rawPost: string) {
  const lines = rawPost.split(/\r?\n/);
  let nonEmptyLinesSeen = 0;
  let bodyStartIndex = 0;

  for (let index = 0; index < lines.length; index += 1) {
    if (lines[index].trim() === "") {
      continue;
    }

    nonEmptyLinesSeen += 1;
    if (nonEmptyLinesSeen === 2) {
      bodyStartIndex = index + 1;
      break;
    }
  }

  return lines.slice(bodyStartIndex).join("\n").trim();
}
