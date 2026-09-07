/* ==========================================================================
   SITE SEARCH
   Client-side search across EPISODES (js/episodes-data.js) and POSTS
   (js/blog-data.js). Both arrays must already be loaded on the page
   before this file runs — include this script tag AFTER those two.

   To add search to another page: copy the .search-overlay markup block
   from index.html into that page (right after </nav>), make sure the
   page also loads js/episodes-data.js and js/blog-data.js, then add
   <script src="js/search.js"></script> alongside main.js.
   ========================================================================== */

(function () {
  const overlay = document.getElementById("search-overlay");
  const openBtn = document.getElementById("nav-search-btn");
  const closeBtn = document.getElementById("search-close");
  const input = document.getElementById("search-input");
  const resultsEl = document.getElementById("search-results");

  if (!overlay || !openBtn || !input || !resultsEl) return;

  // Path prefix so links work whether search runs from the homepage
  // or from a page one folder deep (e.g. /blog/post.html).
  const inSubfolder = window.location.pathname.includes("/blog/");
  const prefix = inSubfolder ? "../" : "";

  function openSearch() {
    overlay.classList.add("open");
    document.body.classList.add("search-locked");
    input.value = "";
    renderResults("");
    setTimeout(() => input.focus(), 50);
  }

  function closeSearch() {
    overlay.classList.remove("open");
    document.body.classList.remove("search-locked");
  }

  function episodeResultHTML(ep) {
    return `
      <a class="search-result" href="${prefix}episodes.html#ep-${ep.number}">
        <span class="sr-tag">Episode ${ep.number}${ep.guest ? " &middot; " + ep.guest : ""}</span>
        <h4>${ep.title}</h4>
        <p>${ep.description}</p>
      </a>`;
  }

  function postResultHTML(post) {
    return `
      <a class="search-result" href="${prefix}blog/${post.slug}.html">
        <span class="sr-tag">${post.tag}</span>
        <h4>${post.title}</h4>
        <p>${post.excerpt}</p>
      </a>`;
  }

  function matches(haystack, needle) {
    return haystack.toLowerCase().includes(needle);
  }

  function renderResults(query) {
    const q = query.trim().toLowerCase();

    if (!q) {
      resultsEl.innerHTML = `<p class="search-hint">Start typing to search episodes and blog posts &mdash; by title, guest, or topic.</p>`;
      return;
    }

    const episodeMatches = (typeof EPISODES !== "undefined" ? EPISODES : []).filter((ep) =>
      matches(ep.title, q) ||
      matches(ep.guest || "", q) ||
      matches(ep.description || "", q) ||
      matches(String(ep.number), q)
    );

    const postMatches = (typeof POSTS !== "undefined" ? POSTS : []).filter((post) =>
      matches(post.title, q) ||
      matches(post.excerpt || "", q) ||
      matches(post.tag || "", q)
    );

    if (episodeMatches.length === 0 && postMatches.length === 0) {
      resultsEl.innerHTML = `<p class="search-empty">No episodes or posts match "${query}". Try a guest name, a topic, or an episode number.</p>`;
      return;
    }

    resultsEl.innerHTML =
      episodeMatches.map(episodeResultHTML).join("") +
      postMatches.map(postResultHTML).join("");
  }

  openBtn.addEventListener("click", openSearch);
  closeBtn.addEventListener("click", closeSearch);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeSearch();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("open")) closeSearch();
  });

  input.addEventListener("input", (e) => renderResults(e.target.value));
})();
