"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { StarRating } from "@/components/shared/StarRating";
import { siteConfig } from "@/data/site";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on hero image
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onScroll = () => {
      const scrollY = window.scrollY;
      el.style.transform = `translateY(${scrollY * 0.3}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background image layer with parallax */}
      <div ref={heroRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/images/hero1.png"
          alt="Inside Cafe 23, Walsall"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-20">
        <div className="flex-1 flex flex-col justify-center max-w-3xl">
          {/* Headline — outside glass */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] animate-fade-up">
            WALSALL'S<br />
            <span className="text-[#608552]">FAVOURITE</span><br />
            CAFÉ.
          </h1>

          {/* Glass content container */}
          <div className="mt-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl px-6 py-8 sm:px-10 sm:py-10">
            {/* Sub-copy */}
            <p
              className="text-white/75 text-base sm:text-lg lg:text-xl leading-relaxed max-w-lg mb-10 animate-fade-up"
              style={{ animationDelay: "0.15s" }}
            >
              Colombian coffee. Signature matcha. Kashmiri chai. Loaded croissants.
              A cosy space for working, catching up, or simply switching off.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap items-center gap-4 animate-fade-up"
              style={{ animationDelay: "0.25s" }}
            >
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 bg-[#608552] hover:bg-[#4A6B3E] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base"
              >
                Explore the Menu
              </Link>
              <Link
                href="/visit"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 text-sm sm:text-base"
              >
                Plan Your Visit
              </Link>
            </div>

            {/* Social proof strip */}
            <div
              className="flex items-center gap-4 mt-12 animate-fade-up"
              style={{ animationDelay: "0.35s" }}
            >
              <StarRating rating={siteConfig.rating} size="md" className="gap-1" />
              <div className="h-4 w-px bg-white/30" />
              <span className="text-white/70 text-sm">
                <span className="text-white font-semibold">{siteConfig.rating}</span> rating · {siteConfig.reviewCount} Google reviews
              </span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-8 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <div className="flex flex-col items-center gap-2 text-white/40 animate-bounce">
            <ArrowDown className="w-5 h-5" />
          </div>
        </div>
      </div>

    </section>
  );
}
