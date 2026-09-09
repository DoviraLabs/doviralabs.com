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
        <p className="eyebrow">THE PRODUCT COLLECTION</p>
        <h1>Ideas made useful.</h1>
        <p className="page-intro">
          Products and explorations from Dovira Labs, built with care.
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
          <p className="page-intro">An Android app from Dovira Labs.</p>
          <p className="muted">
            Product details and availability are not yet published. This page
            will be updated when confirmed information is ready.
          </p>
          <span className="status mt-6">Details coming soon</span>
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
    intro: "Product-specific privacy information.",
    sections: [
      { title: "App Lock privacy questions & data requests", copy: "For App Lock privacy questions or data requests, email our privacy address and mention App Lock.", email: "privacy@doviralabs.com" },
      {
        title: "Product verification required",
        copy: "A verified App Lock privacy policy is not yet available. Permissions, on-device storage, external transmissions, SDKs, retention, and deletion behavior have not been verified for this page. This is a status notice, not a product privacy policy. Product-level verification is required before public release or Play Store publication. The website Privacy Policy does not describe App Lock’s data practices.",
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
    intro: "Find support information for Dovira Labs products.",
    sections: [
      {
        title: "Contact support",
        copy: "For product questions, technical problems, bug reports, or other product-related assistance, email our support address.",
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
    intro: "Help and support information for App Lock.",
    sections: [
      {
        title: "Get help with App Lock",
        copy: "For App Lock support questions or to report an issue, email our support address.",
        email: "support@doviralabs.com",
      },
      {
        title: "Preparing a support request",
        copy: "Include your device model, Android version, app version, and a short description of the issue. Do not include passwords or other sensitive information.",
      },
    ],
    links: [
      ["About App Lock", "/projects/app-lock"],
      ["App Lock privacy", "/privacy/app-lock"],
    ],
  },
  "/contact": {
    label: "LET’S CONNECT",
    title: "Start a conversation.",
    intro:
      "Have a product question, need support, or want to explore a collaboration?",
    sections: [
      {
        title: "General inquiries & collaboration",
        copy: "For general or business inquiries, collaborations, product ideas, or a conversation about working together, email Dovira Labs.",
        email: "hello@doviralabs.com",
      },
      {
        title: "Product support",
        copy: "For help with a Dovira Labs product, contact support.",
        email: "support@doviralabs.com",
      },
      { title: "Privacy & data requests", copy: "For privacy questions or requests concerning your information, contact our privacy address.", email: "privacy@doviralabs.com" },
    ],
    links: [
      ["Product support", "/support"],
      ["Explore our work", "/projects"],
    ],
  },
};
export function InformationPage({ path }: { path: string }) {
  const page = content[path];
  return (
    <section className="container page-section information-page">
      <p className="eyebrow">{page.label}</p>
      <h1>{page.title}</h1>
      <p className="page-intro">{page.intro}</p>
      {page.updated && <p className="muted revision-date">Last updated: <time dateTime={page.updated}>September 9, 2026</time></p>}
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
      <h1>A little off course.</h1>
      <p className="page-intro">
        This page doesn’t exist. Let’s get you back to something useful.
      </p>
      <Link className="button" to="/">
        Back to home <Icon name="arrow" size={18} />
      </Link>
    </section>
  );
}
