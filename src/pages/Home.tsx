import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";
import { ProductEcosystem } from "../components/ProductEcosystem";

const capabilities = [
  ["web", "Websites & Web Applications", "From pages to platforms"],
  ["mobile", "Android Apps", "Useful on the go"],
  ["browser", "Browser Extensions & Tools", "Focused everyday utilities"],
  ["cube", "Business Software & SaaS", "Systems that support work"],
  ["spark", "AI-powered Products", "Practical intelligence"],
];
const principles = [
  ["bolt", "Performance", "Fast and reliable"],
  ["mobile", "Usability", "Simple and intuitive"],
  ["cube", "Maintainability", "Built to last"],
  ["people", "Real-world impact", "Focused on what matters"],
];

export function ContactCTA() {
  return <section className="contact-cta container"><div className="contact-panel"><div><p className="eyebrow">LET’S MAKE SOMETHING USEFUL</p><h2>Have something<br/>useful to build?</h2><p className="muted">Product questions, support, or an idea worth exploring.</p></div><Link className="button" to="/contact">Get in touch <Icon name="arrow" size={18}/></Link></div></section>;
}

export function Home() {
  return <>
    <div className="hero-surface">
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow hero-label"><span className="tiny-dot"/> INDEPENDENT SOFTWARE STUDIO</p>
          <h1>We build<br/>useful <span>software.</span></h1>
          <p className="hero-description">Dovira Labs is an independent software studio building useful digital products — websites, Android apps, browser tools, business software and AI-powered products.</p>
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
        <div className="engineering-copy"><p className="eyebrow">THOUGHTFUL ENGINEERING</p><h2>Ideas into <span>useful products.</span></h2><p>We design, build and ship software that solves real problems.</p></div>
        <div className="principles">{principles.map(([icon,title,copy])=><article key={title}><Icon name={icon} size={25}/><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </div>
    </section>
    <section className="section container featured-section" id="products">
      <div className="section-heading"><div><p className="eyebrow section-label"><span className="tiny-dot"/> FEATURED PRODUCTS</p><h2>Software for a more useful tomorrow.</h2></div><p className="muted section-aside">Explore our current products and upcoming ideas. Practical software for a better digital life.</p><Link to="/projects" className="button button-outline">View all products <Icon name="arrow" size={17}/></Link></div>
      <div className="product-showcase">{products.map(product=><ProductCard key={product.name} product={product}/>)}</div>
    </section>
    <section className="building container">
      <div><p className="eyebrow">FROM IDEA TO PRODUCT</p><h2>At the workbench.</h2><p className="muted">From a real problem to a focused first version. This is how an idea earns its place in the product collection.</p><Link className="text-link workbench-link" to="/projects">Explore the product collection <Icon name="arrow" size={18}/></Link></div>
      <ol className="build-list" aria-label="Our approach to building"><li className="build-row"><span className="build-number">01</span><div><h3>Understand the work</h3><p>Start with the task, the friction, and the people doing it.</p></div></li><li className="build-row"><span className="build-number">02</span><div><h3>Shape a useful first version</h3><p>Keep the scope focused and make the essential flow clear.</p></div></li><li className="build-row"><span className="build-number">03</span><div><h3>Test, refine, and simplify</h3><p>Check the details, remove friction, and build with care.</p></div></li></ol>
    </section>
    <section className="section container about-grid" id="about">
      <div><p className="eyebrow section-label"><span className="tiny-dot"/> ABOUT DOVIRA LABS</p><h2>Independent in spirit.<br/>Practical by nature.</h2><p className="about-copy">Dovira Labs is an independent software studio focused on building practical, thoughtfully designed software.</p><p className="muted">We start with a simple question: could this be more useful? Then we work through the details — from the first idea to the experience people interact with.</p><div className="studio-principles"><span>Product thinking</span><span>Considered design</span><span>Careful engineering</span></div></div>
      <article className="founder-card"><div className="founder-avatar" aria-hidden="true"><span className="founder-initials">DS</span></div><div className="founder-info"><p className="eyebrow">BEHIND THE PRODUCTS</p><h3>Danish Sheikh</h3><p className="founder-role">Founder &amp; Developer, Dovira Labs</p><p className="muted">Danish connects experience in real business operations with systems thinking, problem-solving, and software development — bringing a practical perspective to the products he builds.</p></div></article>
    </section>
    <ContactCTA/>
  </>;
}
