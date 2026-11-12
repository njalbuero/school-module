# Design System

The single source of truth for the visual language of the module. All page and
component work should follow this. Tokens live in `src/styles/tokens.css`; shared
patterns live in `src/styles/components.css` (plus per-page files like
`home.css` / `about.css` for layout-specific composition).

> Rule of thumb: build from tokens and the patterns below. Do not introduce new
> raw colors, one-off radii/shadows, or ad-hoc card styles.

---

## 1. Typography

- **Family**: Inter Variable — one family everywhere (`--font-sans`). No serif.
- **Weights**: `--weight-regular` 400 · `--weight-medium` 500 ·
  `--weight-semibold` 600 · `--weight-bold` 700. Avoid 800+; headings are 700.
- **Sizes**: `--text` 1.0625rem (body) · `--text-small` 0.9375rem ·
  `--text-label` 0.8125rem (eyebrows, badges).
- **Line height**: `--leading` 1.65. **Measure**: `--measure` 68ch.
- **Headings** (`h1`–`h4`): weight 700, tight leading (1.2), negative letter
  spacing. `text-wrap: balance` on headings, `pretty` on paragraphs.
- **Eyebrow**: `.eyebrow` — uppercase, tracked, label size, `--brand`.

## 2. Color

Neutrals
- `--paper` page background · `--surface` cards · `--surface-alt` quiet panels
- `--ink` text · `--ink-muted` secondary text
- `--line` / `--line-strong` borders

Brand & accents
- **Brand blue**: `--brand`, `--brand-dark`, `--brand-soft` (primary actions,
  links, structural accent)
- **Gold**: `--accent`, `--accent-strong`, `--accent-ink`, `--accent-soft`
  (highlight / warm emphasis — hero primary CTA, ponder card)
- **Category accents** (used per item, never as body text):
  `--green` / `--green-soft`, `--amber` / `--amber-soft`,
  `--violet` / `--violet-soft`
- **Status**: `--green` done · `--red` error

Rules: accents are for emphasis, icons, top bars and badges — not long body copy.
Soft variants are for tinted backgrounds; strong variants for text/icons on them.

## 3. Space, shape, elevation

- **Space scale**: `--s-1` .25rem → `--s-16` 4rem (4px base).
- **Radius**: `--radius-sm` 6 · `--radius` 10 · `--radius-lg` 16 · pills 999.
- **Min tap target**: `--tap` 44px.
- **Elevation**: `--shadow-sm` resting cards · `--shadow-md` featured/hero.
- **Gradient**: `--hero-gradient` for the bold Home hero.

## 4. Component patterns

### Feature card (default for content blocks)
- Surface `--surface`, `1px solid var(--line)` border, `--card-radius`,
  `--card-padding`, `--card-shadow`.
- Optional **accent top bar**: `var(--accent-bar)` solid `var(--card-accent)`,
  set per card (`--card-accent` / `--card-accent-soft`). Blue for progress,
  gold for ponder, category hues for outcome cards.
- Optional **icon chip** in a card header.

### Content card
- `.card` — `--radius` 10px, `--s-6` padding, line border, surface.
- `.card-quiet` — `--surface-alt`, no border. For supporting/non-feature blocks.

### Progress card
- Shared `ProgressCard` component (`src/components/layout/ProgressCard.tsx`),
  used on Home and Module.
- Feature-card style: brand accent bar, target icon chip, count + percentage,
  full-width bar, state message, and a context-aware CTA ("Continue…" /
  "Review the module").

### Icon chip
- `--icon-chip-size` (44px) square, `--icon-chip-radius` (12px).
- Background `--{accent}-soft`, icon `--{accent}` (e.g. brand-soft + brand).
- Smaller 34–40px variants are fine for nested/compact contexts (e.g. education
  entries).

### Pills & badges
- Radius 999. Accent variant: `--{accent}-soft` bg + `--{accent}` (or
  `--accent-ink`) text. Neutral variant: surface + `--line-strong` + muted text.
- Used for: hero meta chips, role chips, numbered badges, status chips.

### Buttons
- Primary: `.button` — brand fill, white text, radius 8, `--tap` min height.
- Secondary: `.button-secondary` — surface + `--line-strong` border.
- On the bold hero: `.hero-button-primary` (gold) + `.hero-button-secondary`
  (translucent). Pill radius.
- Focus: `:focus-visible` ring in brand color.

### Sections
- `.section` separated by `--s-12`. Use `.section-title` + `.section-lead`.
- Page intro uses `.page-header` / `.eyebrow`.

### Heroes
- **Home (bold)**: full gradient band (`--hero-gradient`) with gold glow, white
  text, gold primary CTA, translucent chips.
- **Secondary pages (light)**: shared `.page-hero` — tinted gradient band,
  `--line` border, `--radius-lg`, gradient accent bar (`--accent` → `--brand`),
  ink text. Used on About and Module.

## 5. Conventions

- Use tokens for spacing, radii, shadows, colors and weights. No magic numbers
  when a token exists.
- Keep all cards on the feature-card or content-card spec; don't invent new card
  chrome per page.
- Left-align body copy on feature pages (Home/About) for scannability; the base
  `.page` justifies text elsewhere.
- Accessibility: 44px tap targets, visible focus rings, `aria-hidden` on
  decorative icons/numbers, respect `prefers-reduced-motion`, real heading order.

## 6. Files

- `src/styles/tokens.css` — all design tokens.
- `src/styles/base.css` — element defaults, focus, a11y helpers.
- `src/styles/layout.css` — app shell (header, nav, main, footer).
- `src/styles/components.css` — shared components (buttons, cards, chips, quiz…).
- `src/styles/home.css` / `about.css` / `module.css` — page-specific composition.
- `src/components/ui/Icon.tsx` — inline icon set.
- `src/components/layout/ProgressCard.tsx` — shared progress panel.
