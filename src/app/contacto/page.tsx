import type { Metadata } from "next";
import { contacto } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contacto — El Talar",
  description: "Contactate con Comercial Legumbres SRL — El Talar.",
};

export default function ContactoPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
        Contacto
      </p>
      <h1 className="font-display mt-3 max-w-2xl text-4xl font-semibold leading-tight text-olive md:text-5xl">
        Hablemos
      </h1>
      <p className="mt-4 max-w-2xl text-brown/70">
        Escribinos por WhatsApp o dejanos tus datos y te respondemos a la
        brevedad.
      </p>
      <div className="mt-10 grid gap-6 text-sm text-brown/80 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className="font-semibold text-olive">Teléfono</p>
          <a href={contacto.telefono.href} className="hover:text-terracotta">
            {contacto.telefono.label}
          </a>
        </div>
        <div>
          <p className="font-semibold text-olive">WhatsApp</p>
          <a href={contacto.whatsapp.href} className="hover:text-terracotta">
            {contacto.whatsapp.label}
          </a>
        </div>
        <div>
          <p className="font-semibold text-olive">Email</p>
          <a
            href={`mailto:${contacto.email}`}
            className="hover:text-terracotta"
          >
            {contacto.email}
          </a>
        </div>
        <div>
          <p className="font-semibold text-olive">Dirección</p>
          <p>{contacto.direccion}</p>
        </div>
      </div>
    </section>
  );
}
