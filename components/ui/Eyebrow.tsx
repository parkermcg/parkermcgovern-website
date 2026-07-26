export function Eyebrow({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  const color = tone === "light" ? "text-brass-light" : "text-brass";
  const rule = tone === "light" ? "bg-brass-light/50" : "bg-brass/50";
  return (
    <p
      className={`mb-5 flex items-center gap-3 text-eyebrow font-semibold uppercase ${color}`}
    >
      <span className={`h-px w-6 ${rule}`} aria-hidden="true" />
      {children}
    </p>
  );
}
