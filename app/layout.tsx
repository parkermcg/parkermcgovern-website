import type { Metadata } from "next";
import { Fraunces, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import { site } from "@/lib/site";
import { localBusinessSchema, personSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Mortgage Agent, ${site.address.locality}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Licensed Ontario mortgage agent based in Richmond Hill. One application, a full panel of lenders, and straight answers on renewals, first purchases and refinancing.",
  icons: { icon: "/favicon.svg" },
};

export const viewport = { themeColor: "#0B1A2E" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-CA"
      className={`${fraunces.variable} ${publicSans.variable} ${plexMono.variable}`}
    >
      <body>
        <JsonLd data={[localBusinessSchema(), personSchema()]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[3px] focus:bg-brass focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
