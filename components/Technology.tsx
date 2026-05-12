import Image from "next/image";

const techs = [
  {
    num: "01",
    title: "Waterproof Breathable Protection",
    body: "Built to block rain and wind while allowing heat and moisture to escape during sustained high-output activity.",
  },
  {
    num: "02",
    title: "Mobility for 45+ Movement",
    body: "Patterned for comfort across shoulders, waist, knees, and natural movement zones — developed for mature active bodies.",
  },
  {
    num: "03",
    title: "Lightweight Durability",
    body: "Clean materials and construction designed for long-term outdoor use, season after season, summit after summit.",
  },
];

export default function Technology() {
  return (
    <section className="bg-stone-950 py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <div>
            <p className="text-[10px] font-medium tracking-[0.42em] uppercase text-stone-600 mb-4">
              Technology
            </p>
            <h2 className="text-2xl lg:text-4xl font-light text-stone-100 leading-snug tracking-tight mb-12 lg:mb-16">
              Engineered for protection, comfort, and movement.
            </h2>

            <div className="space-y-10">
              {techs.map((tech) => (
                <div key={tech.num} className="flex gap-6">
                  <span className="text-[10px] font-medium tracking-[0.3em] text-stone-700 pt-0.5 shrink-0">
                    {tech.num}
                  </span>
                  <div>
                    <h3 className="text-sm font-medium text-stone-200 mb-2 leading-snug">
                      {tech.title}
                    </h3>
                    <div className="w-7 h-px bg-stone-800 mb-3" />
                    <p className="text-sm text-stone-500 font-light leading-relaxed">{tech.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: fabric image */}
          <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
            <Image
              src="/images/eather45/fabric-waterproof-closeup.png"
              alt="Waterproof fabric technology close-up"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Subtle vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
