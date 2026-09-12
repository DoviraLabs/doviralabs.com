import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";
import { ProductEcosystem } from "../components/ProductEcosystem";

const capabilities = [
  ["web", "Websites & Web Applications", "Fast, practical experiences for the web"],
  ["mobile", "Android Apps", "Useful mobile tools built around real needs"],
  ["browser", "Browser Extensions & Tools", "Tools that make everyday tasks easier"],
  ["cube", "Business Software & SaaS", "Software designed around real workflows"],
  ["spark", "AI-powered Products", "Practical AI for useful workflows"],
];
const principles = [
  ["bolt", "Performance", "Fast and reliable"],
  ["mobile", "Usability", "Simple and clear"],
  ["cube", "Maintainability", "Built with care"],
  ["people", "Practical value", "Focused on real needs"],
];

export function ContactCTA() {
  return <section className="contact-cta container"><div className="contact-panel"><div><p className="eyebrow">LET’S MAKE SOMETHING USEFUL</p><h2>Have something<br/>useful to build?</h2><p className="muted">Have a question about a product, need support, or want to discuss a project?</p></div><Link className="button" to="/contact">Get in touch <Icon name="arrow" size={18}/></Link></div></section>;
}

export function Home() {
  return <>
    <div className="hero-surface">
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow hero-label"><span className="tiny-dot"/> FOUNDER-LED SOFTWARE STUDIO</p>
          <h1>We build<br/>useful <span>software.</span></h1>
          <p className="hero-description">Dovira Labs is a founder-led software studio building practical digital products, including web apps, Android apps, browser tools, business software and AI-powered products.</p>
          <div className="hero-actions"><Link to="/projects" className="button">Explore our work <Icon name="arrow" size={18}/></Link><Link to="/#about" className="button button-outline">About Dovira Labs</Link></div>
        </div>
        <ProductEcosystem/>
      </section>
      <section className="capability-strip container" aria-label="What we build">
        {capabilities.map(([icon,title,copy])=><div className="capability" key={title}><Icon name={icon} size={27}/><div><h2>{title}</h2><p>{copy}</p></div></div>)}
      </section>
    </div>
    <section className="engineering" id="engineering">
      <div className="container engineering-grid">
        <div className="engineering-copy"><p className="eyebrow">THOUGHTFUL ENGINEERING</p><h2>Ideas into <span>useful products.</span></h2><p>We design and build software around real problems and practical needs.</p></div>
        <div className="principles">{principles.map(([icon,title,copy])=><article key={title}><Icon name={icon} size={25}/><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </div>
    </section>
    <section className="section container featured-section" id="products">
      <div className="section-heading"><div><p className="eyebrow section-label"><span className="tiny-dot"/> FEATURED PRODUCTS</p><h2>Products, experiments and ideas in progress.</h2></div><p className="muted section-aside">Explore current products and the ideas we are developing next.</p><Link to="/projects" className="button button-outline">View all products <Icon name="arrow" size={17}/></Link></div>
      <div className="product-showcase">{products.map(product=><ProductCard key={product.name} product={product}/>)}</div>
    </section>
    <section className="building container">
      <div><p className="eyebrow">FROM IDEA TO PRODUCT</p><h2>How we build.</h2><p className="muted">We start with a real problem, define a focused first version, then test and improve it.</p><Link className="text-link workbench-link" to="/projects">Explore the product collection <Icon name="arrow" size={18}/></Link></div>
      <ol className="build-list" aria-label="Our approach to building"><li className="build-row"><span className="build-number">01</span><div><h3>Understand the problem</h3><p>Start with the task, the friction, and the people involved.</p></div></li><li className="build-row"><span className="build-number">02</span><div><h3>Build a useful first version</h3><p>Keep the scope clear and focus on the most important flow.</p></div></li><li className="build-row"><span className="build-number">03</span><div><h3>Test and improve</h3><p>Check the details, remove friction, and simplify where possible.</p></div></li></ol>
    </section>
    <section className="section container about-grid" id="about">
      <div><p className="eyebrow section-label"><span className="tiny-dot"/> ABOUT DOVIRA LABS</p><h2>Founder-led.<br/>Focused on useful software.</h2><p className="about-copy">Dovira Labs is a founder-led software studio focused on practical, thoughtfully designed software.</p><p className="muted">We bring together product thinking, design and engineering to solve real problems and build useful digital products with care.</p><div className="studio-principles"><span>Product thinking</span><span>Considered design</span><span>Careful engineering</span></div></div>
      <article className="founder-card"><div className="founder-avatar" aria-hidden="true"><span className="founder-initials">DS</span></div><div className="founder-info"><p className="eyebrow">BEHIND THE PRODUCTS</p><h3>Danish Sheikh</h3><p className="founder-role">Founder &amp; Developer, Dovira Labs</p><p className="muted">I work at the intersection of business, systems, and technology. My background in business operations helps me understand real problems, while software development gives me the tools to turn those problems into practical digital products.</p></div></article>
    </section>
    <ContactCTA/>
  </>;
}
