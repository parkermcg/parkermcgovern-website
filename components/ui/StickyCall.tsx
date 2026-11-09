import { site } from "@/lib/site";

/**
 * Persistent tap-to-call button, fixed bottom-right on every page.
 *
 * Why it earns its place (CLAUDE.md §1 — leads first): below the `sm`
 * breakpoint the header's "Apply now" and "Book a call" buttons are hidden
 * and the nav collapses to a hamburger, so on a phone there is currently no
 * visible call to action anywhere until you scroll to the footer. This fills
 * that gap with the action a mortgage enquiry most often wants.
 *
 * Deliberately a server component with no JavaScript: it is a plain anchor,
 * always visible, with no scroll listener. §6 rules out scroll reveals, and
 * the site is at a ~94 Lighthouse median after the tag containers went in —
 * this must not cost anything further.
 *
 * Design notes:
 *   - rounded-[3px] and the brass/white pairing match Button's primary
 *     variant rather than inventing a floating-action-button look (§6).
 *   - z-40 sits under the header's z-50, so the open mobile menu covers it.
 *   - The bottom offset respects the iOS home-indicator safe area.
 *   - Focus is handled by the global :focus-visible rule in globals.css.
 *
 * COMPLIANCE: the footer carries the regulatory notice, which has to stay
 * readable. The footer is given extra bottom padding so this button never
 * sits over that text — if this component is removed, remove that padding
 * too, and if its size changes, re-check the overlap (§4).
 */
export function StickyCall() {
  return (
    <a
      href={site.contact.phoneHref}
      aria-label={`Call ${site.name} at ${site.contact.phone}`}
      className={[
        "fixed right-4 z-40 sm:right-6",
        "bottom-[max(1rem,env(safe-area-inset-bottom))] sm:bottom-6",
        "inline-flex items-center gap-2.5 rounded-[3px] border border-brass bg-brass",
        "px-4 py-3 sm:px-5 sm:py-3.5",
        "text-[0.95rem] font-semibold text-white shadow-lg shadow-ground/25",
        "transition-colors duration-150 hover:bg-[#725825] active:translate-y-px",
      ].join(" ")}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-[1.05rem] w-[1.05rem] flex-none"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
      </svg>
      <span className="font-mono tracking-tight">{site.contact.phone}</span>
    </a>
  );
}
