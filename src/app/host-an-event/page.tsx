import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
export const metadata: Metadata = pageMetadata({
  title: "Host an Event",
  description:
    "Host your exhibition opening, festival, or private gathering inside the Museum of Other Realities, a social VR venue.",
  path: "/host-an-event/",
});

export default function HostEventPage() {
  return (
    <div className="w-full bg-zinc-950 min-h-screen text-gray-200">
      <div className="container mx-auto px-6 py-24 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-12 text-white">HOST AN EVENT</h1>
        
        <section className="mb-16">
          <p className="text-xl leading-relaxed mb-6">
            The Museum of Other Realities is the perfect venue for your next virtual event. 
            Whether it&apos;s an exhibition opening, a festival, or a private gathering, we offer a unique, immersive space that defies the laws of physics.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Why Host With Us?</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start"><span className="text-purple-500 mr-2">✓</span> Unforgettable immersive environments</li>
              <li className="flex items-start"><span className="text-purple-500 mr-2">✓</span> Global reach for your audience</li>
              <li className="flex items-start"><span className="text-purple-500 mr-2">✓</span> Custom branding opportunities</li>
              <li className="flex items-start"><span className="text-purple-500 mr-2">✓</span> Professional audio/visual support</li>
            </ul>
          </div>
          <div className="bg-zinc-900 p-8 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
            <p className="mb-6 text-sm text-gray-400">Email us to discuss your event requirements.</p>
            <a 
              href="mailto:editor@museumor.com"
              className="block w-full py-3 bg-white text-black text-center font-bold uppercase tracking-widest rounded hover:bg-purple-500 hover:text-white transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
