import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { collection } from "@/data/collection";
import { pageMetadata } from "@/lib/metadata";
import SafeImage from "@/components/SafeImage";

const steamUrl = "https://store.steampowered.com/app/613900/Museum_of_Other_Realities/";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return collection.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = collection.find((w) => w.slug === slug);
  if (!work) return {};

  return pageMetadata({
    title: `${work.title} by ${work.artist}`,
    description: `${work.title} (${work.year}) by ${work.artist}, part of the Museum of Other Realities collection of art made for VR.`,
    path: `/collection/${slug}/`,
    image: work.image,
  });
}

const labelClass = "eyebrow border-b border-rule py-3";
const valueClass = "border-b border-rule py-3";

export default async function WorkPage({ params }: PageProps) {
  const { slug } = await params;
  const index = collection.findIndex((w) => w.slug === slug);
  if (index === -1) notFound();

  const work = collection[index];
  const previous = collection[(index - 1 + collection.length) % collection.length];
  const next = collection[(index + 1) % collection.length];
  const moreByArtist = collection.filter((w) => w.artist === work.artist && w.slug !== work.slug);
  const tools = (work.category ?? "")
    .split(";")
    .map((tool) => tool.trim())
    .filter(Boolean);

  return (
    <div className="text-[17px] leading-relaxed">
      {/* The work itself, with nothing laid over it. */}
      <SafeImage
        src={work.image}
        alt={`${work.title} by ${work.artist}`}
        loading="eager"
        className="block h-[clamp(320px,50vw,720px)] w-full bg-well object-cover"
      />

      <div className="shell flex flex-col gap-[clamp(56px,7vw,96px)] pb-[clamp(72px,9vw,120px)] pt-[clamp(40px,5vw,72px)]">
        <div className="flex flex-wrap gap-x-[72px] gap-y-10">
          <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-4">
            <nav aria-label="Breadcrumb">
              <Link href="/collection" className="eyebrow inline-flex min-h-11 items-center hover:text-ivory">
                Collection
              </Link>
            </nav>
            <h1 className="display text-[clamp(44px,6.4vw,96px)] leading-none !tracking-[-0.025em]">{work.title}</h1>
            <p className="font-heading text-2xl text-soft">
              {work.artist}, {work.year}
            </p>
          </div>

          <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-8 lg:pt-14">
            <dl className="grid grid-cols-[120px_minmax(0,1fr)] border-t border-brass text-[15px]">
              <dt className={labelClass}>Artist</dt>
              <dd className={valueClass}>{work.artist}</dd>
              <dt className={labelClass}>Year</dt>
              <dd className={valueClass}>{work.year}</dd>
              {tools.length > 0 && (
                <>
                  <dt className={labelClass}>Made with</dt>
                  <dd className={valueClass}>{tools.join(", ")}</dd>
                </>
              )}
            </dl>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
              <a href={steamUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Step inside on Steam
              </a>
              <Link href="/artists" className="link-rule">
                About the artists
              </Link>
            </div>
          </div>
        </div>

        {moreByArtist.length > 0 && (
          <section aria-label={`More by ${work.artist}`} className="flex flex-wrap gap-x-[72px] gap-y-6">
            <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-3.5">
              <p className="eyebrow">The artist</p>
              <h2 className="display text-[clamp(32px,3.6vw,52px)] leading-[1.05]">More by {work.artist}</h2>
            </div>
            <ul className="min-w-0 flex-[1_1_400px] border-b border-rule">
              {moreByArtist.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/collection/${other.slug}`}
                    className="flex items-baseline justify-between gap-4 border-t border-rule py-4 transition-colors hover:text-white"
                  >
                    <span className="font-heading text-2xl leading-tight">{other.title}</span>
                    <span className="text-[13px] text-muted">{other.year}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <nav aria-label="Previous and next work" className="grid grid-cols-2 gap-6 border-t border-rule pt-6">
          <Link href={`/collection/${previous.slug}`} className="group flex flex-col gap-1.5">
            <span className="eyebrow">Previous</span>
            <span className="font-heading text-[clamp(22px,2.4vw,32px)] leading-tight transition-colors group-hover:text-white">
              {previous.title}
            </span>
            <span className="text-sm text-muted">
              {previous.artist}, {previous.year}
            </span>
          </Link>
          <Link href={`/collection/${next.slug}`} className="group flex flex-col gap-1.5 text-right">
            <span className="eyebrow">Next</span>
            <span className="font-heading text-[clamp(22px,2.4vw,32px)] leading-tight transition-colors group-hover:text-white">
              {next.title}
            </span>
            <span className="text-sm text-muted">
              {next.artist}, {next.year}
            </span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
