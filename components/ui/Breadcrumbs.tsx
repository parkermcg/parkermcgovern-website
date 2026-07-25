import Link from "next/link";
import { Container } from "@/components/ui/Container";

/**
 * Visible breadcrumbs. The matching BreadcrumbList schema is emitted by the
 * page — only mark up what is actually rendered (CLAUDE.md §5).
 */
export function Breadcrumbs({
  trail,
}: {
  trail: { name: string; path: string }[];
}) {
  return (
    <div className="border-b border-rule-invert bg-ground">
      <Container>
        <nav aria-label="Breadcrumb" className="py-4">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-small text-ink-invert-muted">
            {trail.map((c, i) => {
              const last = i === trail.length - 1;
              return (
                <li key={c.path} className="flex items-center gap-2">
                  {last ? (
                    <span aria-current="page" className="text-ink-invert">
                      {c.name}
                    </span>
                  ) : (
                    <>
                      <Link href={c.path} className="hover:text-brass-light">
                        {c.name}
                      </Link>
                      <span aria-hidden="true" className="text-rule-invert">
                        /
                      </span>
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </Container>
    </div>
  );
}
