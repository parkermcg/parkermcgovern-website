import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Only live routes belong here. Entries are added as each phase ships —
 * listing a 404 in the sitemap is a crawl-budget and quality signal problem.
 */
const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
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
