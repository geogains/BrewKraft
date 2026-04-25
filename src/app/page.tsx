import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { FloatingShowcase } from "@/components/sections/FloatingShowcase";
import { FeaturedFavourites } from "@/components/sections/FeaturedFavourites";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { VisitSection } from "@/components/sections/VisitSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Cafe 23 | Independent Café in Walsall",
  description:
    "Cafe 23 is Walsall's favourite independent café. Colombian coffee, ceremonial matcha, Kashmiri chai, loaded croissants, and freshly baked pastries — in the heart of Walsall.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FloatingShowcase />
      <FeaturedFavourites />
      <ReviewsSection />
      <AboutPreview />
      <VisitSection />
      <FinalCTA />
    </>
  );
}
