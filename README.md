# Modules

Barebones frontend for a masters school project. Three pages, shared layout, no
backend.

## Stack

- [Vite](https://vite.dev/) + React + TypeScript
- [react-router-dom](https://reactrouter.com/) for routing
- Plain CSS (`src/index.css`), no UI library

## Run it

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Build

```bash
npm run build     # type-check, then bundle into dist/
npm run preview   # serve the production build locally
```

## Pages

| Route      | File                      |
| ---------- | ------------------------- |
| `/`        | `src/pages/Landing.tsx`   |
| `/about`   | `src/pages/About.tsx`     |
| `/modules` | `src/pages/Modules.tsx`   |
| anything   | `src/pages/NotFound.tsx`  |

## Where to edit

- **Copy / content** — the files in `src/pages/`.
- **Module list** — the `modules` array at the top of `src/pages/Modules.tsx`.
- **Styling** — `src/index.css`; colours live in the `:root` variables.
- **Navigation** — the `navItems` array in `src/App.tsx`.
