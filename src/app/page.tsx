import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import HeroMolecule from "@/components/HeroMolecule";
import { asset } from "@/lib/site";

const research = [
  ["Molecular mechanisms", "Cell signaling, antioxidant chemistry, and the biology of inositol phosphates.", "/science"],
  ["Cancer biology & immunity", "Cell growth, differentiation, and immune activity in experimental models.", "/about#oncology"],
  ["Cardiovascular & metabolic research", "Investigations into mineral deposition, platelet function, and glucose metabolism.", "/benefits#cardiovascular"],
  ["Neuroscience & cellular protection", "Research into oxidative stress, neurodegeneration, and cellular responses to injury.", "/benefits#neuroscience"],
];
const publications = [
  { type: "Clinical pilot", year: "2010", title: "IP6 + inositol during breast cancer chemotherapy", description: "A randomized pilot study examining quality of life and treatment-related side effects.", href: "/news#clinical" },
  { type: "Scientific reference", year: "2015", title: "Inositol & its Phosphates", description: "A multidisciplinary reference connecting basic science with practical applications.", href: "/news#books" },
  { type: "Molecular research", year: "", title: "A new family of IP6 citrate compounds", description: "The chemistry, proposed applications, and patent history of IP6cit.", href: "/news#citrate" },
];

export default function HomePage() {
  return <div className="home-page">
    <section className="hero">
      <div className="wrap hero-content">
        <div className="hero-copy">
          <p className="eyebrow">Scientific inquiry since 1985</p>
          <h1>The science of <span>IP6 &amp; inositol.</span></h1>
          <p className="hero-description">Investigating naturally occurring molecules and their roles in human biology. Bringing decades of IP6 research into focus.</p>
          <Link href="/science" className="button">Explore the science <ArrowRight size={18}/></Link>
        </div>
        <figure className="hero-molecule">
          <HeroMolecule/>
          <figcaption>
            <div><strong>IP6</strong><span>Inositol hexaphosphate</span></div>
            <span className="chemical-formula">C<sub>6</sub>H<sub>18</sub>O<sub>24</sub>P<sub>6</sub></span>
          </figcaption>
          <div className="atom-key" aria-label="Atom colors">
            <span><i className="carbon"/>Carbon</span><span><i className="hydrogen"/>Hydrogen</span><span><i className="oxygen"/>Oxygen</span><span><i className="phosphorus"/>Phosphorus</span>
          </div>
        </figure>
      </div>
    </section>

    <section className="research-section section" aria-labelledby="research-heading">
      <div className="wrap">
        <div className="section-heading">
          <div><p className="eyebrow">Research areas</p><h2 id="research-heading">Areas of investigation.</h2></div>
          <p>Explore the mechanisms and experimental evidence shaping our understanding of IP6 and inositol.</p>
        </div>
        <div className="research-rows">{research.map(([title, description, href]) =>
          <Link href={href} key={title} className="research-row"><div><h3>{title}</h3><p>{description}</p></div><ArrowRight size={22}/></Link>
        )}</div>
        <div className="research-foot"><p>The evidence spans laboratory and animal studies, with limited human clinical data.</p><Link href="/benefits" className="text-link">All research areas <ArrowRight size={18}/></Link></div>
      </div>
    </section>

    <section className="section publications-section" aria-labelledby="publications-heading">
      <div className="wrap">
        <div className="section-heading"><div><p className="eyebrow">From the literature</p><h2 id="publications-heading">Selected publications.</h2></div><Link href="/news" className="text-link">Research archive <ArrowRight size={18}/></Link></div>
        <div className="publication-list">{publications.map(item =>
          <article className="publication-row" key={item.href}>
            <p className="publication-meta"><span>{item.type}</span>{item.year && <span>{item.year}</span>}</p>
            <div><h3><Link href={item.href}>{item.title}</Link></h3><p>{item.description}</p><Link href={item.href} className="publication-link">Read the overview <ArrowUpRight size={16}/></Link></div>
          </article>
        )}</div>
      </div>
    </section>

    <section className="section origins-section" aria-labelledby="origins-heading">
      <div className="wrap origins-grid">
        <div className="origins-heading"><p className="eyebrow">The origins of IP6 research</p><h2 id="origins-heading">A lifetime of<br/>scientific inquiry.</h2></div>
        <figure className="founder-portrait"><img src={asset("/source/119434971.jpg")} alt="Professor AbulKalam M. Shamsuddin" width="250" height="320" loading="lazy"/></figure>
        <div className="origins-copy"><div className="founder-identity"><h3>AbulKalam M. Shamsuddin</h3><p className="founder-credentials">M.B., B.S., PhD</p></div><p>In 1985, Professor Shamsuddin began investigating IP6 and inositol at the University of Maryland School of Medicine. His work opened a sustained exploration of their activity in cancer models and cellular systems.</p><Link href="/scientist" className="text-link">Meet the scientist <ArrowRight size={18}/></Link></div>
      </div>
    </section>

    <section className="contact-banner"><div className="wrap"><div><p className="eyebrow">Connect with IP-6 Research</p><h2>Continue the inquiry.</h2><p>Questions about the science or a publication? We welcome research inquiries.</p></div><Link href="/contact" className="button">Get in touch <ArrowRight size={18}/></Link></div></section>
  </div>;
}
