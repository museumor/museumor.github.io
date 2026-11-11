import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Host an Event",
  description:
    "Host your exhibition opening, festival, or private gathering inside the Museum of Other Realities, a social VR venue.",
  path: "/host-an-event/",
});

const reasons = [
  "Unforgettable immersive environments",
  "Global reach for your audience",
  "Custom branding opportunities",
  "Professional audio/visual support",
];

export default function HostEventPage() {
  return (
    <div className="page">
      <div className="flex flex-wrap items-end gap-x-[72px] gap-y-8">
        <h1 className="page-title min-w-0 flex-[1_1_420px]">Host an event</h1>
        <p className="min-w-0 flex-[1_1_360px] text-soft">
          The Museum of Other Realities is the perfect venue for your next virtual event. Whether it&apos;s an
          exhibition opening, a festival, or a private gathering, we offer a unique, immersive space that defies the
          laws of physics.
        </p>
      </div>

      <div className="flex flex-wrap gap-x-[72px] gap-y-12 border-t border-brass pt-[clamp(32px,4vw,48px)]">
        <section className="flex min-w-0 flex-[1_1_420px] flex-col gap-6">
          <h2 className="section-title">Why host with us?</h2>
          <ul className="rule-list">
            {reasons.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </section>
        <section className="flex min-w-0 flex-[1_1_360px] flex-col items-start gap-6">
          <h2 className="section-title">Get in touch</h2>
          <p className="text-soft">Email us to discuss your event requirements.</p>
          <a href="mailto:editor@museumor.com" className="btn-primary">
            Email editor@museumor.com
          </a>
        </section>
      </div>
    </div>
  );
}
