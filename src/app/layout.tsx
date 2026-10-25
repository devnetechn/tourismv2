import type { Metadata, Viewport } from "next";
import { Gloock, Hanken_Grotesk } from "next/font/google";
import { BackToTop } from "@/components/layout/BackToTop";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { siteConfig } from "@/data/site";
import "./globals.css";

const gloock = Gloock({
  variable: "--font-gloock",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name}, Sarangani: ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}, Sarangani`,
  },
  description: siteConfig.description,
  applicationName: `${siteConfig.name} travel guide`,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: `${siteConfig.name}, Sarangani`,
    title: `${siteConfig.name}, Sarangani`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/photos/maasim-iml-ecopark-panorama.jpg",
        width: 1920,
        height: 785,
        alt: "Coconut-covered hills running down to Sarangani Bay in Maasim",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0c2e3e",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${gloock.variable} ${hanken.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <SiteHeader />
        <main id="main" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <SiteFooter />
        <BackToTop />
      </body>
    </html>
  );
}
