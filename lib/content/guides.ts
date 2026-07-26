/**
 * Education hub content layer.
 *
 * YMYL content, so the type enforces the E-E-A-T floor: every guide must
 * carry a last-updated date and at least one primary source. Those are
 * required fields, not optional ones (CLAUDE.md §5).
 */

export type GuideCluster =
  | "renewal"
  | "first-time-buyer"
  | "deciding"
  | "working-with-an-agent";

export const CLUSTERS: Record<GuideCluster, { label: string; blurb: string }> = {
  renewal: {
    label: "Renewing",
    blurb: "Your term is ending and the letter has arrived.",
  },
  "first-time-buyer": {
    label: "Buying your first place",
    blurb: "What it costs, what you need, and what nobody explains up front.",
  },
  deciding: {
    label: "Making the decision",
    blurb: "The trade-offs that actually change what you pay.",
  },
  "working-with-an-agent": {
    label: "How this works",
    blurb: "What a mortgage agent does, and what it costs you.",
  },
};

export type GuideSection = {
  h: string;
  p: string[];
  list?: { t: string; d: string }[];
  aside?: { h: string; p: string };
};

export type Guide = {
  slug: string;
  cluster: GuideCluster;
  title: string;
  lede: string;
  metaTitle: string;
  metaDescription: string;

  /** ISO dates. `updated` renders visibly on the page. */
  published: string;
  updated: string;

  intro: string[];
  /** Scannable summary. Sits above the body and is what most readers take away. */
  takeaways: string[];
  sections: GuideSection[];
  faqs?: { q: string; a: string }[];

  /** Required — YMYL content states facts and must cite them. */
  sources: { name: string; href: string }[];

  relatedGuides?: string[];
  relatedServices?: string[];
  relatedCalculators?: string[];
};

import penalties from "@/content/guides/mortgage-penalties-ird";
import fixedVsVariable from "@/content/guides/fixed-vs-variable";
import downPayment from "@/content/guides/how-much-down-payment";
import closingCosts from "@/content/guides/closing-costs-ontario";
import landTransferTax from "@/content/guides/ontario-land-transfer-tax-explained";
import stressTest from "@/content/guides/stress-test-explained";
import creditScore from "@/content/guides/does-rate-shopping-hurt-credit";
import declined from "@/content/guides/what-to-do-when-declined";

/**
 * Registry. Adding a guide: create content/guides/<slug>.ts, add one import
 * and one array entry. No component is touched.
 */
export const guides: Guide[] = [
  penalties,
  fixedVsVariable,
  downPayment,
  closingCosts,
  landTransferTax,
  stressTest,
  creditScore,
  declined,
];

export const guideSlugs = guides.map((g) => g.slug);
export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);

export function guidesByCluster(cluster: GuideCluster) {
  return guides.filter((g) => g.cluster === cluster);
}
