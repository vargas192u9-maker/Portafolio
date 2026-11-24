export default function SectionTitle({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mb-10 max-w-2xl sm:mb-12">
      <h2 className="text-[clamp(1.85rem,4vw,2.75rem)] font-semibold leading-tight tracking-[-.04em]">{title}</h2>
      {sub && <p className="mt-4 max-w-xl text-base leading-7 text-mute">{sub}</p>}
    </div>
  );
}
