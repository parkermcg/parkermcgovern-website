import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { publishedServicePages } from "@/lib/content/services";
import { calculatorPages } from "@/lib/content/calculators";
import { publishedGuides } from "@/lib/content/guides";
import { publishedAreas } from "@/lib/content/areas";

/**
 * Only live routes belong here. Entries are added as each phase ships —
 * listing a 404 in the sitemap is a crawl-budget and quality-signal problem.
 */
const routes: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" },
  { path: "/about", priority: 0.8, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/inquire", priority: 0.8, changeFrequency: "yearly" },
  { path: "/apply", priority: 0.9, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  ...publishedServicePages.map((p) => ({
    path: `/mortgages/${p.slug}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  })),
  { path: "/calculators", priority: 0.8, changeFrequency: "monthly" as const },
  ...calculatorPages.map((c) => ({
    path: `/calculators/${c.slug}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  })),
  { path: "/service-areas", priority: 0.7, changeFrequency: "yearly" as const },
  ...publishedAreas.map((a) => ({
    path: `/service-areas/${a.slug}`,
    priority: 0.7,
    changeFrequency: "yearly" as const,
  })),
  { path: "/guides", priority: 0.7, changeFrequency: "monthly" as const },
  ...publishedGuides.map((g) => ({
    path: `/guides/${g.slug}`,
    priority: 0.7,
    changeFrequency: "yearly" as const,
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
