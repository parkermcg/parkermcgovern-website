/**
 * Every rate constant used by the calculators, with its primary source and
 * the date it was last checked (CLAUDE.md §7).
 *
 * These are the numbers a reader will make a financial decision on. Do not
 * edit one without opening its source URL and confirming it first, then
 * updating VERIFIED_ON.
 */

export const VERIFIED_ON = "July 2026";

export const SOURCES = {
  ontarioLtt: {
    name: "Ontario Ministry of Finance — Calculating Land Transfer Tax",
    href: "https://www.ontario.ca/document/land-transfer-tax/calculating-land-transfer-tax",
  },
  ontarioRebate: {
    name: "Ontario Ministry of Finance — Refunds for First-Time Homebuyers",
    href: "https://www.ontario.ca/document/land-transfer-tax/land-transfer-tax-refunds-first-time-homebuyers",
  },
  torontoMltt: {
    name: "City of Toronto — Municipal Land Transfer Tax rates",
    href: "https://www.toronto.ca/services-payments/property-taxes-utilities/municipal-land-transfer-tax-mltt/municipal-land-transfer-tax-mltt-rates-and-fees/",
  },
  cmhc: {
    name: "CMHC — Premium information for homeowner loans",
    href: "https://www.cmhc-schl.gc.ca/professionals/project-funding-and-mortgage-financing/mortgage-loan-insurance/mortgage-loan-insurance-homeownership-programs/premium-information-for-homeowner-and-small-rental-loans",
  },
  stressTest: {
    name: "OSFI — Minimum qualifying rate for uninsured mortgages",
    href: "https://www.osfi-bsif.gc.ca/en/supervision/financial-institutions/banks/minimum-qualifying-rate-uninsured-mortgages",
  },
  downPayment: {
    name: "Financial Consumer Agency of Canada — Down payment",
    href: "https://www.canada.ca/en/financial-consumer-agency/services/mortgages/down-payment.html",
  },
} as const;

/** A tax bracket: everything above `upTo` of the previous band, to `upTo`. */
export type Bracket = { upTo: number; rate: number };

/**
 * Ontario Land Transfer Tax — one or two single-family residences.
 * Verified July 2026 against SOURCES.ontarioLtt.
 */
export const ONTARIO_LTT_BRACKETS: Bracket[] = [
  { upTo: 55_000, rate: 0.005 },
  { upTo: 250_000, rate: 0.01 },
  { upTo: 400_000, rate: 0.015 },
  { upTo: 2_000_000, rate: 0.02 },
  { upTo: Infinity, rate: 0.025 },
];

/**
 * Toronto Municipal Land Transfer Tax — one or two single-family residences.
 *
 * CHANGED 1 April 2026: graduated high-value bands were introduced. The
 * bands above $3M are materially higher than the previous schedule — an
 * older calculator will understate the tax on an expensive property by a
 * long way. Verified July 2026 against SOURCES.torontoMltt.
 */
export const TORONTO_MLTT_BRACKETS: Bracket[] = [
  { upTo: 55_000, rate: 0.005 },
  { upTo: 250_000, rate: 0.01 },
  { upTo: 400_000, rate: 0.015 },
  { upTo: 2_000_000, rate: 0.02 },
  { upTo: 3_000_000, rate: 0.025 },
  { upTo: 4_000_000, rate: 0.044 },
  { upTo: 5_000_000, rate: 0.0545 },
  { upTo: 10_000_000, rate: 0.065 },
  { upTo: 20_000_000, rate: 0.0755 },
  { upTo: Infinity, rate: 0.086 },
];

/** First-time buyer rebate ceilings. Verified July 2026. */
export const FIRST_TIME_BUYER_REBATE = {
  ontario: 4_000,
  toronto: 4_475,
} as const;

/**
 * CMHC premium as a share of the loan, by loan-to-value band.
 * Verified July 2026 against SOURCES.cmhc.
 */
export const CMHC_PREMIUM_BANDS: { maxLtv: number; rate: number }[] = [
  { maxLtv: 0.65, rate: 0.006 },
  { maxLtv: 0.75, rate: 0.017 },
  { maxLtv: 0.8, rate: 0.024 },
  { maxLtv: 0.85, rate: 0.028 },
  { maxLtv: 0.9, rate: 0.031 },
  { maxLtv: 0.95, rate: 0.04 },
];

/** Applies where the down payment is borrowed rather than from savings/gift. */
export const CMHC_NON_TRADITIONAL_DOWN_PAYMENT_RATE = 0.045;

/** Default insurance is unavailable at or above this price. */
export const INSURED_PRICE_CEILING = 1_500_000;

/** Down payment minimums, applied in slices. Verified July 2026. */
export const DOWN_PAYMENT_TIERS = {
  firstTierCeiling: 500_000,
  firstTierRate: 0.05,
  secondTierRate: 0.1,
  uninsurableRate: 0.2,
} as const;

/**
 * Stress test: qualify at the greater of contract rate + buffer, or the
 * floor. Verified July 2026 against SOURCES.stressTest.
 */
export const STRESS_TEST = { bufferPoints: 2, floorRate: 5.25 } as const;

/** Ratio ceilings lenders apply. Widely used guideline values. */
export const DEBT_SERVICE_LIMITS = { gds: 0.39, tds: 0.44 } as const;

/** Canadian mortgages compound semi-annually, not monthly. */
export const COMPOUNDING_PERIODS_PER_YEAR = 2;
