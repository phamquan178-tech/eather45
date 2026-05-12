const swatches = [
  { name: "Graphite Black", hex: "#111111", use: "Typography" },
  { name: "Charcoal", hex: "#1E2220", use: "Shell" },
  { name: "Storm Grey", hex: "#3E4444", use: "Overlay" },
  { name: "Mountain Grey", hex: "#6F736E", use: "Midlayer" },
  { name: "Muted Olive", hex: "#4E5546", use: "Midlayer" },
  { name: "Soft Sage", hex: "#AEB8AA", use: "Accent" },
  { name: "Dusty Mauve", hex: "#A98B8F", use: "Women's accent" },
  { name: "Stone", hex: "#D8D2C5", use: "Border" },
  { name: "Off White", hex: "#F4F1EA", use: "Background" },
];

function isLight(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 128;
}

export default function ColorPalette() {
  return (
    <section style={{ background: "#f4f1ea" }} className="py-20 lg:py-28 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-12 lg:mb-16">
          <p className="text-[9px] font-medium tracking-[0.5em] uppercase text-stone-400 mb-4">
            Color System
          </p>
          <h2 className="text-2xl lg:text-3xl font-light text-stone-900 tracking-tight mb-3">
            Color system
          </h2>
          <p className="text-sm text-stone-500 font-light max-w-lg">
            Muted outdoor tones inspired by rock, weather, alpine light, and technical fabric.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3">
          {swatches.map((s) => {
            const light = isLight(s.hex);
            return (
              <div key={s.name} className="flex flex-col gap-2.5">
                <div
                  className="w-full border border-black/5"
                  style={{ backgroundColor: s.hex, aspectRatio: "1/1.4" }}
                />
                <div>
                  <p className="text-[10px] font-medium text-stone-800 leading-snug">{s.name}</p>
                  <p className="text-[9px] text-stone-400 font-light tracking-wide mt-0.5">{s.hex}</p>
                  <p className="text-[8px] text-stone-400 font-light tracking-[0.2em] uppercase mt-1">
                    {s.use}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
