"use client";

import { useEffect } from "react";
import Image from "next/image";
import { MapPin, Clock, Phone, Mail, Train, Bus } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function VisitPage() {
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
      {/* Hero */}
      <section className="relative bg-[#3d1700] pt-32 sm:pt-40 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, #f7e8b8 0%, transparent 60%),
                              radial-gradient(circle at 70% 30%, #c9ad68 0%, transparent 50%)`,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none z-0 bg-[url('/images/bg1.png')] bg-center bg-[length:100%_auto] bg-repeat-y opacity-[0.08]"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="reveal inline-flex items-center gap-2 text-white/60 text-xs font-semibold uppercase tracking-widest mb-6">
            <span className="w-8 h-px bg-white/40" />
            Come Find Us
            <span className="w-8 h-px bg-white/40" />
          </div>
          <h1 className="reveal font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-[#fff7d6] leading-tight mb-6">
            We&apos;re easy to find.
            <br />Harder to leave.
          </h1>
          <p className="reveal text-[#e2ca8c] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            We&apos;re right in the heart of Penkridge, inside the Saddlers Shopping Centre on Park Street. Come in, sit down, and stay a while.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="#F7F2E9" />
          </svg>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-[#F7F2E9] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Address card */}
              <div className="reveal bg-white rounded-3xl p-7 border border-[#E4DDD1]">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#f4e19f]/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#3d1700]" />
                  </div>
                  <h2 className="font-semibold text-[#1C1C1C]">Address</h2>
                </div>
                <address className="not-italic text-[#5A5A5A] text-base leading-relaxed mb-4">
                  Blend<br />
                  {siteConfig.address.line2}<br />
                  {siteConfig.address.line1}<br />
                  {siteConfig.address.city}<br />
                  {siteConfig.address.postcode}
                </address>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#f4e19f] font-semibold text-sm hover:text-[#c9ad68] transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>

              {/* Hours card */}
              <div className="reveal bg-white rounded-3xl p-7 border border-[#E4DDD1]">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#f4e19f]/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#3d1700]" />
                  </div>
                  <h2 className="font-semibold text-[#1C1C1C]">Opening Hours</h2>
                </div>
                <ul className="space-y-3">
                  {siteConfig.hours.map((h) => (
                    <li key={h.day} className="flex justify-between items-center text-sm border-b border-[#F7F2E9] pb-3 last:border-0 last:pb-0">
                      <span className="text-[#5A5A5A] font-medium">{h.day}</span>
                      <span className="text-[#1C1C1C] font-semibold">{h.open} – {h.close}</span>
                    </li>
                  ))}
                </ul>
                {/* [PLACEHOLDER] Confirm actual hours — especially bank holidays and seasonal variations */}
                <p className="text-[#5A5A5A] text-xs mt-4 leading-relaxed">
                  Hours may vary on bank holidays. Check our social media for any changes.
                </p>
              </div>

              {/* Getting here */}
              <div className="reveal bg-white rounded-3xl p-7 border border-[#E4DDD1]">
                <h2 className="font-semibold text-[#1C1C1C] mb-5">Getting Here</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#f4e19f]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Train className="w-4 h-4 text-[#3d1700]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1C1C1C]">By Train</p>
                      <p className="text-sm text-[#5A5A5A] leading-relaxed">Penkridge train station is a short walk away. Follow signs towards the town centre and Saddlers Shopping Centre.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#f4e19f]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Bus className="w-4 h-4 text-[#3d1700]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1C1C1C]">By Bus</p>
                      <p className="text-sm text-[#5A5A5A] leading-relaxed">Penkridge bus station is nearby. Multiple routes stop in the town centre, making us easy to reach from across the region.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: map + contact */}
            <div className="lg:col-span-3 space-y-8">
              {/* Map */}
              <div className="reveal w-full h-80 sm:h-96 rounded-3xl overflow-hidden border border-[#E4DDD1] relative bg-[#E4DDD1]">
                <iframe
                  src="https://www.google.com/maps?q=27%20Park%20Street%20Walsall%20WS1%201LY&output=embed"
                  title="Blend location map"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Contact card */}
              <div className="reveal bg-white rounded-3xl p-8 sm:p-10 border border-[#E4DDD1] shadow-lg">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1C1C1C] mb-2">
                  Have a question?
                </h2>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-8">
                  Group booking enquiry, event question, or just want to say hello? We&apos;d love to hear from you.
                </p>

                {/* Contact rows */}
                <div className="space-y-3 mb-8">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-[#F7F2E9] hover:bg-[#E4DDD1] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#f4e19f]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#f4e19f] transition-colors duration-200">
                      <Phone className="w-5 h-5 text-[#3d1700] group-hover:text-white transition-colors duration-200" />
                    </div>
                    <span className="text-[#1C1C1C] font-medium text-sm">{siteConfig.contact.phone}</span>
                  </a>
                  <a
                    href="mailto:hello@blendpenkridge.co.uk?subject=Enquiry%20from%20Blend%20website"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-[#F7F2E9] hover:bg-[#E4DDD1] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#f4e19f]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#f4e19f] transition-colors duration-200">
                      <Mail className="w-5 h-5 text-[#3d1700] group-hover:text-white transition-colors duration-200" />
                    </div>
                    <span className="text-[#1C1C1C] font-medium text-sm">{siteConfig.contact.email}</span>
                  </a>
                </div>

                {/* Social links */}
                <div className="border-t border-[#E4DDD1] pt-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#5A5A5A] text-center mb-5">Follow Us</p>
                  <div className="flex items-center justify-center gap-5">
                    <a href="https://www.instagram.com/blendfullstop/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-200">
                      <Image
                        src="/images/Instagram2.png"
                        alt="Instagram"
                        width={56}
                        height={56}
                        className="h-14 w-auto object-contain rounded-xl"
                      />
                    </a>
                    <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-200">
                      <Image
                        src="/images/TikTok2.png"
                        alt="TikTok"
                        width={56}
                        height={56}
                        className="h-14 w-auto object-contain rounded-xl"
                      />
                    </a>
                    <a href="https://www.facebook.com/p/BLEND-Penkridge-61580861931043/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-200">
                      <Image
                        src="/images/facebook.png"
                        alt="Facebook"
                        width={56}
                        height={56}
                        className="h-14 w-auto object-contain rounded-xl"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
