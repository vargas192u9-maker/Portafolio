"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { profile, sections } from "@/data/profile";

export default function Navbar({ hasCv }: { hasCv: boolean }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => { const el = document.getElementById(s.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="glass fixed inset-x-0 top-0 z-50 border-b border-line">
      <nav aria-label="Principal" className="wrap flex h-16 items-center justify-between">
        <Link href="/" className="grad grid h-9 w-9 place-items-center rounded-lg text-sm font-bold" aria-label="Gustavo Vargas, inicio">GV</Link>
        <ul className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <Link href={`/#${s.id}`} aria-current={active === s.id ? "true" : undefined}
                className={`relative rounded-lg px-3 py-2 text-sm transition-colors ${active === s.id ? "text-fg" : "text-mute hover:text-fg"}`}>
                {s.label}
                {active === s.id && <span className="grad absolute inset-x-3 -bottom-0.5 h-0.5 rounded" />}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          {hasCv && <a href={profile.cvPath} download className="btn btn-p hidden !py-2 md:inline-flex"><Download size={16} />Descargar CV</a>}
          <button className="rounded-lg p-2 md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Cerrar menú" : "Abrir menú"}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="wrap flex flex-col gap-1 pb-4 md:hidden">
          {sections.map((s) => (
            <li key={s.id}>
              <Link href={`/#${s.id}`} onClick={() => setOpen(false)} className={`block rounded-lg px-3 py-3 ${active === s.id ? "bg-card text-fg" : "text-mute"}`}>{s.label}</Link>
            </li>
          ))}
          {hasCv && <li><a href={profile.cvPath} download className="btn btn-p mt-2 w-full justify-center"><Download size={16} />Descargar CV</a></li>}
        </ul>
      )}
    </header>
  );
}
