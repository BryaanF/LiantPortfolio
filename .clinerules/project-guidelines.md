# Liant Portfolio - Project Guidelines

> **Compatibility Note:** This guideline file is designed to be tool-agnostic and readable by any AI coding assistant (Cline, Copilot, future tools). It supplements the existing [.github/copilot-instructions.md](../.github/copilot-instructions.md) with additional conventions and preferences not covered there.

## Brief overview

- **Project:** A data-driven, single-page portfolio website for Brilliant Fikri (Liant), built with React 18 + Vite + Tailwind CSS + SCSS.
- **Nature:** Pure frontend — no backend, no database. All content lives in `src/portfolio.jsx` as a single configuration file.
- **Deployment:** Static site deployed to GitHub Pages (`gh-pages` branch) via GitHub Actions from `master` branch.
- **Domain:** [brilliantfikri.com](https://brilliantfikri.com)

## Site language policy

- **Primary language for all user-facing content is English.** The portfolio targets an international/professional audience.
- **Pending revision:** `pricingSection` in `src/portfolio.jsx` is currently in Bahasa Indonesia and must be translated to English. This includes all `title`, `description`, `desc`, `longDesc`, `features`, `notIncluded`, `workflow` fields, and the WhatsApp checkout message template in `src/containers/pricing/Pricing.jsx` (`handleCheckout` function).
- Comments in code may use either English or Bahasa Indonesia — both are acceptable.
- Communication with the developer (AI or human) may use Bahasa Indonesia.

## Communication style

- **Concise and direct.** Avoid filler words and conversational fluff in code comments, commit messages, and documentation.
- Code comments should explain the "why," not the "what" — the code itself should be self-documenting for what it does.
- **SCSS comments** use `/* */` block style for section headers (see existing pattern in `variables.scss`).
- **JSX comments:** `//` for inline, `/* */` for multi-line explanations.

## Styling conventions

- **Tailwind CSS is the primary styling approach** for all new components and sections. Use utility classes directly in JSX (reference `src/containers/pricing/Pricing.jsx` as the canonical example).
- **SCSS is reserved for reusable custom components** that need encapsulated, complex styles not easily expressed with Tailwind utilities. When creating a new reusable component in `src/components/`, co-locate a `.scss` file in the same folder.
- **Design tokens:** Always reference CSS custom properties for theme-switchable values:
  - `var(--bg-body)`, `var(--bg-card)`, `var(--text-primary)`, `var(--text-secondary)`, `var(--btn-primary-bg)`, `var(--border-light)`
  - These are defined in `src/variables.scss` for both `.light-mode` and `.dark-mode`.
  - For Tailwind, use arbitrary value syntax when needed: `bg-[var(--bg-card)]`, `text-[var(--text-primary)]`, `border-[var(--border-light)]`.
- **SCSS variables** (prefixed with `$`) are for non-theme values only (e.g., `$brand-gold`, `$buttonHover`, static colors). Do not use SCSS variables for colors that should respond to dark/light mode.
- **Never hardcode colors** in component JSX or SCSS that should respect the theme. Always go through CSS custom properties.
- **Brand color:** Gold `#a1902e` (`$brand-gold`). This is the primary accent across buttons, links, and highlights.
- **IMPORTANT:** The brand-gold in `tailwind.config.js` must match `$brand-gold` in `variables.scss`. Currently both use `#a1902e`. If one changes, update the other.

## Input and form handling

- **This project has no backend.** There is no server to POST form data to.
- All "contact" or "checkout" interactions must use **direct action links:**
  - **WhatsApp:** `https://wa.me/6281331487753?text=...` with a pre-formatted, URL-encoded message.
  - **Email:** `mailto:briliantfikri@gmail.com` with optional `?subject=...&body=...` parameters.
- Do NOT create `<form>` elements with submit handlers — there is nothing to handle submissions.
- Do NOT add any form validation libraries or backend integration code.

## State management

- **Context API** is the established pattern for global state (see `src/contexts/StyleContext.js` for theme).
- **Local state** (`useState` / `useReducer`) is sufficient for component-specific state.
- **Custom hooks** in `src/hooks/` for reusable state logic (e.g., `useLocalStorage` for persistence).
- Do NOT introduce Redux, Zustand, or other external state management libraries — they are unnecessary for this project's complexity level.

## Commit message conventions

Use structured, prefixed commit messages. The format is: `<type>: <brief description>`

| Prefix      | Use when                                                         |
| ----------- | ---------------------------------------------------------------- |
| `feat:`     | Adding a new section, component, or feature                      |
| `fix:`      | Fixing a bug, broken style, or incorrect behavior                |
| `refactor:` | Restructuring code without changing functionality                |
| `style:`    | CSS/SCSS/Tailwind adjustments only (no logic changes)            |
| `docs:`     | Updating README, comments, or documentation files                |
| `chore:`    | Dependency updates, config changes, build tweaks                 |
| `content:`  | Updating portfolio data in `portfolio.jsx` (text, images, links) |

Examples:

- `feat: add pricing calculator with WhatsApp checkout`
- `fix: dark mode card background not applying on mobile`
- `content: translate pricing section to English`
- `chore: update framer-motion to v12`

## Library and dependency policy

- **No hard restrictions** on library usage, but exercise caution:
  - Avoid packages with known security vulnerabilities or a history of unmaintained releases with CVEs.
  - Prefer well-maintained, widely-adopted libraries with active GitHub repositories and recent releases.
  - Before adding a new dependency, ask: "Can this be done with what we already have?" The project already includes React 18, Framer Motion, Lottie React, FontAwesome, and react-icons — which cover most UI needs.
- **Do not add backend frameworks, ORMs, or database drivers** — this is a static frontend only.

## Section visibility control

- Every major section in `src/portfolio.jsx` has a `display: true/false` flag.
- Containers in `src/containers/` must check this flag and return `null` when `display` is false.
- The header navigation in `src/components/header/Header.jsx` should also check these flags to show/hide nav links accordingly.
- When adding a new section, follow the pattern: config object → container with display check → registration in `Main.jsx` → optional nav link.

## Build and deployment notes

- **Dev server:** `npm run start` → Vite on port 3000, auto-opens browser.
- **Production build:** `npm run build` → outputs to `build/` directory.
- **Deployment:** GitHub Actions workflow (`.github/workflows/deploy.yml`) triggers on push to `master`, builds, and deploys to `gh-pages` branch. Also runs weekly on Monday 12:00 UTC.
- **CI variable:** `CI=false` is set in the workflow to prevent treating warnings as errors during build.
- **Node version:** 18.x (locked in CI workflow).

## Reusable component structure

When creating a new reusable component in `src/components/`:

```
src/components/MyComponent/
├── MyComponent.jsx     # Component logic
└── MyComponent.scss    # Styles (only if Tailwind is insufficient)
```

- Component file uses PascalCase matching the folder name.
- Accept `className` prop to allow parent styling overrides.
- Use `export default function ComponentName(...)` pattern (consistent with existing codebase).

## Accessibility baseline

- Use semantic HTML elements (`<section>`, `<nav>`, `<button>`, `<h1>`-`<h6>`).
- Ensure header navigation links correspond to section `id` attributes for anchor-based scrolling.
- Images should include meaningful `alt` text.
- Interactive elements must be keyboard-accessible (buttons, not divs with onClick).

## Internationalization note

- The website currently supports a single language (English, with some Indonesian pending revision).
- No i18n framework is in use. If multi-language support is added in the future, use the `feat_lang` add-on structure already defined in `pricingSection.featuresList` as a starting point (ID/EN, 2 languages).
