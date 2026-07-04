import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/site/theme-provider";
import {
  Moon,
  Sun,
  ArrowRight,
  Sparkles,
  MessagesSquare,
  Workflow,
  Bot,
  Plug,
  BarChart3,
  Inbox,
  ShieldCheck,
  Mail,
} from "lucide-react";

import requestsHub from "@/assets/erra-requests-hub.png.asset.json";
import integrationsHub from "@/assets/erra-integrations-hub.png.asset.json";
import aiChatbot from "@/assets/erra-ai-chatbot.png.asset.json";
import resourcesHub from "@/assets/erra-resources-hub.png.asset.json";
import billing from "@/assets/erra-billing.png.asset.json";
import reportsMetrics from "@/assets/erra-reports-metrics.png.asset.json";
import automationBenefit from "@/assets/erra-automation-benefit.png.asset.json";
import automationSequence from "@/assets/erra-automation-sequence.png.asset.json";
import automationLibrary from "@/assets/erra-automation-library.png.asset.json";

const TITLE = "ERRA. Automation for service-based businesses.";
const DESC =
  "ERRA is an automation platform for service-based businesses. Client intake, follow-ups, reviews, chatbot, voice AI, and 37 integrations from one dashboard. Public product showcase.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#what", label: "What it is" },
  { href: "#how", label: "How it works" },
  { href: "#tour", label: "Product tour" },
  { href: "#integrations", label: "Integrations" },
  { href: "#about", label: "About" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <TopRibbon />
      <StickyNav />
      <main>
        <Hero />
        <WhatItIs />
        <HowItWorks />
        <ProductTour />
        <Integrations />
        <About />
      </main>
      <Footer />
    </div>
  );
}

function TopRibbon() {
  return (
    <div className="w-full bg-primary text-primary-foreground text-xs">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-center gap-2 text-center">
        <Sparkles className="h-3.5 w-3.5" />
        <span className="font-medium">
          Public showcase of ERRA, a live SaaS product. Screens shown are the real product.
        </span>
      </div>
    </div>
  );
}

function Wordmark() {
  return (
    <a href="#top" className="flex items-center gap-2 group">
      <span
        className="text-2xl font-bold italic tracking-tight text-primary"
      >
        ERRA
      </span>
    </a>
  );
}

function StickyNav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);

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
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="px-3 py-1.5 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-accent/40 transition"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-full border border-border hover:bg-accent/40 transition"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="#about"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
          >
            Get in touch <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden gradient-hero">
      <div className="relative mx-auto max-w-7xl px-4 pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="max-w-3xl">
          <div className="mock-badge mb-6">Business Automation Platform</div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground">
            Your business,{" "}
            <span className="gradient-text">running smoothly</span>.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            ERRA is an automation platform built for service-based businesses.
            Studios, clinics, agencies, med-spas, and salons use it to handle
            client intake, follow-ups, reviews, re-engagement, chatbot and voice
            AI, plus 37 platform integrations from one dashboard.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#tour"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold shadow-elegant hover:opacity-90 transition"
            >
              See the product <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-6 py-3 text-sm font-semibold hover:bg-accent/40 transition"
            >
              Get in touch
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><Workflow className="h-3.5 w-3.5" /> 246 prebuilt automations</span>
            <span className="flex items-center gap-1.5"><Plug className="h-3.5 w-3.5" /> 37 integrations</span>
            <span className="flex items-center gap-1.5"><Bot className="h-3.5 w-3.5" /> AI chatbot and voice</span>
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <section id={id} className={`scroll-mt-24 py-20 md:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4">
        {(eyebrow || title || lead) && (
          <div className="max-w-3xl mb-12">
            {eyebrow && <div className="mock-badge mb-4">{eyebrow}</div>}
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                {title}
              </h2>
            )}
            {lead && (
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{lead}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

function WhatItIs() {
  const pillars = [
    {
      icon: Workflow,
      title: "Prebuilt automation library",
      body: "246 ready-to-run flows across SMS, email, chatbot, and AI. Tag by Communication, Retention, or Lead Gen and activate in one click.",
    },
    {
      icon: Inbox,
      title: "Client Requests Hub",
      body: "A kanban of every active, in-review, and completed request. Full conversation history per client, so nothing gets dropped.",
    },
    {
      icon: Bot,
      title: "AI Tools built in",
      body: "Chatbot and Voice AI trained on your business. Answer FAQs, book appointments, and route conversations 24/7.",
    },
  ];
  return (
    <Section
      id="what"
      eyebrow="What it is"
      title="One dashboard for the systems behind your business."
      lead="ERRA handles the behind-the-scenes work so operators can focus on serving clients."
    >
      <div className="grid md:grid-cols-3 gap-4">
        {pillars.map((c) => (
          <div key={c.title} className="rounded-2xl border border-border gradient-card p-6 shadow-soft">
            <c.icon className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-lg font-semibold text-foreground">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "1", title: "Client triggers an event", body: "Books an appointment, submits a form, sends an Instagram DM, or misses a visit." },
    { n: "2", title: "ERRA runs the matching automation", body: "The right flow fires from the library. SMS, email, chatbot, or AI, in the right order." },
    { n: "3", title: "Follow-ups happen automatically", body: "Confirmations, prep instructions, review requests, and re-engagement, on schedule." },
    { n: "4", title: "Everything lands in Requests Hub", body: "Every client thread with full conversation history, ready for the team to jump in." },
  ];
  return (
    <Section
      id="how"
      eyebrow="How it works"
      title="Trigger. Automate. Follow up. Track."
      className="bg-muted/40"
    >
      <div className="grid md:grid-cols-4 gap-4">
        {steps.map((s) => (
          <div key={s.n} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="h-9 w-9 rounded-full grid place-items-center bg-primary text-primary-foreground text-sm font-bold">
              {s.n}
            </div>
            <h3 className="mt-4 text-base font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Shot({
  src,
  alt,
  caption,
  title,
  icon: Icon,
}: {
  src: string;
  alt: string;
  caption: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <figure className="rounded-2xl overflow-hidden border border-border bg-card shadow-elegant">
      <div className="p-5 border-b border-border flex items-start gap-3">
        <div className="h-9 w-9 rounded-xl grid place-items-center bg-primary/10 text-primary shrink-0">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-base font-semibold text-foreground">{title}</div>
          <div className="text-sm text-muted-foreground mt-0.5">{caption}</div>
        </div>
      </div>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-auto block bg-muted"
      />
    </figure>
  );
}

function ProductTour() {
  return (
    <Section
      id="tour"
      eyebrow="Product tour"
      title="Every surface of ERRA, in the real product."
      lead="These are actual screens from the live app, not mockups."
    >
      <div className="grid gap-6">
        <Shot
          src={reportsMetrics.url}
          alt="ERRA Reports and Metrics dashboard"
          title="Reports and Metrics"
          icon={BarChart3}
          caption="Total, active, completed, and backlog counts. Top request type, service performance, activity trend, and a full performance overview by week, month, quarter, or year."
        />
        <div className="grid md:grid-cols-2 gap-6">
          <Shot
            src={requestsHub.url}
            alt="ERRA Requests Hub with client conversation drawer"
            title="Requests Hub"
            icon={Inbox}
            caption="Kanban view of Active, Waiting on Review, and Approved requests. Open any card to see the full client conversation and progress."
          />
          <Shot
            src={automationLibrary.url}
            alt="ERRA Automation Library with 246 prebuilt flows"
            title="Automation Library"
            icon={Workflow}
            caption="246 prebuilt automations tagged by category and channel. Search, filter, and activate the ones that fit your business."
          />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Shot
            src={automationSequence.url}
            alt="ERRA automation sequence detail"
            title="Automation detail: full sequence"
            icon={Workflow}
            caption="Every automation shows its trigger, action, follow-up, review request, and re-engagement step, so operators know exactly what runs and when."
          />
          <Shot
            src={automationBenefit.url}
            alt="ERRA automation business impact panel"
            title="Automation detail: business impact"
            icon={Sparkles}
            caption="Each flow ships with a clear conversion goal and notes, so it's obvious how the automation drives revenue or retention."
          />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Shot
            src={integrationsHub.url}
            alt="ERRA Integrations Hub with 37 platforms"
            title="Integrations Hub"
            icon={Plug}
            caption="37 platforms across Social Media, Authentication, Payments, and more. Filter by industry, type, or category and connect in a click."
          />
          <Shot
            src={aiChatbot.url}
            alt="ERRA AI Chatbot workspace"
            title="AI Tools: Chatbot and Voice"
            icon={Bot}
            caption="Active conversations, response time, satisfaction rate, and configuration for training data, response templates, and connected channels."
          />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Shot
            src={billing.url}
            alt="ERRA Billing and Subscription"
            title="Billing and Subscription"
            icon={ShieldCheck}
            caption="Plan type, billing cycle, next billing date, payment method, and full payment history in one place."
          />
          <Shot
            src={resourcesHub.url}
            alt="ERRA Resources Hub"
            title="Resources Hub"
            icon={MessagesSquare}
            caption="Getting Started guide, video tutorials, support chat, and a built-in referral program."
          />
        </div>
      </div>
    </Section>
  );
}

function Integrations() {
  const platforms = [
    "Instagram", "Google", "Facebook", "TikTok", "YouTube", "Threads",
    "and 31 more",
  ];
  return (
    <Section
      id="integrations"
      eyebrow="Integrations"
      title="Connects to the platforms service businesses already use."
      className="bg-muted/40"
    >
      <div className="flex flex-wrap gap-2">
        {platforms.map((p) => (
          <span
            key={p}
            className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
          >
            {p}
          </span>
        ))}
      </div>
      <p className="mt-6 text-sm text-muted-foreground max-w-2xl">
        37 integrations across Social Media, Authentication, Payments, Scheduling, and Communications. Filter the full library inside the Integrations Hub.
      </p>
    </Section>
  );
}

function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Built for the operators actually running service businesses."
    >
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            ERRA is a live SaaS product available by invite. This page is a public
            showcase of what it does and how it looks.
          </p>
          <p>
            If you run a service-based business and want to see whether ERRA fits,
            or if you're a design or engineering collaborator interested in the
            product, reach out below.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Mail className="h-4 w-4 text-primary" /> Get in touch
          </div>
          <a
            href="mailto:hello@erra.app"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
          >
            hello@erra.app <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <p className="mt-4 text-xs text-muted-foreground">
            Replace with your preferred contact address.
          </p>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-sm text-muted-foreground">
        <div>
          <span className="font-semibold text-foreground">ERRA</span> &copy; {new Date().getFullYear()}
        </div>
        <div>Public product showcase. Screens shown are the real product.</div>
      </div>
    </footer>
  );
}
