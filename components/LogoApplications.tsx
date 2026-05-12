import Image from "next/image";

const cards = [
  {
    id: "fabric",
    label: "Waterproof Texture",
    desc: "Dark graphite shell fabric with water-beading protection.",
    type: "image" as const,
  },
  {
    id: "embossed",
    label: "Embossed Mark",
    desc: "A quiet technical mark designed to sit naturally on performance materials.",
    type: "embossed" as const,
  },
  {
    id: "hangtag",
    label: "Technical Hangtag",
    desc: "Minimal product communication with a premium outdoor system.",
    type: "hangtag" as const,
  },
];

function FabricCard() {
  return (
    <div className="relative h-full overflow-hidden">
      <Image
        src="/images/eather45/fabric-waterproof-closeup.png"
        alt="Waterproof shell fabric texture"
        fill
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
}

function EmbossedCard() {
  return (
    <div className="relative h-full overflow-hidden bg-stone-800 flex items-center justify-center">
      <Image
        src="/images/eather45/fabric-waterproof-closeup.png"
        alt="Embossed mark on fabric"
        fill
        className="object-cover object-center opacity-50"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-stone-900/60" />
      {/* Tone-on-tone emboss simulation */}
      <div className="relative z-10 flex flex-col items-center gap-3 opacity-30">
        <Image src="/images/eather45/icon-light.png" alt="" width={64} height={32} />
        <span className="text-stone-300 text-[9px] tracking-[0.45em] uppercase font-light">
          EATHER 45™
        </span>
      </div>
    </div>
  );
}

function HandtagCard() {
  return (
    <div className="relative h-full bg-stone-950 flex flex-col items-center justify-center p-10">
      {/* String hole at top */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-px h-5 bg-stone-700" />
        <div className="w-4 h-4 rounded-full border border-stone-600 bg-stone-950" />
      </div>

      {/* Tag content */}
      <div className="flex flex-col items-center gap-5 mt-8">
        <Image src="/images/eather45/icon-light.png" alt="" width={56} height={28} />
        <div className="w-10 h-px bg-stone-700" />
        <div className="text-center space-y-1.5">
          <p className="text-stone-200 text-[11px] tracking-[0.48em] uppercase font-light">
            EATHER 45™
          </p>
          <p className="text-stone-600 text-[7.5px] tracking-[0.28em] uppercase text-center leading-relaxed">
            ENGINEERED FOR
            <br />
            LONGEVITY IN MOTION.
          </p>
        </div>
        <div className="w-10 h-px bg-stone-800" />
        <p className="text-stone-700 text-[7px] tracking-[0.25em] uppercase">PREMIUM OUTDOOR</p>
      </div>
    </div>
  );
}

export default function LogoApplications() {
  return (
    <section className="bg-stone-950 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-12 lg:mb-16">
          <p className="text-[9px] font-medium tracking-[0.5em] uppercase text-stone-600 mb-4">
            Material Identity
          </p>
          <h2 className="text-2xl lg:text-3xl font-light text-stone-200 tracking-tight mb-3">
            Applied to product. Built into the details.
          </h2>
          <p className="text-sm text-stone-500 font-light max-w-lg">
            The Aether45 identity lives through fabric, trims, labels, and technical construction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {cards.map((card) => (
            <div key={card.id} className="flex flex-col">
              {/* Image area */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                {card.type === "image" && <FabricCard />}
                {card.type === "embossed" && <EmbossedCard />}
                {card.type === "hangtag" && <HandtagCard />}
              </div>

              {/* Caption */}
              <div className="pt-5 pb-2">
                <p className="text-[9px] font-medium tracking-[0.38em] uppercase text-stone-500 mb-1.5">
                  {card.label}
                </p>
                <p className="text-xs text-stone-600 font-light leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
