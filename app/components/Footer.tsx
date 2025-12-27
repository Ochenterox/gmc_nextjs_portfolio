import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Stay in the loop
          </p>
          <p className="mt-2 max-w-xl text-lg text-slate-100">
            Senior Frontend & Full-Stack Engineer building high-performance
            Next.js products, AI workflows with schema guarantees, and secure
            local-first experiences.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-slate-200">
          <Link
            href="mailto:abdenasser.mohammedi@outlook.com"
            className="rounded-full border border-white/10 px-4 py-2 transition hover:border-cyan-400 hover:text-white"
          >
            abdenasser.mohammedi@outlook.com
          </Link>
          <Link
            href="https://github.com/mdinacer"
            className="rounded-full border border-white/10 px-4 py-2 transition hover:border-cyan-400 hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/mdinacer"
            className="rounded-full border border-white/10 px-4 py-2 transition hover:border-cyan-400 hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
