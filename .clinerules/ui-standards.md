# Liant Portfolio — UI Standards & Component Patterns

> **Purpose:** Ensures all UI code (new and existing) follows consistent visual patterns, animation conventions, and component APIs. Read this before creating or modifying any UI code.

---

## 1. COLOR SYSTEM

### 1.1 Brand Gold (Primary Accent)

| Token                     | Hex                     | Usage                                                                    |
| ------------------------- | ----------------------- | ------------------------------------------------------------------------ |
| `$brand-gold` / `#a1902e` | `#a1902e`               | Buttons, links, highlights, active states, badges, decorative underlines |
| `$brand-gold-hover`       | Computed (10% lighter)  | Button hover states                                                      |
| `var(--btn-primary-bg)`   | `#a1902e` (both themes) | CSS custom property for Tailwind arbitrary values                        |

**Critical:** The gold in `tailwind.config.js` must always match `variables.scss` -> `$brand-gold`. Currently both use `#a1902e`.

### 1.2 Theme Tokens (CSS Custom Properties)

Always use these in JSX via Tailwind arbitrary values — never hardcode colors:

```css
/* LIGHT MODE (.light-mode) — Neutral cool grey, no warm/pink tint */
--bg-body: #eaeaea;
--bg-card: #f5f5f5;
--bg-header: #f5f5f5;
--text-primary: #1a1a2e;
--text-secondary: #3a3a4e;
--border-light: rgba(0, 0, 0, 0.1);
--shadow-card: 0 4px 20px rgba(0, 0, 0, 0.05), 0 1px 6px rgba(0, 0, 0, 0.07);

/* DARK MODE (.dark-mode, [data-theme='dark']) */
--bg-body: #0a0a0a;
--bg-card: #1f1f1f;
--bg-header: #161b22;
--text-primary: #ffffff;
--text-secondary: #b0b0b0;
--border-light: rgba(255, 255, 255, 0.1);
--shadow-card: 0 4px 6px rgba(255, 255, 255, 0.05);
```

### 1.3 Tailwind Arbitrary Value Pattern

```jsx
bg-[var(--bg-body)] // Section backgrounds
bg-[var(--bg-card)] // Card backgrounds
text-[var(--text-primary)] // Main heading text
text-[var(--text-secondary)] // Subtitle, metadata, description text
border-[var(--border-light)] // Subtle borders and dividers
text-[var(--btn-primary-bg)] // Brand accent text
bg-[var(--btn-primary-bg)] // Primary button fill
hover:text-[var(--btn-primary-bg)] // Link/button hover accent
hover:border-[var(--btn-primary-bg)] // Card hover border accent
```

---

## 2. SECTION LAYOUT PATTERN

Every section container (`src/containers/<kebab-name>/`) follows this structure:

```jsx
import SectionHeader from "../../components/section-header/SectionHeader";
import {mySectionConfig} from "../../data";
import {useTranslation} from "../../hooks/useTranslation";

export default function MySection() {
  const t = useTranslation();

  if (!mySectionConfig.display) return null;

  return (
    <section id="my-section" className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader title={t(mySectionConfig.title)} subtitle={t(mySectionConfig.subtitle)} emoji="🧩" />
        {/* content grid */}
      </div>
    </section>
  );
}
```

### Section IDs (used by header nav anchors)

| id              | Container (src/containers/)   |
| --------------- | ----------------------------- |
| `#greeting`     | `greeting/Greeting.jsx`       |
| `#intro-video`  | `intro-video/IntroVideo.jsx`  |
| `#skills`       | `skills/Skills.jsx`           |
| `#education`    | `education/Education.jsx`     |
| `#experience`   | `work-experience/WorkExperience.jsx` |
| `#projects`     | `big-projects/BigProject.jsx` |
| `#achievements` | `achievements/Achievement.jsx`|
| `#pricing`      | `pricing/Pricing.jsx`         |
| `#contact`      | `contact/Contact.jsx`         |

---

## 3. ANIMATION CONVENTIONS

### 3.1 Scroll-Triggered Reveal (Framer Motion)

Use `whileInView` for all scroll-triggered animations (not `animate`, which runs on mount):

```jsx
// Single element
<motion.div
  initial={{opacity: 0, y: 20}}
  whileInView={{opacity: 1, y: 0}}
  viewport={{once: true, margin: "-100px"}}
  transition={{duration: 0.6}}
>
  ...
</motion.div>;

// Staggered children
const containerVariants = {
  hidden: {opacity: 0},
  visible: {opacity: 1, transition: {staggerChildren: 0.15, delayChildren: 0.2}}
};
const itemVariants = {
  hidden: {opacity: 0, y: 12},
  visible: {opacity: 1, y: 0, transition: {duration: 0.4}}
};

<motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
  {items.map(item => (
    <motion.div key={item.id} variants={itemVariants}>...</motion.div>
  ))}
</motion.div>;
```

### 3.2 Hover Animations

```jsx
<motion.div whileHover={{y: -5}}>...</motion.div>;
// or CSS: className="transition-all duration-300 hover:-translate-y-1"
```

### 3.3 Floating/Looping Animation (decorative)

```jsx
<motion.span animate={{y: [0, -6, 0]}} transition={{duration: 3, repeat: Infinity, ease: "easeInOut"}}>
  🚀
</motion.span>;
```

---

## 4. TYPOGRAPHY CONVENTIONS

| Element          | Tailwind classes                                                                             | Style                           |
| ---------------- | -------------------------------------------------------------------------------------------- | ------------------------------- |
| Section heading  | `text-3xl md:text-5xl font-black text-[var(--text-primary)]`                                 | Black weight, responsive sizing |
| Section subtitle | `text-sm md:text-base uppercase tracking-[0.2em] font-semibold text-[var(--text-secondary)]` | Uppercase, letter-spaced        |
| Card title       | `text-lg md:text-xl font-bold text-[var(--text-primary)]`                                    | Bold weight                     |
| Card description | `text-sm leading-relaxed text-[var(--text-secondary)]`                                       | Normal weight                   |
| Pill/badge       | `text-[9px] font-black px-2 py-1 rounded-full`                                               | Tiny uppercase                  |
| Duration/tags    | `text-[10px] font-black tracking-[0.2em] uppercase`                                          | Small uppercase                 |

---

## 5. SECTION HEADER PATTERN (STANDARDIZED)

All sections MUST use the shared `SectionHeader` component at `src/components/section-header/SectionHeader.jsx`.

```jsx
import SectionHeader from "../../components/section-header/SectionHeader";

<SectionHeader
  title="Section Title" // Required (can pass t(obj) result)
  subtitle="Optional subtitle" // Optional
  emoji="🚀" // Optional emoji above title
  align="center" // "center" (default) | "left"
/>;
```

| Prop       | Type                 | Default    | Description                               |
| ---------- | -------------------- | ---------- | ----------------------------------------- |
| `title`    | string               | (required) | Section heading text                      |
| `subtitle` | string               | `""`       | Subtitle shown below gold accent strip    |
| `emoji`    | string               | `""`       | Optional emoji/icon displayed above title |
| `align`    | `"center"`\|`"left"` | `"center"` | Text alignment                            |

Rendered output: emoji `text-4xl md:text-5xl`, title `text-3xl md:text-5xl font-bold`, animated gold underline strip (`width 0 → 80px`), optional uppercase subtitle.

---

## 6. CARD STANDARDS

### 6.1 Card Container

```jsx
<div className="rounded-xl border border-[var(--border-light)] bg-[var(--bg-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
```

### 6.2 Card Hover Border Accent

```jsx
// Add group class to parent and use:
className = "group border border-[var(--border-light)] hover:border-[var(--btn-primary-bg)]/50 transition-colors";
```

### 6.3 Bullet/List Items

```jsx
// Gold dot bullet
<li className="flex gap-2">
  <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--btn-primary-bg)]" />
  <span className="text-[var(--text-secondary)]">{text}</span>
</li>;

// Gold triangle bullet
<li className="flex items-start gap-3">
  <span className="text-[var(--btn-primary-bg)] mt-1.5 shrink-0 text-[8px]">▶</span>
  <span className="text-[var(--text-secondary)]">{text}</span>
</li>;
```

### 6.4 Spec/Info Grid (2-column metadata)

```jsx
<div
  className="grid grid-cols-2 gap-2 text-[10px] p-3 rounded-lg border border-[var(--border-light)]"
  style={{backgroundColor: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)"}}
>
  {/* Items */}
</div>;
```

---

## 7. BUTTON PATTERNS

### 7.1 Primary Button (Gold fill)

```jsx
<button
  className="px-6 py-3 rounded-lg text-xs font-black uppercase tracking-widest transition-all hover:brightness-110 active:scale-95"
  style={{backgroundColor: "var(--btn-primary-bg)", color: "#fff"}}
>
  {text}
</button>;
```

### 7.2 Secondary/Outline Button

```jsx
<button
  className="py-3 rounded-lg border border-[var(--border-light)] text-xs font-bold transition-colors"
  style={{color: "var(--text-primary)", backgroundColor: "transparent"}}
>
  {text}
</button>;
```

### 7.3 Danger/Remove Button

```jsx
<button
  className="py-3 rounded-lg text-xs font-bold uppercase tracking-widest"
  style={{
    color: "#f87171",
    backgroundColor: "rgba(239,68,68,0.08)",
    border: "1px solid rgba(239,68,68,0.25)"
  }}
>
  {text}
</button>;
```

### 7.4 Legacy `.main-button` (Button.jsx)

- Defined in `src/components/button/Button.scss`, used by the shared `<Button>` in Greeting.
- For NEW code prefer the primary pattern above.

---

## 8. ICON PATTERN

Two sanctioned approaches:

### 8.1 Inline SVG components (preferred — portable, no dependency)

```jsx
const MyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);
```

Color inherits from `currentColor`. Existing examples: `Pricing.jsx` icons object, `ProjectShowcase.jsx` icons.

### 8.2 FontAwesome (tree-shaken SVG — for brand/skill icons)

```jsx
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faDatabase} from "@fortawesome/free-solid-svg-icons";

<FontAwesomeIcon icon={faGithub} size="lg" />;
```

- No CDN, no `<i className="fab fa-...">` — those classes do not exist in this project anymore.
- Brand colors: SCSS variables in `variables.scss` (`$linkedin`, `$github`, ...).

> ⚠ `react-icons` was REMOVED from dependencies. Do not reintroduce icons via CDN or `<link>` stylesheets.

---

## 9. CONTACT / CHECKOUT (WhatsApp/Email Actions)

**Do NOT use `<form>` elements** — static site, no backend. Use direct links:

```jsx
// WhatsApp (URL-encoded message)
<a href={`https://wa.me/6281331487753?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer">
  Contact via WhatsApp
</a>;

// Email
<a href={`mailto:briliantfikri@gmail.com?subject=${subject}&body=${body}`}>Send Email</a>;
```

Pricing checkout builds the message in `handleCheckout` (see `src/containers/pricing/Pricing.jsx`) and calls `window.open(...)`.

---

## 10. IMAGE HANDLING (Vite)

- **Always import images statically:**
  ```jsx
  import myImage from "../../assets/images/myImage.png";
  <img src={myImage} alt="..." loading="lazy" />;
  ```
- **Never use `require()`** (CRA/Webpack pattern — crashes in Vite).
- External URLs: `src={url}` directly.
- `loading="lazy"` on all below-the-fold images. Product screenshot imports live in the data files (`src/data/*.js`).
- **Keep images lean:** compress new screenshots (WebP or ≤ ~400 KB PNG). The bundle is the heaviest part of this site.

---

## 11. LANGUAGE / I18N PATTERN

User-facing text uses bilingual objects, both languages REQUIRED:

1. In `src/data/*`: define as `{en: "...", id: "..."}`.
2. In component: `const t = useTranslation()` from `src/hooks/useTranslation.js`, then `t(configField)`.
3. Cards that receive raw objects translate internally with `getTranslation(...)`.

Rules:

- `getTranslation` resolves `{en, id}` per language, falls back to `en`; handles nested objects and arrays recursively; plain strings/numbers pass through.
- Never render raw `{en, id}` objects in JSX — always call `t()` / `getTranslation()`.

---

## 12. MODAL / OVERLAY PATTERNS

### 12.1 ImageLightbox (`src/components/image-lightbox/ImageLightbox.jsx`)

```jsx
{lightbox && (
  <ImageLightbox src={url} alt={text} onClose={() => setLightbox(null)} />
)}
```

Fixed overlay, dark backdrop, centered image; close on backdrop click or ✕ button.

### 12.2 ProjectShowcase (`src/components/project-showcase/ProjectShowcase.jsx`)

```jsx
<ProjectShowcase
  title={string}
  description={string}
  media={[{type: "image" | "video", url, caption, thumbnail}]}
  externalUrl={string} // Optional — shows "Visit Website" button
  onClose={fn}
/>
```

Full-screen dark overlay with media gallery. Used by `AchievementCard` and `big-projects/BigProject.jsx` (lazy-loaded there via `React.lazy`).

---

## 13. THEME TOGGLE SYSTEM

- Global context: `src/contexts/StyleContext.js` provides `{isDark, changeTheme}`.
- Persisted in `localStorage` via `useLocalStorage`; toggle: `src/components/toggle-switch/ToggleSwitch.jsx`.
- Theme class `.light-mode` / `.dark-mode` on root `<div>` in `src/containers/Main.jsx`.

```jsx
import StyleContext from "../../contexts/StyleContext";
const {isDark} = useContext(StyleContext);
<div style={{backgroundColor: isDark ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.6)"}}>
```

---

## 14. LOTTIE ANIMATION PATTERN

```jsx
import DisplayLottie from "../../components/display-lottie/DisplayLottie";
import animationData from "../../assets/lottie/myAnimation";

// Usually behind an "animated" flag from src/data:
{illustration.animated ? (
  <DisplayLottie animationData={animationData} />
) : (
  <img src={fallbackImage} alt="..." />
)}
```

- JSON files live in `src/assets/lottie/` (import without extension is OK — Vite resolves `.json`).
- `DisplayLottie` is now a thin wrapper over `lottie-react` (props: `animationData`, `loop`, `autoplay`).

---

## 15. FRAMER MOTION IMPORTS

```jsx
import {motion, AnimatePresence} from "framer-motion";
```

- `motion.div/button/a/span/img/h1-h6` supported; `AnimatePresence` for mounting/unmounting (modals, checkout bar).

---

## 16. REMAINING INCONSISTENCIES (awareness only)

1. **`Button.jsx`** wraps `className` on a `<div>` instead of spreading it onto the `<a>` — new code should use inline button patterns.
2. **`variables.scss` legacy SCSS vars** (`$titleColor`, `$textColorDark`, github/$blog colors, ...) duplicate CSS custom properties. Refactor towards CSS custom properties when touching related code.
3. **`Greeting.scss` / `Header.scss` / legacy containers SCSS** partially overlap with Tailwind utilities. Prefer Tailwind for new work; clean up legacy when editing.
4. **Duplicate inline SVG icons** exist across `ProjectShowcase.jsx`, `Pricing.jsx`, `Top.jsx` — extract to a shared icon module if they grow.
5. **Fonts** (`Agustina.woff`, `Montserrat-Regular.ttf`) are loaded via `@font-face` in `src/index.css` — keep local, do not switch to Google Fonts CDN without lazy strategy.
6. **Section order** is defined in `src/containers/Main.jsx` (not sorted by id); `top-button/Top.jsx` uses state-based visibility now (no `window.onscroll` assignment).

---

## 17. FILE ORGANIZATION (current)

```
src/
├── data/                        # ALL content — edit here, not in components
│   ├── index.js                 # Barrel re-export (components import "../../data")
│   ├── profile.js               # greeting, resumeSection, socialMediaLinks, contactInfo
│   ├── skills.js                # skillsSection (FA icons), techStack
│   ├── education.js             # educationInfo
│   ├── experience.js            # workExperiences
│   ├── projects.js              # bigProjects (media galleries)
│   ├── achievements.js          # achievementSection
│   ├── pricing.js               # pricingSection (packages, addons, featuresList)
│   └── site.js                  # splashScreen, illustration, introVideo
├── components/                  # Reusable UI (kebab-case folders)
│   ├── header, footer, button, toggle-switch, language-toggle
│   ├── social-media, software-skills, display-lottie
│   ├── section-header, project-showcase, image-lightbox
│   └── education-card, experience-card, achievement-card
├── containers/                  # Page sections (one per portfolio section)
│   ├── greeting, skills, skill-progress, education, work-experience
│   ├── big-projects, achievements, pricing, contact
│   ├── intro-video, splash-screen, top-button, Main.jsx
├── contexts/                    # StyleContext (theme), LanguageContext (lang)
├── hooks/                       # useLocalStorage, useTranslation
├── utils/                       # translations.js (getTranslation)
├── test/setup.js                # Vitest env (matchMedia/IntersectionObserver mocks)
└── assets/                      # images/ (logos + project screenshots), lottie/, fonts/
```
