import type { Metadata } from "next";
import { MapPin, Clock, Phone, Mail, Train, Bus } from "lucide-react";
import { siteConfig } from "@/data/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Visit Us",
  description:
    "Find Cafe 23 in the Saddlers Shopping Centre, Walsall. Opening hours, directions, and how to get in touch. Your next great coffee is waiting.",
};

const faqs = [
  {
    q: "Do you have Wi-Fi?",
    a: "Yes — we have free Wi-Fi throughout the café. Cafe 23 is a favourite spot for working and studying.",
  },
  {
    q: "Is Cafe 23 family-friendly?",
    a: "Absolutely. We welcome families and children. The space is relaxed and there&apos;s plenty of room.",
  },
  {
    q: "Do you cater for dietary requirements?",
    a: "We have a range of plant-based milk options and try to accommodate most dietary needs. Please speak to a team member when you arrive and we&apos;ll do our best.",
  },
  {
    q: "Can I bring my laptop and work here?",
    a: "Of course — that&apos;s exactly what this space is for. There are plug sockets available and the atmosphere is calm enough to focus.",
  },
  {
    q: "Do you take card payments?",
    a: "Yes, we accept card and contactless payments.",
    // [PLACEHOLDER] Confirm payment methods with client
  },
  {
    q: "Do you host events?",
    a: "We&apos;re community-focused and occasionally host events. Follow us on social media for the latest updates.",
  },
];

export default function VisitPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#608552] pt-32 sm:pt-40 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, #8FAB82 0%, transparent 60%),
                              radial-gradient(circle at 70% 30%, #4A6B3E 0%, transparent 50%)`,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none z-0 bg-[url('/images/bg.png')] bg-center bg-[length:100%_auto] bg-repeat-y opacity-[0.08]"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-white/60 text-xs font-semibold uppercase tracking-widest mb-6">
            <span className="w-8 h-px bg-white/40" />
            Come Find Us
            <span className="w-8 h-px bg-white/40" />
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            We&apos;re easy to find.
            <br />Harder to leave.
          </h1>
          <p className="text-white/75 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            We&apos;re right in the heart of Walsall — inside the Saddlers Shopping Centre on Park Street. Come in, sit down, and stay a while.
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
              <div className="bg-white rounded-3xl p-7 border border-[#E4DDD1]">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#608552]/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#608552]" />
                  </div>
                  <h2 className="font-semibold text-[#1C1C1C]">Address</h2>
                </div>
                <address className="not-italic text-[#5A5A5A] text-base leading-relaxed mb-4">
                  Cafe 23<br />
                  {siteConfig.address.line2}<br />
                  {siteConfig.address.line1}<br />
                  {siteConfig.address.city}<br />
                  {siteConfig.address.postcode}
                </address>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#608552] font-semibold text-sm hover:text-[#4A6B3E] transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>

              {/* Hours card */}
              <div className="bg-white rounded-3xl p-7 border border-[#E4DDD1]">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#608552]/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#608552]" />
                  </div>
                  <h2 className="font-semibold text-[#1C1C1C]">Opening Hours</h2>
                </div>
                <ul className="space-y-3">
                  {siteConfig.hours.map((h) => (
                    <li key={h.day} className="flex justify-between items-center text-sm border-b border-[#F7F2E9] pb-3 last:border-0 last:pb-0">
                      <span className="text-[#888] font-medium">{h.day}</span>
                      <span className="text-[#1C1C1C] font-semibold">{h.open} – {h.close}</span>
                    </li>
                  ))}
                </ul>
                {/* [PLACEHOLDER] Confirm actual hours — especially bank holidays and seasonal variations */}
                <p className="text-[#888] text-xs mt-4 leading-relaxed">
                  Hours may vary on bank holidays. Check our social media for any changes.
                </p>
              </div>

              {/* Getting here */}
              <div className="bg-white rounded-3xl p-7 border border-[#E4DDD1]">
                <h2 className="font-semibold text-[#1C1C1C] mb-5">Getting Here</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#608552]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Train className="w-4 h-4 text-[#608552]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1C1C1C]">By Train</p>
                      <p className="text-sm text-[#5A5A5A] leading-relaxed">Walsall train station is a short walk away. Follow signs towards the town centre and Saddlers Shopping Centre.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#608552]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Bus className="w-4 h-4 text-[#608552]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1C1C1C]">By Bus</p>
                      <p className="text-sm text-[#5A5A5A] leading-relaxed">Walsall bus station is nearby. Multiple routes stop in the town centre, making us easy to reach from across the region.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact card */}
              <div className="bg-white rounded-3xl p-7 border border-[#E4DDD1]">
                <h2 className="font-semibold text-[#1C1C1C] mb-5">Contact Us</h2>
                <div className="space-y-4">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-center gap-3 text-sm text-[#5A5A5A] hover:text-[#608552] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#608552]" />
                    <span>{siteConfig.contact.phone}</span>
                    {/* [PLACEHOLDER] Replace with real phone number */}
                  </a>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-3 text-sm text-[#5A5A5A] hover:text-[#608552] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#608552]" />
                    <span>{siteConfig.contact.email}</span>
                    {/* [PLACEHOLDER] Replace with real email */}
                  </a>
                </div>
              </div>
            </div>

            {/* Right column: map + contact form */}
            <div className="lg:col-span-3 space-y-8">
              {/* Map */}
              <div className="w-full h-80 sm:h-96 rounded-3xl overflow-hidden border border-[#E4DDD1] relative bg-[#D4CFCA]">
                <iframe
                  src="https://www.google.com/maps?q=27%20Park%20Street%20Walsall%20WS1%201LY&output=embed"
                  title="Cafe 23 location map"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Enquiry form */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E4DDD1]">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1C1C1C] mb-2">
                  Send us a message
                </h2>
                <p className="text-[#5A5A5A] text-sm mb-8">
                  Have a question, a group booking enquiry, or just want to say hello? We&apos;d love to hear from you.
                </p>

                {/* [PLACEHOLDER] Connect this form to a backend / form service (e.g. Formspree, Resend, custom API) */}
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#1C1C1C] mb-2">
                        Your name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-xl border border-[#E4DDD1] bg-[#F7F2E9] text-[#1C1C1C] placeholder:text-[#B0A898] text-sm focus:outline-none focus:ring-2 focus:ring-[#608552]/30 focus:border-[#608552] transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#1C1C1C] mb-2">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="jane@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#E4DDD1] bg-[#F7F2E9] text-[#1C1C1C] placeholder:text-[#B0A898] text-sm focus:outline-none focus:ring-2 focus:ring-[#608552]/30 focus:border-[#608552] transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-[#1C1C1C] mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="e.g. Group booking, event enquiry..."
                      className="w-full px-4 py-3 rounded-xl border border-[#E4DDD1] bg-[#F7F2E9] text-[#1C1C1C] placeholder:text-[#B0A898] text-sm focus:outline-none focus:ring-2 focus:ring-[#608552]/30 focus:border-[#608552] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#1C1C1C] mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us how we can help..."
                      className="w-full px-4 py-3 rounded-xl border border-[#E4DDD1] bg-[#F7F2E9] text-[#1C1C1C] placeholder:text-[#B0A898] text-sm focus:outline-none focus:ring-2 focus:ring-[#608552]/30 focus:border-[#608552] transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#608552] hover:bg-[#4A6B3E] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative bg-[#EDE8DC] py-20 sm:py-28">
        <div
          className="absolute inset-0 pointer-events-none z-0 bg-[url('/images/bg.png')] bg-center bg-[length:100%_auto] bg-repeat-y opacity-[0.08]"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#608552] text-xs font-semibold uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-[#608552]" />
              Good to Know
              <span className="w-8 h-px bg-[#608552]" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1C1C1C] leading-tight">
              Frequently asked.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border border-[#E4DDD1] overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none">
                  <h3 className="font-semibold text-[#1C1C1C] text-base pr-4">{faq.q}</h3>
                  <span className="w-6 h-6 rounded-full border border-[#E4DDD1] flex items-center justify-center flex-shrink-0 group-open:bg-[#608552] group-open:border-[#608552] transition-colors text-[#888] group-open:text-white text-sm font-bold">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-0">
                  <p
                    className="text-[#5A5A5A] text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: faq.a }}
                  />
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#5A5A5A] text-sm mb-4">
              Still have a question? We&apos;re friendly — just come in and ask.
            </p>
            <Link
              href="/visit"
              className="inline-flex items-center gap-2 bg-[#608552] hover:bg-[#4A6B3E] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Get in touch →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
