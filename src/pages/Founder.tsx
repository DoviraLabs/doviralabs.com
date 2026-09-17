import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";

const journey = [
  {
    year: "2012",
    title: "KodeClub.com",
    label: "Early web project",
    copy: "One of my earliest web projects, KodeClub.com, is documented online by 2012 in historical technology-forum records within the online data-entry and CAPTCHA-software ecosystem.",
  },
  {
    year: "Learning & building",
    title: "From websites to systems",
    label: "Expanding the toolkit",
    copy: "Over time, my interests expanded across web development, Android apps, browser tools, business software, automation, and practical uses of AI.",
  },
  {
    year: "Today",
    title: "Dovira Labs",
    label: "Founder-led software studio",
    copy: "Dovira Labs brings those interests together around one simple goal: turning ideas and real problems into useful digital products.",
  },
];

const focus = [
  "Websites & Web Applications",
  "Android Apps",
  "Browser Extensions & Tools",
  "Business Software & SaaS",
  "Automation",
  "AI-powered Products",
];

export function Founder() {
  return (
    <>
      <section className="founder-hero">
        <div className="container founder-hero-grid">
          <div className="founder-hero-copy">
            <p className="eyebrow section-label"><span className="tiny-dot" /> FOUNDER</p>
            <h1>Danish Sheikh</h1>
            <p className="founder-title">Founder &amp; Developer, Dovira Labs</p>
            <p className="founder-lede">I work at the intersection of business, systems, and technology — learning from real problems and building practical software around them.</p>
            <div className="founder-actions">
              <Link className="button" to="/projects">View projects <Icon name="arrow" size={18} /></Link>
              <Link className="button button-outline" to="/contact">Get in touch</Link>
            </div>
          </div>
          <aside className="founder-intro-card" aria-label="Founder profile summary">
            <div className="founder-monogram" aria-hidden="true">DS</div>
            <p className="eyebrow">BUILDING &amp; EXPERIMENTING</p>
            <h2>On the web since the early 2010s.</h2>
            <p>My path started with early web projects and grew into a broader interest in software, workflows, automation, and digital products.</p>
          </aside>
        </div>
      </section>

      <section className="section container founder-story">
        <div className="founder-story-heading">
          <p className="eyebrow section-label"><span className="tiny-dot" /> MY JOURNEY</p>
          <h2>From early web experiments to Dovira Labs.</h2>
          <p className="muted">A practical journey shaped by curiosity, real-world business problems, and learning through building.</p>
        </div>
        <div className="founder-timeline">
          {journey.map((item) => (
            <article className="founder-timeline-item" key={item.title}>
              <div className="founder-timeline-year">{item.year}</div>
              <div className="founder-timeline-content">
                <p className="founder-timeline-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="founder-evidence-note">Historical note: KodeClub.com is documented in a July 2012 technology-forum record. The exact original domain-registration date is not presented here as a verified fact.</p>
      </section>

      <section className="founder-background-band">
        <div className="container founder-background-grid">
          <div>
            <p className="eyebrow">HOW I THINK ABOUT SOFTWARE</p>
            <h2>Useful software starts with understanding the problem.</h2>
          </div>
          <div className="founder-background-copy">
            <p>I prefer to understand the task, the people involved, and where friction appears before deciding what technology to use.</p>
            <p>A product does not need to be complicated to be valuable. Sometimes the best solution is a focused tool that removes a repetitive step, organizes information better, or makes an everyday workflow easier.</p>
          </div>
        </div>
      </section>

      <section className="section container founder-focus">
        <div className="founder-focus-copy">
          <p className="eyebrow section-label"><span className="tiny-dot" /> CURRENT FOCUS</p>
          <h2>Building across products, systems, and AI.</h2>
          <p className="muted">Today I continue to learn and build through Dovira Labs, combining product thinking with hands-on development.</p>
        </div>
        <div className="founder-focus-grid">
          {focus.map((item) => <div key={item}>{item}</div>)}
        </div>
      </section>

      <section className="founder-closing container">
        <div className="founder-closing-panel">
          <div>
            <p className="eyebrow">DOVIRA LABS</p>
            <h2>Learning from real problems.<br />Building useful solutions.</h2>
          </div>
          <Link className="button" to="/projects">Explore our work <Icon name="arrow" size={18} /></Link>
        </div>
      </section>
    </>
  );
}
