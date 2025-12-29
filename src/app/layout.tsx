import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

/**
 * Global SEO Metadata
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://artex-tech.vercel.app"),

  title: {
    default: "Artex Tech – Scalable Software, AI & Web3 Solutions",
    template: "%s | Artex Tech",
  },

  description:
    "Artex Tech builds scalable web, mobile, AI, and Web3 solutions. We help startups and enterprises design, build, and scale high-performance digital products.",

  keywords: [
    "Artex Tech",
    "software development company",
    "web development",
    "mobile app development",
    "AI solutions",
    "Web3 development",
    "blockchain development",
    "startup MVP",
    "SaaS development",
  ],

  authors: [{ name: "Artex Tech", url: "https://artex-tech.vercel.app" }],
  creator: "Artex Tech",
  publisher: "Artex Tech",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://artex-tech.vercel.app",
  },

  openGraph: {
    type: "website",
    url: "https://artex-tech.vercel.app",
    title: "Artex Tech – Scalable Software, AI & Web3 Solutions",
    description:
      "We design and build scalable software, AI systems, and Web3 platforms for startups and enterprises.",
    siteName: "Artex Tech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Artex Tech – Software & AI Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Artex Tech – Scalable Software, AI & Web3 Solutions",
    description:
      "We help startups and enterprises build scalable web, mobile, AI, and Web3 products.",
    images: ["/og-image.png"],
    creator: "@artextech",
  },

  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
