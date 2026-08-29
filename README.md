# Liant Portfolio

Personal portfolio & CV site of Brilliant Fikri (Liant) — full-stack web developer.
Built with React + Vite, bilingual (EN/ID), deployed to GitHub Pages via CI/CD.

> **New to this repo?** Start with [`AGENTS.md`](./AGENTS.md) — the full project map (structure, commands, content workflow, gotchas). Agent workflows have extra rules in `.clinerules/`.

## Tech Stack

- **Framework:** React 18 + Vite 5
- **Styling:** SCSS (CSS variables design tokens) + Tailwind CSS utilities
- **Animation:** Framer Motion + Lottie (lottie-react)
- **Icons:** FontAwesome (tree-shaken SVG, no CDN)
- **Quality:** ESLint + Prettier + Vitest (unit & smoke tests)
- **Deploy:** GitHub Actions → `gh-pages` branch

## Requirements

- Node.js >= 18
- npm >= 9

## Getting Started

```bash
git clone https://github.com/BryaanF/LiantPortfolio.git
cd LiantPortfolio
npm install
npm run dev        # start dev server on http://localhost:3000
```

## Scripts

| Script                   | Description                                  |
| ------------------------ | -------------------------------------------- |
| `npm run dev`            | Start Vite dev server                        |
| `npm run build`          | Production build to `build/`                 |
| `npm run preview`        | Preview the production build                 |
| `npm run lint`           | ESLint check                                 |
| `npm run lint:fix`       | Auto-fix lint issues                         |
| `npm run format`         | Prettier format entire repo                  |
| `npm run format:check`   | Verify formatting                            |
| `npm test`               | Run tests once (Vitest)                      |
| `npm run test:watch`     | Run tests in watch mode                      |
| `npm run deploy`         | Manual deploy to `gh-pages` (CI alternative) |

## Project Structure

```
src/
├── data/                # Content for every section (edit here, no code)
│   ├── profile.js       # Greeting, resume, social links, contact
│   ├── skills.js        # Skills + tech stack
│   ├── education.js     # Education history
│   ├── experience.js    # Work experience
│   ├── projects.js      # Big projects showcase
│   ├── achievements.js  # Certifications
│   ├── pricing.js       # Pricing packages
│   └── site.js          # Splash screen, illustrations, intro video
├── components/          # Reusable UI components (kebab-case folders)
├── containers/          # Page sections (one per section)
├── contexts/            # Theme (dark/light) & language contexts
├── hooks/               # useLocalStorage, useTranslation
├── utils/               # getTranslation helper (bilingual {en, id})
└── test/                # Vitest environment setup
```

## Content & i18n

All text content lives in `src/data/*.js` as bilingual objects:

```js
{
  title: {en: "Hello, I'm Liant", id: "Halo, Saya Liant"}
}
```

`getTranslation(obj, lang)` resolves them; the site remembers both theme & language
in localStorage. Add or edit sections by changing the data objects —
components read from the `src/data` barrel import.

## Deployment

Pushing to `main` triggers GitHub Actions: lint → test → build → deploy
to the `gh-pages` branch (served at https://brilliantfikri.com via CNAME).

Manual deploy (same result): `npm run deploy`.
