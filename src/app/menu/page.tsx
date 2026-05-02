"use client";

import { useEffect } from "react";
import Image from "next/image";
import { menuCategories, type MenuItem } from "@/data/menu";
import Link from "next/link";

const featuredPicks = [
  { name: "Strawberry Milkshake", category: "Milkshakes", badge: "Most Popular", image: "/images/strawberrymilkshake.png", scrollTo: "milkshakes" },
  { name: "Chocolate Cake", category: "New York-Style Desserts", badge: "Must Try", image: "/images/chococake.png", scrollTo: "brownies-cookies" },
  { name: "Signature Mac and Cheese", category: "House Specials", badge: "Our Signature", image: "/images/macncheese.png", scrollTo: "house-specials" },
  { name: "Chicken Pizza Bagel", category: "House Specials", badge: "Fan Favourite", image: "/images/chickenbagel.png", scrollTo: "house-specials" },
  { name: "Galaxy Ripple Brownie", category: "New York-Style Desserts", badge: "Sweet Treat", image: "/images/galaxybrownie1.png", scrollTo: "brownies-cookies" },
  { name: "Strawberry Mojito", category: "Mocktails", badge: "Fruity & Fresh", image: "/images/mojito.png", scrollTo: "mojitos-refreshers" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function BadgePill({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center bg-[#f4e19f]/10 text-[#3d1700] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
      {text}
    </span>
  );
}

function MenuRow({ item }: { item: MenuItem }) {
  return (
    <div className="flex items-start justify-between gap-6 py-4 border-b border-[#E4DDD1] last:border-0">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-0.5">
          <span className="font-semibold text-[#1C1C1C] text-sm leading-snug">{item.name}</span>
          {item.badge && <BadgePill text={item.badge} />}
        </div>
        <p className="text-[#5A5A5A] text-xs leading-relaxed">{item.description}</p>
      </div>
      <span className="font-bold text-[#3d1700] text-sm flex-shrink-0 pt-0.5">{item.price}</span>
    </div>
  );
}

function SubGroup({
  title,
  items,
  dark = false,
  id,
  highlight = false,
}: {
  title: string;
  items: MenuItem[];
  dark?: boolean;
  id?: string;
  highlight?: boolean;
}) {
  return (
    <div id={id} className={`reveal${id ? " scroll-mt-32" : ""}`}>
      <h3 className={`font-display text-xl sm:text-2xl font-bold mb-4 pb-2 border-b-2 ${dark ? "text-[#e2ca8c] border-white/20" : highlight ? "text-[#3d1700] border-[#E4DDD1]" : "text-[#3d1700] border-[#E4DDD1]"}`}>
        {title}
      </h3>
      <div className="bg-white rounded-2xl border border-[#E4DDD1] px-5 sm:px-6">
        {items.map((item, i) => (
          <MenuRow key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ label, title, dark = false, highlight = false }: { label: string; title: string; dark?: boolean; highlight?: boolean }) {
  return (
    <div className="reveal mb-12">
      <div className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-3 ${dark ? "text-[#f7e8b8]" : "text-[#3d1700]"}`}>
        <span className={`w-8 h-px ${dark ? "bg-[#f7e8b8]" : "bg-[#3d1700]"}`} />
        {label}
      </div>
      <h2 className={`font-display text-4xl sm:text-5xl font-bold ${dark ? "text-white" : highlight ? "text-[#d1b15e]" : "text-[#1C1C1C]"}`}>
        {title}
      </h2>
    </div>
  );
}

const cat = (id: string) => menuCategories.find((c) => c.id === id)!;

const navItems = [
  { label: "Signature Picks", id: "signature" },
  { label: "Drinks", id: "drinks" },
  { label: "Food", id: "food" },
  { label: "Desserts", id: "desserts" },
  { label: "Kids", id: "kids" },
  { label: "Extras", id: "extras" },
];

export default function MenuPage() {
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
      {/* Page hero */}
      <section className="relative bg-[#1C1C1C] pt-32 sm:pt-40 pb-20 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/menu-hero2.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="reveal inline-flex items-center gap-2 text-[#f7e8b8] text-xs font-semibold uppercase tracking-widest mb-5">
            <span className="w-8 h-px bg-[#f7e8b8]" />
            Blend
            <span className="w-8 h-px bg-[#f7e8b8]" />
          </div>
          <h1 className="reveal font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Our Menu
          </h1>
          <p className="reveal text-white/60 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            From our signature Colombian coffee to our legendary loaded croissants, 
            everything is made with care and served with warmth.
          </p>
          <p className="reveal mt-4 text-[#f7e8b8] text-sm">
            All items are subject to availability. Speak to our team about allergens and dietary needs.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="#F7F2E9" />
          </svg>
        </div>
      </section>

      {/* Category nav */}
      <div className="sticky top-16 sm:top-20 z-30 bg-[#F7F2E9]/95 backdrop-blur-md border-b border-[#E4DDD1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-none">
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                className="flex-shrink-0 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full border border-[#E4DDD1] bg-white hover:bg-[#e3c989] hover:text-white hover:border-[#e3c989] transition-colors duration-200 text-[#5A5A5A]"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Signature Picks */}
      <section id="signature" className="bg-[#F7F2E9] py-20 sm:py-28 scroll-mt-32 sm:scroll-mt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="inline-flex items-center gap-2 text-[#3d1700] text-xs font-semibold uppercase tracking-widest mb-4">
                <span className="w-8 h-px bg-[#3d1700]" />
                Menu Highlights
              </div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1C1C] leading-tight">
                Signature Serves.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPicks.map((item, i) => (
              <button
                key={i}
                type="button"
                className="block w-full text-left"
                onClick={() => scrollToSection(item.scrollTo)}
              >
                <article className="reveal group bg-white rounded-3xl overflow-hidden border border-[#E4DDD1] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                    <div className="absolute top-4 left-4 bg-[#3d1700] text-white text-[11px] font-bold px-3 py-1.5 rounded-full">
                      {item.badge}
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-[#e2ca8c] text-xs font-semibold uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="font-display text-xl font-bold text-[#1C1C1C] mt-1">
                      {item.name}
                    </h3>
                  </div>
                </article>
              </button>
            ))}
          </div>
        </div>
      </section>



      {/* Drinks */}
      <section id="drinks" className="bg-[#fff7dd] py-16 sm:py-24 scroll-mt-32 sm:scroll-mt-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Hot & Cold" title="Drinks" />
          <div className="space-y-10">
            <SubGroup title="Coffee & Matcha" items={cat("hot-drinks").items} highlight />
            <SubGroup id="iced-drinks" title="Iced Drinks" items={cat("cold-drinks").items} highlight />
            <SubGroup id="milkshakes" title="Milkshakes" items={cat("milkshakes").items} highlight />
            <SubGroup
              id="mojitos-refreshers"
              title="Mojitos & Refreshers"
              items={[...cat("mojitos").items, ...cat("smoothies").items]}
              highlight
            />
            <SubGroup
              title="Frappé & Specials"
              items={[...cat("frappe").items, ...cat("viral").items]}
              highlight
            />
          </div>
        </div>
      </section>

      {/* Food — with bg.png overlay */}
      <section id="food" className="relative bg-[#F7F2E9] py-16 sm:py-24 overflow-hidden scroll-mt-32 sm:scroll-mt-40">
        <div className="absolute inset-0 pointer-events-none z-0 bg-[url('/images/bg1.png')] bg-center bg-[length:100%_auto] bg-repeat-y opacity-[0.08]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="House Made" title="Food" />
          <div className="space-y-10">
            <SubGroup id="house-specials" title="House Specials" items={cat("house-specials").items} />
            <SubGroup title="All Day Food" items={cat("all-day-food").items} />
          </div>
        </div>
      </section>

      {/* Desserts */}
      <section id="desserts" className="bg-[#fff7dd] py-16 sm:py-24 scroll-mt-32 sm:scroll-mt-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Sweet Things" title="Desserts" />
          <div className="space-y-10">
            <SubGroup id="brownies-cookies" title="Brownies & Cookies" items={cat("ny-desserts").items} highlight />
            <SubGroup title="Deluxe Cheesecake" items={cat("cheesecake").items} highlight />
            <SubGroup title="French Patisserie" items={cat("french-patisserie").items} highlight />
            <SubGroup title="Waffles & Cakes" items={cat("desserts").items} highlight />
            <SubGroup title="Bakery" items={cat("bakery").items} highlight />
          </div>
        </div>
      </section>

      {/* Kids — dark background + bg.png overlay, white headings */}
      <section id="kids" className="relative bg-[#1C1C1C] py-16 sm:py-24 overflow-hidden scroll-mt-32 sm:scroll-mt-40">
        <div className="absolute inset-0 pointer-events-none z-0 bg-[url('/images/bg1.png')] bg-center bg-[length:100%_auto] bg-repeat-y opacity-[0.08]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Little Ones" title="Kids Menu" dark />
          <div className="space-y-10">
            <SubGroup title="Kids Hot Drinks" items={cat("kids-hot-drinks").items} dark />
            <SubGroup title="Kids Meals" items={cat("kids-meals").items} dark />
          </div>
        </div>
      </section>

      {/* Extras */}
      <section id="extras" className="bg-[#F7F2E9] py-16 sm:py-24 scroll-mt-32 sm:scroll-mt-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="More From Us" title="Extras" />
          <div className="space-y-10">
            <SubGroup title="Soft Drinks" items={cat("soft-drinks").items} />
            <SubGroup title="Biscuits" items={cat("biscuits").items} />
            <SubGroup title="Add-Ons" items={cat("add-ons").items} />
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="relative bg-[#1C1C1C] py-16">
        <div className="absolute inset-0 pointer-events-none z-0 bg-[url('/images/bg1.png')] bg-center bg-[length:100%_auto] bg-repeat-y opacity-[0.08]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            Something for everyone.
          </p>
          <p className="text-white/50 text-base leading-relaxed mb-8">
            Our menu changes with the seasons. Please speak to a team member for allergen information,
            dietary requirements, or to ask about specials not listed here.
          </p>
          <Link
            href="/visit"
            className="inline-flex items-center gap-2 bg-[#e3c989] hover:bg-[#c9ad68] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            Visit Blend →
          </Link>
        </div>
      </section>
    </>
  );
}
