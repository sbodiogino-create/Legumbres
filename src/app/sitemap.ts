import type { MetadataRoute } from "next";

const siteUrl = "https://legumbres.vercel.app";
const routes = ["", "/productos", "/nosotros", "/mayoristas", "/contacto"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
