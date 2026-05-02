"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { StarRating } from "@/components/shared/StarRating";
import { reviews } from "@/data/reviews";
import { siteConfig } from "@/data/site";
import { Quote } from "lucide-react";

export function ReviewsSection() {
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
    <section ref={sectionRef} className="relative bg-[#1C1C1C] py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 bg-[url('/images/bg1.png')] bg-center bg-[length:100%_auto] bg-repeat-y opacity-[0.08]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="reveal inline-flex items-center gap-2 text-[#f7e8b8] text-xs font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-[#f7e8b8]" />
            What People Are Saying
            <span className="w-8 h-px bg-[#f7e8b8]" />
          </div>
          <h2 className="reveal font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Loved by Penkridge.
          </h2>

          {/* Rating badge */}
          <div className="reveal inline-flex flex-col sm:flex-row items-center gap-4 bg-white border border-[#E4DDD1] rounded-2xl px-8 py-5 shadow-sm">
            <div className="text-center">
              <div className="font-display text-5xl font-bold text-[#f4e19f]">{siteConfig.rating}</div>
              <div className="text-[#5A5A5A] text-xs mt-1">{siteConfig.reviewCount} Google reviews</div>
            </div>
            <div className="hidden sm:block h-12 w-px bg-[#E4DDD1]" />
            <div className="text-center sm:text-left">
              <StarRating rating={siteConfig.rating} size="lg" className="justify-center sm:justify-start mb-2" />
              <p className="text-[#5A5A5A] text-sm flex items-center gap-1.5 flex-wrap">
                <span className="text-[#1C1C1C] font-semibold">Highly rated</span>
                <span>across</span>
                <Image
                  src="/images/google.png"
                  alt="Google"
                  height={14}
                  width={42}
                  className="h-4 w-auto object-contain opacity-70"
                />
              </p>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <article
              key={i}
              className="reveal bg-white rounded-3xl p-7 border border-[#E4DDD1] hover:shadow-lg transition-shadow duration-300"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f4e19f]/15 flex items-center justify-center text-[#f4e19f] font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1C1C1C] text-sm">{review.name}</p>
                    <StarRating rating={review.rating} size="sm" />
                  </div>
                </div>
                <Quote className="w-5 h-5 text-[#f4e19f]/30" />
              </div>

              {/* Highlight quote */}
              <p className="font-display text-lg font-bold text-[#1C1C1C] leading-snug mb-3">
                &ldquo;{review.highlight}&rdquo;
              </p>

              {/* Full review */}
              <p className="text-[#5A5A5A] text-sm leading-relaxed">
                {review.text}
              </p>
            </article>
          ))}
        </div>

        {/* CTA to Google */}
        <div className="reveal text-center mt-12">
          <a
            href="https://www.google.com/maps/search/Cafe+23+Walsall"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#f7e8b8] font-semibold text-sm hover:text-white transition-colors border-b border-[#f7e8b8]/30 hover:border-[#f7e8b8] pb-0.5"
          >
            Read all reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
