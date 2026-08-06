import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import { business } from "@/lib/data";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
});

const siteUrl = "https://sprayworks.ie";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} | Premium Spray Finishing — ${business.area}`,
    template: `%s | ${business.name}`,
  },
  description:
    "Spray Works are Dublin spray finishing specialists — premium kitchen, furniture, uPVC & aluminium, and shop front spraying. Factory-quality results without the cost of replacement. Free quotes.",
  keywords: [
    "spray works",
    "kitchen respray Dublin",
    "uPVC spraying Dublin",
    "furniture spraying Ireland",
    "aluminium window respray",
    "shop front spraying",
    "kitchen cabinet spraying",
  ],
  authors: [{ name: business.name }],
  openGraph: {
    title: `${business.name} | Premium Spray Finishing`,
    description:
      "Kitchen, furniture, uPVC & aluminium and commercial spray finishing across Dublin & Nationwide. Factory-quality results without the cost of replacement.",
    url: siteUrl,
    siteName: business.name,
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | Premium Spray Finishing`,
    description:
      "Kitchen, furniture, uPVC & aluminium and commercial spray finishing across Dublin & Nationwide.",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0b09",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: business.name,
  description:
    "Premium spray finishing specialists covering kitchens, furniture, uPVC & aluminium doors and windows, and commercial shop fronts.",
  telephone: business.phone,
  email: business.email,
  areaServed: business.area,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dublin",
    addressCountry: "IE",
  },
  sameAs: [business.instagramUrl, business.facebookUrl],
  url: siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${fraunces.variable}`}
    >
      <body className="min-h-full flex flex-col bg-ink font-sans antialiased bg-noise">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold focus:px-5 focus:py-2 focus:text-ink focus:font-semibold"
        >
          Skip to content
        </a>
        <LoadingScreen />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
