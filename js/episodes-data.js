/* ==========================================================================
   EPISODES DATA
   Add a new episode by copying an object below. That's the only file
   you need to touch to publish a new episode on the site.

   youtubeId: the part of the YouTube URL after "v=" (leave "" for a
              placeholder tile until the video is uploaded)
   ========================================================================== */

const EPISODES = [
  {
    number: 12,
    title: "Fear of an Overcomer, Part 2",
    guest: "Dr. Phillip Mobley Sr.",
    description:
      "Continuing the conversation with the founder of North Star Family Resource Center on resilience, faith, and helping families move through crisis.",
    youtubeId: "",
    date: "2026",
  },
  {
    number: 11,
    title: "Fear of an Overcomer, Part 1",
    guest: "Dr. Phillip Mobley Sr.",
    description:
      "A conversation with 'Pops,' founder of North Star Family Resource Center, on the roots of resilience in childhood.",
    youtubeId: "",
    date: "2026",
  },
  {
    number: 9,
    title: "Naming What Happened",
    guest: "Dr. Todd Schultz",
    description:
      "A psychologist's perspective on how childhood experience shapes adult healing, and why naming the past matters.",
    youtubeId: "",
    date: "2026",
  },
];

function episodeCardHTML(ep) {
  const media = ep.youtubeId
    ? `<iframe src="https://www.youtube.com/embed/${ep.youtubeId}" title="${ep.title}" allowfullscreen loading="lazy"></iframe>`
    : `<div class="play"><div class="play-circle"></div></div>`;
  return `
    <article class="card">
      <div class="thumb">
        ${media}
        <span class="ep-num">Episode ${ep.number}</span>
      </div>
      <div class="card-body">
        <span class="meta">Guest: ${ep.guest}</span>
        <h3>${ep.title}</h3>
        <p>${ep.description}</p>
        <a class="card-link" href="episodes.html#ep-${ep.number}">Listen &amp; watch &raquo;</a>
      </div>
    </article>`;
}

function renderEpisodes(targetId, list) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = list.map(episodeCardHTML).join("");
}
