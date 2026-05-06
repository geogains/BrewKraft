"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const floatingItems = [
  {
    src: "/images/cup12.png",
    alt: "Iced Matcha Latte",
    delay: "0s",
    animation: "animate-float-slow",
    rotation: "-rotate-3",
    size: "w-36 h-44 sm:w-44 sm:h-56",
    position: "top-6 left-[5%] sm:left-[3%]",
  },
  {
    src: "/images/benedicto.png",
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
    src: "/images/matchaa.png",
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
    src: "/images/frappuccino1.png",
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
      className="relative bg-[#3d1700] pt-32 sm:pt-40 pb-20 sm:pb-28 lg:pb-36 overflow-hidden"
    >
      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, #f7e8b8 0%, transparent 60%),
                            radial-gradient(circle at 70% 30%, #c9ad68 0%, transparent 50%)`,
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

      <div className="absolute inset-0 pointer-events-none z-0 bg-[url('/images/brewkraftbg.png')] bg-center bg-[length:100%_auto] bg-repeat-y opacity-[0.08]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glass container */}
        <div className="rounded-3xl border border-white/50 bg-white/15 shadow-2xl shadow-black/5 backdrop-blur-sm">
        <div className="relative min-h-[480px] sm:min-h-[560px] lg:min-h-[600px] flex items-center justify-center">
          {/* Central text */}
          <div className="relative z-10 text-center max-w-lg px-4">
            {/* DESKTOP HEADING SIZE CONTROL — adjust lg/xl values here */}
            <h2 className="reveal font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              KRAFTING <span className="text-[#fff7d6]">MOMENTS,</span> BREWING <span className="text-[#3d1700]">LEGACY!</span>
            </h2>
            <div className="reveal mt-10 sm:mt-12 lg:mt-0 bg-white/5 backdrop-blur-[3px] border border-white/20 rounded-2xl px-5 py-4 sm:px-6 sm:py-5">
              <p className="text-[#3d1700] text-base sm:text-lg leading-relaxed">
                From our silky matcha lattes to our legendary loaded croissants, everything on the menu is made to make your day a little better.
              </p>
            </div>
          </div>

          {/* Floating images */}
          {floatingItems.map((item, i) => (
            <div
              key={i}
              className={`absolute ${item.position} ${item.animation} ${item.rotation}`}
              style={{ animationDelay: item.delay }}
            >
              <div className="reveal">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={200}
                  height={250}
                  className={`${item.size} object-contain`}
                />
              </div>
            </div>
          ))}
        </div>
        </div>

        {/* CTA — outside glass container */}
        <div className="reveal text-center mt-8">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-[#e2ca8f] hover:bg-[#c9ad68] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
