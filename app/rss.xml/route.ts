import { getPosts } from "@/lib/get-posts";

const SITE_URL = "https://anader.xyz";

/**
 * Escapes special XML characters in a string to prevent XML injection.
 * @param value - The string to escape.
 * @returns The escaped string with XML special characters replaced with their entity equivalents.
 */
function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

/**
 * Generates and returns an RSS feed containing all blog posts.
 * @returns A Response object containing the RSS XML feed with appropriate headers for caching and content type.
 */
export async function GET() {
  const posts = await getPosts();
  const items = posts.map((post) => {
    const slug = `/words/${new Date(post.date).getFullYear()}/${post.id}`;
    const pubDate = new Date(post.date).toUTCString();

    return `
      <item>
        <title>${escapeXml(post.title)}</title>
        <link>${SITE_URL}${slug}</link>
        <guid>${SITE_URL}${slug}</guid>
        <pubDate>${pubDate}</pubDate>
        <description>${escapeXml(post.title)}</description>
      </item>`;
  }).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Alfredo Nader</title>
    <link>${SITE_URL}</link>
    <description>Essays and writing by Alfredo Nader.</description>
    <language>en-us</language>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
