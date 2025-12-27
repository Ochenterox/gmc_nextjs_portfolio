import ProjectCard from "../components/ProjectCard";
import { projects } from "../lib/projects";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-6 pb-16 pt-10">
      <div className="flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">
          Projects
        </p>
        <h1 className="text-4xl font-semibold text-white">Hands-on work</h1>
        <p className="max-w-3xl text-lg text-slate-200">
          A snapshot of product, design, and engineering efforts—from data-rich
          dashboards to systems that keep teams aligned.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            priority={index === 0}
          />
        ))}
      </div>
    </div>
  );
}
