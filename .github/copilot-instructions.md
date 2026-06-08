# Liant Portfolio - AI Copilot Instructions

## Project Overview
A data-driven React 18 portfolio built with Vite, featuring dynamic theme switching and section-based content architecture. All portfolio content is configurable via a single `portfolio.jsx` file, making it maintainable and extensible without touching components.

## Architecture

### Data Flow
**Configuration → Containers → Components → Styling**

- **Source of Truth:** [src/portfolio.jsx](src/portfolio.jsx) - Contains all portfolio content (skills, projects, education, experience, etc.)
- **Router/Layout:** [src/containers/Main.jsx](src/containers/Main.jsx) - Orchestrates rendering of all sections; controls splash screen visibility
- **Theme System:** [src/contexts/StyleContext.js](src/contexts/StyleContext.js) via [src/hooks/useLocalStorage.js](src/hooks/useLocalStorage.js) - Manages dark/light mode; persists to localStorage

### Key File Structure
```
src/
├── portfolio.jsx          # Configuration file - EDIT THIS to change content
├── contexts/StyleContext.js  # Theme context provider
├── hooks/useLocalStorage.js  # Persistence hook for theme
├── containers/            # Page sections (greeting, skills, projects, etc.)
├── components/            # Reusable UI components (Button, Cards, Header)
└── variables.scss         # Design tokens (colors, spacing, typography)
```

## Critical Development Patterns

### 1. Configuration-Driven Development
**Never hardcode content.** All user-facing content comes from `portfolio.jsx`:
```jsx
const greeting = {
  username: "Your Name",
  title: "Hello",
  displayGreeting: true  // Control visibility here
};
```
Containers consume this config and conditionally render based on `display` flags.

### 2. Theme Context Usage
Access theme via `useContext(StyleContext)`:
```jsx
import { useContext } from "react";
import StyleContext from "../../contexts/StyleContext";

const MyComponent = () => {
  const { isDark, changeTheme } = useContext(StyleContext);
  return <div className={isDark ? "dark-mode" : "light-mode"}>...</div>;
};
```
CSS class names (`dark-mode`/`light-mode`) on root div determine theming.

### 3. Component & Container Naming Convention
- **Containers** (`/containers`): Full-width sections handling data mapping and layout (e.g., Skills, Projects)
- **Components** (`/components`): Reusable, self-contained UI elements (e.g., Button, Cards)
- **File Structure:** Folder per component with `ComponentName.jsx` + `ComponentName.scss`

### 4. Styling System
Design tokens defined in [src/variables.scss](src/variables.scss) using CSS custom properties:
```scss
// Light mode variables
:root, .light-mode {
    --bg-body: #f4f4f4;
    --text-primary: #000000;
    --btn-primary-bg: #a1902e;
}

// Dark mode variables  
.dark-mode {
    --bg-body: #0a0a0a;
    --text-primary: #ffffff;
}
```
Import variables in any SCSS file: `@use "@/variables.scss" as *;` (alias configured in [vite.config.js](vite.config.js))

### 5. Local Storage Persistence
Use custom hook for client-side state persistence:
```jsx
const [isDark, setIsDark] = useLocalStorage("isDark", defaultValue);
// Automatically syncs to localStorage
```
Used by Main.jsx to persist theme preference across sessions.

## Build & Deployment

### Development
```bash
npm install          # Install dependencies
npm run start        # Start Vite dev server (port 3000, auto-opens browser)
```

### Production
```bash
npm run build        # Builds to `build/` folder (vite build command)
npm run deploy       # Deploys build/ to gh-pages branch
```
**Note:** Deployment uses separate `gh-pages` branch; main branch is development only.

## Module System & Asset Imports
- **Type:** ES Modules (`"type": "module"` in package.json)
- **Path Alias:** Use `@/` for absolute imports to `src/` directory
  ```jsx
  import Button from "@/components/button/Button";
  import { useLocalStorage } from "@/hooks/useLocalStorage";
  ```
- **Asset Imports:** Images/Lottie animations imported directly:
  ```jsx
  import telkomLogo from "@/assets/images/telkomSchoolsLogo.png";
  import splashAnimation from "@/assets/lottie/splashAnimation";
  ```

## External Dependencies Reference
- **React 18:** Modern API (createRoot, hooks)
- **Framer Motion:** Animation library used in components
- **Lottie React:** Plays JSON animation files from `assets/lottie/`
- **react-easy-emoji:** Emoji rendering with `emoji()` wrapper
- **FontAwesome:** Icon library for soft skills display

## Adding New Portfolio Sections
1. Add configuration object to [src/portfolio.jsx](src/portfolio.jsx) with `display: true/false`
2. Create container in `src/containers/YourSection/`
3. Import and add to [src/containers/Main.jsx](src/containers/Main.jsx) render order
4. Container reads config via import and conditionally renders based on `display` flag
5. Add navigation link to [src/components/header/Header.jsx](src/components/header/Header.jsx) using shared config flags

## Editor Shortcuts & Conventions
- **SCSS Variables:** Prefix with `$` (e.g., `$buttonColor`, `$brandGold`)
- **CSS Variables:** Use `--` prefix for theme-switchable properties
- **Component Props:** Destructure in function signature; support `className` for styling overrides
- **Accessibility:** Use semantic HTML; ensure header nav links match Section IDs for anchor linking

## Performance Considerations
- Vite is configured to chunk vendor libraries separately (React, React-DOM, Framer Motion)
- Splash screen hidden after `splashScreen.duration` ms (default: 1000ms)
- SVG import support via `vite-plugin-svgr` for component-based SVG usage
