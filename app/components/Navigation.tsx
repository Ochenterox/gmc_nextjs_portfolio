"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group flex items-center gap-3 text-sm font-semibold"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-cyan-400 to-emerald-400 text-slate-950 shadow-lg shadow-cyan-500/30 transition group-hover:scale-105">
            MA
          </span>
          <div className="leading-tight">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Senior Engineer
            </p>
            <p className="text-base text-slate-50">Abdenasser Mohammedi</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-sm text-slate-100 shadow-lg shadow-black/30 sm:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 transition ${
                  isActive
                    ? "bg-white text-slate-900 shadow-md shadow-cyan-500/20"
                    : "text-slate-200 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/contact"
          className="hidden rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 transition hover:shadow-cyan-400/60 sm:inline-flex"
        >
          Let&apos;s talk
        </Link>
      </div>
      <nav className="mx-auto flex max-w-6xl flex-wrap gap-2 px-6 pb-4 text-sm text-slate-200 sm:hidden">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full border px-3 py-2 transition ${
                isActive
                  ? "border-cyan-300/60 bg-white/10 text-white"
                  : "border-white/10 hover:border-cyan-200/50 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
