# Aiency Project

A modern React frontend built with Vite, Tailwind CSS v4, and Framer Motion — designed for pixel-perfect implementation of Figma designs with SaaS-quality UI/UX.

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 19 | UI library |
| Vite | 8 | Build tool & dev server |
| Tailwind CSS | 4 | Utility-first styling |
| Framer Motion | — | Animations |
| React Router DOM | — | Client-side routing |

> Framer Motion and React Router DOM are included in the tech stack and will be installed as features requiring them are built.

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The app runs at `http://localhost:5173`.

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Build for production → `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint on all `.js` / `.jsx` files |

## Project Structure

```
src/
├── components/     # Reusable UI components (PascalCase)
├── hooks/          # Custom React hooks (useSomething.js)
├── utils/          # Utility functions (camelCase.js)
├── App.jsx         # Root component
├── main.jsx        # React entry point
└── index.css       # Global styles + Tailwind import
public/
└── icons.svg       # SVG sprite
```

> Folders are created only when needed — if a folder doesn't exist yet, the feature hasn't been built.

## Tailwind CSS v4

This project uses **Tailwind CSS v4** via the `@tailwindcss/vite` plugin. There is no `tailwind.config.js`. Custom theme tokens (colors, fonts, spacing) are defined directly in `src/index.css` using the `@theme {}` directive:

```css
/* src/index.css */
@import "tailwindcss";

@theme {
  --color-brand: #6366f1;
  --font-sans: "Inter", sans-serif;
}
```

## Design Philosophy

- **Figma-first:** Figma designs are the single source of truth — match layout, spacing, typography, and color exactly.
- **Mobile-first:** All components are built for mobile and scaled up using Tailwind breakpoints (`sm`, `md`, `lg`, `xl`, `2xl`).
- **Component-driven:** Keep components under 200 lines, prefer composition, and reuse rather than duplicate JSX.
- **No UI libraries:** Only Tailwind CSS for styling — no MUI, Chakra, Bootstrap, etc.
