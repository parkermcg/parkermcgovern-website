/**
 * Uses native <details> so answers exist in the server HTML and remain
 * readable with JavaScript disabled. A JS-driven accordion would hide this
 * content from crawlers, which is the exact trap the prototype fell into.
 */
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-rule border-y border-rule">
      {items.map((item) => (
        <details key={item.q} className="group py-1">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-[1.15rem] font-semibold text-ink [&::-webkit-details-marker]:hidden">
            {item.q}
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 flex-none text-brass transition-transform group-open:rotate-180"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </summary>
          <p className="measure pb-6 text-ink-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
