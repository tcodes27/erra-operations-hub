# ERRA. Enterprise Resource & Response Automation.

> **Your business, running smoothly.**
>
> A multi tenant operations platform that consolidates request management, automation, integrations, and AI assistants into a single dashboard for small and mid sized businesses.

---

## About this repository

This repository is a **public portfolio showcase** for ERRA. It contains product documentation and screenshots only.

It does **not** include:

- Application source code
- Backend logic, edge functions, or API routes
- Database schemas, migrations, or RLS policies
- Automation blueprints or workflow engine internals
- OAuth client credentials, keys, or tokens
- Any customer or tenant data

The production ERRA product is private. This site exists so people can see what ERRA is, who it is for, how it is put together at a conceptual level, and what it looks like to use.

---

## Elevator pitch

ERRA is a multi tenant operations platform that gives small and mid sized businesses a single place to submit work requests, run pre built automations, connect the tools they already use, and let AI assistants handle repetitive customer conversations. Instead of stitching together five different SaaS tools with brittle no code glue, an operator gets one dashboard, one automation catalog, one integration hub, and one AI layer.

### Problem being solved

Most small operations teams live in tool sprawl. A booking app, an email sender, a form builder, a CRM, a chat widget, and three spreadsheets. Work falls through the cracks, automations break silently, and nobody knows which client asked for what. ERRA replaces that patchwork with one portal where requests, automations, integrations, analytics, and AI live together and stay auditable.

### Business value

- Cuts tool cost by consolidating 5 to 7 SaaS subscriptions into one.
- Cuts setup time. Automations are one click instead of a build.
- Creates an audit trail across every request, integration, and automation.
- Gives non technical operators AI leverage without hiring an AI engineer.

---

## What it does

- ITSM style request hub with a Kanban pipeline and threaded conversations
- One click automation library across communications, retention, and lead generation
- Integrations hub with OAuth and secure key based connections
- AI chatbot and voice assistant grounded in the tenant's own knowledge base
- Analytics for service performance and hours saved
- Multi tenant with role based access, row level security, and audit logging
- Full light and dark theme parity across every surface

## Who it is for

- Small service businesses (salons, medspas, clinics, agencies)
- Operations and IT teams that want ITSM style ticketing without enterprise cost
- Agencies and MSPs running automations for multiple clients
- Healthcare IT and utility ops teams that need audit ready workflows
- Solo founders who need one client facing portal that just works

---

## Full feature list

| Feature | Purpose |
| --- | --- |
| Request Hub | Central intake for all client and internal work |
| Kanban Active Requests | Visual pipeline of active, in review, and approved work |
| Backlog & Upcoming Queue | Not yet started work with a next in queue pin |
| Automation Library | Catalog of ready to deploy workflow templates |
| My Automations | Personal view of enabled automations with status |
| Integrations Hub | Connect 30 plus third party platforms |
| AI Chatbot | Conversational assistant grounded in your knowledge base |
| Voice AI | Voice based assistant for phone style interactions |
| Knowledge Base | Searchable public help content |
| Reports & Metrics | Analytics across requests, service performance, activity trends |
| Billing & Subscription | Plan management, payment methods, billing history |
| Resources Hub | Getting started guides, video tutorials, referral program |
| Notifications Center | Real time updates on requests and automations |
| Profile & Assets | User profile, brand assets, and account settings |
| Role based Access | Customer, admin, and system roles for multi tenant isolation |
| Light / Dark Mode | Theme toggle across the entire app |
| Admin Console | Operator side surface for customers, tickets, and the automation catalog |

---

## Screens

**Public / marketing**: Landing, Knowledge Base, Pricing Selection.

**Auth**: Login, Signup, Forgot Password, Email Verification.

**Customer app**: Dashboard, Submit Ticket, Active Requests (Kanban), Backlog, Active Request Detail, Automation Library, Automation Details Modal, Add Automation Modal, My Automations, Integrations Hub, AI Chatbot, Voice AI, Reports, Billing, Notifications, Profile & Assets, Resources Hub.

**Admin console**: Admin Dashboard, Admin Customers, Admin Tickets, Admin Automations, Admin Automations Catalog, Admin Automation Import.

Four sanitized screens are embedded on the showcase site itself:

- Customer dashboard
- Active requests Kanban
- Upcoming requests queue
- Submit new request

---

## User journeys

### First time user

1. Lands on the marketing page, clicks Get Started.
2. Signs up with email, verifies, picks a plan.
3. Arrives at the personalized dashboard with KPI cards and quick actions.
4. Opens Integrations Hub and connects the tools they already use.
5. Opens the Automation Library, previews a sequence, adds it to their account.
6. Submits a first request describing what they need built.

### Daily use

1. Checks the dashboard for active request count, backlog, and hours saved.
2. Works the Active Requests Kanban.
3. Reviews notifications for automation status changes.
4. Hands off customer conversations to the AI chatbot or Voice AI.
5. Visits Reports for service performance and activity trends.
6. Manages plan and payment from Billing when needed.

### Operator (admin)

1. Signs in to the admin console.
2. Reviews new customers, incoming tickets, and automation catalog health.
3. Adds or updates automation templates in the catalog.
4. Handles requests that need operator input.

---

## Conceptual architecture

Five layers, one flow.

1. **Client layer**. A single page web app the user interacts with.
2. **Managed backend**. Handles auth, stores tenant data with row level isolation, and hosts small server side functions for privileged actions.
3. **Automation execution layer**. An external workflow engine runs the actual steps of each automation on a signed trigger.
4. **AI layer**. A managed LLM gateway powers the chatbot, voice assistant, and knowledge grounded answers.
5. **Integration layer**. A registry of third party platforms connected via OAuth or secure key entry. Tokens are stored server side and never exposed to the browser.

**Request flow**: user → client → managed backend → (workflow engine or AI gateway or integration provider) → back to the user in real time.

No database schemas, table names, API routes, edge function names, webhook payloads, or automation blueprints are included by design.

---

## Technology overview (high level)

- **Frontend**: React + TypeScript SPA, Vite based toolchain.
- **UI system**: Tailwind CSS, Radix primitives, shadcn components, semantic design tokens, light and dark themes.
- **State & data**: TanStack Query for server state, React Hook Form with schema validation for forms.
- **Backend**: Managed serverless backend, small server side functions for privileged actions.
- **Database**: Managed PostgreSQL with strict per tenant isolation.
- **Authentication**: Managed auth provider with email verification and password reset.
- **AI layer**: Managed LLM gateway for chat completions and embeddings, plus a voice AI channel.
- **Automation execution**: External managed workflow engine reached via signed webhooks.
- **Integrations**: OAuth 2.0 where supported, secure key entry where not.
- **Hosting**: Cloud hosted static frontend and managed backend services.
- **Security**: Row level security, role based access via a dedicated roles table, audit logging on integration changes, bot protection on public forms.

No project IDs, URLs, keys, endpoints, region names, provider IDs, or configuration values are included by design.

---

## Suggested demo flow

1. Open the landing page and scroll the feature strip.
2. Peek at the knowledge base.
3. Sign in to a demo account.
4. Land on the dashboard. Notice KPI cards and quick actions.
5. Open the Automation Library. Filter by industry. Open one card and read the full sequence.
6. Add an automation to see the confirm and enable flow.
7. Visit the Integrations Hub. Browse OAuth versus key based options.
8. Submit a new request from the Requests Hub.
9. Open Active Requests. Click a card. Read the conversation panel.
10. Open Reports. Switch between Week, Month, Quarter, Year.
11. Open AI Chatbot. See live stats and configuration.
12. Finish at Billing. See plan, cycle, and next billing date.

---

## About this showcase site

### Design and accessibility

- Modern SaaS aesthetic with a teal brand primary, soft radial gradients on hero and contact sections, and generous whitespace.
- Full parity between light and dark mode, controlled by a header toggle (persisted in `localStorage` as `erra-theme`).
- Semantic tokens (defined in `src/styles.css`) drive every color, radius, shadow, and gradient. No hard coded hex values live in components.
- Every image has a descriptive `alt`, every interactive element has a visible focus ring, headings follow a strict H1 → H2 → H3 tree, and scroll behavior respects the user's OS scroll settings.

### Tech stack of this repo

- TanStack Start v1 (React 19, Vite 7, SSR ready)
- Tailwind CSS v4 with `@theme` tokens in `src/styles.css`
- shadcn + Radix primitives, lucide icons
- Screenshots hosted on the Lovable CDN via `.asset.json` pointers

### Project structure

```
src/
  assets/                        CDN pointers for logo and product screenshots
    erra-logo.png.asset.json
    erra-dashboard.png.asset.json
    erra-requests-active.png.asset.json
    erra-requests-upcoming.png.asset.json
    erra-submit-request.png.asset.json
  components/site/
    theme-provider.tsx           Light/dark theme context and toggle wiring
  components/ui/                 shadcn primitives (accordion, card, badge, ...)
  routes/
    __root.tsx                   Root shell, head metadata, providers
    index.tsx                    The full showcase page (all 13 sections)
  styles.css                     Tailwind v4 tokens, gradients, utilities
STYLE_GUIDE.md                   Design tokens and ready to paste snippets
README.md                        This file
```

### Local development

```bash
bun install
bun dev
```

Dev server runs on port 8080.

### Swapping or adding a screenshot

Screenshots live on the Lovable CDN and are referenced through pointer JSON in `src/assets/`. To add or replace one:

```bash
lovable-assets create \
  --file /path/to/screenshot.png \
  --filename erra-new-screen.png \
  > src/assets/erra-new-screen.png.asset.json
```

Then import the pointer inside `src/routes/index.tsx`:

```tsx
import newScreen from "@/assets/erra-new-screen.png.asset.json";
<img src={newScreen.url} alt="ERRA new screen description" />
```

---

## Contributor request

This showcase is a living portfolio piece. Contributions are welcome in four areas:

- **Design**. Refine visual system, motion, and accessibility.
- **Content**. Improve copy, add case studies, expand the knowledge base narrative.
- **QA**. Audit accessibility, cross browser behavior, and reduced motion support.
- **Case studies**. Share how you would apply ERRA in your operation.

Contributions are documentation and design only. This repo does not accept feature code for the production product.

---

## Contact

- Email: [tierrabcodes@gmail.com](mailto:tierrabcodes@gmail.com)
- Handles: **@tcodes27** on Instagram, TikTok, and X
- Contributor requests: [tierrabcodes@gmail.com](mailto:tierrabcodes@gmail.com?subject=ERRA%20contributor%20request)

---

## License

Documentation and screenshots in this repository are shared for portfolio purposes. Suggested license for the docs: Creative Commons Attribution NonCommercial 4.0. Please do not republish the screenshots or copy without attribution. All ERRA brand marks and product screens remain the property of the ERRA team.
