"use client";

import { useMemo, useState } from "react";
import { cmhcPremium, minimumDownPayment } from "@/lib/calculators/mortgage";
import { VERIFIED_ON, SOURCES, INSURED_PRICE_CEILING } from "@/lib/calculators/rates";
import { money, percent } from "@/lib/format";
import { StatementCard } from "@/components/ui/StatementCard";
import { CalculatorShell, Slider, Checkbox } from "./Controls";

export function CmhcCalculator() {
  const [price, setPrice] = useState(700_000);
  const [downPct, setDownPct] = useState(10);
  const [nonTraditional, setNonTraditional] = useState(false);

  const downPayment = (price * downPct) / 100;
  const loanBeforePremium = Math.max(0, price - downPayment);
  const ltv = price > 0 ? loanBeforePremium / price : 0;
  const minDown = minimumDownPayment(price);

  const r = useMemo(
    () => cmhcPremium(price, downPayment, nonTraditional),
    [price, downPayment, nonTraditional],
  );

  return (
    <CalculatorShell
      inputs={
        <>
          <Slider
            label="Purchase price"
            value={price}
            display={money(price)}
            min={150_000}
            max={2_000_000}
            step={5_000}
            onChange={setPrice}
          />
          <Slider
            label="Down payment"
            value={downPct}
            display={`${downPct}% · ${money(downPayment)}`}
            min={5}
            max={25}
            step={1}
            onChange={setDownPct}
          />
          <Checkbox
            label="My down payment is borrowed rather than from savings or a gift — this attracts a higher premium."
            checked={nonTraditional}
            onChange={setNonTraditional}
          />

          {downPayment < minDown - 1 ? (
            <p className="rounded-[3px] border border-[#E8857A]/40 bg-[#9C3A31]/15 p-4 text-small text-[#F3B5AD]">
              {money(downPayment)} is below the legal minimum of {money(minDown)} at
              this price.
            </p>
          ) : null}

          {price >= INSURED_PRICE_CEILING ? (
            <p className="rounded-[3px] border border-[#E0B44E]/40 bg-[#8A5F14]/15 p-4 text-small text-[#E0B44E]">
              At {money(INSURED_PRICE_CEILING)} and above, default insurance is not
              available at all — 20% down is required regardless of your income.
            </p>
          ) : null}
        </>
      }
      result={
        <StatementCard
          label={r.insurable ? "Insurance premium" : "No premium payable"}
          figure={money(r.premium)}
          note={
            r.insurable
              ? "Added to your mortgage rather than paid upfront — so you pay interest on it."
              : r.reason
          }
          verified={VERIFIED_ON}
          source={SOURCES.cmhc}
          lines={[
            { label: "Loan before premium", value: money(loanBeforePremium) },
            { label: "Loan-to-value", value: percent(ltv * 100, 1) },
            ...(r.insurable
              ? [
                  { label: "Premium rate", value: percent(r.rate * 100, 2), tone: "caution" as const },
                  {
                    label: "Total borrowed",
                    value: money(loanBeforePremium + r.premium),
                    emphasis: true,
                  },
                ]
              : []),
          ]}
        />
      }
    />
  );
}
