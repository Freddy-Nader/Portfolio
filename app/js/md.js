import fs from 'fs';
import path from 'path';
import { resolve } from 'path';

const contentDir = resolve('content/posts');
const publicWordsDir = resolve('public/words');
const wordsDir = resolve('words');

// Ensure output directories exist
if (!fs.existsSync(publicWordsDir)) {
  fs.mkdirSync(publicWordsDir, { recursive: true });
}
if (!fs.existsSync(wordsDir)) {
  fs.mkdirSync(wordsDir, { recursive: true });
}

function parseMarkdown(text) {
  // 1. Pre-normalization for robustness
  // Ensure <bq> tags are on their own lines to simplify block logic
  let normalized = text
    .replace(/<bq>/g, '\n<bq>\n')
    .replace(/<\/bq>/g, '\n</bq>\n')
    .replace(/<bq>/g, '\n<bq>\n')
    .replace(/<\/bq>/g, '\n</bq>\n');

  let lines = normalized.split(/\r?\n/);
  let output = [];
  let state = {
    inUl: false,
    inOl: false,
    buffer: []
  };
  const footnotes = [];

  const flushBuffer = () => {
    if (state.buffer.length > 0) {
      let pContent = state.buffer.join(' ');
      if (pContent.trim()) {
        output.push(`<p>${pContent}</p>`);
      }
      state.buffer = [];
    }
  };

  const closeLists = () => {
    if (state.inUl) {
      output.push('</ul>');
      state.inUl = false;
    }
    if (state.inOl) {
      output.push('</ol>');
      state.inOl = false;
    }
  };

  const processInline = (line) => {
    let html = line;
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    html = html.replace(/~(.*?)~/g, '<del>$1</del>');
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1">');
    html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
    html = html.replace(/^\[ \] (.*$)/, '<div class="task-item"><input type="checkbox" disabled> $1</div>');
    html = html.replace(/^\[x\] (.*$)/, '<div class="task-item"><input type="checkbox" checked disabled> $1</div>');

    // Extract footnotes
    html = html.replace(/<fn>(.*?)<\/fn>/g, (match, content) => {
      footnotes.push(content);
      const id = footnotes.length;
      return `<sup id="ref-${id}"><a href="#fn-${id}">[${id}]</a></sup>`;
    });

    return html;
  };

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let trimmed = line.trim();

    // 0. Blank line -> Flush buffer
    if (trimmed === '') {
      flushBuffer();
      continue;
    }

    // 1. Check for Headers
    if (line.match(/^#{1,6} /)) {
      flushBuffer();
      closeLists();
      let level = line.match(/^#{1,6}/)[0].length + 1;
      let content = line.replace(/^#{1,6} /, '');
      output.push(`<h${level}>${processInline(content)}</h${level}>`);
      continue;
    }

    // 2. Check for Horizontal Rule
    if (line.match(/^---$/)) {
      flushBuffer();
      closeLists();
      output.push('<hr>');
      continue;
    }

    // 3. Custom <bq> tags
    if (trimmed === '<bq>') {
      flushBuffer();
      closeLists();
      output.push('<blockquote>');
      continue;
    }
    if (trimmed === '</bq>') {
      flushBuffer();
      output.push('</blockquote>');
      continue;
    }



    // 5. Lists
    // Unordered (- only)
    if (line.match(/^- /)) {
      flushBuffer();
      if (!state.inUl) {
        closeLists();
        output.push('<ul>');
        state.inUl = true;
      }
      let content = line.replace(/^- /, '');
      output.push(`<li>${processInline(content)}</li>`);
      continue;
    }
    // Ordered (number + dot)
    if (line.match(/^\d+\. /)) {
      flushBuffer();
      if (!state.inOl) {
        closeLists();
        output.push('<ol>');
        state.inOl = true;
      }
      let content = line.replace(/^\d+\. /, '');
      output.push(`<li>${processInline(content)}</li>`); // Note: ignores actual number value
      continue;
    }

    // 6. Normal Text
    closeLists();
    state.buffer.push(processInline(trimmed));
  }

  flushBuffer();
  closeLists();

  // Append footnotes
  if (footnotes.length > 0) {
    output.push('<hr class="footnotes-sep">');
    output.push('<div class="footnotes"><ol>');
    footnotes.forEach((fn, index) => {
      const id = index + 1;
      output.push(`<li id="fn-${id}">${fn} <a href="#ref-${id}">↩</a></li>`);
    });
    output.push('</ol></div>');
  }

  return output.join('\n');
}

function build() {
  console.log('[Blog] Building...');

  if (!fs.existsSync(contentDir)) return;

  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
  console.log(`[Blog] Found files: ${files.join(', ')}`);
  const posts = [];

  files.forEach(file => {
    const rawContent = fs.readFileSync(path.join(contentDir, file), 'utf-8');

    // Parse 3-line header (Title, Date, TLDR) ignoring empty lines
    const lines = rawContent.split(/\r?\n/);
    let titleFound = '';
    let dateFound = '';
    let tldrFound = '';
    let bodyStartIndex = 0;
    let captured = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line) {
        if (captured === 0) titleFound = line;
        else if (captured === 1) dateFound = line;
        else if (captured === 2) {
          tldrFound = line;
          bodyStartIndex = i + 1;
          break;
        }
        captured++;
      }
    }

    // If file is too short (less than 3 non-empty lines), bodyStartIndex might be 0 or small.
    // We should ensure we consumed lines up to where we broke or end.
    if (captured < 3) {
      bodyStartIndex = lines.length;
    }

    // Default slug from filename (still useful for URL)
    let slug = file.replace('.md', '');
    const filenameMatch = file.match(/^(\d{4}-\d{2}-\d{2})-(.*)\.md$/);
    if (filenameMatch) {
      slug = filenameMatch[2];
    }

    const title = titleFound || slug; // Use found title or default slug/filename
    const date = dateFound;
    const tldr = tldrFound;
    const bodyRaw = lines.slice(bodyStartIndex).join('\n');

    const bodyHtml = parseMarkdown(bodyRaw);

    // Construct the full content HTML (Title + Date + TLDR + Body)
    // Note: Title is h2 per user preference
    let contentHtml = `<h2>${title}</h2>\n`;
    if (date) {
      contentHtml += `<p><time class="date">${date}</time></p>\n`;
    }
    if (tldr) {
      contentHtml += `<p><strong>TL;DR</strong> ${tldr}</p>\n<hr>\n`;
    }
    contentHtml += bodyHtml;

    // Generate summary:
    // Split by <hr> (which separates TLDR from body).
    // If no HR in bodyHtml, default logic.
    // Actually, since we force an HR after TLDR, we can just take bodyHtml?
    // But what if bodyHtml starts with empty lines?
    // Also user logic: "discard all text before hr".
    // If we use contentHtml.split('<hr>'), the first part is Title/Date/TLDR.
    // The rest is the body.

    let rawSummary = '';
    const parts = contentHtml.split('<hr>');
    if (parts.length > 1) {
      const body = parts.slice(1).join(' '); // Join strict body
      rawSummary = body.replace(/<(?!\/?(em|strong)\b)[^>]+>/gi, "");
      rawSummary = rawSummary.replace(/\s+/g, ' ').trim();
      rawSummary = rawSummary.substring(0, 150) + '...';
    } else {
      // Fallback if no HR (e.g. no TLDR?)
      rawSummary = bodyHtml.replace(/<(?!\/?(em|strong)\b)[^>]+>/gi, "").replace(/\s+/g, ' ').trim().substring(0, 150) + '...';
    }

    const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="/src/css/style.css">
    <script type="module" src="/src/js/script.js"></script>
    <load src="/src/partials/all.html" />
</head>
<body>
    <header>
        <ul class="toc">
            <li><a class="btn" href="/">Home</a></li>
            <li>
                <p>></p>
            </li>
            <li><a class="btn" href="/words/">Words</a></li>
            <li>
                <p>></p>
            </li>
            <li><a class="btn" href="/words/${slug}">${title}</a></li>
        </ul>
    </header>
    <main class="blog-post">
        ${contentHtml}
    </main>
</body>
</html>`;

    fs.writeFileSync(path.join(wordsDir, `${slug}.html`), fullHtml);

    posts.push({
      title,
      slug,
      date,
      link: `words/${slug}.html`, // relative to project root (Vite resolves this)
      rawSummary
    });
  });

  // Sort posts by date descending
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  fs.writeFileSync(path.join(publicWordsDir, 'db.json'), JSON.stringify(posts, null, 2));
  console.log(`[Blog] Built ${posts.length} posts.`);
  return posts.map(p => path.join(wordsDir, `${p.slug}.html`));
}

export default function markdownBlogPlugin() {
  let internalFiles = [];
  return {
    name: 'markdown-blog',
    config(config) {
      internalFiles = build() || [];
      // Note: We can't easily modify input here if it isn't an object yet, 
      // but vite.config.js usually defines it.
      // Best to assume user handles main input, we add ours?
      // Vite 7 might need this in specific way. 
      // Actually, buildStart is too late for config.
      // We need to run build() inside config() or before it?
      // But build() relies on config? No, it just reads files.

      if (!config.build) config.build = {};
      if (!config.build.rollupOptions) config.build.rollupOptions = {};
      if (!config.build.rollupOptions.input) {
        config.build.rollupOptions.input = {}; // Fallback or Error? 
      }

      // If input is text/array, mixing is hard. If object, easy.
      // vite.config.js defined it as object.
      if (typeof config.build.rollupOptions.input === 'object' && !Array.isArray(config.build.rollupOptions.input)) {
        internalFiles.forEach(f => {
          const name = path.basename(f, '.html');
          config.build.rollupOptions.input[`post_${name}`] = resolve(f);
        });
      }
    },
    buildStart() {
      // Re-build to ensure fresh content
      build();
    },
    handleHotUpdate({ file, server }) {
      if (file.includes(contentDir)) {
        build();
        server.ws.send({
          type: 'full-reload',
          path: '*'
        });
      }
    }
  };
}
