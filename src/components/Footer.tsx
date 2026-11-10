import Link from "next/link";
import SafeImage from "./SafeImage";

const linkClass = "block py-2.5 text-ivory transition-colors hover:text-white";

export default function Footer() {
  return (
    <footer className="w-full border-t border-rule bg-ground">
      <div className="shell flex flex-col gap-14 pb-10 pt-16">
        <div className="grid gap-10 md:grid-cols-[2fr_repeat(3,minmax(0,1fr))] md:gap-16">
          <div className="flex max-w-sm flex-col gap-4">
            <SafeImage
              src="/images/logo/MOR_Logomark-forweb_white.png"
              alt="Museum of Other Realities"
              className="h-7 w-auto self-start"
            />
            <p className="text-[15px] leading-relaxed text-muted">
              A social VR museum for immersive art, artist spotlights, and exhibitions that feel like stepping inside a shared dream.
            </p>
            <a
              href="https://store.steampowered.com/app/613900/Museum_of_Other_Realities/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-rule self-start"
            >
              Open on Steam
            </a>
          </div>
          <nav aria-label="Explore" className="text-[15px]">
            <h3 className="eyebrow mb-2">Explore</h3>
            <Link href="/#visit" className={linkClass}>Visit</Link>
            <Link href="/artists" className={linkClass}>Artists</Link>
            <Link href="/collection" className={linkClass}>Collection</Link>
            <Link href="/blog" className={linkClass}>Journal</Link>
          </nav>
          <nav aria-label="About" className="text-[15px]">
            <h3 className="eyebrow mb-2">About</h3>
            <Link href="/about" className={linkClass}>About MOR</Link>
            <Link href="/host-an-event" className={linkClass}>Host an event</Link>
            <Link href="/download" className={linkClass}>Download</Link>
            <Link href="/support" className={linkClass}>Support MOR</Link>
            <Link href="/blog/the-museum-of-other-realities-is-free-to-visit" className={linkClass}>Open access story</Link>
          </nav>
          <nav aria-label="Connect" className="text-[15px]">
            <h3 className="eyebrow mb-2">Connect</h3>
            <a href="mailto:editor@museumor.com" className={linkClass}>Contact</a>
            <a href="https://x.com/MuseumOR" target="_blank" rel="noopener noreferrer" className={linkClass}>X</a>
            <a href="https://www.instagram.com/museumofotherrealities/" target="_blank" rel="noopener noreferrer" className={linkClass}>Instagram</a>
            <a href="https://discord.com/invite/Xmr2wXR" target="_blank" rel="noopener noreferrer" className={linkClass}>Discord</a>
            <a href="https://www.patreon.com/museumofotherrealities" target="_blank" rel="noopener noreferrer" className={linkClass}>Patreon</a>
          </nav>
        </div>

        <div className="flex flex-col justify-between gap-2 border-t border-rule pt-5 text-[13px] text-muted md:flex-row">
          <p>© {new Date().getFullYear()} Museum of Other Realities</p>
          <p>Free to visit on Steam for PC VR headsets</p>
        </div>
      </div>
    </footer>
  );
}
