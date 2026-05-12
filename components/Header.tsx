"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

const navLinks = [
  { label: "MEN", href: "/men" },
  { label: "WOMEN", href: "/women" },
  { label: "SHELLS", href: "/collections/shells" },
  { label: "MIDLAYER", href: "/collections/midlayers" },
  { label: "PANTS", href: "/collections/pants" },
  { label: "TECHNOLOGY", href: "/technology" },
  { label: "BRAND", href: "/brand" },
  { label: "JOURNAL", href: "/journal" },
];

const rightLinks = [
  { label: "SEARCH", href: "/search" },
  { label: "ACCOUNT", href: "/account" },
  { label: "CART", href: "/cart" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-stone-950" : "bg-stone-950/20 backdrop-blur-sm"
      }`}
      style={{ height: "72px" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-full flex items-center justify-between">
        {/* Logo */}
        <BrandLogo size="small" variant="light" />

        {/* Desktop Nav — center */}
        <nav className="hidden xl:flex items-center gap-7">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[9px] font-medium tracking-[0.28em] uppercase text-white/65 hover:text-white transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right — text links */}
        <div className="hidden xl:flex items-center gap-6">
          {rightLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[9px] font-medium tracking-[0.28em] uppercase text-white/55 hover:text-white transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Menu"
          className="xl:hidden text-white hover:opacity-60 transition-opacity"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="xl:hidden bg-stone-950 border-t border-stone-800/30 px-6 py-2">
          {[...navLinks, ...rightLinks].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center justify-between py-3.5 text-[9px] font-medium tracking-[0.28em] uppercase text-stone-400 hover:text-white transition-colors border-b border-stone-800/30 last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
