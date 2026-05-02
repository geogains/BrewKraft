import type { Metadata } from "next";
import { FloatingShowcase } from "@/components/sections/FloatingShowcase";
import { FeaturedFavourites } from "@/components/sections/FeaturedFavourites";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Blend | Independent Café in Penkridge",
  description:
    "Blend is Penkridge's favourite independent café. Colombian coffee, ceremonial matcha, Kashmiri chai, loaded croissants, and freshly baked pastries, in the heart of Penkridge.",
};

export default function HomePage() {
  return (
    <>
      <FloatingShowcase />
      <FeaturedFavourites />
      <AboutPreview />
      <ReviewsSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
