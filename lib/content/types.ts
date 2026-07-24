/**
 * Typed content layer for money pages.
 *
 * Chosen over MDX deliberately: service pages are structured, not freeform
 * prose, and a type keeps every page carrying the parts that make it rank
 * and convert — including `honest`, which is required, not optional.
 *
 * Adding a service means adding a file to content/services/ and one line in
 * lib/content/services.ts. No component is touched.
 */

export type Bullet = { t: string; d: string };

export type Block = {
  /** Rendered as <h2>. One idea per block. */
  h: string;
  p: string[];
  list?: Bullet[];
  /** Optional pull-out. Use for the thing a reader would otherwise miss. */
  aside?: { h: string; p: string };
};

export type ServicePage = {
  slug: string;
  eyebrow: string;
  /** The <h1>. */
  title: string;
  lede: string;
  /** One sentence. Used on cards sitewide. */
  summary: string;

  metaTitle: string;
  metaDescription: string;

  /** Opening paragraphs, above the first h2. */
  intro: string[];

  blocks: Block[];

  /**
   * The case against acting. Required on every money page — CLAUDE.md §6.
   * It is the strongest trust signal available and costs nothing but the
   * discipline to include it.
   */
  honest: { h: string; p: string[] };

  /** Rendered visibly AND emitted as FAQPage schema. Never one without the other. */
  faqs: { q: string; a: string }[];

  /** Slugs from lib/site.ts `calculators`. */
  calculators: string[];
  /** Slugs of sibling service pages. */
  related: string[];

  /**
   * Required on any page stating a regulatory figure — down payment
   * minimums, tax brackets, insurance caps, qualifying rules. YMYL content
   * needs a visible last-verified date and primary sources (CLAUDE.md §5).
   * Omit only where the page states no such figures.
   */
  verified?: string;
  sources?: { name: string; href: string }[];
};
