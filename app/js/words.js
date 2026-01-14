document.addEventListener('DOMContentLoaded', async () => {
  const listContainer = document.getElementById('posts-list');
  const searchInput = document.getElementById('search-input');
  const sortBtn = document.getElementById('sort-btn');

  let posts = [];
  let sortDesc = true;

  // Fetch posts
  try {
    const res = await fetch('/words/db.json');
    if (!res.ok) throw new Error('Failed to load posts');
    posts = await res.json();
    renderPosts(posts);
  } catch (err) {
    console.error(err);
    listContainer.innerHTML = '<p>Error loading posts.</p>';
  }

  // Render function
  function renderPosts(data) {
    listContainer.innerHTML = '';

    if (data.length === 0) {
      listContainer.innerHTML = '<p>No posts found.</p>';
      return;
    }

    data.forEach(post => {
      const article = document.createElement('article');
      article.className = 'post-preview block';

      // Format date if it exists
      const dateStr = post.date ? new Date(post.date).toLocaleDateString() : '';

      article.innerHTML = `
                <h2><a href="/${post.link}">${post.title}</a></h2>
                ${dateStr ? `<time>${dateStr}</time>` : ''}
                <p>${post.rawSummary.replace(/<[^>]*>?/gm, '').slice(0, 150)}...</p>
                <a href="/${post.link}" class="read-more">Read more &rarr;</a>
            `;
      listContainer.appendChild(article);
    });
  }

  // Filter
  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = posts.filter(p =>
      p.title.toLowerCase().includes(term) ||
      (p.date && p.date.includes(term))
    );
    renderPosts(filtered);
  });

  // Sort
  sortBtn.addEventListener('click', () => {
    sortDesc = !sortDesc;
    sortBtn.textContent = sortDesc ? 'Sort: Newest' : 'Sort: Oldest';

    const sorted = [...posts].sort((a, b) => {
      const da = new Date(a.date || 0);
      const db = new Date(b.date || 0);
      return sortDesc ? db - da : da - db;
    });

    renderPosts(sorted);
  });
});
