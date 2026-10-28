import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectCover from "./ProjectCover";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-card transition-all hover:-translate-y-1 hover:border-ac">
      <ProjectCover name={p.name} label={p.label} />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2 text-xs">
          <span className="text-ac2">{p.label}</span>
          <span className="rounded-full border border-line px-2.5 py-0.5 text-mute">{p.status}</span>
        </div>
        <h3 className="mt-3 text-xl font-semibold">{p.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-mute">{p.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {p.tech.map((t) => <li key={t} className="rounded-md bg-bg2 px-2 py-1 text-xs text-mute">{t}</li>)}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link href={`/proyectos/${p.slug}`} className="btn btn-p !py-2">Ver detalles</Link>
          {p.site && <a href={p.site} target="_blank" rel="noopener noreferrer" className="btn btn-s !py-2"><ExternalLink size={15} />Visitar sitio</a>}
          {p.repo && <a href={p.repo} target="_blank" rel="noopener noreferrer" className="btn btn-s !py-2">Ver código</a>}
        </div>
      </div>
    </article>
  );
}
