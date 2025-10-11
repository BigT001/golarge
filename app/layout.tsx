import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// NOTE: assumed canonical site URL — change if you have a different domain.
const SITE_URL = "https://golarge.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "GoLarge", template: "%s | GoLarge" },
  description: "GoLarge — community outreach, events and mission initiatives. Join our movement to make a lasting impact.",
  keywords: [
    "GoLarge",
    "community outreach",
    "mission",
    "events",
    "donate",
    "faith-based",
  ],
  authors: [{ name: "GoLarge", url: SITE_URL }],
  openGraph: {
    title: "GoLarge — Community Outreach & Mission",
    description: "Join GoLarge's outreach and mission programs. Events, initiatives, and ways to give.",
    url: SITE_URL,
    siteName: "GoLarge",
    images: ["/logofolder/golargelogo.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoLarge — Community Outreach & Mission",
    description: "Join GoLarge's outreach and mission programs. Events, initiatives, and ways to give.",
    images: ["/logofolder/golargelogo.png"],
  },
  icons: {
    icon: ["/favicon.ico", "/favicon.svg"],
    shortcut: "/favicon.ico",
    apple: "/favicon.svg",
  },
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#ffffff" }, { media: "(prefers-color-scheme: dark)", color: "#000000" }],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // JSON-LD structured data (Organization + WebSite)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": SITE_URL + "#organization",
        "name": "GoLarge",
        "url": SITE_URL,
        "logo": SITE_URL + "/logofolder/golargelogo.png",
        "sameAs": [
          "https://www.facebook.com/your-page",
          "https://twitter.com/your-handle",
          "https://www.instagram.com/your-handle"
        ]
      },
      {
        "@type": "WebSite",
        "@id": SITE_URL + "#website",
        "url": SITE_URL,
        "name": "GoLarge",
        "publisher": { "@id": SITE_URL + "#organization" }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Preconnects for fonts and analytics */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  {/* Bold SVG favicon gives crisp large favicon in modern browsers */}
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/favicon.svg" />
  <link rel="mask-icon" href="/favicon.svg" color="#ff3b3b" />
        <link rel="canonical" href={SITE_URL} />
        <meta name="msapplication-TileColor" content="#111827" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col overflow-x-hidden`}>
        {/* Skip link for accessibility */}
        <a href="#main" className="sr-only focus:not-sr-only p-2">Skip to content</a>
        <Header />
        {/* reserve top space for fixed header (h-16) so hero starts below it */}
        <main id="main" className="flex-1 w-full pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
