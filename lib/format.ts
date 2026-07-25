/** Display formatting. Kept out of lib/calculators so the maths stays pure. */

const cad = (opts: Intl.NumberFormatOptions) =>
  new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", ...opts });

const whole = cad({ maximumFractionDigits: 0 });
const cents = cad({ minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const money = (n: number) => whole.format(Math.round(n));
export const moneyExact = (n: number) => cents.format(n);
export const percent = (n: number, dp = 2) => `${n.toFixed(dp)}%`;

export function years(n: number): string {
  const whole = Math.floor(n);
  const months = Math.round((n - whole) * 12);
  if (months === 0) return `${whole} yr${whole === 1 ? "" : "s"}`;
  if (months === 12) return `${whole + 1} yrs`;
  return `${whole} yr${whole === 1 ? "" : "s"} ${months} mo`;
}
