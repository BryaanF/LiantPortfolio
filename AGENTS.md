# AGENTS.md — Liant Portfolio

Project index, onboarding guide & working rules. **Tool-agnostic**: follows the open AGENTS.md convention — read automatically by opencode, Claude Code, Cursor, Codex, Windsurf, and any agent that supports the standard. If your tool doesn't auto-read it, paste its content into your system prompt / rules. No AI-specific folders or tool-bound config files are kept in this repo — stay portable.

## TL;DR

- **Project:** A single-page bilingual (EN/ID) portfolio + service pricing site for Brilliant Fikri (Liant), full-stack web developer. Static, no backend.
- **Stack:** React 18 · Vite 5 · Tailwind CSS + SCSS · Framer Motion · Lottie · FontAwesome (tree-shaken).
- **Live:** https://brilliantfikri.com — deployed from `main` via GitHub Actions to the `gh-pages` branch.
- **You edit data, not components.** All content lives in `src/data/*.js`.

## Commands

| Command            | Purpose                                        |
| ------------------ | ---------------------------------------------- |
| `npm run dev`      | Dev server on http://localhost:3000            |
| `npm test`         | Run Vitest suite once (12 tests)               |
| `npm run lint`     | ESLint check                                   |
| `npm run build`    | Production build → `build/`                    |
| `npm run preview`  | Preview the production build                   |
| `npm run format`   | Prettier format (repo-wide)                    |
| `npm run deploy`   | Manual gh-pages deploy (CI covers this)        |

**Quality gate (mandatory before every commit):** `npm run lint && npm test && npm run build` — all three must pass. Fix failures, never bypass them.

## Where things live

```
src/
├── data/                ← CONTENT LAYER (edit here)
│   ├── index.js         ← barrel; components import from "../../data"
│   ├── profile.js       ← greeting, resume, social links, contact info
│   ├── skills.js        ← skills + tech stack (FontAwesome icons)
│   ├── education.js     ← schools
│   ├── experience.js    ← work history
│   ├── projects.js      ← big project cards + media galleries
│   ├── achievements.js  ← certificates
│   ├── pricing.js       ← packages, add-ons, features (WhatsApp checkout data)
│   └── site.js          ← splash screen, illustration flags, intro video
├── containers/          ← PAGE SECTIONS (one folder per section, kebab-case)
│   ├── Main.jsx         ← orchestrator: providers, splash, section order
│   ├── greeting/ skills/ skill-progress/ education/ work-experience/
│   ├── big-projects/ achievements/ pricing/ contact/
│   └── intro-video/ splash-screen/ top-button/
├── components/          ← REUSABLE UI (kebab-case folders, PascalCase files)
│   ├── header/          ← nav (reads display flags from src/data)
│   ├── section-header/  ← every section uses this
│   ├── project-showcase/← modal gallery (lazy-loaded in big-projects)
│   ├── image-lightbox/  ← single-image overlay (pricing + achievements)
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

**Add an icon:** import only what you need from `@fortawesome/free-brands-svg-icons` / `@fortawesome/free-solid-svg-icons` — packages are tree-shaken. No CDN, no `<i className="fab fa-...">`.

**Add tests:** Vitest + Testing Library (`src/**/*.{test,spec}.{js,jsx}`). Environment mocks in `src/test/setup.js`.

## Architecture rules

- **Data-driven:** all content/config lives in `src/data/`; components never re-declare content in JSX.
- **Section gating:** every section has a `display` flag; container early-returns `null`; header nav links follow the same flags.
- **Organization:** folders/components kebab-case folders + PascalCase files; co-locate `.scss` only when Tailwind utilities are insufficient; orphan `.scss` files are dead weight — delete them.

## i18n & language policy

- **En is primary.** New content MUST be complete in both `en` and `id` (no half-translated sections).
- Use `useTranslation()` hook (`src/hooks/useTranslation.js`) inside components: `const t = useTranslation(); t(configField)`.
- Cards receiving raw objects translate internally with `getTranslation(...)` (recursive, falls back to `en`). Never render raw `{en, id}` objects in JSX.
- Comments = English or Bahasa Indonesia; chat may be either. Commit messages in English.

## Design system (must-follow)

- **Theme tokens — never hardcode theme-sensitive colors** (defined in `src/variables.scss`):
  `var(--bg-body)`, `var(--bg-card)`, `var(--bg-header)`, `var(--text-primary)`, `var(--text-secondary)`, `var(--btn-primary-bg)`, `var(--btn-primary-hover)`, `var(--border-light)`.
  Tailwind arbitrary form: `bg-[var(--bg-card)]`, `text-[var(--text-primary)]`, etc. SCSS `$`-vars (`$brand-gold`, brand colors) are for non-theme values only.
- **Brand gold `#a1902e`** is the single accent; `$brand-gold` in `variables.scss` must stay in sync with `tailwind.config.js`.
- **Sections:** use `components/section-header/SectionHeader` with `{title, subtitle, emoji, align}`; anchor `id` must match header nav.
- **Cards:** `rounded-xl border border-[var(--border-light)] bg-[var(--bg-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`; hover accent `hover:border-[var(--btn-primary-bg)]/50`.
- **Buttons:** primary = gold fill `var(--btn-primary-bg)` + white text + `hover:brightness-110 active:scale-95`; secondary = outline; danger = soft red `rgba(239,68,68,0.08)` bg.
- **Animations:** scroll-triggered with Framer Motion `whileInView` + `viewport={{once: true}}` (never `animate` on mount for reveals); stagger via variants; `AnimatePresence` for modals/mount-unmount.
- **Icons:** inline SVG (preferred, `currentColor` stroke) or tree-shaken FontAwesome. Shared modal patterns: `image-lightbox` (single image), `project-showcase` (gallery, lazy-loaded).

## Behavioral constraints

- **Static site, no backend:** no `<form>` submissions, no APIs, no server calls. All interactions are direct links — WhatsApp `https://wa.me/6281331487753?text=<encoded>` and `mailto:briliantfikri@gmail.com`. Pricing checkout opens `window.open(...)`.
- **State:** Context API only (`StyleContext`, `LanguageContext`) + `useState`; `useLocalStorage` for persistence. No Redux/Zustand.
- **Dependencies:** before adding one, ask "can this be done with what's here?" Never add backend/ORM/database packages. Keep `npm audit` free of high/critical.
- **Security:** never commit secrets. No `.env` in this repo today; if config is needed use `.env` (git-ignored) + `VITE_` prefix.
- **Accessibility:** semantic tags (`section`, `nav`, `button`), meaningful `alt`, keyboard-reachable interactions, `rel="noopener noreferrer"` on external links.

## Commit conventions

Conventional prefixes: `feat:` `fix:` `refactor:` `style:` `docs:` `chore:` `content:`. Example: `feat: add resume download button`. Body lists the "why" only when non-obvious.

## Gotchas

- `require()` is dead in Vite — `import` everything (fully migrated already).
- `vite.config.js` auto-injects `variables.scss` into every SCSS compile — don't `@import` it manually.
- Images are the bundle's biggest weight (some screenshots are >2 MB). Compress new screenshots (WebP or ≤ ~400 KB) and add `loading="lazy"` below the fold.
- `build/` is generated + git-ignored — never edit it.
- Node 18+ required (Vite 5). Dockerfile mirrors dev setup only.
- CI (`.github/workflows/ci.yml`): lint + test + build on PRs; deploys `main` → `gh-pages` branch. Keep the pipeline green; local commands are the same as CI.
