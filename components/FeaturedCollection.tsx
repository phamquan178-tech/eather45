import Image from "next/image";
import Link from "next/link";

const menProducts = [
  {
    name: "Men's Stormline LT Jacket",
    category: "Waterproof Shell Jacket",
    price: "$320",
    image: "/images/eather45/men-stormline-jacket.png",
    tags: ["WATERPROOF", "BREATHABLE"],
    href: "/products/mens-stormline-lt-jacket",
  },
  {
    name: "Men's Stormline LT Pant",
    category: "Waterproof Shell Pant",
    price: "$260",
    image: "/images/eather45/men-stormline-pant.png",
    tags: ["WATERPROOF", "STRETCH"],
    href: "/products/mens-stormline-lt-pant",
  },
  {
    name: "Men's Ascent LT Hoody",
    category: "Halfzip Midlayer Hoody",
    price: "$180",
    image: "/images/eather45/men-ascent-hoody.png",
    tags: ["LIGHTWEIGHT", "BREATHABLE"],
    href: "/products/mens-ascent-lt-hoody",
  },
  {
    name: "Men's Motion LT Jacket",
    category: "Full Zip Midlayer Jacket",
    price: "$190",
    image: "/images/eather45/men-motion-jacket.png",
    tags: ["LIGHTWEIGHT", "STRETCH"],
    href: "/products/mens-motion-lt-jacket",
  },
  {
    name: "Men's Core LT Vest",
    category: "Midlayer Vest",
    price: "$170",
    image: "/images/eather45/men-core-vest.png",
    tags: ["LIGHTWEIGHT", "QUICK DRY"],
    href: "/products/mens-core-lt-vest",
  },
  {
    name: "Men's Airflow Polo",
    category: "Technical Polo Shirt",
    price: "$95",
    image: "/images/eather45/men-airflow-polo.png",
    tags: ["QUICK DRY", "STRETCH"],
    href: "/products/mens-airflow-polo",
  },
  {
    name: "Men's Terrain LT Pant",
    category: "Stretch Hiking Pant",
    price: "$150",
    image: "/images/eather45/men-terrain-pant.png",
    tags: ["STRETCH", "WATER REPELLENT"],
    href: "/products/mens-terrain-lt-pant",
  },
  {
    name: "Men's Trail LT Short",
    category: "Hiking Short",
    price: "$110",
    image: "/images/eather45/men-trail-short.png",
    tags: ["QUICK DRY", "LIGHTWEIGHT"],
    href: "/products/mens-trail-lt-short",
  },
];

export default function FeaturedCollection() {
  return (
    <section style={{ background: "#f4f1ea" }} className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="flex items-end justify-between mb-10 lg:mb-14">
          <div>
            <p className="text-[9px] font-medium tracking-[0.48em] uppercase text-stone-400 mb-2">
              Men's Collection
            </p>
            <h2 className="text-2xl lg:text-3xl font-light text-stone-900 tracking-tight">
              Spring Mountain System
            </h2>
            <p className="text-xs text-stone-500 font-light mt-2 max-w-md">
              A complete technical wardrobe for hiking, travel, and active outdoor life after 45.
            </p>
          </div>
          <Link
            href="/men"
            className="hidden md:flex items-center gap-2 text-[9px] font-medium tracking-[0.28em] uppercase text-stone-500 hover:text-stone-900 transition-colors shrink-0"
          >
            SHOP ALL MEN
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12">
          {menProducts.map((p) => (
            <div key={p.name} className="group">

              {/* Image — clean, no overlay text */}
              <div
                className="relative overflow-hidden mb-5"
                style={{ aspectRatio: "4/5", background: "#e8e4de" }}
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
