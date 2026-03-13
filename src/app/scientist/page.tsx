import type { Metadata } from "next";
import Link from "next/link";
import { ProfileSection } from "./ProfileSection";
import { BiographySections } from "./BiographySections";
import { Timeline } from "./Timeline";

export const metadata: Metadata = {
  title: "The Scientist - Professor AbulKalam M. Shamsuddin | IP-6 Research",
  description:
    "Professor AbulKalam M. Shamsuddin - pioneering researcher of IP6 and Inositol at the University of Maryland School of Medicine.",
};

export default function ScientistPage() {
  return (
    <main className="min-h-screen bg-bone">
      {/* Header */}
      <section className="pt-32 pb-20">
        <div className="section-container">
          <h1 className="font-display text-5xl leading-tight text-ink md:text-7xl">
            AbulKalam M.
            <br />
            Shamsuddin
          </h1>
          <p className="mt-4 font-sans text-sm font-medium uppercase tracking-widest text-stone-500">
            M.B.,B.S., PhD &mdash; Professor of Pathology, University of
            Maryland School of Medicine
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone-600">
            Pioneering researcher whose groundbreaking work on IP6 &amp;
            Inositol has transformed our understanding of natural disease
            prevention.
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <ProfileSection />

      {/* Biography Sections */}
      <BiographySections />

      {/* Timeline */}
      <Timeline />

      {/* Bottom Section */}
      <section className="border-t border-stone-200 py-20">
        <div className="section-container">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl text-ink sm:text-3xl">
              Explore the Science
            </h2>
            <p className="mt-4 text-stone-600">
              Discover the molecular mechanisms of action, key pathways, and the
              scientific evidence supporting the health benefits of IP6 &amp;
              Inositol.
            </p>
            <Link
              href="/science"
              className="mt-8 inline-block font-sans text-sm font-semibold uppercase tracking-wider text-accent transition-colors hover:text-ink"
            >
              View the Science &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
