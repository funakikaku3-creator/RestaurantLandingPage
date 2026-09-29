const storeInfo = {
  name: 'LINO TABLE',
  address: '東京都渋谷区恵比寿1-2-3 LINOビル1F',
  tel: '03-1234-5678',
  hours: [
    { label: 'ランチ', time: '11:30 – 14:30 (L.O. 14:00)' },
    { label: 'ディナー', time: '17:30 – 23:00 (L.O. 22:00)' },
  ],
  closed: '月曜定休（祝日の場合は翌日）',
  access: 'JR恵比寿駅 東口より徒歩5分 / 東京メトロ日比谷線 恵比寿駅 1番出口より徒歩6分',
  instagram: 'https://instagram.com/linotable',
  googleMaps: 'https://maps.google.com/?q=恵比寿',
};

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] gap-4 py-4 border-b border-[#F5F0E8]/10">
      <dt className="text-[#F5F0E8]/40 text-xs tracking-[0.15em] font-body pt-0.5">{label}</dt>
      <dd className="text-[#F5F0E8]/80 text-sm font-body-jp leading-relaxed">{children}</dd>
    </div>
  );
}

export default function InfoSection() {
  return (
    <section id="access" className="bg-[#1C1614]">
      {/* Reservation CTA banner */}
      <div
        id="reservation"
        className="bg-[#8B2D2D] py-16 md:py-20"
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#F5F0E8]/70 text-xs tracking-[0.4em] mb-4 font-body uppercase">
            Reservation
          </p>
          <h2 className="font-display text-[#F5F0E8] text-3xl md:text-5xl font-light italic mb-4">
            Make a Reservation
          </h2>
          <p className="font-display-jp text-[#F5F0E8]/80 text-lg font-light mb-10">
            今日のいい夜を、予約しよう。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://example.com/reserve"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#F5F0E8] hover:bg-white text-[#8B2D2D] text-sm tracking-[0.15em] px-10 py-4 transition-colors duration-300 font-body group"
            >
              WEB予約する（無料）
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href={`tel:${storeInfo.tel.replace(/-/g, '')}`}
              className="inline-flex items-center justify-center gap-2 border border-[#F5F0E8]/40 hover:border-[#F5F0E8] text-[#F5F0E8] text-sm tracking-[0.1em] px-10 py-4 transition-all duration-300 font-body"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {storeInfo.tel}
            </a>
          </div>
          <p className="text-[#F5F0E8]/50 text-xs mt-5 font-body-jp">
            お電話でのご予約は営業時間内にお願いいたします。
          </p>
        </div>
      </div>

      {/* Store info */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          {/* Left: info */}
          <div>
            <p className="text-[#C17B5E] text-xs tracking-[0.4em] mb-3 font-body uppercase">Access</p>
            <h2 className="font-display text-[#F5F0E8] text-3xl font-light italic mb-10">
              Store Info
            </h2>

            <dl>
              <InfoRow label="住所">{storeInfo.address}</InfoRow>
              <InfoRow label="電話">
                <a href={`tel:${storeInfo.tel.replace(/-/g, '')}`} className="hover:text-[#F5F0E8] transition-colors">
                  {storeInfo.tel}
                </a>
              </InfoRow>
              <InfoRow label="営業時間">
                {storeInfo.hours.map((h) => (
                  <div key={h.label}>
                    <span className="text-[#C17B5E] mr-2">{h.label}</span>
                    {h.time}
                  </div>
                ))}
              </InfoRow>
              <InfoRow label="定休日">{storeInfo.closed}</InfoRow>
              <InfoRow label="アクセス">{storeInfo.access}</InfoRow>
            </dl>

            <a
              href={storeInfo.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 text-[#C17B5E] hover:text-[#F5F0E8] text-xs tracking-[0.2em] font-body transition-colors group"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Google Maps で見る
              <svg
                className="w-3 h-3 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Right: map placeholder + exterior */}
          <div className="space-y-6">
            {/* Map placeholder */}
            <div className="relative bg-[#261E1B] h-52 md:h-64 flex items-center justify-center border border-[#F5F0E8]/10 overflow-hidden">
              <div className="text-center">
                <svg className="w-8 h-8 text-[#C17B5E] mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p className="text-[#F5F0E8]/40 text-xs font-body tracking-[0.15em]">東京都渋谷区恵比寿</p>
                <a
                  href={storeInfo.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-[#C17B5E] text-xs tracking-[0.1em] border border-[#C17B5E]/40 hover:border-[#C17B5E] px-4 py-2 transition-colors font-body"
                >
                  地図を開く
                </a>
              </div>
            </div>

            {/* Exterior photo */}
            <div className="relative overflow-hidden bg-[#261E1B] aspect-[16/9]">
              <img
                src="https://images.unsplash.com/photo-1699786677697-1e8f45a69e9e?w=900&h=500&fit=crop&auto=format"
                alt="LINO TABLE 外観"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1C1614]/80 to-transparent p-4">
                <p className="text-[#F5F0E8] text-xs tracking-[0.2em] font-body">LINO TABLE — Ebisu, Tokyo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
