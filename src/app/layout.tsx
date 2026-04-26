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
  title: {
    default: "Cafe 23 | Independent Café in Walsall",
    template: "%s | Cafe 23 Walsall",
  },
  description:
    "Cafe 23 is Walsall's favourite independent café. Serving rich Colombian coffee, ceremonial matcha, Kashmiri chai, freshly baked pastries, and comfort food inside the Saddlers Shopping Centre.",
  keywords: [
    "cafe Walsall",
    "coffee shop Walsall",
    "independent café Walsall",
    "matcha Walsall",
    "Kashmiri chai Walsall",
    "Colombian coffee Walsall",
    "Saddlers Shopping Centre café",
    "cafe 23",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Cafe 23",
    title: "Cafe 23",
    description: "Colombian coffee. Signature matcha. Kashmiri chai. A cosy space in Walsall.",
    url: "https://cafe23-three.vercel.app/",
    images: [
      {
        url: "https://cafe23-three.vercel.app/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Cafe 23 preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cafe 23",
    description: "Colombian coffee. Signature matcha. Kashmiri chai.",
    images: ["https://cafe23-three.vercel.app/images/preview.png"],
  },
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
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
              name: "Cafe 23",
              description:
                "Independent café in Walsall serving Colombian coffee, matcha, chai, pastries, and comfort food.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "27 Park St, Saddlers Shopping Centre",
                addressLocality: "Walsall",
                postalCode: "WS1 1LY",
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
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Friday"],
                  opens: "08:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday"],
                  opens: "09:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Sunday"],
                  opens: "10:00",
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
