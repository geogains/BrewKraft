import type { Metadata } from "next";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Coffee, Leaf, Heart, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn the story behind Cafe 23 — Walsall's favourite independent café. Colombian coffee, speciality drinks, and a genuine community space in the heart of Walsall.",
};

const values = [
  {
    icon: Coffee,
    title: "Quality in every cup",
    body: "We source our coffee directly from Colombian farms — single-origin beans with genuine depth and character. Every espresso is pulled with precision. Every milk drink is textured with care.",
  },
  {
    icon: Leaf,
    title: "Speciality done right",
    body: "From our thick ceremonial-grade matcha to our warming Kashmiri and karak chai — our speciality drinks menu is built on real knowledge, real ingredients, and real craft.",
  },
  {
    icon: Heart,
    title: "A space that belongs to everyone",
    body: "We're family-friendly, study-friendly, and everything in between. The doors are open and the welcome is genuine — whoever you are, there's a table for you at Cafe 23.",
  },
  {
    icon: MapPin,
    title: "Rooted in Walsall",
    body: "We're not a chain. We don't pretend to be. We're a local independent business built for the people of Walsall — and we're proud of every cup we serve here.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1C1C1C] pt-32 sm:pt-40 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #608552 0%, transparent 60%),
                              radial-gradient(circle at 80% 30%, #8FAB82 0%, transparent 40%)`,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none z-0 bg-[url('/images/bg.png')] bg-center bg-[length:100%_auto] bg-repeat-y opacity-[0.08]"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-[#8FAB82] text-xs font-semibold uppercase tracking-widest mb-6">
            <span className="w-8 h-px bg-[#8FAB82]" />
            Our Story
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Born in Walsall.
            <br />
            <span className="text-[#8FAB82]">Built for it.</span>
          </h1>
          <p className="text-white/60 text-lg sm:text-xl max-w-2xl leading-relaxed">
            We started Cafe 23 because we believed Walsall deserved something genuinely special — not a formula, not a chain, but a real independent café with personality, craft, and heart.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="#F7F2E9" />
          </svg>
        </div>
      </section>

      {/* Story section */}
      <section className="bg-[#F7F2E9] py-20 sm:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image cluster */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* [REPLACE] Replace these placeholders with real photos */}
                <div className="aspect-[3/4] rounded-3xl overflow-hidden">
                  <ImagePlaceholder label="Café interior" tint="green" className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-4 pt-10">
                  <div className="aspect-square rounded-3xl overflow-hidden">
                    <ImagePlaceholder label="Coffee being made" tint="dark" className="w-full h-full" />
                  </div>
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                    <ImagePlaceholder label="Team members" tint="warm" className="w-full h-full" />
                  </div>
                </div>
              </div>
              {/* Quote badge */}
              <div className="absolute -bottom-6 -left-4 bg-[#608552] text-white rounded-2xl p-5 max-w-[220px] shadow-xl">
                <p className="font-display text-sm font-bold leading-snug">
                  &ldquo;Feels like something Walsall really needed.&rdquo;
                </p>
                <p className="text-white/60 text-xs mt-2">— A regular visitor</p>
              </div>
            </div>

            {/* Copy */}
            <div className="pt-8 lg:pt-0">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1C] leading-tight mb-6">
                More than a coffee shop.
              </h2>
              <div className="space-y-5 text-[#5A5A5A] text-base sm:text-lg leading-relaxed">
                <p>
                  Located inside the Saddlers Shopping Centre in the heart of Walsall, Cafe 23 is where
                  Colombian coffee meets community. We serve rich, authentic espresso and filter coffee
                  alongside a thoughtfully crafted drinks menu that spans ceremonial matcha, Kashmiri chai,
                  karak tea, and seasonal specialities.
                </p>
                <p>
                  Our food is honest and comforting — freshly baked pastries, hand-made cakes, and
                  the kind of loaded croissants and mac &amp; cheese that people genuinely come in specifically
                  to eat. Nothing is an afterthought.
                </p>
                <p>
                  The space itself has been designed to make people feel at ease. It&apos;s warm, aesthetic,
                  and deliberately calm — whether you&apos;re in for a quick coffee between errands, settling
                  in to work for the afternoon, or bringing the family in for a treat.
                </p>
                <p>
                  We think Walsall has always deserved a place like this. We&apos;re glad we get to be it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-[#608552] text-xs font-semibold uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-[#608552]" />
              What We Stand For
              <span className="w-8 h-px bg-[#608552]" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1C1C1C] leading-tight">
              The principles behind the café.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="group bg-[#F7F2E9] rounded-3xl p-8 sm:p-10 border border-[#E4DDD1] hover:border-[#608552]/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#608552]/10 flex items-center justify-center mb-6 group-hover:bg-[#608552] transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#608552] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1C1C1C] mb-3">
                    {v.title}
                  </h3>
                  <p className="text-[#5A5A5A] text-base leading-relaxed">{v.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Atmosphere section */}
      <section className="bg-[#EDE8DC] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 text-[#608552] text-xs font-semibold uppercase tracking-widest mb-5">
                <span className="w-8 h-px bg-[#608552]" />
                The Space
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1C] leading-tight mb-6">
                An interior worth visiting on its own.
              </h2>
              <p className="text-[#5A5A5A] text-base sm:text-lg leading-relaxed mb-6">
                The atmosphere at Cafe 23 is something people comment on instantly — cosy but aesthetic, calm but social. It&apos;s a space that&apos;s easy to settle into and hard to leave.
              </p>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-8">
                Whether you&apos;re solo with a laptop, catching up with friends, or bringing the kids in for a weekend treat — Cafe 23 adapts around you.
              </p>
              <Link
                href="/visit"
                className="inline-flex items-center gap-2 bg-[#608552] hover:bg-[#4A6B3E] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                Plan your visit →
              </Link>
            </div>

            <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {/* [REPLACE] Replace with real gallery images */}
              {[
                { label: "Seating area", tint: "green" as const },
                { label: "Counter & bar", tint: "warm" as const },
                { label: "Pastry display", tint: "cream" as const },
                { label: "Drinks shelf", tint: "dark" as const },
                { label: "Window seating", tint: "green" as const },
                { label: "Ambient lighting", tint: "warm" as const },
              ].map((img, i) => (
                <div key={i} className={`${i === 0 ? "row-span-2" : ""} rounded-2xl overflow-hidden`}>
                  <ImagePlaceholder
                    label={img.label}
                    tint={img.tint}
                    className={`w-full ${i === 0 ? "h-full min-h-48" : "h-40"}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
