import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";
import { ContactCTA } from "./Home";

export function ReplyPilotPage() {
  return (
    <>
      <div className="hero-surface">
        <section className="hero container">
          <div className="hero-copy">
            <p className="eyebrow hero-label">
              <span className="tiny-dot" /> CREATOR SOFTWARE · DOVIRA LABS
            </p>
            <h1>
              Your Voice. Your Audience. <br />
              <span>Your AI.</span>
            </h1>
            <p className="hero-description">
              ReplyPilot AI is an intelligent YouTube comment management platform and Chrome extension developed and
              operated by <strong>DoviRA Labs</strong>. Built for creators who want to manage
              community engagement efficiently while retaining complete editorial control.
            </p>
            <div className="hero-actions">
              <a
                href="https://ais-dev-jajoeu3ql4kidlwxz7b2gf-174880527786.asia-southeast1.run.app/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                Launch Master Dashboard <Icon name="arrow" size={18} />
              </a>
              <Link to="/support/replypilot-ai" className="button button-outline">
                Setup &amp; Support
              </Link>
            </div>
            <div className="rp-trust-strip">
              <span className="inline-flex items-center gap-2">
                <span className="rp-trust-dot" />
                YouTube Data API v3
              </span>
              <span>·</span>
              <span>Strict Manual Approval</span>
              <span>·</span>
              <span>Multi-Script Intelligence</span>
              <span>·</span>
              <span>Developer Mode (BYOK)</span>
            </div>
          </div>

          <div className="rp-preview-card" aria-label="ReplyPilot AI interface preview">
            <div className="rp-preview-header">
              <span className="rp-dot" />
              <span className="rp-dot" />
              <span className="rp-dot" />
              <span className="rp-preview-title">ReplyPilot Studio · In-Studio Assistant</span>
            </div>
            <div className="rp-preview-body">
              <div className="rp-mock-comment">
                <div className="rp-avatar">H</div>
                <div>
                  <p className="rp-author">Hamza Khan · 2 hours ago</p>
                  <p className="rp-comment-text">
                    Bhai bohot zabardast video banayi hai! Agla part kab aa raha hai?
                  </p>
                  <span className="rp-script-tag">Roman Urdu · Question</span>
                </div>
              </div>
              <div>
                <p className="rp-suggestions-label">Generated Reply Drafts</p>
                <div className="rp-suggestion-item">
                  <strong>Warm &amp; Appreciative</strong>
                  <p>Bohot shukriya bhai! Dil se appreciate karta hoon aapki support ko.</p>
                </div>
                <div className="rp-suggestion-item">
                  <strong>Engaging &amp; Friendly</strong>
                  <p>Shukriya bhai! Agla part next week aa raha hai, aap konsa topic dekhna chahenge?</p>
                </div>
                <div className="rp-suggestion-item">
                  <strong>Short &amp; Concise</strong>
                  <p>Shukriya bhai! Agla part bohot jald aa raha hai.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Dual Experience Architecture */}
      <section className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow section-label">
              <span className="tiny-dot" /> DUAL EXPERIENCE ARCHITECTURE
            </p>
            <h2>Two interfaces. One unified workflow.</h2>
          </div>
          <p className="muted section-aside">
            Work directly inside YouTube Studio or manage multiple channels from a centralized web
            command center.
          </p>
        </div>

        <div className="rp-grid-2">
          <div className="rp-card">
            <div className="rp-card-icon">
              <Icon name="browser" size={22} />
            </div>
            <h3>ReplyPilot Studio Chrome Extension</h3>
            <p className="rp-card-copy">
              Integrates directly into YouTube Studio (<code>studio.youtube.com</code>). Adds an AI
              Reply action beside native comment controls to generate three contextual drafts and
              insert your edited reply without auto-submitting.
            </p>
            <ul className="rp-checklist">
              <li>Inline assistant integrated into YouTube Studio comment threads</li>
              <li>Three distinct draft tones (Warm, Engaging, Concise)</li>
              <li>True Edit-Learning personalized from your manual edits</li>
              <li>Zero autonomous publishing; creator approval required</li>
            </ul>
          </div>

          <div className="rp-card">
            <div className="rp-card-icon">
              <Icon name="cube" size={22} />
            </div>
            <h3>ReplyPilot Master Dashboard</h3>
            <p className="rp-card-copy">
              A standalone web workspace for managing audience conversations across one or more
              connected YouTube channels, complete with status filtering, reply history, and persona
              controls.
            </p>
            <ul className="rp-checklist">
              <li>Unified comment inbox with video context and commenter metadata</li>
              <li>Filter by Unreplied, Replied, Needs Review, or Held for Review</li>
              <li>Multi-channel switcher with live channel statistics</li>
              <li>Centralized persona guidelines and learning memory management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Multi-Script Creator AI */}
      <section className="engineering">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow section-label">
                <span className="tiny-dot" /> MULTI-SCRIPT CREATOR AI
              </p>
              <h2>Understands regional nuance and natural writing.</h2>
            </div>
            <p className="section-aside" style={{ color: "#cbd5e1" }}>
              ReplyPilot AI detects and responds in the same script and conversational register used
              by your audience.
            </p>
          </div>

          <div className="rp-grid-4">
            <div className="rp-dark-card">
              <h4>Roman Urdu</h4>
              <p>Recognizes South Asian Roman script and drafts natural, polite Roman Urdu replies.</p>
              <div className="rp-example-quote">
                "Boht shukriya bhai! Dil se appreciate karta hoon."
              </div>
            </div>

            <div className="rp-dark-card">
              <h4>Urdu (Nastaliq)</h4>
              <p>Native Urdu script detection and generation with culturally appropriate phrasing.</p>
              <div className="rp-example-quote" dir="rtl">
                "بہت بہت شکریہ آپ کی محبت اور حوصلہ افزائی کا۔"
              </div>
            </div>

            <div className="rp-dark-card">
              <h4>Hindi (Devanagari)</h4>
              <p>Understands Devanagari comments and generates clear, respectful Hindi replies.</p>
              <div className="rp-example-quote">"बहुत-बहुत धन्यवाद आपका! जुड़े रहिए।"</div>
            </div>

            <div className="rp-dark-card">
              <h4>English</h4>
              <p>Conversational, community-oriented English replies tailored to your channel tone.</p>
              <div className="rp-example-quote">
                "Thank you for watching and sharing your feedback!"
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Mode & Architecture */}
      <section className="section container">
        <div className="rp-byok-banner">
          <div>
            <span className="status">
              <span /> TRANSPARENT ARCHITECTURE
            </span>
            <h2>Developer Mode &amp; Bring Your Own Key (BYOK)</h2>
            <p>
              Alongside the built-in free tier, creators can enable <strong>Developer Mode</strong>{" "}
              in Dashboard Settings to use their own Google Gemini, Groq, or OpenRouter API keys.
              Personal keys are stored exclusively in your browser&apos;s localStorage and are never
              shared with other accounts.
            </p>
          </div>
          <Link to="/support/replypilot-ai" className="button button-outline" style={{ flexShrink: 0 }}>
            View Setup Guide
          </Link>
        </div>
      </section>

      {/* Google & YouTube Compliance */}
      <section className="section container" style={{ paddingTop: 0 }}>
        <div className="section-heading">
          <div>
            <p className="eyebrow section-label">
              <span className="tiny-dot" /> GOOGLE AND YOUTUBE COMPLIANCE
            </p>
            <h2>Built on transparency, isolation, and user control.</h2>
          </div>
          <p className="muted section-aside">
            ReplyPilot AI adheres to the Google API Services User Data Policy and Limited Use
            requirements.
          </p>
        </div>

        <div className="rp-grid-3">
          <div className="rp-card">
            <h4>Manual Send Control</h4>
            <p className="rp-card-copy">
              ReplyPilot AI never publishes replies automatically. Every AI-generated draft must be
              reviewed, optionally edited, and explicitly approved by the creator before submission.
            </p>
          </div>

          <div className="rp-card">
            <h4>Per-User Data Isolation</h4>
            <p className="rp-card-copy">
              Connected YouTube channels, cached comments, reply history, and learning examples are
              strictly partitioned by Firebase User ID (UID) via Firestore security rules.
            </p>
          </div>

          <div className="rp-card">
            <h4>Input Sanitization</h4>
            <p className="rp-card-copy">
              Viewer comments are treated as untrusted input and sanitized prior to prompt assembly
              to filter out adversarial instructions or code injection patterns.
            </p>
          </div>
        </div>

        <div className="rp-compliance-bar">
          <div>
            <h3>ReplyPilot AI Documentation &amp; Policies</h3>
            <p>
              Official policies for Google OAuth verification, user data rights, and technical support.
            </p>
          </div>
          <div className="page-links" style={{ marginTop: 0 }}>
            <Link to="/privacy/replypilot-ai" className="text-link">
              Privacy Policy →
            </Link>
            <Link to="/terms/replypilot-ai" className="text-link">
              Terms of Service →
            </Link>
            <Link to="/data-deletion" className="text-link">
              Data Deletion →
            </Link>
            <Link to="/support/replypilot-ai" className="text-link">
              Support Guide →
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
