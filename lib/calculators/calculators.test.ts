import { test, describe } from "node:test";
import assert from "node:assert/strict";

import {
  periodicRate,
  paymentFor,
  periodsFor,
  minimumDownPayment,
  cmhcPremium,
  qualifyingRate,
  amortizationSchedule,
} from "./mortgage.ts";
import {
  ontarioLandTransferTax,
  torontoMunicipalLandTransferTax,
  landTransferTax,
} from "./landTransferTax.ts";
import { affordability } from "./affordability.ts";

const near = (actual: number, expected: number, tolerance = 0.5) =>
  assert.ok(
    Math.abs(actual - expected) <= tolerance,
    `expected ${actual} to be within ${tolerance} of ${expected}`,
  );

describe("periodicRate — Canadian semi-annual compounding", () => {
  test("converts a nominal annual rate for monthly payments", () => {
    // 5% nominal, semi-annual compounding -> 5.0625% effective annual
    // -> monthly periodic rate ~0.0041239
    near(periodicRate(5, 12), 0.0041239, 0.0000005);
  });

  test("is lower than naive rate/12, which is the American convention", () => {
    assert.ok(
      periodicRate(5, 12) < 5 / 100 / 12,
      "semi-annual compounding must produce a lower monthly rate than rate/12",
    );
  });

  test("handles a zero rate", () => {
    assert.equal(periodicRate(0, 12), 0);
  });
});

describe("paymentFor / periodsFor are inverses", () => {
  test("solving for periods returns the original amortisation", () => {
    const r = periodicRate(5, 12);
    const payment = paymentFor(500_000, r, 300);
    near(periodsFor(500_000, r, payment), 300, 0.001);
  });

  test("a payment that never covers interest returns Infinity", () => {
    const r = periodicRate(5, 12);
    assert.equal(periodsFor(500_000, r, 1), Infinity);
  });

  test("zero-rate loans divide evenly", () => {
    assert.equal(paymentFor(120_000, 0, 12), 10_000);
  });
});

describe("minimumDownPayment — tiered, not flat", () => {
  test("5% below the first tier ceiling", () => {
    assert.equal(minimumDownPayment(400_000), 20_000);
  });

  test("$700k needs $45k, not a flat 5%", () => {
    // 5% of first 500k = 25,000; 10% of remaining 200k = 20,000
    assert.equal(minimumDownPayment(700_000), 45_000);
  });

  test("20% at and above the insured ceiling", () => {
    assert.equal(minimumDownPayment(1_500_000), 300_000);
  });
});

describe("cmhcPremium", () => {
  test("no premium at 20% down", () => {
    const r = cmhcPremium(500_000, 100_000);
    assert.equal(r.premium, 0);
    assert.equal(r.insurable, false);
  });

  test("95% LTV attracts the 4.00% band", () => {
    const r = cmhcPremium(500_000, 25_000);
    assert.equal(r.rate, 0.04);
    near(r.premium, 475_000 * 0.04);
    assert.equal(r.insurable, true);
  });

  test("just over 80% LTV attracts the 2.80% band", () => {
    const r = cmhcPremium(500_000, 90_000); // 82% LTV
    assert.equal(r.rate, 0.028);
  });

  test("not available at or above the insured price ceiling", () => {
    const r = cmhcPremium(1_500_000, 150_000);
    assert.equal(r.insurable, false);
    assert.match(r.reason ?? "", /unavailable at this price/);
  });

  test("non-traditional down payment uses the higher rate", () => {
    const r = cmhcPremium(500_000, 25_000, true);
    assert.equal(r.rate, 0.045);
  });
});

describe("qualifyingRate — stress test", () => {
  test("uses the floor when the contract rate is low", () => {
    assert.equal(qualifyingRate(2.5), 5.25);
  });

  test("uses contract + 2 when that is higher", () => {
    assert.equal(qualifyingRate(4.5), 6.5);
  });
});

describe("Ontario land transfer tax", () => {
  test("$650,000 produces $9,475", () => {
    // 275 + 1,950 + 2,250 + 5,000
    near(ontarioLandTransferTax(650_000), 9_475);
  });

  test("the $4,000 rebate corresponds to roughly a $368,000 home", () => {
    // Ontario states first-time buyers pay no LTT on the first $368,000
    near(ontarioLandTransferTax(368_000), 3_995, 5);
  });

  test("zero and negative prices are safe", () => {
    assert.equal(ontarioLandTransferTax(0), 0);
    assert.equal(ontarioLandTransferTax(-1), 0);
  });
});

describe("Toronto MLTT — bands changed 1 April 2026", () => {
  test("matches the provincial tax below $2M", () => {
    near(torontoMunicipalLandTransferTax(650_000), 9_475);
  });

  test("$3.5M uses the 4.40% band, not the old 3.5%", () => {
    // up to 3M: 275 + 1,950 + 2,250 + 32,000 + 25,000 = 61,475
    // plus 500,000 @ 4.40% = 22,000  ->  83,475
    near(torontoMunicipalLandTransferTax(3_500_000), 83_475);
  });

  test("high-value bands exist above $5M", () => {
    const atFive = torontoMunicipalLandTransferTax(5_000_000);
    const atSix = torontoMunicipalLandTransferTax(6_000_000);
    // the extra $1M is taxed at 6.50%
    near(atSix - atFive, 65_000);
  });
});

describe("landTransferTax — combined with rebates", () => {
  test("Toronto first-time buyer at $650k", () => {
    const r = landTransferTax({ price: 650_000, inToronto: true, firstTimeBuyer: true });
    near(r.provincial, 9_475);
    near(r.municipal, 9_475);
    near(r.provincialRebate, 4_000);
    near(r.municipalRebate, 4_475);
    near(r.total, 10_475);
  });

  test("outside Toronto there is no municipal tax", () => {
    const r = landTransferTax({ price: 650_000, firstTimeBuyer: true });
    assert.equal(r.municipal, 0);
    assert.equal(r.municipalRebate, 0);
    near(r.total, 5_475);
  });

  test("rebate cannot exceed the tax owing", () => {
    const r = landTransferTax({ price: 200_000, firstTimeBuyer: true });
    assert.equal(r.total, 0);
    assert.ok(r.provincialRebate < 4_000);
  });
});

describe("amortizationSchedule", () => {
  const base = {
    price: 700_000,
    downPayment: 140_000, // 20%, so no insurance
    annualRatePercent: 5,
    amortizationYears: 25,
    frequency: "monthly" as const,
  };

  test("20% down borrows exactly the balance with no premium", () => {
    const r = amortizationSchedule(base);
    assert.equal(r.cmhcPremium, 0);
    assert.equal(r.principal, 560_000);
  });

  test("under 20% down adds the premium to the amount borrowed", () => {
    const r = amortizationSchedule({ ...base, downPayment: 45_000 });
    assert.ok(r.cmhcPremium > 0);
    assert.ok(r.principal > 700_000 - 45_000);
  });

  test("total paid exceeds principal, and interest is the difference", () => {
    const r = amortizationSchedule(base);
    assert.ok(r.totalPaid > r.principal);
    near(r.totalInterest, r.totalPaid - r.principal, 0.01);
  });

  test("REGRESSION: accelerated bi-weekly shortens the amortisation", () => {
    // The prototype multiplied a fixed payment by the original amortisation,
    // so accelerated plans showed no benefit whatsoever.
    const monthly = amortizationSchedule(base);
    const accelerated = amortizationSchedule({
      ...base,
      frequency: "accelerated-bi-weekly",
    });

    assert.ok(
      accelerated.actualAmortizationYears < 25,
      "accelerated bi-weekly must finish sooner than 25 years",
    );
    assert.ok(
      accelerated.yearsSavedVsMonthly > 2,
      "accelerated bi-weekly should save more than two years at 5%",
    );
    assert.ok(
      accelerated.totalInterest < monthly.totalInterest,
      "accelerated bi-weekly must cost less interest than monthly",
    );
    near(accelerated.payment, monthly.payment / 2, 0.01);
  });

  test("plain bi-weekly keeps the full amortisation", () => {
    const r = amortizationSchedule({ ...base, frequency: "bi-weekly" });
    near(r.actualAmortizationYears, 25, 0.01);
    assert.equal(r.yearsSavedVsMonthly, 0);
  });

  test("a shorter amortisation costs less interest", () => {
    const long = amortizationSchedule(base);
    const short = amortizationSchedule({ ...base, amortizationYears: 15 });
    assert.ok(short.totalInterest < long.totalInterest);
    assert.ok(short.payment > long.payment);
  });
});

describe("affordability", () => {
  const base = {
    grossAnnualIncome: 120_000,
    monthlyDebtPayments: 0,
    downPayment: 100_000,
    contractRatePercent: 4.5,
    amortizationYears: 25,
  };

  test("qualifies at the stress-tested rate, not the contract rate", () => {
    const r = affordability(base);
    assert.equal(r.qualifyingRatePercent, 6.5);
  });

  test("GDS binds when there is no other debt", () => {
    const r = affordability(base);
    assert.equal(r.bindingTest, "GDS");
  });

  test("adding a car loan makes TDS bind and lowers the price", () => {
    const withDebt = affordability({ ...base, monthlyDebtPayments: 700 });
    const without = affordability(base);
    assert.equal(withDebt.bindingTest, "TDS");
    assert.ok(withDebt.maxPrice < without.maxPrice);
  });

  test("a $700/mo car loan costs many multiples of $700 in buying power", () => {
    const withDebt = affordability({ ...base, monthlyDebtPayments: 700 });
    const without = affordability(base);
    const reduction = without.maxPrice - withDebt.maxPrice;

    /**
     * Note the interaction: GDS binds at $3,900 before the debt exists, so
     * a $700 payment only costs $200/mo of housing allowance — TDS falls to
     * $3,700 and takes over as the constraint. Despite that, the price
     * ceiling still drops by roughly $26.5k, about 38x the monthly payment.
     * The debt consumes ratio room, not money pound for pound.
     */
    assert.ok(
      reduction > 700 * 20,
      `expected the reduction (${reduction.toFixed(0)}) to exceed 20x the payment`,
    );
  });

  test("condo fees reduce what you can borrow", () => {
    const withFees = affordability({ ...base, monthlyCondoFees: 600 });
    assert.ok(withFees.maxPrice < affordability(base).maxPrice);
  });

  test("a small down payment becomes the binding constraint", () => {
    const r = affordability({ ...base, downPayment: 20_000 });
    assert.equal(r.limitedByDownPayment, true);
    near(r.maxPrice, 400_000, 1);
  });

  test("zero income yields zero, not a negative price", () => {
    const r = affordability({ ...base, grossAnnualIncome: 0, downPayment: 0 });
    assert.equal(r.maxPrice, 0);
  });
});
