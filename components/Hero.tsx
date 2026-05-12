import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{ height: "95vh", minHeight: "700px" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/eather45/hero-banner.png"
          alt="Aether45 — premium outdoor performance"
          fill
          className="object-cover object-center"
          priority
          quality={92}
        />
      </div>

      {/* Gradient overlay — strong left, fades right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.58) 35%, rgba(0,0,0,0.18) 68%, rgba(0,0,0,0.05) 100%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none"
        style={{ background: "linear-gradient(to top, #f4f1ea, transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="text-[9px] font-medium tracking-[0.55em] uppercase text-stone-300/70 mb-5">
            Premium Outdoor Performance
          </p>

          {/* Divider */}
          <div className="w-10 h-px bg-stone-500/60 mb-6" />

          {/* Main title */}
          <h1
            className="font-light text-white leading-[0.92] mb-6"
            style={{ fontSize: "clamp(3.8rem, 9.5vw, 9rem)", letterSpacing: "0.12em" }}
          >
            AETHER45
          </h1>

          {/* Subtitle */}
          <p className="text-sm lg:text-base font-light text-stone-200 mb-2 tracking-wide">
            Premium outdoor performance for men and women 45+
          </p>

          {/* Tagline */}
          <p className="text-[11px] font-light text-stone-400 tracking-[0.3em] uppercase mb-2">
            Engineered for longevity in motion.
          </p>

          {/* Divider */}
          <div className="w-10 h-px bg-stone-600/50 my-6" />

          {/* Keyword row */}
          <div className="flex items-center gap-5 mb-5">
            {["Technical.", "Lightweight.", "Movement."].map((kw) => (
              <span key={kw} className="text-[10px] font-medium tracking-[0.22em] text-stone-400/80 uppercase">
                {kw}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-xs text-stone-500/90 font-light leading-relaxed mb-10 max-w-sm">
            Designed for active people who seek protection, comfort, and elevated technical style.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/men"
              className="inline-block px-9 py-3.5 bg-white text-stone-950 text-[9px] font-semibold tracking-[0.38em] uppercase hover:bg-stone-100 transition-colors"
            >
              SHOP MEN
            </Link>
            <Link
              href="/women"
              className="inline-block px-9 py-3.5 border border-white/50 text-white text-[9px] font-semibold tracking-[0.38em] uppercase hover:bg-white/8 transition-colors"
            >
              SHOP WOMEN
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
