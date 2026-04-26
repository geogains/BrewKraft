"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const favourites = [
  {
    name: "Iced Matcha Latte",
    category: "Speciality Drinks",
    description: "Thick ceremonial-grade matcha with your choice of milk, served over ice. Instagrammable and utterly delicious.",
    badge: "Most Popular",
    tint: "green" as const,
    image: "/images/icematcha.png",
    scrollTo: "iced-drinks",
  },
  {
    name: "Ferrero Rocher Ice Cream Shake",
    category: "Milkshakes",
    description: "The gold standard of shakes. A decadent blend featuring genuine Ferrero Rocher chocolates and vanilla ice cream whipped into a thick dairy shake. Indulgent, nutty, and extra luxurious.",
    badge: "Must Try",
    tint: "warm" as const,
    image: "/images/ferrerorocher.png",
    scrollTo: "milkshakes",
  },
  {
    name: "Signature Mac and Cheese",
    category: "House Specials",
    description: "The ultimate comfort bowl. Our signature mac and cheese features tender pasta drenched in rich, gooey house blend cheese sauce. A unique twist on a classic favourite.",
    badge: "Our Signature",
    tint: "dark" as const,
    image: "/images/macncheese.png",
    scrollTo: "house-specials",
  },
  {
    name: "Chicken Pizza Bagel",
    category: "House Specials",
    description: "A delicious twist on a classic. We take a toasted chewy bagel and layer it with our authentic house special sauce, house special chicken, and a generous helping of mozzarella and cheddar cheese, then grill it to perfection.",
    badge: "Fan Favourite",
    tint: "warm" as const,
    image: "/images/chickenbagel.png",
    scrollTo: "house-specials",
  },
  {
    name: "Galaxy Ripple Brownie",
    category: "New York-Style Desserts",
    description: "Our signature brownies are the definition of indulgence, crafted with premium cocoa and high-quality butter. Incredibly dense, fudgy, and rich, each bite is packed with flavour and topped with a Galaxy Ripple for an extra layer of decadence.",
    badge: "Sweet Treat",
    tint: "green" as const,
    image: "/images/galaxybrownie1.png",
    scrollTo: "brownies-cookies",
  },
  {
    name: "Strawberry Mojito",
    category: "Mocktails",
    description: "A fruity twist on the classic. We add sweet strawberries to our traditional mint and lime base for a vibrant, berry-infused mocktail that's perfectly balanced and widely loved.",
    badge: "Fruity & Fresh",
    tint: "cream" as const,
    image: "/images/mojito.png",
    scrollTo: "mojitos-refreshers",
  },
];

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
    <section ref={sectionRef} className="bg-[#F7F2E9] py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="reveal inline-flex items-center gap-2 text-[#608552] text-xs font-semibold uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-[#608552]" />
              Menu Highlights
            </div>
            <h2 className="reveal font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1C1C] leading-tight whitespace-normal lg:whitespace-nowrap">
              Signature Serves.
            </h2>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favourites.map((item, i) => {
            const article = (
              <article className="reveal group bg-white rounded-3xl overflow-hidden border border-[#E4DDD1] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
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
              <Link key={i} href="/menu" className="block">
                {article}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
