import Image from "next/image";
import Link from "next/link";

const milestones = [
  {
    title: "Lead AI Application Engineer — Innuora",
    timeframe: "2024 — Present",
    summary:
      "Designed multi-agent reasoning pipeline (analysis, reflection, directives, memory, crisis), schema-validated outputs, encrypted local-first storage, and GPT-4o/4.1 routing. 95+ Lighthouse scores under AI workloads.",
  },
  {
    title: "Senior Frontend Engineer — Vulkaza",
    timeframe: "Nov 2022 — Jul 2023",
    summary:
      "Architected App Router onboarding (14m → <2m), built Three.js viewer with selective hydration (-42% blocking JS), and led multi-store Zustand state architecture plus testing.",
  },
  {
    title: "Frontend Engineer — Dev Launchers",
    timeframe: "Feb 2021 — Dec 2022",
    summary:
      "Migrated legacy React to modular TypeScript, reduced TTI ~60% through progressive hydration, and shipped Jest/Vitest + MSW test suites with WCAG-compliant UI.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-6 pb-16 pt-10">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">
            About
          </p>
          <h1 className="text-4xl font-semibold text-white">
            Hi, I&apos;m Abdenasser Mohammedi.
          </h1>
          <p className="text-lg text-slate-200">
            Senior Frontend & Full-Stack Engineer specializing in React/Next.js,
            high-performance interfaces, and modern web application architecture.
            I design scalable frontends, build reliable backend APIs, and deliver
            complete product features end-to-end with a strong bias for quality.
          </p>
          <p className="text-lg text-slate-200">
            I also integrate AI/LLM-driven features into production apps with
            deterministic JSON schemas, multi-agent reasoning, and secure
            local-first storage. Over 7 years working with international teams has
            honed my collaboration, mentorship, and code review leadership.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-white/5 px-4 py-2 font-semibold text-cyan-100">
              Oran, Algeria • Open to relocation
            </span>
            <span className="rounded-full bg-white/5 px-4 py-2 font-semibold text-cyan-100">
              React/Next.js • AI Systems
            </span>
            <span className="rounded-full bg-white/5 px-4 py-2 font-semibold text-cyan-100">
              Performance & testing focus
            </span>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_18px_70px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/10" />
          <div className="relative z-10 aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/hero.webp"
              alt="Abdenasser Mohammedi portrait"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 520px"
              className="object-cover"
            />
          </div>
          <div className="relative z-10 mt-3 rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-sm text-slate-200">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">
              Principles
            </p>
            <p className="mt-2 font-semibold text-white">
              Schema-first thinking, encrypted-by-default data, and a relentless
              focus on shipping performant, reliable experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">
              Journey
            </p>
            <h2 className="text-3xl font-semibold text-white">Experience</h2>
          </div>
          <Link
            href="/contact"
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-100"
          >
            Let&apos;s collaborate
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {milestones.map((milestone) => (
            <div
              key={milestone.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 text-slate-200"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                {milestone.timeframe}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                {milestone.title}
              </h3>
              <p className="mt-2 text-sm">{milestone.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-slate-200">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
            Additional background
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            Harbor Officer & PFSO Assistant
          </h3>
          <p className="mt-2 text-sm">
            Arzew Port Authority — part-time rotational duty (24h/72h) ensuring
            vessel traffic coordination and ISPS/IMO compliance while sustaining a
            full engineering career.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-slate-200">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
            Education
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            MSc Computer Science (in progress)
          </h3>
          <p className="mt-2 text-sm">Woolf University — 2026</p>
          <p className="mt-2 text-sm">
            Port Officer Diploma — Superior Maritime Institute of Algiers.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-slate-200">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
            Languages
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">Arabic, French, English</h3>
          <p className="mt-2 text-sm">Arabic (Native), French (C2), English (C1).</p>
          <p className="mt-2 text-sm">
            Comfortable collaborating across multicultural, distributed teams.
          </p>
        </div>
      </section>
    </div>
  );
}
