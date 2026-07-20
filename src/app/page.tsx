const productos = [
  {
    title: "Legumbres a granel",
    description:
      "Lentejas, garbanzos, porotos y arvejas seleccionadas, vendidas por peso para almacenes, dietéticas y consumidores que compran de a bolsa.",
  },
  {
    title: "Envasadas — marca El Talar",
    description:
      "La misma calidad, lista para góndola: paquetes con marca propia, pensados para reventa en supermercados y comercios de cercanía.",
  },
  {
    title: "Venta mayorista",
    description:
      "Volúmenes grandes para distribuidores, comercios e industria alimenticia, con condiciones comerciales pensadas para negocio B2B.",
  },
];

const valores = [
  {
    title: "Calidad controlada",
    description: "Selección y control de calidad en cada lote, de origen a entrega.",
  },
  {
    title: "Trazabilidad",
    description: "Sabemos de dónde viene cada legumbre que vendemos.",
  },
  {
    title: "Trato directo",
    description: "Atención personalizada, sin intermediarios innecesarios.",
  },
];

export default function Home() {
  return (
    <>
      <section className="border-b border-line/70 bg-cream-soft">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-20 md:py-28">
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
            <a
              href="#productos"
              className="rounded-full bg-olive px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-olive-soft"
            >
              Ver productos
            </a>
            <a
              href="#contacto"
              className="rounded-full border border-olive px-6 py-3 text-sm font-semibold text-olive transition-colors hover:bg-olive hover:text-cream"
            >
              Contactanos
            </a>
          </div>
        </div>
      </section>

      <section id="nosotros" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-3">
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

      <section id="productos" className="border-y border-line/70 bg-cream-soft">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl font-semibold text-olive md:text-4xl">
            Nuestros productos
          </h2>
          <p className="mt-3 max-w-2xl text-brown/70">
            Tres formas de trabajar con nosotros, según lo que necesite tu
            negocio.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {productos.map((producto) => (
              <div
                key={producto.title}
                className="flex flex-col gap-3 rounded-2xl border border-line bg-card p-6"
              >
                <h3 className="font-display text-xl font-semibold text-terracotta">
                  {producto.title}
                </h3>
                <p className="text-sm text-brown/70">{producto.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mayoristas" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold text-olive md:text-4xl">
              ¿Sos comercio o distribuidor?
            </h2>
            <p className="mt-4 text-brown/70">
              Ofrecemos condiciones mayoristas para almacenes, dietéticas,
              distribuidores e industria alimenticia. Contanos qué volumen y
              qué productos necesitás y armamos una propuesta a medida.
            </p>
            <a
              href="#contacto"
              className="mt-6 inline-block rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-soft"
            >
              Pedir condiciones mayoristas
            </a>
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

      <section id="contacto" className="border-t border-line/70 bg-cream-soft">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl font-semibold text-olive md:text-4xl">
            Contacto
          </h2>
          <p className="mt-3 max-w-2xl text-brown/70">
            Escribinos por WhatsApp o dejanos tus datos y te respondemos a la
            brevedad.
          </p>
          <div className="mt-8 grid gap-6 text-sm text-brown/80 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <p className="font-semibold text-olive">Teléfono</p>
              <a href="tel:+543464493492" className="hover:text-terracotta">
                03464-493492
              </a>
            </div>
            <div>
              <p className="font-semibold text-olive">WhatsApp</p>
              <a
                href="https://wa.me/5493464446766"
                className="hover:text-terracotta"
              >
                03464-446766
              </a>
            </div>
            <div>
              <p className="font-semibold text-olive">Email</p>
              <a
                href="mailto:clegumbressrl@gmail.com"
                className="hover:text-terracotta"
              >
                clegumbressrl@gmail.com
              </a>
            </div>
            <div>
              <p className="font-semibold text-olive">Dirección</p>
              <p>Fuentes, Santa Fe</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
