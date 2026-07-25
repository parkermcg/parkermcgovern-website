"use client";

import { useId } from "react";

/**
 * Shared inputs for the calculators. Deliberately plain HTML controls —
 * a range input is keyboard-operable and screen-reader-legible for free,
 * which a custom slider would have to reimplement badly.
 */

export function Slider({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  const id = useId();
  return (
    <div className="mb-6">
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between gap-3">
        <span className="text-small font-semibold text-ink-invert">{label}</span>
        <span className="font-mono text-small text-brass-light" data-figures>
          {display}
        </span>
      </label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[#8a6a2e]"
      />
    </div>
  );
}

export function NumberField({
  label,
  value,
  min,
  max,
  step = 1,
  prefix,
  onChange,
}: {
  label: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  prefix?: string;
  onChange: (v: number) => void;
}) {
  const id = useId();
  return (
    <div className="mb-6">
      <label htmlFor={id} className="mb-2 block text-small font-semibold text-ink-invert">
        {label}
      </label>
      <div className="flex items-center gap-2 rounded-[3px] border border-rule-invert bg-ground-raised px-3.5 focus-within:border-brass-light">
        {prefix ? (
          <span aria-hidden="true" className="font-mono text-small text-ink-invert-muted">
            {prefix}
          </span>
        ) : null}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          value={Number.isFinite(value) ? value : ""}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full bg-transparent py-3 font-mono text-ink-invert outline-none"
        />
      </div>
    </div>
  );
}

export function Select<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
}) {
  const id = useId();
  return (
    <div className="mb-6">
      <label htmlFor={id} className="mb-2 block text-small font-semibold text-ink-invert">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="w-full rounded-[3px] border border-rule-invert bg-ground-raised px-3.5 py-3 text-ink-invert focus:border-brass-light focus:outline-none"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function Checkbox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  const id = useId();
  return (
    <div className="mb-5 flex items-start gap-3">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-4 w-4 flex-none accent-[#8a6a2e]"
      />
      <label htmlFor={id} className="text-small text-ink-invert-muted">
        {label}
      </label>
    </div>
  );
}

/** Wrapper giving every calculator the same two-column shape. */
export function CalculatorShell({
  inputs,
  result,
}: {
  inputs: React.ReactNode;
  result: React.ReactNode;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
      <div>{inputs}</div>
      <div className="lg:sticky lg:top-28 lg:self-start">{result}</div>
    </div>
  );
}
