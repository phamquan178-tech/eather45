import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

const footerLinks = {
  MEN: [
    { label: "Shells", href: "/collections/shells" },
    { label: "Midlayers", href: "/collections/midlayers" },
    { label: "Pants", href: "/collections/pants" },
    { label: "Shorts", href: "/collections/shorts" },
  ],
  WOMEN: [
    { label: "Shells", href: "/women/shells" },
    { label: "Midlayers", href: "/women/midlayers" },
    { label: "Pants", href: "/women/pants" },
    { label: "Polo", href: "/women/polo" },
  ],
  TECHNOLOGY: [
    { label: "Technology", href: "/technology" },
    { label: "Layering Guide", href: "/journal/layering-guide" },
    { label: "Care Guide", href: "/journal/care-guide" },
  ],
  BRAND: [
    { label: "Brand System", href: "/brand" },
    { label: "About", href: "/about" },
    { label: "Journal", href: "/journal" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-stone-950">
      {/* Brand closing section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-14 border-b border-stone-800/40">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-14 lg:gap-16">
          {/* Left: logo + prominent tagline */}
          <div className="lg:max-w-sm">
            <BrandLogo size="medium" variant="light" className="mb-8" />
            <div className="w-8 h-px bg-stone-700 mb-7" />
            <p
              className="font-light text-white/90 uppercase leading-snug mb-5"
              style={{ fontSize: "clamp(1rem, 2vw, 1.45rem)", letterSpacing: "0.18em" }}
            >
              ENGINEERED FOR LONGEVITY IN MOTION.
            </p>
            <p className="text-[9px] tracking-[0.32em] text-stone-500 font-light uppercase">
              Technical. Lightweight. Movement.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-10 lg:shrink-0">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h4 className="text-[8px] font-semibold tracking-[0.4em] uppercase text-stone-500 mb-4">
                  {section}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[11px] text-stone-600 font-light hover:text-stone-300 transition-colors tracking-wide"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-[10px] text-stone-700 font-light tracking-wide">
          © 2026 Eather45. Built for the second summit.
        </p>
        <div className="flex gap-5">
          {["Privacy Policy", "Terms of Use"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/ /g, "-")}`}
              className="text-[10px] text-stone-700 font-light hover:text-stone-500 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
