import { legalPages } from "../data/legal";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { Icon } from "../components/Icon";
import { ContactCTA } from "./Home";
import { AppLockVisual } from "../components/ProductEcosystem";

export function Projects() {
  return (
    <>
      <section className="container page-section">
        <p className="eyebrow">PROJECTS & PRODUCTS</p>
        <h1>Ideas made useful.</h1>
        <p className="page-intro">
          A collection of products, experiments, and work in progress from Dovira Labs.
        </p>
        <div className="product-showcase mt-14">
          {products.map((product) => (
            <ProductCard headingLevel={2} product={product} key={product.name} />
          ))}
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
export function AppLock() {
  return (
    <section className="container page-section">
      <Link className="text-link" to="/projects">
        ← All projects
      </Link>
      <div className="detail-grid">
        <div>
          <p className="eyebrow">ANDROID APP / DOVIRA LABS</p>
          <h1>App Lock</h1>
          <p className="page-intro">An Android app from Dovira Labs, currently being prepared for release.</p>
          <p className="muted">
            Product details and availability will be published closer to release.
          </p>
          <span className="status mt-6">In development</span>
          <div className="hero-actions">
            <Link to="/support/app-lock" className="button">
              Product support <Icon name="arrow" size={18} />
            </Link>
            <Link to="/privacy/app-lock" className="text-link">
              Privacy information →
            </Link>
          </div>
        </div>
        <AppLockVisual />
      </div>
    </section>
  );
}

const content: Record<
  string,
  {
    label: string;
    title: string;
    intro: string;
    updated?: string;
    sections: { title: string; copy: string; email?: string }[];
    links?: [string, string][];
  }
> = {
  "/privacy": legalPages["/privacy"],
  "/privacy/app-lock": {
    label: "APP LOCK / PRIVACY",
    title: "App Lock privacy",
    intro: "Privacy information for App Lock.",
    sections: [
      {
        title: "Current status",
        copy: "App Lock is being prepared for release. A full product-specific privacy policy will be published before public release. Until then, this page does not describe the app’s final data practices.",
      },
      {
        title: "Privacy questions",
        copy: "For App Lock privacy questions or data requests, email our privacy address and mention App Lock.",
        email: "privacy@doviralabs.com",
      },
    ],
    links: [
      ["About App Lock", "/projects/app-lock"],
      ["App Lock support", "/support/app-lock"],
    ],
  },
  "/terms": legalPages["/terms"],
  "/support": {
    label: "HERE TO HELP",
    title: "Product support",
    intro: "Support for Dovira Labs products.",
    sections: [
      {
        title: "Contact support",
        copy: "For product questions, technical problems, or bug reports, contact Dovira Labs support.",
        email: "support@doviralabs.com",
      },
    ],
    links: [
      ["App Lock support", "/support/app-lock"],
      ["Explore products", "/projects"],
    ],
  },
  "/support/app-lock": {
    label: "APP LOCK / SUPPORT",
    title: "App Lock support",
    intro: "Help and support for App Lock.",
    sections: [
      {
        title: "Get help",
        copy: "For App Lock questions or to report a problem, contact Dovira Labs support.",
        email: "support@doviralabs.com",
      },
      {
        title: "What to include",
        copy: "Please include your device model, Android version, app version, and a short description of the problem. Do not include passwords or other sensitive information.",
      },
    ],
    links: [
      ["About App Lock", "/projects/app-lock"],
      ["App Lock privacy", "/privacy/app-lock"],
    ],
  },
  "/contact": {
    label: "CONTACT",
    title: "Get in touch.",
    intro: "Have a question, need support, or want to discuss a project?",
    sections: [
      {
        title: "General and business enquiries",
        copy: "For general questions, collaborations, product ideas, or project discussions, contact Dovira Labs.",
        email: "hello@doviralabs.com",
      },
      {
        title: "Product support",
        copy: "For help with a Dovira Labs product, contact Dovira Labs support.",
        email: "support@doviralabs.com",
      },
      {
        title: "Privacy requests",
        copy: "For privacy questions or requests about your information, contact our privacy address.",
        email: "privacy@doviralabs.com",
      },
    ],
    links: [
      ["Product support", "/support"],
      ["Explore our work", "/projects"],
    ],
  },
};
export function InformationPage({ path }: { path: string }) {
  const page = content[path];
  const formattedDate = page.updated
    ? new Date(`${page.updated}T00:00:00Z`).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      })
    : null;
  return (
    <section className="container page-section information-page">
      <p className="eyebrow">{page.label}</p>
      <h1>{page.title}</h1>
      <p className="page-intro">{page.intro}</p>
      {page.updated && formattedDate && <p className="muted revision-date">Last updated: <time dateTime={page.updated}>{formattedDate}</time></p>}
      <div className="information-content">
        {page.sections.map((section) => (
          <article key={section.title}>
            <h2>{section.title}</h2>
            <p className="muted">{section.copy}</p>
            {section.email && <a className="text-link email-link" href={`mailto:${section.email}`}>{section.email}</a>}
          </article>
        ))}
      </div>
      <div className="page-links">
        {page.links?.map(([label, href]) => (
          <Link className="text-link" key={href} to={href}>
            {label}
            <Icon name="arrow" size={18} />
          </Link>
        ))}
      </div>
    </section>
  );
}
export function NotFound() {
  return (
    <section className="container page-section">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>Page not found.</h1>
      <p className="page-intro">
        The page you are looking for does not exist or may have moved.
      </p>
      <Link className="button" to="/">
        Back to home <Icon name="arrow" size={18} />
      </Link>
    </section>
  );
}
