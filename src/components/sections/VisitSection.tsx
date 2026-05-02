"use client";

import { useEffect, useRef } from "react";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import Link from "next/link";

export function VisitSection() {
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
    <section ref={sectionRef} className="bg-[#EDE8DC] py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="reveal inline-flex items-center gap-2 text-[#f4e19f] text-xs font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-[#f4e19f]" />
            Come Say Hello
            <span className="w-8 h-px bg-[#f4e19f]" />
          </div>
          <h2 className="reveal font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1C1C] leading-tight">
            Find us in the heart of Penkridge.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Info cards */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Address */}
            <div className="reveal bg-white rounded-3xl p-7 border border-[#E4DDD1]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#f4e19f]/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#f4e19f]" />
                </div>
                <h3 className="font-semibold text-[#1C1C1C]">Location</h3>
              </div>
              <address className="not-italic text-[#5A5A5A] text-sm leading-relaxed">
                {siteConfig.address.line2}<br />
                {siteConfig.address.line1}<br />
                {siteConfig.address.city} {siteConfig.address.postcode}
              </address>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 text-[#f4e19f] text-sm font-medium hover:text-[#d4c06d] transition-colors"
              >
                Open in Google Maps →
              </a>
            </div>

            {/* Hours */}
            <div className="reveal bg-white rounded-3xl p-7 border border-[#E4DDD1]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#f4e19f]/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#f4e19f]" />
                </div>
                <h3 className="font-semibold text-[#1C1C1C]">Opening Hours</h3>
              </div>
              <ul className="space-y-2">
                {siteConfig.hours.map((h) => (
                  <li key={h.day} className="flex justify-between items-center text-sm">
                    <span className="text-[#888]">{h.day}</span>
                    <span className="text-[#1C1C1C] font-medium">{h.open} – {h.close}</span>
                  </li>
                ))}
              </ul>
              {/* [PLACEHOLDER] Confirm actual hours with client */}
              <p className="text-[#888] text-xs mt-4">Hours may vary on bank holidays.</p>
            </div>

            {/* Contact */}
            <div className="reveal bg-white rounded-3xl p-7 border border-[#E4DDD1]">
              <h3 className="font-semibold text-[#1C1C1C] mb-4">Get in Touch</h3>
              <div className="flex flex-col gap-3">
                <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-3 text-sm text-[#5A5A5A] hover:text-[#f4e19f] transition-colors">
                  <Phone className="w-4 h-4 text-[#f4e19f]" />
                  {/* [PLACEHOLDER] Replace with real phone */}
                  {siteConfig.contact.phone}
                </a>
                <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 text-sm text-[#5A5A5A] hover:text-[#f4e19f] transition-colors">
                  <Mail className="w-4 h-4 text-[#f4e19f]" />
                  {/* [PLACEHOLDER] Replace with real email */}
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="reveal lg:col-span-3">
            <div className="w-full h-96 lg:h-full min-h-80 rounded-3xl overflow-hidden border border-[#E4DDD1] relative bg-[#D4CFCA]">
              <iframe
                src="https://www.google.com/maps?q=4%20Crown%20Bridge%2C%20Penkridge%2C%20Stafford%20ST19%205AA&output=embed"
                title="Blend location map"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Transport note */}
        <div className="reveal mt-10 bg-white rounded-3xl p-7 border border-[#E4DDD1]">
          <p className="text-[#5A5A5A] text-sm leading-relaxed">
            <strong className="text-[#1C1C1C]">Easy to get to.</strong>{" "}
            We&apos;re located at 4 Crown Bridge in Penkridge town centre, minutes from the bus station and Penkridge train station.
          </p>
        </div>

        <div className="reveal text-center mt-12">
          <Link
            href="/visit"
            className="inline-flex items-center gap-2 bg-[#f4e19f] hover:bg-[#d4c06d] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            Plan Your Visit
          </Link>
        </div>
      </div>
    </section>
  );
}
