import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { collection } from "@/data/collection";
import SafeImage from "@/components/SafeImage";

export const metadata: Metadata = pageMetadata({
  title: "The Collection",
  description:
    "Explore the MOR collection: artwork created with virtual reality tools or made for VR viewing, from Tilt Brush to Quill.",
  path: "/collection/",
});

export default function CollectionPage() {
  return (
    <div className="w-full bg-black min-h-screen text-gray-200">
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white text-center">THE COLLECTION</h1>
        <p className="text-xl text-center max-w-3xl mx-auto mb-16 text-gray-400">
          Featuring artwork created with virtual reality tools or intended for VR viewing. 
          <br/>
          <span className="text-sm mt-4 block opacity-60">
            Tools: Compute Shaders, Substance Painter, Houdini, Oculus Medium, MasterpieceVR, Gravity Sketch, Tilt Brush, and more.
          </span>
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {collection.map((work, index) => (
            <div key={index} className="bg-zinc-900 border border-white/5 p-6 rounded-lg hover:bg-zinc-800 hover:border-purple-500/30 transition-all group">
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-black mb-4 rounded overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
                 <SafeImage 
                   src={work.image} 
                   alt={work.title}
                   className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                 />
                 {/* Fallback Initials (only visible if img fails/hides) */}
                 <div className="absolute inset-0 flex items-center justify-center -z-10">
                    <span className="text-9xl font-black text-white/5">{work.title.charAt(0)}</span>
                 </div>
              </div>
              <h3 className="text-lg font-bold text-white truncate group-hover:text-purple-400 transition-colors">{work.title}</h3>
              <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                <span className="truncate mr-2">{work.artist}</span>
                <span>{work.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
