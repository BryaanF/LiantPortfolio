# Liant Portfolio - UI Standards & Component Patterns

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

```jsx
// LIGHT MODE (.light-mode) — Neutral cool grey, no warm/pink tint
--bg-body: #eaeaea
--bg-card: #f5f5f5
--bg-header: #f5f5f5
--text-primary: #1a1a2e
--text-secondary: #3a3a4e
--border-light: rgba(0, 0, 0, 0.1)
--shadow-card: 0 4px 20px rgba(0,0,0,0.05), 0 1px 6px rgba(0,0,0,0.07)

// DARK MODE (.dark-mode, [data-theme='dark'])
--bg-body: #0a0a0a
--bg-card: #1f1f1f
--bg-header: #161b22
--text-primary: #ffffff
--text-secondary: #b0b0b0
--border-light: rgba(255, 255, 255, 0.1)
--shadow-card: 0 4px 6px rgba(255, 255, 255, 0.05)
```

### 1.3 Tailwind Arbitrary Value Pattern

```jsx
bg-[var(--bg-body)]    // Section backgrounds
bg-[var(--bg-card)]    // Card backgrounds
text-[var(--text-primary)]   // Main heading text
text-[var(--text-secondary)] // Subtitle, metadata, description text
border-[var(--border-light)] // Subtle borders and dividers
text-[var(--btn-primary-bg)] // Brand accent text
bg-[var(--btn-primary-bg)]   // Primary button fill
hover:text-[var(--btn-primary-bg)]  // Link/button hover accent
hover:border-[var(--btn-primary-bg)] // Card hover border accent
```

---

## 2. SECTION LAYOUT PATTERN

Every section follows this exact structure in JSX:

```jsx
import {motion} from "framer-motion";
import LanguageContext from "../../contexts/LanguageContext";
import {getTranslation} from "../../utils/translations";

export default function MySection() {
  const {lang} = useContext(LanguageContext);
  const {isDark} = useContext(StyleContext); // if theme needed

  if (!config.display) return null;

  return (
    <section
      id="my-section"
      className="relative py-16 md:py-24 overflow-hidden"
      style={{backgroundColor: "var(--bg-body)"}}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header: centered, animated */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-[var(--text-primary)] mb-4">
            {getTranslation(config.title, lang)}
          </h2>
          <p
            className="text-sm md:text-base uppercase tracking-[0.2em] font-semibold"
            style={{color: "var(--text-secondary)"}}
          >
            {getTranslation(config.subtitle, lang)}
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ... cards / content ... */}
        </div>
      </div>
    </section>
  );
}
```

### Section IDs (used by header nav anchors)

| id              | Container          |
| --------------- | ------------------ |
| `#greeting`     | Greeting.jsx       |
| `#intro-video`  | IntroVideo.jsx     |
| `#skills`       | Skills.jsx         |
| `#education`    | Education.jsx      |
| `#experience`   | WorkExperience.jsx |
| `#projects`     | BigProjects.jsx    |
| `#achievements` | Achievement.jsx    |
| `#pricing`      | Pricing.jsx        |
| `#contact`      | Contact.jsx        |

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
  visible: {
    opacity: 1,
    transition: {staggerChildren: 0.15, delayChildren: 0.2}
  }
};
const itemVariants = {
  hidden: {opacity: 0, y: 12},
  visible: {opacity: 1, y: 0, transition: {duration: 0.4}}
};

<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{once: true}}
>
  {items.map((item, i) => (
    <motion.div key={i} variants={itemVariants}>
      ...
    </motion.div>
  ))}
</motion.div>;
```

### 3.2 Hover Animations

```jsx
// Card lift on hover
<motion.div whileHover={{y: -5}}>...</motion.div>;

// Button/link with CSS transition
className = "transition-all duration-300 hover:-translate-y-1";
```

### 3.3 Floating/Looping Animation (for decorative elements)

```jsx
<motion.span
  animate={{y: [0, -6, 0]}}
  transition={{duration: 3, repeat: Infinity, ease: "easeInOut"}}
>
  🚀
</motion.span>
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

All sections must use the shared `SectionHeader` component located at `src/components/sectionHeader/SectionHeader.jsx`. This ensures visual harmony and consistency across the portfolio.

### Usage

```jsx
import SectionHeader from "../../components/sectionHeader/SectionHeader";

<SectionHeader
  title="Section Title" // Required
  subtitle="Optional subtitle" // Optional
  emoji="🚀" // Optional emoji above title
  align="center" // "center" (default) | "left"
/>;
```

### Component API

| Prop       | Type                 | Default    | Description                               |
| ---------- | -------------------- | ---------- | ----------------------------------------- |
| `title`    | string               | (required) | Section heading text                      |
| `subtitle` | string               | `""`       | Subtitle shown below gold accent strip    |
| `emoji`    | string               | `""`       | Optional emoji/icon displayed above title |
| `align`    | `"center"`\|`"left"` | `"center"` | Text alignment                            |

### Rendered Output

- **Title**: `text-3xl md:text-5xl font-bold text-[var(--text-primary)]`
- **Emoji** (optional): `text-4xl md:text-5xl` above title
- **Gold underline accent strip**: Animated `width: 0 → 80px` with `bg-[var(--btn-primary-bg)]`
- **Subtitle** (optional): `text-sm md:text-base uppercase tracking-[0.2em] font-semibold text-[var(--text-secondary)]`

### Example Usage by Section

| Container      | title                      | subtitle                      | emoji | align  |
| -------------- | -------------------------- | ----------------------------- | ----- | ------ |
| Education      | `educationInfo.title`      | —                             | `🎓`  | center |
| Skills         | `skillsSection.title`      | `skillsSection.subTitle`      | `💡`  | center |
| IntroVideo     | `introVideo.title`         | `introVideo.subtitle`         | `🎬`  | center |
| WorkExperience | `workExperiences.title`    | `workExperiences.subtitle`    | `💼`  | center |
| BigProjects    | `bigProjects.title`        | `bigProjects.subtitle`        | `🚀`  | center |
| Achievement    | `achievementSection.title` | `achievementSection.subtitle` | `🏆`  | center |
| Pricing        | `pricingSection.title`     | `pricingSection.description`  | `💰`  | center |
| Contact        | `contactInfo.title`        | `contactInfo.subtitle`        | `✉️`  | center |

---

## 6. CARD STANDARDS

### 6.1 Card Container

```jsx
<div className="rounded-xl border border-[var(--border-light)] bg-[var(--bg-card)]
  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
```

### 6.2 Card Hover Border Accent

```jsx
// Add group class to parent and use:
className =
  "group border border-[var(--border-light)] hover:border-[var(--btn-primary-bg)]/50 transition-colors";
```

### 6.3 Bullet/List Items

```jsx
// Gold dot bullet
<li className="flex gap-2">
  <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--btn-primary-bg)]" />
  <span className="text-[var(--text-secondary)]">{text}</span>
</li>

// Gold triangle bullet
<li className="flex items-start gap-3">
  <span className="text-[var(--btn-primary-bg)] mt-1.5 shrink-0 text-[8px]">▶</span>
  <span className="text-[var(--text-secondary)]">{text}</span>
</li>
```

### 6.4 Spec/Info Grid (2-column metadata)

```jsx
<div
  className="grid grid-cols-2 gap-2 text-[10px] p-3 rounded-lg border
  border-[var(--border-light)]"
  style={{
    backgroundColor: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)"
  }}
>
  {/* Items */}
</div>
```

---

## 7. BUTTON PATTERNS

### 7.1 Primary Button (Gold fill)

```jsx
<button
  className="px-6 py-3 rounded-lg text-xs font-black uppercase tracking-widest
  transition-all hover:brightness-110 active:scale-95"
  style={{backgroundColor: "var(--btn-primary-bg)", color: "#fff"}}
>
  {text}
</button>
```

### 7.2 Secondary/Outline Button

```jsx
<button
  className="py-3 rounded-lg border border-[var(--border-light)] text-xs
  font-bold transition-colors"
  style={{color: "var(--text-primary)", backgroundColor: "transparent"}}
>
  {text}
</button>
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
</button>
```

### 7.4 Legacy `.main-button` (used by Button.jsx component)

- Defined in `src/components/button/Button.scss`
- Gold background, white text, rounded, hover lift effect
- For NEW code, prefer primary button pattern above

---

## 8. SVG ICON PATTERN

Use either approach consistently. For new code, prefer **inline SVG components** (portable, no external dependency).

### 8.1 Inline SVGs (Recommended for new code)

```jsx
const MyIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);
```

Usage: `<MyIcon />` — color inherits from `currentColor`.

### 8.2 FontAwesome (Used in SocialMedia, Contact, header)

- Import: `import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"`
- Brand icons: `import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"`
- Solid icons: `import { faEnvelope } from "@fortawesome/free-solid-svg-icons"`
- Brand colors defined as SCSS variables in `variables.scss` (e.g., `$linkedin: #0e76a8`)

### 8.3 React Icons (Installed but unused — avoid if possible)

- The `react-icons` package is installed but not currently used in any component.
- Prefer inline SVGs or FontAwesome instead.

---

## 9. FORM BLUEPRINT (WhatsApp/Email Actions)

**Do NOT use `<form>` elements.** All interactions are direct links:

```jsx
// WhatsApp
<a href={`https://wa.me/6281331487753?text=${encodeURIComponent(message)}`}
  target="_blank" rel="noopener noreferrer">
  Contact via WhatsApp
</a>

// Email
<a href={`mailto:briliantfikri@gmail.com?subject=${subject}&body=${body}`}>
  Send Email
</a>
```

For the pricing checkout message, construct the message template inside a `handleCheckout` function and call `window.open()`.

---

## 10. IMAGE HANDLING (Vite)

- **Always import images statically** (Vite convention):
  ```jsx
  import myImage from "../../assets/images/myImage.png";
  // Usage: <img src={myImage} alt="..." />
  ```
- **Do NOT use `require()`** — that is a CRA/Webpack pattern. The Skills.jsx container is the only file still using `require()` and should be migrated.
- For images from external URLs, use `src={url}` directly (no import needed).
- Use `loading="lazy"` on below-the-fold images.

---

## 11. LANGUAGE / I18N PATTERN

All user-facing text that supports bilingual display uses this pattern:

1. In `portfolio.jsx`: define as `{ en: "...", id: "..." }` object.
2. In component: import `LanguageContext`, get `lang`, call `getTranslation(configField, lang)`.
3. The helper lives in `src/utils/translations.js`.

```jsx
import LanguageContext from "../../contexts/LanguageContext";
import {getTranslation} from "../../utils/translations";

const {lang} = useContext(LanguageContext);
const title = getTranslation(config.title, lang); // returns string
```

**Rules:**

- `getTranslation()` handles nested objects recursively (e.g., `workflow` steps).
- Arrays of bilingual objects are resolved element-by-element.
- Plain strings/numbers pass through unchanged.

---

## 12. MODAL / OVERLAY PATTERNS

### 12.1 ImageLightbox (`src/components/imageLightbox/ImageLightbox.jsx`)

```jsx
<ImageLightbox src={url} alt={text} onClose={() => setState(null)} />
```

- Fixed overlay, dark backdrop, centered image, close on backdrop click or ✕ button.
- Always wrap with `{show && <ImageLightbox ... />}`.

### 12.2 ProjectShowcase (`src/components/projectShowcase/ProjectShowcase.jsx`)

```jsx
<ProjectShowcase
  title={string}
  description={string}
  media={[{type: "image" | "video", url, caption, thumbnail}]}
  externalUrl={
    string
  } /* Optional — shows "Visit Website" button in top-right header */
  onClose={fn}
/>
```

- Full-screen dark overlay with media gallery.
- **"Visit Website"** button appears in top-right header ONLY when `externalUrl` is provided.
- Used by AchievementCard and BigProject containers.

---

## 13. THEME TOGGLE SYSTEM

- Global context: `src/contexts/StyleContext.js` provides `{ isDark, changeTheme }`.
- Theme is persisted in `localStorage` via `useLocalStorage` hook.
- Toggle switch: `src/components/ToggleSwitch/ToggleSwitch.jsx` (sun/moon emoji).
- Theme class: `.light-mode` or `.dark-mode` on root `<div>` in `Main.jsx`.
- CSS variables defined in `src/variables.scss` respond to these classes.

```jsx
import StyleContext from "../../contexts/StyleContext";
const { isDark } = useContext(StyleContext);

// Use in conditional styling:
<div style={{ backgroundColor: isDark ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.6)" }}>
```

---

## 14. LOTTIE ANIMATION PATTERN

```jsx
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import animationData from "../../assets/lottie/myAnimation";

{
  illustration.animated ? (
    <DisplayLottie animationData={animationData} />
  ) : (
    <img src={fallbackImage} alt="..." />
  );
}
```

- All Lottie JSON files live in `src/assets/lottie/`.
- The `DisplayLottie` component wraps `lottie-react` with `Suspense` + `<Loading>` fallback.

---

## 15. FRAMER MOTION IMPORTS

Always import only what's needed from `framer-motion`:

```jsx
import {motion, AnimatePresence} from "framer-motion";
```

- `motion.div`, `motion.button`, `motion.a`, `motion.span`, `motion.img`, `motion.h1`-`h6` supported.
- `AnimatePresence` for mounting/unmounting animations (modals, checkout bar).

---

## 16. KNOWN INCONSISTENCIES & MIGRATION NOTES

These are NOT required to fix immediately, but be aware of them when touching related code:

1. **`Skills.jsx` uses `require()` for static images** — should use `import` like all other containers (Vite pattern).
2. **`Button.jsx` does not spread `className`** — it wraps in `<div className={className}>` instead of applying directly to `<a>`. New button code should use the inline primary button pattern instead.
3. **`variables.scss` has legacy SCSS variables** that duplicate CSS custom properties (e.g., `$textColorDark` is `#ffffff` but already covered by `--text-primary` in dark mode). When refactoring, prefer CSS custom properties.
4. **`Greeting.scss` and `Skills.scss` still contain legacy classes** that are partially overridden by Tailwind. When editing, prefer moving styles to Tailwind and removing SCSS.
5. **`Header.scss` is partially refactored** — it has both legacy classes and a comment noting Tailwind removal was done. When editing, complete the migration.
6. **`SplashScreen.jsx` uses `.css` instead of `.scss`** — minor inconsistency.
7. **`ProjectShowcase.jsx` and `Pricing.jsx` both define duplicate inline SVG icons** (`Close`, `Image`) — consider extracting to `src/utils/icons.jsx` in the future.

---

## 17. FILE ORGANIZATION SUMMARY

```
src/
├── portfolio.jsx                  # Single config file — all content data
├── App.jsx                        # Root component
├── Main.jsx                       # Container orchestrator, theme/language providers
├── variables.scss                 # Design tokens (CSS vars + SCSS vars)
├── contexts/
│   ├── StyleContext.js            # Theme state (isDark, changeTheme)
│   └── LanguageContext.js         # Language state (lang, changeLang)
├── hooks/
│   └── useLocalStorage.js         # Persistent state hook
├── utils/
│   └── translations.js            # getTranslation() helper
├── components/                    # Reusable UI components
│   ├── header/Header.jsx
│   ├── button/Button.jsx
│   ├── footer/Footer.jsx
│   ├── socialMedia/SocialMedia.jsx
│   ├── ToggleSwitch/ToggleSwitch.jsx
│   ├── LanguageToggle/LanguageToggle.jsx
│   ├── displayLottie/DisplayLottie.jsx
│   ├── imageLightbox/ImageLightbox.jsx
│   ├── projectShowcase/ProjectShowcase.jsx
│   ├── achievementCard/AchievementCard.jsx
│   ├── educationCard/EducationCard.jsx
│   ├── experienceCard/ExperienceCard.jsx
│   ├── softwareSkills/SoftwareSkill.jsx
│   └── ... (other legacy components)
├── containers/                    # Page sections (one per portfolio section)
│   ├── greeting/Greeting.jsx
│   ├── introVideo/IntroVideo.jsx
│   ├── skills/Skills.jsx
│   ├── education/Education.jsx
│   ├── workExperience/WorkExperience.jsx
│   ├── projects/Projects.jsx
│   ├── BigProjects/BigProject.jsx
│   ├── achievement/Achievement.jsx
│   ├── pricing/Pricing.jsx
│   ├── contact/Contact.jsx
│   ├── splashScreen/SplashScreen.jsx
│   └── ... (others)
└── assets/
    ├── images/                    # Static images (imported in portfolio.jsx)
    ├── lottie/                    # Lottie JSON animations
    └── fonts/                     # Custom fonts
```
