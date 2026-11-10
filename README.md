# Functions of Education in Society

An online self-learning module for **Understanding Culture, Society and Politics**
(Quarter 2), built as a lightweight, mobile-first React application.

## Status

| Stage | Scope | State |
| --- | --- | --- |
| 1 | Foundation: design system, layout, navigation, Start Here page | **Done** |
| 2 | Pre-assessment; lesson readings and activities | **Lessons done; lesson quizzes next** |
| 3 | Summative task, rubric, revision flow, wrap-up, survey | **Reflection and wrap-up done; summative rubric and revision flow pending** |
| 4 | Optimisation, testing, documentation | In progress |

## Run it

Requires **Node 20 or newer** for the Vite tooling.

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

### Build

```bash
npm run build     # type-check, then bundle into dist/
npm run preview   # serve the production build locally
```

The finished app is static. Deploy the `dist/` folder to any static host
(GitHub Pages, Netlify, Vercel, or a school web server). There is no backend,
database, environment file, or API.

## Stack

Vite 6, React 18, TypeScript, react-router-dom 6, and plain CSS. No UI library,
no fonts, no external images, no analytics, and no server.

## Structure

```
src/
  content/          Module metadata, lessons, assessment, reflection, author details
  context/          Progress state, persisted in localStorage
  features/         Progress gating helpers
  hooks/            localStorage, page titles
  components/       Layout, section navigation, assessment, content, reusable UI
  pages/            Home, About, Modules, PreAssessment, Lesson1–3, WrapUp, NotFound
  styles/           tokens.css, base.css, layout.css, components.css, lesson.css
public/
  author-andrea-tenorio.jpg
reqs/               Source documents
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Home — module introduction and start |
| `/about` | About — overview, outcomes, learning sequence, author, project |
| `/modules` | Modules — all sections with progress and lock status |
| `/pre-assessment` | Interactive 10-item pre-assessment with feedback |
| `/lesson/1` … `/lesson/3` | Lesson readings and activities |
| `/wrap-up` | Reflection, self-assessment, and module feedback |

Only Home, About and Modules are in the header navigation. Module sections live
on the Modules page and unlock in order.

## Lessons

The lesson content is split across the existing three-lesson structure:

- **Lesson 1: Foundations** — the full reading on education, the Philippine
  educational system, historical development, types of education, functions,
  and education as a human right.
- **Lesson 2: Application** — the class-discussion activities about a person
  whose education contributed to success and the learner's own educational
  journey.
- **Lesson 3: Evaluation** — the “Education for All” essay and the personal
  reflection on the functions and importance of education.

Lesson 1 includes learning objectives, an in-page contents list, and reading
content divided into aligned section cards with separated subsections. Lesson
pages are code-split so reading content downloads only when opened.

## Prerequisites and progress

The student path is linear:

**Pre-assessment → Lesson 1 → Lesson 2 → Lesson 3 → Wrap-Up**

- The pre-assessment completes when the learner finishes it.
- Lessons 1–3 have a **Mark Lesson Complete** control at the end.
- Completed sections remain available so learners can go back and review.
- Locked sections appear as non-clickable cards with the prerequisite they need.
- Next-step links remain locked until the current section is complete.
- Direct URLs to locked sections redirect to the first incomplete section.
- Progress and completion state are saved in the browser, so revisiting an
  earlier section does not reset progress.

## Progress and privacy

Module progress, scores, and drafts are stored in `localStorage` on the
student’s device. Nothing is transmitted to a server.

A **Clear saved progress** control in the footer wipes the saved module state
and drafts on that device.

## Author

The About page uses the author’s supplied portrait at
`public/author-andrea-tenorio.jpg`, displayed in a square headshot frame, and the
biography she provided for the module.

## Accessibility

- WCAG 2.2 AA target; body text 17px, 1.65 line-height, 68ch measure
- Contrast: body 15.2:1, secondary text 6.5:1, links/buttons 6.7:1
- Skip link, per-page titles, focus moves to the page heading on navigation
- 44px minimum touch targets, visible 3px focus rings
- Forms use labels, fieldsets, text + icon feedback, and focusable error messages
- Locked cards communicate status with text, not colour alone
- Lesson reading chunks stack cleanly on small screens
- Motion and transitions respect `prefers-reduced-motion`

## Size

Current production build: approximately **80.4 KB gzip initial JS** and
**4.6 KB gzip CSS**, with lesson content in small on-demand chunks (Lesson 1 is
about 3.8 KB gzip; Lessons 2 and 3 are under 1 KB each).
