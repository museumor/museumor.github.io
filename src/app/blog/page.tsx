import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { postsByDate } from "@/lib/posts";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";

export const metadata: Metadata = pageMetadata({
  title: "Journal",
  description:
    "Artist spotlights, behind-the-scenes stories, and event recaps from the Museum of Other Realities.",
  path: "/blog/",
});

export default function BlogPage() {
  return (
    <div className="page">
      <div className="flex flex-wrap items-end gap-x-[72px] gap-y-6">
        <h1 className="page-title min-w-0 flex-[1_1_420px]">Journal</h1>
        <p className="min-w-0 flex-[1_1_360px] text-soft">
          Artist spotlights, behind-the-scenes stories, and event recaps from the museum.
        </p>
      </div>

      <section aria-label="Articles" className="flex flex-col">
        <p className="eyebrow border-t border-brass pt-4">{postsByDate.length} articles</p>
        <ul className="mt-6 border-b border-rule">
          {postsByDate.map((post) => (
            <li key={post.slug}>
              <Link
                href={post.link}
                className="group grid gap-x-10 gap-y-4 border-t border-rule py-8 md:grid-cols-[minmax(0,300px)_minmax(0,1fr)]"
              >
                <div className="aspect-[16/10] overflow-hidden bg-well">
                  <SafeImage src={post.image} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="flex max-w-[640px] flex-col gap-2">
                  <span className="text-[13px] uppercase tracking-[0.1em] text-muted">{post.date}</span>
                  <h2 className="font-heading text-[clamp(24px,2.4vw,32px)] font-normal leading-[1.15] transition-colors group-hover:text-white">
                    {post.title}
                  </h2>
                  <p className="line-clamp-3 text-[15px] text-muted">{post.snippet}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
