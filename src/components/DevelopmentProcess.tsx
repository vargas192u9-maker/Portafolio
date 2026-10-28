import { profile } from "@/data/profile";
import SectionTitle from "./SectionTitle";

export default function DevelopmentProcess() {
  return (
    <section className="sec bg-bg2/60">
      <div className="wrap">
        <SectionTitle title="De una idea a una solución" />
        <ol className="grid gap-5 md:grid-cols-4">
          {profile.process.map((s, n) => (
            <li key={s.title} className="rounded-2xl border border-line bg-card p-5">
              <span className="grad bg-clip-text font-mono text-2xl font-bold text-transparent">{String(n + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-mute">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
