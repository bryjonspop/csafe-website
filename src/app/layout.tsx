import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.csafeteam.com"),
  title: {
    default: "Executive Behavioral Health Advisory & Crisis Response | C-Safe",
    template: "%s | C-Safe Wellness Group",
  },
  description:
    "C-Safe helps CEOs, boards, HR leaders and General Counsel manage executive mental health, substance-use and leadership crises with speed, discretion and expert clinical guidance.",
  alternates: {
    canonical: "https://www.csafeteam.com",
  },
  openGraph: {
    siteName: "C-Safe Wellness Group",
    url: "https://www.csafeteam.com",
    type: "website",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "C-Safe Wellness Group",
  alternateName: "C-Safe",
  url: "https://www.csafeteam.com",
  logo: "https://cdn.sintra.ai/img/DMGULRdXCX28wMNK05IRHOWovVIPZQrKntsgifAdJzk/f:jpg/rs:fit:800/czM6Ly9zaW50cmEtYnJhaW5haS1tZWRpYS9rbm93bGVkZ2UtcHJvZmlsZXMvYTk4MzIzZjYtYWQ2ZS00NjM4LWE5NTAtMmM1ZDU4NGJiYTVlL2Fzc2V0cy8zNDY5OTM4ZC00MGRhLTQ0MDgtYjMwYi1kMDZmNjI3N2U5OTUvY3NhZmUtbG9nby5wbmc",
  description:
    "Executive behavioral health advisory firm helping organizations manage mental health, substance-use and personal crises involving senior leaders with speed, discretion and expert clinical guidance.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Atlanta",
    addressRegion: "GA",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@csafeteam.com",
    contactType: "customer service",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61591192140412",
    "https://www.instagram.com/csafeteam",
    "https://www.tiktok.com/@csafeteam",
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
          src="https://platform.linkedin.com/badges/js/profile.js"
          async
          defer
          type="text/javascript"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif" }}>{children}</body>
    </html>
  );
}
