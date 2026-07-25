import {
  COMPOUNDING_PERIODS_PER_YEAR,
  CMHC_PREMIUM_BANDS,
  CMHC_NON_TRADITIONAL_DOWN_PAYMENT_RATE,
  DOWN_PAYMENT_TIERS,
  INSURED_PRICE_CEILING,
  STRESS_TEST,
} from "./rates.ts";

/**
 * Core mortgage maths. Pure functions only — no formatting, no DOM, no
 * React. Everything here is unit-tested in mortgage.test.ts.
 */

export type PaymentFrequency =
  | "monthly"
  | "semi-monthly"
  | "bi-weekly"
  | "weekly"
  | "accelerated-bi-weekly"
  | "accelerated-weekly";

export const PAYMENTS_PER_YEAR: Record<PaymentFrequency, number> = {
  monthly: 12,
  "semi-monthly": 24,
  "bi-weekly": 26,
  weekly: 52,
  "accelerated-bi-weekly": 26,
  "accelerated-weekly": 52,
};

export const FREQUENCY_LABELS: Record<PaymentFrequency, string> = {
  monthly: "Monthly",
  "semi-monthly": "Semi-monthly",
  "bi-weekly": "Bi-weekly",
  weekly: "Weekly",
  "accelerated-bi-weekly": "Accelerated bi-weekly",
  "accelerated-weekly": "Accelerated weekly",
};

/**
 * Converts a nominal annual rate into the rate for one payment period,
 * respecting Canadian semi-annual compounding.
 *
 * This is the difference between a Canadian mortgage calculator and an
 * American one, and it is why most calculators online are slightly wrong
 * for Canadian borrowers.
 */
export function periodicRate(
  annualRatePercent: number,
  paymentsPerYear: number,
): number {
  if (annualRatePercent === 0) return 0;
  const nominal = annualRatePercent / 100;
  const effectiveAnnual =
    Math.pow(1 + nominal / COMPOUNDING_PERIODS_PER_YEAR, COMPOUNDING_PERIODS_PER_YEAR) - 1;
  return Math.pow(1 + effectiveAnnual, 1 / paymentsPerYear) - 1;
}

/** Level payment that amortises `principal` over `periods` at `rate`. */
export function paymentFor(
  principal: number,
  rate: number,
  periods: number,
): number {
  if (principal <= 0 || periods <= 0) return 0;
  if (rate === 0) return principal / periods;
  return (principal * rate) / (1 - Math.pow(1 + rate, -periods));
}

/**
 * Number of periods needed to clear `principal` at a given payment.
 * Used for accelerated frequencies, where the payment is fixed and the
 * amortisation is what shortens.
 *
 * Returns Infinity when the payment never covers the interest.
 */
export function periodsFor(
  principal: number,
  rate: number,
  payment: number,
): number {
  if (principal <= 0 || payment <= 0) return 0;
  if (rate === 0) return principal / payment;
  if (payment <= principal * rate) return Infinity;
  return -Math.log(1 - (principal * rate) / payment) / Math.log(1 + rate);
}

/** Minimum legal down payment, applied in slices. */
export function minimumDownPayment(price: number): number {
  const { firstTierCeiling, firstTierRate, secondTierRate, uninsurableRate } =
    DOWN_PAYMENT_TIERS;
  if (price <= 0) return 0;
  if (price >= INSURED_PRICE_CEILING) return price * uninsurableRate;
  if (price <= firstTierCeiling) return price * firstTierRate;
  return (
    firstTierCeiling * firstTierRate +
    (price - firstTierCeiling) * secondTierRate
  );
}

/**
 * CMHC premium. Returns 0 where insurance does not apply — twenty percent
 * or more down, or a price at/above the insured ceiling.
 */
export function cmhcPremium(
  price: number,
  downPayment: number,
  nonTraditionalDownPayment = false,
): { premium: number; rate: number; insurable: boolean; reason?: string } {
  const loan = price - downPayment;
  if (loan <= 0) return { premium: 0, rate: 0, insurable: false, reason: "No mortgage required." };

  const ltv = loan / price;
  if (ltv <= 0.8) {
    return { premium: 0, rate: 0, insurable: false, reason: "Down payment is 20% or more — no insurance required." };
  }
  if (price >= INSURED_PRICE_CEILING) {
    return {
      premium: 0,
      rate: 0,
      insurable: false,
      reason: "Default insurance is unavailable at this price — 20% down is required.",
    };
  }
  if (downPayment < minimumDownPayment(price)) {
    return {
      premium: 0,
      rate: 0,
      insurable: false,
      reason: "Down payment is below the legal minimum for this price.",
    };
  }

  const band = CMHC_PREMIUM_BANDS.find((b) => ltv <= b.maxLtv);
  if (!band) {
    return { premium: 0, rate: 0, insurable: false, reason: "Loan-to-value exceeds 95%." };
  }
  const rate = nonTraditionalDownPayment
    ? CMHC_NON_TRADITIONAL_DOWN_PAYMENT_RATE
    : band.rate;
  return { premium: loan * rate, rate, insurable: true };
}

/** Greater of contract rate + buffer, or the regulatory floor. */
export function qualifyingRate(contractRatePercent: number): number {
  return Math.max(
    contractRatePercent + STRESS_TEST.bufferPoints,
    STRESS_TEST.floorRate,
  );
}

export type ScheduleResult = {
  /** Amount actually borrowed, including any insurance premium added. */
  principal: number;
  cmhcPremium: number;
  payment: number;
  paymentsPerYear: number;
  /** Years to clear the debt. Shorter than requested on accelerated plans. */
  actualAmortizationYears: number;
  totalPaid: number;
  totalInterest: number;
  /** Interest saved versus the same mortgage paid monthly. */
  interestSavedVsMonthly: number;
  yearsSavedVsMonthly: number;
  insurable: boolean;
  insuranceNote?: string;
};

/**
 * Full payment schedule.
 *
 * Accelerated frequencies are modelled correctly: the payment is derived
 * from the monthly payment (halved or quartered) and the amortisation is
 * solved for, so the term genuinely shortens. The prototype multiplied a
 * fixed payment by the original amortisation, which showed no benefit at
 * all for accelerated plans — the single worst defect in the old code.
 */
export function amortizationSchedule({
  price,
  downPayment,
  annualRatePercent,
  amortizationYears,
  frequency,
  nonTraditionalDownPayment = false,
}: {
  price: number;
  downPayment: number;
  annualRatePercent: number;
  amortizationYears: number;
  frequency: PaymentFrequency;
  nonTraditionalDownPayment?: boolean;
}): ScheduleResult {
  const insurance = cmhcPremium(price, downPayment, nonTraditionalDownPayment);
  const principal = price - downPayment + insurance.premium;

  const monthlyRate = periodicRate(annualRatePercent, 12);
  const monthlyPayment = paymentFor(principal, monthlyRate, amortizationYears * 12);
  const monthlyTotal = monthlyPayment * amortizationYears * 12;

  const perYear = PAYMENTS_PER_YEAR[frequency];
  const rate = periodicRate(annualRatePercent, perYear);

  let payment: number;
  let periods: number;

  if (frequency === "accelerated-bi-weekly") {
    payment = monthlyPayment / 2;
    periods = periodsFor(principal, rate, payment);
  } else if (frequency === "accelerated-weekly") {
    payment = monthlyPayment / 4;
    periods = periodsFor(principal, rate, payment);
  } else {
    periods = amortizationYears * perYear;
    payment = paymentFor(principal, rate, periods);
  }

  const totalPaid = payment * periods;

  return {
    principal,
    cmhcPremium: insurance.premium,
    payment,
    paymentsPerYear: perYear,
    actualAmortizationYears: periods / perYear,
    totalPaid,
    totalInterest: totalPaid - principal,
    interestSavedVsMonthly: Math.max(0, monthlyTotal - totalPaid),
    yearsSavedVsMonthly: Math.max(0, amortizationYears - periods / perYear),
    insurable: insurance.insurable,
    insuranceNote: insurance.reason,
  };
}
