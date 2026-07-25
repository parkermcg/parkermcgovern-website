/**
 * Sections alternate surface rather than size — navy, warm, navy — so the
 * page reads as chapters. Padding is constant by tier; varying it per
 * section is what destroys rhythm. See docs/design-plan.md §3.
 */
type Surface = "ground" | "paper";

const surfaces: Record<Surface, string> = {
  ground: "bg-ground text-ink-invert",
  paper: "bg-paper text-ink",
};

export function Section({
  children,
  surface = "ground",
  tier = "major",
  className = "",
  ...rest
}: {
  children: React.ReactNode;
  surface?: Surface;
  tier?: "major" | "minor";
  className?: string;
} & React.HTMLAttributes<HTMLElement>) {
  const pad =
    tier === "major"
      ? "py-[clamp(72px,9vw,128px)]"
      : "py-[clamp(48px,6vw,80px)]";
  return (
    <section className={`${surfaces[surface]} ${pad} ${className}`} {...rest}>
      {children}
    </section>
  );
}
