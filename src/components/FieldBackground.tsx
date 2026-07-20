export default function FieldBackground({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1440 640"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="fb-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f2ead8" />
          <stop offset="100%" stopColor="#e8d8a8" />
        </linearGradient>
        <radialGradient id="fb-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#d98a52" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#d98a52" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="fb-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#faf6ec" stopOpacity="0" />
          <stop offset="75%" stopColor="#faf6ec" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#faf6ec" stopOpacity="1" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="1440" height="640" fill="url(#fb-sky)" />
      <circle cx="1180" cy="150" r="260" fill="url(#fb-sun)" />

      {/* far hill */}
      <path
        d="M0 360 C 220 300, 420 310, 640 350 C 900 400, 1140 300, 1440 340 L1440 640 L0 640 Z"
        fill="#5f7135"
        opacity="0.18"
      />

      {/* mid field with furrow rows converging to a horizon point */}
      <g opacity="0.22" stroke="#445226" strokeWidth="3" fill="none">
        <path d="M-100 640 C 300 480, 1100 480, 1540 640" />
        <path d="M60 640 C 380 500, 1050 500, 1380 640" />
        <path d="M220 640 C 460 520, 1000 520, 1220 640" />
        <path d="M380 640 C 540 545, 940 545, 1060 640" />
        <path d="M540 640 C 620 565, 880 565, 900 640" />
      </g>

      <path
        d="M0 430 C 260 390, 500 460, 760 420 C 1040 378, 1260 430, 1440 400 L1440 640 L0 640 Z"
        fill="#445226"
        opacity="0.14"
      />

      <rect x="0" y="0" width="1440" height="640" fill="url(#fb-fade)" />
    </svg>
  );
}
