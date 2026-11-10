'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { BASE_PATH } from '@/lib/constants';

export interface OnViewWork {
  title: string;
  artist: string;
  year?: string;
  description: string;
  // Path to an .mp4; the poster is the .jpg with the same name.
  video: string;
  href: string;
}

// Numbered index of works. Hovering, focusing or tapping a title crossfades
// the preview beside it. Only the selected clip downloads and plays, and
// visitors who prefer reduced motion see the poster frames instead.
export default function OnView({ works }: { works: OnViewWork[] }) {
  const [active, setActive] = useState(0);
  // Which clips have been asked for; a clip's file is only requested once it is.
  const [loaded, setLoaded] = useState<boolean[]>(() => works.map(() => false));
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const activeRef = useRef(0);
  const inViewRef = useRef(false);

  const allowsMotion = () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const markLoaded = (index: number) =>
    setLoaded((prev) => (prev[index] ? prev : prev.map((v, i) => v || i === index)));

  const select = (index: number) => {
    activeRef.current = index;
    setActive(index);
    if (inViewRef.current && allowsMotion()) markLoaded(index);
  };

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
        if (entry.isIntersecting && allowsMotion()) {
          markLoaded(activeRef.current);
        } else {
          videoRefs.current.forEach((video) => video?.pause());
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Play the selected clip once its file has been requested; pause the rest.
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === active && loaded[i] && inViewRef.current) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [active, loaded]);

  const current = works[active];

  return (
    <div className="flex flex-wrap items-start gap-x-[72px] gap-y-10">
      <ol className="min-w-0 flex-[1_1_420px] border-b border-rule">
        {works.map((work, i) => (
          <li key={work.title}>
            <button
              type="button"
              aria-pressed={i === active}
              onMouseEnter={() => select(i)}
              onFocus={() => select(i)}
              onClick={() => select(i)}
              className={`flex w-full flex-wrap items-baseline gap-x-5 gap-y-1 border-t border-rule py-5 text-left transition-colors duration-300 ${
                i === active ? 'text-ivory' : 'text-muted'
              }`}
            >
              <span className="w-6 text-xs tracking-[0.1em] text-brass">{String(i + 1).padStart(2, '0')}</span>
              <span className="font-heading text-[clamp(26px,2.6vw,36px)] leading-[1.15]">{work.title}</span>
              <span className="ml-auto text-sm text-muted">
                {work.artist}
                {work.year ? `, ${work.year}` : ''}
              </span>
            </button>
          </li>
        ))}
      </ol>

      <figure className="flex min-w-0 flex-[1_1_460px] flex-col gap-4">
        <div ref={frameRef} className="relative aspect-video overflow-hidden bg-well">
          {works.map((work, i) => (
            <video
              key={work.video}
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              src={loaded[i] ? `${BASE_PATH}${work.video}` : undefined}
              poster={`${BASE_PATH}${work.video.replace(/\.mp4$/, '.jpg')}`}
              aria-label={`${work.title} by ${work.artist}`}
              role="img"
              aria-hidden={i !== active}
              muted
              loop
              playsInline
              preload="none"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                i === active ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <figcaption className="flex min-h-[112px] max-w-[480px] flex-col gap-1.5" aria-live="polite">
          <span className="font-heading text-[22px] italic leading-tight">{current.title}</span>
          <span className="text-[15px] text-muted">{current.description}</span>
          <Link href={current.href} className="link-rule self-start">
            See more
          </Link>
        </figcaption>
      </figure>
    </div>
  );
}
