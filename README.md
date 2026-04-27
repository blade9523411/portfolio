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

## Updating content

All portfolio content lives in one file:

```
src/data/portfolio.ts
```

Edit `personal`, `projects`, `experience`, and `skillCategories` there.  
No other files need to change for content updates.

### Adding a project image

1. Drop your image in `public/images/` (e.g. `public/images/k8s-ml-controller.png`).
2. In `portfolio.ts`, uncomment `imageSrc` on the project and set it.
3. In `ProjectCard.tsx`, uncomment the `<img>` tag and remove the placeholder `<div>`.

### Adding a profile photo

1. Drop your photo in `public/images/` (e.g. `public/images/profile.jpg`).
2. In `portfolio.ts`, uncomment `profileImageSrc` on `personal`.
3. In `About.tsx`, uncomment the `<img>` tag and remove the placeholder `<div>`.

### Adding your résumé

Place `resume.pdf` in the `public/` folder. The hero button links to `/resume.pdf`.

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

---

## Deployment

### Vercel / Netlify

Push to GitHub, connect the repo, set build command to `npm run build` and publish dir to `dist`. Done.

### GitHub Pages

1. In `vite.config.ts`, set `base` to your repo name:
   ```ts
   base: '/your-repo-name/'
   ```
2. Install the deploy helper:
   ```bash
   npm install -D gh-pages
   ```
3. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
4. Run:
   ```bash
   npm run deploy
   ```

---

## Customisation tips

- **Colors / spacing**: edit CSS variables in `src/styles/global.css`
- **Fonts**: change the Google Fonts URL in `index.html` and update `--font-heading` / `--font-body`
- **Reveal animation**: adjust `threshold` in `useReveal.ts` or tweak `[data-reveal]` transitions in `global.css`
- **Dark section**: Skills and Footer use `var(--bg-dark)`; swap to `var(--bg-warm)` if you prefer a light skills section
