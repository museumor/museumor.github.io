import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

// The download page is a client component (it redirects to Steam), so its
// metadata lives here.
export const metadata: Metadata = pageMetadata({
  title: "Download",
  description: "Get the Museum of Other Realities free on Steam for PC VR headsets.",
  path: "/download/",
});

export default function DownloadLayout({ children }: { children: React.ReactNode }) {
  return children;
}
