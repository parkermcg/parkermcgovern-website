import type { Metadata } from "next";
import { site } from "@/lib/site";

/**
 * Per-page metadata. Titles and descriptions are written by hand for every
 * page — never templated from a slug (CLAUDE.md §5).
 */
export function pageMetadata({
  title,
  description,
  path,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: `${site.name} — ${site.role}`,
      locale: "en_CA",
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
