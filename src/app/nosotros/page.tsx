import type { Metadata } from "next";
import { valores } from "@/lib/content";

export const metadata: Metadata = {
  title: "Nosotros — El Talar",
  description:
    "Comercial Legumbres SRL: calidad controlada, trazabilidad y trato directo en cada lote de legumbres.",
};

export default function NosotrosPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
        Nosotros
      </p>
      <h1 className="font-display mt-3 max-w-2xl text-4xl font-semibold leading-tight text-olive md:text-5xl">
        Comercial Legumbres SRL
      </h1>
      <p className="mt-4 max-w-2xl text-brown/70">
        Somos una empresa de Fuentes, Santa Fe, dedicada a la comercialización
        de legumbres bajo la marca El Talar. Trabajamos a granel, envasadas y
        por mayor, con foco en calidad y en un trato directo con cada cliente.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {valores.map((valor) => (
          <div key={valor.title} className="rounded-2xl border border-line bg-card p-6">
            <h3 className="font-display text-xl font-semibold text-olive">
              {valor.title}
            </h3>
            <p className="mt-2 text-sm text-brown/70">{valor.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
