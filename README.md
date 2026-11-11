# Reforming USA

*Building for the next thousand years.* A project of Traditio Media.

Static site built with [Astro](https://astro.build) and Tailwind CSS. No database, no server. It builds to plain files in `dist/`, so it runs on Cloudflare Pages, GitHub Pages, or any static host.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs ./dist
npm run preview  # serve the built site
```

Requires Node 20 or newer. On Windows you can also double-click `View Website.bat`.

## Deploy: GitHub + Cloudflare Pages

1. Push this folder to a GitHub repository (`node_modules`, `dist`, and `.astro` are already git-ignored).
2. In Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**, and pick the repository.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variable: `NODE_VERSION` = `22`
4. Save and deploy. Every push to `main` redeploys automatically; other branches get preview URLs.
5. Add your domain under the project's **Custom domains** tab.

`public/_headers` sets security and caching headers on Cloudflare Pages. The GitHub Action in `.github/workflows/ci.yml` checks that the site builds on every push and pull request.

## Add content

Create a new `.md` file in the matching folder. The filename becomes the URL for essays.

- `src/content/episodes/` — podcast episodes. Set `url` to the Spotify, Apple, or YouTube link.
- `src/content/videos/` — videos. Set `url` to the YouTube or Rumble link.
- `src/content/essays/` — writing. These get their own page at `/writing/<filename>`.

Each file starts with a short block of details (see the sample files). Set `draft: true` to hide an item. Files marked `[Sample]` are placeholders to replace.

## Edit the site

- `src/site.ts` — tagline, statement, Traditio Media link, social links, contact email.
- `src/pages/index.astro` — the home page sections (hero, mission, content, foundations).
- `src/styles/global.css` — colors and fonts.
- `_archive/` — earlier pages and components kept for reference.
