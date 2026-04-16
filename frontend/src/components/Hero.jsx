function Hero() {
  return (
    <div className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden bg-[#111]">
      

      {/* 🔥 Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 px-6">
        <p className="text-[10px] tracking-[0.25em] uppercase text-[#C9A84C] mb-3">
          Maison Elara — Est. 2024
        </p>

        <h1
          className="text-5xl md:text-6xl text-white mb-4"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Discover Your Signature Scent
        </h1>

        <p className="text-xs tracking-[0.15em] text-[#888] mb-6">
          Luxury fragrances crafted for timeless elegance
        </p>

        <button className="border border-[#C9A84C] text-[#C9A84C] px-6 py-2 text-sm hover:bg-[#C9A84C] hover:text-black transition">
          Explore Collection
        </button>
      </div>
    </div>
  );
}

export default Hero;