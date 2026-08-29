# Liant Portfolio — Project Guidelines

> Tool-agnostic rules. Readable by any AI coding assistant: **opencode**, **Claude Code**, or a **DeepSeek API** backend (Cline/Roo Code/etc). The main project index lives in [`AGENTS.md`](../AGENTS.md) — check it first for the quickstart map.

## Project overview

- **What:** Data-driven single-page portfolio + service offering (pricing) site for Brilliant Fikri (Liant), full-stack web developer.
- **Stack:** React 18 + Vite 5, SCSS (design tokens) + Tailwind CSS, Framer Motion, Lottie, FontAwesome (tree-shaken SVG).
- **Nature:** Pure static frontend — no backend, no database. Content lives in `src/data/*.js`.
- **Deploy:** Static site on GitHub Pages (`gh-pages` branch) through CI `.github/workflows/ci.yml` on pushes to `main`.
- **Domain:** https://brilliantfikri.com (CNAME file in `public/`).

## Language policy

- **En is the primary language.** Data objects carry both `en` and `id`: `{en: "...", id: "..."}`. New content MUST be complete in both languages (no half-translated sections).
- Comments may be English or Bahasa Indonesia. Chat may be in either.

## Communication style

- Concise, direct, factual. No filler in comments, commit messages, or docs.
- Comments explain the "why", not the "what".
- SCSS block comments for section headers (`/* ... */`); `//` inline in JS/JSX.

## Workflow rules (mandatory)

1. **Before committing anything:** run `npm run lint`, `npm test`, and `npm run build` — all three must pass. Fix failures rather than bypassing them.
2. Never edit or regenerate `build/` — it is git-ignored build output.
3. Never commit secrets. No `.env` files. There is no env configuration in this app today; if you must add one, use a real `.env` (git-ignored) and reference it with the `VITE_` prefix.
4. Static resources must be imported (`import img from "../assets/...")` — `require()` does NOT work in Vite.
5. Only modify files you understand; when unsure, ask.

## Styling conventions

- **Design tokens:** always use CSS custom properties (`var(--bg-body)`, `var(--text-primary)`, `var(--btn-primary-bg)`, `var(--border-light)`, ...) — never hardcode theme-sensitive colors. Tokens live in `src/variables.scss` (light + dark) and mirrored in `tailwind.config.js`.
- **Brand gold `#a1902e`** is the single accent. If `$brand-gold` in `variables.scss` changes, update `tailwind.config.js` too.
- Hybrid system: Tailwind utilities for layout/spacing in JSX; SCSS co-located per component only when needed. Full patterns: `.clinerules/ui-standards.md`.
- Extra SCSS files **must be imported by their component** — orphan `.scss` files are dead weight.

## Data-driven architecture

- All content/config lives in `src/data/` (`profile.js`, `skills.js`, `education.js`, `experience.js`, `projects.js`, `achievements.js`, `pricing.js`, `site.js`), re-exported by `src/data/index.js`.
- Components import from `"../../data"` (barrel) — never re-declare content in components.
- Editing a section = edit its data module only. Do not hardcode content in JSX.
- Each section has a `display` flag; containers must early-return `null` when `false`, and header nav links must follow the same flags.
- To add a section: data module → container in `src/containers/<kebab-name>/` → register in `src/containers/Main.jsx` → optional nav link in `src/components/header/Header.jsx`.

## i18n

- `getTranslation(obj, lang)` (fallback `en`) in `src/utils/translations.js`.
- Prefer the `useTranslation()` hook (`src/hooks/useTranslation.js`) inside components; pass bilingual objects through cards, let them translate themselves (pattern: `EducationCard`, `ExperienceCard`, `AchievementCard`).

## State management

- Context API only (`StyleContext` theme, `LanguageContext` lang) + `useState`.
- `useLocalStorage` for persistence (theme/lang). No Redux/Zustand.

## Libraries & dependencies

- Existing: React, Framer Motion, Lottie, FontAwesome, react-headroom. That covers the UI needs.
- Before adding a dependency ask: "can this be done with what's here?" Static frontend — no backend/ORM/database packages ever.
- `npm audit` must stay clean of critical/high CVEs; prefer maintained packages.

## Reusable component structure

```
src/components/MyComponent/
├── MyComponent.jsx    # default export function, PascalCase file
└── MyComponent.scss   # only if Tailwind is insufficient
```

- Folders/components in **kebab-case folders + PascalCase files**. Containers mirror kebab-case too.
- Accept keys from data — prefer stable keys (`projectName`, `company-role`) over array indexes.

## Accessibility & semantics

- Semantic tags (`section`, `nav`, `button`, h1–h6), meaningful `alt`, keyboard-reachable interactions, `rel="noopener noreferrer"` on external links.
- Anchor nav links must match section `id`s.

## Commit messages

Use conventional prefixes: `feat:`, `fix:`, `refactor:`, `style:`, `docs:`, `chore:`, `content:`. Example: `feat: add download resume button`.

## Docker / CI notes

- Dev server: `npm run dev` (Vite, port 3000).
- CI (`.github/workflows/ci.yml`): lint → test → build on PRs/pushes; deploys `main` to `gh-pages`. Keep the pipeline green.
- Dockerfile: `node:20-alpine`, dev server only (images stay on GH Pages).
