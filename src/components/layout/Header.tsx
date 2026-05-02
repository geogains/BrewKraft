"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/visit", label: "Visit Us" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/blendfullstop/",
    src: "/images/Instagram5.png",
    alt: "Follow us on Instagram",
  },
  {
    href: "https://www.tiktok.com/",
    src: "/images/TikTok6.png",
    alt: "Follow us on TikTok",
  },
  {
    href: "https://www.facebook.com/profile.php?id=61580861931043",
    src: "/images/Facebook6.png",
    alt: "Follow us on Facebook",
  },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMenuOpen(false), 0);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* Desktop header — unchanged */}
        <div className="hidden md:block bg-[#3d1700] shadow-md">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
            <Link href="/">
              <Image
                src="/images/blendlogo1.png"
                alt="Blend logo"
                height={40}
                width={160}
                className="h-10 w-auto object-contain"
              />
            </Link>

            <nav className="flex items-center gap-8">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                      active ? "text-[#fff7d6]" : "text-[#fff7d6]/75 hover:text-[#fff7d6]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              {/* Social icons */}
              <div className="flex items-center gap-3 pl-6 border-l border-white/20">
                {socialLinks.map((sl) => (
                  <a key={sl.href} href={sl.href} target="_blank" rel="noopener noreferrer" aria-label={sl.alt}>
                    <Image src={sl.src} alt={sl.alt} height={40} width={40} className="h-10 w-auto object-contain rounded-md hover:scale-105 transition-transform duration-200" />
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile header — always visible */}
        <div className="md:hidden bg-[#3d1700] shadow-md">
          <div className="flex h-16 items-center justify-between px-4">
            <Link href="/">
              <Image
                src="/images/blendlogo1.png"
                alt="Blend logo"
                height={32}
                width={128}
                className="h-8 w-auto object-contain"
              />
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#e2ca8f]"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu panel — always mounted, slides in from the right */}
      <div
        className={`fixed inset-0 top-16 z-40 bg-[#F7F2E9] md:hidden flex flex-col transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col gap-3 p-6">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`py-4 text-3xl font-bold transition-colors duration-200 ${
                  active
                    ? "border-l-4 border-[#d1b15e] pl-3 pr-4 text-[#d1b15e]"
                    : "rounded-2xl px-4 text-[#1C1C1C] hover:bg-[#fffbee] hover:text-[#e2ca8f]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Social icons */}
          <div className="-mx-6 px-6 py-6 bg-[#3d1700]">
            <p className="text-center text-xs uppercase tracking-wide text-[#e2ca8c] mb-4">Follow Us</p>
            <div className="flex items-center justify-center gap-5">
              {socialLinks.map((sl) => (
                <a key={sl.href} href={sl.href} target="_blank" rel="noopener noreferrer" aria-label={sl.alt}>
                  <Image src={sl.src} alt={sl.alt} height={40} width={40} className="h-10 w-auto object-contain rounded-md hover:scale-105 transition-transform duration-200" />
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Close button — flex-1 fills all remaining panel height */}
        <div className="flex-1 bg-[#f4e19f] px-6 py-6">
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="inline-flex w-full items-center justify-center rounded-2xl bg-[#1C1C1C] px-6 py-4 text-base font-semibold text-white transition hover:opacity-80"
          >
            Close Menu
          </button>
        </div>
      </div>
    </>
  );
}
