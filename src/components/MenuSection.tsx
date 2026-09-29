export interface MenuItem {
  id: string;
  name: string;
  nameJp: string;
  description: string;
  price: string;
  tag?: string;
  image: string;
  alt: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 'pizza-margherita',
    name: 'Margherita della Legna',
    nameJp: '薪窯マルゲリータ',
    description: '薪窯で焼き上げた本格ナポリピッツァ。モッツァレラと完熟トマトの旨みが溶け合う一枚。',
    price: '¥1,800',
    tag: '人気No.1',
    image:
      'https://images.unsplash.com/photo-1622880833523-7cf1c0bd4296?w=600&h=500&fit=crop&auto=format',
    alt: '薪窯マルゲリータピッツァ',
  },
  {
    id: 'pasta-seasonal',
    name: 'Pasta del Giorno',
    nameJp: '本日のパスタ',
    description: '市場直送の旬の食材を使ったシェフ特製パスタ。日替わりで季節の恵みをお届けします。',
    price: '¥1,600〜',
    tag: '季節限定',
    image:
      'https://images.unsplash.com/photo-1528751086790-81a64658fc53?w=600&h=500&fit=crop&auto=format',
    alt: '季節のパスタ料理',
  },
  {
    id: 'pasta-cacio',
    name: 'Cacio e Pepe',
    nameJp: 'カチョエペペ',
    description: 'ペコリーノチーズと黒胡椒だけのローマ伝統のパスタ。シンプルで奥深い味わい。',
    price: '¥1,700',
    image:
      'https://images.unsplash.com/photo-1600345968497-bb0c69de64f8?w=600&h=500&fit=crop&auto=format',
    alt: 'カチョエペペパスタ',
  },
  {
    id: 'meat-wood',
    name: 'Bistecca alla Brace',
    nameJp: '薪炭火ビステッカ',
    description: '国産黒毛和牛を薪の炭火でじっくりと。香ばしい焦げ目と肉汁が楽しめる逸品。',
    price: '¥3,200',
    tag: 'おすすめ',
    image:
      'https://images.unsplash.com/photo-1750943082858-b3e60eaf8cc6?w=600&h=500&fit=crop&auto=format',
    alt: '薪炭火ビステッカ',
  },
];

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="group bg-white overflow-hidden">
      {/* Image */}
      <div className="relative overflow-hidden bg-[#2C2420] aspect-[3/2]">
        <img
          src={item.image}
          alt={item.alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {item.tag && (
          <div className="absolute top-3 left-3 bg-[#8B2D2D] text-[#F5F0E8] text-[10px] tracking-[0.1em] px-2.5 py-1 font-body">
            {item.tag}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <p className="text-[#C17B5E] text-[10px] tracking-[0.25em] mb-1 font-body">{item.name}</p>
        <h3 className="font-display-jp text-[#2C2420] text-lg font-light mb-2">{item.nameJp}</h3>
        <p className="text-[#6B5F58] text-xs leading-relaxed font-body-jp mb-4 line-clamp-2">
          {item.description}
        </p>
        <div className="flex items-center justify-between border-t border-[#D4C8B8] pt-3">
          <span className="font-display text-[#2C2420] text-xl font-light">{item.price}</span>
          <span className="text-[#6B5F58] text-[10px] tracking-[0.15em] font-body">税込 / tax incl.</span>
        </div>
      </div>
    </article>
  );
}

export default function MenuSection() {
  return (
    <section id="menu" className="bg-[#EDE7DB] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <p className="text-[#C17B5E] text-xs tracking-[0.4em] mb-3 font-body uppercase">Our Menu</p>
            <h2 className="font-display text-[#2C2420] text-4xl md:text-5xl font-light italic">
              Popular Dishes
            </h2>
          </div>
          <a
            href="#reservation"
            className="mt-6 md:mt-0 self-start md:self-auto inline-flex items-center gap-2 text-[#8B2D2D] text-xs tracking-[0.2em] font-body border-b border-[#8B2D2D] pb-0.5 hover:text-[#A33A3A] hover:border-[#A33A3A] transition-colors group"
          >
            フルメニューを見る
            <svg
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
