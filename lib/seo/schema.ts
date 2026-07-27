import { site } from "@/lib/site";

/**
 * JSON-LD builders.
 *
 * Rule: only mark up what is actually visible on the page (CLAUDE.md §5).
 *
 * Deliberately absent: AggregateRating / Review. The 45 reviews are genuine
 * but hosted on Google. Self-serving review markup on our own domain sits
 * outside Google's guidelines and risks a manual action — CLAUDE.md §4.
 */

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: site.address.street,
  addressLocality: site.address.locality,
  addressRegion: site.address.region,
  postalCode: site.address.postalCode,
  addressCountry: site.address.country,
} as const;

const openingHours = site.hours.map((h) => ({
  "@type": "OpeningHoursSpecification",
  dayOfWeek: h.days,
  opens: h.open,
  closes: h.close,
}));

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["FinancialService", "LocalBusiness"],
    "@id": `${site.url}/#business`,
    name: site.businessName,
    url: site.url,
    telephone: site.contact.phone,
    email: site.contact.email,
    address: postalAddress,
    openingHoursSpecification: openingHours,
    areaServed: site.areaServed.map((n) => ({
      "@type": "City",
      name: n,
      containedInPlace: { "@type": "State", name: "Ontario" },
    })),
    provider: {
      "@type": "Organization",
      name: site.licence.brokerageName,
      identifier: `Brokerage Licence ${site.licence.brokerage}`,
    },
    founder: { "@id": `${site.url}/#parker` },
    disambiguatingDescription: site.regulatoryNotice,
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/#parker`,
    name: site.name,
    jobTitle: site.role,
    identifier: `FSRA Mortgage Agent Licence ${site.licence.agent}`,
    telephone: site.contact.phone,
    email: site.contact.email,
    url: `${site.url}/about`,
    image: `${site.url}/parker-mcgovern.jpg`,
    worksFor: {
      "@type": "Organization",
      name: site.licence.brokerageName,
      identifier: `Brokerage Licence ${site.licence.brokerage}`,
    },
    alumniOf: { "@type": "CollegeOrUniversity", name: site.credentials.school },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "licence",
      name: `${site.role} — ${site.licence.regulator}`,
      identifier: site.licence.agent,
    },
    knowsAbout: [
      "Mortgage renewal",
      "First-time home buyers",
      "Mortgage refinancing",
      "Self-employed mortgages",
      "Investment property financing",
      "New to Canada mortgage programs",
    ],
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${site.url}${c.path}`,
    })),
  };
}

/** Only call where the questions and answers are visibly rendered. */
export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

/**
 * Article markup for guides. YMYL content requires an identifiable author
 * with credentials, and dates that match what renders on the page.
 */
export function articleSchema({
  title,
  description,
  path,
  published,
  updated,
}: {
  title: string;
  description: string;
  path: string;
  published: string;
  updated: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}${path}` },
    datePublished: published,
    dateModified: updated,
    author: { "@id": `${site.url}/#parker` },
    publisher: { "@id": `${site.url}/#business` },
    inLanguage: "en-CA",
  };
}
