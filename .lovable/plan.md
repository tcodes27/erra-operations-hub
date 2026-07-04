## ERRA Style Guide Handoff + Retheme

Two deliverables in one pass: a self-contained style-guide doc, and a retheme of this showcase to match the ERRA visual system exactly.

### 1. New file — `STYLE_GUIDE.md` (project root)

Single markdown doc containing:
- Brand notes (name, tagline, logo/favicon guidance — note the PNG is not included; user must export from the private app)
- Typography rules (Inter 300–700, load via Google Fonts `<link>`, tailwind `fontFamily.sans`)
- Full HSL + hex color token tables (light + dark) as provided
- Chart palette
- Radius, shadow, theme system, icon set, component library notes
- Layout patterns (sticky nav, containers, mobile scroll strip, `.scrollbar-hide`)
- Keyframes (`accordion-down/up`, `fall`)
- **Ready-to-paste snippets**, verbatim:
  - `index.html` `<head>` block (fonts + title + description)
  - `index.css` `:root` + `.dark` token blocks (HSL form)
  - `tailwind.config.ts` fragment (darkMode, fontFamily, colors mapped to CSS vars, borderRadius, keyframes, `.scrollbar-hide` utility)
- Short "how to apply in a Vite + shadcn project" checklist

Doc is self-contained — a reader can paste it into a fresh project and reproduce the look without visiting this repo.

### 2. Retheme this showcase to match

Only presentation layer changes. No new sections, no content changes, no logic changes.

- **`src/styles.css`**
  - Replace current oklch teal/aurora tokens with the ERRA HSL tokens (light `:root` + `.dark`) exactly as specified
  - `--radius: 1rem`
  - Keep semantic mapping under `@theme inline` so all existing components pick up the new palette automatically
  - Update `--font-sans` to `"Inter", sans-serif`; remove `Space Grotesk` display font and the `--font-display` token (headings will use Inter too, per ERRA)
  - Replace `--gradient-aurora` / `--gradient-hero` / `--gradient-card` with subtle teal→cyan and warm-sand tints built from the new tokens (kept minimal — ERRA itself uses flat surfaces + soft shadows, not heavy gradients)
  - Keep utility classes (`gradient-text`, `surface-glass`, `shadow-elegant`, `mock-badge`) but recolored to new tokens
  - Add `.scrollbar-hide` utility

- **`src/routes/__root.tsx`**
  - Swap Google Fonts link to Inter `300;400;500;600;700` only (drop Space Grotesk)
  - Leave SEO/meta as-is (this is still the showcase, not the real product — do NOT adopt the real ERRA title/description, since the showcase disclaimer requires it stay clearly a showcase)

- **Section components** — no structural edits. Verify hero, nav, cards, and mock frames still read well against the new palette; adjust only inline utility classes if contrast breaks (e.g. swap a hardcoded gradient reference to the new token). No content rewrites.

### Constraints preserved

- Still a static showcase — no backend, no forms, no real ERRA screenshots, mock-badge visuals only
- Disclaimers in TopRibbon / About / Footer stay
- No provider names, schemas, secrets, or production code
- Logo PNG NOT added (user must export from private app); favicon stays default until they provide one

### Verification

- Build passes
- Playwright screenshot at 1280×1800 of hero + gallery to confirm teal `#00A3B3` primary, `#1F2033` text, `#DDBB8F` accent, 1rem rounded corners, Inter throughout
- Dark mode toggle still works with new dark tokens

### Post-build summary

- Files created / edited
- Confirmation that colors, radius, and font match the spec
- Placeholders remaining: logo PNG, favicon, contact email, social links
