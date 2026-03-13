interface BioSection {
  title: string;
  content: string;
}

const bioSections: BioSection[] = [
  {
    title: "Awards & Recognition",
    content:
      "For his excellence in teaching, Professor Shamsuddin received the Best Teacher award from the medical students many times, including the coveted 'Golden Apple Award' by the American Medical Students' Association in 1999.",
  },
  {
    title: "Cancer Research & Screening",
    content:
      "Prof. Shamsuddin has been studying the process of cancer formation and the prevention of cancer since 1975. His research in the steps of colon cancer formation resulted in the development of a very simple and accurate screening test for colon cancer. This rather inexpensive test detects cancers at a very early stage, and even before they have formed; in other words, it can also detect precancerous polyps and other precancerous lesions and conditions. The test has been in use in China since the early 1990's!",
  },
  {
    title: "IP6 Discovery",
    content:
      "In mid 1985, Prof. Shamsuddin started his pioneering experiments on the anti-cancer property of inositol and inositol hexaphosphate (IP6) - natural constituents of cereals and legumes such as rice, corn, beans etc. For the next decade and a half, he has reconfirmed and expanded his groundbreaking studies to show the efficacy of IP6 and inositol against different cancers in various experimental models.",
  },
  {
    title: "International Impact",
    content:
      "Realizing the enormous potential for health benefits of IP6 and inositol for humans and the general lack of this knowledge, he became most instrumental in organizing the First International Symposium of Disease Prevention by IP6 and Other Rice Components in Kyoto, Japan (June 8-9, 1998).",
  },
  {
    title: "Publications",
    content:
      "Over 200 scientific publications spanning decades of research into IP6, Inositol, cancer prevention, and related fields. His body of work has been validated and expanded by researchers around the world, establishing IP6 & Inositol as subjects of serious scientific inquiry across multiple disciplines.",
  },
  {
    title: "General Cancer Marker",
    content:
      "He further discovered that the colon cancer marker Gal-GalNAc is a common cancer marker expressed through a similar 'field-effect' phenomenon; thus forming the basis for a general cancer screening test such as for cancer of the lungs and breast, and possibly prostate and uterine cervix.",
  },
  {
    title: "Other Activities",
    content:
      "A veteran of Bangladesh Liberation War, Prof. Shamsuddin was the founding President of IP-6 Foundation, Inc (Baltimore, USA) and Komolpur Janakallyan Trust (Dhaka, Bangladesh), non-profit organizations to support health-care and economic empowerment in rural Bangladesh.",
  },
];

export function BiographySections() {
  return (
    <section className="py-16">
      <div className="section-container">
        <div className="mx-auto max-w-3xl space-y-12">
          {bioSections.map((section, index) => (
            <div key={section.title}>
              {index > 0 && <hr className="mb-12 border-stone-200" />}
              <h3 className="font-sans text-lg font-semibold uppercase tracking-wide text-ink">
                {section.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-stone-600">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
