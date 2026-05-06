"use client";

import { useEffect } from "react";
import Image from "next/image";
import { menuCategories, type MenuItem } from "@/data/menu";
import { featuredPicks } from "@/data/featuredPicks";
import Link from "next/link";

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
  { label: "Highlights", id: "signature" },
  { label: "Drinks", id: "drinks" },
  { label: "Breakfast", id: "breakfast" },
  { label: "Food", id: "food" },
  { label: "Kids", id: "kids" },
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
            src="/images/menu-hero3.png"
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
            BrewKraft
            <span className="w-8 h-px bg-[#f7e8b8]" />
          </div>
          <h1 className="reveal font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Our Menu
          </h1>
          <p className="reveal text-white/60 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            From specialty coffees and freshly brewed teas to hearty breakfasts and handcrafted
            paninis — everything is made with care and served with warmth.
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
            <SubGroup id="coffee" title="Coffee" items={cat("coffee").items} highlight />
            <SubGroup id="tea" title="Tea" items={cat("tea").items} highlight />
            <SubGroup id="iced-drinks" title="Iced Drinks" items={cat("iced-drinks").items} highlight />
            <SubGroup id="lemonade" title="Lemonade" items={cat("lemonade").items} highlight />
            <div className="reveal bg-[#3d1700]/5 border border-[#3d1700]/10 rounded-2xl px-5 sm:px-6 py-5">
              <p className="text-[#3d1700] text-sm font-semibold mb-1">Alternative Milks &amp; Flavour Syrups</p>
              <p className="text-[#5A5A5A] text-xs leading-relaxed">
                All drinks can be made with oat, almond, or soy milk — ask our team for details.
                We also carry a range of premium flavour syrups including vanilla, caramel, hazelnut,
                and seasonal specials. Ask at the counter for today&apos;s selection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breakfast — with brewkraftbg.png overlay */}
      <section id="breakfast" className="relative bg-[#F7F2E9] py-16 sm:py-24 overflow-hidden scroll-mt-32 sm:scroll-mt-40">
        <div className="absolute inset-0 pointer-events-none z-0 bg-[url('/images/brewkraftbg.png')] bg-center bg-[length:100%_auto] bg-repeat-y opacity-[0.08]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Morning Favourites" title="Breakfast & Brunch" />
          <div className="space-y-10">
            <SubGroup id="breakfast-brunch" title="Breakfast & Brunch" items={cat("breakfast-brunch").items} />
            <SubGroup id="simple-classic" title="Simple & Classic" items={cat("simple-classic").items} />
            <SubGroup id="sides" title="Sides" items={cat("sides").items} />
          </div>
        </div>
      </section>

      {/* Food */}
      <section id="food" className="bg-[#fff7dd] py-16 sm:py-24 scroll-mt-32 sm:scroll-mt-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Lunch & Mains" title="Food" />
          <div className="space-y-10">
            <SubGroup id="toasties-croissant" title="Toasties & Croissant" items={cat("toasties-croissant").items} highlight />
            <SubGroup id="sandwiches-ciabatta" title="Sandwiches & Ciabatta" items={cat("sandwiches-ciabatta").items} highlight />
            <SubGroup id="paninis" title="Paninis" items={cat("paninis").items} highlight />
            <SubGroup id="baguette" title="Baguette" items={cat("baguette").items} highlight />
            <SubGroup id="wraps" title="Wraps" items={cat("wraps").items} highlight />
            <SubGroup id="jacket-potato" title="Jacket Potato" items={cat("jacket-potato").items} highlight />
            <SubGroup id="all-day-favourites" title="All Day Favourites" items={cat("all-day-favourites").items} highlight />
          </div>
        </div>
      </section>

      {/* Kids — dark background + brewkraftbg.png overlay, white headings */}
      <section id="kids" className="relative bg-[#1C1C1C] py-16 sm:py-24 overflow-hidden scroll-mt-32 sm:scroll-mt-40">
        <div className="absolute inset-0 pointer-events-none z-0 bg-[url('/images/brewkraftbg.png')] bg-center bg-[length:100%_auto] bg-repeat-y opacity-[0.08]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Little Ones" title="Kids Menu" dark />
          <div className="space-y-10">
            <SubGroup id="kids-breakfast" title="Kids Breakfast" items={cat("kids-breakfast").items} dark />
            <SubGroup id="kids-brunch-lunch" title="Kids Brunch & Lunch" items={cat("kids-brunch-lunch").items} dark />
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="relative bg-[#1C1C1C] py-16">
        <div className="absolute inset-0 pointer-events-none z-0 bg-[url('/images/brewkraftbg.png')] bg-center bg-[length:100%_auto] bg-repeat-y opacity-[0.08]" />
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
            Visit BrewKraft →
          </Link>
        </div>
      </section>
    </>
  );
}
