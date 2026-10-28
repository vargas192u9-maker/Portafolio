import { skillGroups } from "@/data/skills";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section id="habilidades" className="sec bg-bg2/60">
      <div className="wrap">
        <SectionTitle title="Tecnologías con las que trabajo" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ title, icon: Icon, items }) => (
            <div key={title} className="rounded-2xl border border-line bg-card p-5 transition-colors hover:border-ac2">
              <Icon className="text-ac2" />
              <h3 className="mt-3 font-semibold">{title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((i) => <li key={i} className="rounded-lg bg-bg2 px-3 py-1.5 text-sm">{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
