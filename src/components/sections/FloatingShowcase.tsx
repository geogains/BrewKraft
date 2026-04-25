"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const floatingItems = [
  {
    src: "/images/1.png",
    alt: "Iced Matcha Latte",
    delay: "0s",
    animation: "animate-float-slow",
    rotation: "-rotate-3",
    size: "w-36 h-44 sm:w-44 sm:h-56",
    position: "top-6 left-[5%] sm:left-[3%]",
  },
  {
    src: "/images/2.png",
    alt: "Kashmiri Chai",
    delay: "0.8s",
    animation: "animate-float-medium",
    rotation: "rotate-2",
    size: "w-32 h-40 sm:w-40 sm:h-52",
    position: "top-1/2 -translate-y-1/2 right-[-1%] sm:right-[1%]",
  },
  {
    src: "/images/8.png",
    alt: "Colombian Espresso",
    delay: "1.4s",
    animation: "animate-float-slow",
    rotation: "rotate-3",
    size: "w-28 h-36 sm:w-36 sm:h-44",
    position: "top-1/2 -translate-y-1/2 left-[-1%] sm:left-[1%]",
  },
  {
    src: "/images/4.png",
    alt: "Cinnamon Roll",
    delay: "0.4s",
    animation: "animate-float-medium",
    rotation: "-rotate-2",
    size: "w-32 h-36 sm:w-40 sm:h-44",
    position: "bottom-12 right-[5%] sm:right-[10%]",
  },
  {
    src: "/images/5.png",
    alt: "Loaded Croissants",
    delay: "1s",
    animation: "animate-float-gentle",
    rotation: "rotate-1",
    size: "w-24 h-32 sm:w-32 sm:h-40",
    position: "bottom-20 left-[2%] sm:left-[8%]",
  },
  {
    src: "/images/7.png",
    alt: "Pastry",
    delay: "1.6s",
    animation: "animate-float-slow",
    rotation: "-rotate-2",
    size: "w-28 h-36 sm:w-36 sm:h-44",
    position: "top-0 right-[8%] sm:right-[5%]",
  },
];

export function FloatingShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F7F2E9] py-20 sm:py-28 lg:py-36 overflow-hidden"
    >
      {/* Background orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, #608552/15 0%, transparent 70%)`,
          opacity: 0.6,
        }}
      />

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-[#608552]/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#608552]/5 pointer-events-none" />

      {/* Top wave separator */}
      <div className="absolute top-0 left-0 w-full pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 82 L0 40 Q360 0 720 40 Q1080 80 1440 40 L1440 82 Z"
            fill="#F7F2E9"
          />
        </svg>
      </div>

      {/* Background image overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0 bg-[url('/images/bg.png')] bg-center bg-[length:100%_auto] bg-repeat-y opacity-[0.08]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glass container */}
        <div className="rounded-3xl border border-white/50 bg-white/15 shadow-2xl shadow-black/5 backdrop-blur-sm">
        <div className="relative min-h-[480px] sm:min-h-[560px] lg:min-h-[600px] flex items-center justify-center">
          {/* Central text */}
          <div className="relative z-10 text-center max-w-lg px-4">
            <div className="reveal inline-flex items-center gap-2 text-[#608552] text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-6 h-px bg-[#608552]" />
              Signature Favourites
              <span className="w-6 h-px bg-[#608552]" />
            </div>
            <h2 className="reveal font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1C1C] leading-tight mb-6">
              GIVE THE <span className="text-[#608552]">PEOPLE</span> WHAT THEY WANT!
            </h2>
            <div className="reveal bg-white/5 backdrop-blur-[3px] border border-white/20 rounded-2xl px-5 py-4 sm:px-6 sm:py-5 mb-8">
              <p className="text-[#5A5A5A] text-base sm:text-lg leading-relaxed">
                From our silky matcha lattes to our legendary loaded croissants — everything on the menu is made to make your day a little better.
              </p>
            </div>
            <div className="reveal">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 bg-[#608552] hover:bg-[#4A6B3E] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base"
              >
                View Full Menu
              </Link>
            </div>
          </div>

          {/* Floating images */}
          {floatingItems.map((item, i) => (
            <div
              key={i}
              className={`absolute ${item.position} ${item.animation} ${item.rotation}`}
              style={{ animationDelay: item.delay }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={200}
                height={250}
                className={`${item.size} object-contain`}
              />
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
