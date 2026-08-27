import type { Block } from "./types";

/**
 * Service area pages.
 *
 * CLAUDE.md §5 prohibits per-town pages as a doorway pattern, on the grounds
 * that GTA municipalities share identical land transfer tax treatment and
 * identical lender access. Parker asked for city pages on 2026-08-26 after
 * that objection was raised; this is his decision, recorded here and in §5.
 *
 * The rule these pages have to satisfy to be worth having: each one must
 * carry a mortgage topic that is genuinely different, not the same copy with
 * a place name swapped. So:
 *
 *   toronto           the Municipal Land Transfer Tax, which exists nowhere
 *                     else in the GTA and roughly doubles that closing cost
 *   vaughan           pre-construction and new-build financing
 *   markham           condominium financing and newcomer files
 *   richmond-hill     the home office, and what proximity actually changes
 *   aurora-newmarket  freehold and rural properties — wells, septic, acreage
 *
 * Aurora and Newmarket share one page deliberately. Split apart they would
 * have been near-duplicates, which is the exact pattern §5 warns about.
 *
 * Every page must also state plainly what does NOT differ by municipality.
 * That honesty is what separates this from a doorway page, and it is what
 * the voice in §6 calls for.
 *
 * NO per-city property tax rates are published. They are set separately by
 * each municipality, are not available from one authoritative source, and
 * would need re-verifying every year on a site with no CMS. The pages explain
 * how property tax affects qualification and tell readers to get the current
 * rate from their own municipality. Do not add invented figures (§4).
 */
export type ServiceArea = {
  slug: string;
  /** Municipality name as residents write it. */
  name: string;
  eyebrow: string;
  /** The <h1>. */
  title: string;
  lede: string;
  /** One sentence, used on the hub and in cards. */
  summary: string;

  metaTitle: string;
  metaDescription: string;

  intro: string[];
  blocks: Block[];

  /** Required, same as money pages — the honest case (CLAUDE.md §6). */
  honest: { h: string; p: string[] };
  faqs: { q: string; a: string }[];

  /** Money page slugs most relevant to this area. */
  services: string[];
  /** Calculator slugs. */
  calculators: string[];

  verified?: string;
  sources?: { name: string; href: string }[];
  draft?: boolean;
};

import toronto from "@/content/areas/toronto";
import vaughan from "@/content/areas/vaughan";
import markham from "@/content/areas/markham";
import richmondHill from "@/content/areas/richmond-hill";
import auroraNewmarket from "@/content/areas/aurora-newmarket";

/**
 * Registry. Adding an area: create content/areas/<slug>.ts, add one import
 * and one array entry. No component is touched.
 */
export const areas: ServiceArea[] = [
  richmondHill,
  toronto,
  vaughan,
  markham,
  auroraNewmarket,
];

export const areaSlugs = areas.map((a) => a.slug);
export const getArea = (slug: string) => areas.find((a) => a.slug === slug);

/** Signed-off areas only — what listings and the sitemap consume. */
export const publishedAreas = areas.filter((a) => !a.draft);
