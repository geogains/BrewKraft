"use client";

import { useEffect, useRef } from "react";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";

const favourites = [
  {
    name: "Iced Matcha Latte",
    category: "Speciality Drinks",
    description: "Thick ceremonial-grade matcha with your choice of milk, served over ice. Instagrammable and utterly delicious.",
    badge: "Most Popular",
    tint: "green" as const,
  },
  {
    name: "Kashmiri Chai",
    category: "Tea & Chai",
    description: "Soft pink, cardamom-spiced tea brewed with whole milk and finished with crushed nuts. Warming in every sense.",
    badge: "Must Try",
    tint: "warm" as const,
  },
  {
    name: "Colombian Espresso",
    category: "Coffee",
    description: "Single origin Colombian beans. Rich, smooth, and complex — the coffee that regulars swear by.",
    badge: "Our Signature",
    tint: "dark" as const,
  },
  {
    name: "Loaded Croissants",
    category: "Comfort Food",
    description: "Crispy fries loaded with your choice of toppings. The kind of dish people come in specifically for.",
    badge: "Fan Favourite",
    tint: "warm" as const,
  },
  {
    name: "Karak Chai",
    category: "Tea & Chai",
    description: "Strong brewed tea with evaporated milk and warming spices. Rich, deeply comforting, and totally addictive.",
    badge: "Must Try",
    tint: "green" as const,
  },
  {
    name: "Mac & Cheese",
    category: "Comfort Food",
    description: "Creamy, rich, and deeply satisfying. Exactly what comfort food should be.",
    badge: "Crowd Favourite",
    tint: "cream" as const,
  },
];

export function FeaturedFavourites() {
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

  return (
    <section ref={sectionRef} className="bg-[#1C1C1C] py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="reveal inline-flex items-center gap-2 text-[#608552] text-xs font-semibold uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-[#608552]" />
              Menu Highlights
            </div>
            <h2 className="reveal font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight whitespace-normal lg:whitespace-nowrap">
              Signature Serves.
            </h2>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favourites.map((item, i) => (
            <article
              key={i}
              className="reveal group bg-white rounded-3xl overflow-hidden border border-[#E4DDD1] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="relative h-52 overflow-hidden">
                {/* [REPLACE] Replace with <Image src={item.image} alt={item.name} fill className="object-cover" /> */}
                <ImagePlaceholder
                  label={`${item.name} photo`}
                  tint={item.tint}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-[#608552] text-white text-[11px] font-bold px-3 py-1.5 rounded-full">
                  {item.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-[#608552] text-xs font-semibold uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="font-display text-xl font-bold text-[#1C1C1C] mt-1 mb-3">
                  {item.name}
                </h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
