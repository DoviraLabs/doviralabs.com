// Website policies only; product practices must be verified separately.
export const legalPages: Record<string, { label: string; title: string; intro: string; updated: string; sections: { title: string; copy: string; email?: string }[]; links: [string, string][] }> = {
  "/privacy": {
    "label": "STUDIO INFORMATION",
    "title": "Privacy Policy",
    "intro": "How Dovira Labs handles information in connection with this website and messages you choose to send.",
    "updated": "2026-09-09",
    "sections": [
      {
        "title": "About this policy",
        "copy": "Dovira Labs is an independent software studio. This policy covers the Dovira Labs website and contact, support, and privacy communications. It does not describe data processing inside App Lock or other products; product-specific privacy information must be verified separately."
      },
      {
        "title": "Information you choose to provide",
        "copy": "This website has no account registration, contact form, or file-upload feature. If you email us, your message provides your email address and any name, message text, attachments, or product details you include. Share only what is needed for your inquiry. Do not send passwords, PINs, or other sensitive information."
      },
      {
        "title": "How communications are used",
        "copy": "Information you send is used to understand and respond to your inquiry, discuss potential work, investigate a reported problem, or handle a privacy request. Sending an inquiry does not sign you up to a mailing list. The website does not provide a newsletter subscription or marketing opt-in."
      },
      {
        "title": "Website delivery and technical information",
        "copy": "Cloudflare provides website hosting, CDN, and infrastructure services for Dovira Labs. Your browser sends connection information, such as an IP address and request headers, to request and receive website files. Cloudflare may also process technical information through its own infrastructure under its applicable policies and service settings. The website code does not send visitor information to a separate analytics or telemetry service. This notice does not specify unverified infrastructure logging practices, retention periods, or processing locations."
      },
      {
        "title": "Cookies, browser storage, and tracking",
        "copy": "The current website code does not set cookies or use localStorage, sessionStorage, or a browser database. It contains no advertising trackers, tracking pixels, analytics integrations, authentication cookies, or embedded third-party services. It uses local assets and system fonts. Ordinary browser caching of website files is separate from tracking. No non-essential cookie consent banner is used for this implementation."
      },
      {
        "title": "Email services and disclosure",
        "copy": "Contact links use mailto and open your email application; this website has no contact form or backend message submission. Incoming @doviralabs.com email is handled through Cloudflare Email Routing and received and managed through Gmail. Outbound @doviralabs.com email may be sent using Brevo SMTP. Sending and receiving messages involves these services and your own email provider. Those providers may process message content and related technical information as part of their services under applicable policies and settings. This notice does not claim exact provider retention periods, processing locations, or security practices. Information may also need to be disclosed where applicable law requires it."
      },
      {
        "title": "Retention and deletion",
        "copy": "Website files do not define a retention schedule for email correspondence or infrastructure logs. Those records are managed outside the website. Contact us to ask what information is held about your inquiry or to request deletion. The applicable purpose, ongoing correspondence, and any legal obligations need to be considered when handling a request; no fixed deletion deadline or backup-erasure guarantee is stated here."
      },
      {
        "title": "Security",
        "copy": "No website or email system can guarantee absolute security. Avoid sending credentials or unnecessary sensitive information. If you believe you have disclosed information in error or have a privacy concern, contact our privacy address. This policy makes no claim about unverified encryption, mailbox controls, or product security measures."
      },
      {
        "title": "Third-party destinations",
        "copy": "If you follow a link to a third-party service or use an email application, that service operates under its own terms and privacy information. This website policy does not govern those services or their handling of information."
      },
      {
        "title": "Children and personal information",
        "copy": "The website has no child-specific registration or age-verification feature. Children should avoid sending personal information without a parent or guardian’s involvement. A parent or guardian with concerns about information sent to Dovira Labs can contact the privacy address."
      },
      {
        "title": "Privacy questions and data requests",
        "copy": "Email us to ask about your information or request access, correction, or deletion. Depending on applicable law, you may also have rights to object to or restrict processing, receive a portable copy, or complain to a relevant data-protection authority. Include enough context to locate the relevant correspondence without sending unnecessary identification. We may need to verify that a request relates to you. The rights and exceptions that apply depend on your circumstances and applicable law.",
        "email": "privacy@doviralabs.com"
      },
      {
        "title": "Changes to this policy",
        "copy": "Changes will be posted on this page with an updated revision date. Product policies remain separate. Review this page when returning to the website or before sharing information."
      }
    ],
    "links": [
      [
        "App Lock privacy",
        "/privacy/app-lock"
      ],
      [
        "Contact",
        "/contact"
      ]
    ]
  },
  "/terms": {
    "label": "STUDIO INFORMATION",
    "title": "Terms of Use",
    "intro": "Terms for using the Dovira Labs website.",
    "updated": "2026-09-09",
    "sections": [
      {
        "title": "Scope and acceptance",
        "copy": "Dovira Labs is an independent software studio. These terms apply to your use of this website. By using it, you agree to these terms to the extent permitted by applicable law. If you do not agree, please stop using the website. Nothing here removes rights that applicable law does not allow to be waived."
      },
      {
        "title": "Using the website",
        "copy": "You may browse the website and contact Dovira Labs for lawful personal or business purposes. You are responsible for your use of the website, your device and connection, and the information you choose to send. Do not send material you have no right to share or disclose someone else’s confidential information."
      },
      {
        "title": "Products and services",
        "copy": "Product pages provide information about Dovira Labs products and work in development. They do not create a service contract, purchase, license, or support commitment. Any product-specific terms or separate agreement supplied for a product or service apply to that product or engagement. App Lock privacy information does not describe other products."
      },
      {
        "title": "Intellectual property",
        "copy": "Website content, branding, artwork, and code may be protected by intellectual-property laws. Viewing the website does not transfer ownership or grant a right to reuse Dovira Labs branding commercially. Obtain permission before reuse unless applicable law or an identified license permits it. Third-party materials remain subject to their respective rights and licenses."
      },
      {
        "title": "Acceptable use",
        "copy": "Do not use the website for unlawful activity, impersonation, spam, infringement, or harassment. Do not introduce malicious code, attempt unauthorized access, bypass security controls, or disrupt the website or its availability to others."
      },
      {
        "title": "Third-party services and links",
        "copy": "Third-party websites, applications, and services are governed by their own terms. A link does not guarantee their accuracy, safety, or availability. Review their terms before using them."
      },
      {
        "title": "Availability and changes",
        "copy": "Website content and product plans may change. An in-development listing is not a promise of release, a particular feature, or a launch date. The website may be updated, interrupted, or withdrawn. No uninterrupted availability, fixed support response time, or guaranteed fix is promised."
      },
      {
        "title": "Disclaimers",
        "copy": "To the extent permitted by applicable law, the website and its information are provided as available, without a guarantee that all content is complete, current, or free from errors. Evaluate information before relying on it. These terms do not override an express commitment in a separate agreement or a protection that applicable law requires."
      },
      {
        "title": "Limits of liability",
        "copy": "To the extent permitted by applicable law, Dovira Labs excludes liability for indirect or consequential loss arising from use of this website. Nothing in these terms excludes or limits liability where doing so would be unlawful, including liability for fraud or other liability that applicable law does not permit to be excluded. No monetary liability cap is established here."
      },
      {
        "title": "Changes to these terms",
        "copy": "Revisions will be posted here with a new last-updated date. Review the current terms when using the website. A change to this page does not by itself amend a separate agreement you have with Dovira Labs."
      },
      {
        "title": "Contact",
        "copy": "For questions about these website terms, general inquiries, or business conversations, contact Dovira Labs.",
        "email": "hello@doviralabs.com"
      }
    ],
    "links": [
      [
        "Privacy",
        "/privacy"
      ],
      [
        "Contact",
        "/contact"
      ]
    ]
  }
};
