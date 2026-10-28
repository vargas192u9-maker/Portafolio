import Link from "next/link";
import { profile, sections } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg2/60 py-10">
      <div className="wrap flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">{profile.name}</p>
          <p className="text-sm text-mute">{profile.title}.</p>
          <p className="mt-1 text-sm text-mute">Creando soluciones, aprendiendo constantemente.</p>
        </div>
        <nav aria-label="Pie de página" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-mute">
          {sections.map((s) => <Link key={s.id} href={`/#${s.id}`} className="hover:text-fg">{s.label}</Link>)}
          <a href={`mailto:${profile.email}`} className="hover:text-fg">Correo</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-fg">GitHub</a>
        </nav>
      </div>
      <p className="wrap mt-6 text-xs text-mute">© {new Date().getFullYear()} {profile.name}</p>
    </footer>
  );
}
