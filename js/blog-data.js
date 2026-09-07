/* ==========================================================================
   BLOG DATA — "A Journal of Healing"
   POSTS[0] is always treated as the FEATURED/most recent post on the
   Blog page. Add a new episode's post at the TOP of this array so it
   automatically becomes featured, and the previous top post moves into
   the archive grid below it.

   Add a new post by copying an object below, then create the matching
   HTML file in /blog/ (duplicate blog/post-template.html as a starting
   point — it already carries the site nav, footer, and post styling).
   ========================================================================== */

const POSTS = [
  {
    slug: "episode-14-are-we-ever-truly-healed",
    title: "Are We Ever Truly Healed?",
    excerpt:
      "Season 3 opens in Savannah with a question neither host can fully answer, and a story Ed had never told before.",
    date: "",
    tag: "Episode 14",
  },
  {
    slug: "episode-13-mobley-part-2",
    title: "The Check That Changes Everything",
    excerpt:
      "Dr. Phillip Mobley Sr. on the $450 check, the insecurity nobody talks about, and why removing a child doesn't remove the problem.",
    date: "",
    tag: "Episode 13",
  },
  {
    slug: "episode-12-mobley-part-1",
    title: "The Man Who Became My Father",
    excerpt:
      "A single repeated question in 1988 became the crack in a wall — and, decades later, a family Ed never expected to find.",
    date: "",
    tag: "Episode 12",
  },
  {
    slug: "episode-11-groomed-for-god",
    title: "Groomed For God",
    excerpt:
      "Pastor Nicky Collins on finding her deepest wound inside a church, and the fire that later became someone else's lifeline.",
    date: "",
    tag: "Episode 11",
  },
  {
    slug: "episode-10-todd-schultz",
    title: "The Cost of Telling the Truth",
    excerpt:
      "Psychologist Dr. Todd Schultz on family myths, attachment theory, and why staying silent is its own slow motion suicide.",
    date: "",
    tag: "Episode 10",
  },
  {
    slug: "episode-9-stay-or-leave",
    title: "Unhealed Trauma Will Destroy Your Relationship",
    excerpt:
      "A line from Taraji P. Henson sparks a conversation about becoming your own underwriter before you say 'I do.'",
    date: "",
    tag: "Episode 9",
  },
  {
    slug: "episode-8-shreveport",
    title: "The Noise We Make When We Finally Stop Being Quiet",
    excerpt:
      "On the Shreveport tragedy, the silence that protects abusers, and what a real community response actually looks like.",
    date: "",
    tag: "Episode 8",
  },
  {
    slug: "episode-7-inner-child-part2",
    title: "Your Inner Child Is Making Adult Decisions",
    excerpt:
      "Why emotional memory outlasts factual memory, and how forgiveness works without requiring you to forget.",
    date: "",
    tag: "Episode 7",
  },
  {
    slug: "episode-6-inner-child-part1",
    title: "The Suitcase You've Been Carrying Since Childhood",
    excerpt:
      "Why midlife is often the first time a person has the resources to actually process what happened to them as a kid.",
    date: "",
    tag: "Episode 6",
  },
  {
    slug: "episode-5-pain-vs-trauma",
    title: "Pain Is Inevitable. Trauma Doesn't Have to Be.",
    excerpt:
      "The difference between a wound that heals and a wound that gets reopened — and why the body is built for the former.",
    date: "",
    tag: "Episode 5",
  },
  {
    slug: "episode-4-first-partakers",
    title: "Why Healing Begins With You",
    excerpt:
      "On going first, the trauma cake, and the guardrails that hold a person up when the foundation underneath is missing.",
    date: "",
    tag: "Episode 4",
  },
  {
    slug: "episode-3-twelve-foster-homes",
    title: "Twelve Homes, One Address That Never Left",
    excerpt:
      "On learning to fake it just to get through the day, and why forgiveness can't wait for an apology that may never come.",
    date: "",
    tag: "Episode 3",
  },
  {
    slug: "episode-2-family-code",
    title: "Breaking the Family Code",
    excerpt:
      "Why 'what happens in this house stays in this house' protects harm instead of people — and what it costs to break it.",
    date: "",
    tag: "Episode 2",
  },
  {
    slug: "episode-1-moved-aside",
    title: "The Child Who Was Moved Aside",
    excerpt:
      "Two siblings, one household, two entirely different wounds — and what it takes to finally compare notes.",
    date: "",
    tag: "Episode 1",
  },
];

function postCardHTML(post) {
  return `
    <article class="card">
      <div class="card-body">
        <span class="meta">${post.tag}</span>
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

function featuredPostHTML(post, pathPrefix) {
  pathPrefix = pathPrefix || "";
  return `
    <span class="eyebrow">Most Recent &middot; ${post.tag}</span>
    <h2>${post.title}</h2>
    <p>${post.excerpt}</p>
    <a class="btn btn-primary" href="${pathPrefix}blog/${post.slug}.html">Read the Post</a>`;
}

function renderFeatured(targetId, post, pathPrefix) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = featuredPostHTML(post, pathPrefix);
}
