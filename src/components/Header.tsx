'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SafeImage from './SafeImage';

const navLinks = [
  { href: '/#visit', label: 'Visit' },
  { href: '/artists', label: 'Artists' },
  { href: '/#exhibitions', label: 'Exhibitions' },
  { href: '/collection', label: 'Collection' },
  { href: '/blog', label: 'Blog' },
  { href: '/support', label: 'Support' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState(pathname);

  // Close the mobile menu on navigation (including back/forward), Escape,
  // or when the desktop nav takes over.
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 768px)');
    const handleResize = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    desktop.addEventListener('change', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKey);
      desktop.removeEventListener('change', handleResize);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled || menuOpen
          ? 'border-b border-white/10 bg-black/80 py-3 backdrop-blur-xl'
          : 'border-b border-white/8 bg-gradient-to-b from-black/88 via-black/78 to-black/72 py-4 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <SafeImage
            src="/images/logo/MOR_Logomark-forweb_white.png"
            alt="Museum of Other Realities"
            className="h-8 w-auto"
            loading="eager"
          />
          <div className="hidden sm:block">
            <div className="text-xs uppercase tracking-[0.32em] text-white/50">Museum of</div>
            <div className="text-sm font-medium tracking-[0.24em] text-white">Other Realities</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-white/70 transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://store.steampowered.com/app/613900/Museum_of_Other_Realities/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white px-4 py-2 text-sm font-medium text-black transition-transform hover:-translate-y-0.5 hover:bg-white/90"
          >
            Visit Free
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10 md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        hidden={!menuOpen}
        className="mx-auto max-w-7xl px-6 pb-2 pt-3 md:hidden"
      >
        <ul className="flex flex-col divide-y divide-white/8 border-t border-white/10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-4 text-base text-white/80 transition-colors hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
