import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScienceSections } from "./ScienceSections";
import { PathwayBadges } from "./PathwayBadges";

export const metadata: Metadata = {
  title: "Mechanisms of Action of IP6 & Inositol | IP-6 Research",
  description:
    "The science behind IP6 and Inositol - antioxidant mechanisms, cell differentiation, anti-angiogenesis, epigenetic regulation and more.",
};

export default function SciencePage() {
  return (
    <main className="min-h-screen bg-bone">
      {/* Header */}
      <section className="pt-32 pb-20">
        <div className="section-container">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_200px]">
            <div>
              <p className="max-w-2xl text-lg text-stone-500">
                Exploring the molecular pathways and biological mechanisms through
                which IP6 and Inositol exert their remarkable effects on human
                health.
              </p>
              <h1 className="mt-4 max-w-3xl font-display text-4xl text-ink md:text-5xl lg:text-6xl">
                Mechanisms of Action of IP6 &amp; Inositol
              </h1>
            </div>

            {/* Phytic acid 2D structure (Wikimedia Commons, Public Domain) */}
            <div className="hidden lg:block">
              <Image
                src="/IP-6/images/phytic-acid-structure.svg"
                alt="Chemical structure of phytic acid (IP6)"
                width={200}
                height={200}
                className="w-full rounded-lg"
              />
              <p className="mt-2 text-center text-xs text-stone-400">
                Phytic acid (IP6) structure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Science Sections */}
      <ScienceSections />

      {/* Key Pathways Section */}
      <section className="border-t border-stone-200 py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl text-ink sm:text-3xl">
              Key Molecular Pathways
            </h2>
            <p className="mt-4 text-stone-600">
              IP6 and Inositol modulate critical intracellular regulators and
              signaling pathways involved in cell growth, differentiation, and
              survival.
            </p>
          </div>
          <PathwayBadges />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-stone-200 py-20">
        <div className="section-container">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl text-ink sm:text-3xl">
              The Researcher Behind the Discoveries
            </h2>
            <p className="mt-4 text-stone-600">
              Learn about Professor AbulKalam M. Shamsuddin and his pioneering
              work that brought IP6 &amp; Inositol research to the forefront of
              modern science.
            </p>
            <Link
              href="/scientist"
              className="mt-8 inline-block font-sans text-sm font-semibold uppercase tracking-wider text-accent transition-colors hover:text-ink"
            >
              Meet the Scientist &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
