import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import LoopVideo from "@/components/LoopVideo";

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
    <div className="page">
      <div className="flex flex-col gap-6">
        <p className="eyebrow">Support MOR</p>
        <h1 className="page-title max-w-[1040px]">Keep the museum free for everyone who enters.</h1>
        <p className="max-w-[640px] text-soft">
          MOR is not using Patreon as a store, ticket, or exclusive art gate. Patrons keep the open museum possible
          while every exhibition stays free to visit on Steam.
        </p>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
          <a href={patreonUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Become a patron
          </a>
          <Link href="/download" className="link-rule">
            Visit free on Steam
          </Link>
        </div>
      </div>

      <div className="grid gap-x-[72px] gap-y-14 border-t border-brass pt-[clamp(32px,4vw,48px)] md:grid-cols-2">
        <section className="flex flex-col gap-4">
          <p className="eyebrow">What patrons fund</p>
          <h2 className="section-title">The fixed costs behind open access</h2>
          <p className="text-soft">
            Removing the paywall makes MOR easier to enter, share, and revisit. Patron support pays for the less
            visible work that keeps that decision practical.
          </p>
          <ul className="rule-list mt-2 text-[15px]">
            {fundingUses.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <p className="eyebrow">Core community</p>
          <h2 className="section-title">A signal group, not a customer base</h2>
          <p className="text-soft">
            Patreon is for those who wish to support the museum: the small community that reads field notes and helps
            MOR remain alive between public releases.
          </p>
          <ul className="rule-list mt-2 text-[15px]">
            {patronCommunity.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="grid items-center gap-x-[72px] gap-y-8 border-t border-rule pt-[clamp(40px,5vw,64px)] md:grid-cols-2">
        <div className="aspect-video overflow-hidden bg-well">
          <LoopVideo
            src="/images/gifs/sutu-equinoxe-zoom.mp4"
            alt="Immersive artwork inside MOR"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col items-start gap-4">
          <p className="eyebrow">Stewardship</p>
          <h2 className="section-title">Support the space, not a paywall.</h2>
          <p className="text-soft">
            Patrons help MOR stay abundant: more visitors can enter freely, artists have a live context for their
            work, and the museum can keep maintaining the strange rooms that make VR art feel at home.
          </p>
          <a href={patreonUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-2">
            Support on Patreon
          </a>
        </div>
      </section>
    </div>
  );
}
