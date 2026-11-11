'use client';

import { useEffect, useRef } from 'react';
import { BASE_PATH } from '@/lib/constants';

// A short, silent, looping clip that only downloads and plays while it is on
// screen. Visitors who prefer reduced motion keep the still poster instead.
export default function LoopClip({
  src,
  poster,
  label,
  className,
}: {
  src: string;
  poster: string;
  label?: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!video.getAttribute('src')) video.src = `${BASE_PATH}${src}`;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      poster={`${BASE_PATH}${poster}`}
      role="img"
      aria-label={label}
      aria-hidden={label ? undefined : true}
      muted
      loop
      playsInline
      preload="none"
      className={className}
    />
  );
}
