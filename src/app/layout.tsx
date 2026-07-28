import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import DeferredAnalytics from "@/components/DeferredAnalytics";
import {
  GoogleTagManagerNoscript,
  GoogleTagManagerScript,
} from "@/components/GoogleTagManager";
import { siteProfile, siteUrl } from "@/content/site";
import "./globals.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-eb-garamond",
});

const title = `${siteProfile.name} - Musician, MD, Session & Live Engineer`;
const description =
  "Session and live musician, music director, and session / live engineer. CalArts MFA / Hartt BM. Available for hire in Los Angeles / Crestline.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${siteProfile.name}`,
  },
  description,
  authors: [{ name: siteProfile.name, url: siteUrl }],
  creator: siteProfile.name,
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteProfile.name,
    title,
    description,
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og.jpg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteProfile.name,
  url: siteUrl,
  email: `mailto:${siteProfile.email}`,
  jobTitle: "Session and Live Musician, Music Director, Session and Live Engineer",
  description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    addressCountry: "US",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "California Institute of the Arts" },
    { "@type": "CollegeOrUniversity", name: "The Hartt School" },
  ],
  sameAs: siteProfile.social.map((s) => s.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${ebGaramond.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <GoogleTagManagerNoscript />
        <GoogleTagManagerScript />
        {children}
        <DeferredAnalytics />
      </body>
    </html>
  );
}
