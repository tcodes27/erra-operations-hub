import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail } from "lucide-react";

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

function BrowserFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
      <div className="flex items-center gap-1.5 border-b border-border bg-muted/50 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
      </div>
      <img src={src} alt={alt} className="block w-full" loading="lazy" />
    </div>
  );
}

function Wordmark() {
  return (
    <a href="#top" className="text-2xl font-bold tracking-tight text-primary">
      ERRA
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Wordmark />
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#product" className="transition hover:text-foreground">Product</a>
          <a href="#how" className="transition hover:text-foreground">How it works</a>
          <a href="#features" className="transition hover:text-foreground">Features</a>
          <a href="#contact" className="transition hover:text-foreground">Contact</a>
        </nav>
        <a
          href={CONTACT}
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          Request access <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Business Automation Platform
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-foreground md:text-6xl">
            Your business, running smoothly.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            ERRA is automation for service based businesses. Submit a request, we build the
            workflow, your business keeps moving.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={CONTACT}
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Request access <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#product"
              className="inline-flex items-center rounded-full border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:bg-accent"
            >
              See the product
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-5xl">
          <BrowserFrame src={dashboardAsset.url} alt="ERRA dashboard" />
        </div>
      </div>
    </section>
  );
}

function ValueProps() {
  const items = [
    {
      title: "Focused request queue",
      body: "One place to submit, track, and approve every automation your business needs.",
    },
    {
      title: "Prebuilt automations",
      body: "A library of ready to deploy workflows built for service businesses.",
    },
    {
      title: "AI tools that ship",
      body: "Chatbot and voice AI wired into your requests, not a separate silo.",
    },
  ];
  return (
    <section id="product" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", t: "Submit a request", d: "Pick a request type, describe the outcome, attach files, choose the source." },
    { n: "02", t: "We build and review", d: "72 hour turnaround. Your request moves through Active, Waiting on Review, then Approved." },
    { n: "03", t: "Approve and go live", d: "Sign off in one click. The workflow runs, and your queue moves to the next request." },
  ];
  return (
    <section id="how" className="border-b border-border/60 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">How it works</h2>
          <p className="mt-3 text-muted-foreground">
            A structured intake and delivery loop, so nothing gets lost.
          </p>
        </div>
        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          <ol className="space-y-6">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-4 rounded-2xl border border-border bg-card p-6">
                <span className="text-2xl font-bold text-primary">{s.n}</span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{s.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <BrowserFrame src={submitRequestAsset.url} alt="ERRA submit new request form" />
        </div>
      </div>
    </section>
  );
}

function FeatureBlock({
  eyebrow,
  title,
  body,
  src,
  alt,
  reverse,
}: {
  eyebrow: string;
  title: string;
  body: string;
  src: string;
  alt: string;
  reverse?: boolean;
}) {
  return (
    <div className={`grid gap-10 lg:grid-cols-2 lg:items-center ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">{title}</h3>
        <p className="mt-4 text-muted-foreground">{body}</p>
      </div>
      <BrowserFrame src={src} alt={alt} />
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl space-y-24 px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Built to keep your business moving</h2>
          <p className="mt-3 text-muted-foreground">
            Every screen is designed for owners and operators. No dashboards you never open.
          </p>
        </div>
        <FeatureBlock
          eyebrow="Dashboard"
          title="At a glance status of every request"
          body="See active work, backlog, and hours saved the moment you log in. Quick actions and an onboarding checklist keep you moving."
          src={dashboardAsset.url}
          alt="ERRA dashboard overview"
        />
        <FeatureBlock
          eyebrow="Requests Hub. Active"
          title="Track work across Active, Waiting on Review, and Approved"
          body="A clear board for every request in flight. Nothing hides in an inbox, nothing stalls without a status."
          src={requestsActiveAsset.url}
          alt="ERRA active requests board"
          reverse
        />
        <FeatureBlock
          eyebrow="Requests Hub. Upcoming"
          title="Control what ships next"
          body="Reorder your queue, mark what is Next in Queue, and let the team know exactly what to build first."
          src={requestsUpcomingAsset.url}
          alt="ERRA upcoming requests queue"
        />
        <FeatureBlock
          eyebrow="Submit New Request"
          title="Structured intake with attachments and source"
          body="Pick a request type, describe the outcome, attach images, videos, voice notes, or docs, and choose where the request begins."
          src={submitRequestAsset.url}
          alt="ERRA submit new request form"
          reverse
        />
      </div>
    </section>
  );
}

function WhoFor() {
  return (
    <section className="border-b border-border/60 bg-muted/30">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Built for service based businesses</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Salons, clinics, agencies, studios, and every owner who spends too many hours doing
          work a system should handle. ERRA turns those hours back into revenue.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Ready to run smoothly?</h2>
        <p className="mt-3 text-muted-foreground">
          ERRA is currently onboarding new businesses by request. Reach out and we will get you set up.
        </p>
        <a
          href={CONTACT}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          <Mail className="h-4 w-4" /> Request access
        </a>
        <p className="mt-6 text-sm text-muted-foreground">
          <a href={CONTACT} className="font-medium text-foreground transition hover:text-primary">{EMAIL}</a>
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Find us <span className="font-medium text-foreground">{HANDLE}</span> on Instagram, TikTok, and X.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
        <Wordmark />
        <p>© {new Date().getFullYear()} ERRA. All rights reserved.</p>
        <a href={CONTACT} className="transition hover:text-foreground">Contact</a>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <HowItWorks />
        <Features />
        <WhoFor />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
