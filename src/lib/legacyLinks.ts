import { artists } from "@/data/artists";
import { blogPosts } from "@/data/blog";
import { collection } from "@/data/collection";

const artworkSlugs = new Set(collection.map((work) => work.slug));
const artistSlugs = new Set(artists.map((artist) => artist.slug));
const postSlugs = new Set(blogPosts.map((post) => post.slug));

// Where an old-site path lives now, or null to leave the link as written.
function currentPath(path: string): string | null {
  const [, section, ...rest] = path.replace(/\/+$/, "").split("/");
  const slug = rest[rest.length - 1];

  if (section === "artwork" && slug) {
    return artworkSlugs.has(slug) ? `/collection/${slug}/` : "/collection/";
  }
  if (section === "artists" && slug) {
    return artistSlugs.has(slug) ? `/artists/#${slug}` : "/artists/";
  }
  // Posts used to sit under a category folder, e.g. /blog/artist-spotlight/<slug>.
  if (section === "blog" && rest.length > 1) {
    return postSlugs.has(slug) ? `/blog/${slug}/` : "/blog/";
  }
  if (section === "contact" || section === "contact-us") {
    return "/about/";
  }
  return null;
}

// Journal posts were written for the previous site and still link to its
// routes (/artwork/..., /artists/<name>, /blog/<category>/...). Point those
// links at the pages that replaced them.
export function fixLegacyLinks(html: string): string {
  return html.replace(/href="(\/[^"#?]*)([^"]*)"/g, (match, path: string, suffix: string) => {
    const next = currentPath(path);
    return next ? `href="${next}${next.includes("#") ? "" : suffix}"` : match;
  });
}
