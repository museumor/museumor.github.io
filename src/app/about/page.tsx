import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { team } from "@/data/team";
import SafeImage from "@/components/SafeImage";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "What the Museum of Other Realities is, who builds it, and why it is a free, social space for VR art.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <div className="w-full bg-zinc-950 min-h-screen text-gray-200">
      <div className="container mx-auto px-6 py-24 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-12 text-white">ABOUT US</h1>
        
        <section className="mb-20">
          <p className="text-xl leading-relaxed mb-6">
            The Museum of Other Realities (MOR) is an immersive multiplayer art showcase in VR. It is a space to connect, share, and experience virtual reality art with others. 
          </p>
          <p className="text-xl leading-relaxed mb-6">
             The virtual museum is an ongoing, regularly-updated experience. It contains a cross section of the free-ranging experimentation present in the relatively new medium of VR art, supporting artists who are challenging and redefining what is possible.
          </p>
          <p className="text-xl leading-relaxed">
            Together we can discover what this new space means to all of us.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-white border-b border-white/10 pb-4">The Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col gap-4">
                <div className="w-full aspect-[4/3] bg-zinc-900 rounded overflow-hidden">
                  <SafeImage 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                    fallbackSrc={`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random`}
                  />
                </div>
                <div className="flex justify-between items-baseline border-b border-white/5 pb-2">
                  <span className="text-lg font-bold text-white">{member.name}</span>
                  <span className="text-purple-400 text-sm uppercase tracking-wider">{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="press" className="mt-24 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <h2 className="text-sm font-bold tracking-widest text-purple-400 uppercase mb-4">Background</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">What is the MOR?</h3>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                An immersive multiplayer art showcase in VR, the Museum of Other Realities (MOR) is a place to connect, share, and experience virtual reality art with others.
              </p>
              <a 
                href="https://drive.google.com/open?id=1AcVt4Xn9R2gsn9hGl8kr51OqNG-zowqh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-zinc-900 border border-white/20 text-white font-bold rounded hover:bg-white hover:text-black transition-all duration-300"
              >
                View Press kit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            <div className="flex-1 text-gray-400 space-y-6">
              <p>
                The museum contains a cross section of free-ranging, interactive, experimentation present in the relatively new medium of VR art, supporting artists who are challenging and redefining what is possible.
              </p>
              <p>
                VR is still in its infancy as a creative tool and yet artists are already breaking new ground and creating amazing work with it. The same ‘newness’ that gives artists the opportunity to experiment, however, also means that it can be difficult for them to get their work seen by a wider audience as intended. The MOR was created as a way to address this.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-20 pt-12 border-t border-white/10 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Contact Us</h2>
          <p className="text-xl text-gray-400 mb-8">
            Have questions or want to get in touch? We&apos;d love to hear from you.
          </p>
          <a 
            href="mailto:editor@museumor.com" 
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-purple-400 hover:text-white transition-all duration-300"
          >
            Email editor@museumor.com
          </a>
        </section>
      </div>
    </div>
  );
}
