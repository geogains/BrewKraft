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

const deliveryPartners = [
  {
    href: "https://deliveroo.co.uk/menu/birmingham/walsall-city-centre/brewkraft-works-lounge-70-lower-hall-lane?utm_campaign=organic&utm_medium=referrer&utm_source=menu_share",
    src: "/images/deliveroo1.png",
    alt: "Order on Deliveroo",
  },
  {
    href: "https://www.just-eat.co.uk/restaurants-brisk-coffee-co-walsall/menu?serviceType=delivery&utm_source=google&utm_medium=organic&utm_campaign=foodorder",
    src: "/images/just-eat1.png",
    alt: "Order on Just Eat",
  },
  {
    href: "https://ubereats.com/gb/feed?srsltid=AfmBOorJ__9OXi3MWW4Esdw7qg_mdnzR0qaE6AyZ8ZiQXvF3R5ZWbrMa&so=https%3A%2F%2Fwww.ubereats.com%2Fgb%3Fsrsltid%3DAfmBOorJ__9OXi3MWW4Esdw7qg_mdnzR0qaE6AyZ8ZiQXvF3R5ZWbrMa&lat=52.5866367&lng=-1.984534&referrer=https%3A%2F%2Fwww.google.com%2F",
    src: "/images/uber-eats1.png",
    alt: "Order on Uber Eats",
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
                src="/images/brewkraftlogo.png"
                alt="BrewKraft logo"
                height={56}
                width={224}
                className="h-14 w-auto object-contain"
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
              {/* Delivery partners */}
              <div className="flex items-center gap-3 pl-6 border-l border-white/20">
                {deliveryPartners.map((dp) => (
                  <a key={dp.src} href={dp.href} aria-label={dp.alt} target="_blank" rel="noopener noreferrer">
                    <Image src={dp.src} alt={dp.alt} width={72} height={48} sizes="72px" className="h-12 w-auto object-contain rounded-md hover:scale-105 transition-transform duration-200" />
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
                src="/images/brewkraftlogo.png"
                alt="BrewKraft logo"
                height={44}
                width={176}
                className="h-11 w-auto object-contain"
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

          {/* Delivery partners */}
          <div className="-mx-6 px-6 py-6 bg-[#3d1700]">
            <p className="text-center text-xs uppercase tracking-wide text-[#e2ca8c] mb-4">Delivery Partners</p>
            <div className="flex items-center justify-center gap-5">
              {deliveryPartners.map((dp) => (
                <a key={dp.src} href={dp.href} aria-label={dp.alt} target="_blank" rel="noopener noreferrer">
                  <Image src={dp.src} alt={dp.alt} width={84} height={56} sizes="84px" className="h-14 w-auto object-contain rounded-md hover:scale-105 transition-transform duration-200" />
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
