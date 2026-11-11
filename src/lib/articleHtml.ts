import DOMPurify from "isomorphic-dompurify";
import { fixLegacyLinks } from "@/lib/legacyLinks";

// Only these players may be embedded in an article. Keep this list in step
// with `frame-src` in the Content-Security-Policy in app/layout.tsx.
const ALLOWED_EMBED = /^https:\/\/(www\.youtube-nocookie\.com\/embed\/|player\.vimeo\.com\/video\/)/;

DOMPurify.addHook("uponSanitizeElement", (node, data) => {
  if (data.tagName !== "iframe") return;
  const el = node as Element;
  if (!ALLOWED_EMBED.test(el.getAttribute("src") ?? "")) el.remove();
});

// Clean an article's stored HTML for display: repoint old-site links, keep
// YouTube and Vimeo embeds (YouTube through its no-cookie player), and strip
// everything else the sanitizer does not allow.
export function articleHtml(html: string): string {
  const prepared = fixLegacyLinks(html)
    .replace(/https:\/\/www\.youtube\.com\/embed\//g, "https://www.youtube-nocookie.com/embed/")
    .replace(/<iframe /g, '<iframe loading="lazy" title="Embedded video" ');
  return DOMPurify.sanitize(prepared, {
    ADD_TAGS: ["iframe"],
    ADD_ATTR: ["allowfullscreen", "frameborder", "scrolling", "loading"],
  });
}
