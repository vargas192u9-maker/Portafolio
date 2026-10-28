import Link from "next/link";
export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="grad bg-clip-text text-7xl font-bold text-transparent">404</p>
        <h1 className="mt-4 text-2xl font-semibold">Esta página no existe</h1>
        <p className="mt-2 text-mute">Puede que el enlace haya cambiado. Vuelve al inicio para seguir explorando.</p>
        <Link href="/" className="btn btn-p mt-8">Volver al inicio</Link>
      </div>
    </main>
  );
}
