import { businessName, alternateName, phoneTel, siteUrl } from "./site";
import { locations } from "./locations";

type Crumb = { name: string; path: string };
type Faq = { q: string; a: string };

const businessId = `${siteUrl}/#business`;
const websiteId = `${siteUrl}/#website`;

function businessNode() {
  return {
    "@type": "HomeAndConstructionBusiness",
    "@id": businessId,
    name: businessName,
    alternateName,
    url: `${siteUrl}/`,
    telephone: phoneTel,
    image: `${siteUrl}/images/hero.jpg`,
    logo: `${siteUrl}/favicon.svg`,
    description:
      "Fence installation for homes, commercial lots, and acreage in Beaumont, Texas. Wood, vinyl, chain link, aluminum, and farm fence, quoted from the property.",
    areaServed: locations.map((location) => ({
      "@type": "City",
      name: location.city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: `${location.county}, Texas`,
      },
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Beaumont",
      addressRegion: "TX",
      addressCountry: "US",
    },
    knowsAbout: [
      "wood fence installation",
      "vinyl fence installation",
      "chain link fence installation",
      "aluminum fence installation",
      "farm fence installation",
      "commercial fencing",
    ],
  };
}

export function pageSchema(opts: {
  path: string;
  title: string;
  description: string;
  crumbs: Crumb[];
  faqs?: Faq[];
  service?: { name: string; description: string };
}) {
  const url = opts.path === "/" ? `${siteUrl}/` : `${siteUrl}${opts.path}`;
  const pageId = `${url}#webpage`;
  const graph: Record<string, unknown>[] = [
    businessNode(),
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: `${siteUrl}/`,
      name: businessName,
      publisher: { "@id": businessId },
    },
    {
      "@type": "WebPage",
      "@id": pageId,
      url,
      name: opts.title,
      description: opts.description,
      isPartOf: { "@id": websiteId },
      about: { "@id": businessId },
      primaryImageOfPage: `${siteUrl}/images/hero.jpg`,
      inLanguage: "en-US",
      breadcrumb: { "@id": `${url}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: opts.crumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: crumb.path === "/" ? `${siteUrl}/` : `${siteUrl}${crumb.path}`,
      })),
    },
  ];

  if (opts.service) {
    const serviceId = `${url}#service`;
    graph.push({
      "@type": "Service",
      "@id": serviceId,
      name: opts.service.name,
      serviceType: opts.service.name,
      description: opts.service.description,
      url,
      provider: { "@id": businessId },
      areaServed: {
        "@type": "City",
        name: "Beaumont",
        containedInPlace: { "@type": "State", name: "Texas" },
      },
    });
    const page = graph.find((node) => node["@id"] === pageId);
    if (page) page.mainEntity = { "@id": serviceId };
  }

  if (opts.faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      url,
      mainEntity: opts.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
