# Zafran Indian Cuisine

Static frontend-only restaurant website built with React, TypeScript, and Vite.

Premium restaurant website built with React, featuring elegant UI, smooth animations, and responsive design.

## Stack

- React 19
- TypeScript
- Vite
- React Router
- GSAP + Lenis

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run check
```

This runs linting and a production build.

## Frontend-only behavior

- The project is intentionally deployable without a backend.
- Contact-style forms are handled on the client by opening a prefilled `mailto:` draft.
- Routes are served as a single-page app.

## Deployment

### Build command

```bash
npm run build
```

### Output directory

```bash
dist
```

### Static hosting notes

- Vercel is supported through `vercel.json`.
- Netlify-style SPA rewrites are supported through `public/_redirects`.
- Any other static host must rewrite unknown routes to `/index.html`.

### Node version

Use Node `20+`.

## Main routes

- `/`
- `/about-us`
- `/catering`
- `/private-events`
- `/contact-us`
- `/privacy-policy`
- `/terms-and-conditions`
