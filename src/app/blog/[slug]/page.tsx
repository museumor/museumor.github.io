import type { Metadata } from "next";
import { blogContent } from "@/data/blog_content";
import { blogPosts } from "@/data/blog";
import { fixLegacyLinks } from "@/lib/legacyLinks";
import { pageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import DOMPurify from "isomorphic-dompurify";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function summarize(text: string, max = 160) {
  const clean = text.replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).replace(/\s+\S*$/, "")}…`;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogContent[slug];
  if (!post) return {};

  const snippet = blogPosts.find((p) => p.slug === slug)?.snippet;
  return pageMetadata({
    title: post.title,
    description: summarize(snippet || post.content),
    path: `/blog/${slug}/`,
    image: post.image,
    type: "article",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogContent[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="page">
      <header className="flex flex-col gap-5">
        <Link href="/blog" className="eyebrow inline-flex min-h-11 items-center self-start hover:text-ivory">
          Journal
        </Link>
        <h1 className="display max-w-[1040px] text-[clamp(36px,5vw,72px)] leading-[1.04] !tracking-[-0.02em]">
          {post.title}
        </h1>
        <p className="text-[13px] uppercase tracking-[0.1em] text-muted">{post.date}</p>
      </header>

      <div className="aspect-video overflow-hidden bg-well">
        <SafeImage src={post.image} alt="" loading="eager" className="h-full w-full object-cover" />
      </div>

      <article className="mx-auto w-full max-w-[720px]">
        <div
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(fixLegacyLinks(post.content)) }}
          className="blog-content"
        />
      </article>

      <nav aria-label="Journal" className="border-t border-rule pt-6">
        <Link href="/blog" className="link-rule">
          All articles
        </Link>
      </nav>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(blogContent).map((slug) => ({
    slug: slug,
  }));
}
