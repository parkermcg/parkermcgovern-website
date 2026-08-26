/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  /**
   * Permanent redirects for URLs that have changed after going live.
   * Keep entries here indefinitely — the whole point is that the old URL
   * stays honoured for anyone who bookmarked or linked it.
   */
  async redirects() {
    return [
      {
        // Was the reverse mortgage page 2026-08-11 to 2026-08-26, when it
        // also covered payment relief. Content split into two pages and this
        // slug was retired; the relief half now lives at /mortgages/payment-relief.
        source: "/mortgages/no-payment",
        destination: "/mortgages/reverse-mortgage",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
