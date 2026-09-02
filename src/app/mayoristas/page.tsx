import type { Metadata } from "next";
import Link from "next/link";
import { mayoristasBeneficios } from "@/lib/content";

export const metadata: Metadata = {
  title: "Mayoristas — El Talar",
  description:
    "Condiciones mayoristas de El Talar para almacenes, dietéticas, distribuidores e industria alimenticia.",
};

export default function MayoristasPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
        Mayoristas
      </p>
      <div className="mt-3 grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="font-display max-w-xl text-4xl font-semibold leading-tight text-olive md:text-5xl">
            ¿Sos comercio o distribuidor?
          </h1>
          <p className="mt-4 text-brown/70">
            Ofrecemos condiciones mayoristas para almacenes, dietéticas,
            distribuidores e industria alimenticia. Contanos qué volumen y
            qué productos necesitás y armamos una propuesta a medida.
          </p>
          <Link
            href="/contacto"
            className="mt-6 inline-block rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-soft"
          >
            Pedir condiciones mayoristas
          </Link>
        </div>
        <div className="rounded-2xl border border-line bg-card p-8">
          <ul className="space-y-3 text-sm text-brown/80">
            {mayoristasBeneficios.map((beneficio) => (
              <li key={beneficio}>• {beneficio}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
