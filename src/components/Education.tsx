import { profile } from "@/data/profile";
import SectionTitle from "./SectionTitle";

export default function Education() {
  return (
    <section id="formacion" className="sec">
      <div className="wrap">
        <SectionTitle title="Mi formación" />
        <ol className="relative ml-3 border-l border-line">
          {profile.education.map((e) => (
            <li key={e.title} className="mb-10 ml-8 last:mb-0">
              <span aria-hidden className="grad absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full ring-4 ring-bg" />
              <h3 className="text-xl font-semibold">{e.title}</h3>
              <p className="text-ac2">{e.school}</p>
              <p className="mt-1 text-sm text-mute">Estado: {e.status}</p>
              <p className="mt-3 max-w-xl text-mute">{e.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
