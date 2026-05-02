"use client";

import { useEffect } from "react";
import Image from "next/image";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Coffee, Leaf, Heart, MapPin } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Coffee,
    title: "Quality in every cup",
    body: "We source our coffee directly from Colombian farms. Single-origin beans with genuine depth and character. Every espresso is pulled with precision. Every milk drink is textured with care.",
  },
  {
    icon: Leaf,
    title: "Speciality done right",
    body: "From our thick ceremonial-grade matcha to our warming Kashmiri and karak chai. Our speciality drinks menu is built on real knowledge, real ingredients, and real craft.",
  },
  {
    icon: Heart,
    title: "A space that belongs to everyone",
    body: "We're family-friendly, study-friendly, and everything in between. The doors are open and the welcome is genuine. Whoever you are, there's a table for you at Blend.",
  },
  {
    icon: MapPin,
    title: "Rooted in Penkridge",
    body: "We're not a chain. We don't pretend to be. We're a local independent business built for the people of Penkridge, and we're proud of every cup we serve here.",
  },
];

const bentoImages = [
  // Row 1: landscape(2) + portrait(1) + portrait(1)
  { src: "/images/gallery2.jpg", span: "col-span-2 lg:col-span-2", height: "h-52" },
  { src: "/images/gallery3.jpg", span: "col-span-1",               height: "h-52" },
  { src: "/images/gallry4.jpg",  span: "col-span-1",               height: "h-52" },
  // Row 2: portrait(1) + portrait(1) + landscape(2)
  { src: "/images/gallery5.jpg", span: "col-span-1",               height: "h-64" },
  { src: "/images/gallery6.jpg", span: "col-span-1",               height: "h-64" },
  { src: "/images/gallery7.jpg", span: "col-span-2 lg:col-span-2", height: "h-64" },
  // Row 3: landscape(2) + landscape(2)
  { src: "/images/gallery8.jpg", span: "col-span-2 lg:col-span-2", height: "h-52" },
  { src: "/images/gallery9.jpg", span: "col-span-2 lg:col-span-2", height: "h-52" },
];

export default function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#3d1700] pt-32 sm:pt-40 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, #f7e8b8 0%, transparent 60%),
                              radial-gradient(circle at 70% 30%, #c9ad68 0%, transparent 50%)`,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none z-0 bg-[url('/images/bg1.png')] bg-center bg-[length:100%_auto] bg-repeat-y opacity-[0.08]"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="reveal inline-flex items-center gap-2 text-white/60 text-xs font-semibold uppercase tracking-widest mb-6">
            <span className="w-8 h-px bg-white/40" />
            Our Story
            <span className="w-8 h-px bg-white/40" />
          </div>
          <h1 className="reveal font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-[#fff7d6] leading-tight mb-6">
            Born in Penkridge.
            <br />Built for it.
          </h1>
          <p className="reveal text-[#e2ca8c] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            We started Blend because we believed Penkridge deserved something genuinely special, not a formula, not a chain, but a real independent café with personality, craft, and heart.
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
            <div className="reveal relative">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
                <Image src="/images/gallery1.png" alt="Blend gallery image" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              {/* Quote badge */}
              <div className="absolute -bottom-6 -left-4 bg-[#f4e19f] text-white rounded-2xl p-5 max-w-[220px] shadow-xl">
                <p className="font-display text-sm font-bold leading-snug">
                  &ldquo;Just what Penkridge needed! Atmosphere is calming and cosy!&rdquo;
                </p>
                <p className="text-white/60 text-xs mt-2">— Chloe Davies</p>
              </div>
            </div>

            {/* Copy */}
            <div className="pt-8 lg:pt-0">
              <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1C] leading-tight mb-6">
                More than a coffee shop.
              </h2>
              <div className="reveal space-y-5 text-[#5A5A5A] text-base sm:text-lg leading-relaxed">
                <p>
                  Located at 4 Crown Bridge in the heart of Penkridge, Blend is where
                  Colombian coffee meets community. We serve rich, authentic espresso and filter coffee
                  alongside a thoughtfully crafted drinks menu that spans ceremonial matcha, Kashmiri chai,
                  karak tea, and seasonal specialities.
                </p>
                <p>
                  Our food is honest and comforting. Freshly baked pastries, hand-made cakes, and
                  the kind of loaded croissants and mac &amp; cheese that people genuinely come in specifically
                  to eat. Nothing is an afterthought.
                </p>
                <p>
                  The space itself has been designed to make people feel at ease. It&apos;s warm, aesthetic,
                  and deliberately calm. Whether you&apos;re in for a quick coffee between errands, settling
                  in to work for the afternoon, or bringing the family in for a treat.
                </p>
                <p>
                  We think Penkridge has always deserved a place like this. We&apos;re glad we get to be it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center max-w-xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-[#f4e19f] text-xs font-semibold uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-[#f4e19f]" />
              What We Stand For
              <span className="w-8 h-px bg-[#f4e19f]" />
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
                  className="reveal group bg-[#F7F2E9] rounded-3xl p-8 sm:p-10 border border-[#E4DDD1] hover:border-[#e2ca8f]/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#f4e19f]/10 flex items-center justify-center mb-6 group-hover:bg-[#f4e19f] transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#3d1700] group-hover:text-white transition-colors duration-300" />
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
      <section className="bg-[#F7F2E9] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {/* Text content */}
          <div className="reveal max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#3d1700] text-xs font-semibold uppercase tracking-widest mb-5">
              <span className="w-8 h-px bg-[#3d1700]" />
              The Space
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1C] leading-tight mb-6">
              A <span className="text-[#3d1700]">cosy</span> atmosphere.
            </h2>
            <p className="text-[#5A5A5A] text-base sm:text-lg leading-relaxed mb-6">
              The atmosphere at Blend is something people comment on instantly, cosy but aesthetic, calm but social. It&apos;s a space that&apos;s easy to settle into and hard to leave.
            </p>
            <p className="text-[#5A5A5A] text-base leading-relaxed mb-8">
              Whether you&apos;re solo with a laptop, catching up with friends, or bringing the kids in for a weekend treat, Blend adapts around you.
            </p>
            <Link
              href="/visit"
              className="inline-flex items-center gap-2 bg-[#f4e19f] hover:bg-[#c9ad68] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Plan your visit →
            </Link>
          </div>

          {/* Bento gallery — 4 cols desktop, 2 cols mobile */}
          <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-4">
            {bentoImages.map((img, i) => (
              <div key={i} className={`${img.span} ${img.height} relative rounded-2xl overflow-hidden`}>
                <Image
                  src={img.src}
                  alt="Blend gallery image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
