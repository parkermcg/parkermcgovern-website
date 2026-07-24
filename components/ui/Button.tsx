import Link from "next/link";

/**
 * Buttons say what happens. "Book a call", never "Submit" or "Learn more".
 * Sentence case throughout — CLAUDE.md §6.
 */
type Variant = "primary" | "outline" | "quiet";

const variants: Record<Variant, string> = {
  primary:
    "bg-brass text-white border-brass hover:bg-[#96702F] focus-visible:bg-[#96702F]",
  outline:
    "bg-transparent text-ink-invert border-rule-invert hover:border-brass-light hover:text-brass-light",
  quiet:
    "bg-transparent text-ink border-ink/25 hover:border-ink hover:bg-ink hover:text-paper",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-[3px] border px-6 py-3.5 text-[0.95rem] font-semibold transition-colors duration-150 active:translate-y-px";

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  type = "button",
  disabled = false,
}: {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (!href) {
    return (
      <button
        type={type}
        disabled={disabled}
        className={`${cls} disabled:cursor-not-allowed disabled:opacity-60`}
      >
        {children}
      </button>
    );
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
