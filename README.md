# ERRA Showcase

Public showcase site for **ERRA**, an automation platform for service based businesses.

> Your business, running smoothly.

This repository is a static marketing site that shows what ERRA looks like and how it works using real product screenshots. It does not include the ERRA product itself, its backend, or any private workflow logic.

## What ERRA is

ERRA is a business automation platform built for service based businesses (salons, clinics, agencies, studios). Owners submit a request, the ERRA team builds the workflow, and it ships into the business's day to day operations.

Core surfaces shown on the site:

- **Dashboard** — at a glance status of every request, backlog, and hours saved.
- **Requests Hub, Active board** — Active, Waiting on Review, Approved and Signed Off.
- **Requests Hub, Upcoming queue** — control what ships next with a Next in Queue marker.
- **Submit New Request** — structured intake with type, description, attachments, and source.

## Contact

- Email: [tierrabcodes@gmail.com](mailto:tierrabcodes@gmail.com)
- Socials: **@tcodes27** on Instagram, TikTok, and X

## Tech stack

- **Framework**: TanStack Start v1 (React 19, Vite 7, SSR ready)
- **Styling**: Tailwind CSS v4 with semantic design tokens in `src/styles.css`
- **UI**: shadcn + Radix primitives, lucide icons
- **Theme**: light and dark, toggled from the header (persisted in `localStorage` as `erra-theme`)
- **Fonts**: Inter, loaded via `<link>` in `src/routes/__root.tsx`
- **Assets**: real product screenshots hosted on the Lovable CDN via `.asset.json` pointers in `src/assets/`

## Project structure

```
src/
  assets/                       CDN pointers for the logo and product screenshots
    erra-logo.png.asset.json
    erra-dashboard.png.asset.json
    erra-requests-active.png.asset.json
    erra-requests-upcoming.png.asset.json
    erra-submit-request.png.asset.json
  components/site/
    theme-provider.tsx          Light/dark theme context + toggle wiring
  routes/
    __root.tsx                  Root shell, head metadata, providers
    index.tsx                   The showcase landing page (Hero, Value props, How it works, Features, Contact, Footer)
  styles.css                    Tailwind v4 theme tokens
STYLE_GUIDE.md                  Design tokens and ready to paste snippets
```

## Local development

```bash
bun install
bun dev
```

The dev server runs on port 8080.

## Adding or updating screenshots

Screenshots are stored on the Lovable CDN and referenced through pointer JSON in `src/assets/`. To swap or add one:

```bash
lovable-assets create --file /path/to/screenshot.png --filename erra-new-feature.png \
  > src/assets/erra-new-feature.png.asset.json
```

Then import the pointer in `src/routes/index.tsx`:

```tsx
import newFeature from "@/assets/erra-new-feature.png.asset.json";
<img src={newFeature.url} alt="ERRA new feature" />
```

## Notes

- No backend, database, or authentication is wired in. This site is purely a static showcase.
- Anchor navigation is used within `/` (Product, How it works, Features, Contact) so the whole story lives on one scrolling page.
- Copy is written without em or en dashes on purpose.
- The full visual system (colors, spacing, radius, shadow, motion) is documented in [STYLE_GUIDE.md](./STYLE_GUIDE.md).

## License

All rights reserved. ERRA and its screenshots are the property of the ERRA team.
