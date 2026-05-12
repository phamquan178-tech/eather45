import Image from "next/image";
import Link from "next/link";

export default function StorySection() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "62vh" }}>
      {/* Real lifestyle image */}
      <div className="absolute inset-0">
        <Image
          src="/images/eather45/men-hiking-group.png"
          alt="Aether45 — designed for movement, refined for life"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.48) 45%, rgba(0,0,0,0.2) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex items-center py-24 lg:py-32" style={{ minHeight: "62vh" }}>
        <div className="max-w-lg">
          <p className="text-[10px] font-medium tracking-[0.5em] uppercase text-stone-400 mb-8">
            Field Notes
          </p>
          <h2 className="text-3xl lg:text-5xl font-light text-white leading-tight tracking-tight mb-5">
            Designed for movement.{" "}
            <span className="font-extralight italic text-stone-300">Refined for life.</span>
          </h2>
          <p className="text-sm lg:text-base text-stone-400 font-light leading-relaxed mb-10 max-w-md">
            From mountain trails to daily travel, Aether45 blends technical performance with quiet
            confidence.
          </p>
          <Link
            href="/journal"
            className="inline-flex items-center gap-3 px-8 py-3.5 border border-stone-600 text-stone-300 text-[10px] font-medium tracking-[0.32em] uppercase hover:border-stone-300 hover:text-white transition-colors"
          >
            Read the Journal
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
