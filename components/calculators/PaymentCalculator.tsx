"use client";

import { useMemo, useState } from "react";
import {
  amortizationSchedule,
  minimumDownPayment,
  FREQUENCY_LABELS,
  type PaymentFrequency,
} from "@/lib/calculators/mortgage";
import { VERIFIED_ON, SOURCES } from "@/lib/calculators/rates";
import { money, moneyExact, percent, years } from "@/lib/format";
import { StatementCard } from "@/components/ui/StatementCard";
import { CalculatorShell, Slider, Select } from "./Controls";

const FREQUENCIES = Object.keys(FREQUENCY_LABELS) as PaymentFrequency[];

export function PaymentCalculator() {
  const [price, setPrice] = useState(750_000);
  const [downPct, setDownPct] = useState(20);
  const [rate, setRate] = useState(4.5);
  const [amort, setAmort] = useState(25);
  const [frequency, setFrequency] = useState<PaymentFrequency>("monthly");

  const downPayment = (price * downPct) / 100;
  const minDown = minimumDownPayment(price);
  const belowMinimum = downPayment < minDown - 1;

  const r = useMemo(
    () =>
      amortizationSchedule({
        price,
        downPayment,
        annualRatePercent: rate,
        amortizationYears: amort,
        frequency,
      }),
    [price, downPayment, rate, amort, frequency],
  );

  const PER_LABEL: Record<PaymentFrequency, string> = {
    monthly: "per month",
    "semi-monthly": "twice a month",
    "bi-weekly": "every 2 weeks",
    weekly: "per week",
    "accelerated-bi-weekly": "every 2 weeks",
    "accelerated-weekly": "per week",
  };
  const perLabel = PER_LABEL[frequency];

  const accelerated = frequency.startsWith("accelerated");

  return (
    <CalculatorShell
      inputs={
        <>
          <Slider
            label="Purchase price"
            value={price}
            display={money(price)}
            min={150_000}
            max={3_000_000}
            step={5_000}
            onChange={setPrice}
          />
          <Slider
            label="Down payment"
            value={downPct}
            display={`${downPct}% · ${money(downPayment)}`}
            min={5}
            max={50}
            step={1}
            onChange={setDownPct}
          />
          <Slider
            label="Interest rate"
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
          <Select
            label="Payment frequency"
            value={frequency}
            options={FREQUENCIES.map((f) => ({ value: f, label: FREQUENCY_LABELS[f] }))}
            onChange={setFrequency}
          />

          {belowMinimum ? (
            <p className="rounded-[3px] border border-[#E0B44E]/40 bg-[#8A5F14]/15 p-4 text-small text-[#E0B44E]">
              At {money(price)} the legal minimum down payment is {money(minDown)} (
              {((minDown / price) * 100).toFixed(1)}%). The figures below assume you
              meet it.
            </p>
          ) : null}
        </>
      }
      result={
        <StatementCard
          label="Estimated payment"
          figure={moneyExact(r.payment)}
          unit={perLabel}
          note={r.insuranceNote}
          verified={VERIFIED_ON}
          source={SOURCES.cmhc}
          lines={[
            { label: "Mortgage amount", value: money(r.principal), emphasis: true },
            ...(r.cmhcPremium > 0
              ? [{ label: "Default insurance added", value: money(r.cmhcPremium), tone: "caution" as const }]
              : []),
            { label: "Payments per year", value: String(r.paymentsPerYear) },
            {
              label: "Time to pay off",
              value: years(r.actualAmortizationYears),
              tone: accelerated && r.yearsSavedVsMonthly > 0 ? ("positive" as const) : undefined,
            },
            { label: "Total interest", value: money(r.totalInterest) },
            { label: "Total cost", value: money(r.totalPaid) },
            ...(accelerated && r.interestSavedVsMonthly > 0
              ? [
                  {
                    label: "Interest saved vs monthly",
                    value: money(r.interestSavedVsMonthly),
                    tone: "positive" as const,
                    emphasis: true,
                  },
                  {
                    label: "Time saved vs monthly",
                    value: years(r.yearsSavedVsMonthly),
                    tone: "positive" as const,
                  },
                ]
              : []),
          ]}
        />
      }
    />
  );
}
