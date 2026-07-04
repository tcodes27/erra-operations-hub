import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  Mail,
  Moon,
  Sun,
  LayoutDashboard,
  Inbox,
  KanbanSquare,
  ListOrdered,
  Sparkles,
  Puzzle,
  Bot,
  Mic,
  BookOpen,
  BarChart3,
  CreditCard,
  Bell,
  UserCircle,
  Shield,
  SunMoon,
  Users,
  Boxes,
  Cloud,
  Database,
  Lock,
  Cpu,
  Workflow,
  Plug,
  Palette,
  CheckCircle2,
  Handshake,
  Github,
  Instagram,
} from "lucide-react";
import { useTheme } from "@/components/site/theme-provider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import logoAsset from "@/assets/erra-logo.png.asset.json";
import dashboardAsset from "@/assets/erra-dashboard.png.asset.json";
import requestsActiveAsset from "@/assets/erra-requests-active.png.asset.json";
import requestsUpcomingAsset from "@/assets/erra-requests-upcoming.png.asset.json";
import submitRequestAsset from "@/assets/erra-submit-request.png.asset.json";

export const Route = createFileRoute("/")({
  component: Landing,
});

const EMAIL = "tierrabcodes@gmail.com";
const HANDLE = "@tcodes27";
const CONTACT = `mailto:${EMAIL}`;
const CONTRIBUTE = `mailto:${EMAIL}?subject=ERRA%20contributor%20request`;

/* ------------------------------------------------------------------ */
/*  Primitives                                                        */
/* ------------------------------------------------------------------ */

function BrowserFrame({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <div className="flex items-center gap-1.5 border-b border-border bg-muted/50 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
      </div>
      <img src={src} alt={alt} className="block w-full" loading="lazy" />
      {caption ? (
        <figcaption className="border-t border-border bg-muted/30 px-4 py-2 text-xs text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mock-badge">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">{title}</h2>
      {intro ? <p className="mt-4 text-muted-foreground">{intro}</p> : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Header                                                            */
/* ------------------------------------------------------------------ */

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

function Wordmark() {
  return (
    <a href="#top" className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded" aria-label="ERRA home">
      <img src={logoAsset.url} alt="ERRA" className="h-8 w-auto md:h-10" />
    </a>
  );
}

const NAV = [
  { href: "#product", label: "Product" },
  { href: "#features", label: "Features" },
  { href: "#screens", label: "Screens" },
  { href: "#architecture", label: "Architecture" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 surface-glass">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Wordmark />
        <nav aria-label="Primary" className="hidden items-center gap-7 text-sm font-medium text-muted-foreground lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={CONTACT}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-elegant transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Contact <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                              */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border/60 gradient-hero">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-24 md:pb-28 md:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mock-badge">Public showcase, not the production app</p>
          <h1 className="mt-6 text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            <span className="gradient-text">ERRA</span>
            <span className="block text-2xl font-semibold text-muted-foreground md:text-3xl mt-3">
              Enterprise Resource & Response Automation
            </span>
          </h1>
          <p className="mt-6 text-xl font-medium text-foreground md:text-2xl">
            Your business, running smoothly.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            One dashboard for request management, automations, integrations, and AI assistants.
            Built for small and mid-sized service teams who are tired of stitching five tools
            together with brittle no code glue.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#product"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-elegant transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Explore the product <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={CONTACT}
              className="inline-flex items-center rounded-full border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Request access
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-5xl">
          <BrowserFrame src={dashboardAsset.url} alt="ERRA customer dashboard with KPI cards, quick actions, and getting started checklist" />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Product Overview                                                  */
/* ------------------------------------------------------------------ */

function ProductOverview() {
  const stats = [
    { k: "5 to 7", v: "SaaS tools consolidated into one dashboard" },
    { k: "ITSM", v: "Request hub with Kanban, threads, and audit trail" },
    { k: "AI native", v: "Chatbot and voice assistant grounded in your KB" },
    { k: "Multi tenant", v: "Row level security and role based access" },
  ];
  return (
    <section id="product" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-5 lg:items-center">
          <div className="lg:col-span-3">
            <SectionHeader
              eyebrow="Product overview"
              title="A single pane of glass for operations"
              align="left"
            />
            <p className="mt-6 text-muted-foreground">
              ERRA is a multi tenant operations platform that gives small and mid sized businesses
              a single place to submit work requests, run pre built automations, connect the tools
              they already use, and let AI assistants handle repetitive customer conversations.
            </p>
            <p className="mt-4 text-muted-foreground">
              Instead of stitching together a booking app, an email sender, a form builder, a CRM,
              a chat widget, and three spreadsheets, an operator gets one dashboard, one automation
              catalog, one integration hub, and one AI layer.
            </p>
          </div>
          <div className="grid gap-4 lg:col-span-2">
            {stats.map((s) => (
              <div key={s.k} className="rounded-2xl border border-border gradient-card p-5">
                <p className="text-2xl font-bold text-primary">{s.k}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Why it exists                                                     */
/* ------------------------------------------------------------------ */

function WhyItExists() {
  const before = [
    "Booking app",
    "Email sender",
    "Form builder",
    "CRM",
    "Chat widget",
    "Three spreadsheets",
    "Manual handoffs between them all",
  ];
  const after = [
    "One request hub",
    "One automation catalog",
    "One integration layer",
    "One AI layer",
    "One audit trail",
    "One place to prove ROI",
  ];
  const audience = [
    "Small service businesses",
    "Ops and IT teams",
    "Agencies and MSPs",
    "Healthcare IT",
    "Solo founders",
  ];
  return (
    <section id="why" className="border-b border-border/60 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          eyebrow="Why it exists"
          title="Tool sprawl is the tax you pay for growing without a system"
          intro="Most small operations teams live in a patchwork of five to seven SaaS tools. Work falls through the cracks, automations break silently, and nobody knows which client asked for what."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-widest text-destructive">Before</p>
            <h3 className="mt-2 text-xl font-semibold text-foreground">Tool sprawl</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {before.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-destructive/70" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/40 gradient-card p-6 shadow-elegant">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">After ERRA</p>
            <h3 className="mt-2 text-xl font-semibold text-foreground">One control center</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {after.map((a) => (
                <li key={a} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Built for</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {audience.map((a) => (
              <span key={a} className="rounded-full border border-border bg-card px-3 py-1 text-sm text-foreground">
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Feature Highlights                                                */
/* ------------------------------------------------------------------ */

type Feature = { icon: React.ComponentType<{ className?: string }>; title: string; body: string };

const HIGHLIGHTS: Feature[] = [
  { icon: Inbox, title: "Request Hub", body: "ITSM style ticketing so nothing gets lost between clients and operators." },
  { icon: KanbanSquare, title: "Kanban pipeline", body: "See active, in review, and approved work at a glance. Prioritize by drag and drop." },
  { icon: Sparkles, title: "Automation library", body: "Turn on complex flows in one click, from a catalog of ready to deploy templates." },
  { icon: Puzzle, title: "Integrations hub", body: "Connect 30 plus platforms via OAuth or secure key entry, no glue code required." },
  { icon: Bot, title: "AI chatbot", body: "24/7 conversational assistant grounded in your own knowledge base." },
  { icon: Mic, title: "Voice AI", body: "Voice based assistant for phone style interactions and hands free tasks." },
  { icon: BarChart3, title: "Reports & metrics", body: "Analytics across requests, service performance, and activity trends." },
  { icon: Shield, title: "Role based access", body: "Customer, admin, and system roles keep multi tenant data safely isolated." },
];

const ALL_FEATURES = [
  ["Request Hub", "Central intake for all client and internal work"],
  ["Kanban Active Requests", "Visual pipeline of active, in review, and approved work"],
  ["Backlog & Upcoming Queue", "Not yet started work with a next in queue pin"],
  ["Automation Library", "Catalog of ready to deploy workflow templates"],
  ["My Automations", "Personal view of enabled automations with status"],
  ["Integrations Hub", "Connect 30 plus third party platforms"],
  ["AI Chatbot", "Conversational assistant grounded in your knowledge base"],
  ["Voice AI", "Voice based assistant for phone style interactions"],
  ["Knowledge Base", "Searchable public help content"],
  ["Reports & Metrics", "Analytics across requests and performance"],
  ["Billing & Subscription", "Plan management, payment methods, billing history"],
  ["Resources Hub", "Getting started guides, tutorials, referral program"],
  ["Notifications Center", "Real time updates on requests and automations"],
  ["Profile & Assets", "User profile, brand assets, and account settings"],
  ["Role based Access", "Customer, admin, and system role isolation"],
  ["Light / Dark Mode", "Theme toggle across the entire app"],
  ["Admin Console", "Operator side surface for customers, tickets, and catalog"],
];

function FeatureHighlights() {
  return (
    <section id="features" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          eyebrow="Feature highlights"
          title="Everything a small ops team actually needs"
          intro="Every core surface of the product, in one place, with an audit trail across all of it."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="rounded-2xl border border-border bg-card p-6 transition hover:shadow-soft">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-14">
          <h3 className="text-lg font-semibold text-foreground">All 17 capabilities</h3>
          <p className="mt-1 text-sm text-muted-foreground">Full feature surface, not just the highlights.</p>
          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {ALL_FEATURES.map(([name, purpose]) => (
              <div key={name} className="rounded-xl border border-border bg-card/50 p-4">
                <p className="text-sm font-semibold text-foreground">{name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Screenshots + Screens Map                                         */
/* ------------------------------------------------------------------ */

function Gallery() {
  const shots = [
    { src: dashboardAsset.url, title: "Customer dashboard", body: "Welcome header, KPI cards, quick actions, and a getting started checklist." },
    { src: requestsActiveAsset.url, title: "Active requests Kanban", body: "Active, Waiting on Review, and Approved & Signed Off columns." },
    { src: requestsUpcomingAsset.url, title: "Upcoming requests queue", body: "Ordered list with a Next in Queue pin so priorities are explicit." },
    { src: submitRequestAsset.url, title: "Submit new request", body: "Structured intake with request type, description, attachments, and source." },
  ];
  return (
    <>
      <section id="screens" className="border-b border-border/60 bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeader
            eyebrow="Screenshots gallery"
            title="Real product screens"
            intro="Four sanitized screens from the customer app. The full screen inventory is listed below."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {shots.map((s) => (
              <div key={s.title}>
                <BrowserFrame src={s.src} alt={`ERRA ${s.title}`} caption={s.title} />
                <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScreensMap />
    </>
  );
}

function ScreensMap() {
  const groups: { name: string; rows: [string, string][] }[] = [
    {
      name: "Public / marketing",
      rows: [
        ["Landing", "Hero, features, social proof, pricing CTA"],
        ["Knowledge Base", "Search, categories, article list"],
        ["Pricing Selection", "Plan tiers, feature comparison, CTA"],
      ],
    },
    {
      name: "Auth",
      rows: [
        ["Login", "Email/password form, forgot password link"],
        ["Signup", "Form, security questions, terms"],
        ["Forgot Password", "Email entry and verification"],
        ["Email Verification", "Status card, resend link"],
      ],
    },
    {
      name: "Customer app",
      rows: [
        ["Dashboard", "KPI cards, quick actions, getting started"],
        ["Submit Ticket", "Request type, description, attachments"],
        ["Active Requests", "Kanban of active, in review, approved"],
        ["Backlog", "Ordered upcoming queue with next in queue pin"],
        ["Active Request Detail", "Progress, description, conversation thread"],
        ["Automation Library", "Search, filters, catalog cards"],
        ["Automation Details Modal", "Trigger, action, follow up steps"],
        ["Add Automation Modal", "Confirm and enable"],
        ["My Automations", "Status, toggle, logs"],
        ["Integrations Hub", "Search, filters, provider cards"],
        ["AI Chatbot", "Live stats and configuration"],
        ["Voice AI", "Voice controls, call log, configuration"],
        ["Reports", "Period switcher, KPI cards, activity trends"],
        ["Billing", "Plan, cycle, payment method, history"],
        ["Notifications", "Filtered update center"],
        ["Profile & Assets", "Profile form and asset uploads"],
        ["Resources Hub", "Guides, videos, referral program"],
      ],
    },
    {
      name: "Admin console",
      rows: [
        ["Admin Dashboard", "Operator KPIs"],
        ["Admin Customers", "Manage tenants"],
        ["Admin Tickets", "Handle requests"],
        ["Admin Automations", "Catalog management"],
        ["Admin Automations Catalog", "Full catalog view"],
        ["Admin Automation Import", "Bulk import UI"],
      ],
    },
  ];
  return (
    <section id="screens-map" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          eyebrow="Screen inventory"
          title="Every surface in the product"
          intro="Beyond the four screenshots above, here is the full map. No mocked images, just an honest inventory."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {groups.map((g) => (
            <div key={g.name} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">{g.name}</h3>
              <ul className="mt-4 divide-y divide-border">
                {g.rows.map(([n, p]) => (
                  <li key={n} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <span className="text-sm font-medium text-foreground">{n}</span>
                    <span className="text-xs text-muted-foreground sm:text-right">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Demo walkthrough                                                  */
/* ------------------------------------------------------------------ */

function Walkthrough() {
  const demo = [
    "Open the landing page and scroll the feature strip.",
    "Peek at the knowledge base to see the public help surface.",
    "Sign in to a demo account.",
    "Land on the dashboard and notice the KPI cards.",
    "Open the Automation Library, filter by industry, open a card.",
    "Add an automation and see the confirm and enable flow.",
    "Visit the Integrations Hub and browse providers.",
    "Submit a new request from the Requests Hub.",
    "Open Active Requests, click a card, read the conversation.",
    "Open Reports and switch between Week, Month, Quarter, Year.",
    "Open AI Chatbot to see live stats and configuration.",
    "Finish at Billing to see plan, cycle, and next billing date.",
  ];
  const firstTime = [
    "Land on marketing, click Get Started.",
    "Sign up, verify email, pick a plan.",
    "Arrive on the personalized dashboard.",
    "Open Integrations Hub and connect existing tools.",
    "Open Automation Library, preview a sequence, add it.",
    "Submit a first request describing what to build.",
  ];
  return (
    <section id="walkthrough" className="border-b border-border/60 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          eyebrow="Demo walkthrough"
          title="How a visit through ERRA feels"
          intro="Two narrated paths: the twelve step demo and the first time user journey."
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Twelve step demo</h3>
            <ol className="mt-6 space-y-4">
              {demo.map((d, i) => (
                <li key={d} className="flex gap-4 rounded-xl border border-border bg-card p-4">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-foreground">{d}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">First time user journey</h3>
            <ol className="mt-6 space-y-4">
              {firstTime.map((d, i) => (
                <li key={d} className="flex gap-4 rounded-xl border border-border gradient-card p-4">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-secondary/20 text-sm font-semibold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-foreground">{d}</p>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-xl border border-border bg-card p-5">
              <h4 className="text-sm font-semibold text-foreground">Daily use</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Check the dashboard, work the Kanban, review notifications, hand off conversations
                to the AI chatbot or Voice AI, and visit Reports for service performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Architecture                                                      */
/* ------------------------------------------------------------------ */

function Architecture() {
  const layers = [
    { icon: LayoutDashboard, name: "Client layer", body: "A single page web app the user interacts with." },
    { icon: Cloud, name: "Managed backend", body: "Handles auth, stores tenant data with row level isolation, hosts small server side functions." },
    { icon: Workflow, name: "Automation execution", body: "An external workflow engine runs the actual steps of each automation on a signed trigger." },
    { icon: Cpu, name: "AI layer", body: "A managed LLM gateway powers chatbot, voice, and knowledge grounded answers." },
    { icon: Plug, name: "Integration layer", body: "A registry of third party platforms connected via OAuth or secure key entry, with tokens stored server side." },
  ];
  return (
    <section id="architecture" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          eyebrow="Architecture overview"
          title="Five layers, one flow"
          intro="A conceptual view of how the product is put together. No schemas, table names, endpoints, or blueprints, by design."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {layers.map((l, i) => {
            const Icon = l.icon;
            return (
              <div key={l.name} className="relative rounded-2xl border border-border bg-card p-6">
                <p className="text-xs font-semibold text-muted-foreground">Layer {i + 1}</p>
                <div className="mt-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{l.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{l.body}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-10 rounded-2xl border border-primary/30 gradient-card p-6 text-center shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Request flow</p>
          <p className="mt-3 text-base font-medium text-foreground md:text-lg">
            user → client → managed backend → (workflow engine or AI gateway or integration provider) → back to the user in real time
          </p>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          No database schemas, table names, API routes, edge function names, webhook payloads, or automation blueprints are included by design.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Technology stack                                                  */
/* ------------------------------------------------------------------ */

function TechStack() {
  const groups: { icon: React.ComponentType<{ className?: string }>; name: string; items: string[] }[] = [
    { icon: LayoutDashboard, name: "Frontend", items: ["React", "TypeScript", "Vite based toolchain"] },
    { icon: Palette, name: "UI system", items: ["Tailwind CSS", "Radix primitives", "shadcn components", "Light and dark themes"] },
    { icon: Boxes, name: "State & data", items: ["TanStack Query for server state", "React Hook Form with schema validation"] },
    { icon: Cloud, name: "Backend", items: ["Managed serverless backend", "Server side functions for privileged actions"] },
    { icon: Database, name: "Database", items: ["Managed PostgreSQL", "Strict per tenant isolation"] },
    { icon: Lock, name: "Authentication", items: ["Managed auth provider", "Email verification", "Password reset"] },
    { icon: Cpu, name: "AI layer", items: ["Managed LLM gateway", "Chat completions and embeddings", "Voice AI channel"] },
    { icon: Workflow, name: "Automation", items: ["External managed workflow engine", "Reached via signed webhooks"] },
    { icon: Plug, name: "Integrations", items: ["OAuth 2.0 where supported", "Secure key entry otherwise"] },
    { icon: Cloud, name: "Hosting", items: ["Cloud hosted static frontend", "Managed backend services"] },
    { icon: Shield, name: "Security", items: ["Row level security", "Role based access via roles table", "Audit logging on integration changes", "Bot protection on public forms"] },
    { icon: SunMoon, name: "Theming", items: ["Semantic design tokens", "Full light and dark parity"] },
  ];
  return (
    <section id="tech" className="border-b border-border/60 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          eyebrow="Technology stack"
          title="High level building blocks"
          intro="Category level only. No vendor names, endpoints, keys, or configuration."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => {
            const Icon = g.icon;
            return (
              <div key={g.name} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{g.name}</h3>
                </div>
                <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                  {g.items.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-primary/60" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */

function FAQ() {
  const items = [
    {
      q: "What is ERRA?",
      a: "ERRA (Enterprise Resource & Response Automation) is a multi tenant operations platform that consolidates request management, automation, integrations, and AI assistants into a single dashboard.",
    },
    {
      q: "Who is it for?",
      a: "Small service businesses, ops and IT teams, agencies and MSPs running automations for multiple clients, healthcare IT teams that need audit ready workflows, and solo founders who need one client facing portal that just works.",
    },
    {
      q: "How is this different from stitching Zapier plus Zendesk plus a CRM together?",
      a: "You get one auditable control center instead of five subscriptions and brittle glue. Requests, automations, integrations, analytics, and AI live together, share context, and stay auditable across the whole trail.",
    },
    {
      q: "Is this the production app?",
      a: "No. This site is a public portfolio showcase. It documents what the product does and how it feels to use. It does not include source code, backend logic, database schemas, automation blueprints, or credentials.",
    },
    {
      q: "What technology does it use?",
      a: "A React and TypeScript single page app on a Vite based toolchain, Tailwind and Radix for UI, TanStack Query for server state, a managed Postgres backend with row level security, a managed LLM gateway, and an external workflow engine reached via signed webhooks. See the Technology Stack section for the full list.",
    },
    {
      q: "How does data stay isolated between tenants?",
      a: "Every tenant is isolated via row level security in the database, and permissions are enforced through a dedicated roles table with a security definer helper. Integration tokens are stored server side and never exposed to the browser.",
    },
    {
      q: "Does it really have AI, voice included?",
      a: "Yes. A chatbot answers 24/7 grounded in the tenant's own knowledge base, and a Voice AI channel handles phone style interactions. Both sit behind a managed LLM gateway so the underlying provider can change without breaking the product.",
    },
    {
      q: "Can I try it?",
      a: "The product is currently onboarding new customers by request. Reach out through the Contact section and we will get back to you.",
    },
  ];
  return (
    <section id="faq" className="border-b border-border/60">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <SectionHeader eyebrow="FAQ" title="Common questions" />
        <Accordion type="single" collapsible className="mt-10 w-full">
          {items.map((it) => (
            <AccordionItem key={it.q} value={it.q}>
              <AccordionTrigger className="text-left text-base font-semibold">{it.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{it.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  About                                                             */
/* ------------------------------------------------------------------ */

function About() {
  return (
    <section id="about" className="border-b border-border/60 bg-muted/30">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <SectionHeader eyebrow="About the project" title="Portfolio description" />
        <div className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-soft">
          <p className="text-base leading-relaxed text-foreground md:text-lg">
            <span className="font-semibold text-primary">ERRA. Enterprise Resource & Response Automation.</span>{" "}
            A multi tenant operations platform for small businesses that combines ITSM style ticketing,
            a one click automation library, an integrations marketplace, and AI chat plus voice
            assistants, all behind a single dashboard. Built as a React and TypeScript SPA on a managed
            serverless backend, with row level security, role based access, and an external workflow
            engine handling execution. The goal: replace five to seven disconnected SaaS tools with one
            auditable, AI augmented control center.
          </p>
          <div className="mt-6 rounded-xl border border-border bg-muted/30 p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Short version</p>
            <p className="mt-2 text-sm text-foreground">
              Designed and built ERRA, a multi tenant SaaS that consolidates ticketing, automations,
              integrations, and AI assistants into a single dashboard for small operations teams.
            </p>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            This repository is a public portfolio showcase. It intentionally ships documentation and
            screenshots only, no application source code, backend logic, database schema, automation
            blueprints, or credentials.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Contributor request                                               */
/* ------------------------------------------------------------------ */

function Contributor() {
  const roles = [
    { icon: Palette, name: "Design", body: "Refine visual system, motion, and accessibility." },
    { icon: BookOpen, name: "Content", body: "Improve copy, case studies, and knowledge base." },
    { icon: CheckCircle2, name: "QA", body: "Audit accessibility, cross browser, and reduced motion." },
    { icon: Handshake, name: "Case studies", body: "Share how you would use ERRA in your operation." },
  ];
  return (
    <section id="contribute" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          eyebrow="Contributor request"
          title="Interested in contributing?"
          intro="This showcase is a living portfolio piece. Designers, writers, QA testers, and case study collaborators are welcome."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((r) => {
            const Icon = r.icon;
            return (
              <div key={r.name} className="rounded-2xl border border-border bg-card p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{r.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <a
            href={CONTRIBUTE}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-elegant transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Handshake className="h-4 w-4" /> Reach out to contribute
          </a>
          <p className="text-sm text-muted-foreground">
            Or DM <span className="font-medium text-foreground">{HANDLE}</span> on your platform of choice.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Contact                                                           */
/* ------------------------------------------------------------------ */

function Contact() {
  return (
    <section id="contact" className="border-b border-border/60 gradient-hero">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <SectionHeader
          eyebrow="Contact"
          title="Ready to run smoothly?"
          intro="ERRA is currently onboarding new businesses by request. Reach out and we will get you set up."
        />
        <div className="mt-10 flex flex-col items-center gap-3">
          <a
            href={CONTACT}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-elegant transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Mail className="h-4 w-4" /> Request access
          </a>
          <a href={CONTACT} className="text-sm font-medium text-foreground transition hover:text-primary">
            {EMAIL}
          </a>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Instagram className="h-4 w-4" /> {HANDLE}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Users className="h-4 w-4" /> TikTok, X
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                            */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <Wordmark />
          <p className="mt-4 text-sm text-muted-foreground">
            Enterprise Resource & Response Automation. Your business, running smoothly.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            This is a public showcase. The product itself is private.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-foreground transition hover:text-primary">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Reach out</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={CONTACT} className="inline-flex items-center gap-1.5 text-foreground transition hover:text-primary">
                <Mail className="h-4 w-4" /> {EMAIL}
              </a>
            </li>
            <li className="inline-flex items-center gap-1.5 text-foreground">
              <Instagram className="h-4 w-4" /> {HANDLE}
            </li>
            <li>
              <a href={CONTRIBUTE} className="inline-flex items-center gap-1.5 text-foreground transition hover:text-primary">
                <Github className="h-4 w-4" /> Contribute
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} ERRA. All rights reserved.</p>
          <p>Docs and screenshots only. No proprietary source, backend, or credentials.</p>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Landing                                                           */
/* ------------------------------------------------------------------ */

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <ProductOverview />
        <WhyItExists />
        <FeatureHighlights />
        <Gallery />
        <Walkthrough />
        <Architecture />
        <TechStack />
        <FAQ />
        <About />
        <Contributor />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
