'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { ArtWork } from '@/data/collection';
import SafeImage from './SafeImage';
import LoopClip from './LoopClip';

const ALL = 'All';

// A work's `category` can name several tools, separated by semicolons.
const toolsOf = (work: ArtWork) =>
  (work.category ?? '')
    .split(';')
    .map((tool) => tool.trim())
    .filter(Boolean);

function FilterRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 text-sm">
      <span className="eyebrow w-12">{label}</span>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={option === value}
          onClick={() => onChange(option)}
          className={`h-11 border-b transition-colors ${
            option === value ? 'border-brass text-ivory' : 'border-transparent text-muted hover:text-ivory'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

// Text index of the collection with year and tool filters. On wide screens,
// hovering or focusing a row shows that work in a preview that stays in view;
// on narrow screens each row carries its own thumbnail. Works with a `clip`
// show it moving in the list; the still is what their own page opens with.
export default function CollectionIndex({ works }: { works: ArtWork[] }) {
  const [year, setYear] = useState(ALL);
  const [tool, setTool] = useState(ALL);
  const [previewSlug, setPreviewSlug] = useState<string | null>(null);

  const years = useMemo(() => [ALL, ...Array.from(new Set(works.map((w) => w.year))).sort()], [works]);
  const tools = useMemo(() => [ALL, ...Array.from(new Set(works.flatMap(toolsOf))).sort()], [works]);

  const visible = works.filter(
    (work) => (year === ALL || work.year === year) && (tool === ALL || toolsOf(work).includes(tool))
  );
  const preview = visible.find((work) => work.slug === previewSlug) ?? visible[0];

  return (
    <section aria-label="Index of works" className="flex flex-col gap-8">
      <div className="flex flex-col border-t border-brass pt-2">
        <FilterRow label="Year" options={years} value={year} onChange={setYear} />
        <FilterRow label="Tool" options={tools} value={tool} onChange={setTool} />
        <p className="pt-2 text-sm text-muted" aria-live="polite">
          {visible.length} {visible.length === 1 ? 'work' : 'works'}
        </p>
      </div>

      <div className="flex items-start gap-[72px]">
        <ul className="min-w-0 flex-1 border-t border-rule">
          {visible.map((work) => (
            <li key={work.slug}>
              <Link
                href={`/collection/${work.slug}`}
                onMouseEnter={() => setPreviewSlug(work.slug)}
                onFocus={() => setPreviewSlug(work.slug)}
                className={`flex items-center gap-4 border-b border-rule py-3.5 transition-colors lg:items-baseline ${
                  preview?.slug === work.slug ? 'text-ivory' : 'text-ivory lg:text-muted'
                }`}
              >
                <span className="h-14 w-20 shrink-0 overflow-hidden bg-well lg:hidden">
                  {work.clip ? (
                    <LoopClip src={work.clip} poster={work.image} className="h-full w-full object-cover" />
                  ) : (
                    <SafeImage src={work.image} alt="" className="h-full w-full object-cover" />
                  )}
                </span>
                <span className="flex min-w-0 flex-1 flex-col gap-x-4 lg:flex-row lg:items-baseline">
                  <span className="min-w-0 flex-1 font-heading text-[22px] leading-tight">{work.title}</span>
                  <span className="text-sm text-muted">
                    {work.artist}
                    <span className="lg:hidden">, {work.year}</span>
                  </span>
                </span>
                <span className="hidden w-9 text-right text-[13px] text-muted lg:block">{work.year}</span>
              </Link>
            </li>
          ))}
          {visible.length === 0 && (
            <li className="border-b border-rule py-6 text-muted">No works match these filters.</li>
          )}
        </ul>

        {preview && (
          <figure className="sticky top-24 hidden w-[44%] shrink-0 flex-col gap-4 lg:flex">
            <div className="aspect-[4/3] overflow-hidden bg-well">
              {/* Keyed so the image element is replaced, not stretched, between works. */}
              {preview.clip ? (
                <LoopClip
                  key={preview.slug}
                  src={preview.clip}
                  poster={preview.image}
                  label={preview.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <SafeImage key={preview.slug} src={preview.image} alt={preview.title} className="h-full w-full object-cover" />
              )}
            </div>
            <figcaption className="flex flex-col gap-0.5">
              <span className="font-heading text-[22px] italic leading-tight">{preview.title}</span>
              <span className="text-sm text-muted">
                {preview.artist}, {preview.year}
                {preview.category ? ` · ${toolsOf(preview).join(', ')}` : ''}
              </span>
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}
