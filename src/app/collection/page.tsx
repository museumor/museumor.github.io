import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { collection } from "@/data/collection";
import CollectionIndex from "@/components/CollectionIndex";

export const metadata: Metadata = pageMetadata({
  title: "The Collection",
  description:
    "Explore the MOR collection: artwork created with virtual reality tools or made for VR viewing, from Tilt Brush to Quill.",
  path: "/collection/",
});

export default function CollectionPage() {
  return (
    <div className="shell flex flex-col gap-[clamp(48px,6vw,80px)] pb-[clamp(72px,9vw,120px)] pt-[clamp(48px,6vw,88px)] text-[17px] leading-relaxed">
      <div className="flex flex-wrap items-end gap-x-[72px] gap-y-6">
        <h1 className="display min-w-0 flex-[1_1_420px] text-[clamp(44px,6.4vw,96px)] leading-none !tracking-[-0.025em]">
          The Collection
        </h1>
        <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-2.5">
          <p className="text-soft">Artwork created with virtual reality tools or intended for VR viewing.</p>
          <p className="text-sm text-muted">
            Tools: Compute Shaders, Substance Painter, Houdini, Oculus Medium, MasterpieceVR, Gravity Sketch, Tilt
            Brush, and more.
          </p>
        </div>
      </div>

      <CollectionIndex works={collection} />
    </div>
  );
}
