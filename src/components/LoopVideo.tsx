'use client';

import { useEffect, useRef, useState } from 'react';
import { BASE_PATH } from '@/lib/constants';

interface LoopVideoProps {
  // Path to an .mp4; the poster defaults to the .jpg with the same name.
  src: string;
  poster?: string;
  alt: string;
  className?: string;
}

// Muted, looping replacement for animated GIFs. The video only starts
// downloading when it scrolls near the viewport, and visitors who prefer
// reduced motion see the poster frame instead.
export default function LoopVideo({ src, poster, alt, className }: LoopVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);

  const videoSrc = `${BASE_PATH}${src}`;
  const posterSrc = `${BASE_PATH}${poster ?? src.replace(/\.mp4$/, '.jpg')}`;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={active ? videoSrc : undefined}
      poster={posterSrc}
      className={className}
      aria-label={alt}
      role="img"
      autoPlay
      muted
      loop
      playsInline
      preload="none"
    />
  );
}
