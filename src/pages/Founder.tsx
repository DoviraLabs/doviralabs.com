import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";

const journey = [
  {
    year: "2010",
    title: "The beginning",
    label: "Learning the web by building",
    copy: "My journey with technology started around 2010, when I began exploring websites, online tools, and the way software could make everyday work easier. At first it was driven by curiosity: learning how things worked, experimenting with ideas, and gradually understanding how a simple digital tool could solve a real problem. Those early experiments shaped a practical way of learning that still guides me today — build something, see how it works in the real world, notice the friction, and improve it.",
  },
  {
    year: "2012",
    title: "KodeClub.com",
    label: "An early project that shaped the journey",
    copy: "By 2012, that curiosity had grown into more serious hands-on projects such as KodeClub.com. It became an important milestone in my early web journey and helped me move beyond simply learning how websites were made. I became more interested in how people use online services, how digital workflows fit together, and how technology can make repetitive or complicated tasks simpler. KodeClub was one of the projects that helped turn experimentation into a deeper interest in building useful software.",
  },
  {
    year: "Learning & building",
    title: "From websites to systems",
    label: "Expanding the toolkit",
    copy: "Over the years, my interests expanded beyond traditional websites into Android apps, browser tools, business software, automation, web applications, and practical uses of AI. Working around real business processes also changed the way I thought about software. Instead of seeing technology as isolated features or code, I became more interested in the complete system — the people using it, the information moving through it, the repetitive steps, and the places where a better tool could save time or reduce friction.",
  },
  {
    year: "Today",
    title: "Dovira Labs",
    label: "Turning experience into useful products",
    copy: "Dovira Labs brings that journey together. Today I use what I have learned across business, systems, and technology to explore and build practical digital products — from web applications and Android apps to browser tools, business software, automation, and AI-powered products. The technology has changed a lot since those early experiments, but the principle behind the work has stayed consistent: understand the problem first, build something useful, and keep improving it.",
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
            <h2>Building, learning &amp; experimenting on the web since 2010.</h2>
            <p>What started with early web experiments grew into a broader interest in software, workflows, automation, and useful digital products.</p>
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
