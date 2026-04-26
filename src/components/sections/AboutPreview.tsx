"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const stats: Array<{ value: string; label: string; logoSrc?: string }> = [
  { value: "4.5★", label: "Rating", logoSrc: "/images/google.png" },
  { value: "90+", label: "Five-Star Reviews" },
  { value: "£1–10", label: "Price Range" },
  { value: "WS1", label: "Heart of Walsall" },
];

export function AboutPreview() {
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
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#EDE8DC] py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — image */}
          <div className="reveal relative">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/images/about.png"
                alt="About Cafe 23"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#608552] rounded-2xl p-5 shadow-xl">
              <p className="text-white font-display text-2xl font-bold">Since</p>
              <p className="text-white/70 text-sm">Day one in Walsall</p>
            </div>
          </div>

          {/* Right — copy */}
          <div>
            <div className="reveal inline-flex items-center gap-2 text-[#608552] text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-8 h-px bg-[#608552]" />
              Our Story
            </div>

            <h2 className="reveal font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1C1C] leading-tight mb-8">
              Born in Walsall.
              <br />
              <span className="text-[#608552]">Built for it.</span>
            </h2>

            <div className="reveal space-y-5 text-[#5A5A5A] text-base sm:text-lg leading-relaxed">
              <p>
                Cafe 23 started with a simple belief: that Walsall deserved a café that felt genuinely
                special. Not a chain. Not a formula. A real, independent space with good coffee,
                standout drinks, and a genuine sense of welcome.
              </p>
              <p>
                We source rich Colombian coffee, brew our matcha with care, craft our chai the
                traditional way, and bake (or source) pastries worth coming back for. The food is
                comforting and honest. The space is warm, aesthetic, and entirely yours.
              </p>
              <p>
                Whether you&apos;re stopping in for five minutes or settling in for the afternoon, 
                you&apos;re always welcome here.
              </p>
            </div>

            {/* Stats row */}
            <div className="reveal grid grid-cols-2 gap-4 mt-10 mb-10">
              {stats.map((s) => (
                <div key={s.label} className="bg-white border border-[#E4DDD1] rounded-2xl px-5 py-4">
                  <div className="font-display text-2xl font-bold text-[#608552]">{s.value}</div>
                  <div className="text-[#1C1C1C] text-xs mt-1 flex items-center gap-1.5">
                    {s.logoSrc && (
                      <Image
                        src={s.logoSrc}
                        alt="Google"
                        height={14}
                        width={42}
                        className="h-3.5 w-auto object-contain opacity-60"
                      />
                    )}
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#608552] hover:bg-[#4A6B3E] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                Read our story →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
