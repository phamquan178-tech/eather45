import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrandLogo from "@/components/BrandLogo";

/* ─── Data ──────────────────────────────────────────────── */

const brandWords = [
  { num: "01", word: "Technical.", desc: "Engineered construction for protection and performance." },
  { num: "02", word: "Lightweight.", desc: "Reduced weight without losing durability or comfort." },
  { num: "03", word: "Movement.", desc: "Patterned for active bodies and natural motion." },
  { num: "04", word: "Longevity.", desc: "Timeless products designed for years of use." },
];

const colorSwatches = [
  { name: "Graphite Black", hex: "#111111", use: "Typography" },
  { name: "Charcoal", hex: "#1E2220", use: "Shell" },
  { name: "Storm Grey", hex: "#3E4444", use: "Overlay" },
  { name: "Mountain Grey", hex: "#6F736E", use: "Midlayer" },
  { name: "Muted Olive", hex: "#4E5546", use: "Midlayer" },
  { name: "Soft Sage", hex: "#AEB8AA", use: "Accent" },
  { name: "Dusty Mauve", hex: "#A98B8F", use: "Women's" },
  { name: "Stone", hex: "#D8D2C5", use: "Border" },
  { name: "Off White", hex: "#F4F1EA", use: "Background" },
];

const productPrinciples = [
  "Protection",
  "Comfort",
  "Mobility",
  "Longevity",
  "Refined technical style",
];

/* ─── Shared section wrapper ─────────────────────────────── */
function Section({
  children,
  bg = "white",
  className = "",
}: {
  children: React.ReactNode;
  bg?: string;
  className?: string;
}) {
  return (
    <section style={{ background: bg }} className={`py-20 lg:py-28 border-t border-stone-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">{children}</div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[9px] font-medium tracking-[0.5em] uppercase text-stone-400 mb-4">
      {children}
    </p>
  );
}

function SectionTitle({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2 className={`text-2xl lg:text-3xl font-light tracking-tight mb-8 ${light ? "text-stone-200" : "text-stone-900"}`}>
      {children}
    </h2>
  );
}

/* ─── Page ───────────────────────────────────────────────── */
export default function BrandPage() {
  return (
    <>
      <Header />

      <main>
        {/* ── Hero / Cover ── */}
        <section
          className="relative flex items-end overflow-hidden bg-stone-950"
          style={{ minHeight: "60vh" }}
        >
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/eather45/men-hiking-group.png"
              alt="Eather45 brand"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 pt-32 w-full">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div>
                <p className="text-[9px] font-medium tracking-[0.5em] uppercase text-stone-500 mb-6">
                  Brand Guidelines
                </p>
                <h1
                  className="font-light text-white leading-tight"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "0.08em" }}
                >
                  EATHER45
                </h1>
                <p className="text-[10px] font-light tracking-[0.38em] uppercase text-stone-500 mt-3">
                  BRAND SYSTEM — 2026
                </p>
              </div>
              <div className="flex gap-16 lg:gap-20">
                {["Technical", "Lightweight", "Movement"].map((w) => (
                  <div key={w} className="text-right">
                    <p className="text-xs font-light text-stone-500 tracking-wide">{w}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 1. Logo System ── */}
        <Section bg="#f4f1ea">
          <SectionLabel>01 — Logo System</SectionLabel>
          <SectionTitle>The Eather45 logo</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Primary — stacked */}
            <div className="border border-stone-200 p-10 flex flex-col items-center justify-center gap-4 bg-white" style={{ minHeight: "220px" }}>
              <BrandLogo size="large" variant="dark" />
              <p className="text-[8px] tracking-[0.35em] uppercase text-stone-400 mt-2">Primary — Full Logo</p>
            </div>

            {/* Horizontal */}
            <div className="border border-stone-200 p-10 flex flex-col items-center justify-center gap-4 bg-white" style={{ minHeight: "220px" }}>
              <BrandLogo size="medium" variant="dark" />
              <p className="text-[8px] tracking-[0.35em] uppercase text-stone-400 mt-2">Medium — On Light</p>
            </div>

            {/* Light variant */}
            <div className="border border-stone-200 p-10 flex flex-col items-center justify-center gap-4 bg-stone-950" style={{ minHeight: "220px" }}>
              <BrandLogo size="medium" variant="light" />
              <p className="text-[8px] tracking-[0.35em] uppercase text-stone-500 mt-2">Light — On Dark</p>
            </div>
          </div>
        </Section>

        {/* ── 2. Tagline ── */}
        <Section bg="white">
          <SectionLabel>02 — Tagline</SectionLabel>
          <p
            className="font-light text-stone-900 tracking-[0.2em] uppercase mb-6"
            style={{ fontSize: "clamp(1rem, 3vw, 2.2rem)" }}
          >
            ENGINEERED FOR LONGEVITY IN MOTION.
          </p>
          <div className="w-12 h-px bg-stone-300 mb-6" />
          <p className="text-sm text-stone-500 font-light leading-relaxed max-w-lg">
            The Eather45 tagline communicates technical intent, endurance, and the brand's focus on
            people who continue to move after 45. Use it consistently below the wordmark and in hero
            contexts.
          </p>
        </Section>

        {/* ── 3. Brand Words ── */}
        <Section bg="#f4f1ea">
          <SectionLabel>03 — Brand Words</SectionLabel>
          <SectionTitle>Four words. One direction.</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-stone-200">
            {brandWords.map((item) => (
              <div key={item.num} className="p-8 lg:p-10">
                <p className="text-[9px] tracking-[0.38em] text-stone-400 mb-3">{item.num}</p>
                <h3 className="text-3xl lg:text-4xl font-light text-stone-900 mb-2 tracking-tight">
                  {item.word}
                </h3>
                <p className="text-xs text-stone-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 4. Color Palette ── */}
        <Section bg="white">
          <SectionLabel>04 — Color Palette</SectionLabel>
          <SectionTitle>Muted outdoor tones.</SectionTitle>
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3">
            {colorSwatches.map((s) => (
              <div key={s.name} className="flex flex-col gap-2.5">
                <div className="w-full border border-black/5" style={{ backgroundColor: s.hex, aspectRatio: "1/1.3" }} />
                <div>
                  <p className="text-[9px] font-medium text-stone-800 leading-snug">{s.name}</p>
                  <p className="text-[8px] text-stone-400 font-light mt-0.5">{s.hex}</p>
                  <p className="text-[7px] text-stone-400 tracking-[0.2em] uppercase mt-1">{s.use}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 5. Typography ── */}
        <Section bg="#f4f1ea">
          <SectionLabel>05 — Typography</SectionLabel>
          <SectionTitle>Clean, precise, technical.</SectionTitle>
          <div className="space-y-0 divide-y divide-stone-200 max-w-2xl">
            {[
              { role: "Display", sample: "EATHER45", cls: "text-5xl lg:text-6xl font-light tracking-[0.14em]" },
              { role: "Tagline", sample: "ENGINEERED FOR LONGEVITY IN MOTION.", cls: "text-[11px] font-light tracking-[0.38em] uppercase" },
              { role: "Keywords", sample: "Technical. Lightweight. Movement.", cls: "text-base font-light tracking-[0.1em]" },
              { role: "Body", sample: "Designed for active people who seek protection and elevated technical style.", cls: "text-sm font-light leading-relaxed" },
              { role: "Label / UI", sample: "WATERPROOF — BREATHABLE — STRETCH", cls: "text-[9px] font-medium tracking-[0.35em] uppercase" },
            ].map((ex) => (
              <div key={ex.role} className="py-8">
                <p className="text-[8px] tracking-[0.38em] uppercase text-stone-400 mb-4">{ex.role}</p>
                <p className={`text-stone-900 ${ex.cls}`}>{ex.sample}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 6. Photography Style ── */}
        <section className="bg-stone-950 py-20 lg:py-28 border-t border-stone-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <SectionLabel>06 — Photography Style</SectionLabel>
            <p className="text-2xl lg:text-3xl font-light text-stone-200 tracking-tight mb-8">
              Cinematic, muted, purposeful.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
              {[
                { src: "/images/eather45/men-hiking-group.png", label: "Lifestyle" },
                { src: "/images/eather45/men-stormline-jacket.png", label: "Product" },
                { src: "/images/eather45/fabric-waterproof-closeup.png", label: "Material" },
                { src: "/images/eather45/design-studio.png", label: "Brand" },
              ].map((img) => (
                <div key={img.label} className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <Image src={img.src} alt={img.label} fill className="object-cover object-center" sizes="25vw" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-[8px] tracking-[0.35em] uppercase text-stone-300">{img.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-stone-500 font-light leading-relaxed max-w-lg">
              Cinematic alpine landscapes, mature active models, technical product clarity, muted
              natural color, and quiet confidence.
            </p>
          </div>
        </section>

        {/* ── 7. Product Principles ── */}
        <Section bg="white">
          <SectionLabel>07 — Product Principles</SectionLabel>
          <SectionTitle>Built on five commitments.</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 lg:gap-10">
            {productPrinciples.map((p, i) => (
              <div key={p} className="flex flex-col gap-3">
                <span className="text-[9px] tracking-[0.38em] uppercase text-stone-400">
                  0{i + 1}
                </span>
                <div className="w-6 h-px bg-stone-300" />
                <p className="text-sm font-light text-stone-800 tracking-wide">{p}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 8. Material Mood ── */}
        <Section bg="#f4f1ea">
          <SectionLabel>08 — Material Mood</SectionLabel>
          <SectionTitle>The identity in the fabric.</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <Image
                src="/images/eather45/fabric-waterproof-closeup.png"
                alt="Waterproof fabric"
                fill
                className="object-cover object-center"
                sizes="50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-[8px] tracking-[0.38em] uppercase text-stone-300">Waterproof Shell Fabric</p>
              </div>
            </div>
            <div className="relative overflow-hidden bg-stone-900 flex items-center justify-center" style={{ aspectRatio: "16/9" }}>
              {/* Hangtag mockup */}
              <div className="flex flex-col items-center gap-4">
                <Image
                  src="/images/eather45/icon-light.png"
                  alt=""
                  width={56}
                  height={28}
                  className="opacity-80"
                />
                <div className="w-8 h-px bg-stone-700" />
                <p className="text-stone-200 text-[10px] tracking-[0.45em] uppercase font-light">EATHER 45™</p>
                <p className="text-stone-600 text-[7px] tracking-[0.28em] uppercase text-center leading-relaxed">
                  ENGINEERED FOR LONGEVITY IN MOTION.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* ── Back to site ── */}
        <section className="bg-stone-950 py-16 border-t border-stone-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[9px] tracking-[0.45em] uppercase text-stone-600 mb-2">
                Eather45 Brand System — 2026
              </p>
              <p className="text-xs text-stone-500 font-light">
                For internal brand use. All assets subject to brand guidelines.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-[9px] font-medium tracking-[0.32em] uppercase text-stone-400 hover:text-white transition-colors border border-stone-800 hover:border-stone-600 px-6 py-3"
            >
              Back to Site
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
