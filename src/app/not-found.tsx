import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-start gap-4 px-6 py-24">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
        Error 404
      </p>
      <h1 className="font-display text-4xl font-semibold text-olive md:text-5xl">
        No encontramos esta página
      </h1>
      <p className="text-brown/70">
        El enlace puede estar roto o la página se movió. Volvé al inicio o
        escribinos si necesitás ayuda.
      </p>
      <div className="flex flex-wrap gap-4 pt-2">
        <Link
          href="/"
          className="rounded-full bg-olive px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-olive-soft"
        >
          Volver al inicio
        </Link>
        <Link
          href="/contacto"
          className="rounded-full border border-olive px-6 py-3 text-sm font-semibold text-olive transition-colors hover:bg-olive hover:text-cream"
        >
          Contactanos
        </Link>
      </div>
    </section>
  );
}
