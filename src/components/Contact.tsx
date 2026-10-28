import { Download, Mail, Terminal } from "lucide-react";
import { profile } from "@/data/profile";

export default function Contact({ hasCv }: { hasCv: boolean }) {
  return (
    <section id="contacto" className="sec">
      <div className="wrap">
        <div className="glass rounded-3xl border border-line p-8 text-center md:p-14">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">¿Tienes una oportunidad para mí?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-mute">Estoy interesado en oportunidades laborales, prácticas profesionales y proyectos tecnológicos que me permitan seguir creciendo como desarrollador de software.</p>
          <p className="mx-auto mt-3 max-w-2xl text-mute">Si deseas conocer más sobre mi trabajo o contactarme para una oportunidad, estaré encantado de conversar contigo.</p>
          <p className="mt-6 font-mono text-ac2">{profile.email}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${profile.email}`} className="btn btn-p"><Mail size={16} />Enviar correo</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-s"><Terminal size={16} />GitHub</a>
            {hasCv && <a href={profile.cvPath} download className="btn btn-s"><Download size={16} />Descargar CV</a>}
          </div>
        </div>
      </div>
    </section>
  );
}
