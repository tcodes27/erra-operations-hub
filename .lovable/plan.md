## Problem

All 13 product images plus the logo are served from Lovable's CDN via `.asset.json` pointers whose URLs start with `/__l5e/assets-v1/...`. That path only exists on Lovable's preview/publish hosting. On Cloudflare Pages the browser requests `https://<your-site>.pages.dev/__l5e/...` and gets 404 — that's why the logo and screenshots don't render after deploy.

The favicon is already correct (`public/favicon.png`, referenced as `/favicon.png` in `__root.tsx`).

## Fix

Download every asset from the Lovable CDN into `public/` with clean, lowercase, hyphenated filenames, then reference them as absolute `/…` paths. This is the Cloudflare-safe approach and requires no bundler magic.

### Files to add under `public/`

Downloaded from each `.asset.json` `url` and saved as:

```text
public/
  favicon.png                          (already present)
  logo.png                             (from erra-logo.png)
  screenshots/
    dashboard.png
    requests-hub.png
    requests-active.png
    requests-upcoming.png
    submit-request.png
    integrations-hub.png
    resources-hub.png
    reports-metrics.png
    billing.png
    ai-chatbot.png
    automation-library.png
    automation-sequence.png
    automation-benefit.png
```

All names are lowercase, hyphenated, no spaces or special characters.

### Code changes

1. `src/routes/index.tsx`
   - Remove the 14 `import … from "@/assets/erra-*.png.asset.json"` lines.
   - Replace every `xxxAsset.url` reference with the matching `/logo.png` or `/screenshots/<name>.png` string literal. No JSX structure, styling, or copy changes.

2. `src/routes/__root.tsx`
   - No change. Favicon already points at `/favicon.png`.

3. Delete the now-unused `src/assets/erra-*.png.asset.json` pointer files (14 files). These would otherwise keep the images pinned to the Lovable CDN and confuse future edits. The CDN objects themselves are left intact (they may still be referenced by previous deploys/previews).

### Verification

- Run `bun run build` and confirm the build passes.
- Confirm `dist/` (or the Cloudflare output dir) contains `logo.png`, `favicon.png`, and every file under `screenshots/`.
- `rg "__l5e|\.asset\.json" src public index.html` must return zero matches after the change.

### Out of scope

- No design, layout, copy, or component-structure changes.
- No changes to routing, metadata text, or theme.
- No changes to files not listed above.
