import { useState } from 'react';

export interface Scene {
  id: string;
  label: string;
  labelJp: string;
  headline: string;
  description: string;
  image: string;
  alt: string;
}

export const scenes: Scene[] = [
  {
    id: 'date',
    label: 'DATE',
    labelJp: 'デート',
    headline: '二人だけの、とっておきの夜に。',
    description:
      'ゆったりとした席間、揺れるキャンドル、薪窯の香り。言葉が自然と弾む空間で、大切な人との時間を。コースからアラカルトまで、二人のペースで楽しめます。',
    image:
      'https://images.unsplash.com/photo-1782022536439-f0ccc8fdd59f?w=900&h=700&fit=crop&auto=format',
    alt: 'キャンドルライトのロマンティックなディナー',
  },
  {
    id: 'anniversary',
    label: 'ANNIVERSARY',
    labelJp: '記念日・誕生日',
    headline: '特別な日を、もっと特別に。',
    description:
      '記念日・誕生日のサプライズ演出も承ります。デザートプレートへのメッセージ、花束のご用意など、お気軽にご相談ください。記念日プランはコースにドリンクも含まれます。',
    image:
      'https://images.unsplash.com/photo-1773188243397-29591fa09047?w=900&h=700&fit=crop&auto=format',
    alt: 'テーブルのキャンドル',
  },
  {
    id: 'friends',
    label: 'FRIENDS',
    labelJp: '友人・女子会',
    headline: '気の置けない仲間と、賑やかな食卓を。',
    description:
      'ワインを片手にシェアして楽しめる料理が揃っています。女子会や友人同士のお集まりに最適なグループ席もご用意。気軽に、でもちょっと贅沢な時間を仲間と。',
    image:
      'https://images.unsplash.com/photo-1699560977267-401ddfa73f3a?w=900&h=700&fit=crop&auto=format',
    alt: 'レストランでの楽しいグループディナー',
  },
];

export default function Scenes() {
  const [active, setActive] = useState(0);
  const scene = scenes[active];

  return (
    <section id="scene" className="bg-[#1C1614] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[#C17B5E] text-xs tracking-[0.4em] mb-3 font-body uppercase">Use Scenes</p>
          <h2 className="font-display text-[#F5F0E8] text-4xl md:text-5xl font-light italic">
            Your Occasion
          </h2>
        </div>

        {/* Tab selector */}
        <div className="flex gap-0 mb-10 border-b border-[#F5F0E8]/10">
          {scenes.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`relative px-6 py-4 text-xs tracking-[0.25em] font-body transition-colors duration-200 ${
                i === active
                  ? 'text-[#F5F0E8]'
                  : 'text-[#F5F0E8]/40 hover:text-[#F5F0E8]/70'
              }`}
            >
              {s.label}
              {i === active && (
                <span className="absolute bottom-0 left-0 right-0 h-px bg-[#8B2D2D]" />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative overflow-hidden bg-[#261E1B] aspect-[4/3]">
            <img
              key={scene.id}
              src={scene.image}
              alt={scene.alt}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1614]/60 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <p className="font-display text-[#F5F0E8]/20 text-7xl font-light leading-none select-none">
                {scene.label}
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-[#C17B5E] text-xs tracking-[0.4em] mb-4 font-body">{scene.labelJp}</p>
            <h3 className="font-display-jp text-[#F5F0E8] text-2xl md:text-3xl font-light leading-relaxed mb-6">
              {scene.headline}
            </h3>
            <p className="text-[#F5F0E8]/60 text-sm leading-loose font-body-jp mb-8">
              {scene.description}
            </p>
            <a
              href="#reservation"
              className="inline-flex items-center gap-3 bg-[#8B2D2D] hover:bg-[#A33A3A] text-[#F5F0E8] text-xs tracking-[0.2em] px-8 py-3.5 transition-colors duration-300 group"
            >
              このシーンで予約する
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
        </div>
      </div>
    </section>
  );
}
