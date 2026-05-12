const pillars = [
  {
    label: "Protection",
    description: "Weather-ready construction for changing outdoor conditions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    label: "Comfort",
    description: "Fit, mobility, and comfort refined for mature active bodies.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    label: "Longevity",
    description: "Durable materials and timeless design built for years of movement.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
];

export default function BrandPositioning() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "#f4f1ea" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-xl mb-20 lg:mb-28">
          <h2 className="text-3xl lg:text-4xl font-light text-stone-900 mb-5 leading-tight tracking-tight">
            Built for the second summit.
          </h2>
          <p className="text-sm text-stone-500 font-light leading-relaxed">
            For people who continue to move, explore, train, travel, and live actively after 45.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 lg:gap-20">
          {pillars.map((p) => (
            <div key={p.label}>
              <div className="text-stone-400 mb-5">{p.icon}</div>
              <h3 className="text-[10px] font-semibold tracking-[0.38em] uppercase text-stone-800 mb-3">
                {p.label}
              </h3>
              <div className="w-7 h-px bg-stone-300 mb-4" />
              <p className="text-sm text-stone-500 font-light leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
