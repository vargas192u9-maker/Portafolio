import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, ImageOff } from "lucide-react";
import { projects } from "@/data/projects";
import { hasCv } from "@/lib/cv";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCover from "@/components/ProjectCover";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: p.name, description: p.summary, openGraph: { title: p.name, description: p.summary } } : {};
}

function Block({ title, items, empty }: { title: string; items?: string[]; empty?: string }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold">{title}</h2>
      {items?.length ? (
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-mute">{items.map((i) => <li key={i}>{i}</li>)}</ul>
      ) : <p className="mt-3 text-sm text-mute">{empty ?? "Información por agregar."}</p>}
    </section>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <>
      <Navbar hasCv={hasCv()} />
      <main className="wrap max-w-4xl pb-20 pt-28">
        <Link href="/#proyectos" className="btn btn-s !py-2"><ArrowLeft size={16} />Volver a proyectos</Link>
        <div className="mt-6 overflow-hidden rounded-2xl border border-line"><ProjectCover name={p.name} label={p.label} /></div>
        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
          <span className="text-ac2">{p.label}</span>
          <span className="rounded-full border border-line px-3 py-0.5 text-mute">{p.status}</span>
        </div>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">{p.name}</h1>
        <div className="mt-4 space-y-3 leading-relaxed text-mute">{p.description.map((d) => <p key={d}>{d}</p>)}</div>
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Problema que resuelve</h2>
          <p className="mt-3 text-mute">{p.problem}</p>
        </section>
        <Block title="Objetivos" items={p.objectives} />
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Tecnologías utilizadas</h2>
          <ul className="mt-3 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="rounded-lg bg-card px-3 py-1.5 text-sm">{t}</li>)}</ul>
        </section>
        <Block title="Funcionalidades principales" items={p.features} />
        <Block title="Mi participación en el desarrollo" items={p.participation} />
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Galería de capturas</h2>
          {p.screenshots?.length ? (
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              {p.screenshots.map((s) => /* eslint-disable-next-line @next/next/no-img-element */ <img key={s} src={s} alt={`Captura de ${p.name}`} loading="lazy" className="rounded-xl border border-line" />)}
            </div>
          ) : (
            <div className="mt-3 flex items-center gap-3 rounded-xl border border-dashed border-line p-6 text-sm text-mute"><ImageOff size={20} />Las capturas reales se agregarán próximamente.</div>
          )}
        </section>
        <Block title="Desafíos técnicos" items={p.challenges} />
        <Block title="Soluciones implementadas" items={p.solutions} />
        <Block title="Aprendizajes" items={p.learnings} />
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Enlaces disponibles</h2>
          <div className="mt-3 flex flex-wrap gap-3">
            {p.site && <a href={p.site} target="_blank" rel="noopener noreferrer" className="btn btn-p"><ExternalLink size={16} />Visitar sitio web</a>}
            {p.repo && <a href={p.repo} target="_blank" rel="noopener noreferrer" className="btn btn-s">Ver código</a>}
            {!p.site && !p.repo && <p className="text-sm text-mute">Este proyecto no cuenta con enlaces públicos por ahora.</p>}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
