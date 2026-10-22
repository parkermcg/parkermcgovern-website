import Script from "next/script";

/**
 * Google tag (gtag.js) for Google Ads.
 *
 * This is the Ads tag, NOT Google Tag Manager — it loads from
 * googletagmanager.com, which is a common source of confusion. GTM is a
 * separate container product with a GTM-XXXXXXX id and a different snippet.
 * If a GTM container is ever added it goes alongside this, not instead of it.
 *
 * `afterInteractive` deliberately: the tag must not block first paint. The
 * site's Lighthouse budget is Performance >= 90 on mobile (CLAUDE.md §8), and
 * this is the only render-affecting third-party script on the site.
 *
 * Mounted once in the root layout, so it covers every page. Google's own
 * instruction is one tag per page — do not add a second copy anywhere.
 *
 * COMPLIANCE: this is an advertising script and it sets cookies. /privacy
 * describes it explicitly. If this component is ever removed, or a second
 * tag added, that page has to change in the same commit (CLAUDE.md §10).
 */
export function GoogleTag({ id }: { id: string }) {
  return (
    <>
      <Script
        id="gtag-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="lazyOnload"
      />
      <Script id="gtag-init" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${id}');`}
      </Script>
    </>
  );
}
