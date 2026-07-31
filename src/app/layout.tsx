import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "C-Safe Wellness Group | Executive Mental Health & Wellness Advisory",
  description:
    "Discreet, high-touch B2B wellness advisory for C-suite teams. Executive treatment placement, crisis response, monthly leadership wellness programming, and leadership continuity — available upon request.",
  metadataBase: new URL("https://www.csafeteam.com"),
  alternates: {
    canonical: "https://www.csafeteam.com",
  },
  openGraph: {
    title: "C-Safe Wellness Group | Executive Mental Health & Wellness Advisory",
    description:
      "Discreet, high-touch B2B wellness advisory for C-suite teams. Confidential executive mental health and addiction support, crisis response, and proactive leadership wellness.",
    url: "https://www.csafeteam.com",
    siteName: "C-Safe Wellness Group",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.csafeteam.com/#organization",
      name: "C-Safe Wellness Group",
      url: "https://www.csafeteam.com",
      logo: "https://www.csafeteam.com/csafe-logo.png",
      description:
        "C-Safe Wellness Group is a discreet, high-touch B2B advisory firm providing confidential mental health and addiction support exclusively for C-suite executives at mid-to-large companies. Services include executive treatment placement, crisis response, family support, transport and safety logistics, corporate crisis response, and proactive executive wellness programming.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Atlanta",
        addressRegion: "GA",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "bryan@csafeteam.com",
        url: "https://www.csafeteam.com/#contact",
      },
      sameAs: [],
      foundingDate: "2026",
      knowsAbout: [
        "Executive mental health",
        "C-suite addiction treatment",
        "Executive wellness advisory",
        "Corporate crisis response",
        "Leadership behavioral health",
        "Confidential executive support",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.csafeteam.com/#website",
      url: "https://www.csafeteam.com",
      name: "C-Safe Wellness Group",
      publisher: { "@id": "https://www.csafeteam.com/#organization" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif" }}>{children}</body>
    </html>
  );
}
