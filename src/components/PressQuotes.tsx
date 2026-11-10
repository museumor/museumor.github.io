'use client';

import { useState } from 'react';

export interface PressQuote {
  quote: string;
  source: string;
}

// One large pull quote at a time; the publication names switch between them.
export default function PressQuotes({ quotes }: { quotes: PressQuote[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-8">
      {/* All quotes share one grid cell so the block keeps the tallest one's height. */}
      <div className="grid">
        {quotes.map((item, i) => (
          <blockquote
            key={item.source}
            aria-hidden={i !== active}
            className={`display col-start-1 row-start-1 text-[clamp(28px,3.4vw,46px)] leading-[1.18] transition-opacity duration-500 ${
              i === active ? 'opacity-100' : 'opacity-0'
            }`}
          >
            &ldquo;{item.quote}&rdquo;
          </blockquote>
        ))}
      </div>
      <div className="flex flex-wrap gap-x-8 text-[13px] uppercase tracking-[0.12em]">
        {quotes.map((item, i) => (
          <button
            key={item.source}
            type="button"
            aria-pressed={i === active}
            onClick={() => setActive(i)}
            className={`h-11 border-t uppercase tracking-[0.12em] transition-colors ${
              i === active ? 'border-brass text-ivory' : 'border-transparent text-muted hover:text-ivory'
            }`}
          >
            {item.source}
          </button>
        ))}
      </div>
    </div>
  );
}
