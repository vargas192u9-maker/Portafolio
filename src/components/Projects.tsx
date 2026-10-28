"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { filters, projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  const [f, setF] = useState<(typeof filters)[number]>("Todos");
  const list = projects.filter((p) => f === "Todos" || p.category === f);
  return (
    <section id="proyectos" className="sec">
      <div className="wrap">
        <SectionTitle title="Mis proyectos" sub="Una selección de aplicaciones y sistemas que he desarrollado para poner en práctica mis conocimientos y resolver necesidades reales." />
        <div role="group" aria-label="Filtrar proyectos" className="mb-8 flex flex-wrap gap-2">
          {filters.map((x) => (
            <button key={x} onClick={() => setF(x)} aria-pressed={f === x}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${f === x ? "grad border-transparent text-white" : "border-line text-mute hover:text-fg"}`}>{x}</button>
          ))}
        </div>
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.div key={p.slug} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.25 }}>
                <ProjectCard p={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {list.length === 0 && <p className="text-mute">Aún no hay proyectos en esta categoría.</p>}
      </div>
    </section>
  );
}
