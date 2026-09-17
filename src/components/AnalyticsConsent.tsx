import { useEffect, useRef, useState } from "react";
import "./analytics-consent.css";

type Choice = "accepted" | "rejected";

declare global {
  interface Window {
    analyticsConsent: {
      choice: Choice | null;
      set: (choice: Choice) => void;
    };
  }
}

export function AnalyticsConsent() {
  const [visible, setVisible] = useState(() => !window.analyticsConsent.choice);
  const [reopened, setReopened] = useState(false);
  const preferences = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);

  useEffect(() => {
    if (visible && reopened) panel.current?.focus();
  }, [visible, reopened]);

  function choose(choice: Choice) {
    window.analyticsConsent.set(choice);
    setVisible(false);
    if (reopened) preferences.current?.focus({ preventScroll: true });
    else document.getElementById("main")?.focus({ preventScroll: true });
  }

  return (
    <>
      <button
        ref={preferences}
        type="button"
        className="analytics-preferences"
        aria-expanded={visible}
        aria-controls={visible ? "analytics-consent" : undefined}
        onClick={() => { setReopened(true); setVisible(true); }}
      >
        Analytics preferences
      </button>
      {visible && (
        <section
          ref={panel}
          id="analytics-consent"
          className="analytics-consent"
          aria-label="Analytics preferences"
          aria-describedby="analytics-consent-copy"
          tabIndex={-1}
        >
          <p id="analytics-consent-copy">
            We use analytics to understand website usage and improve the site.
          </p>
          <div className="analytics-consent-actions">
            <button type="button" onClick={() => choose("accepted")}>Accept</button>
            <button type="button" onClick={() => choose("rejected")}>Reject</button>
          </div>
        </section>
      )}
    </>
  );
}
