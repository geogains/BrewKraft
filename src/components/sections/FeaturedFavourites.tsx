"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { featuredPicks } from "@/data/featuredPicks";

type Props = {
  mode?: "home" | "menu";
};

export function FeaturedFavourites({ mode = "home" }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleMenuScroll = (scrollTo: string) => {
    document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section ref={sectionRef} className="bg-[#fff7dd] py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="reveal inline-flex items-center gap-2 text-[#3d1700] text-xs font-semibold uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-[#3d1700]" />
              Menu Highlights
            </div>
            <h2 className="reveal font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1C1C] leading-tight whitespace-normal lg:whitespace-nowrap">
              Signature Serves.
            </h2>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPicks.map((item, i) => {
            const article = (
              <article className="reveal group bg-white rounded-3xl overflow-hidden border border-[#E4DDD1] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-[#3d1700] text-white text-[11px] font-bold px-3 py-1.5 rounded-full">
                    {item.badge}
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <span className="text-[#e2ca8c] text-xs font-semibold uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="font-display text-xl font-bold text-[#1C1C1C] mt-1">
                    {item.name}
                  </h3>
                </div>
              </article>
            );

            if (mode === "menu") {
              return (
                <button
                  key={i}
                  type="button"
                  className="block w-full text-left"
                  onClick={() => handleMenuScroll(item.scrollTo)}
                >
                  {article}
                </button>
              );
            }

            return (
              <Link key={i} href={`/menu#${item.scrollTo}`} className="block">
                {article}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
