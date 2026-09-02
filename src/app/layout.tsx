import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { contacto } from "@/lib/content";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://legumbres.vercel.app";
const title = "El Talar — Comercial Legumbres SRL";
const description =
  "El Talar. Legumbres a granel, envasadas y venta mayorista. Calidad y trazabilidad para tu negocio o tu mesa.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s",
  },
  description,
  keywords: [
    "legumbres",
    "El Talar",
    "Comercial Legumbres SRL",
    "legumbres a granel",
    "legumbres mayorista",
    "porotos",
    "lentejas",
    "garbanzos",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "El Talar",
    locale: "es_AR",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "El Talar — Comercial Legumbres SRL",
  image: `${siteUrl}/og-image.png`,
  url: siteUrl,
  telephone: contacto.telefono.label,
  email: contacto.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fuentes",
    addressRegion: "Santa Fe",
    addressCountry: "AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-AR"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-brown">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
