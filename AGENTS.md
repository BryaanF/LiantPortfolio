# AGENTS.md — Liant Portfolio

Project index & onboarding guide for developers and AI agents (opencode, Claude Code, or DeepSeek-powered tools). Start here before making any change.

## TL;DR

- **Project:** A single-page bilingual (EN/ID) portfolio + service pricing site for Brilliant Fikri (Liant), full-stack web developer. Static, no backend.
- **Stack:** React 18 · Vite 5 · Tailwind CSS + SCSS · Framer Motion · Lottie · FontAwesome (tree-shaken).
- **Live:** https://brilliantfikri.com — deployed from `main` via GitHub Actions to the `gh-pages` branch.
- **You edit data, not components.** All content lives in `src/data/*.js`.

## Commands

| Command               | Purpose                                  |
| --------------------- | ---------------------------------------- |
| `npm run dev`         | Dev server on http://localhost:3000      |
| `npm test`            | Run Vitest suite once (12 tests)         |
| `npm run lint`        | ESLint check                             |
| `npm run build`       | Production build → `build/`              |
| `npm run preview`     | Preview the production build             |
| `npm run format`      | Prettier format (repo-wide)              |
| `npm run deploy`      | Manual gh-pages deploy (CI covers this)  |

**Quality gate (mandatory before commit):** `npm run lint && npm test && npm run build` — all green.

## Where things live

```
src/
├── data/                ← CONTENT LAYER (edit here)
│   ├── index.js         ← barrel; all sections import from "@/data" or "../../data"
│   ├── profile.js       ← greeting, resume, social links, contact info
│   ├── skills.js        ← skills + tech stack (icons imported from FA packages)
│   ├── education.js     ← schools
│   ├── experience.js    ← work history
│   ├── projects.js      ← big project cards + media galleries
│   ├── achievements.js  ← certificates
│   ├── pricing.js       ← packages, add-ons, features (WhatsApp checkout data)
│   └── site.js          ← splash screen, lottie flags, intro video
├── containers/          ← PAGE SECTIONS (one folder per section, kebab-case)
│   ├── Main.jsx         ← orchestrator: providers, splash, section order
│   ├── greeting/ skills/ skill-progress/ education/ work-experience/
│   ├── big-projects/ achievements/ pricing/ contact/
│   └── intro-video/ splash-screen/ top-button/
├── components/          ← REUSABLE UI (kebab-case folders, PascalCase files)
│   ├── header/          ← nav (reads display flags from src/data)
│   ├── section-header/  ← every section uses this
│   ├── project-showcase/→ modal gallery (lazy-loaded in big-projects)
│   ├── image-lightbox/  ← single-image overlay (used in pricing + achievements)
│   └── ...              ← toggle-switch, language-toggle, cards, social-media, lottie
├── contexts/            ← StyleContext (isDark/changeTheme), LanguageContext (lang/changeLang)
├── hooks/               ← useLocalStorage, useTranslation
├── utils/translations.js ← getTranslation(obj, lang) — resolves {en, id} recursively
└── test/setup.js        ← jsdom mocks (matchMedia, IntersectionObserver)
```

`public/` holds static assets copied verbatim (favicons, `resume.pdf`, `CNAME`, `manifest.json`, `liant-og.png`). **Never place an `index.html` there** — it would overwrite the built entry.

## Common tasks

**Add/update content (no code):** edit the matching file in `src/data/`. Every user-facing string is `{en: "...", id: "..."}` — both languages required. For projects: add the screenshot import + `{type: "image", url, caption: {en, id}}` to `mediaGallery`.

**Add a new section:** (1) config object in `src/data/` + export from `src/data/index.js`; (2) container in `src/containers/<kebab-name>/` with `if (!config.display) return null`; (3) register in `src/containers/Main.jsx`; (4) optional nav link in `components/header/Header.jsx` gated by the same flag.

**Change theme/language:** never hardcode colors — use CSS vars (`var(--text-primary)`, `var(--btn-primary-bg)`, `var(--bg-card)`, `var(--border-light)`, defined in `src/variables.scss`). Brand gold `#a1902e` is mirrored in `tailwind.config.js` — keep both in sync.

**Add an icon:** FontAwesome packages are tree-shaken — import only what you use. No CDN, no `<i className="fab fa-...">`.

**Add tests:** Vitest + Testing Library (`src/**/*.{test,spec}.{js,jsx}`). Environment mocks in `src/test/setup.js`.

## Tooling notes

- opencode & Claude Code read `AGENTS.md` automatically. Cline/Roo Code (or any DeepSeek API setup) reads `.clinerules/` — both point to the same conventions.
- Rules were written to be **tool-agnostic/markdown-only** — safe to paste into any agent context.

## Gotchas

- `require()` is dead in Vite — `import` everything (3 occurrences were migrated already).
- `vite.config.js` auto-injects `variables.scss` into every SCSS compile — don't `@import` it manually.
- Images are the bundle's biggest weight (some screenshots are >2 MB). Compress new screenshots; use `loading="lazy"` below the fold.
- `build/` is generated + git-ignored — never edit it.
- No `.env` in this repo (all environment-based GitHub token flow was removed). If config is ever needed: `.env` (git-ignored) + `VITE_` prefix.
- Keep `npm audit` free of high/critical issues; no backend/ORM/database packages — static frontend only.
- Docs to follow for deeper UI work: `.clinerules/ui-standards.md` (design system) and `.clinerules/project-guidelines.md` (workflow rules).
