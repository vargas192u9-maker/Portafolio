export default function ProjectCover({ name, label }: { name: string; label: string }) {
  return (
    <div className="relative grid aspect-video place-items-center overflow-hidden bg-gradient-to-br from-ac/30 via-bg2 to-ac2/20">
      <svg aria-hidden className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice">
        <path d="M0 140 L120 60 L200 120 L320 30" fill="none" stroke="#38bdf8" strokeWidth="1" />
        <circle cx="120" cy="60" r="4" fill="#6366f1" /><circle cx="200" cy="120" r="4" fill="#38bdf8" />
      </svg>
      <div className="relative text-center">
        <p className="text-2xl font-bold">{name}</p>
        <p className="mt-1 font-mono text-xs text-mute">{label}</p>
      </div>
      <span className="absolute bottom-2 right-2 rounded bg-bg/70 px-2 py-0.5 text-[11px] text-mute">Portada provisional</span>
    </div>
  );
}
