import type { Metadata } from "next";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { blogPosts } from "@/data/blog";

const steamUrl = "https://store.steampowered.com/app/613900/Museum_of_Other_Realities/";
const trailerUrl = "https://www.youtube.com/watch?v=zUtqvp1LIcM";

const pillars = [
  {
    title: "Shared Presence",
    description:
      "Walk the museum together, meet people inside the work, and experience immersive art as a social ritual instead of a solitary scroll.",
  },
  {
    title: "Living Exhibitions",
    description:
      "MOR evolves through new rooms, special events, festival partnerships, and artist releases that reward coming back.",
  },
  {
    title: "Artist Support",
    description:
      "The museum pays and promotes featured artists while giving experimental VR work a stage built for wonder instead of compromise.",
  },
];

const featuredWorks = [
  {
    title: "Night Snow",
    artist: "Dani Bittman",
    description: "Glowing architecture suspended somewhere between memory, weather, and teleportation.",
    image: "/images/gifs/bittman-night-snow-teleport.gif",
    href: "/artists",
    span: "lg:col-span-7",
  },
  {
    title: "Immateria",
    artist: "Isaac Cohen",
    description: "Shape-shifting matter and impossible bodies that feel native to VR.",
    image: "/images/gifs/cabbibo-immateria.gif",
    href: "/collection",
    span: "lg:col-span-5",
  },
  {
    title: "Terrarium",
    artist: "Durk van der Meer",
    description: "A chamber-sized ecosystem where scale, architecture, and atmosphere all drift out of the ordinary.",
    image: "/images/gifs/vandermeer-terrarium.gif",
    href: "/collection",
    span: "lg:col-span-4",
  },
  {
    title: "Alex's Sci-Fi World",
    artist: "Nick Ladd",
    description: "Hand-drawn world-building that turns animated illustration into someplace you can inhabit.",
    image: "/images/gifs/ladd-alexs-scifi-world.gif",
    href: "/artists",
    span: "lg:col-span-4",
  },
  {
    title: "Blortasia",
    artist: "Kevin Mack",
    description: "Abstract VR sculpture and color fields with the scale and strangeness of a lucid dream.",
    image: "/images/gifs/kevin-mac-art-blort.gif",
    href: "/collection",
    span: "lg:col-span-4",
  },
];

const featuredArtists = [
  {
    name: "Dani Bittman",
    role: "Immersive design for Marvel, Google, Hyundai, and more",
    image: "/images/gifs/bittman-night-snow.gif",
  },
  {
    name: "Isaac Cohen",
    role: "VR artist exploring new paradigms for embodied experience",
    image: "/images/gifs/cabbibo-fish.gif",
  },
  {
    name: "Ana Duncan",
    role: "Fashion-forward world building shaped by retro sci-fi and illustration",
    image: "/images/gifs/tilt-couture.gif",
  },
  {
    name: "Sutu",
    role: "Interactive comics, animation, and VR storytelling with kinetic motion",
    image: "/images/gifs/sutu-equinoxe-zoom.gif",
  },
  {
    name: "Kris Pilcher",
    role: "Installation-scale XR work that pushes color, space, and spectacle",
    image: "/images/gifs/tesseract.gif",
  },
  {
    name: "Sean Tann",
    role: "Chromatic environments built for wonder and spatial play",
    image: "/images/gifs/sean-tann-chromawave-better.gif",
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
    className: "h-8 md:h-10",
  },
  {
    name: "VIFF",
    image: "/images/logo/VIFF_Logo_WEB.png",
    className: "h-8 md:h-10 invert",
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

export const metadata: Metadata = {
  title: "Free Social VR Art Museum",
  description:
    "MOR is a free, multiplayer VR museum for immersive art. Visit with friends, explore evolving exhibitions from 20+ artists.",
};

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-white/10 blur-[180px]" />
        <div className="absolute left-[-8rem] top-[34rem] h-[24rem] w-[24rem] rounded-full bg-white/5 blur-[160px]" />
        <div className="absolute right-[-8rem] top-[62rem] h-[24rem] w-[24rem] rounded-full bg-white/5 blur-[160px]" />
      </div>

      <section className="relative -mt-16 flex min-h-[82vh] w-full items-center justify-center overflow-hidden bg-black" id="visit">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="/images/home/Hero-NightSnow.jpg"
            alt="Museum of Other Realities"
            className="h-full w-full object-cover opacity-60"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/42 via-black/54 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_34%)]" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-6 pb-20 pt-36 md:pt-40">
          <div className="max-w-4xl">
            <h1 className="max-w-3xl text-4xl font-light leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Museum of
              <br />
              Other Realities
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
              An immersive social VR art museum where you step inside paintings, drift through impossible architecture,
              and experience exhibitions with friends from anywhere.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={steamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-medium text-black transition-transform hover:-translate-y-0.5 hover:bg-white/90 sm:min-w-[210px]"
              >
                Visit Free on Steam
              </a>
              <a
                href={trailerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/20 bg-black/20 px-7 text-sm font-medium text-white backdrop-blur transition-colors hover:border-white/35 hover:bg-white/10 sm:min-w-[210px]"
              >
                Watch Trailer
              </a>
              <Link
                href="/#artists"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-7 text-sm font-medium text-white/80 transition-colors hover:border-white/25 hover:text-white sm:min-w-[210px]"
              >
                Explore Artists
              </Link>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-black/35 p-5 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.28em] text-white/45">Open Access</p>
              <p className="mt-3 text-sm leading-7 text-white/75">
                The paywall is gone, opening the museum to more visitors thanks to early supporters and the community that helped build it.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-black/35 p-5 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.28em] text-white/45">Social VR</p>
              <p className="mt-3 text-sm leading-7 text-white/75">
                Wander the museum together, meet artists, and treat immersive art like a shared event rather than a static gallery wall.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-black/35 p-5 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.28em] text-white/45">Evolving Program</p>
              <p className="mt-3 text-sm leading-7 text-white/75">
                Festival collaborations, artist spotlights, and regularly refreshed exhibitions keep the museum alive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">Why MOR Matters</p>
            <p className="mt-5 max-w-4xl text-2xl font-light leading-[1.45] text-white/88 md:text-[2rem]">
              MOR gives immersive art the kind of stage it deserves: not a menu of thumbnails, but a place where scale,
              sound, architecture, and community can all work together.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7">
            <p className="text-sm leading-8 text-white/68">
              A community of creators, explorers, and artists, the museum connects people through new media from all over
              the world. It is part exhibition space, part social venue, and part argument for what VR art can become.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-white/40">Pillar</p>
              <h2 className="mt-5 text-2xl font-medium text-white">{pillar.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/68">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="exhibitions" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">Living Exhibitions</p>
            <h2 className="mt-4 text-3xl font-medium text-white md:text-5xl">A museum built for motion, scale, and surprise</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/65">
            Instead of a flat artist grid, this front page treats the work itself as the invitation. The motion below is
            sourced from the pieces and keeps the site closer to the feeling of entering MOR.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          {featuredWorks.map((work, index) => (
            <a
              key={work.title}
              href={work.href}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 ${work.span}`}
            >
              <div className={`relative ${index === 0 ? "aspect-[16/11]" : "aspect-[4/3]"} overflow-hidden`}>
                <SafeImage
                  src={work.image}
                  alt={`${work.title} by ${work.artist}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs uppercase tracking-[0.26em] text-white/50">{work.artist}</p>
                <h3 className="mt-3 text-2xl font-medium text-white">{work.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/72">{work.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="artists" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">Featured Artists</p>
            <h2 className="mt-4 text-3xl font-medium text-white md:text-5xl">Artists shaping the museum</h2>
          </div>
          <Link
            href="/artists"
            className="inline-flex items-center rounded-full border border-white/12 px-5 py-3 text-sm text-white/80 transition-colors hover:border-white/25 hover:text-white"
          >
            View all artists
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredArtists.map((artist) => (
            <Link
              key={artist.name}
              href="/artists"
              className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]"
            >
              <div className="aspect-[5/4] overflow-hidden">
                <SafeImage
                  src={artist.image}
                  alt={artist.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-medium text-white">{artist.name}</h3>
                <p className="mt-3 text-sm leading-7 text-white/68">{artist.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-white/45">Press</p>
        <h2 className="mt-4 text-3xl font-medium text-white md:text-5xl">What it feels like to walk inside</h2>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {quotes.map((quote) => (
            <blockquote
              key={quote.source}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-left"
            >
              <p className="text-lg font-light leading-8 text-white/88">&ldquo;{quote.quote}&rdquo;</p>
              <footer className="mt-6 text-xs uppercase tracking-[0.22em] text-white/45">{quote.source}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-white/45">Collaborators</p>
        <h2 className="mt-4 text-3xl font-medium text-white">Festival and cultural partners</h2>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <SafeImage
              key={partner.name}
              src={partner.image}
              alt={partner.name}
              className={`${partner.className} w-auto opacity-70 transition-opacity hover:opacity-100`}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/[0.06] via-red-900/10 to-white/[0.03] p-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">Free Story</p>
            <h2 className="mt-3 text-2xl font-medium text-white">Paywall removed. The museum is now open to more people.</h2>
            <p className="mt-4 text-sm leading-7 text-white/70">
              MOR stays open today thanks to the people who supported it early and the artists who gave it a reason to exist.
            </p>
          </div>
          <Link
            href="/blog/the-museum-of-other-realities-is-free-to-visit"
            className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/15 bg-black/25 px-6 text-sm font-medium text-white transition-colors hover:bg-black/40"
          >
            Read the Story
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">From the Blog</p>
            <h2 className="mt-4 text-3xl font-medium text-white md:text-5xl">Context around the work</h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center rounded-full border border-white/12 px-5 py-3 text-sm text-white/80 transition-colors hover:border-white/25 hover:text-white"
          >
            View all articles
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={post.link}
              className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]"
            >
              <div className="aspect-[16/10] overflow-hidden bg-gray-800">
                <SafeImage
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-white/40">{post.date}</p>
                <h3 className="mt-3 text-xl font-medium leading-8 text-white">{post.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{post.snippet}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
    </div>
  );
}
