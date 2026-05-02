"use client";

import { useEffect, useRef } from "react";
import { Coffee, BookOpen, Users, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Coffee,
    title: "Coffee worth travelling for",
    body: "Our Colombian single origin beans are roasted for depth and complexity, not just caffeine. Every cup is brewed with precision and care.",
  },
  {
    icon: Sparkles,
    title: "Drinks people keep coming back for",
    body: "From our thick ceremonial-grade matcha lattes to our warming Kashmiri chai, the speciality drinks menu is the reason regulars never stray.",
  },
  {
    icon: BookOpen,
    title: "A space that lets you breathe",
    body: "Calm enough to focus. Comfortable enough to stay. Whether you're studying, working, or just need a quiet hour, this is your spot.",
  },
  {
    icon: Users,
    title: "Community at its heart",
    body: "We're not just another café, we're a gathering place. Family-friendly, inclusive, and always ready to welcome a new face.",
  },
];

export function ExperienceSection() {
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
    <section ref={sectionRef} className="bg-[#F7F2E9] py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="reveal inline-flex items-center gap-2 text-[#f4e19f] text-xs font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-[#f4e19f]" />
            The Blend Experience
          </div>
          <h2 className="reveal font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1C1C] leading-tight">
            More than coffee.
            <br />
            <span className="text-[#f4e19f]">Much more.</span>
          </h2>
          <p className="reveal text-[#5A5A5A] text-lg mt-5 leading-relaxed">
            Blend is a space that adapts to you. Morning coffee runs, afternoon study sessions, family weekends,
            or a long catch-up with someone you&apos;ve been meaning to see.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="reveal group relative bg-white rounded-3xl p-8 sm:p-10 border border-[#E4DDD1] hover:border-[#608552]/30 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-[#f4e19f]/10 flex items-center justify-center mb-6 group-hover:bg-[#f4e19f] transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#f4e19f] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1C1C1C] mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-[#5A5A5A] text-base leading-relaxed">
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* Atmospheric quote callout */}
        <div className="reveal mt-16 bg-[#f4e19f] rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, #f7e8b8 0%, transparent 50%),
                                radial-gradient(circle at 80% 20%, #d4c06d 0%, transparent 50%)`,
            }}
          />
          <p className="relative font-display text-2xl sm:text-3xl lg:text-4xl text-white font-bold leading-tight max-w-2xl mx-auto">
            &ldquo;Feels like something Penkridge really needed.&rdquo;
          </p>
          <p className="relative text-white/60 mt-4 text-sm">— A regular visitor</p>
        </div>
      </div>
    </section>
  );
}
