import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/productos", label: "Productos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/mayoristas", label: "Mayoristas" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line/70 bg-cream-soft">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-2 text-sm text-muted">
          <Image
            src="/logo.png"
            alt="Comercial Legumbres S.R.L."
            width={341}
            height={118}
            className="h-9 w-auto"
          />
          <p>
            Fuentes, Santa Fe ·{" "}
            <a href="mailto:clegumbressrl@gmail.com" className="hover:text-terracotta">
              clegumbressrl@gmail.com
            </a>{" "}
            · Tel. 03464-493492 · WhatsApp 03464-446766
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-brown/80">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-terracotta">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-line/70">
        <p className="mx-auto max-w-6xl px-6 py-4 text-sm text-muted">
          © {new Date().getFullYear()} Comercial Legumbres SRL. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
