# Functions of Education in Society

An online self-learning module for **Understanding Culture, Society and Politics**
(Quarter 2), built as a lightweight, mobile-first web application.

## Status

| Stage | Scope | State |
| --- | --- | --- |
| 1 | Foundation: design system, layout, navigation, Start Here page | **Done** |
| 2 | Pre-assessment; three lessons, activities, quizzes, discussion | **Pre-assessment done; lessons next** |
| 3 | Summative task, rubric, revision flow, wrap-up, survey | **Reflection and wrap-up done; lesson summative pending** |
| 4 | Optimisation, offline cache, testing, documentation | Pending |

Sections that are not built yet show an explicit "This lesson is being built"
notice. No lesson content is faked.

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
  content/          Module metadata, outcomes, author details, assessment, reflection
  context/          Progress state, persisted in localStorage
  hooks/            localStorage, page titles
  components/       Layout, section navigation, assessment, content, reusable UI
  pages/            Home, About, Modules, PreAssessment, WrapUp, SectionPlaceholder, NotFound
  styles/           tokens.css, base.css, layout.css, components.css
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Home — module introduction and start |
| `/about` | About — overview, outcomes, learning sequence, author, project |
| `/modules` | Modules — all six sections with progress and status |
| `/pre-assessment` | Interactive 10-item pre-assessment with feedback |
| `/lesson/1` … `/lesson/3` | Lesson shells; readings and activities pending |
| `/wrap-up` | Reflection, self-assessment, and module feedback |

Only Home, About and Modules are in the header navigation. The six module
sections live on the Modules page and are reachable from previous/next
controls on each section page.

## Content status

Source documents are in `reqs/`:

- `EDU0104 Module Content for SA1.pdf` — the assessment specification
- `SA1 Contents.pdf` — the author's outline for this module
- `Untitled document.pdf` — additional notes

Those documents define structure and outcomes, but they **do not contain lesson
readings or actual assessment questions**. Everything currently on the site is
either:

- **Supplied** — subject, module title, quarter, author name, learning outcomes,
  educational background, project background; or
- **Drafted for this build** — the 10 pre-assessment items, reflection prompt,
  rubric, self-assessment statements, and feedback survey; or
- **Clearly marked as a placeholder** — author photo, biography, lesson readings.

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
The pre-assessment saves a best score and attempt count. The wrap-up saves the
reflection, self-assessment, and feedback drafts. A "Clear saved progress"
control in the footer wipes it.

## Accessibility

- WCAG 2.2 AA target; body text 17px, 1.65 line-height, 68ch measure
- Contrast: body 15.2:1, secondary text 6.5:1, links/buttons 6.7:1
- Skip link, per-page titles, focus moves to the page heading on navigation
- 44px minimum touch targets, visible 3px focus rings
- Progress bar exposes `role="progressbar"` with a text equivalent
- Quiz uses fieldsets, native inputs, text + icon feedback, and focusable feedback
- Learning-sequence table has column and row headers; it stacks on small screens
- Motion and transitions respect `prefers-reduced-motion`

## Size

Production build: 79.4 KB gzip JS, 4.0 KB gzip CSS, one HTML shell. No external
requests. Budget for the finished module: ≤100 KB gzip on first load.
