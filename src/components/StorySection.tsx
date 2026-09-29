export default function StorySection() {
  return (
    <section id="space" className="bg-[#EDE7DB]">
      {/* Top: full-width image with quote */}
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden bg-[#1C1614]">
        <img
          src="https://images.unsplash.com/photo-1766832255363-c9f060ade8b0?w=1800&h=900&fit=crop&auto=format"
          alt="LINO TABLEの店内"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1614]/80 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-10 md:p-16 max-w-4xl">
          <blockquote className="font-display-jp text-[#F5F0E8] text-2xl md:text-4xl font-light leading-relaxed">
            「特別な日じゃなくていい。<br className="hidden md:block" />
            でも、今日はちゃんといい夜にしよう。」
          </blockquote>
        </div>
      </div>

      {/* Three story blocks */}
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="mb-16">
          <p className="text-[#C17B5E] text-xs tracking-[0.4em] mb-3 font-body uppercase">Our Story</p>
          <h2 className="font-display text-[#2C2420] text-4xl md:text-5xl font-light italic">
            The Craft Behind
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left: large image */}
          <div className="space-y-8">
            <div className="relative overflow-hidden bg-[#2C2420] aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1606152196365-d1ce5ea838b5?w=700&h=900&fit=crop&auto=format"
                alt="薪窯の炎"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-[#C17B5E] text-[10px] tracking-[0.4em] mb-2 font-body">WOOD-FIRED OVEN</p>
              <h3 className="font-display-jp text-[#2C2420] text-xl font-light mb-3">
                薪窯が生み出す、唯一無二の香ばしさ
              </h3>
              <p className="text-[#6B5F58] text-sm leading-loose font-body-jp">
                店内に設えた薪窯は、ただ料理を焼くだけの道具ではありません。
                炎の揺らぎと燻香が、食材に奥行きと物語を与えます。
                ピッツァも、肉も、野菜も——薪窯を通ることで、
                食材が本来持つ旨みが最大限に引き出されます。
              </p>
            </div>
          </div>

          {/* Right: staggered */}
          <div className="space-y-8 md:mt-16">
            <div>
              <p className="text-[#C17B5E] text-[10px] tracking-[0.4em] mb-2 font-body">SEASONAL INGREDIENTS</p>
              <h3 className="font-display-jp text-[#2C2420] text-xl font-light mb-3">
                季節の食材と、産地へのこだわり
              </h3>
              <p className="text-[#6B5F58] text-sm leading-loose font-body-jp">
                メニューは季節ごとに刷新します。その時期にもっとも美味しい食材を、
                信頼する生産者から直接仕入れ、できる限りシンプルに調理。
                素材の声に耳を傾けることが、LINO TABLEの料理哲学です。
              </p>
            </div>

            <div className="relative overflow-hidden bg-[#2C2420] aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1751890939642-52aa0d543bd0?w=700&h=500&fit=crop&auto=format"
                alt="丁寧に盛り付けられたパスタ"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <p className="text-[#C17B5E] text-[10px] tracking-[0.4em] mb-2 font-body">DAY & NIGHT</p>
              <h3 className="font-display-jp text-[#2C2420] text-xl font-light mb-3">
                昼と夜で変わる、二つの顔
              </h3>
              <p className="text-[#6B5F58] text-sm leading-loose font-body-jp">
                昼は光が溢れ、開放的なランチタイム。夜はキャンドルの灯りが揺れ、
                落ち着いたムードが漂います。同じ空間でも、時間帯によってまったく
                異なる表情を楽しめます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
