# 4624: Healing From Here — Website

A static site (no build step, no server required). Works on GoDaddy's
own hosting or any host that serves plain files.

## What's in here
- `index.html` — home page (latest episodes, newsletter, latest posts)
- `episodes.html` — full episode grid
- `blog.html` — blog listing
- `about.html` — hosts and mission
- `contact.html` — contact form
- `blog/post-template.html` — duplicate this for each new post
- `css/style.css` — all styling
- `js/episodes-data.js` — **edit this to add episodes**
- `js/blog-data.js` — **edit this to add blog posts**

## 1. Get it onto your GoDaddy domain

You have two solid paths:

**Option A — GoDaddy Web Hosting (simplest if you already have a hosting plan)**
1. In your GoDaddy account, go to **My Products → Web Hosting → Manage**.
2. Open **File Manager** (or connect via FTP/SFTP with the credentials shown there).
3. Upload every file and folder in this package into the `public_html` folder, keeping the folder structure (`css/`, `js/`, `blog/`) intact.
4. Visit your domain — it should load `index.html` automatically.

**Option B — Free static host (GitHub Pages / Netlify) + GoDaddy domain**
1. Push this folder to a GitHub repo, or drag-and-drop it into Netlify.
2. In GoDaddy, go to **My Products → Domains → DNS**.
3. Point your domain at the host: Netlify and GitHub Pages both give you exact A record / CNAME values to paste into GoDaddy's DNS settings.
4. DNS changes can take a few hours to propagate.

If you don't yet have a GoDaddy hosting plan and want the free route, tell me and I'll walk you through GitHub Pages or Netlify step by step.

## 2. Connect Substack for the newsletter
In `index.html`, find the newsletter section and replace
`YOURSUBDOMAIN` in the iframe `src` with your actual Substack address
(e.g. `healingfromhere.substack.com`). That's the only step — no API
key needed.

## 3. Add a new episode
Open `js/episodes-data.js` and copy one of the objects in the
`EPISODES` array. Fill in the title, guest, description, and the
YouTube video ID (the part of the URL after `v=`). It'll appear on
both the home page and the Episodes page automatically.

## 4. Publish a new blog post
1. Duplicate `blog/post-template.html`, rename it (e.g. `blog/episode-13.html`).
2. Fill in the title and four sections, following your standard
   700-word / four-section / Bottom Line format.
3. Add a matching entry to the `POSTS` array in `js/blog-data.js` so
   it shows up on the blog page.

## 5. Contact form
`contact.html` uses a `mailto:` form — it opens the visitor's email
client instead of needing a server. Replace `YOUREMAIL@domain.com`
with your real address. If you'd rather receive submissions directly
without opening an email client, a free service like Formspree can
replace the form's `action` URL with no other changes needed.
