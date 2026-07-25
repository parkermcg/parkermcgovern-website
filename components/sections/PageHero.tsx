import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

/**
 * Consistent header for interior pages. Keeps the h1 treatment and section
 * rhythm identical everywhere so pages read as one system.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: React.ReactNode;
}) {
  return (
    <Section surface="ground">
      <Container>
        <div className="max-w-[58ch]">
          <div className="animate-rise">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <h1
            className="animate-rise text-h1 text-[#F6F1E3]"
            style={{ animationDelay: "60ms" }}
          >
            {title}
          </h1>
          {lede ? (
            <p
              className="animate-rise mt-6 text-lede text-ink-invert-muted"
              style={{ animationDelay: "120ms" }}
            >
              {lede}
            </p>
          ) : null}
          {children ? (
            <div
              className="animate-rise mt-9 flex flex-wrap gap-3"
              style={{ animationDelay: "180ms" }}
            >
              {children}
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
