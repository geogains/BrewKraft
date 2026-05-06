import type { Metadata } from "next";
import { FloatingShowcase } from "@/components/sections/FloatingShowcase";
import { FeaturedFavourites } from "@/components/sections/FeaturedFavourites";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { EventsBanner } from "@/components/sections/EventsBanner";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "BrewKraft | Independent Café in Walsall",
  description:
    "BrewKraft is Walsall's favourite independent café. Colombian coffee, ceremonial matcha, Kashmiri chai, loaded croissants, and freshly baked pastries, in the heart of Walsall.",
};

export default function HomePage() {
  return (
    <>
      <FloatingShowcase />
      <EventsBanner />
      <FeaturedFavourites />
      <ReviewsSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
