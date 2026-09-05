/* ==========================================================================
   EPISODES DATA
   Add a new episode by copying an object below. That's the only file
   you need to touch to publish a new episode on the site.

   youtubeId: the part of the YouTube URL after "v=" or after "youtu.be/"
              (leave "" for a placeholder tile until the video is uploaded)
   ========================================================================== */

const EPISODES = [
  {
    number: 14,
    title: "Are We Ever Truly Healed?",
    guest: "",
    description:
      "Season 3 opens with Ed and Michelle recording live from Savannah, revisiting old wounds and asking whether healing from here is a daily walk rather than a finish line.",
    youtubeId: "GplX6RnOlZI",
    date: "",
  },
  {
    number: 13,
    title: "One Man And His Decades Long Journey To Save Kids In Crisis!",
    guest: "Dr. Phillip J. Mobley",
    description:
      "Part 2: Pops opens up about the realities behind foster care funding, resistance from families, and the origin of North Star Family Resource Center.",
    youtubeId: "AwB36ZgOZ_4",
    date: "",
  },
  {
    number: 12,
    title: "The Man Who Became My Father: How One Mentor Changed My Life",
    guest: "Dr. Phillip J. Mobley",
    description:
      "Part 1: Dr. Phillip \u201cPops\u201d Mobley Sr. on the mentorship that began with a simple \u201chow are you doing?\u201d in 1988 and grew into a lifelong bond.",
    youtubeId: "-ABbXVPorQo",
    date: "",
  },
  {
    number: 11,
    title: "Groomed For God: The Fire Didn't Destroy You, It Preserved You!",
    guest: "Dr. Nicky Collins",
    description:
      "Pastor Nicky Collins opens up about growing up between two families and how that identity wound became the foundation of her resilience.",
    youtubeId: "PpogQ8aqGug",
    date: "",
  },
  {
    number: 10,
    title: "The Cost of Telling the Truth About Your Family!",
    guest: "Dr. Todd Schultz",
    description:
      "Psychologist and psychobiographer Dr. Todd Schultz discusses family secrets, attachment theory, and the price of choosing truth over delusion.",
    youtubeId: "0NxlpYRbZRk",
    date: "",
  },
  {
    number: 9,
    title: "Unhealed Trauma Will Destroy Your Relationship \u2014 Here's the Truth (Stay OR Leave!)",
    guest: "",
    description:
      "Sparked by Taraji P. Henson's comments on dating unhealed partners, Ed and Michelle ask when unhealed trauma means it's time to stay \u2014 or leave.",
    youtubeId: "8DL4MVZtdIU",
    date: "",
  },
  {
    number: 8,
    title: "Chairwoman Tabatha Taylor on the Shreveport Shooting: What the Community Needs Now!",
    guest: "Councilwoman Tabatha Taylor",
    description:
      "Shreveport City Councilwoman Tabatha Taylor speaks on the domestic violence tragedy that claimed eight children in her district, and the road ahead for the community.",
    youtubeId: "7oRdzSek_IQ",
    date: "",
  },
  {
    number: 7,
    title: "The Child Inside You Is Making Adult Decisions \u2014 Here's How to Stop It!",
    guest: "Dr. Yvette Mignon",
    description:
      "Part 2 with Dr. Yvette Mignon digs into the inner child as emotional memory, and how it quietly drives adult reactions and relationships.",
    youtubeId: "0BjSpABC2sE",
    date: "",
  },
  {
    number: 6,
    title: "Did You Know That Childhood Survival Habits Are Secretly Destroying Your Adult Relationships?",
    guest: "Dr. Yvette Mignon",
    description:
      "Physician Dr. Yvette Mignon joins Ed and Michelle to unpack how the survival habits built in childhood shape \u2014 and sabotage \u2014 adult relationships.",
    youtubeId: "dUmjR76RHT0",
    date: "",
  },
  {
    number: 5,
    title: "Therapist EXPOSES Why Society's Trauma Narrative Keeps You Broken!",
    guest: "Antonieta Contreras",
    description:
      "Trauma expert and author Antonieta Contreras breaks down the difference between pain and trauma, and why trauma doesn't have to be permanent.",
    youtubeId: "eGRr3i0Gp20",
    date: "",
  },
  {
    number: 4,
    title: "Navigating Trauma Recovery: Why Healing Begins With YOU!",
    guest: "",
    description:
      "Ed and Michelle nearly walk away from the project entirely before confronting what it costs to be the \u201cfirst partaker\u201d of your own healing.",
    youtubeId: "HgDYZCtLIPI",
    date: "",
  },
  {
    number: 3,
    title: "From 12 Foster Homes to Forgiveness: Breaking Generational Trauma!",
    guest: "",
    description:
      "Ed shares his journey through 12 foster homes across 8 years, and the long road to forgiving the family system that failed him.",
    youtubeId: "_6623i4MwqU",
    date: "",
  },
  {
    number: 2,
    title: "Breaking the Family Code: When Silence Becomes Survival",
    guest: "",
    description:
      "In the series opener, Ed and Michelle expose the family code of silence that lets childhood trauma fester for decades.",
    youtubeId: "sdZML19g3lY",
    date: "",
  },
  {
    number: 1,
    title: "I Was Moved Aside Before The Violence: My Sibling to the Worst",
    guest: "",
    description:
      "Ed and Michelle unpack sibling trauma and differential treatment growing up in the same abusive household.",
    youtubeId: "imQDIm9CqEE",
    date: "",
  },
];

function episodeCardHTML(ep) {
  const media = ep.youtubeId
    ? `<iframe src="https://www.youtube.com/embed/${ep.youtubeId}" title="${ep.title}" allowfullscreen loading="lazy"></iframe>`
    : `<div class="play"><div class="play-circle"></div></div>`;
  const guestLine = ep.guest ? `<span class="meta">Guest: ${ep.guest}</span>` : `<span class="meta">Ed &amp; Michelle</span>`;
  return `
    <article class="card">
      <div class="thumb">
        ${media}
        <span class="ep-num">Episode ${ep.number}</span>
      </div>
      <div class="card-body">
        ${guestLine}
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
