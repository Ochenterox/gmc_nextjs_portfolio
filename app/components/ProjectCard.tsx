import Image from "next/image";
import Link from "next/link";
import type { Project } from "../lib/projects";

type Props = {
  project: Project;
  priority?: boolean;
};

export default function ProjectCard({ project, priority }: Props) {
  return (
    <article className="group rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_80px_rgba(0,0,0,0.55)] transition hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/20">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40">
        <Image
          src={project.image}
          alt={project.title}
          width={960}
          height={540}
          priority={priority}
          className="h-52 w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100 backdrop-blur"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
            {project.category} · {project.year}
          </p>
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="text-sm text-slate-300">{project.description}</p>
        </div>
        <Link
          href={project.link}
          className="rounded-full border border-cyan-400/80 px-3 py-1 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-400 hover:text-slate-950"
          target={project.link.startsWith("http") ? "_blank" : undefined}
          rel={project.link.startsWith("http") ? "noreferrer" : undefined}
        >
          View
        </Link>
      </div>
    </article>
  );
}
