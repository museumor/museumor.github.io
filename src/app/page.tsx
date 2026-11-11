import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import HeroSlides, { type HeroSlide } from "@/components/HeroSlides";
import LoopVideo from "@/components/LoopVideo";
import OnView, { type OnViewWork } from "@/components/OnView";
import PressQuotes from "@/components/PressQuotes";
import SafeImage from "@/components/SafeImage";
import { postsByDate } from "@/lib/posts";

const steamUrl = "https://store.steampowered.com/app/613900/Museum_of_Other_Realities/";
const trailerUrl = "https://www.youtube.com/watch?v=zUtqvp1LIcM";

// "On view" and the featured artists below never show the same piece.
const onViewWorks: OnViewWork[] = [
  {
    title: "Immateria",
    artist: "Isaac Cohen",
    year: "2020",
    description: "Shape-shifting matter and impossible bodies that feel native to VR.",
    video: "/images/gifs/cabbibo-immateria.mp4",
    href: "/collection/immateria",
  },
  {
    title: "Terrarium",
    artist: "Durk van der Meer",
    year: "2019",
    description: "A chamber-sized ecosystem where scale, architecture, and atmosphere all drift out of the ordinary.",
    video: "/images/gifs/vandermeer-terrarium.mp4",
    href: "/collection/terrarium",
  },
  {
    title: "Alex's Sci-Fi World",
    artist: "Matt Schaefer",
    year: "2018",
    description: "Hand-drawn world-building that turns animated illustration into someplace you can inhabit.",
    video: "/images/gifs/ladd-alexs-scifi-world.mp4",
    href: "/collection/alexs-sci-fi-world",
  },
  {
    title: "Blort",
    artist: "Kevin Mack",
    year: "2017",
    description: "Abstract VR sculpture and color fields with the scale and strangeness of a lucid dream.",
    video: "/images/gifs/kevin-mac-art-blort.mp4",
    href: "/collection/blort",
  },
];

const heroSlides: HeroSlide[] = [
  {
    image: "/images/home/Hero-NightSnow.jpg",
    alt: "Night Snow by Dani Bittman: a floating island of bare trees inside pale, curving museum architecture",
    title: "Night Snow",
    credit: "Dani Bittman, 2017",
  },
  {
    image: "/images/home/gallery-community.jpg",
    alt: "Coloured sculptural forms floating in a dark gallery of the museum",
    title: "Gallery view",
    credit: "Museum of Other Realities",
  },
];

// `work` names the piece in the clip where we know it.
const featuredArtists = [
  {
    name: "Dani Bittman",
    role: "Immersive design for Marvel, Google, Hyundai, and more",
    video: "/images/gifs/bittman-night-snow.mp4",
    work: "Night Snow, 2017",
  },
  {
    name: "Isaac Cohen",
    role: "VR artist exploring new paradigms for embodied experience",
    video: "/images/gifs/cabbibo-fish.mp4",
  },
  {
    name: "Ana Duncan",
    role: "Fashion-forward world building shaped by retro sci-fi and illustration",
    video: "/images/gifs/tilt-couture.mp4",
    work: "Tilt Couture",
  },
  {
    name: "Sutu",
    role: "Interactive comics, animation, and VR storytelling with kinetic motion",
    video: "/images/gifs/sutu-equinoxe-zoom.mp4",
  },
  {
    name: "Kris Pilcher",
    role: "Installation-scale XR work that pushes color, space, and spectacle",
    video: "/images/gifs/tesseract.mp4",
    work: "Quantum Tesseract, 2020",
  },
  {
    name: "Sean Tann",
    role: "Chromatic environments built for wonder and spatial play",
    video: "/images/gifs/sean-tann-chromawave-better.mp4",
    work: "Chroma Wave, 2017",
  },
];

const pillars = [
  {
    title: "Open access",
    body: "The paywall is gone, opening the museum to more visitors thanks to early supporters and the community that helped build it.",
  },
  {
    title: "Seen together",
    body: "Wander the museum with friends, meet artists, and treat immersive art like a shared event rather than a static gallery wall.",
  },
  {
    title: "An evolving programme",
    body: "Festival collaborations, artist spotlights, and regularly refreshed exhibitions keep the museum alive.",
  },
];

const quotes = [
  {
    quote: "I've never found myself saying 'wow' as many times as I did looking through each room...",
    source: "UploadVR",
  },
  {
    quote: "The MOR is an experience, not a game or a demo... mind completely blown.",
    source: "Forbes",
  },
  {
    quote: "multi-dimensional madness and portals to impossible scenery.",
    source: "Rock Paper Shotgun",
  },
];

const partners = [
  {
    name: "Cannes XR",
    image: "/images/logo/CANNES_XR_LOGO_2019.png",
    className: "h-10 md:h-12",
  },
  {
    name: "Tribeca",
    image: "/images/logo/Tribeca Logo.png",
    className: "h-10 md:h-12",
  },
  {
    name: "Verizon Media",
    image: "/images/logo/Verizon_Media_2019_logo white.png",
    className: "h-8 md:h-10",
  },
  {
    name: "New Images Festival",
    image: "/images/logo/FDI_NewImages-Festival-white.png",
    className: "h-10 md:h-12",
  },
  {
    name: "Kaleidoscope",
    image: "/images/logo/Kaleidoscope_logo.png",
    className: "h-7 md:h-8",
  },
  {
    name: "VIFF",
    image: "/images/logo/VIFF_Logo_WEB.png",
    className: "h-7 md:h-8 invert",
  },
  {
    name: "National Film Board of Canada",
    image: "/images/logo/NFB_Logo_white.svg",
    className: "h-8 md:h-10",
  },
  {
    name: "Canada Media Fund",
    image: "/images/logo/CMF_Logo_white.png",
    className: "h-9 md:h-11",
  },
];

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Museum of Other Realities",
  applicationCategory: "GameApplication",
  operatingSystem: "Windows",
  description:
    "MOR is a free, multiplayer VR museum for immersive art. Visit with friends, explore evolving exhibitions from 20+ artists.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  url: "https://museumor.com",
};

export const metadata: Metadata = pageMetadata({
  title: "Museum of Other Realities | Free Social VR Art Museum",
  description:
    "MOR is a free, multiplayer VR museum for immersive art. Visit with friends, explore evolving exhibitions from 20+ artists.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <div className="w-full bg-ground text-[17px] leading-relaxed text-ivory">
      <HeroSlides slides={heroSlides}>
        <h1 className="display text-[clamp(40px,5.6vw,80px)] leading-[1.02] !tracking-[-0.02em]">
          Museum of
          <br />
          Other Realities
        </h1>
        <p className="max-w-[520px]">
          A social VR art museum. Step inside the work, at a scale no screen can hold, with friends from anywhere.
        </p>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
          <a href={steamUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Visit free on Steam
          </a>
          <a href={trailerUrl} target="_blank" rel="noopener noreferrer" className="link-rule">
            Watch the trailer
          </a>
        </div>
      </HeroSlides>

      {/* The hero image fades into the page ground; the organisations the
          museum has worked with sit in the quiet space that follows. */}
      <section
        aria-label="Festivals and partners"
        className="shell flex flex-col items-center gap-9 pb-[clamp(24px,3vw,40px)] pt-[clamp(56px,7vw,104px)]"
      >
        <p className="eyebrow text-center">Festivals and partners over the years</p>
        <ul className="flex max-w-[640px] flex-wrap items-center justify-center gap-x-[clamp(32px,3vw,44px)] gap-y-8 xl:max-w-none">
          {partners.map((partner) => (
            <li key={partner.name}>
              <SafeImage
                src={partner.image}
                alt={partner.name}
                className={`${partner.className} w-auto opacity-60 transition-opacity duration-300 hover:opacity-100`}
              />
            </li>
          ))}
        </ul>
      </section>

      <section id="exhibitions" className="shell section-y">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
          <div className="flex flex-col gap-3.5">
            <p className="eyebrow">On view</p>
            <h2 className="display text-[clamp(34px,4vw,56px)] leading-[1.05]">Worlds waiting inside</h2>
          </div>
          <Link href="/collection" className="link-rule">
            Browse the full collection
          </Link>
        </div>
        <OnView works={onViewWorks} />
      </section>

      <section aria-label="About the museum" className="border-t border-rule">
        <div className="shell section-y flex flex-col gap-[clamp(48px,6vw,72px)]">
          <div className="flex flex-wrap gap-x-[72px] gap-y-8">
            <h2 className="display min-w-0 flex-[1_1_480px] text-[clamp(30px,3.4vw,48px)] leading-[1.12]">
              Immersive art deserves a stage, not a menu of thumbnails: a place where scale, sound, architecture and
              community work together.
            </h2>
            <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-4 text-soft">
              <p>
                A community of creators, explorers and artists, the museum connects people through new media from all
                over the world. It is part exhibition space, part social venue, and part argument for what VR art can
                become.
              </p>
              <p>The museum pays and promotes the artists it features.</p>
            </div>
          </div>

          <figure className="flex flex-col gap-3">
            <div className="aspect-[21/9] overflow-hidden bg-well">
              <SafeImage
                src="/images/home/gallery-community.jpg"
                alt="Coloured sculptural forms floating in a dark gallery of the museum"
                className="settle h-full w-full object-cover"
              />
            </div>
            <figcaption className="text-[13px] text-muted">Gallery view, Museum of Other Realities</figcaption>
          </figure>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex flex-col gap-2 border-t border-brass pt-[18px]">
                <h3 className="display text-[26px] leading-tight">{pillar.title}</h3>
                <p className="text-[15px] text-muted">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Press" className="border-t border-rule">
        <div className="section-y mx-auto flex w-full max-w-[1040px] flex-col gap-8 px-[clamp(20px,5vw,80px)]">
          <p className="eyebrow">Press</p>
          <PressQuotes quotes={quotes} />
        </div>
      </section>

      <section id="artists" className="border-t border-rule">
        <div className="shell section-y">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
            <div className="flex flex-col gap-3.5">
              <p className="eyebrow">Artists</p>
              <h2 className="display text-[clamp(34px,4vw,56px)] leading-[1.05]">The people shaping the museum</h2>
            </div>
            <Link href="/artists" className="link-rule">
              View all artists
            </Link>
          </div>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {featuredArtists.map((artist) => (
              <Link key={artist.name} href="/artists" className="group flex flex-col gap-1">
                <div className="mb-2.5 aspect-video overflow-hidden bg-well">
                  <LoopVideo
                    src={artist.video}
                    alt={artist.work ? `${artist.work.split(",")[0]} by ${artist.name}` : `Work by ${artist.name}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="font-heading text-[28px] font-normal leading-[1.15] transition-colors group-hover:text-white">
                  {artist.name}
                </h3>
                {artist.work && <p className="font-heading text-[17px] italic text-soft">{artist.work}</p>}
                <p className="text-[15px] text-muted">{artist.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="border-t border-rule bg-panel">
        <div className="shell section-y flex flex-col gap-16">
          <div className="flex flex-wrap gap-x-[72px] gap-y-8">
            <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-3.5">
              <p className="eyebrow">Keep MOR free</p>
              <h2 className="display text-[clamp(34px,4vw,56px)] leading-[1.05]">Patrons fund access for everyone.</h2>
            </div>
            <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-7">
              <p className="text-soft">
                Patreon covers the fixed costs behind an open museum: multiplayer servers, Unity updates, Steam
                hosting, archiving, and the care needed to keep VR art available without a ticket at the door.
              </p>
              <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
                <Link href="/support" className="btn-primary">
                  Become a patron
                </Link>
                <Link href="/blog/the-museum-of-other-realities-is-free-to-visit" className="link-rule">
                  Read the open access story
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="journal" className="border-t border-rule">
        <div className="shell section-y">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
            <div className="flex flex-col gap-3.5">
              <p className="eyebrow">Journal</p>
              <h2 className="display text-[clamp(34px,4vw,56px)] leading-[1.05]">From the archive</h2>
            </div>
            <Link href="/blog" className="link-rule">
              View all articles
            </Link>
          </div>
          <div className="border-b border-rule">
            {postsByDate.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={post.link}
                className="group flex flex-wrap items-baseline gap-x-10 gap-y-1 border-t border-rule py-[22px]"
              >
                <span className="w-[120px] text-[13px] uppercase tracking-[0.1em] text-muted">{post.date}</span>
                <span className="flex-[1_1_320px] font-heading text-[clamp(24px,2.2vw,30px)] leading-tight transition-colors group-hover:text-white">
                  {post.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
    </div>
  );
}
