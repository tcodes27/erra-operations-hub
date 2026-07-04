## Wire real contact + strip all dashes

### Contact updates
Replace the `mailto:hello@erra.app` placeholder everywhere with real details:
- Email: `tierrabcodes@gmail.com` (used in `mailto:` links and shown as text)
- Social handle: `@tcodes27` (shown as the handle across platforms, e.g. "Find us @tcodes27 on Instagram, TikTok, X")

In `src/routes/index.tsx`:
- Update the `CONTACT` constant to `mailto:tierrabcodes@gmail.com`.
- Contact section: show the email address as visible text under the "Request access" button, and add a line "Find us @tcodes27 on Instagram, TikTok, and X."
- Footer: add the email + `@tcodes27` handle alongside the existing copyright.

### Strip all dashes (em, en, and stray hyphens used as punctuation)
Sweep every text-bearing file for `—` (em dash), `–` (en dash), and hyphens used as sentence punctuation (e.g. " - "), and rewrite each occurrence with a period, comma, or "to" as the sentence requires. Compound words like "service-based", "step-by-step", "72-hour" keep their hyphens (those are word joiners, not AI dashes).

Files to sweep:
- `src/routes/index.tsx`
- `src/routes/__root.tsx`
- `src/routes/README.md`
- `STYLE_GUIDE.md`
- `.lovable/plan.md`
- Any other `src/**/*.{tsx,ts,md}` that turns up via `rg -n "—|–"`.

### Not changing
- Layout, screenshots, styling, SEO structure.
- Compound hyphens inside real words (`service-based`, `step-by-step`, `72-hour`, `at-a-glance`).

Approve and I'll ship it.
