## Rebuild ERRA showcase as a full 13-section portfolio site + expanded README

Treat the pasted export as the sole source of truth. Nothing outside it gets invented, no backend/auth/API/DB is generated, and no proprietary internals leak.

### Route architecture
Keep it a single scrolling page at `/` with anchor navigation (matches "showcase" intent and lets the whole story be shared with one link). Every section gets a stable `id` for anchor links. `__root.tsx` metadata updated: title "ERRA. Enterprise Resource & Response Automation.", description from the elevator pitch.

### Page structure (`src/routes/index.tsx`, rebuilt)
1. **Header** — logo (existing `erra-logo.png`), anchor nav (Product, Features, Screens, Architecture, FAQ, Contact), theme toggle (keep existing Sun/Moon), "Contact" CTA.
2. **Hero** — full-name "Enterprise Resource & Response Automation", tagline "Your business, running smoothly.", elevator sub-copy, two CTAs ("See the product" scroll, "Contact" mailto), soft-gradient background using the teal brand tokens, hero visual = existing dashboard screenshot in a browser frame.
3. **Product Overview** — 2-column: elevator pitch on the left, 4 stat/value pills on the right (consolidates 5–7 tools, ITSM-style, AI-native, multi-tenant).
4. **Why it Exists** — problem statement (tool sprawl) rendered as a "before vs. after" split: left card lists the 5–7 disconnected tools, right card lists the one ERRA dashboard. Under it, the "Target audience" bullets as 5 small chips.
5. **Feature Highlights** — top 8 features from the export as a bento grid (2×4) with lucide icons, each with the "Purpose" as title and "User benefit" as body. All 17 features rendered below in a compact 3-column table.
6. **Screenshots Gallery** — 4 real screenshots we already have (dashboard, requests active, requests upcoming, submit request) in a responsive gallery with captions from the "Suggested screenshot title" column. Include a small note: "More screens listed below" that links to the Screens Map section. Under the gallery: **Screens Map** — a compact table listing all Public / Auth / Customer / Admin screens from the export, grouped, so viewers see the full surface without needing images for every one.
7. **Demo Walkthrough** — the 12-step "Suggested Demo Flow" as a numbered vertical stepper on the left, and the "First-time user journey" as a parallel timeline on the right. No live demo, just the narrated flow.
8. **Architecture Overview** — the conceptual 5-layer description rendered as 5 stacked cards (Client → Managed backend → Automation execution → AI layer → Integration layer) with the one-line "request flow" underneath: `user → client → managed backend → (workflow / AI / integration) → user`. Explicit disclaimer paragraph copied verbatim: "No database schemas, table names, API routes, edge-function names, webhook payloads, or automation blueprints are included by design."
9. **Technology Stack** — the high-level list rendered as grouped cards: Frontend, UI System, State & Data, Backend, Database, Auth, AI, Automation, Integrations, Hosting, Security. Each card shows only the plain-English label from the export (e.g. "Managed Postgres with row-level security"), no vendor endpoints or IDs.
10. **FAQ** — 6–8 Q&As distilled from the export, using a shadcn `Accordion`:
    - What is ERRA?
    - Who is it for?
    - How is it different from stitching Zapier + Zendesk + a CRM?
    - Is this the production app? (No, portfolio showcase.)
    - What tech does it use? (Points to Tech Stack section.)
    - How does data stay isolated between tenants?
    - Does it have AI? Voice too?
    - Can I try it? (Contact for access.)
11. **About the Project** — the "Portfolio Description" block verbatim (long + LinkedIn one-liner), plus a note that the showcase repo intentionally ships docs and screenshots only.
12. **Contributor Request** — card with heading "Interested in contributing?", short paragraph inviting design/content/QA/case-study contributors, `mailto:tierrabcodes@gmail.com?subject=ERRA%20contributor%20request` button, and the `@tcodes27` handle line.
13. **Contact** — email + socials, "Request access" CTA (mailto).
14. **Footer** — logo, copyright, email, `@tcodes27`, small "This is a public showcase. The product itself is private." disclaimer.

### Design system tweaks
- Add soft-gradient utilities to `src/styles.css` under `@theme`: `--gradient-hero` (teal to background), `--gradient-card` (subtle surface), `--shadow-elevated`. Use the existing teal primary; no new palette invented.
- Accessibility: every anchor has visible focus ring, all images have descriptive alt text, gallery is keyboard-navigable, color contrast passes on both themes, headings are a single H1 + semantic H2/H3 tree.
- Motion: subtle fade-up on scroll for section headings only (respects `prefers-reduced-motion`).
- No new npm dependencies. Use existing shadcn `Accordion`, `Card`, `Badge`, lucide icons.

### Screenshot handling
Use the 4 CDN pointers already in `src/assets/` (dashboard, requests active, requests upcoming, submit request). Do not fabricate additional UI mocks for screens we don't have images for — those live in the Screens Map table only.

### README rewrite (`README.md`, replace current)
Replace with a comprehensive doc based on the export:
- Header + tagline + elevator pitch
- Public showcase disclaimer (no code, no backend, no schemas)
- What it does (bullet list, verbatim from export)
- Who it's for
- Feature list (all 17)
- Screens (public / customer / admin, grouped)
- User journey (first-time, daily, operator)
- Architecture (5 layers)
- Technology overview (high level, no IDs)
- Demo walkthrough (12 steps)
- Design and accessibility notes for the showcase site
- Project structure of THIS repo (routes, assets, components, styles)
- Local development (`bun install`, `bun dev`)
- How to swap screenshots (lovable-assets CLI, one command)
- Contributor request section
- Contact (email + `@tcodes27`)
- License note: docs-only, CC-BY-NC 4.0 suggestion (do not add a LICENSE file unless requested)
No em/en dashes in body copy (compound hyphens are fine).

### Restrictions honored
- No source code samples that resemble production ERRA.
- No table names, RLS policies, edge-function names, webhook URLs, provider IDs, model names.
- No `.env`, no API keys, no client IDs.
- No auth pages, no login form, no database wiring.
- All copy is marketing/documentation only.

### Files touched
- `src/routes/index.tsx` — full rebuild.
- `src/routes/__root.tsx` — title + description update.
- `src/styles.css` — add gradient / shadow tokens.
- `README.md` — full rewrite.
- No new assets, no new packages.

Approve and I'll build it in one pass.
