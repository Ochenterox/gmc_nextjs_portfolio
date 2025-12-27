import Link from "next/link";

const channels = [
  {
    label: "Email",
    value: "abdenasser.mohammedi@outlook.com",
    href: "mailto:abdenasser.mohammedi@outlook.com",
  },
  {
    label: "GitHub",
    value: "github.com/mdinacer",
    href: "https://github.com/mdinacer",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mdinacer",
    href: "https://www.linkedin.com/in/mdinacer",
  },
  {
    label: "Portfolio",
    value: "mohammediabdenasser.com",
    href: "https://mohammediabdenasser.com",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-10 px-6 pb-16 pt-10">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">
          Contact
        </p>
        <h1 className="text-4xl font-semibold text-white">
          Let&apos;s build something purposeful.
        </h1>
        <p className="max-w-3xl text-lg text-slate-200">
          Tell me about your Next.js product, AI workflow, or modernization
          effort. I&apos;ll respond within one business day with actionable next
          steps.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-slate-200">
              Name
              <input
                type="text"
                placeholder="Your name"
                className="rounded-xl border border-white/10 bg-slate-900/60 px-3 py-3 text-white outline-none transition focus:border-cyan-300"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-200">
              Email
              <input
                type="email"
                placeholder="you@example.com"
                className="rounded-xl border border-white/10 bg-slate-900/60 px-3 py-3 text-white outline-none transition focus:border-cyan-300"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm text-slate-200">
            Project details
            <textarea
              rows={5}
              placeholder="Share your goals, timeline, or problems to solve."
              className="rounded-xl border border-white/10 bg-slate-900/60 px-3 py-3 text-white outline-none transition focus:border-cyan-300"
            />
          </label>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-slate-900/70 px-3 py-2 text-xs font-semibold text-cyan-100">
              UX/UI design
            </span>
            <span className="rounded-full bg-slate-900/70 px-3 py-2 text-xs font-semibold text-cyan-100">
              Front-end build
            </span>
            <span className="rounded-full bg-slate-900/70 px-3 py-2 text-xs font-semibold text-cyan-100">
              Design system
            </span>
          </div>
          <div className="flex gap-3">
            <Link
              href="mailto:abdenasser.mohammedi@outlook.com"
              className="rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 transition hover:shadow-cyan-400/60"
            >
              Send email
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-100"
            >
              Explore work
            </Link>
          </div>
        </div>

        <div className="space-y-5 rounded-3xl border border-white/10 bg-slate-950/80 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">
            Direct channels
          </p>
          <div className="space-y-3 text-sm text-slate-200">
            {channels.map((channel) => (
              <Link
                key={channel.label}
                href={channel.href}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-cyan-300 hover:text-cyan-100"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    {channel.label}
                  </p>
                  <p className="text-base font-semibold text-white">
                    {channel.value}
                  </p>
                </div>
                <span aria-hidden className="text-lg">
                  ↗
                </span>
              </Link>
            ))}
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">
              Response time
            </p>
            <p className="mt-2 font-semibold text-white">
              Expect a thoughtful reply within one business day with next steps
              and a quick call option.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
