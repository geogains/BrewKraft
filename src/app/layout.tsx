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
    default: "Blend | Independent Café in Penkridge",
    template: "%s | Blend Penkridge",
  },
  description:
    "Blend is Penkridge's favourite independent café. Serving rich Colombian coffee, ceremonial matcha, Kashmiri chai, freshly baked pastries, and comfort food at 4 Crown Bridge, Penkridge.",
  keywords: [
    "cafe Penkridge",
    "coffee shop Penkridge",
    "independent café Penkridge",
    "matcha Penkridge",
    "Kashmiri chai Penkridge",
    "Colombian coffee Penkridge",
    "Crown Bridge café Penkridge",
    "blend",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Blend",
    title: "Blend",
    description: "Colombian coffee. Signature matcha. Kashmiri chai. A cosy space in Penkridge.",
    url: "https://blend-snowy.vercel.app/",
    images: [
      {
        url: "https://blend-snowy.vercel.app/images/preview2.png",
        secureUrl: "https://blend-snowy.vercel.app/images/preview2.png",
        width: 1200,
        height: 630,
        alt: "Blend preview",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blend",
    description: "Colombian coffee. Signature matcha. Kashmiri chai.",
    images: ["https://blend-snowy.vercel.app/images/preview2.png"],
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
              name: "Blend",
              description:
                "Independent café in Penkridge serving Colombian coffee, matcha, chai, pastries, and comfort food.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "4 Crown Bridge",
                addressLocality: "Penkridge",
                postalCode: "ST19 5AA",
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
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday"],
                  opens: "07:30",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Thursday", "Friday"],
                  opens: "07:30",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday", "Sunday"],
                  opens: "08:00",
                  closes: "18:00",
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
