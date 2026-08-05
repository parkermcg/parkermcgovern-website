/**
 * Single source of truth for every business fact on this site.
 *
 * Nothing here may be invented. Each value is verified — see CLAUDE.md §3.
 * If a fact is not in this file, it does not go on the site.
 */

export const site = {
  name: "Parker McGovern",
  role: "Mortgage Agent, Level 2",

  /**
   * The listing name exactly as the Google Business Profile displays it.
   * Used for LocalBusiness schema, where NAP must match GBP character for
   * character. Distinct from `name`, which is the person.
   */
  businessName: "Parker McGovern Mortgage Agent",

  /** Verified by Parker 2026-07-25. Safe to publish — CLAUDE.md §3. */
  lenderCount: "40+",
  url: "https://parkermcgovern.ca",

  licence: {
    agent: "M21002541",
    brokerage: "12707",
    brokerageName: "Mortgagebroker.ca",
    regulator:
      "Financial Services Regulatory Authority of Ontario (FSRA)",
  },

  contact: {
    phone: "647-453-1222",
    phoneHref: "tel:+16474531222",
    email: "parker@mortgagebroker.ca",
    emailHref: "mailto:parker@mortgagebroker.ca",
  },

  /** Must match the Google Business Profile character for character. */
  address: {
    street: "65B West Beaver Creek Rd",
    locality: "Richmond Hill",
    region: "ON",
    postalCode: "L4B 1Y4",
    country: "CA",
  },

  /** Confirmed by Parker 2026-07-24. Must stay in sync with GBP. */
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], open: "07:30", close: "18:00" },
    { days: ["Saturday", "Sunday"], open: "12:00", close: "18:00" },
  ],
  hoursLabel: "Mon–Fri 7:30am–6pm · Sat–Sun 12pm–6pm",

  credentials: {
    degree: "B.Comm, Real Estate & Housing",
    school: "University of Guelph",
  },

  /** Genuine Google reviews. Displayed as text only — never marked up as schema. */
  reviews: { rating: 5.0, count: 45 },

  links: {
    book: "https://calendly.com/mortgageagent",
    apply: "https://velocity.newton.ca/sso/public.php?sc=2xreedfpzly7",
    /**
     * Google Business Profile share link, supplied by Parker 2026-07-25.
     * Could not be verified programmatically — Google blocks automated
     * fetches of Maps listings. Confirm it opens correctly in a browser.
     */
    gbp: "https://share.google/v72Zg2uBHomJxQ8YE",
  },

  /**
   * areaServed. Signals GTA reach without per-town pages — see
   * docs/sitemap-plan.md §1 on why those are a doorway-pattern risk.
   */
  areaServed: [
    "Richmond Hill", "Vaughan", "Markham", "Aurora", "Newmarket",
    "King", "Whitchurch-Stouffville", "East Gwillimbury",
    "Toronto", "Mississauga", "Brampton", "Oakville", "Burlington",
    "Pickering", "Ajax", "Whitby", "Oshawa", "Caledon", "Milton",
  ],

  /** Approved verbatim. Do not paraphrase — CLAUDE.md §4. */
  regulatoryNotice:
    "Regulatory notice: Parker McGovern is a licensed Mortgage Agent (Level 2), Lic. #M21002541, registered with Mortgagebroker.ca, Brokerage Lic. #12707, a mortgage brokerage regulated by the Financial Services Regulatory Authority of Ontario (FSRA). Rates, payments, and qualification figures shown throughout this site are estimates for illustrative purposes only, are not a commitment to lend, and are subject to change and lender approval.",
} as const;

export const formattedAddress = `${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}`;

/** Five calculators, each its own indexable page — docs/sitemap-plan.md §3. */
export const calculators = [
  { slug: "mortgage-payment", title: "Mortgage payment", blurb: "What your payment looks like at different rates, terms and frequencies." },
  { slug: "ontario-land-transfer-tax", title: "Ontario land transfer tax", blurb: "Provincial tax, the extra Toronto charge, and the first-time buyer rebate." },
  { slug: "affordability", title: "Affordability", blurb: "What you can borrow, using the debt-service ratios lenders actually apply." },
  { slug: "cmhc-insurance", title: "CMHC insurance", blurb: "The premium added to your mortgage when you put down less than 20%." },
  { slug: "stress-test", title: "Stress test", blurb: "The higher rate you must qualify at, even though you won't pay it." },
] as const;

/**
 * Secondary nav. The money pages are NOT listed here — they come from
 * `serviceNavItems` in lib/content/services.ts and render as the
 * "Types of mortgages" dropdown ahead of these items.
 */
export const nav = [
  { href: "/independent-enquiry", label: "Independent enquiry" },
  { href: "/calculators", label: "Calculators" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
