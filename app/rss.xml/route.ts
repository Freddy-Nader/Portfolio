import posts from "@/app/words/db.json";

const SITE_URL = "https://anader.xyz";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const items = posts.map((post) => {
    const slug = post.link.startsWith("/") ? post.link : `/${post.link}`;
    const summary = post.rawSummary === "..." ? "" : post.rawSummary;
    const pubDate = new Date(post.date).toUTCString();

    return `
      <item>
        <title>${escapeXml(post.title)}</title>
        <link>${SITE_URL}${slug}</link>
        <guid>${SITE_URL}${slug}</guid>
        <pubDate>${pubDate}</pubDate>
        <description>${escapeXml(summary)}</description>
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
