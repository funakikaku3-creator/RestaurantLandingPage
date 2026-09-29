import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'CONCEPT', href: '#concept' },
  { label: 'MENU', href: '#menu' },
  { label: 'SCENE', href: '#scene' },
  { label: 'SPACE', href: '#space' },
  { label: 'ACCESS', href: '#access' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#1C1614]/95 backdrop-blur-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-display text-[#F5F0E8] tracking-[0.25em] text-lg font-light uppercase hover:opacity-70 transition-opacity"
          >
            LINO TABLE
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#F5F0E8]/70 hover:text-[#F5F0E8] text-xs tracking-[0.2em] font-body transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <a
              href="#reservation"
              className="hidden sm:inline-flex items-center gap-2 bg-[#8B2D2D] hover:bg-[#A33A3A] text-[#F5F0E8] text-xs tracking-[0.15em] px-5 py-2.5 transition-colors duration-200"
            >
              WEB予約
            </a>
            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-1"
              aria-label="メニューを開く"
            >
              <span
                className={`block w-6 h-px bg-[#F5F0E8] transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-px bg-[#F5F0E8] transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-px bg-[#F5F0E8] transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#1C1614] flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-[#F5F0E8] text-3xl font-light tracking-[0.2em] hover:text-[#C17B5E] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservation"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-[#8B2D2D] hover:bg-[#A33A3A] text-[#F5F0E8] text-sm tracking-[0.15em] px-10 py-4 transition-colors"
          >
            WEB予約
          </a>
        </nav>
      </div>
    </>
  );
}
