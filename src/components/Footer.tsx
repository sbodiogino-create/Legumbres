import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-line/70 bg-cream-soft">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
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
            · Tel. 03464-493492 · WhatsApp 03464-466766
          </p>
        </div>
        <p>© {new Date().getFullYear()} Comercial Legumbres SRL. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
