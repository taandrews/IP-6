"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "Does IP6 reduce calcium, iron, zinc or other minerals?",
    answer:
      "No! This has been a long-held misconception that was based on some not so rigorous studies in the 1950's whereby mineral deficiency in certain populations in Egypt and northern Iran was associated with eating unleavened bread which is rich in IP6. However, these studies did not consider other factors that may have been associated with mineral deficiencies. Subsequent carefully designed studies both in humans and in laboratory animals in different laboratories worldwide have refuted this misconception. In nature IP6 exists as a salt of Ca++ and Mg++ i.e. calcium-magnesium inositol hexaphosphate (also known as phytin). Lifetime experiments in rodents and recent human studies have not shown a mineral deficiency following oral administration of IP6 salts.",
  },
  {
    question: "How safe are Inositol and IP6?",
    answer:
      "Both IP6 (calcium phytate) and inositol are in the list of GRAS (Generally Recognized as Safe) substance by the United States Food and Drug Administration (FDA); GRAS is a designation by the US FDA that a chemical or substance added to food is considered safe by experts.",
  },
  {
    question: "Why combine Inositol with IP6?",
    answer:
      "The scientific premise has been that the addition of inositol to IP6 in a 1:1 molar ratio would yield more of the lower inositol phosphate, IP3, a key regulator in cell, thereby increasing the efficiency of IP6. Indeed experiments have proven that the combination has resulted in synergistic, most consistent and safe, anticancer, and immune enhancing effect. When all the various tumor parameters (tumor number, tumor burden, incidence etc) were taken into account, the combination of IP6+Inositol was the safest and the most effective. Thus, based on the available lab data, for safety and efficacy, human clinical trials must include the combination of IP6 + Inositol and NOT IP6 alone.",
  },
  {
    question: "What is the source of IP6 and Inositol?",
    answer:
      "The two main sources of reagent-grade IP6 and Inositol are rice (rice bran) and corn. Most of the nutraceutical-grade compounds are extracted from rice bran. The purity of Inositol is >99.8%; however due to the complex and tedious nature of extraction and purification, while the reagent-grade IP6 is about 98% pure, that of nutraceutical grade ranges from 50-92%.",
  },
  {
    question:
      "Does IP6 and inositol interact with other medicine or food?",
    answer:
      "Inositol is very inert and is not known to have any interaction. IP6 owing to its chemical structure of having 6 phosphate groups, is suspected to be reactive. However, the naturally occurring IP6 is in the form of calcium-magnesium IP6 whereby the reactive phosphates are unavailable for any strong chemical interaction. Both experimentally and clinically IP6 + Inositol have been found to act synergistically with standard chemotherapeutic drugs. As to platelets, IP6 causes an inhibition of aggregation of the abnormally sticky platelets, but not of those from normal humans. It appears that IP6 is about 2-fold more potent than aspirin in inhibiting platelet aggregation.",
  },
  {
    question: "What do major organizations say about IP6?",
    answer:
      "Organizations such as The American Cancer Society, Memorial Sloan-Kettering Cancer Center, and others have reviewed the research on IP6 and Inositol.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-bone">
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="section-container max-w-4xl">
          <h1 className="font-display text-4xl text-ink md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-base leading-relaxed text-stone-600 md:text-lg">
            We try to anticipate questions you might have and provide the
            answers here. If you need additional information please send e-mail
            to{" "}
            <a
              href="mailto:research@ip-6.net"
              className="text-accent underline underline-offset-2 hover:text-accent-dark"
            >
              research@ip-6.net
            </a>
            .
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="pb-24">
        <div className="section-container max-w-4xl">
          <Accordion.Root type="multiple">
            {questions.map((item, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="group border-b border-stone-200"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between py-6 text-left">
                    <span className="font-sans text-base font-semibold text-ink group-data-[state=open]:text-accent md:text-lg">
                      {item.question}
                    </span>
                    <ChevronDown className="ml-4 h-5 w-5 shrink-0 text-stone-400 transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-accent" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-close data-[state=open]:animate-accordion-open">
                  <div className="pb-6">
                    <p className="text-base leading-relaxed text-stone-600">
                      {item.answer}
                    </p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-16">
        <div className="section-container">
          <div className="border-t border-stone-200 pt-8">
            <p className="text-sm italic text-stone-500">
              This Web site contains only research information on IP6 and
              Inositol; the contents are not to be used as medical advice for
              which you should consult your physician(s) or other health-care
              provider(s). IP-6 Research, Inc., does not assume any
              responsibility whatsoever for your use of this Web site or the
              information contained herein.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
