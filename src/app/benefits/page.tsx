import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Other Health Benefits | IP-6 Research, Inc.",
  description:
    "IP6 and Inositol benefits for Alzheimer's, Parkinson's, cardiovascular disease, diabetes, kidney stones, radiation protection and more.",
};

const sections = [
  {
    heading:
      "Alzheimer's, Parkinson's, Multiple Sclerosis & Kidney Stone Prevention",
    paragraphs: [
      "The US Patent Office had issued several patents on the use of IP6 for treatment of Alzheimer's disease, Multiple Sclerosis and Parkinson's Disease. Work at Dr Manju Reddy's Lab in USA show 'significant neuroprotective effect' of IP6 in a cell culture model of Parkinson's disease. Professor Grases in Spain proposed that a deficiency of IP6 could be a risk factor for Alzheimer's disease. Professor JoAnne McLaurin and her colleagues at the University of Toronto have shown that inositol can bind with the amyloid beta protein - the culprit destroying the brain cells, ameliorating its toxicity.",
      "Dr Philip Henneman and his colleagues at Harvard Medical School and Massachusetts General Hospital in Boston, USA back in 1958 successfully used IP6 for conditions associated with kidney stone. Professor Grases et al have shown once again that IP6 prevents kidney stone formation.",
      "Professor Felix Grases and his co-workers at the University of Balearic Islands, Spain, have not only found IP6 in human plasma and urine, but that the levels decreased on an IP6-deficient diet and restored quickly after taking a supplement. Together with the numerous health benefits, these data strongly suggest that IP6 could very well be a vitamin!",
    ],
  },
  {
    heading: "Cardiovascular Disease Prevention",
    paragraphs: [
      "Professor Grases and his colleagues have shown that IP6 prevents cardiovascular calcification. Abnormal or pathological calcification of soft tissues such as blood vessels, heart etc. can have serious consequences insofar as atherosclerosis and myocardial infarction are concerned. IP6 reduces the abnormal stickiness (aggregation) of platelets. IP6 protects the heart against reperfusion injury. Thus, IP6 may prevent cardiovascular diseases in more than one way.",
    ],
  },
  {
    heading: "Prostate Cancer, AIDS Kaposi's Sarcoma and Leukemia",
    paragraphs: [
      "Androgen-independent prostate cancers are harder to treat. Research shows enhanced killing of androgen-independent prostate cancer cells when IP6 is combined with proteasome inhibitors. IP6 blocks the tumorigenesis and angiogenic potential in both AIDS/Iatrogenic-related Kaposi's sarcoma and adult T-cell lymphoma cells. IP6 caused a dose-dependent cytotoxicity on various human myeloid leukemia cell lines as well as on fresh chronic myeloid leukemia progenitor cells; IP6 however had no toxic effect on normal human hematopoetic cells.",
    ],
  },
  {
    heading: "IP6 + Inositol Against Diabetes",
    paragraphs: [
      "Experiments with isolated murine pancreatic beta cells have shown that IP6 stimulates these cells to secrete insulin. IP6 supplementation when administered in diet lowered blood glucose levels in rats. IP6 treated mice showed a marked decrease in blood glucose level, higher glucokinase and glucose-6-phosphatase activity, higher hepatic glycogen and considerably lower body-weight than control mice. Inositol itself may work as an antioxidant and not only prevents but also reverses many of the complications of diabetes. Thus, on one hand, IP6 causes direct stimulation of insulin from pancreatic beta cells and inositol on the other hand helps in the prevention of complications of diabetes; combination of IP6 + Inositol gives dual benefits.",
    ],
  },
  {
    heading: "Protection Against Radiation",
    paragraphs: [
      "A report in the journal Radiation Protection Dosimetry (2007) shows strong affinity of inositol hexaphosphate (IP6) for uranium, suggesting that it could be an effective chelating agent for uranium in vivo. IP6 and inositol protect human cells against radiation damage in the laboratory in various ways. In vivo, IP6 significantly reduced the incidence and multiplicity of UV-induced skin tumors in mice. These data therefore suggest that IP6 + inositol could help protect us from various forms of radiation damage such as UV from sun-exposure, radiation therapy, cosmic radiation, accidental or induced nuclear blasts etc.",
    ],
  },
];

export default function BenefitsPage() {
  return (
    <main className="min-h-screen bg-bone">
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="section-container">
          <h1 className="font-display text-4xl text-ink md:text-5xl">
            Beyond Cancer: The Full Spectrum
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-stone-600">
            IP6 and Inositol research extends well beyond oncology. Below is a
            summary of findings across neurology, cardiology, endocrinology, and
            radiation science.
          </p>
        </div>
      </section>

      {/* Benefit Sections */}
      <section className="pb-24">
        <div className="section-container">
          {sections.map((section, index) => (
            <div key={index}>
              {index > 0 && <hr className="border-stone-200 my-16" />}
              <div>
                <h2 className="border-l-4 border-accent pl-4 font-display text-2xl text-ink md:text-3xl">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="mt-6 text-base leading-relaxed text-stone-600 md:text-lg"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
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
