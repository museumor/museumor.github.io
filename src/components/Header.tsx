'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import SafeImage from './SafeImage';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
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

        <nav className="hidden items-center gap-7 text-sm md:flex">
          <Link href="/#visit" className="text-white/70 transition-colors hover:text-white">Visit</Link>
          <Link href="/#artists" className="text-white/70 transition-colors hover:text-white">Artists</Link>
          <Link href="/#exhibitions" className="text-white/70 transition-colors hover:text-white">Exhibitions</Link>
          <Link href="/collection" className="text-white/70 transition-colors hover:text-white">Collection</Link>
          <Link href="/blog" className="text-white/70 transition-colors hover:text-white">Blog</Link>
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
        </div>
      </div>
    </header>
  );
}
