"use client";

import { useMemo, useState } from "react";
import { landTransferTax } from "@/lib/calculators/landTransferTax";
import { VERIFIED_ON, SOURCES } from "@/lib/calculators/rates";
import { money } from "@/lib/format";
import { StatementCard } from "@/components/ui/StatementCard";
import { CalculatorShell, Slider, Checkbox } from "./Controls";

export function LandTransferTaxCalculator() {
  const [price, setPrice] = useState(750_000);
  const [inToronto, setInToronto] = useState(false);
  const [firstTimeBuyer, setFirstTimeBuyer] = useState(true);

  const r = useMemo(
    () => landTransferTax({ price, inToronto, firstTimeBuyer }),
    [price, inToronto, firstTimeBuyer],
  );

  return (
    <CalculatorShell
      inputs={
        <>
          <Slider
            label="Purchase price"
            value={price}
            display={money(price)}
            min={100_000}
            max={5_000_000}
            step={5_000}
            onChange={setPrice}
          />
          <Checkbox
            label="The property is inside the City of Toronto — this adds a second, municipal land transfer tax on top of the provincial one."
            checked={inToronto}
            onChange={setInToronto}
          />
          <Checkbox
            label="I qualify as a first-time buyer — never owned a home anywhere, and a Canadian citizen or permanent resident."
            checked={firstTimeBuyer}
            onChange={setFirstTimeBuyer}
          />

          {inToronto ? (
            <p className="mt-2 rounded-[3px] border border-rule-invert bg-ground-raised p-4 text-small text-ink-invert-muted">
              Buying inside Toronto roughly doubles this cost. The same purchase
              outside the city would attract{" "}
              <strong className="text-ink-invert">
                {money(landTransferTax({ price, firstTimeBuyer }).total)}
              </strong>{" "}
              instead.
            </p>
          ) : null}
        </>
      }
      result={
        <StatementCard
          label="Land transfer tax due on closing"
          figure={money(r.total)}
          note={
            r.totalRebate > 0
              ? `Includes ${money(r.totalRebate)} of first-time buyer rebate.`
              : "No first-time buyer rebate applied."
          }
          verified={VERIFIED_ON}
          source={inToronto ? SOURCES.torontoMltt : SOURCES.ontarioLtt}
          qualifier="Estimate only. Your lawyer calculates the final amount."
          lines={[
            { label: "Ontario land transfer tax", value: money(r.provincial) },
            ...(inToronto
              ? [{ label: "Toronto municipal tax", value: money(r.municipal), tone: "caution" as const }]
              : []),
            ...(r.provincialRebate > 0
              ? [{ label: "Ontario rebate", value: `−${money(r.provincialRebate)}`, tone: "positive" as const }]
              : []),
            ...(r.municipalRebate > 0
              ? [{ label: "Toronto rebate", value: `−${money(r.municipalRebate)}`, tone: "positive" as const }]
              : []),
            { label: "Total before rebate", value: money(r.totalBeforeRebate) },
          ]}
        />
      }
    />
  );
}
