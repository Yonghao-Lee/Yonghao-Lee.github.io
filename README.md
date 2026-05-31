# Personal Portfolio

A fast, responsive single-page personal website built with **React + Vite**.
Dark theme, smooth-scrolling navigation, and sections for an intro, about,
skills, projects, and contact links.

🔗 **Live site:** _enable GitHub Pages (see below), then it deploys to_
`https://<your-username>.github.io/<repo>/`

## Tech

- [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/) — no CSS
  frameworks, just hand-written CSS with theme variables
- Zero runtime dependencies beyond React; inline SVG icons
- Automatic deploy to GitHub Pages via GitHub Actions

## Edit your content

**All personal content lives in one file:**
[`src/data.js`](src/data.js). Change your name, tagline, bio, skills,
projects, and links there — nothing else needs editing for content updates.

To restyle, tweak the CSS variables at the top of
[`src/index.css`](src/index.css) (colors, spacing, fonts).

## Develop locally

```bash
npm install
npm run dev      # start the dev server (hot reload) at http://localhost:5173
```

Build and preview the production bundle:

```bash
npm run build    # output to dist/
npm run preview  # serve the built site locally
```

## Deploy to GitHub Pages

The included workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml))
builds and deploys on every push to `main`. To turn it on:

1. Push this repo to GitHub.
2. Go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` (or re-run the workflow). Your site goes live at
   `https://<your-username>.github.io/<repo>/`.

`vite.config.js` uses `base: './'` so the build works at any subpath without
extra configuration.

## License

MIT — see [LICENSE](LICENSE).

---

Built with React + Vite, assisted by [Claude Code](https://claude.com/claude-code).
