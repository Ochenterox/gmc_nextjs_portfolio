import Image from "next/image";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./lib/projects";

const capabilities = [
  {
    title: "Frontend engineering",
    description:
      "Ship high-performance React/Next.js interfaces with strong state management and accessibility.",
    items: ["Next.js App Router / RSC", "TypeScript", "Zustand & Redux"],
  },
  {
    title: "AI systems",
    description:
      "Design multi-agent pipelines, deterministic JSON schemas, and model routing with resilient UX.",
    items: ["LLM pipelines", "Schema validation", "Model routing"],
  },
  {
    title: "Architecture & DX",
    description:
      "Build secure local-first data layers, CI/CD, testing suites, and design systems that scale teams.",
    items: ["Encryption (IndexedDB + AES-GCM)", "CI/CD & Testing", "Design systems"],
  },
];

const featured = projects;

export default function Home() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-16 pt-10">
      <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-black px-8 py-10 shadow-[0_25px_100px_rgba(0,0,0,0.55)]">
        <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-[140px]" />
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative z-10 space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">
              Senior Frontend & Full-Stack Engineer
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              Building high-performance product experiences with React, Next.js,
              and AI systems.
            </h1>
            <p className="max-w-2xl text-lg text-slate-200">
              I design scalable frontends, reliable backend APIs, and AI-driven
              workflows with deterministic outputs. More than 7 years shipping
              end-to-end features for international teams.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link
                href="/projects"
                className="rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 transition hover:shadow-cyan-400/60"
              >
                View projects
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-100"
              >
                Book a collaboration call
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                  Focus
                </p>
                <p className="mt-2 text-base font-semibold text-white">
                  Next.js (App Router/RSC), AI pipelines, secure storage
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                  Currently
                </p>
                <p className="mt-2 text-base font-semibold text-white">
                  Open to relocation & senior frontend roles
                </p>
              </div>
            </div>
          </div>
          <div className="relative z-10">
              <div className="absolute -left-10 -top-6 h-40 w-40 rounded-full bg-cyan-400/20 blur-[100px]" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_25px_70px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/hero.webp"
                  alt="Abdenasser Mohammedi hero portrait"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-cover"
                />
              </div>
              <div className="mt-4 grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">
                    Strengths
                  </p>
                  <p className="mt-2 font-semibold text-white">
                    Performance, schema-first thinking, and hands-on leadership.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">
                    Toolbelt
                  </p>
                  <p className="mt-2 font-semibold text-white">
                    Next.js, TypeScript, Zustand, Tailwind, Vitest, MSW.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">
            How I work
          </p>
          <h2 className="text-3xl font-semibold text-white">Capabilities</h2>
          <p className="max-w-3xl text-slate-200">
            Frontend depth, AI workflow design, and secure architecture to ship
            reliably while keeping teams aligned.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.45)]"
            >
              <h3 className="text-xl font-semibold text-white">
                {capability.title}
              </h3>
              <p className="mt-3 text-sm text-slate-200">
                {capability.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {capability.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-900/70 px-3 py-1 text-xs font-semibold text-cyan-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">
            Selected work
          </p>
          <h2 className="text-3xl font-semibold text-white">Featured projects</h2>
          <p className="max-w-3xl text-slate-200">
            High-impact engagements across AI systems, onboarding flows, and
            modernization efforts with measurable performance gains.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              priority={index === 0}
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-100"
          >
            Browse all projects
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-[1px]"
          >
            Start something new
          </Link>
        </div>
      </section>
    </div>
  );
}
