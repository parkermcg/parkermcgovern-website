"use client";

import { useMemo, useState } from "react";
import { affordability } from "@/lib/calculators/affordability";
import { VERIFIED_ON, SOURCES } from "@/lib/calculators/rates";
import { money, percent } from "@/lib/format";
import { StatementCard } from "@/components/ui/StatementCard";
import { CalculatorShell, Slider } from "./Controls";

export function AffordabilityCalculator() {
  const [income, setIncome] = useState(140_000);
  const [debts, setDebts] = useState(400);
  const [down, setDown] = useState(120_000);
  const [rate, setRate] = useState(4.5);
  const [amort, setAmort] = useState(25);
  const [condoFees, setCondoFees] = useState(0);

  const r = useMemo(
    () =>
      affordability({
        grossAnnualIncome: income,
        monthlyDebtPayments: debts,
        downPayment: down,
        contractRatePercent: rate,
        amortizationYears: amort,
        monthlyCondoFees: condoFees,
      }),
    [income, debts, down, rate, amort, condoFees],
  );

  return (
    <CalculatorShell
      inputs={
        <>
          <Slider
            label="Household income before tax"
            value={income}
            display={`${money(income)} / yr`}
            min={40_000}
            max={500_000}
            step={5_000}
            onChange={setIncome}
          />
          <Slider
            label="Other monthly debt payments"
            value={debts}
            display={`${money(debts)} / mo`}
            min={0}
            max={4_000}
            step={50}
            onChange={setDebts}
          />
          <Slider
            label="Down payment saved"
            value={down}
            display={money(down)}
            min={10_000}
            max={800_000}
            step={5_000}
            onChange={setDown}
          />
          <Slider
            label="Condo fees (0 if not a condo)"
            value={condoFees}
            display={`${money(condoFees)} / mo`}
            min={0}
            max={1_500}
            step={25}
            onChange={setCondoFees}
          />
          <Slider
            label="Rate you expect to be offered"
            value={rate}
            display={percent(rate)}
            min={1}
            max={12}
            step={0.05}
            onChange={setRate}
          />
          <Slider
            label="Amortisation"
            value={amort}
            display={`${amort} years`}
            min={5}
            max={30}
            step={1}
            onChange={setAmort}
          />
        </>
      }
      result={
        <StatementCard
          label="Estimated maximum purchase price"
          figure={money(r.maxPrice)}
          note={
            r.limitedByDownPayment
              ? "Your income supports more than this — the down payment is the limiting factor."
              : `Limited by the ${r.bindingTest} ratio. Qualified at ${percent(r.qualifyingRatePercent)}, not the rate you entered.`
          }
          verified={VERIFIED_ON}
          source={SOURCES.stressTest}
          qualifier="Estimate only. Lender criteria vary and this is not an approval."
          lines={[
            { label: "Qualifying rate (stress test)", value: percent(r.qualifyingRatePercent), tone: "caution" },
            { label: "Max mortgage", value: money(r.maxLoan), emphasis: true },
            { label: "Down payment", value: money(down) },
            { label: "Housing budget (GDS 39%)", value: `${money(r.gdsAllowance)} / mo` },
            { label: "After other debts (TDS 44%)", value: `${money(r.tdsAllowance)} / mo` },
            { label: "Mortgage payment room", value: `${money(r.maxMortgagePayment)} / mo` },
            { label: "Est. property tax allowed for", value: `${money(r.estimatedPropertyTaxMonthly)} / mo` },
          ]}
        />
      }
    />
  );
}
