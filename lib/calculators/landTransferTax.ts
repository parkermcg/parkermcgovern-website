import {
  ONTARIO_LTT_BRACKETS,
  TORONTO_MLTT_BRACKETS,
  FIRST_TIME_BUYER_REBATE,
  type Bracket,
} from "./rates.ts";

/**
 * Ontario land transfer tax, and Toronto's additional municipal tax.
 *
 * British Columbia was implemented in the prototype and is removed here —
 * it was never relevant to an Ontario-licensed agent and only added surface
 * area to keep verified.
 */

/** Applies a marginal bracket table to a price. */
export function applyBrackets(price: number, brackets: Bracket[]): number {
  if (price <= 0) return 0;
  let tax = 0;
  let previousCeiling = 0;
  for (const { upTo, rate } of brackets) {
    if (price <= previousCeiling) break;
    const taxableInBand = Math.min(price, upTo) - previousCeiling;
    tax += taxableInBand * rate;
    previousCeiling = upTo;
  }
  return tax;
}

export const ontarioLandTransferTax = (price: number) =>
  applyBrackets(price, ONTARIO_LTT_BRACKETS);

export const torontoMunicipalLandTransferTax = (price: number) =>
  applyBrackets(price, TORONTO_MLTT_BRACKETS);

export type LandTransferTaxResult = {
  provincial: number;
  municipal: number;
  provincialRebate: number;
  municipalRebate: number;
  totalRebate: number;
  /** What actually leaves your account on closing day. */
  total: number;
  /** Before any first-time buyer rebate. */
  totalBeforeRebate: number;
};

export function landTransferTax({
  price,
  inToronto = false,
  firstTimeBuyer = false,
}: {
  price: number;
  inToronto?: boolean;
  firstTimeBuyer?: boolean;
}): LandTransferTaxResult {
  const provincial = ontarioLandTransferTax(price);
  const municipal = inToronto ? torontoMunicipalLandTransferTax(price) : 0;

  // Rebates are capped, and cannot exceed the tax actually owing.
  const provincialRebate = firstTimeBuyer
    ? Math.min(FIRST_TIME_BUYER_REBATE.ontario, provincial)
    : 0;
  const municipalRebate =
    firstTimeBuyer && inToronto
      ? Math.min(FIRST_TIME_BUYER_REBATE.toronto, municipal)
      : 0;

  const totalBeforeRebate = provincial + municipal;
  const totalRebate = provincialRebate + municipalRebate;

  return {
    provincial,
    municipal,
    provincialRebate,
    municipalRebate,
    totalRebate,
    total: Math.max(0, totalBeforeRebate - totalRebate),
    totalBeforeRebate,
  };
}
