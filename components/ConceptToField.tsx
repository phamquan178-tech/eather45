import Image from "next/image";

const points = [
  "Technical patterning",
  "Weather protection",
  "Long-term comfort",
];

export default function ConceptToField() {
  return (
    <section className="py-20 lg:py-28" style={{ background: "#f5f4f0" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: studio image */}
          <div className="relative overflow-hidden order-2 lg:order-1" style={{ aspectRatio: "4/3" }}>
            <Image
              src="/images/eather45/design-studio.png"
              alt="Eather45 design studio — from concept to field"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right: text */}
          <div className="order-1 lg:order-2">
            <p className="text-[10px] font-medium tracking-[0.42em] uppercase text-stone-400 mb-4">
              Our Process
            </p>
            <h2 className="text-2xl lg:text-4xl font-light text-stone-900 leading-tight tracking-tight mb-5">
              From concept to field.
            </h2>
            <div className="w-8 h-px bg-stone-300 mb-7" />
            <p className="text-sm text-stone-500 font-light leading-relaxed mb-8 max-w-md">
              Every Eather45 product starts with technical design, material selection, fit
              refinement, and field-ready construction.
            </p>

            {/* Key points */}
            <ul className="space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-4">
                  <span className="w-5 h-px bg-stone-400 shrink-0" />
                  <span className="text-sm text-stone-700 font-light tracking-wide">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
