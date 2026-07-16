import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "#productos", label: "Productos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#mayoristas", label: "Mayoristas" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="El Talar — Comercial Legumbres S.R.L.">
          <Logo />
        </Link>
        <ul className="hidden gap-8 text-sm font-medium text-brown/80 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-terracotta">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contacto"
          className="rounded-full bg-olive px-5 py-2 text-sm font-semibold text-cream transition-colors hover:bg-olive-soft"
        >
          Hacé tu pedido
        </a>
      </nav>
    </header>
  );
}
