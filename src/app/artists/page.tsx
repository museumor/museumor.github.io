import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { artists } from "@/data/artists";
import { collection } from "@/data/collection";
import SafeImage from "@/components/SafeImage";

export const metadata: Metadata = pageMetadata({
  title: "Artists",
  description:
    "Meet the illustrators, animators, and engineers pushing the boundaries of interactive art and new media in the MOR.",
  path: "/artists/",
});

export default function ArtistsPage() {
  return (
    <div className="shell flex flex-col gap-[clamp(48px,6vw,80px)] pb-[clamp(72px,9vw,120px)] pt-[clamp(48px,6vw,88px)] text-[17px] leading-relaxed">
      <div className="flex flex-wrap items-end gap-x-[72px] gap-y-6">
        <h1 className="display min-w-0 flex-[1_1_420px] text-[clamp(44px,6.4vw,96px)] leading-none !tracking-[-0.025em]">
          Artists
        </h1>
        <p className="min-w-0 flex-[1_1_360px] text-soft">
          Meet the illustrators, animators, and engineers pushing the boundaries of interactive art and new media
          within the MOR.
        </p>
      </div>

      <section aria-label="All artists" className="flex flex-col">
        <p className="eyebrow border-t border-brass pt-4">
          {artists.length} artists
        </p>
        <ul className="mt-6 border-b border-rule">
          {artists.map((artist) => {
            const works = collection.filter((work) => work.artist === artist.name);
            return (
              <li
                key={artist.slug}
                id={artist.slug}
                className="grid scroll-mt-24 gap-x-10 gap-y-4 border-t border-rule py-8 md:grid-cols-[120px_minmax(0,1fr)_minmax(0,1.4fr)]"
              >
                <div className="h-[120px] w-[120px] overflow-hidden bg-well">
                  <SafeImage src={artist.image} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="font-heading text-[28px] font-normal leading-[1.15]">{artist.name}</h2>
                  {works.length > 0 && (
                    <ul className="flex flex-col text-[15px]">
                      {works.map((work) => (
                        <li key={work.slug}>
                          <Link
                            href={`/collection/${work.slug}`}
                            className="inline-flex min-h-8 items-center gap-2 text-soft transition-colors hover:text-white"
                          >
                            <span className="font-heading italic">{work.title}</span>
                            <span className="text-[13px] text-muted">{work.year}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <p className="text-[15px] leading-relaxed text-muted">{artist.desc}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
