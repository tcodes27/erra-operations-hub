## Rebuild ERRA showcase with the 4 real screenshots

The user uploaded 4 actual ERRA app screenshots. I'll use these as the source of truth for the showcase (no invented UI, no em/en dashes).

### Screenshots to embed (via `lovable-assets` from `/mnt/user-uploads/`)
1. **Dashboard** — "Welcome back, Lena Horn" with Active Request / Backlog / Reports cards, Quick Actions, Get Started checklist.
2. **Requests Hub — Active Requests** — Kanban board (Active / Waiting on Review / Approved & Signed Off) with request card.
3. **Requests Hub — Upcoming Requests** — Queue view with "Next in Queue" and "Set Next" controls.
4. **Submit New Request** — Form with Type of Request, description, attachments, source.

All 4 will be uploaded through the asset CLI and imported as pointer JSON (no binaries in repo).

### Page structure (`src/routes/index.tsx`)

```text
Header: ERRA wordmark (text), nav anchors (Product, How it works, Features, Contact)
Hero:
  H1: "ERRA"
  Tagline: "Your business, running smoothly."
  Sub: "Automation for service based businesses. Submit a request, we build the workflow, your business keeps moving."
  CTA: "Request access" (mailto placeholder)
  Hero visual: Dashboard screenshot in a browser frame
What it is (3 short value props, no dashes):
  Focused request queue. Prebuilt automations. AI tools that actually ship.
How it works (3 steps, numbered, no diagram unless requested later):
  1. Submit a request  2. We build and review  3. Approve and go live
  Visual: Submit New Request screenshot beside the steps
Features (4 cards, each with a real screenshot):
  - Dashboard: at a glance status of every request
  - Requests Hub, Active board: track work across Active / Waiting on Review / Approved
  - Requests Hub, Upcoming queue: control what ships next
  - Submit New Request: structured intake with attachments and source
Who it is for:
  Short paragraph on service based businesses (salons, clinics, agencies, studios).
Contact:
  Single line + mailto placeholder button. No form.
Footer:
  ERRA. Copyright. Contact link.
```

### Rules kept from previous turn
- No em dashes or en dashes anywhere (project-wide sweep already done, will re-verify).
- No logos beyond the ERRA wordmark until a PNG is provided.
- No invented UI mocks. Only the 4 real screenshots as the visual proof.
- Static site, no backend, anchor navigation within `/`.
- SEO metadata in `__root.tsx` stays "ERRA — Automation for service based businesses" (rewritten without dashes: "ERRA. Automation for service based businesses.").

### Files touched
- `src/routes/index.tsx` — rebuilt around the 4 screenshots and the copy above.
- `src/assets/erra-dashboard.png.asset.json`, `erra-requests-active.png.asset.json`, `erra-requests-upcoming.png.asset.json`, `erra-submit-request.png.asset.json` — new asset pointers.
- `src/routes/__root.tsx` — title/description tightened, no dashes.
- `STYLE_GUIDE.md` — leave as is (already updated).

### Not doing (unless you ask)
- No "how it works" diagram (you said maybe one later).
- No blurring of the screenshots (they show demo data "Lena Horn" / "Landing Page" / "review the data", which reads as safe demo content). Tell me if you want any panels blurred.
- No contact email wired in until you give one; `mailto:hello@erra.app` placeholder.

Approve and I'll build it.
