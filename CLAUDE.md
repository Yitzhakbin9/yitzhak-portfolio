# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Production build to dist/
npm run preview   # Preview production build
npm run lint      # ESLint
```

No test suite is configured.

## Project Structure

```
portfolio/
├── public/
│   └── resume.pdf          # CV file served statically (place your PDF here)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Fixed nav — highlights active section via IntersectionObserver
│   │   ├── ScrollProgress.jsx  # Fixed top bar showing scroll depth
│   │   ├── Hero.jsx        # Landing section — typing animation, available badge, CV button
│   │   ├── About.jsx       # Summary + work experience cards
│   │   ├── Skills.jsx      # Skill tag grid
│   │   ├── Projects.jsx    # Project cards with tech tags + GitHub links
│   │   ├── Education.jsx   # Education history
│   │   └── Contact.jsx     # Email / GitHub / LinkedIn links
│   ├── hooks/
│   │   └── useScrollReveal.js  # IntersectionObserver hook — adds .visible to .reveal elements
│   ├── App.jsx             # Root — composes all sections in order
│   ├── App.css             # All component styles + animations
│   ├── index.css           # Global reset, CSS variables (:root), grid background
│   ├── data.js             # Single source of truth for all portfolio content
│   └── main.jsx            # React entry point
├── index.html
├── vite.config.js
└── package.json
```

## Architecture

Single-page portfolio built with React 19 + Vite. No routing — all sections are rendered on one page with anchor-based navigation.

**Data layer:** All portfolio content (name, skills, projects, experience, education, contact) lives in [src/data.js](src/data.js) as a single exported `data` object. Components import from there — update content by editing that file.

**Component structure:** Each section (`Hero`, `About`, `Skills`, `Projects`, `Education`, `Contact`) is a standalone component in [src/components/](src/components/). `App.jsx` simply composes them in order with a fixed `Navbar` and `ScrollProgress` bar.

**Scroll behavior:**
- `Navbar` uses `IntersectionObserver` to highlight the active section as the user scrolls.
- `useScrollReveal` hook ([src/hooks/useScrollReveal.js](src/hooks/useScrollReveal.js)) returns a ref; attach it to a section's root element and add CSS class `.reveal` — the hook adds `.visible` when it enters the viewport.
- `ScrollProgress` renders a fixed top bar indicating scroll depth.

**Styling:** Plain CSS in [src/App.css](src/App.css) (component styles) and [src/index.css](src/index.css) (global resets/variables). No CSS modules or CSS-in-JS.

**Resume:** `public/resume.pdf` is served statically and linked from the Hero download button.
