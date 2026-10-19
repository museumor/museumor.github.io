import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import LoopVideo from "@/components/LoopVideo";
import SafeImage from "@/components/SafeImage";

const patreonUrl = "https://www.patreon.com/museumofotherrealities";

const fundingUses = [
  "Multiplayer servers and shared-world infrastructure",
  "Unity updates, maintenance, and compatibility work",
  "Steam hosting, build upkeep, and release operations",
  "Archiving so exhibitions and artist rooms remain accessible",
];

const patronCommunity = [
  "Behind-the-scenes notes from the museum",
  "A small signal group helping shape what stays alive",
];

export const metadata: Metadata = pageMetadata({
  title: "Support MOR",
  description:
    "Support the Museum of Other Realities on Patreon and help keep the free social VR museum open for everyone.",
  path: "/support/",
});

export default function SupportPage() {
  return (
    <div className="w-full bg-black text-white">
      <section className="relative min-h-[72vh] overflow-hidden">
        <div className="absolute inset-0">
          <SafeImage
            src="/images/home/Hero-NightSnow.jpg"
            alt="Museum of Other Realities gallery space"
            className="h-full w-full object-cover opacity-58"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/42 via-black/68 to-black" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col justify-end px-6 pb-16 pt-36">
          <p className="text-xs uppercase tracking-[0.34em] text-white/52">Support MOR</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-light leading-[1.02] text-white md:text-6xl">
            Keep the museum free for everyone who enters.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
            MOR is not using Patreon as a store, ticket, or exclusive art gate. Patrons keep the open museum possible
            while every exhibition stays free to visit on Steam.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={patreonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-7 text-sm font-medium text-black transition-transform hover:-translate-y-0.5 hover:bg-white/90 sm:min-w-[220px]"
            >
              Become a Patron
            </a>
            <Link
              href="/download"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/15 bg-black/20 px-7 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/5 sm:min-w-[220px]"
            >
              Visit Free on Steam
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-6 py-24 md:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-white/45">What Patrons Fund</p>
          <h2 className="mt-4 text-3xl font-medium text-white">The fixed costs behind open access</h2>
          <p className="mt-5 text-sm leading-7 text-white/68">
            Removing the paywall makes MOR easier to enter, share, and revisit. Patron support pays for the less visible
            work that keeps that decision practical.
          </p>
          <ul className="mt-8 space-y-4 text-sm leading-7 text-white/76">
            {fundingUses.map((item) => (
              <li key={item} className="border-t border-white/10 pt-4">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-white/45">Core Community</p>
          <h2 className="mt-4 text-3xl font-medium text-white">A signal group, not a customer base</h2>
          <p className="mt-5 text-sm leading-7 text-white/68">
            Patreon is for those who wish to support the museum: the small community that reads field notes and helps
            MOR remain alive between public releases.
          </p>
          <ul className="mt-8 space-y-4 text-sm leading-7 text-white/76">
            {patronCommunity.map((item) => (
              <li key={item} className="border-t border-white/10 pt-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 md:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[20rem]">
            <LoopVideo
              src="/images/gifs/sutu-equinoxe-zoom.mp4"
              alt="Immersive artwork inside MOR"
              className="h-full w-full object-cover opacity-82"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">Stewardship</p>
            <h2 className="mt-4 text-3xl font-medium text-white md:text-4xl">
              Support the space, not a paywall.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/70">
              Patrons help MOR stay abundant: more visitors can enter freely, artists have a live context for their work,
              and the museum can keep maintaining the strange rooms that make VR art feel at home.
            </p>
            <a
              href={patreonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-14 w-fit items-center justify-center rounded-full bg-white px-7 text-sm font-medium text-black transition-transform hover:-translate-y-0.5 hover:bg-white/90"
            >
              Support on Patreon
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
