## ERRA Public Showcase — Static One-Page Site

Build a polished static one-page showcase for ERRA. Not the production app; no reusable production code.

### Files to create/modify

- `src/styles.css` — teal + aurora token system (light/dark), gradients, shadows, `Space Grotesk` + `Inter` font stacks, utility classes (`gradient-text`, `surface-glass`, `mock-badge`).
- `src/routes/__root.tsx` — Google Fonts `<link>` tags, ThemeProvider wrap, SEO defaults, `<Outlet />` intact.
- `src/routes/index.tsx` — full one-page composition with rich `head()` (title, description, og:*, twitter:card) and anchor sections.
- `src/components/site/theme-provider.tsx` — light/dark toggle w/ localStorage.
- `src/components/site/*` — one file per section (see below).
- `src/assets/hero-abstract.jpg` — decorative aurora gradient only (already exists, reuse).

### Sections (in order)

1. **TopRibbon** — "Public showcase · Not the production source code" disclaimer.
2. **StickyNav** — ERRA wordmark + anchor links + theme toggle.
3. **Hero** — headline, subhead, two pill CTAs (`#contributor`, `#demo`), aurora backdrop.
4. **ProductOverview** — plain-language description based on the approved public-safe export.
5. **WhyItExists** — problem/motivation narrative.
6. **FeatureHighlights** — capability cards (icons + short copy), no counts like "30+".
7. **ScreenshotsGallery** — stylized mock browser/app frames rendered in pure CSS/SVG, each with a visible "Mock showcase visual" badge. No traced UI from real screenshots.
8. **DemoWalkthrough** — numbered step list describing a conceptual user journey.
9. **ArchitectureOverview** — conceptual 5-layer SVG diagram (Client · Presentation · Application · Data · Integrations), no vendor names or schemas.
10. **TechnologyStack** — generic category chips (Frontend, Styling, State, Routing, Backend Runtime, Data Layer, Auth Pattern, AI Layer), no provider/model names, no secrets.
11. **FAQ** — accordion, public-safe answers.
12. **AboutTheProject** — background, scope, status.
13. **Contact** — static section with placeholder `mailto:` and social `#` links (no form, no backend).
14. **ContributorRequest** — how to get involved, placeholder GitHub link.
15. **Footer** — repeat disclaimer, copyright, small nav.

### Content rules (hard constraints)

- Wording is **based on the approved public-safe export** (not "verbatim").
- **Mock showcase visuals only** — every gallery/preview image carries a visible "Mock showcase visual" badge.
- **No** provider names, model names, table names, schemas, endpoints, env var names, blueprint terms, real emails, `localhost`, `127.0.0.1`, `.env`, or numeric brags like "30+".
- **No** backend, auth, database, forms, APIs, edge functions, or Cloud enablement.
- **No** reused production code — everything authored fresh for this showcase.
- Strong non-production disclaimer in TopRibbon, About, and Footer.

### Design

- Teal primary `oklch(0.62 0.13 200)`, aurora indigo→teal accent gradient, soft pastel card washes, navy ink text, 14px rounded corners, pill buttons, generous whitespace.
- `Space Grotesk` headings, `Inter` body — loaded via `<link>` in `__root.tsx` head (never `@import` remote in `styles.css`).
- Fully semantic tokens; no hardcoded colors in components. Light + dark themes. WCAG AA.

### Verification

- Playwright screenshots at 1280×1800 and 390×844 of hero, gallery, architecture, contributor sections.
- Confirm build passes, no console errors, anchor nav scrolls correctly, theme toggle works.

### Post-build summary to user

- Files created (list)
- Sections included (list)
- Placeholders to replace: GitHub URL, LinkedIn URL, contact email, real imagery if desired
- Explicit confirmation: no private implementation details, provider names, schemas, secrets, or production code included
