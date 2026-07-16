export default function Footer() {
  return (
    <footer className="border-t border-line/70 bg-cream-soft">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-olive">El Talar</p>
          <p>Comercial Legumbres SRL</p>
        </div>
        <p>© {new Date().getFullYear()} Comercial Legumbres SRL. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
