import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Waterproof Shells",
    description: "Built for rain, wind, and changing mountain weather.",
    image: "/images/eather45/fabric-waterproof-closeup.png",
    href: "/collections/shells",
  },
  {
    title: "Lightweight Layers",
    description: "Breathable comfort for active movement and travel.",
    image: "/images/eather45/men-ascent-hoody.png",
    href: "/collections/midlayers",
  },
  {
    title: "Trail & Travel Pants",
    description: "Mobility-focused pants for hiking, trekking, and daily outdoor life.",
    image: "/images/eather45/men-terrain-pant.png",
    href: "/collections/pants",
  },
  {
    title: "Technical Design",
    description: "Engineered patterning, clean construction, and long-term durability.",
    image: "/images/eather45/design-studio.png",
    href: "/technology",
  },
];

export default function ShopByFunction() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-10 lg:mb-14">
          <div>
            <p className="text-[10px] font-medium tracking-[0.42em] uppercase text-stone-400 mb-2.5">
              Shop by Function
            </p>
            <h2 className="text-2xl lg:text-3xl font-light text-stone-900 tracking-tight">
              Gear for every condition.
            </h2>
          </div>
          <Link
            href="/collections"
            className="hidden md:flex items-center gap-2 text-[10px] font-medium tracking-[0.25em] uppercase text-stone-500 hover:text-stone-900 transition-colors"
          >
            All Collections
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group relative block overflow-hidden bg-stone-900"
              style={{ aspectRatio: "16/10" }}
            >
              {/* Real image */}
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-7">
                <h3 className="text-white font-light text-xl mb-1.5 tracking-tight">
                  {cat.title}
                </h3>
                <p className="text-stone-300 text-xs font-light leading-relaxed mb-5 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {cat.description}
                </p>
                <span className="inline-flex items-center gap-2 text-[10px] font-medium tracking-[0.3em] uppercase text-stone-300 group-hover:text-white transition-colors">
                  Explore
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
