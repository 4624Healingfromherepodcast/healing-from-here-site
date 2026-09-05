/* ==========================================================================
   BLOG DATA
   Add a new post by copying an object below, then create the matching
   HTML file in /blog/ (duplicate blog/post-template.html as a starting
   point — it already carries the site nav, footer, and post styling).
   ========================================================================== */

const POSTS = [
  {
    slug: "post-template",
    title: "What 'Healing From Here' Means (Starter Post)",
    excerpt:
      "A template post — swap this copy for your 700-word episode recap: four sections, no filler, closed out with a Bottom Line.",
    date: "Replace with publish date",
    tag: "Template",
  },
];

function postCardHTML(post) {
  return `
    <article class="card">
      <div class="card-body">
        <span class="meta">${post.tag} &middot; ${post.date}</span>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <a class="card-link" href="blog/${post.slug}.html">Read the post &raquo;</a>
      </div>
    </article>`;
}

function renderPosts(targetId, list) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = list.map(postCardHTML).join("");
}
