## Rebuild the showcase around real ERRA

Throw out the invented mock frames. The 9 uploaded screenshots become the source of truth for what the page shows and what the copy says. No em-dashes anywhere (I'll sweep the whole project). No fabricated UI, no "conceptual platform" hedging.

### What ERRA actually is (from the screenshots)

An automation platform for service-based businesses. The product has a clear surface area, visible across the 9 screenshots:

1. **Requests Hub** (kanban: Active / Waiting on Review / Approved & Signed Off) with a conversation drawer per request.
2. **Automation Library** (246 prebuilt automations, tagged Communication / Retention / Lead Gen, delivered via SMS / Email / Chatbot / AI). Each automation opens a modal showing the full trigger, action, follow-up, review request, re-engagement sequence, plus a "How This Helps Your Business" panel with a conversion goal.
3. **Integrations Hub** (37 platforms, filterable by industry / type / category). Instagram, Google, Facebook, TikTok, YouTube, Threads, etc.
4. **AI Tools** (Chatbot + Voice AI submenu). Chatbot page shows active conversations, response time, satisfaction rate, and chatbot configuration (training data, response templates, integration channels).
5. **Reports & Metrics** dashboard (Total / Active / Completed / Backlog counts, Top Request Type, Service Performance, Activity Trend, Performance Overview chart with week/month/quarter/year toggle).
6. **Account & Resources** (Billing & Subscription with plan/cycle/next billing date/payment method/history; Resources Hub with Getting Started, Video Tutorials, Support Chat, Refer a Friend).

Top nav across every screen: Dashboard, Requests Hub, Automation Library, AI Tools, Account & Resources, with a notification bell, theme toggle, and Sign Out.

### 1. Upload the 9 screenshots as CDN assets

Use the sandbox `lovable-assets` CLI on each `/mnt/user-uploads/Screenshot_*.png` and write `src/assets/erra-<slug>.png.asset.json` for each. Slugs:

- `erra-requests-hub` (kanban + conversation drawer)
- `erra-integrations-hub`
- `erra-ai-chatbot` (with AI Tools dropdown open)
- `erra-resources-hub`
- `erra-billing`
- `erra-reports-metrics`
- `erra-automation-modal-benefit` (How This Helps)
- `erra-automation-modal-sequence` (Botox Touch-Up Due sequence)
- `erra-automation-library` (246 automations grid)

Screenshots are used as-is (they already anonymize / show generic client data). No blurring pass this round.

### 2. Restructure the showcase page

Replace the current invented mock layout in `src/routes/index.tsx` with a section stack driven by the real screenshots:

1. **Top ribbon**: keep, retitle to "Portfolio showcase of ERRA, a live SaaS product. Screens shown are the real product." Remove any "conceptual" wording.
2. **Hero**: name + tagline "Your business, running smoothly." One-paragraph explainer: ERRA is an automation platform for service-based businesses (studios, clinics, agencies, med-spas, salons). It handles client intake, follow-ups, reviews, re-engagement, chatbot + voice AI, and 37 platform integrations from one dashboard. CTA row: "See the product" (scrolls to gallery), "Get in touch" (mailto placeholder).
3. **What it is**: 3 short pillars pulled from the screenshots, no em-dashes:
   - Prebuilt automation library (246 flows, SMS + Email + Chatbot + AI)
   - Client Requests Hub (kanban + conversation, so nothing gets dropped)
   - AI Tools (chatbot and voice AI trained on your business)
4. **How it works** (simple 4-step strip, not a fake diagram):
   1. Client triggers an event (books, submits form, IG DM, missed appt).
   2. ERRA runs the matching automation from the library.
   3. Follow-up, review request, re-engagement happen automatically.
   4. Everything lands in the Requests Hub with full conversation history.
5. **Product tour** (the main section): 6 titled screenshot cards, one per real screen, in a responsive 2-column layout. Each card = large screenshot + short caption naming the surface and what the operator does there.
   - Reports & Metrics dashboard
   - Requests Hub with conversation
   - Automation Library (246 flows)
   - Automation detail (sequence + business impact)
   - Integrations Hub (37 platforms)
   - AI Chatbot workspace
   - Billing and Resources (two small tiles sharing one row)
6. **Integrations strip**: text-only chip list of the platform names visible in the Integrations Hub screenshot (Instagram, Google, Facebook, TikTok, YouTube, Threads, plus "and 31 more"). No third-party logos.
7. **About / contact**: short bio (founder-built, service-business focus), one contact link, note that ERRA is a live SaaS available by invite, this page is a public showcase.
8. **Footer**: minimal, product name + year + showcase disclaimer.

Remove all existing invented UI mocks (fake dashboards, fake cards, fake chart SVGs). Delete unused section components introduced in the previous pass.

### 3. Copy pass: remove every em-dash

Sweep the whole project (`src/**`, `STYLE_GUIDE.md`, `.lovable/plan.md`, `src/routes/__root.tsx`) and replace every em-dash (`—`) and en-dash used as punctuation (`–`) with either a period, comma, colon, or the word "to" depending on context. Numeric ranges like "24 to 48 hours" spelled out. Verify with a repo-wide search that returns zero matches before finishing.

### 4. Metadata

Update `src/routes/__root.tsx` head to:
- title: "ERRA. Automation for service-based businesses."
- description: "ERRA is an automation platform for service-based businesses. Client intake, follow-ups, reviews, chatbot, voice AI, and 37 integrations from one dashboard. Public showcase."
- og:title / og:description match.
- og:image left unset (no meaningful hero image beyond the product screenshots, which are not safe as an OG since they contain UI-only detail).

### 5. Verify

- Playwright at 1280x1800 captures the full page, then a second pass at 390x844 for mobile. Confirm every screenshot loads (CDN URL, not 404), captions render, no em-dashes visible.
- Repo grep for `—` and `–` returns zero.
- Build passes.

### Not doing this round

- No screenshot blurring or redaction.
- No real ERRA logo (still need the PNG from you; keeps the wordmark "ERRA" text-only for now).
- No backend, no forms, no email capture.
- No integration logos (name-only chips).

### What I still need from you (only if you want changes to the above)

- Contact email or link to use in About / footer (otherwise I leave a `mailto:` placeholder).
- Confirmation the 9 screenshots are OK to publish as-is, or a list of any you want swapped out.
