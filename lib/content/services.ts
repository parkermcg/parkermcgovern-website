import type { ServicePage } from "./types";

import alternativeLending from "@/content/services/alternative-lending";
import firstTimeBuyer from "@/content/services/first-time-buyer";
import refinance from "@/content/services/refinance";
import selfEmployed from "@/content/services/self-employed";
import investmentProperty from "@/content/services/investment-property";
import newToCanada from "@/content/services/new-to-canada";

/**
 * Registry of money pages. Order here is the order they appear sitewide.
 *
 * Adding a service: create content/services/<slug>.ts and add one import
 * plus one array entry. No component changes required.
 */
export const servicePages: ServicePage[] = [
  alternativeLending,
  firstTimeBuyer,
  refinance,
  selfEmployed,
  investmentProperty,
  newToCanada,
];

export const serviceSlugs = servicePages.map((p) => p.slug);

export function getService(slug: string): ServicePage | undefined {
  return servicePages.find((p) => p.slug === slug);
}
