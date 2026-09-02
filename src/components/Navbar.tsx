"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/productos", label: "Productos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/mayoristas", label: "Mayoristas" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="Comercial Legumbres S.R.L.">
          <Image
            src="/logo.png"
            alt="Comercial Legumbres S.R.L."
            width={341}
            height={118}
            priority
            className="h-10 w-auto md:h-12"
          />
        </Link>
        <ul className="hidden gap-8 text-sm font-medium text-brown/80 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-colors hover:text-terracotta">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contacto"
          className="hidden rounded-full bg-olive px-5 py-2 text-sm font-semibold text-cream transition-colors hover:bg-olive-soft md:inline-block"
        >
          Hacé tu pedido
        </Link>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-olive md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>
      {open && (
        <div className="border-t border-line/70 bg-cream md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4 text-sm font-medium text-brown/80">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-3 transition-colors hover:bg-cream-soft hover:text-terracotta"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contacto"
                className="block rounded-full bg-olive px-5 py-3 text-center font-semibold text-cream transition-colors hover:bg-olive-soft"
              >
                Hacé tu pedido
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
