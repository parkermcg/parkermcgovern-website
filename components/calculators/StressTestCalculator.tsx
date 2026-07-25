"use client";

import { useMemo, useState } from "react";
import {
  qualifyingRate,
  periodicRate,
  paymentFor,
} from "@/lib/calculators/mortgage";
import { VERIFIED_ON, SOURCES, STRESS_TEST } from "@/lib/calculators/rates";
import { money, moneyExact, percent } from "@/lib/format";
import { StatementCard } from "@/components/ui/StatementCard";
import { CalculatorShell, Slider } from "./Controls";

export function StressTestCalculator() {
  const [loan, setLoan] = useState(600_000);
  const [rate, setRate] = useState(4.5);
  const [amort, setAmort] = useState(25);

  const r = useMemo(() => {
    const qRate = qualifyingRate(rate);
    const periods = amort * 12;
    const actual = paymentFor(loan, periodicRate(rate, 12), periods);
    const qualifying = paymentFor(loan, periodicRate(qRate, 12), periods);
    return {
      qRate,
      actual,
      qualifying,
      gap: qualifying - actual,
      usesFloor: rate + STRESS_TEST.bufferPoints < STRESS_TEST.floorRate,
    };
  }, [loan, rate, amort]);

  return (
    <CalculatorShell
      inputs={
        <>
          <Slider
            label="Mortgage amount"
            value={loan}
            display={money(loan)}
            min={100_000}
            max={2_000_000}
            step={10_000}
            onChange={setLoan}
          />
          <Slider
            label="Rate you have been offered"
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

          <p className="mt-2 rounded-[3px] border border-rule-invert bg-ground-raised p-4 text-small text-ink-invert-muted">
            {r.usesFloor ? (
              <>
                Your rate plus {STRESS_TEST.bufferPoints}% is below the{" "}
                {percent(STRESS_TEST.floorRate)} floor, so the floor applies.
              </>
            ) : (
              <>
                Your rate plus {STRESS_TEST.bufferPoints}% is above the{" "}
                {percent(STRESS_TEST.floorRate)} floor, so that is what applies.
              </>
            )}
          </p>
        </>
      }
      result={
        <StatementCard
          label="You must qualify at"
          figure={percent(r.qRate)}
          note="You will not pay this rate. Lenders test whether you could."
          verified={VERIFIED_ON}
          source={SOURCES.stressTest}
          lines={[
            { label: "Payment at your actual rate", value: moneyExact(r.actual), tone: "positive" },
            { label: "Payment you must qualify for", value: moneyExact(r.qualifying), tone: "caution", emphasis: true },
            { label: "Difference per month", value: moneyExact(r.gap) },
            { label: "Buffer applied", value: `+${STRESS_TEST.bufferPoints}%` },
            { label: "Regulatory floor", value: percent(STRESS_TEST.floorRate) },
          ]}
        />
      }
    />
  );
}
