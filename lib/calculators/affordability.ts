import { DEBT_SERVICE_LIMITS } from "./rates.ts";
import { periodicRate, paymentFor, qualifyingRate, minimumDownPayment, cmhcPremium } from "./mortgage.ts";

/**
 * What a lender will actually advance, using the two debt-service ratios.
 *
 * GDS compares housing costs alone against gross income. TDS adds every
 * other debt payment. The binding constraint is whichever produces the
 * smaller answer — usually TDS once a car loan is in the picture.
 *
 * Qualification uses the stress-tested rate, not the contract rate.
 */

export type AffordabilityResult = {
  qualifyingRatePercent: number;
  /** Monthly room for housing costs under each test. */
  gdsAllowance: number;
  tdsAllowance: number;
  bindingTest: "GDS" | "TDS";
  /** Housing budget after property tax, heat and condo fees are removed. */
  maxMortgagePayment: number;
  maxLoan: number;
  maxPrice: number;
  estimatedPropertyTaxMonthly: number;
  cmhcPremium: number;
  /** True when the answer is limited by savings rather than income. */
  limitedByDownPayment: boolean;
};

const PROPERTY_TAX_RATE_ANNUAL = 0.01; // ~1% of value, typical GTA assumption

export function affordability({
  grossAnnualIncome,
  monthlyDebtPayments,
  downPayment,
  contractRatePercent,
  amortizationYears,
  monthlyHeat = 100,
  monthlyCondoFees = 0,
}: {
  grossAnnualIncome: number;
  monthlyDebtPayments: number;
  downPayment: number;
  contractRatePercent: number;
  amortizationYears: number;
  monthlyHeat?: number;
  monthlyCondoFees?: number;
}): AffordabilityResult {
  const monthlyIncome = grossAnnualIncome / 12;
  const qRate = qualifyingRate(contractRatePercent);
  const rate = periodicRate(qRate, 12);
  const periods = amortizationYears * 12;

  const gdsAllowance = monthlyIncome * DEBT_SERVICE_LIMITS.gds;
  const tdsAllowance =
    monthlyIncome * DEBT_SERVICE_LIMITS.tds - monthlyDebtPayments;
  const housingAllowance = Math.max(0, Math.min(gdsAllowance, tdsAllowance));

  // Lenders count half of condo fees toward housing costs.
  const fixedCosts = monthlyHeat + monthlyCondoFees * 0.5;

  /**
   * Property tax depends on price, which depends on the payment, which
   * depends on the tax. Converges in a handful of passes.
   */
  let maxPayment = Math.max(0, housingAllowance - fixedCosts);
  let estimatedTax = 0;
  let maxLoan = 0;
  let maxPrice = 0;

  for (let i = 0; i < 8; i++) {
    maxPayment = Math.max(0, housingAllowance - fixedCosts - estimatedTax);
    maxLoan =
      rate === 0
        ? maxPayment * periods
        : (maxPayment * (1 - Math.pow(1 + rate, -periods))) / rate;
    maxPrice = maxLoan + downPayment;
    estimatedTax = (maxPrice * PROPERTY_TAX_RATE_ANNUAL) / 12;
  }

  /**
   * The income-based answer may require a larger down payment than the
   * buyer has. Where it does, the real ceiling is what their savings can
   * legally support.
   */
  let limitedByDownPayment = false;
  if (downPayment > 0 && maxPrice > 0 && downPayment < minimumDownPayment(maxPrice)) {
    limitedByDownPayment = true;
    // Solve the tiered minimum backwards from the available down payment.
    if (downPayment <= 25_000) {
      maxPrice = downPayment / 0.05;
    } else {
      maxPrice = Math.min(
        (downPayment - 25_000) / 0.1 + 500_000,
        downPayment / 0.2 >= 1_500_000 ? downPayment / 0.2 : Infinity,
      );
    }
    maxLoan = Math.max(0, maxPrice - downPayment);
  }

  const insurance = cmhcPremium(maxPrice, downPayment);

  return {
    qualifyingRatePercent: qRate,
    gdsAllowance,
    tdsAllowance: Math.max(0, tdsAllowance),
    bindingTest: tdsAllowance < gdsAllowance ? "TDS" : "GDS",
    maxMortgagePayment: maxPayment,
    maxLoan: Math.max(0, maxLoan),
    maxPrice: Math.max(0, maxPrice),
    estimatedPropertyTaxMonthly: estimatedTax,
    cmhcPremium: insurance.premium,
    limitedByDownPayment,
  };
}
