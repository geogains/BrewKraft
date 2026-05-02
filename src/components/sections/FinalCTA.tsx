"use client";

import { useEffect, useRef } from "react";

export function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#fff7da] py-24 sm:py-32 overflow-hidden">
      {/* Background decoration */}
     
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full border border-white/10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full border border-white/5 -translate-x-1/2 translate-y-1/2" />
      {/* Background image overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0 bg-[url('/images/bg1.png')] bg-center bg-[length:100%_auto] bg-repeat-y opacity-[0.08]"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal inline-flex items-center gap-2 text-[#3d1700] text-xs font-semibold uppercase tracking-widest mb-6">
          <span className="w-8 h-px bg-[#e2ca8f]/40" />
          Penkridge&apos;s Favourite Café
          <span className="w-8 h-px bg-[#e2ca8f]/40" />
        </div>

        <h2 className="reveal font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1C1C1C] leading-tight mb-6">
          Your next great coffee is waiting.
        </h2>

        <p className="reveal text-[#3d1700] text-base sm:text-xl max-w-xl mx-auto leading-relaxed">
          Come see what the fuss is about. We&apos;re in the heart of Penkridge and we can&apos;t wait to welcome you.
        </p>
      </div>
    </section>
  );
}
