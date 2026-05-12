import BrandLogo from "@/components/BrandLogo";

const brandWords = [
  {
    num: "01",
    word: "Technical.",
    desc: "Engineered construction for protection and performance.",
  },
  {
    num: "02",
    word: "Lightweight.",
    desc: "Reduced weight without losing durability or comfort.",
  },
  {
    num: "03",
    word: "Movement.",
    desc: "Patterned for active bodies, natural motion, and long days outside.",
  },
  {
    num: "04",
    word: "Longevity.",
    desc: "Timeless products designed for years of use.",
  },
];

export default function BrandIdentity() {
  return (
    <section style={{ background: "#f4f1ea" }} className="py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <p className="text-[9px] font-medium tracking-[0.5em] uppercase text-stone-400 mb-16 lg:mb-20">
          Brand System
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — logo + description */}
          <div>
            <BrandLogo size="large" variant="dark" className="mb-10" />

            <div className="w-10 h-px bg-stone-300 mb-8" />

            <p className="text-[9px] font-medium tracking-[0.4em] uppercase text-stone-400 mb-4">
              The Aether45 Identity
            </p>
            <h2 className="text-2xl lg:text-3xl font-light text-stone-900 mb-5 leading-tight tracking-tight">
              A technical outdoor identity inspired by nature, aerodynamics, and longevity in motion.
            </h2>
            <p className="text-sm text-stone-500 font-light leading-relaxed max-w-sm">
              Aether45 combines technical protection, lightweight comfort, and refined movement for
              people who continue to explore after 45.
            </p>
          </div>

          {/* Right — 4 brand words */}
          <div className="space-y-0 divide-y divide-stone-200">
            {brandWords.map((item) => (
              <div key={item.num} className="py-8 flex items-start gap-6">
                <span className="text-[9px] font-medium tracking-[0.35em] text-stone-400 pt-1 shrink-0 w-8">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-light text-stone-900 mb-1.5 tracking-tight">
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
