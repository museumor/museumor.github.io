import type { Metadata } from "next";

export const SITE_URL = "https://www.museumor.com";
export const SITE_NAME = "Museum of Other Realities";
export const DEFAULT_OG_IMAGE = "/images/og/default.jpg";

interface PageMetadataOptions {
  // Page title; the layout's template appends " | Museum of Other Realities".
  title: string;
  description: string;
  // Route path with a trailing slash, e.g. "/about/".
  path: string;
  image?: string;
  type?: "website" | "article";
  // Use the title as-is instead of applying the layout template.
  absoluteTitle?: boolean;
}

// Next.js replaces (not merges) a parent's openGraph/twitter objects when a
// page sets its own, so every page builds the full set here.
export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  absoluteTitle = false,
}: PageMetadataOptions): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      siteName: SITE_NAME,
      locale: "en_US",
      url: path,
      title: fullTitle,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@MuseumOR",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
