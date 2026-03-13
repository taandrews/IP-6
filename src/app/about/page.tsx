import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cancerTypes = [
  "Breast",
  "Colon",
  "Leukemia",
  "Liver",
  "Lung",
  "Lymphoma",
  "Prostate",
  "Sarcoma",
];

const mechanisms = [
  {
    title: "Differentiation",
    description:
      "Unlike most anti-cancer agents, IP6 and Inositol tame cancer cells to behave and look like normal cells. While cancer cells grow uncontrolled, differentiated cells do not. Increased differentiation has been seen in all cancer cell lines tested, including breast, colon, prostate, leukemia, rhabdomyosarcoma, and liver cancer.",
  },
  {
    title: "Immune Boosting (NK Cells)",
    description:
      "IP6 + Inositol combat cancer by boosting the immune system. A subset of T-lymphocytes called natural killer (NK) cells are responsible for identifying and destroying cancer cells, and their ability to do so is significantly increased by IP6 + Inositol.",
  },
  {
    title: "Non-Cytotoxic",
    description:
      "IP6 and Inositol are not cytotoxic at pharmacological doses -- they do not kill cancer cells directly. At high doses they induce apoptosis (programmed cell death). This makes them fundamentally safer than conventional anti-cancer agents while still being effective.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-bone">
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="section-container">
          <h1 className="max-w-3xl font-display text-4xl text-ink md:text-5xl">
            IP6 &amp; Inositol as Anticancer Agents
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-500">
            A broad-spectrum approach to cancer prevention and treatment,
            backed by laboratory and emerging clinical evidence.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-16">
        <div className="section-container">
          <p className="max-w-3xl text-lg leading-relaxed text-stone-600">
            In the laboratory, IP6 &plusmn; Inositol have been shown to have
            consistent and reproducible anti-cancer action against a wide range
            of cancer models, making it a broad-spectrum anti-cancer agent. This
            anti-cancer action is both preventive and therapeutic, and the
            combination of IP6 + Inositol in correct proportion (US Patent #
            5,082,833) yields the best results. Emerging clinical data confirm
            the laboratory findings.
          </p>
        </div>
      </section>

      {/* Cancer Types + Molecule Structures */}
      <section className="pb-16">
        <div className="section-container">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            {cancerTypes.join(" \u00b7 ")}
          </p>

          <div className="mt-12 grid items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/phytic-acid-structure.svg"
                alt="Chemical structure of phytic acid (IP6)"
                className="mx-auto h-40 rounded-lg"
              />
              <p className="mt-2 text-center text-xs text-stone-400">
                IP6 (Phytic Acid)
              </p>
            </div>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/inositol-structure.svg"
                alt="Chemical structure of myo-inositol"
                className="mx-auto h-40 rounded-lg"
              />
              <p className="mt-2 text-center text-xs text-stone-400">
                Myo-Inositol
              </p>
            </div>
            <div className="hidden lg:block">
              <Image
                src="/images/rice-bran.jpg"
                alt="Rice bran, the primary natural source of IP6"
                width={300}
                height={200}
                className="mx-auto h-40 w-auto rounded-lg object-cover"
              />
              <p className="mt-2 text-center text-xs text-stone-400">
                Rice bran — natural source of IP6
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Studies */}
      <section className="py-16">
        <div className="section-container">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl text-ink">
              Clinical Studies
            </h2>
            <p className="mt-6 text-base leading-relaxed text-stone-600">
              Several clinical studies of the efficacy of IP6+Inositol were
              presented at the 7th International Conference of Anticancer
              Research in Corfu, Greece, October 25-30, 2004. These included
              cancers of the colon, lungs and breast. Patients were treated
              with IP6+Inositol (8-24 gm/day) either with or without
              concurrent standard chemotherapy and/or radiotherapy.
            </p>

            <blockquote className="mt-8 border-l-2 border-accent pl-6">
              <p className="font-display text-xl italic leading-relaxed text-ink">
                &ldquo;IP6+Inositol reduced the chemo- and radiotherapy induced
                side-effects and acted synergistically to yield a much better
                response to treatment; at the very least, the patients enjoyed a
                better quality of life.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-stone-500">
                -- 7th International Conference of Anticancer Research, Corfu,
                Greece, 2004
              </footer>
            </blockquote>

            <p className="mt-8 text-base leading-relaxed text-stone-600">
              In a March 2010 paper in{" "}
              <span className="font-semibold text-ink">Oncology Report</span>,
              Dr. L Schroterova and colleagues from the Charles University in
              Prague, Czech Republic confirm that the combination of
              IP6+Inositol is the best for inhibiting cancer cell growth.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="section-container">
          <h2 className="font-display text-3xl text-ink">
            How IP6 + Inositol Work
          </h2>

          <dl className="mt-10 max-w-3xl space-y-10">
            {mechanisms.map((mech) => (
              <div key={mech.title}>
                <dt className="font-sans text-lg font-semibold text-ink">
                  {mech.title}
                </dt>
                <dd className="mt-2 text-base leading-relaxed text-stone-600">
                  {mech.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="section-container">
          <Link
            href="/science"
            className="group inline-flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-wider text-accent transition-colors hover:text-ink"
          >
            Explore the Science
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
