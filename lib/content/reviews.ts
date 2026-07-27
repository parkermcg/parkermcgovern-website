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
 * Text is reproduced verbatim as supplied by Parker (Reviews for Claude.docx,
 * 2026-07-27). Do not edit for tone, length or grammar.
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
 * Order matters: the first three carry the homepage, so they are chosen for
 * a spread of situations and readable length rather than being three
 * first-time-buyer reviews in a row. Longer reviews sit further down and
 * surface on the money pages, where there is more room.
 *
 * DATES: four supplied dates were in the future relative to 2026-07-27
 * (Johnny W. "July 2027", Matteo S. "February 2027", Tristian G.
 * "August 2027", Aaron H. "October 2026"). Publishing a future-dated review
 * undermines the credibility of all of them, so those four omit `date`
 * pending correction. The other three are past-dated and shown as supplied.
 */
export const reviews: Review[] = [
  {
    author: "Matteo S.",
    rating: 5,
    context: "First-time buyer",
    services: ["first-time-buyer"],
    text: "We had an amazing experience working with Parker while buying our first home. He guided us through every step, explained everything clearly, and always made time for our questions. The whole process felt smooth and stress-free thanks to his knowledge and support. We truly couldn’t have asked for a better experience and would highly recommend him to anyone.",
  },
  {
    author: "Scott M.",
    rating: 5,
    date: "August 2024",
    context: "Renewal",
    services: ["renewal"],
    text: "We renewed our mortgage in December 2023 - the height of mortgage rates! It was a tough pill to swallow, but Parker found us an amazing variable rate mortgage through HSBC (now RBC) that (fingers crossed!) seems to be paying off, as rates come down. Parker is very hard working, persistent and goes above and beyond to find the best options for his clients!",
  },
  {
    author: "Kyoko S.",
    rating: 5,
    date: "November 2024",
    context: "Private lending, tight deadline",
    services: ["alternative-lending"],
    text: "Thank you, Parker for helping me out in a bind to secure a mortgage under an extremely tight deadline for my not so straight forward closing. I cannot recommend your services enough. You were always great to provide me with updates and so easy to work with. Thank you again for being diligent and keeping me calm!",
  },
  {
    author: "Manav G.",
    rating: 5,
    date: "May 2025",
    context: "First-time buyer",
    services: ["first-time-buyer"],
    text: "Parker came highly recommended to us when we began our journey to purchase our first home. He is really knowledgeable, considerate and always kept as apprised of the mortgage market. And of course, he got us a really great deal when we finally closed on a property we liked. Thanks again Parker for the all help!",
  },
  {
    author: "Tristian G.",
    rating: 5,
    context: "First-time buyer",
    services: ["first-time-buyer"],
    text: "Working with Parker made the entire mortgage process surprisingly easy. He was incredibly helpful and supportive from start to finish- always patient, quick to answer questions, and clear in his explanations. Parker guided us through every step with confidence and genuine care, turning what could’ve been a stressful experience into a smooth and positive one.\n\nIf you’re looking for someone who truly knows their stuff and takes the time to make sure you feel comfortable and informed, I can’t recommend Parker enough.",
  },
  {
    author: "Aaron H.",
    rating: 5,
    context: "Moving to a larger home",
    /**
     * Opened with a run of star emoji, removed only because the card already
     * renders a star rating beside it and the duplication read as an error.
     * No words were changed.
     */
    text: "Parker is the ABSOLUTE best! Found us the lowest rate and delivered exceptional service.\n\nWe cannot recommend Parker enough. From our very first consultation to closing day, he was an absolute superstar. He genuinely went above and beyond to navigate the complex mortgage landscape and, most importantly, secured us the best possible rate—lower than we even thought was achievable!\n\nWhat truly set him apart was his accessibility. He was always available to answer our questions and provide reassurance, even late in the evening, making the entire process stress-free.\n\nIf you are looking for a dedicated, knowledgeable broker who works tirelessly to ensure you get the best deal, look no further than Parker. We would highly recommend him to anyone!",
  },
  {
    author: "Johnny W.",
    rating: 5,
    context: "First-time buyer",
    services: ["first-time-buyer"],
    text: "Where do I even begin? Parker was absolutely fantastic from start to finish.\n\nAs first time homebuyers, my wife and I had what felt like a never ending list of questions (to put it mildly), and Parker was there to answer every single one of them quickly, clearly, and patiently. He was incredibly knowledgeable, calm under pressure, and always took the time to explain everything in a way that made us feel comfortable and confident throughout the entire process.\n\nCommunication was exceptional. He was available whenever we needed him, responded to messages incredibly quickly, and provided thoughtful advice that genuinely helped us make informed decisions. When timelines became tight, he was on top of everything, keeping the process moving and making what could have been a stressful experience feel surprisingly smooth.\n\nBeyond his expertise, Parker is just a genuinely great person who truly cares about his clients. He checked in every step of the way, advocated for us, and made us feel like we were his top priority from day one. He still checks in to see how we are, and that's a rarity.\n\nWe couldn't have asked for a better experience and honestly can't recommend him highly enough. If you're looking for someone who is knowledgeable, responsive, trustworthy, and genuinely invested in helping you, you're in phenomenal hands with Parker.",
  },
];

export const hasReviews = () => reviews.length > 0;

/** Reviews tagged for a given service page. */
export function reviewsForService(slug: string): Review[] {
  return reviews.filter((r) => r.services?.includes(slug));
}

/** Highest-value reviews for the homepage — first N in the array. */
export function featuredReviews(limit = 3): Review[] {
  return reviews.slice(0, limit);
}
