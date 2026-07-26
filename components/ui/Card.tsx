export function Card({
  children,
  className = "",
  surface = "paper",
}: {
  children: React.ReactNode;
  className?: string;
  surface?: "paper" | "ground";
}) {
  const style =
    surface === "paper"
      ? "bg-paper-raised border-rule"
      : "bg-ground-raised border-rule-invert";
  return (
    <div className={`rounded-[6px] border p-7 ${style} ${className}`}>
      {children}
    </div>
  );
}
