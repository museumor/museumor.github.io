import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.3fr_repeat(3,minmax(0,1fr))]">
          <div className="max-w-sm">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/45">Museum of Other Realities</p>
            <p className="text-sm leading-7 text-gray-300">
              A social VR museum for immersive art, artist spotlights, and exhibitions that feel like stepping inside a shared dream.
            </p>
            <a
              href="https://store.steampowered.com/app/613900/Museum_of_Other_Realities/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-sm text-white transition-colors hover:border-white/30 hover:bg-white/5"
            >
              Open on Steam
            </a>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Explore</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/#visit" className="transition-colors hover:text-white">Visit</Link></li>
              <li><Link href="/artists" className="transition-colors hover:text-white">Artists</Link></li>
              <li><Link href="/collection" className="transition-colors hover:text-white">Collection</Link></li>
              <li><Link href="/blog" className="transition-colors hover:text-white">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">About</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="transition-colors hover:text-white">About MOR</Link></li>
              <li><Link href="/host-an-event" className="transition-colors hover:text-white">Host an Event</Link></li>
              <li><Link href="/download" className="transition-colors hover:text-white">Download Page</Link></li>
              <li><Link href="/blog/the-museum-of-other-realities-is-free-to-visit" className="transition-colors hover:text-white">Open Access Story</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Connect</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="mailto:editor@museumor.com" className="transition-colors hover:text-white">Contact</a></li>
              <li><a href="https://x.com/MuseumOR" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">X</a></li>
              <li><a href="https://www.instagram.com/museumofotherrealities/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">Instagram</a></li>
              <li><a href="https://discord.com/invite/Xmr2wXR" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">Discord</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="text-xs uppercase tracking-[0.16em] text-gray-500">
            © {new Date().getFullYear()} Museum of Other Realities
          </p>
          <div className="text-xs text-gray-500">
            Free to visit on Steam for PC VR headsets
          </div>
        </div>
      </div>
    </footer>
  );
}
