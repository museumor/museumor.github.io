import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { blogPosts } from "@/data/blog";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "Artist spotlights, behind-the-scenes stories, and event recaps from the Museum of Other Realities.",
  path: "/blog/",
});

export default function BlogPage() {
  return (
    <div className="w-full bg-zinc-950 min-h-screen text-gray-200">
      <div className="container mx-auto px-6 py-24 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-16 text-white text-center">BLOG</h1>
        
        <div className="space-y-16">
          {blogPosts.map((post, index) => (
            <article key={index} className="border-b border-white/10 pb-16 last:border-0">
              {/* Blog Image */}
              <Link href={post.link} className="block w-full aspect-video bg-zinc-900 rounded-lg overflow-hidden mb-8 border border-white/5 hover:border-purple-500/30 transition-all">
                <SafeImage 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
              </Link>

              <span className="text-sm font-bold text-purple-500 uppercase tracking-widest block mb-3">{post.date}</span>
              <h2 className="text-3xl font-bold text-white mb-4 hover:text-purple-400 transition-colors">
                <Link href={post.link}>{post.title}</Link>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                {post.snippet}
              </p>
              <Link href={post.link} className="text-sm font-bold text-white border-b border-white hover:text-purple-400 hover:border-purple-400 transition-colors pb-1">
                Read More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
