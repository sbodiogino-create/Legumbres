import Image from "next/image";
import Link from "next/link";
import FieldBackground from "@/components/FieldBackground";
import { catalogo, valores } from "@/lib/content";

const catalogoPreview = catalogo.slice(0, 4);

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line/70">
        <FieldBackground className="absolute inset-0 -z-10 h-full w-full" />
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-24 md:py-32">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
            Comercial Legumbres SRL
          </p>
          <h1 className="font-display max-w-3xl text-4xl font-semibold leading-tight text-olive md:text-6xl">
            Legumbres de calidad, de la chacra a tu negocio
          </h1>
          <p className="max-w-2xl text-lg text-brown/80">
            En El Talar comercializamos legumbres a granel, envasadas con
            marca propia y por mayor. Trabajamos con almacenes, dietéticas,
            distribuidores y comercios que buscan un proveedor confiable.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/productos"
              className="rounded-full bg-olive px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-olive-soft"
            >
              Ver productos
            </Link>
            <Link
              href="/contacto"
              className="rounded-full border border-olive px-6 py-3 text-sm font-semibold text-olive transition-colors hover:bg-olive hover:text-cream"
            >
              Contactanos
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-semibold text-olive md:text-4xl">
              Nosotros
            </h2>
            <p className="mt-3 max-w-2xl text-brown/70">
              Calidad, trazabilidad y trato directo en cada lote.
            </p>
          </div>
          <Link
            href="/nosotros"
            className="text-sm font-semibold text-terracotta hover:text-terracotta-soft"
          >
            Conocé más →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
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

      <section className="border-y border-line/70 bg-cream-soft">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-semibold text-olive md:text-4xl">
                Productos
              </h2>
              <p className="mt-3 max-w-2xl text-brown/70">
                Legumbres a granel, envasadas con marca propia y venta
                mayorista.
              </p>
            </div>
            <Link
              href="/productos"
              className="text-sm font-semibold text-terracotta hover:text-terracotta-soft"
            >
              Ver catálogo completo →
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {catalogoPreview.map((item) => (
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
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold text-olive md:text-4xl">
              ¿Sos comercio o distribuidor?
            </h2>
            <p className="mt-4 text-brown/70">
              Ofrecemos condiciones mayoristas para almacenes, dietéticas,
              distribuidores e industria alimenticia.
            </p>
            <Link
              href="/mayoristas"
              className="mt-6 inline-block rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-soft"
            >
              Ver condiciones mayoristas
            </Link>
          </div>
          <div className="rounded-2xl border border-line bg-card p-8">
            <ul className="space-y-3 text-sm text-brown/80">
              <li>• Precios diferenciales por volumen</li>
              <li>• Entregas coordinadas según tu operación</li>
              <li>• Facturación y condiciones para comercios</li>
              <li>• Stock permanente de las principales variedades</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
