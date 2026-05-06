"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Slide = {
  image:       string;
  eyebrow:     string;
  title:       string;
  subtitle:    string;
  description: string;
  datetime:    string;
  cta:         string;
  href:        string;
};

// ── Replace image paths with real event photos as they become available ─────
const SLIDES: Slide[] = [
  {
    image:       "/images/chess.jpg",
    eyebrow:     "Community Events",
    title:       "Chess Nights",
    subtitle:    "at BrewKraft",
    description: "Bring your A-game. Join us for a relaxed evening of chess, great coffee, and good company in Walsall's favourite café.",
    datetime:    "Every Thursday · 7PM onwards",
    cta:         "Join Us",
    href:        "/visit",
  },
  {
    image:       "/images/livemusic.png",
    eyebrow:     "Live Music",
    title:       "Acoustic",
    subtitle:    "Sessions",
    description: "Unwind to the sound of live acoustic sets from local artists. The perfect Friday evening soundtrack with your favourite drink in hand.",
    datetime:    "Every Friday · 6PM – 9PM",
    cta:         "Plan Your Visit",
    href:        "/visit",
  },
  {
    image:       "/images/menu-hero3.png",
    eyebrow:     "Family Fun",
    title:       "Sunday Family",
    subtitle:    "Brunch",
    description: "Bring the whole family for our relaxed Sunday brunch. Kids' menu available, plenty of space, and bottomless good vibes all morning.",
    datetime:    "Every Sunday · 10AM – 1PM",
    cta:         "See the Menu",
    href:        "/menu",
  },
  {
    image:       "/images/book.png",
    eyebrow:     "Monthly Social",
    title:       "Book Club",
    subtitle:    "Meetings",
    description: "Read, discuss, and enjoy great coffee with fellow book lovers. All genres welcome — no judgement, just good conversation and great chai.",
    datetime:    "First Tuesday · 7PM",
    cta:         "Get Involved",
    href:        "/visit",
  },
  {
    image:       "/images/quiz.png",
    eyebrow:     "Special Event",
    title:       "Quiz Night",
    subtitle:    "at BrewKraft",
    description: "Test your knowledge with friends or fly solo. Prizes on offer, drinks flowing, and the atmosphere is always electric.",
    datetime:    "Every Wednesday · 7:30PM",
    cta:         "Reserve a Spot",
    href:        "/visit",
  },
];

const INTERVAL_MS    = 8500;
const TRANSITION_MS  = 850;

// Infinite-loop track: [clone-of-last, ...real slides..., clone-of-first]
const TRACK = [SLIDES[SLIDES.length - 1], ...SLIDES, SLIDES[0]];
const N = TRACK.length; // total track items (SLIDES.length + 2)

export function EventsBanner() {
  // idx: position within TRACK (1 = real first slide)
  const [idx, setIdx] = useState(1);
  // when true, disable CSS transition for the silent clone→real jump
  const [noTransition, setNoTransition] = useState(false);

  const timerRef    = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);

  // Dot indicator: maps track idx → 0-based SLIDES index
  const dotActive = idx === 0 ? SLIDES.length - 1 : (idx - 1) % SLIDES.length;

  const advance = useCallback(() => setIdx((p) => p + 1), []);
  const retreat = useCallback(() => setIdx((p) => p - 1), []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(advance, INTERVAL_MS);
  }, [advance]);

  // Start autoplay on mount
  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  // Detect when we've landed on a clone, then silently snap to the real slide
  useEffect(() => {
    // Arrived at clone-of-last (before real slides)
    if (idx === 0) {
      const t = setTimeout(() => {
        setNoTransition(true);
        setIdx(SLIDES.length); // jump to real last slide
      }, TRANSITION_MS + 30);
      return () => clearTimeout(t);
    }
    // Arrived at clone-of-first (after real slides)
    if (idx === N - 1) {
      const t = setTimeout(() => {
        setNoTransition(true);
        setIdx(1); // jump to real first slide
      }, TRANSITION_MS + 30);
      return () => clearTimeout(t);
    }
  }, [idx]);

  // Re-enable transition on the next animation frame after a silent snap
  useEffect(() => {
    if (!noTransition) return;
    const raf = requestAnimationFrame(() => setNoTransition(false));
    return () => cancelAnimationFrame(raf);
  }, [noTransition]);

  // Touch / swipe support
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      if (delta > 0) { advance(); resetTimer(); }
      else            { retreat(); resetTimer(); }
    }
  };

  const goTo = (slideIndex: number) => {
    setIdx(slideIndex + 1); // +1 because idx=1 is the real first slide
    resetTimer();
  };

  // Track translation:
  //   track width  = N * 100% of section
  //   each slide   = (100/N)% of track = 100% of section
  //   translateX   = -(idx/N)*100% of track = -(idx * section_width)
  const translateX = `${-(idx / N) * 100}%`;

  return (
    <section
      className="relative w-full h-[460px] sm:h-[540px] lg:h-[620px] overflow-hidden"
      aria-roledescription="carousel"
      aria-label="BrewKraft events"
    >
      {/* ── Horizontal slide track ──────────────────────────────────────── */}
      <div
        className="absolute top-0 left-0 bottom-0 flex"
        style={{
          width: `${N * 100}%`,
          transform: `translateX(${translateX})`,
          transition: noTransition
            ? "none"
            : `transform ${TRANSITION_MS}ms cubic-bezier(0.76, 0, 0.24, 1)`,
          willChange: "transform",
        }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {TRACK.map((slide, i) => {
          const isActive = i === idx;
          return (
            <div
              key={i}
              className="relative h-full flex-shrink-0"
              style={{ width: `${100 / N}%` }}
              aria-hidden={!isActive}
              aria-roledescription="slide"
            >
              {/* Background image */}
              <Image
                src={slide.image}
                alt=""
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority={i <= 1}
                draggable={false}
              />

              {/* Gradient overlays — part of each slide unit */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent sm:hidden" />

              {/* Slide content — travels with the image as one unit */}
              <div className="absolute inset-0 z-10 flex items-center">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-lg">

                    {/* Eyebrow */}
                    <p className="inline-flex items-center gap-2 text-[#f4e19f] text-xs font-semibold uppercase tracking-widest mb-5">
                      <span className="w-8 h-px bg-[#f4e19f]" />
                      {slide.eyebrow}
                    </p>

                    {/* Heading */}
                    <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4">
                      {slide.title}
                      <br />
                      <span className="text-[#f4e19f]">{slide.subtitle}</span>
                    </h2>

                    {/* Description */}
                    <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-5">
                      {slide.description}
                    </p>

                    {/* Date / time pill */}
                    <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium mb-8">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f4e19f] flex-shrink-0" />
                      {slide.datetime}
                    </div>

                    {/* CTA */}
                    <div>
                      <Link
                        href={slide.href}
                        tabIndex={isActive ? 0 : -1}
                        className="inline-flex items-center gap-2 bg-[#f4e19f] hover:bg-[#c9ad68] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base"
                      >
                        {slide.cta} →
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Slide indicator dots — outside the track, always on top ─────── */}
      <div
        className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2 flex items-center gap-2"
        role="tablist"
        aria-label="Slides"
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === dotActive}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === dotActive
                ? "bg-[#f4e19f] w-6 h-2"
                : "bg-white/40 hover:bg-white/60 w-2 h-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
