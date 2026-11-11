import type { MetadataRoute } from "next";
import { blogContent } from "@/data/blog_content";
import { collection } from "@/data/collection";
import { SITE_URL } from "@/lib/metadata";

export const dynamic = "force-static";

const staticRoutes = ["/", "/artists/", "/collection/", "/blog/", "/about/", "/support/", "/host-an-event/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((path) => ({ url: `${SITE_URL}${path}` })),
    ...collection.map((work) => ({ url: `${SITE_URL}/collection/${work.slug}/` })),
    ...Object.keys(blogContent).map((slug) => ({ url: `${SITE_URL}/blog/${slug}/` })),
  ];
}
