import type { Metadata } from "next";
import Image from "next/image";
import { catalogo, lineas } from "@/lib/content";

export const metadata: Metadata = {
  title: "Productos — El Talar",
  description:
    "Catálogo El Talar: legumbres a granel, envasadas de 400 g y venta mayorista.",
};

export default function ProductosPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
        Productos
      </p>
      <h1 className="font-display mt-3 max-w-2xl text-4xl font-semibold leading-tight text-olive md:text-5xl">
        Nuestros productos
      </h1>
      <p className="mt-4 max-w-2xl text-brown/70">
        Tres formas de trabajar con nosotros, según lo que necesite tu
        negocio.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {lineas.map((linea) => (
          <div
            key={linea.title}
            className="flex flex-col gap-3 rounded-2xl border border-line bg-card p-6"
          >
            <h3 className="font-display text-xl font-semibold text-terracotta">
              {linea.title}
            </h3>
            <p className="text-sm text-brown/70">{linea.description}</p>
          </div>
        ))}
      </div>

      <h2 className="font-display mt-16 text-2xl font-semibold text-olive">
        Catálogo El Talar
      </h2>
      <p className="mt-3 max-w-2xl text-brown/70">
        Variedades envasadas de 400 g, listas para góndola.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
        {catalogo.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-2xl border border-line bg-card"
          >
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={item.image}
                alt={`Bolsa de ${item.name} El Talar, 400 g`}
                fill
                sizes="(min-width: 768px) 22vw, 45vw"
                className="object-cover"
              />
            </div>
            <p className="px-3 py-3 text-center text-sm font-semibold text-olive">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
