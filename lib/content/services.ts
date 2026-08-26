import type { ServicePage } from "./types";

import renewal from "@/content/services/renewal";
import alternativeLending from "@/content/services/alternative-lending";
import firstTimeBuyer from "@/content/services/first-time-buyer";
import refinance from "@/content/services/refinance";
import selfEmployed from "@/content/services/self-employed";
import investmentProperty from "@/content/services/investment-property";
import newToCanada from "@/content/services/new-to-canada";
import noPayment from "@/content/services/no-payment";
import badCredit from "@/content/services/bad-credit";
import paymentRelief from "@/content/services/payment-relief";

/**
 * Registry of money pages. Order here is the order they appear sitewide.
 *
 * Adding a service: create content/services/<slug>.ts and add one import
 * plus one array entry. No component changes required.
 */
export const servicePages: ServicePage[] = [
  renewal,
  alternativeLending,
  firstTimeBuyer,
  refinance,
  selfEmployed,
  investmentProperty,
  newToCanada,
  noPayment,
  badCredit,
  paymentRelief,
];

export const serviceSlugs = servicePages.map((p) => p.slug);

/** Signed-off money pages only — what the nav, homepage, footer and sitemap use. */
export const publishedServicePages = servicePages.filter((p) => !p.draft);

/**
 * Money pages as header nav links.
 *
 * Derived rather than hand-listed so adding a service file still means no
 * component changes — it appears in the "Types of mortgages" dropdown on its
 * own. Imported by a server component and passed to the client Header as a
 * prop, deliberately: importing this module directly into the client bundle
 * would ship every page's full body copy to the browser.
 */
export const serviceNavItems = publishedServicePages.map((p) => ({
  href: `/mortgages/${p.slug}`,
  label: p.eyebrow,
}));

export function getService(slug: string): ServicePage | undefined {
  return servicePages.find((p) => p.slug === slug);
}
