import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { artists } from "@/data/artists";
import SafeImage from "@/components/SafeImage";

export const metadata: Metadata = pageMetadata({
  title: "Artists",
  description:
    "Meet the illustrators, animators, and engineers pushing the boundaries of interactive art and new media in the MOR.",
  path: "/artists/",
});

export default function ArtistsPage() {
  return (
    <div className="w-full bg-black min-h-screen text-gray-200">
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white text-center">ARTISTS</h1>
        <p className="text-xl text-center max-w-2xl mx-auto mb-20 text-gray-400">
          Meet the illustrators, animators, and engineers pushing the boundaries of interactive art and new media within the MOR.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <div key={artist.name} className="bg-zinc-900/50 p-8 rounded-xl border border-white/5 hover:border-purple-500/50 transition-colors group flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 bg-zinc-800 border-2 border-white/10 group-hover:border-purple-500 transition-colors">
                <SafeImage 
                  src={artist.image} 
                  alt={artist.name}
                  className="w-full h-full object-cover"
                  fallbackSrc={`https://ui-avatars.com/api/?name=${encodeURIComponent(artist.name)}&background=random`}
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{artist.name}</h3>
              {artist.role && (
                 <p className="text-xs font-bold text-purple-500 uppercase tracking-widest mb-4">{artist.role}</p>
              )}
              <p className="text-gray-400 text-sm leading-relaxed">{artist.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
