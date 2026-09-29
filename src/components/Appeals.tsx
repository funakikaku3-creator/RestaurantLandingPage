const appeals = [
  {
    id: 'food',
    number: '01',
    title: '料理',
    titleEn: 'CUISINE',
    description:
      '薪窯の炎が生み出す香ばしさと、旬の食材が織りなす滋味。産地にこだわった素材を、シンプルながら奥深い味わいへと昇華させます。',
    image:
      'https://images.unsplash.com/photo-1692640911594-124bf205dc78?w=800&h=1000&fit=crop&auto=format',
    alt: '薪窯料理のクローズアップ',
  },
  {
    id: 'space',
    number: '02',
    title: '空間',
    titleEn: 'SPACE',
    description:
      '昼は光が差し込む開放的な表情を、夜は灯りが揺れる親密な雰囲気を。どちらの時間も、その場にいるだけで気持ちが整います。',
    image:
      'https://images.unsplash.com/photo-1782714074903-1c5bfa8f3497?w=800&h=1000&fit=crop&auto=format',
    alt: '洗練されたレストランの内装',
  },
  {
    id: 'time',
    number: '03',
    title: '過ごし方',
    titleEn: 'YOUR TIME',
    description:
      'デートから友人との食事、記念日、女子会まで。特別すぎず、でも日常より少し上質な時間を、大切な人とともに。',
    image:
      'https://images.unsplash.com/photo-1758874089745-72a5f308af86?w=800&h=1000&fit=crop&auto=format',
    alt: 'キャンドルの灯りのもとでの食事',
  },
];

export default function Appeals() {
  return (
    <section id="concept" className="bg-[#F5F0E8] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <p className="text-[#C17B5E] text-xs tracking-[0.4em] mb-3 font-body uppercase">Three Promises</p>
          <h2 className="font-display text-[#2C2420] text-4xl md:text-5xl font-light italic">
            Why LINO TABLE
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {appeals.map((item, i) => (
            <article
              key={item.id}
              className={`group ${i === 1 ? 'md:mt-12' : ''} ${i === 2 ? 'md:mt-6' : ''}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden mb-6 bg-[#2C2420] aspect-[4/5]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Number overlay */}
                <div className="absolute top-4 left-4">
                  <span className="font-display text-[#F5F0E8]/30 text-5xl font-light leading-none">
                    {item.number}
                  </span>
                </div>
              </div>

              {/* Copy */}
              <div>
                <p className="text-[#C17B5E] text-[10px] tracking-[0.4em] mb-1 font-body">{item.titleEn}</p>
                <h3 className="font-display-jp text-[#2C2420] text-2xl font-light mb-3">{item.title}</h3>
                <p className="text-[#6B5F58] text-sm leading-loose font-body-jp">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
