import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What's New? | IP-6 Research, Inc.",
  description:
    "Latest research on IP6 citrate compounds, osteoporosis prevention, synergistic chemotherapy action, and the new book on Inositol & its Phosphates.",
};

const articles = [
  {
    heading: "Novel IP6 Citrate Compounds",
    content:
      "By combining the ever so common and useful citric acid with IP6, a group of novel compounds with at least one citrate molecule attached at the hydroxyl group of the citric acid to the phosphate of the IP6 molecule have been formulated (named IP6cit). By virtue of IP6cit having more free binding sites to chelate cations (up to 24 sites in IP6 hexacitrate, as opposed to 12 in IP6) the novel compounds may be the most potent anti-oxidants to date.",
    patents: [
      "US Patent #7,009,067",
      "US Patent #7,517,868",
      "US Patent #7,989,435",
    ],
  },
  {
    heading: "Prevention of Osteoporosis & Tooth Decay",
    content:
      "Soft drinks are extremely popular beverages throughout the world, they are also a common cause of dental erosion and tooth decay, the acidity of the beverages being the primary factor in bringing about this destruction. IP6 shows remarkable protective effect. In osteoporosis, there is excessive activity of bone-destroying osteoclast cells with concomitant inactivity of bone-forming osteoblast cells. Experiments show that IP6 & inositol can modulate the behavior of these bone-forming and bone-destroying cells to prevent osteoporosis.",
    patents: [],
  },
  {
    heading:
      "IP6 Acts Synergistically with Standard Chemotherapeutic Agents",
    content:
      "Dr Kawanishi and colleagues from Mie University, Japan report that while many anti-oxidants may be even harmful in cancer, IP6 is not only safe, but also beneficial and 'can safely protect humans against cancer'. IP6 was effective against cancer cell lines that were either adriamycin resistant or ER (estrogen receptor) negative. IP6 enhances the anticancer function of adriamycin or tamoxifen against human breast cancer cell lines. Studies on melanoma skin cancer cells show that IP6 inhibits growth and acts synergistically with pterostilbene. A randomized clinical study in breast cancer patients receiving chemotherapy along with IP6 + Inositol showed patients had significantly better quality of life and functional status.",
    patents: [],
  },
  {
    heading:
      "Inositol & its Phosphates: Basic Science to Practical Applications",
    content:
      "Aside from the various health benefits noted before, industrial applications of IP6 include preservation of food & wine, nanotechnology, lithium ion battery, fuel cell technology etc. Prof. Shamsuddin and Prof. Guang-Yu Yang of Northwestern University in Chicago offer a comprehensive review of the subject in their book 'Inositol & its Phosphates: Basic Science to Practical Applications' (Bentham 2015).",
    patents: [],
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-bone">
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="section-container">
          <p className="text-sm font-medium text-teal">
            Recent developments in IP6 research
          </p>
          <h1 className="mt-2 font-display text-4xl text-ink md:text-5xl">
            What&apos;s New
          </h1>
        </div>
      </section>

      {/* Articles */}
      <section className="pb-24">
        <div className="section-container max-w-3xl space-y-20">
          {articles.map((article, index) => (
            <article key={index}>
              <h2 className="font-display text-2xl text-ink">
                {article.heading}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-stone-600 md:text-lg">
                {article.content}
              </p>
              {article.patents.length > 0 && (
                <p className="mt-4 text-sm text-stone-500">
                  {article.patents.join(" / ")}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
