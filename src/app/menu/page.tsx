import type { Metadata } from "next";
import Image from "next/image";
import { menuCategories } from "@/data/menu";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore Cafe 23's full menu — Colombian coffee, ceremonial matcha, Kashmiri chai, freshly baked pastries, loaded croissants, mac & cheese, and more. Walsall's favourite independent café.",
};

function BadgePill({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center bg-[#608552]/10 text-[#608552] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
      {text}
    </span>
  );
}

export default function MenuPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative bg-[#1C1C1C] pt-32 sm:pt-40 pb-20 sm:pb-24 overflow-hidden">
        {/* Hero background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/menu-hero.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-[#8FAB82] text-xs font-semibold uppercase tracking-widest mb-5">
            <span className="w-8 h-px bg-[#8FAB82]" />
            Cafe 23
            <span className="w-8 h-px bg-[#8FAB82]" />
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Our Menu
          </h1>
          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            From our signature Colombian coffee to our legendary loaded croissants —
            everything is made with care and served with warmth.
          </p>
          <p className="mt-4 text-[#8FAB82] text-sm">
            {/* [PLACEHOLDER] Replace with actual menu note if needed */}
            All items are subject to availability. Speak to our team about allergens and dietary needs.
          </p>
        </div>

        {/* Wave transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="#F7F2E9" />
          </svg>
        </div>
      </section>

      {/* Category nav (sticky desktop) */}
      <div className="sticky top-16 sm:top-20 z-30 bg-[#F7F2E9]/95 backdrop-blur-md border-b border-[#E4DDD1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-none">
            {menuCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="flex-shrink-0 flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full border border-[#E4DDD1] bg-white hover:bg-[#608552] hover:text-white hover:border-[#608552] transition-all duration-200 text-[#5A5A5A]"
              >
                <span>{cat.icon}</span>
                <span>{cat.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Menu sections */}
      <div className="bg-[#F7F2E9] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {menuCategories.map((cat) => (
            <section key={cat.id} id={cat.id} className="scroll-mt-32">
              {/* Category header */}
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-[#608552] flex items-center justify-center text-xl flex-shrink-0">
                  {cat.icon}
                </div>
                <div>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1C1C1C]">
                    {cat.title}
                  </h2>
                </div>
                <div className="flex-1 h-px bg-[#E4DDD1] ml-4" />
              </div>

              {/* Items grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cat.items.map((item, i) => (
                  <div
                    key={i}
                    className="group bg-white rounded-2xl p-6 border border-[#E4DDD1] hover:border-[#608552]/30 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-2">
                          <h3 className="font-semibold text-[#1C1C1C] text-base leading-snug">
                            {item.name}
                          </h3>
                          {item.badge && <BadgePill text={item.badge} />}
                        </div>
                        <p className="text-[#5A5A5A] text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0 text-right">
                        {/* [PLACEHOLDER] Replace with actual price */}
                        <span className="font-bold text-[#608552] text-base">{item.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Note section */}
      <section className="relative bg-[#EDE8DC] py-16">
        <div
          className="absolute inset-0 pointer-events-none z-0 bg-[url('/images/bg.png')] bg-center bg-[length:100%_auto] bg-repeat-y opacity-[0.08]"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display text-2xl sm:text-3xl font-bold text-[#1C1C1C] mb-4">
            Something for everyone.
          </p>
          <p className="text-[#5A5A5A] text-base leading-relaxed mb-8">
            {/* [PLACEHOLDER] Menu note — confirm allergen policy and seasonal offerings with client */}
            Our menu changes with the seasons. Please speak to a team member for allergen information,
            dietary requirements, or to ask about specials not listed here.
          </p>
          <Link
            href="/visit"
            className="inline-flex items-center gap-2 bg-[#608552] hover:bg-[#4A6B3E] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            Visit Cafe 23 →
          </Link>
        </div>
      </section>
    </>
  );
}
