export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 88" className={className} aria-hidden="true">
      <path
        d="M50 4 L94 84 L70 84 L50 42 L30 84 L6 84 Z"
        fill="var(--color-olive)"
      />
      <path
        d="M50 30 L78 84 L60 84 L50 58 L40 84 L22 84 Z"
        fill="var(--color-sage)"
      />
    </svg>
  );
}

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="leading-tight">
        <span className="block font-display text-sm font-bold uppercase tracking-wide text-olive md:text-base">
          Comercial Legumbres
        </span>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.35em] text-muted">
          S.R.L.
        </span>
      </span>
    </span>
  );
}
