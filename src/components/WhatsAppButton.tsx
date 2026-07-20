const WHATSAPP_NUMBER = "5493464466766";
const MESSAGE = encodeURIComponent(
  "Hola, quiero hacer una consulta sobre los productos de El Talar."
);

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-olive px-5 py-3 text-sm font-semibold text-cream shadow-lg shadow-olive/30 transition-transform hover:scale-105"
      aria-label="Escribinos por WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-current"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.62 1.44 5.13L2 22l5.13-1.53a9.87 9.87 0 0 0 4.91 1.31h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.83 9.83 0 0 0 12.04 2Zm0 1.8c2.13 0 4.12.83 5.63 2.33a7.9 7.9 0 0 1 2.34 5.62c0 4.4-3.59 7.98-8 7.98a7.9 7.9 0 0 1-4.03-1.1l-.29-.17-3.04.91.91-2.98-.19-.3a7.86 7.86 0 0 1-1.22-4.23c0-4.4 3.59-7.98 7.99-7.98Zm-4.4 4.36c-.15 0-.4.06-.6.29-.21.23-.8.79-.8 1.92 0 1.13.82 2.22.93 2.37.12.15 1.6 2.5 3.93 3.4 1.94.76 2.34.6 2.76.57.42-.04 1.35-.55 1.55-1.08.19-.53.19-.99.13-1.08-.06-.1-.21-.15-.44-.27-.23-.12-1.35-.67-1.56-.74-.21-.08-.36-.12-.52.11-.15.23-.6.74-.73.9-.14.15-.27.17-.5.06-.23-.12-.98-.36-1.87-1.15-.69-.61-1.16-1.37-1.29-1.6-.14-.23-.02-.35.1-.47.11-.11.23-.27.35-.4.11-.14.15-.23.23-.38.08-.15.04-.29-.02-.4-.06-.12-.52-1.28-.72-1.75-.19-.46-.38-.4-.52-.4Z" />
      </svg>
      Escribinos
    </a>
  );
}
