import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/site/theme-provider";
import {
  Moon,
  Sun,
  ArrowRight,
  Sparkles,
  Layers,
  ShieldCheck,
  Workflow,
  Gauge,
  Boxes,
  MessagesSquare,
  Wand2,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Users,
  Rocket,
  Puzzle,
  Eye,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ERRA — Public Showcase of a Customer Experience Platform" },
      {
        name: "description",
        content:
          "A public portfolio showcase of ERRA, a conceptual customer-experience platform. Mock visuals only — this is not the production application.",
      },
      { property: "og:title", content: "ERRA — Public Showcase" },
      {
        property: "og:description",
        content:
          "Explore ERRA's concept, feature highlights, architecture overview, and how to contribute. Public showcase only.",
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#overview", label: "Overview" },
  { href: "#why", label: "Why" },
  { href: "#features", label: "Features" },
  { href: "#gallery", label: "Gallery" },
  { href: "#demo", label: "Demo" },
  { href: "#architecture", label: "Architecture" },
  { href: "#stack", label: "Stack" },
  { href: "#faq", label: "FAQ" },
  { href: "#contributor", label: "Contribute" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <TopRibbon />
      <StickyNav />
      <main>
        <Hero />
        <ProductOverview />
        <WhyItExists />
        <FeatureHighlights />
        <ScreenshotsGallery />
        <DemoWalkthrough />
        <ArchitectureOverview />
        <TechnologyStack />
        <FAQ />
        <AboutTheProject />
        <Contact />
        <ContributorRequest />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Ribbon + Nav ---------- */

function TopRibbon() {
  return (
    <div className="w-full bg-[color:var(--brand)] text-primary-foreground text-xs">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-center gap-2 text-center">
        <Sparkles className="h-3.5 w-3.5" />
        <span className="font-medium">
          Public showcase · Not the production source code · Content based on the approved public-safe export
        </span>
      </div>
    </div>
  );
}

function Wordmark() {
  return (
    <a href="#top" className="flex items-center gap-2 group">
      <span
        className="text-2xl font-bold italic tracking-tight"
        style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--brand)" }}
      >
        ERRA
      </span>
      <span className="hidden sm:inline text-[10px] font-medium uppercase tracking-widest text-muted-foreground border border-border rounded-full px-2 py-0.5">
        Showcase
      </span>
    </a>
  );
}

function StickyNav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="top"
      className={`sticky top-0 z-40 transition-all ${
        scrolled ? "surface-glass shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        <Wordmark />
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="px-3 py-1.5 rounded-full text-sm text-ink-soft hover:text-ink hover:bg-accent transition"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-full border border-border hover:bg-accent transition"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="#contributor"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[color:var(--brand)] text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
          >
            Contribute <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-full border border-border"
            aria-label="Menu"
          >
            <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border surface-glass">
          <div className="mx-auto max-w-7xl px-4 py-3 grid grid-cols-2 gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg text-sm hover:bg-accent"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- Section wrapper ---------- */

function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  lead?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-4">
        {(eyebrow || title || lead) && (
          <div className="max-w-3xl mb-12 md:mb-16">
            {eyebrow && (
              <div className="mock-badge mb-4" style={{ background: "transparent" }}>
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold text-ink">
                {title}
              </h2>
            )}
            {lead && (
              <p className="mt-4 text-lg text-ink-soft leading-relaxed">{lead}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section className="relative overflow-hidden gradient-hero">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full blur-3xl" style={{ background: "var(--gradient-aurora)" }} />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full blur-3xl" style={{ background: "oklch(0.72 0.15 280 / 0.4)" }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 pt-16 md:pt-24 pb-24 md:pb-32">
        <div className="max-w-3xl">
          <div className="mock-badge mb-6">Public Showcase</div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-ink">
            A calmer way to run{" "}
            <span className="gradient-text">customer experience</span>.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl">
            ERRA is a conceptual customer-experience platform that brings conversations,
            context, and thoughtful automation into one calm workspace. This page is a
            public portfolio of the idea — not the working product.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand)] text-primary-foreground px-6 py-3 text-sm font-semibold shadow-elegant hover:opacity-90 transition"
            >
              See the walkthrough <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contributor"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-6 py-3 text-sm font-semibold hover:bg-accent transition"
            >
              Become a contributor
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-ink-soft">
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> Non-production</span>
            <span className="flex items-center gap-1.5"><Eye className="h-3.5 w-3.5" /> Mock showcase visuals only</span>
            <span className="flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5" /> Public-safe content</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Overview ---------- */

function ProductOverview() {
  return (
    <Section
      id="overview"
      eyebrow="Product overview"
      title="A single, quiet surface for customer relationships."
      lead="ERRA is designed as a small, focused workspace where teams can follow every conversation, understand the person behind it, and take the next thoughtful step — without switching between six different tools."
    >
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { icon: MessagesSquare, title: "Conversations", body: "A shared inbox that respects context, tone, and history." },
          { icon: Layers, title: "Context", body: "The customer, their story, and prior touchpoints in one glance." },
          { icon: Wand2, title: "Assistance", body: "Optional AI helpers that draft, summarize, and suggest — never override." },
        ].map((c) => (
          <div key={c.title} className="rounded-2xl border border-border gradient-card p-6 shadow-soft">
            <c.icon className="h-6 w-6 text-[color:var(--brand)]" />
            <h3 className="mt-4 text-lg font-semibold text-ink">{c.title}</h3>
            <p className="mt-2 text-sm text-ink-soft leading-relaxed">{c.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Why ---------- */

function WhyItExists() {
  return (
    <Section
      id="why"
      eyebrow="Why it exists"
      title="Support tools have grown noisy. People haven't."
      className="bg-surface-alt"
    >
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-5 text-ink-soft leading-relaxed">
          <p>
            Most customer platforms optimize for volume: more tickets, more macros, more dashboards.
            The person on the other side ends up feeling processed rather than heard.
          </p>
          <p>
            ERRA is a small experiment in the opposite direction — fewer surfaces, gentler defaults,
            and interfaces that give practitioners room to think. It treats a customer conversation
            as a relationship, not a queue item.
          </p>
          <p>
            This showcase exists so the philosophy and design language can live in the open, even
            while the working product stays private.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { k: "Signal over noise", v: "Focus on what matters this hour, not this quarter." },
            { k: "Calm defaults", v: "Interfaces that don't shout for attention." },
            { k: "Human first", v: "Automation supports the practitioner, never replaces them." },
            { k: "Open thinking", v: "Design and reasoning documented in public." },
          ].map((it) => (
            <div key={it.k} className="rounded-2xl p-5 border border-border bg-surface shadow-soft">
              <div className="text-sm font-semibold text-ink">{it.k}</div>
              <div className="mt-1.5 text-sm text-ink-soft">{it.v}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Features ---------- */

function FeatureHighlights() {
  const features = [
    { icon: MessagesSquare, title: "Unified conversations", body: "One thread per person, across every channel a team supports." },
    { icon: Layers, title: "Contextual profile", body: "A quiet sidebar that surfaces history without overwhelming." },
    { icon: Wand2, title: "AI assistance", body: "Draft replies, summarize threads, extract action items — opt-in only." },
    { icon: Workflow, title: "Gentle workflows", body: "Lightweight automations that suggest rather than dictate." },
    { icon: Gauge, title: "Meaningful metrics", body: "A small set of numbers that reflect real quality of care." },
    { icon: Boxes, title: "Composable views", body: "Rearrange panels to match how your team actually works." },
    { icon: ShieldCheck, title: "Considered privacy", body: "Explicit boundaries around what is shared, stored, and inferred." },
    { icon: Puzzle, title: "Extensible", body: "Room for integrations without turning the workspace into a marketplace." },
  ];
  return (
    <Section
      id="features"
      eyebrow="Feature highlights"
      title="Capabilities designed to stay out of your way."
      lead="Each capability is intentional — no dashboards for the sake of dashboards, no automations that surprise the customer."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl border border-border bg-surface p-6 hover:shadow-elegant transition"
          >
            <div className="h-10 w-10 rounded-xl grid place-items-center bg-brand-soft text-[color:var(--brand)]">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-ink">{f.title}</h3>
            <p className="mt-2 text-sm text-ink-soft leading-relaxed">{f.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Gallery (mock frames) ---------- */

function MockFrame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-surface shadow-elegant overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-surface-alt">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.85_0.08_30)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.88_0.12_90)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.82_0.12_150)]" />
        </div>
        <div className="text-xs text-ink-soft font-medium">{title}</div>
        <div className="mock-badge">Mock</div>
      </div>
      <div className="p-5 min-h-[280px]">{children}</div>
    </div>
  );
}

function MockInbox() {
  return (
    <div className="grid grid-cols-[140px_1fr] gap-4 h-full">
      <div className="space-y-2">
        {["Inbox", "Assigned", "Mentions", "Archive"].map((s, i) => (
          <div
            key={s}
            className={`px-3 py-2 rounded-lg text-xs ${i === 0 ? "bg-brand-soft text-[color:var(--brand)] font-semibold" : "text-ink-soft"}`}
          >
            {s}
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {["Onboarding follow-up", "Renewal question", "Feature idea", "Thank-you note"].map((t, i) => (
          <div key={t} className="p-3 rounded-lg border border-border bg-surface-alt">
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold text-ink">{t}</div>
              <div className="text-[10px] text-ink-soft">{["2m", "1h", "3h", "1d"][i]}</div>
            </div>
            <div className="mt-1 h-1.5 rounded-full bg-border overflow-hidden">
              <div className="h-full bg-[color:var(--brand)]" style={{ width: `${80 - i * 15}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockConversation() {
  return (
    <div className="space-y-3">
      {[
        { me: false, text: "Hi — just wondering if there's a way to group by project?" },
        { me: true, text: "Great question. You can group by project from the top-right menu." },
        { me: false, text: "Perfect, thank you." },
      ].map((m, i) => (
        <div key={i} className={`flex ${m.me ? "justify-end" : "justify-start"}`}>
          <div
            className={`max-w-[75%] px-3.5 py-2 rounded-2xl text-xs leading-relaxed ${
              m.me
                ? "bg-[color:var(--brand)] text-primary-foreground rounded-br-sm"
                : "bg-surface-alt text-ink rounded-bl-sm"
            }`}
          >
            {m.text}
          </div>
        </div>
      ))}
      <div className="mt-4 rounded-xl border border-border p-3 bg-surface-alt">
        <div className="text-[10px] uppercase tracking-wider text-ink-soft font-semibold">Suggested reply</div>
        <div className="mt-1 text-xs text-ink">Glad that helped — want me to enable grouping by default for your workspace?</div>
      </div>
    </div>
  );
}

function MockInsights() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {[
          { k: "Response quality", v: "Steady" },
          { k: "Time to context", v: "Improving" },
          { k: "Return rate", v: "Healthy" },
        ].map((s) => (
          <div key={s.k} className="rounded-xl p-3 gradient-card border border-border">
            <div className="text-[10px] uppercase tracking-wider text-ink-soft">{s.k}</div>
            <div className="mt-1 text-sm font-semibold text-ink">{s.v}</div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-border p-4 h-40 relative overflow-hidden">
        <svg viewBox="0 0 300 120" className="w-full h-full">
          <defs>
            <linearGradient id="ln" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.62 0.13 200)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="oklch(0.62 0.13 200)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,90 C40,70 80,80 120,60 C160,40 200,55 240,35 C260,25 280,30 300,20 L300,120 L0,120 Z" fill="url(#ln)" />
          <path d="M0,90 C40,70 80,80 120,60 C160,40 200,55 240,35 C260,25 280,30 300,20" fill="none" stroke="oklch(0.62 0.13 200)" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

function ScreenshotsGallery() {
  return (
    <Section
      id="gallery"
      eyebrow="Screenshots gallery"
      title="Mock showcase visuals."
      lead="Every image below is a stylized mock created for this showcase. Nothing is captured from the working product."
      className="bg-surface-alt"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MockFrame title="Inbox"><MockInbox /></MockFrame>
        <MockFrame title="Conversation"><MockConversation /></MockFrame>
        <MockFrame title="Insights"><MockInsights /></MockFrame>
      </div>
      <p className="mt-6 text-xs text-ink-soft text-center">
        Visuals are illustrative only — layouts, copy, and numbers do not represent the production application.
      </p>
    </Section>
  );
}

/* ---------- Demo walkthrough ---------- */

function DemoWalkthrough() {
  const steps = [
    { n: "01", title: "A message arrives", body: "A customer writes in from any supported channel. It lands in a single shared inbox, tagged with light context." },
    { n: "02", title: "Context appears quietly", body: "A sidebar surfaces relevant history — past conversations, key moments, current status — without demanding attention." },
    { n: "03", title: "The practitioner drafts", body: "The reply is written by a human. Optional assistance suggests a draft, tone check, or summary — always opt-in." },
    { n: "04", title: "The workspace remembers", body: "The thread stays intact. The next practitioner picking it up sees the same clear story, not a wall of noise." },
    { n: "05", title: "Signals feed back", body: "A small number of meaningful measurements help the team learn — no vanity dashboards." },
  ];
  return (
    <Section
      id="demo"
      eyebrow="Demo walkthrough"
      title="How a conversation flows through ERRA."
      lead="A conceptual walkthrough of the intended experience."
    >
      <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {steps.map((s) => (
          <li key={s.n} className="rounded-2xl border border-border p-6 gradient-card">
            <div className="text-3xl font-bold gradient-text" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {s.n}
            </div>
            <h3 className="mt-3 text-base font-semibold text-ink">{s.title}</h3>
            <p className="mt-2 text-sm text-ink-soft leading-relaxed">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* ---------- Architecture ---------- */

function ArchitectureOverview() {
  const layers = [
    { name: "Client", desc: "Browser experience for practitioners and admins." },
    { name: "Presentation", desc: "Composable UI surfaces and design system." },
    { name: "Application", desc: "Business rules, workflows, and orchestration." },
    { name: "Data", desc: "Structured records for people, conversations, and events." },
    { name: "Integrations", desc: "External channels and thoughtful AI helpers." },
  ];
  return (
    <Section
      id="architecture"
      eyebrow="Architecture overview"
      title="A calm, layered system."
      lead="A conceptual five-layer view. Vendors, endpoints, and schemas are intentionally omitted."
      className="bg-surface-alt"
    >
      <div className="space-y-3">
        {layers.map((l, i) => (
          <div
            key={l.name}
            className="rounded-2xl border border-border bg-surface p-5 flex items-center gap-5 shadow-soft"
            style={{
              marginLeft: `${i * 12}px`,
              marginRight: `${(layers.length - 1 - i) * 12}px`,
            }}
          >
            <div className="h-10 w-10 rounded-xl grid place-items-center bg-brand-soft text-[color:var(--brand)] font-bold text-sm">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-ink">{l.name}</div>
              <div className="text-xs text-ink-soft mt-0.5">{l.desc}</div>
            </div>
            <div className="hidden sm:block h-1.5 flex-1 rounded-full overflow-hidden bg-border">
              <div className="h-full" style={{ width: `${(i + 1) * 18}%`, background: "var(--gradient-aurora)" }} />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Stack ---------- */

function TechnologyStack() {
  const groups = [
    { k: "Frontend", v: "Modern reactive framework" },
    { k: "Styling", v: "Utility-first CSS system" },
    { k: "State", v: "Server-cache + local state" },
    { k: "Routing", v: "File-based, type-safe" },
    { k: "Backend runtime", v: "Serverless functions" },
    { k: "Data layer", v: "Relational store with row-level rules" },
    { k: "Auth pattern", v: "Session-based with role separation" },
    { k: "AI layer", v: "Optional, opt-in assistance" },
  ];
  return (
    <Section
      id="stack"
      eyebrow="Technology stack"
      title="Categories, not vendors."
      lead="A high-level view of the shape of the system. Concrete providers and configuration live in the private repository."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {groups.map((g) => (
          <div key={g.k} className="rounded-xl border border-border p-4 bg-surface">
            <div className="text-[10px] uppercase tracking-wider font-semibold text-[color:var(--brand)]">{g.k}</div>
            <div className="mt-1.5 text-sm font-medium text-ink">{g.v}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- FAQ ---------- */

function FAQ() {
  const items = [
    { q: "Is this the real ERRA product?", a: "No. This site is a public portfolio showcase of the concept, philosophy, and design language. The working product lives in a private repository." },
    { q: "Can I try the app?", a: "Not from this page. If you're interested in early access to the working product, use the contributor request section below and we'll be in touch." },
    { q: "Are the screenshots real?", a: "No. Every visual on this page is a stylized mock created specifically for this showcase." },
    { q: "Is any private information published here?", a: "No. All content is derived from an approved public-safe export. Provider names, endpoints, schemas, credentials, and internal identifiers are intentionally excluded." },
    { q: "How can I follow along?", a: "Watch this page, or reach out through the contact section. We'll share updates as the project matures." },
    { q: "Can I contribute?", a: "Yes — the contributor request section explains what kinds of collaboration are welcome and how to start a conversation." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Questions people ask."
      className="bg-surface-alt"
    >
      <div className="max-w-3xl mx-auto space-y-2">
        {items.map((it, i) => (
          <div key={i} className="rounded-2xl border border-border bg-surface overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between text-left px-5 py-4 hover:bg-accent transition"
            >
              <span className="text-sm md:text-base font-semibold text-ink">{it.q}</span>
              <ChevronDown className={`h-4 w-4 shrink-0 transition ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && (
              <div className="px-5 pb-5 text-sm text-ink-soft leading-relaxed">{it.a}</div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- About ---------- */

function AboutTheProject() {
  return (
    <Section
      id="about"
      eyebrow="About the project"
      title="Where ERRA came from, and where it's going."
    >
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4 text-ink-soft leading-relaxed">
          <p>
            ERRA started as a small experiment: what would a customer-experience workspace look like
            if calmness were a first-class requirement? The idea grew into a working prototype and a
            longer body of design writing.
          </p>
          <p>
            The production application is still evolving in a private repository. This showcase
            captures the concept, feature philosophy, and architectural shape in a form that can be
            shared openly — without exposing the working codebase.
          </p>
          <p className="text-xs italic">
            This page is a portfolio artifact only. It does not represent a shipping product,
            is not connected to any live system, and includes no reusable production code.
          </p>
        </div>
        <div className="rounded-2xl border border-border p-6 gradient-card">
          <div className="text-sm font-semibold text-ink flex items-center gap-2">
            <Rocket className="h-4 w-4 text-[color:var(--brand)]" /> Status
          </div>
          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-wider text-ink-soft">Stage</dt>
              <dd className="mt-0.5 text-ink font-medium">Private prototype</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-ink-soft">Showcase</dt>
              <dd className="mt-0.5 text-ink font-medium">Public, static</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-ink-soft">Contributions</dt>
              <dd className="mt-0.5 text-ink font-medium">Open, by request</dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Contact ---------- */

function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Reach out."
      lead="This is a static page — no forms, no tracking. Use the links below to start a conversation."
      className="bg-surface-alt"
    >
      <div className="grid sm:grid-cols-3 gap-4 max-w-3xl">
        {[
          { icon: Mail, label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
          { icon: Github, label: "GitHub", value: "your-handle", href: "#" },
          { icon: Linkedin, label: "LinkedIn", value: "your-profile", href: "#" },
        ].map((c) => (
          <a
            key={c.label}
            href={c.href}
            className="group rounded-2xl border border-border p-5 bg-surface hover:shadow-elegant transition flex items-start gap-4"
          >
            <div className="h-10 w-10 rounded-xl grid place-items-center bg-brand-soft text-[color:var(--brand)]">
              <c.icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-wider text-ink-soft">{c.label}</div>
              <div className="mt-0.5 text-sm font-semibold text-ink truncate">{c.value}</div>
            </div>
            <ExternalLink className="h-4 w-4 text-ink-soft opacity-0 group-hover:opacity-100 transition ml-auto" />
          </a>
        ))}
      </div>
      <p className="mt-6 text-xs text-ink-soft">Replace the placeholder links above with your real handles before publishing.</p>
    </Section>
  );
}

/* ---------- Contributor request ---------- */

function ContributorRequest() {
  const roles = [
    { icon: Wand2, title: "Designers", body: "Interaction, motion, and system design that keeps things quiet." },
    { icon: Puzzle, title: "Engineers", body: "Frontend, backend, or full-stack — comfortable with modern web tooling." },
    { icon: Users, title: "Practitioners", body: "Support and CX leads who can shape what actually matters." },
  ];
  return (
    <Section
      id="contributor"
      eyebrow="Contributor request"
      title="Help shape a calmer workspace."
      lead="ERRA is small on purpose. If the philosophy resonates and you'd like to contribute time, ideas, or feedback — we'd love to hear from you."
    >
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {roles.map((r) => (
          <div key={r.title} className="rounded-2xl border border-border p-6 bg-surface">
            <div className="h-10 w-10 rounded-xl grid place-items-center bg-brand-soft text-[color:var(--brand)]">
              <r.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-ink">{r.title}</h3>
            <p className="mt-2 text-sm text-ink-soft leading-relaxed">{r.body}</p>
          </div>
        ))}
      </div>
      <div className="rounded-3xl p-8 md:p-12 gradient-card border border-border shadow-elegant flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-ink">Start a conversation.</h3>
          <p className="mt-2 text-sm text-ink-soft max-w-xl">
            Send a short note about what draws you to the project. There's no application form —
            just a real reply.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand)] text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold hover:bg-accent transition"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="border-t border-border bg-surface-alt">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <Wordmark />
          <p className="mt-4 text-xs text-ink-soft leading-relaxed max-w-sm">
            ERRA is a conceptual customer-experience platform. This site is a public showcase only —
            not the production source code, and not connected to any live system.
          </p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-ink-soft">Explore</div>
          <ul className="mt-3 space-y-1.5 text-sm">
            {NAV.slice(0, 5).map((n) => (
              <li key={n.href}><a href={n.href} className="text-ink hover:text-[color:var(--brand)] transition">{n.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-ink-soft">More</div>
          <ul className="mt-3 space-y-1.5 text-sm">
            {NAV.slice(5).map((n) => (
              <li key={n.href}><a href={n.href} className="text-ink hover:text-[color:var(--brand)] transition">{n.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-ink-soft">
          <div>© {new Date().getFullYear()} ERRA — Public showcase.</div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5" />
            Not the production source code · Mock visuals only
          </div>
        </div>
      </div>
    </footer>
  );
}
