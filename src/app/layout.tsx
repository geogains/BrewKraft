import type { Metadata } from "next";
import { Archivo_Black, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const archivoBlack = Archivo_Black({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blend-snowy.vercel.app"),
  title: {
    default: "BrewKraft | Independent Café in Walsall",
    template: "%s | BrewKraft Walsall",
  },
  description:
    "BrewKraft is Walsall's favourite independent café. Serving rich Colombian coffee, ceremonial matcha, Kashmiri chai, freshly baked pastries, and comfort food at 70 Lower Hall Lane, Walsall.",
  keywords: [
    "cafe Walsall",
    "coffee shop Walsall",
    "independent café Walsall",
    "matcha Walsall",
    "Kashmiri chai Walsall",
    "Colombian coffee Walsall",
    "Lower Hall Lane café Walsall",
    "brewkraft",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "BrewKraft",
    title: "BrewKraft",
    description: "Colombian coffee. Signature matcha. Kashmiri chai. A cosy space in Walsall.",
    url: "https://blend-snowy.vercel.app/",
    images: [
      {
        url: "https://blend-snowy.vercel.app/images/preview3.png",
        secureUrl: "https://blend-snowy.vercel.app/images/preview3.png",
        width: 1200,
        height: 630,
        alt: "BrewKraft preview",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BrewKraft",
    description: "Colombian coffee. Signature matcha. Kashmiri chai.",
    images: ["https://blend-snowy.vercel.app/images/preview3.png"],
  },
  icons: {
    icon: "/images/favicon1.png",
    shortcut: "/images/favicon1.png",
    apple: "/images/favicon1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${archivoBlack.variable} ${dmSans.variable}`}>
      <head>
        {/* Local business structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CafeOrCoffeeShop",
              name: "BrewKraft",
              description:
                "Independent café in Walsall serving Colombian coffee, matcha, chai, pastries, and comfort food.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "70 Lower Hall Lane",
                addressLocality: "Walsall",
                postalCode: "WS1 1RH",
                addressCountry: "GB",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.5",
                reviewCount: "90",
              },
              priceRange: "£",
              servesCuisine: ["Coffee", "Pastries", "Comfort Food"],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Sunday"],
                  opens: "09:00",
                  closes: "17:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
