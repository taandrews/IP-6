import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Zap,
  Heart,
  Brain,
  Droplets,
  Sun,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import BenefitCard from "@/components/BenefitCard";

const benefits = [
  {
    icon: <Shield />,
    title: "Anti-Cancer",
    description:
      "Broad-spectrum anti-cancer action against breast, colon, leukemia, liver, lung, lymphoma, prostate, and sarcoma models. Both preventive and therapeutic.",
  },
  {
    icon: <Zap />,
    title: "Immune Boosting",
    description:
      "Enhances natural killer (NK) cell activity, boosting the immune system\u2019s ability to identify and destroy cancer cells and invading microbes.",
  },
  {
    icon: <Heart />,
    title: "Cardiovascular Health",
    description:
      "Prevents cardiovascular calcification, reduces abnormal platelet aggregation, and protects the heart against reperfusion injury.",
  },
  {
    icon: <Brain />,
    title: "Neuroprotection",
    description:
      "Significant neuroprotective effects demonstrated in Parkinson\u2019s and Alzheimer\u2019s disease models. Inositol binds amyloid beta protein, ameliorating its toxicity.",
  },
  {
    icon: <Droplets />,
    title: "Diabetes Management",
    description:
      "IP6 stimulates pancreatic beta cells to secrete insulin and lowers blood glucose levels. Inositol prevents and reverses complications of diabetes.",
  },
  {
    icon: <Sun />,
    title: "Radiation Protection",
    description:
      "Strong chelating agent for uranium, protects cells against UV and radiation damage, and significantly reduces incidence of radiation-induced tumors.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="py-24 lg:py-32">
        <div className="section-container">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_320px]">
            <div>
              <p className="text-sm text-stone-500">
                Est. 1985 &middot; Baltimore, MD
              </p>

              <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-[1.05]">
                Pioneering the Science of IP6&nbsp;+&nbsp;Inositol
              </h1>

              <p className="mt-6 font-sans text-xl text-stone-600 max-w-2xl">
                Nature&apos;s Medicine for the New Millennium
              </p>

              <p className="text-base text-stone-500 mt-4 max-w-2xl">
                The B-vitamin inositol and its derivative IP6 (inositol
                hexaphosphate) are ubiquitous in soil, plant seeds such as rice,
                corn, soy, wheat, sesame; and in all mammalian cells. IP6 +
                Inositol act as broad-spectrum anti-cancer cocktail, boost immune
                system, help lower cholesterol, prevent kidney stones and the
                complications of diabetes, and reduce the risk of cardiovascular
                diseases.
              </p>

              <p className="mt-6 text-sm text-stone-400">
                40+ years of research &middot; 200+ published studies &middot; 4
                patents &middot; 30+ countries
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/science" className="btn-primary gap-2">
                  Explore the Science
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/scientist" className="btn-secondary gap-2">
                  Meet the Scientist
                </Link>
              </div>
            </div>

            {/* IP6 molecule — 3D ball-and-stick model (Wikimedia Commons, CC0) */}
            <div className="hidden lg:block">
              <Image
                src="/images/ip6-molecule.png"
                alt="3D ball-and-stick model of the IP6 (phytic acid) molecule"
                width={320}
                height={320}
                className="mx-auto rounded-lg"
              />
              <p className="mt-2 text-center text-xs text-stone-400">
                IP6 (Inositol Hexaphosphate) molecule
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Preview ── */}
      <section className="py-24">
        <div className="section-container">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_280px]">
          <div>
          <SectionHeading
            heading="A Broad-Spectrum Natural Health Solution"
            align="left"
          />
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            The B-vitamin inositol and its derivative IP6 (inositol
            hexaphosphate) are ubiquitous in soil, plant seeds such as rice,
            corn, soy, wheat, sesame; and in all mammalian cells. IP6 +
            Inositol act as broad-spectrum anti-cancer cocktail, boost immune
            system, help lower cholesterol, prevent kidney stones and the
            complications of diabetes, and reduce the risk of cardiovascular
            diseases, including heart attack, stroke etc.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            Pioneering experiments done in Professor AbulKalam M.
            Shamsuddin&apos;s laboratory beginning 1985 at the University of
            Maryland School of Medicine have shown that far from being an
            &apos;anti-nutrient,&apos; not only IP6 is extremely safe, but that
            it and its parent molecule Inositol have anti-cancer and
            immune-boosting function.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-1 text-accent text-sm uppercase tracking-wide font-semibold hover:underline"
          >
            Learn More
            <span aria-hidden="true">&rarr;</span>
          </Link>
          </div>

          {/* Rice bran — natural source of IP6 (Wikimedia Commons, CC BY-SA 3.0, Palagiri) */}
          <div className="hidden lg:block">
            <Image
              src="/images/rice-bran.jpg"
              alt="Rice bran, the primary natural source of IP6"
              width={280}
              height={210}
              className="w-full rounded-lg object-cover"
            />
            <p className="mt-2 text-xs text-stone-400">
              Rice bran — the primary natural source of IP6
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* ── Benefits Grid ── */}
      <section className="border-y border-stone-200 py-24">
        <div className="section-container">
          <SectionHeading heading="Backed by Decades of Research" />
          <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <BenefitCard
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24">
        <div className="section-container text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink">
            Read the Research
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Over 200 peer-reviewed studies document IP6 + Inositol&apos;s
            effects on cancer, immunity, cardiovascular health, and more.
            Explore the published science or get in touch.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/science" className="btn-primary gap-2">
              Published Studies
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn-secondary gap-2">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
