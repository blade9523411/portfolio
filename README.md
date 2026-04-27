# Jayanth Lalukota — Portfolio

Personal portfolio built with **React + Vite + TypeScript**.  
Design: editorial, off-white, oversized typography — no frameworks, plain CSS Modules.

---

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:5173

---



## Project structure

```
src/
  components/        # One file + one CSS module per section
    Navbar
    Hero
    About
    Skills
    Projects
    ProjectCard
    Experience
    ContactFooter
  data/
    portfolio.ts     # ← Edit this to update all content
  hooks/
    useReveal.ts     # IntersectionObserver-based scroll reveal
  styles/
    global.css       # CSS variables, reset, shared utilities
  App.tsx
  main.tsx
public/
  images/            # Place project + profile images here
  resume.pdf         # Place your résumé here
```

---

## Build

```bash
npm run build
```

Output goes to `dist/`.




- **Colors / spacing**: edit CSS variables in `src/styles/global.css`
- **Fonts**: change the Google Fonts URL in `index.html` and update `--font-heading` / `--font-body`
- **Reveal animation**: adjust `threshold` in `useReveal.ts` or tweak `[data-reveal]` transitions in `global.css`
- **Dark section**: Skills and Footer use `var(--bg-dark)`; swap to `var(--bg-warm)` if you prefer a light skills section
