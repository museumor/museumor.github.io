'use client';

import { useEffect, useState } from 'react';
import SafeImage from './SafeImage';
import { useSwipe } from '@/lib/useSwipe';

export interface HeroSlide {
  image: string;
  alt: string;
  // Wall-label lines shown under "Now showing".
  title: string;
  credit: string;
}

const INTERVAL_MS = 7000;

// Full-bleed hero that slowly crossfades between slides, with a wall label
// that names what is on screen. Stays on the first slide for visitors who
// prefer reduced motion; the numbered buttons still work.
export default function HeroSlides({ slides, children }: { slides: HeroSlide[]; children: React.ReactNode }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), INTERVAL_MS);
    return () => clearInterval(timer);
  }, [paused, slides.length]);

  const show = (by: number) => {
    setIndex((i) => (i + by + slides.length) % slides.length);
    setPaused(true);
  };
  const swipe = useSwipe(
    () => show(-1),
    () => show(1)
  );

  const current = slides[index];

  return (
    // Wide screens: text sits on the dark floor of the image. Narrow screens:
    // the image stays clean and the text follows it on the page ground.
    <section id="visit" aria-label="Now showing" className="relative bg-ground md:h-[clamp(520px,52vw,760px)] md:overflow-hidden">
      <div
        className="relative h-[72vw] max-h-[440px] touch-pan-y overflow-hidden bg-well md:absolute md:inset-0 md:h-auto md:max-h-none"
        {...swipe}
      >
        {slides.map((slide, i) => (
          <SafeImage
            key={slide.image}
            src={slide.image}
            alt={i === index ? slide.alt : ''}
            aria-hidden={i !== index}
            loading={i === 0 ? 'eager' : 'lazy'}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1600ms] ease-out ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        {/* The artwork dissolves into the page ground at its lower edge, so the
            hero has no hard bottom line; the top of the image stays untouched. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-ground/0 from-[72%] to-ground md:from-[38%] md:via-ground/80 md:via-[78%]"
        />
      </div>

      <div className="relative md:absolute md:inset-x-0 md:bottom-0">
        <div className="shell flex flex-wrap items-end justify-between gap-x-16 gap-y-8 pb-[clamp(28px,4vw,56px)] pt-8 md:pt-0">
          <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-5">{children}</div>

          <div className="flex flex-[0_1_260px] flex-col gap-2.5 border-t border-ivory/45 pt-3.5">
            <p className="eyebrow !text-soft">Now showing</p>
            <div aria-live="polite">
              <p className="font-heading text-2xl italic leading-tight">{current.title}</p>
              <p className="text-sm text-soft">{current.credit}</p>
            </div>
            {slides.length > 1 && (
              <div className="-ml-3 flex items-center gap-1 text-[13px]">
                {slides.map((slide, i) => (
                  <button
                    key={slide.image}
                    type="button"
                    aria-label={`Show ${slide.title}`}
                    aria-pressed={i === index}
                    onClick={() => {
                      setIndex(i);
                      setPaused(true);
                    }}
                    className={`h-11 min-w-11 text-ivory transition-opacity ${i === index ? 'opacity-100' : 'opacity-55 hover:opacity-100'}`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
