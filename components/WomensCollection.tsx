import Image from "next/image";
import Link from "next/link";

const womenProducts = [
  {
    name: "Women's Stormline LT Jacket",
    category: "Waterproof Shell Jacket",
    price: "$320",
    image: "/images/eather45/women-stormline-jacket.png",
    tags: ["WATERPROOF", "BREATHABLE"],
    href: "/products/womens-stormline-lt-jacket",
  },
  {
    name: "Women's Stormline LT Pant",
    category: "Waterproof Shell Pant",
    price: "$260",
    image: "/images/eather45/women-stormline-pant.png",
    tags: ["WATERPROOF", "STRETCH"],
    href: "/products/womens-stormline-lt-pant",
  },
  {
    name: "Women's Ascent LT Hoody",
    category: "Halfzip Midlayer Hoody",
    price: "$180",
    image: "/images/eather45/women-ascent-hoody.png",
    tags: ["LIGHTWEIGHT", "BREATHABLE"],
    href: "/products/womens-ascent-lt-hoody",
  },
  {
    name: "Women's Motion LT Jacket",
    category: "Full Zip Midlayer Jacket",
    price: "$190",
    image: "/images/eather45/women-motion-jacket.png",
    tags: ["LIGHTWEIGHT", "STRETCH"],
    href: "/products/womens-motion-lt-jacket",
  },
  {
    name: "Women's Core LT Vest",
    category: "Midlayer Vest",
    price: "$170",
    image: "/images/eather45/women-core-vest.png",
    tags: ["LIGHTWEIGHT", "QUICK DRY"],
    href: "/products/womens-core-lt-vest",
  },
  {
    name: "Women's Airflow Polo",
    category: "Technical Polo Shirt",
    price: "$95",
    image: "/images/eather45/women-airflow-polo.png",
    tags: ["QUICK DRY", "STRETCH"],
    href: "/products/womens-airflow-polo",
  },
];

export default function WomensCollection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="flex items-end justify-between mb-10 lg:mb-14">
          <div>
            <p className="text-[9px] font-medium tracking-[0.48em] uppercase text-stone-400 mb-2">
              Women's Collection
            </p>
            <h2 className="text-2xl lg:text-3xl font-light text-stone-900 tracking-tight">
              Women's Mountain System
            </h2>
            <p className="text-xs text-stone-500 font-light mt-2 max-w-md">
              Technical outdoor pieces with refined fit, comfort, and protection for active women 45+.
            </p>
          </div>
          <Link
            href="/women"
            className="hidden md:flex items-center gap-2 text-[9px] font-medium tracking-[0.28em] uppercase text-stone-500 hover:text-stone-900 transition-colors shrink-0"
          >
            SHOP ALL WOMEN
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {womenProducts.map((p) => (
            <div key={p.name} className="group">

              {/* Image — clean, no overlay text */}
              <div
                className="relative overflow-hidden mb-5"
                style={{ aspectRatio: "4/5", background: "#ece9e4" }}
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Subtle hover tagline — slides up on hover only */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-stone-950/90 px-4 py-3">
                  <p className="text-[7px] font-light tracking-[0.32em] uppercase text-stone-400">
                    ENGINEERED FOR LONGEVITY IN MOTION.
                  </p>
                </div>
              </div>

              {/* Feature tags */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[7px] font-medium tracking-[0.22em] uppercase text-stone-500 border border-stone-300 px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Category */}
              <p className="text-[8px] font-medium tracking-[0.3em] uppercase text-stone-400 mb-1.5">
                {p.category}
              </p>

              {/* Product name */}
              <h3 className="text-xs font-light text-stone-900 mb-4 leading-snug uppercase tracking-[0.06em]">
                {p.name}
              </h3>

              {/* Price + CTA */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-stone-900">{p.price}</span>
                <Link
                  href={p.href}
                  className="text-[8px] font-semibold tracking-[0.28em] uppercase text-stone-400 hover:text-stone-900 transition-colors"
                >
                  VIEW PRODUCT +
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
