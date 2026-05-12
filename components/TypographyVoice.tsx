const typeExamples = [
  {
    label: "Headline",
    note: "Uppercase · Wide spacing · Clean sans-serif",
    sample: "AETHER45",
    style: "text-3xl lg:text-4xl font-light tracking-[0.15em]",
  },
  {
    label: "Tagline",
    note: "Uppercase · Precise · Technical",
    sample: "ENGINEERED FOR LONGEVITY IN MOTION.",
    style: "text-[11px] font-light tracking-[0.38em]",
  },
  {
    label: "Keywords",
    note: "Calm · Spaced · Purposeful",
    sample: "Technical. Lightweight. Movement.",
    style: "text-sm font-light tracking-[0.12em]",
  },
];

const voiceWords = ["Calm", "Precise", "Technical", "Mature", "Confident", "Never loud"];

export default function TypographyVoice() {
  return (
    <section className="py-20 lg:py-28 bg-stone-100 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-14 lg:mb-18">
          <p className="text-[9px] font-medium tracking-[0.5em] uppercase text-stone-400 mb-4">
            Identity System
          </p>
          <h2 className="text-2xl lg:text-3xl font-light text-stone-900 tracking-tight">
            Typography & Voice
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Typography examples */}
          <div>
            <p className="text-[9px] font-semibold tracking-[0.38em] uppercase text-stone-500 mb-8">
              Typography
            </p>
            <div className="space-y-0 divide-y divide-stone-200">
              {typeExamples.map((ex) => (
                <div key={ex.label} className="py-7">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-[9px] font-medium tracking-[0.3em] uppercase text-stone-400">
                      {ex.label}
                    </span>
                    <div className="flex-1 h-px bg-stone-200" />
                    <span className="text-[8px] text-stone-400 font-light">{ex.note}</span>
                  </div>
                  <p className={`text-stone-900 ${ex.style}`}>{ex.sample}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Brand voice */}
          <div>
            <p className="text-[9px] font-semibold tracking-[0.38em] uppercase text-stone-500 mb-8">
              Brand Voice
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-10">
              {voiceWords.map((word) => (
                <div key={word} className="flex items-center gap-3">
                  <div className="w-4 h-px bg-stone-400 shrink-0" />
                  <span className="text-sm font-light text-stone-700 tracking-wide">{word}</span>
                </div>
              ))}
            </div>

            <div className="h-px bg-stone-200 mb-8" />

            <p className="text-sm text-stone-500 font-light leading-relaxed">
              Aether45 speaks with quiet confidence — clear, technical, and refined. The brand
              avoids hype and focuses on protection, comfort, movement, and long-term use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
