import type { APIRoute } from "astro";
import { siteUrl } from "../data/site";
import { services } from "../data/services";
import { locations } from "../data/locations";

export const GET: APIRoute = () => {
  const paths = [
    "/",
    "/about.html",
    "/services.html",
    "/contact.html",
    "/service-areas.html",
    ...services.map((service) => `/${service.slug}.html`),
    ...locations.map((location) => `/${location.slug}.html`),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map((path) => {
    const loc = path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`;
    return `  <url><loc>${loc}</loc></url>`;
  })
  .join("\n")}
</urlset>`;
  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
