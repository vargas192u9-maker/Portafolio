export default function SectionTitle({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mb-12 max-w-2xl">
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-mute">{sub}</p>}
    </div>
  );
}
