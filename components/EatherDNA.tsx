import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

const brandWords = [
  { num: "01", word: "Technical.", desc: "Engineered protection and clean construction." },
  { num: "02", word: "Lightweight.", desc: "Reduced weight with refined durability." },
  { num: "03", word: "Movement.", desc: "Built for natural comfort and active mobility." },
  { num: "04", word: "Longevity.", desc: "Timeless design for years of wear." },
];

export default function EatherDNA() {
  return (
    <section style={{ background: "#f4f1ea" }} className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <p className="text-[9px] font-medium tracking-[0.52em] uppercase text-stone-400 mb-10 lg:mb-12">
          Brand System
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left — logo + description */}
          <div>
            <BrandLogo size="medium" variant="dark" className="mb-7" />
            <div className="w-8 h-px bg-stone-300 mb-5" />
            <p className="text-sm text-stone-600 font-light leading-relaxed max-w-xs">
              Aether45 creates premium outdoor apparel for people who continue
              to move, explore, and perform after 45.
            </p>
            <Link
              href="/brand"
              className="inline-flex items-center gap-2 mt-6 text-[8px] font-medium tracking-[0.32em] uppercase text-stone-400 hover:text-stone-800 transition-colors"
            >
              View Brand System
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          {/* Right — 4 brand words */}
          <div className="divide-y divide-stone-200">
            {brandWords.map((item) => (
              <div key={item.num} className="py-5 flex items-start gap-5">
                <span className="text-[8px] font-medium tracking-[0.35em] text-stone-400 pt-1 shrink-0 w-6">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-lg font-light text-stone-900 mb-1 tracking-tight">
                    {item.word}
                  </h3>
                  <p className="text-xs text-stone-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
