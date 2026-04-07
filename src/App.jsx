import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Users,
  FileText,
  Landmark,
  Phone,
  Mail,
} from "lucide-react";

function cls(...parts) {
  return parts.filter(Boolean).join(" ");
}

function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center rounded-full font-medium transition focus:outline-none focus:ring-2 focus:ring-amber-400";
  const variants = {
    primary: "bg-slate-950 text-white hover:bg-slate-800",
    outline: "border border-slate-300 bg-white text-slate-950 hover:bg-slate-50",
    ghostDark:
      "border border-white/30 bg-transparent text-white hover:bg-white hover:text-slate-950",
    light: "bg-white text-slate-950 hover:bg-slate-100",
  };
  const sizes = {
    md: "px-6 py-3 text-sm",
    lg: "px-7 py-4 text-base",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={cls(base, variants[variant], sizes[size], className)}
    >
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={cls(
        "rounded-3xl border border-slate-200 bg-white shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

function SectionTitle({ eyebrow, title, body, light = false, center = false }) {
  return (
    <div className={cls("max-w-3xl space-y-3", center && "mx-auto text-center")}>
      <p
        className={cls(
          "text-sm font-semibold uppercase tracking-[0.2em]",
          light ? "text-amber-400" : "text-amber-600"
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cls(
          "text-3xl font-semibold tracking-tight md:text-4xl",
          light ? "text-white" : "text-slate-950"
        )}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={cls(
            "text-base leading-7 md:text-lg",
            light ? "text-slate-300" : "text-slate-600"
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}

export default function App() {
const goToMainSite = () => {
  window.location.href = "https://legacy-control-system.pages.dev/";
};

const goToBooking = () => {
  window.location.href = "https://api.leadconnectorhq.com/widget/booking/snkFO93S8JXSkOjUlmD3";
};

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 md:px-6">
          <div className="min-w-0 flex-1 text-left md:max-w-md">
            <div className="text-xl font-semibold tracking-tight text-slate-950 md:text-2xl">
              Legacy Control System™
            </div>
            <div className="mt-1 text-sm text-slate-500">
              Private Trust Planning
            </div>
          </div>

          <div className="shrink-0">
            <Button onClick={goToMainSite} className="whitespace-nowrap">
              See Full Site
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-slate-950 text-white">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.24),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.10),transparent_28%)]" />
  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.03))]" />

  <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 md:px-6 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
    <div className="max-w-4xl">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-400">
        Private trust planning
      </p>

      <h1 className="mt-5 text-5xl font-semibold tracking-tight leading-[1.02] md:text-7xl">
        If something happened today,
        <span className="block text-white/80">
          would your family have a system
        </span>
        <span className="block text-amber-400">or just paperwork?</span>
      </h1>

      <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
        Most people assume they are covered because they have a few documents.
        But when real decisions need to be made, many families discover they do
        not have a true system at all — just disconnected paperwork.
      </p>

   <div className="mt-8 flex flex-wrap justify-center gap-4">
  <Button variant="light" size="lg" onClick={goToMainSite}>
    Go to Full Site
  </Button>

  <Button variant="ghostDark" size="lg" onClick={goToBooking}>
    Go Deeper Into The System
  </Button>
</div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {[
          "Plain-English trust education",
          "Guided next-step experience",
          "Built for everyday families",
          "Designed to reduce confusion",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
          >
            <CheckCircle2 className="h-5 w-5 text-amber-400" />
            <span className="text-sm text-slate-200">{item}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="flex items-center">
      <div className="w-full rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur md:p-8">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Clarity",
              text: "Know what is missing before a crisis forces the issue.",
            },
            {
              title: "Control",
              text: "Create structure around who acts, how, and when.",
            },
            {
              title: "Continuity",
              text: "Build a system your family can actually follow.",
            },
            {
              title: "Confidence",
              text: "Move from assumptions to a more complete plan.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-slate-950/30 p-5 transition duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:bg-white/10"
            >
              <p className="text-lg font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-amber-400/20 bg-[linear-gradient(135deg,rgba(245,158,11,0.18),rgba(15,23,42,0.35))] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            The difference
          </p>
          <p className="mt-3 text-xl font-semibold leading-8 text-white">
            There is a big difference between having documents and having a
            system that actually works when life changes.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  <div className="mt-12 grid gap-6 md:grid-cols-3">
  {[
    {
      title: "They think one document covers everything",
      text: "Many people assume a simple document solves the issue, without realizing authority, healthcare, funding, and structure may still be missing.",
      icon: FileText,
    },
    {
      title: "They assume family can figure it out",
      text: "Without a system, loved ones are often left trying to interpret intentions under pressure.",
      icon: Users,
    },
    {
      title: "They wait too long",
      text: "Planning gets delayed until something changes, and that is usually when confusion becomes expensive.",
      icon: ShieldCheck,
    },
  ].map((item) => (
    <Card
      key={item.title}
      className="border-slate-200 bg-white shadow-[0_16px_45px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(15,23,42,0.10)]"
    >
      <CardContent className="p-8">
        <div className="mb-5 inline-flex rounded-2xl bg-amber-50 p-3">
          <item.icon className="h-7 w-7 text-amber-600" />
        </div>
        <h3 className="text-xl font-semibold tracking-tight text-slate-950">
          {item.title}
        </h3>
        <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
      </CardContent>
    </Card>
  ))}
</div>

        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionTitle
              eyebrow="What this gives you"
              title="A guided trust system designed to create clarity, control, and continuity."
              body="This is not about throwing legal language at people. It is about helping them understand the moving parts of a real plan."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "What a trust system is",
                  text: "A coordinated structure of documents, roles, and instructions built to help guide decisions, authority, and asset handling.",
                },
                {
                  title: "Why people use one",
                  text: "To reduce confusion, support loved ones, and move from disconnected documents to a more complete system.",
                },
                {
                  title: "What is included",
                  text: "Trust documents, backup will, powers of attorney, healthcare directives, and funding guidance.",
                },
                {
                  title: "What happens next",
                  text: "You can review the system, understand how it works, and decide whether a trust-based approach fits your situation.",
                },
              ].map((item) => (
                <Card
                  key={item.title}
                  className="border-amber-200 bg-amber-50/60 shadow-[0_10px_30px_rgba(245,158,11,0.06)]"
                >
                  <CardContent className="p-7">
                    <h3 className="text-xl font-semibold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-16 text-white md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionTitle
              eyebrow="A better next step"
              title="You do not need to know everything before you start."
              body="You just need a clearer way to understand what is missing, what matters, and what kind of structure may make sense for your family."
              light
              center
            />

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button variant="light" size="lg" onClick={goToMainSite}>
                Go to Full Site
              </Button>

              <Button variant="ghostDark" size="lg" onClick={goToBooking}>
                Start My Private Review
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
                Legacy Control System™
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                Structured trust planning with a modern guided experience.
              </h3>
              <p className="mt-4 max-w-xl leading-7 text-slate-300">
                Estate planning education and guided document services designed
                to help everyday families create more clarity, control, and
                continuity without the confusion that keeps most people stuck.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
                Contact
              </p>
              <div className="mt-4 space-y-3 text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-amber-400" />
                  <span>[Phone Placeholder]</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-amber-400" />
                  <span>info@12stoneconsulting.com</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
                Presented by
              </p>
              <div className="mt-4 space-y-3 text-slate-300">
                <div>12 Stone Consulting</div>
                <div>MSTA</div>
                <div>12stoneconsulting.com</div>
                <div>12stoneagency.com</div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
            <p>
              This material is for educational purposes and is not legal, tax, or
              financial advice. Specific strategies should be reviewed with
              qualified professionals.
            </p>
            <div className="mt-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <p>© 2025 12 Stone Consulting. All rights reserved.</p>
              <p>Powered by 12 Stone Smart Website Systems</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}