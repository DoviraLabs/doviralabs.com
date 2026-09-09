import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Icon } from "../components/Icon";

export function SiteLayout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
    if (location.hash)
      requestAnimationFrame(() =>
        document.getElementById(location.hash.slice(1))?.scrollIntoView(),
      );
    else { window.scrollTo(0, 0); document.getElementById("main")?.focus({ preventScroll: true }); }
  }, [location]);
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll(
        ".section-heading, .product-card, .category-grid article, .building, .engineering-grid, .about-grid, .contact-panel",
      )
      .forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [location.pathname]);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header" onKeyDown={(event) => { if (event.key === "Escape") { setOpen(false); document.querySelector<HTMLButtonElement>(".menu-toggle")?.focus(); } }}>
        <div className="container nav-wrap">
          <Link to="/" className="wordmark" aria-label="Dovira Labs home">
            <img className="brand-mark" src="/brand/dovira-mark.svg" width="36" height="36" alt="" />
            <span>Dovira <span className="wordmark-light">Labs.</span></span>
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close −" : "Menu +"}
          </button>
          <nav
            id="primary-navigation"
            aria-label="Main navigation"
            className={open ? "nav open" : "nav"}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setOpen(false);
                document
                  .querySelector<HTMLButtonElement>(".menu-toggle")
                  ?.focus();
              }
            }}
          >
            <NavLink to="/projects">Projects</NavLink>
            <Link to="/#about" aria-current={location.pathname === "/" && location.hash === "#about" ? "location" : undefined}>About</Link>
            <Link to="/#engineering" aria-current={location.pathname === "/" && location.hash === "#engineering" ? "location" : undefined}>Engineering</Link>
            <NavLink to="/contact">Contact</NavLink>
            <Link className="button button-small" to="/projects">
              Explore our work <Icon name="arrow" size={16} />
            </Link>
          </nav>
        </div>
      </header>
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <Link to="/" className="footer-brand">
                <img className="brand-mark" src="/brand/dovira-mark.svg" width="32" height="32" alt="" />
                <span>Dovira <span className="wordmark-light">Labs.</span></span>
              </Link>
              <p>Turning ideas into useful digital products.</p>
            </div>
            <nav aria-label="Footer navigation">
              {[
                ["Projects", "/projects"],
                ["Privacy", "/privacy"],
                ["Terms", "/terms"],
                ["Support", "/support"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <NavLink key={href} to={href}>
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Dovira Labs</span>
            <span>Independent by design.</span>
            <a href="#main">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}
