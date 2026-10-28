"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowDown, Mail, Terminal } from "lucide-react";
import { profile } from "@/data/profile";

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % profile.rotating.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div aria-hidden className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-ac/25 blur-[120px]" />
      <div aria-hidden className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-ac2/20 blur-[120px]" />
      <div className="wrap relative grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Hola, soy {profile.name}.
            <span className="grad mt-2 block bg-clip-text text-transparent">{profile.title}</span>
          </h1>
          <p className="mt-4 h-8 font-mono text-lg text-ac2" aria-live="off">
            <AnimatePresence mode="wait">
              <motion.span key={i} className="inline-block" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
                &gt; {profile.rotating[i]}
              </motion.span>
            </AnimatePresence>
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mute">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#proyectos" className="btn btn-p"><ArrowDown size={16} />Explorar proyectos</a>
            <a href="#contacto" className="btn btn-s"><Mail size={16} />Contactarme</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-s"><Terminal size={16} />GitHub</a>
          </div>
        </motion.div>
        <motion.div aria-hidden initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="hidden md:block">
          <div className="glass rounded-2xl border border-line p-5 font-mono text-sm shadow-2xl shadow-ac/10">
            <div className="mb-4 flex gap-1.5"><i className="h-3 w-3 rounded-full bg-line" /><i className="h-3 w-3 rounded-full bg-line" /><i className="h-3 w-3 rounded-full bg-line" /></div>
            <p><span className="text-ac">const</span> <span className="text-ac2">gustavo</span> = {"{"}</p>
            <p className="pl-5">rol: <span className="text-emerald-300">&quot;Desarrollador de Software&quot;</span>,</p>
            <p className="pl-5">enfoque: [<span className="text-emerald-300">&quot;Web&quot;</span>, <span className="text-emerald-300">&quot;Android&quot;</span>],</p>
            <p className="pl-5">ubicacion: <span className="text-emerald-300">&quot;Chihuahua&quot;</span>,</p>
            <p className="pl-5">aprendiendo: <span className="text-ac">true</span>,</p>
            <p>{"}"};</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
