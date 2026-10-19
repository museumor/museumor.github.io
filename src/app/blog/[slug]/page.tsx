import type { Metadata } from "next";
import { blogContent } from "@/data/blog_content";
import { blogPosts } from "@/data/blog";
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
    <div className="w-full bg-zinc-950 min-h-screen text-gray-200">
      <div className="container mx-auto px-6 py-24 max-w-4xl">
        <Link href="/blog" className="text-purple-400 hover:text-white transition-colors mb-8 inline-block font-bold uppercase tracking-widest text-sm">
          ← Back to Blog
        </Link>
        
        <header className="mb-12">
          <span className="text-sm font-bold text-purple-500 uppercase tracking-widest block mb-3">{post.date}</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">{post.title}</h1>
          
          <div className="w-full aspect-video bg-zinc-900 rounded-xl overflow-hidden border border-white/5">
            <SafeImage 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </header>

        <article className="prose prose-invert prose-purple max-w-none prose-lg">
          <div 
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }} 
            className="blog-content text-gray-300 leading-relaxed"
          />
        </article>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(blogContent).map((slug) => ({
    slug: slug,
  }));
}
