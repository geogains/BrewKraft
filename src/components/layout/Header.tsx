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

const deliveryLinks = [
  {
    href: "https://www.just-eat.co.uk/restaurants-cafe-23-walsall/menu",
    src: "/images/just-eat1.png",
    alt: "Order on Just Eat",
  },
  {
    href: "https://www.ubereats.com/gb/store/cafe-23/yQwEUhqcWJ-_r4xQKYkH1w?diningMode=DELIVERY&surfaceName=",
    src: "/images/uber-eats1.png",
    alt: "Order on Uber Eats",
  },
  {
    href: "https://deliveroo.co.uk/menu/Birmingham/walsall-city-centre/cafe-23-27-park-street?day=today&geohash=gcqe4v4gmh5n&time=ASAP",
    src: "/images/deliveroo1.png",
    alt: "Order on Deliveroo",
  },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
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
        <div className="hidden md:block bg-[#608552] shadow-md">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
            <Link href="/">
              <Image
                src="/images/cafe23logo.png"
                alt="Cafe 23 logo"
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
                    className={`text-sm font-medium tracking-wide transition-colors ${
                      active ? "text-[#F7F2E9]" : "text-white/85 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              {/* Delivery platform icons */}
              <div className="flex items-center gap-3 pl-6 border-l border-white/20">
                {deliveryLinks.map((dl) => (
                  <a key={dl.href} href={dl.href} target="_blank" rel="noopener noreferrer" aria-label={dl.alt}>
                    <Image src={dl.src} alt={dl.alt} height={48} width={72} className="h-12 w-auto object-contain rounded-md hover:scale-105 transition-transform duration-200" />
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile header — always visible */}
        <div className="md:hidden bg-[#608552] shadow-md">
          <div className="flex h-16 items-center justify-between px-4">
            <Link href="/">
              <Image
                src="/images/cafe23logo.png"
                alt="Cafe 23 logo"
                height={32}
                width={128}
                className="h-8 w-auto object-contain"
              />
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu panel — always mounted, slides in from the right */}
      <div
        className={`fixed inset-0 top-16 z-40 bg-[#F7F2E9] md:hidden transition-transform duration-300 ease-in-out ${
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
                className={`py-4 text-3xl font-bold transition-colors ${
                  active
                    ? "border-l-4 border-[#608552] pl-3 pr-4 text-[#608552]"
                    : "rounded-2xl px-4 text-[#1C1C1C] hover:bg-[#EAE4D8] hover:text-[#608552]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Delivery platform icons */}
          <div className="mt-8 border-t border-[#DDD5C6] pt-6">
            <p className="text-center text-xs uppercase tracking-wide text-[#888] mb-4">Our Delivery Partners</p>
            <div className="flex items-center justify-center gap-5">
              {deliveryLinks.map((dl) => (
                <a key={dl.href} href={dl.href} target="_blank" rel="noopener noreferrer" aria-label={dl.alt}>
                  <Image src={dl.src} alt={dl.alt} height={48} width={72} className="h-12 w-auto object-contain rounded-md hover:scale-105 transition-transform duration-200" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-4 border-t border-[#DDD5C6] pt-6">
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-2xl bg-[#1C1C1C] px-6 py-4 text-base font-semibold text-white transition hover:opacity-80"
            >
              Close Menu
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
