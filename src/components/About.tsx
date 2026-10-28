import { GraduationCap, FolderCode, TrendingUp } from "lucide-react";
import { profile } from "@/data/profile";
import SectionTitle from "./SectionTitle";

const icons = [GraduationCap, FolderCode, TrendingUp];

export default function About() {
  return (
    <section id="sobre-mi" className="sec bg-bg2/60">
      <div className="wrap">
        <SectionTitle title="Conoce un poco sobre mí" />
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4 leading-relaxed text-mute">{profile.about.map((p) => <p key={p}>{p}</p>)}</div>
          <div className="grid gap-4">
            {profile.aboutCards.map((c, n) => {
              const Icon = icons[n];
              return (
                <div key={c.title} className="flex gap-4 rounded-2xl border border-line bg-card p-5 transition-colors hover:border-ac">
                  <Icon className="mt-1 shrink-0 text-ac2" />
                  <div><h3 className="font-semibold">{c.title}</h3><p className="mt-1 text-sm text-mute">{c.text}</p></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
