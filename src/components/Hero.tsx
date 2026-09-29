export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1773100699991-b7e6bf89a6a1?w=1800&h=1200&fit=crop&auto=format"
          alt="LINO TABLE 店内の様子"
          className="w-full h-full object-cover object-center"
        />
        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1614] via-[#1C1614]/50 to-transparent" />
        <div className="absolute inset-0 bg-[#1C1614]/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          {/* Label */}
          <p className="text-[#C17B5E] text-xs tracking-[0.4em] mb-6 font-body uppercase">
            Casual Italian · Tokyo
          </p>

          {/* Main catchphrase */}
          <h1 className="font-display-jp text-[#F5F0E8] leading-tight mb-6">
            <span className="block text-4xl sm:text-5xl md:text-6xl font-light tracking-wide">
              今日は、ちゃんと
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl font-light tracking-wide">
              いい夜にしよう。
            </span>
          </h1>

          {/* Sub copy */}
          <p className="text-[#F5F0E8]/60 text-sm sm:text-base font-body-jp leading-relaxed mb-10 max-w-md">
            薪窯料理と季節の食材。<br />
            日常の延長で、少し特別な時間を。
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#reservation"
              className="inline-flex items-center gap-3 bg-[#8B2D2D] hover:bg-[#A33A3A] text-[#F5F0E8] text-sm tracking-[0.15em] px-8 py-4 transition-colors duration-300 group"
            >
              <span>WEB予約する</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-3 border border-[#F5F0E8]/40 hover:border-[#F5F0E8] text-[#F5F0E8]/80 hover:text-[#F5F0E8] text-sm tracking-[0.15em] px-8 py-4 transition-all duration-300"
            >
              メニューを見る
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-6 hidden md:flex flex-col items-center gap-2">
          <span className="text-[#F5F0E8]/40 text-[10px] tracking-[0.3em] rotate-90 origin-center">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#F5F0E8]/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
