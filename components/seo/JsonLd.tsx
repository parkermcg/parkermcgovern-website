/**
 * Renders JSON-LD into the server HTML. Structured data must be present in
 * the initial response, not injected client-side.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <>
      {payload.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Content is built from typed literals in lib/seo/schema.ts, never user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
