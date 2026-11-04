# Functions of Education in Society

An online self-learning module for **Understanding Culture, Society and Politics**
(Quarter 2), built as a lightweight, mobile-first web application.

## Status

| Stage | Scope | State |
| --- | --- | --- |
| 1 | Foundation: design system, layout, navigation, Start Here page | **Done** |
| 2 | Pre-assessment, three lessons, activities, quizzes, discussion | Next |
| 3 | Summative task, rubric, revision flow, wrap-up, survey | Pending |
| 4 | Optimisation, offline cache, testing, documentation | Pending |

Sections that are not built yet show an explicit "This section is being built"
notice. No content is faked.

## Run it

```bash
npm install
npm run dev
```

## Build

```bash
npm run build     # type-check, then bundle into dist/
npm run preview   # serve the production build locally
```

## Stack

Vite 6, React 18, TypeScript, react-router-dom 6, plain CSS. No UI library, no
fonts, no images, no analytics. Icons are inline SVG.

## Structure

```
src/
  content/          Module metadata, outcomes, author details (no JSX)
  context/          Progress state, persisted in localStorage
  hooks/            localStorage, page titles
  components/       Layout, section navigation, reusable UI
  pages/            Home, About, Modules, SectionPlaceholder, NotFound
  styles/           tokens.css, base.css, layout.css, components.css
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Home — module introduction and start |
| `/about` | About — module overview, outcomes, author, foreword |
| `/modules` | Modules — all six sections with progress and status |
| `/pre-assessment` … `/wrap-up` | The five learning sections |

Only Home, About and Modules are in the header navigation. The six module
sections live on the Modules page and are reachable from previous/next
controls on each section page.

## Content status

Source documents are in `reqs/`:

- `EDU0104 Module Content for SA1.pdf` — the assessment specification
- `SA1 Contents.pdf` — the author's outline for this module
- `Untitled document.pdf` — additional notes

Those documents define structure and outcomes, but they **do not contain lesson
readings**. Everything currently on the site is either:

- **Supplied** — subject, module title, quarter, author name, learning outcomes,
  educational background; or
- **Clearly marked as a placeholder** — author photo, biography, foreword.

Lesson prose will be drafted from standard sociology-of-education concepts and
labelled as draft until the official lesson content is supplied. Nothing is
invented on the author's behalf.

To fill a placeholder, edit `src/content/module.ts`; the placeholder
disappears as fields are filled in.

Author photo, when supplied: place it in `public/`, set `AUTHOR.photo` and
`AUTHOR.photoAlt`, and render it with explicit `width`/`height`,
`loading="lazy"`, and `decoding="async"`. Target ≤40 KB.

## Progress and privacy

Progress, scores, and drafts are stored in `localStorage` on the student's
device only. Nothing is transmitted anywhere. Progress covers the five learning
sections (pre-assessment, three lessons, wrap-up); Home and About are not scored.
A "Clear saved progress" control in the footer wipes it.

## Accessibility

- WCAG 2.2 AA target; body text 17px, 1.65 line-height, 68ch measure
- Contrast: body 15.2:1, secondary text 6.5:1, links/buttons 6.7:1
- Skip link, per-page titles, focus moves to the page heading on navigation
- 44px minimum touch targets, visible 3px focus rings
- Progress bar exposes `role="progressbar"` with a text equivalent
- Motion and transitions respect `prefers-reduced-motion`

## Size

Production build: 72.9 KB gzip JS, 2.6 KB gzip CSS, one HTML shell. No external
requests. Budget for the finished module: ≤100 KB gzip on first load.
