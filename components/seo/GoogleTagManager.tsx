import Script from "next/script";

/**
 * Google Tag Manager container.
 *
 * Two parts, which must go in two different places:
 *   <GoogleTagManager />         the loader — mounted in the root layout
 *   <GoogleTagManagerNoScript /> the fallback iframe — FIRST child of <body>
 *
 * Google's snippet says "immediately after the opening <body> tag" and that
 * placement is preserved in layout.tsx. It only does anything for visitors
 * with JavaScript disabled; leaving it out is a silent partial install.
 *
 * Implemented by hand rather than pulling in @next/third-parties: it is
 * fifteen lines, and CLAUDE.md §2 says prefer the code over the dependency.
 *
 * `afterInteractive` rather than Google's raw inline snippet, so the
 * container cannot block first paint.
 *
 * OVERLAP WARNING — read before adding tags in the GTM UI. The Google Ads
 * tag (AW-, see GoogleTag.tsx) is currently ALSO hardcoded on this site.
 * If the same Ads conversion is configured inside this container as well,
 * conversions will be counted twice and the campaign data becomes useless.
 * Pick one route: either keep the hardcoded AW- tag and do not add Ads tags
 * in GTM, or move Ads into GTM and delete GoogleTag.tsx. Flagged to Parker
 * 2026-10-22.
 *
 * COMPLIANCE: GTM itself sets no cookies, but anything configured inside it
 * can. /privacy currently describes the Ads tag. If tags are added here that
 * collect data differently, that page must change with them (CLAUDE.md §10).
 */
export function GoogleTagManager({ id }: { id: string }) {
  return (
    <Script id="gtm-init" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${id}');`}
    </Script>
  );
}

/** Must be the first child of <body>, per Google's own instruction. */
export function GoogleTagManagerNoScript({ id }: { id: string }) {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${id}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
