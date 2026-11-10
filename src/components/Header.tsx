'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SafeImage from './SafeImage';

const steamUrl = 'https://store.steampowered.com/app/613900/Museum_of_Other_Realities/';

const navLinks = [
  { href: '/#exhibitions', label: 'Exhibitions' },
  { href: '/collection', label: 'Collection' },
  { href: '/artists', label: 'Artists' },
  { href: '/blog', label: 'Journal' },
  { href: '/support', label: 'Support' },
];

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState(pathname);

  // Close the mobile menu on navigation (including back/forward), Escape,
  // or when the desktop nav takes over.
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setMenuOpen(false);
  }

  // Slide the header away while scrolling down and bring it back on the
  // first scroll up, so it never sits over the artwork.
  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY) < 8) return;
      setHidden(y > lastY && y > 160);
      lastY = y;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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

  const isCurrent = (href: string) => !href.startsWith('/#') && pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b border-rule bg-ground transition-transform duration-300 focus-within:translate-y-0 ${
        hidden && !menuOpen ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="shell flex h-[72px] items-center justify-between gap-8">
        <Link href="/" aria-label="Museum of Other Realities, home" className="flex min-h-12 items-center">
          <SafeImage
            src="/images/logo/MOR_Logomark-forweb_white.png"
            alt=""
            className="h-7 w-auto"
            loading="eager"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 text-[15px] md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent(link.href) ? 'page' : undefined}
              className={`border-b py-3 text-ivory transition-colors hover:text-white ${
                isCurrent(link.href) ? 'border-brass' : 'border-transparent'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href={steamUrl} target="_blank" rel="noopener noreferrer" className="link-rule">
            Visit free
          </a>
        </nav>

        <div className="flex items-center gap-5 md:hidden">
          <a href={steamUrl} target="_blank" rel="noopener noreferrer" className="link-rule">
            Visit free
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center text-ivory"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </div>

      <nav id="mobile-nav" aria-label="Main" hidden={!menuOpen} className="shell pb-4 md:hidden">
        <ul className="flex flex-col border-t border-rule">
          {navLinks.map((link) => (
            <li key={link.href} className="border-b border-rule">
              <Link
                href={link.href}
                className="display block py-4 text-2xl text-ivory"
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
