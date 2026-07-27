/**
 * Client reviews, server-rendered.
 *
 * Deliberately NOT a third-party widget. The prototype used one and Google
 * saw zero of it — no reviewer name appeared in the source (CLAUDE.md §2).
 * These render as real HTML so they count as page content.
 *
 * Review markup is prohibited here — see CLAUDE.md §4. The reviews are
 * genuine but hosted on Google, and AggregateRating/Review schema on our own
 * domain is outside Google's guidelines. Display them, link to the profile,
 * never mark them up. `components/sections/Reviews.tsx` emits no JSON-LD.
 *
 * Adding reviews: append to the array below. Nothing else changes.
 */

export type Review = {
  /** First name + last initial. Full names are unnecessary and less private. */
  author: string;
  /** Verbatim, as written by the reviewer. Do not edit for tone or length. */
  text: string;
  /** Month the review was left, e.g. "June 2026". Optional. */
  date?: string;
  /** Out of 5. */
  rating: 1 | 2 | 3 | 4 | 5;
  /**
   * Service page slugs this review is relevant to. A review mentioning a
   * first purchase surfaces on /mortgages/first-time-buyer, and so on.
   * Leave empty to show only on the homepage.
   */
  services?: string[];
  /** Optional short label, e.g. "First-time buyer, Richmond Hill". */
  context?: string;
};

/**
 * AWAITING CONTENT — Parker to supply.
 *
 * Nothing is invented here and nothing was copied from the old widget.
 * While this array is empty the reviews sections do not render at all,
 * rather than showing an empty state.
 */
export const reviews: Review[] = [];

export const hasReviews = () => reviews.length > 0;

/** Reviews tagged for a given service page. */
export function reviewsForService(slug: string): Review[] {
  return reviews.filter((r) => r.services?.includes(slug));
}

/** Highest-value reviews for the homepage — first N in the array. */
export function featuredReviews(limit = 3): Review[] {
  return reviews.slice(0, limit);
}
