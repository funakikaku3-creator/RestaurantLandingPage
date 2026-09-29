export interface Course {
  id: string;
  name: string;
  nameEn: string;
  price: string;
  priceNote: string;
  dishes: string[];
  highlight?: boolean;
  badge?: string;
}

export const courses: Course[] = [
  {
    id: 'light',
    name: 'ライトコース',
    nameEn: 'Light Course',
    price: '¥4,800',
    priceNote: '税込・お一人様',
    dishes: ['前菜 2品', '薪窯ピッツァ or パスタ', 'ドルチェ', 'コーヒー or 紅茶'],
  },
  {
    id: 'standard',
    name: 'スタンダードコース',
    nameEn: 'Standard Course',
    price: '¥7,200',
    priceNote: '税込・お一人様',
    dishes: ['前菜 3品', 'スープ', '薪窯ピッツァ', 'パスタ', 'メイン', 'ドルチェ', 'コーヒー or 紅茶'],
    highlight: true,
    badge: '人気',
  },
  {
    id: 'anniversary',
    name: '記念日プラン',
    nameEn: 'Anniversary Plan',
    price: '¥11,000',
    priceNote: '税込・お一人様',
    dishes: [
      'スパークリングワイン乾杯',
      '前菜 4品',
      'スープ',
      '薪窯ピッツァ',
      'パスタ',
      'メイン',
      'メッセージデザートプレート',
      'フリードリンク（120分）',
    ],
    badge: '記念日に',
  },
];

function CourseCard({ course }: { course: Course }) {
  return (
    <article
      className={`relative flex flex-col ${
        course.highlight
          ? 'bg-[#8B2D2D] text-[#F5F0E8]'
          : 'bg-white text-[#2C2420]'
      }`}
    >
      {course.badge && (
        <div
          className={`absolute -top-3 left-6 text-[10px] tracking-[0.15em] px-3 py-1 font-body ${
            course.highlight
              ? 'bg-[#F5F0E8] text-[#8B2D2D]'
              : 'bg-[#8B2D2D] text-[#F5F0E8]'
          }`}
        >
          {course.badge}
        </div>
      )}

      <div className="p-7 flex flex-col flex-1">
        {/* Names */}
        <p
          className={`text-[10px] tracking-[0.3em] mb-1 font-body ${
            course.highlight ? 'text-[#F5F0E8]/60' : 'text-[#C17B5E]'
          }`}
        >
          {course.nameEn}
        </p>
        <h3
          className={`font-display-jp text-xl font-light mb-5 ${
            course.highlight ? 'text-[#F5F0E8]' : 'text-[#2C2420]'
          }`}
        >
          {course.name}
        </h3>

        {/* Price */}
        <div className={`border-t border-b py-4 mb-6 ${course.highlight ? 'border-[#F5F0E8]/20' : 'border-[#D4C8B8]'}`}>
          <p className={`font-display text-3xl font-light ${course.highlight ? 'text-[#F5F0E8]' : 'text-[#2C2420]'}`}>
            {course.price}
          </p>
          <p className={`text-xs mt-0.5 font-body ${course.highlight ? 'text-[#F5F0E8]/50' : 'text-[#6B5F58]'}`}>
            {course.priceNote}
          </p>
        </div>

        {/* Dishes */}
        <ul className="flex-1 space-y-2.5 mb-8">
          {course.dishes.map((dish) => (
            <li
              key={dish}
              className={`flex items-center gap-2.5 text-sm font-body-jp ${
                course.highlight ? 'text-[#F5F0E8]/80' : 'text-[#4A4540]'
              }`}
            >
              <span className={`w-1 h-1 rounded-full flex-shrink-0 ${course.highlight ? 'bg-[#F5F0E8]/50' : 'bg-[#C17B5E]'}`} />
              {dish}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#reservation"
          className={`block text-center text-xs tracking-[0.2em] py-3.5 transition-colors duration-300 font-body ${
            course.highlight
              ? 'bg-[#F5F0E8] text-[#8B2D2D] hover:bg-[#EDE7DB]'
              : 'bg-[#2C2420] text-[#F5F0E8] hover:bg-[#4A4540]'
          }`}
        >
          このコースで予約する
        </a>
      </div>
    </article>
  );
}

export default function CourseSection() {
  return (
    <section className="bg-[#F5F0E8] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[#C17B5E] text-xs tracking-[0.4em] mb-3 font-body uppercase">Course & Plan</p>
          <h2 className="font-display text-[#2C2420] text-4xl md:text-5xl font-light italic">
            Courses
          </h2>
          <p className="text-[#6B5F58] text-sm font-body-jp mt-4 max-w-md leading-relaxed">
            記念日やデートのご利用に。各コースはご予算やシーンに合わせてお選びいただけます。
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 mt-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Note */}
        <p className="text-[#6B5F58] text-xs font-body-jp mt-8 leading-relaxed">
          ※ アレルギーや食材のご要望はご予約時にお知らせください。コース内容は季節により変更となる場合があります。
        </p>
      </div>
    </section>
  );
}
