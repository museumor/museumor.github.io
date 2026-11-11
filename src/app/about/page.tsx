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
    <div className="page">
      <div className="flex flex-wrap items-start gap-x-[72px] gap-y-8">
        <h1 className="page-title min-w-0 flex-[1_1_360px]">About</h1>
        <div className="flex min-w-0 flex-[1.4_1_440px] flex-col gap-5">
          <p className="display text-[clamp(24px,2.4vw,32px)] leading-[1.3]">
            The Museum of Other Realities (MOR) is an immersive multiplayer art showcase in VR. It is a space to
            connect, share, and experience virtual reality art with others.
          </p>
          <p className="text-soft">
            The virtual museum is an ongoing, regularly-updated experience. It contains a cross section of the
            free-ranging experimentation present in the relatively new medium of VR art, supporting artists who are
            challenging and redefining what is possible.
          </p>
          <p className="text-soft">Together we can discover what this new space means to all of us.</p>
        </div>
      </div>

      <section id="press" className="flex flex-wrap gap-x-[72px] gap-y-8 border-t border-rule pt-[clamp(40px,5vw,64px)]">
        <div className="flex min-w-0 flex-[1_1_360px] flex-col items-start gap-3.5">
          <p className="eyebrow">Background</p>
          <h2 className="section-title">What is the MOR?</h2>
          <a
            href="https://drive.google.com/open?id=1AcVt4Xn9R2gsn9hGl8kr51OqNG-zowqh"
            target="_blank"
            rel="noopener noreferrer"
            className="link-rule"
          >
            View the press kit
          </a>
        </div>
        <div className="flex min-w-0 flex-[1.4_1_440px] flex-col gap-5 text-soft">
          <p>
            The museum contains a cross section of free-ranging, interactive, experimentation present in the
            relatively new medium of VR art, supporting artists who are challenging and redefining what is possible.
          </p>
          <p>
            VR is still in its infancy as a creative tool and yet artists are already breaking new ground and creating
            amazing work with it. The same ‘newness’ that gives artists the opportunity to experiment, however, also
            means that it can be difficult for them to get their work seen by a wider audience as intended. The MOR
            was created as a way to address this.
          </p>
        </div>
      </section>

      <section aria-label="The team" className="flex flex-col gap-10 border-t border-rule pt-[clamp(40px,5vw,64px)]">
        <div className="flex flex-col gap-3.5">
          <p className="eyebrow">People</p>
          <h2 className="section-title">The team</h2>
        </div>
        <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <li key={member.name} className="flex flex-col gap-3">
              <div className="aspect-[4/3] overflow-hidden bg-well">
                <SafeImage src={member.image} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl leading-tight">{member.name}</span>
                <span className="text-[15px] text-muted">{member.role}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-wrap items-end justify-between gap-x-12 gap-y-6 border-t border-rule pt-[clamp(40px,5vw,64px)]">
        <div className="flex flex-col gap-3.5">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Get in touch</h2>
          <p className="text-soft">Have questions or want to get in touch? We&apos;d love to hear from you.</p>
        </div>
        <a href="mailto:editor@museumor.com" className="btn-primary">
          Email editor@museumor.com
        </a>
      </section>
    </div>
  );
}
