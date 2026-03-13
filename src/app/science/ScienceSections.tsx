import {
  Shield,
  Bug,
  TrendingDown,
  GitBranch,
  Ban,
  Dna,
  Radio,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ScienceSection {
  heading: string;
  content: string;
  icon: LucideIcon;
}

const sections: ScienceSection[] = [
  {
    heading: "Antioxidant Action",
    content:
      "IP6 has been best known as an antioxidant. In our body highly reactive toxic chemicals such as hydroxyl radicals are formed as a consequence of oxidation of Fe2+ to Fe3+ during the Fenton Reaction. These radicals react with DNA, proteins or lipids causing cell injury or even cell death; from ageing to Alzheimer\u2019s disease, cancer, myocardial damage during infarction, etc. By binding with and hence inactivating Fe2+, IP6 prevents the formation of toxic hydroxyl radicals.",
    icon: Shield,
  },
  {
    heading: "Enhanced Microbial Defense",
    content:
      "IP6 while on one hand acts as an anti-oxidant to protect us from the harmful free radicals, it also enhances our body\u2019s ability to kill the invading microbes through increased production of the superoxides inside the neutrophils.",
    icon: Bug,
  },
  {
    heading: "Normalization of Cell Growth",
    content:
      "Another of the mechanisms of action of IP6 and inositol is inhibition of excessive and uncontrolled cell growth (normalization) in disease conditions without affecting the rate of cell growth in normal cells. In very high doses, IP6 may kill cancer cells, but not normal cells, a distinct difference with most anti-cancer agents.",
    icon: TrendingDown,
  },
  {
    heading: "Cell Differentiation",
    content:
      "During transformation of normal cells to malignancy, the cancer cells lose the normal behavioral pattern, a phenomenon called de-differentiation. Another broad mechanism of action of IP6 & Inositol is by reversing that process or causing cell differentiation back to normal, so they also begin to look like normal cells.",
    icon: GitBranch,
  },
  {
    heading: "Anti-Angiogenesis",
    content:
      "Several groups of investigators have shown that IP6 also acts as an anti-angiogenesis agent, one of the molecular mechanisms may be by binding with FGF1.",
    icon: Ban,
  },
  {
    heading: "Epigenetic Regulation",
    content:
      "Epigenetic changes, the early steps in carcinogenesis involving gene expression without affecting DNA sequence modification are no less important. Research shows that while the carcinogen ENU up-regulated epigenetic events, these alterations were reduced by IP6 administration.",
    icon: Dna,
  },
  {
    heading: "Cell Surface Receptors & Signaling",
    content:
      "Cell surface receptors for IP6 have been identified on various different cell types. Some of the functions of IP6 could very well be receptor-mediated, effecting the down-stream signaling molecules and releasing intracellular Ca++. Ongoing research provides new data about how IP6 modulates intracellular regulators such as p53, p27, PI-3 Kinase, NFkB, PKC\u03b4, ppRb, Akt, ERK 1/2 etc.",
    icon: Radio,
  },
];

export function ScienceSections() {
  return (
    <section className="pb-16">
      <div className="section-container">
        <div className="max-w-3xl space-y-14">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <article key={section.heading}>
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-accent" />
                  <h3 className="font-display text-2xl font-bold text-ink">
                    {section.heading}
                  </h3>
                </div>
                <p className="mt-3 text-base leading-relaxed text-stone-600">
                  {section.content}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
