const footerLinks = [
  { label: 'CONCEPT', href: '#concept' },
  { label: 'MENU', href: '#menu' },
  { label: 'SCENE', href: '#scene' },
  { label: 'SPACE', href: '#space' },
  { label: 'ACCESS', href: '#access' },
];

const legalLinks = [
  { label: 'プライバシーポリシー', href: '#' },
  { label: '特定商取引法に基づく表記', href: '#' },
  { label: '運営会社', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#231E1B] border-t border-[#F5F0E8]/5">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-14">
          {/* Brand */}
          <div>
            <a href="#" className="font-display text-[#F5F0E8] tracking-[0.25em] text-xl font-light block mb-4">
              LINO TABLE
            </a>
            <p className="text-[#F5F0E8]/40 text-xs font-body-jp leading-relaxed mb-6">
              薪窯料理と季節の食材。<br />
              日常より少し上質な夜を。
            </p>
            {/* Instagram */}
            <a
              href="https://instagram.com/linotable"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#F5F0E8]/50 hover:text-[#F5F0E8] transition-colors text-xs tracking-[0.15em] font-body group"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @linotable
            </a>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[#F5F0E8]/30 text-[10px] tracking-[0.4em] mb-5 font-body">NAVIGATION</p>
            <nav className="space-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-[#F5F0E8]/50 hover:text-[#F5F0E8] text-xs tracking-[0.2em] font-body transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#reservation"
                className="block text-[#C17B5E] hover:text-[#F5F0E8] text-xs tracking-[0.2em] font-body transition-colors"
              >
                WEB予約
              </a>
            </nav>
          </div>

          {/* Store info */}
          <div>
            <p className="text-[#F5F0E8]/30 text-[10px] tracking-[0.4em] mb-5 font-body">STORE INFO</p>
            <div className="space-y-2 text-[#F5F0E8]/50 text-xs font-body-jp leading-relaxed">
              <p>東京都渋谷区恵比寿1-2-3 LINOビル1F</p>
              <p>03-1234-5678</p>
              <p className="mt-3">
                ランチ 11:30–14:30<br />
                ディナー 17:30–23:00
              </p>
              <p className="text-[#F5F0E8]/30">月曜定休</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#F5F0E8]/5 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4 md:gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#F5F0E8]/25 hover:text-[#F5F0E8]/50 text-[10px] tracking-[0.1em] font-body-jp transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-[#F5F0E8]/20 text-[10px] tracking-[0.1em] font-body">
            © 2024 LINO TABLE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
