// Website policies only; product practices must be verified separately.
export const legalPages: Record<string, { label: string; title: string; intro: string; updated: string; sections: { title: string; copy: string; email?: string }[]; links: [string, string][] }> = {
  "/privacy": {
    "label": "STUDIO INFORMATION",
    "title": "Privacy Policy",
    "intro": "How Dovira Labs handles personal information when you use this website or contact us.",
    "updated": "2026-09-13",
    "sections": [
      {
        "title": "About this policy",
        "copy": "This policy covers the Dovira Labs website and messages sent to the contact addresses published on it. Product-specific privacy information, including App Lock privacy information, is provided separately."
      },
      {
        "title": "Information you provide",
        "copy": "This website has no account registration, contact form, or file-upload feature. If you email Dovira Labs, we receive the information you choose to include, such as your email address, name, message, attachments, and relevant product or project details. Please do not send passwords, PINs, or other unnecessary sensitive information."
      },
      {
        "title": "How we use information",
        "copy": "We use information you send to reply to enquiries, discuss potential work, provide support, investigate reported issues, and handle privacy requests. Sending an enquiry does not add you to a marketing list or newsletter."
      },
      {
        "title": "Technical information",
        "copy": "When you visit the website, your browser and the services used to deliver the site process normal technical information needed to serve pages, such as an IP address, request headers, requested URLs, and connection data. The website code does not include advertising trackers or marketing pixels. Hosting, network, security, delivery, and performance services may process technical information as part of providing and monitoring the website."
      },
      {
        "title": "Cookies and tracking",
        "copy": "The current website does not set non-essential cookies and does not use browser storage for advertising or profiling. It does not include advertising trackers, marketing pixels, an account system, or embedded third-party media. Normal browser caching and security or delivery features are separate from advertising tracking."
      },
      {
        "title": "Email and service providers",
        "copy": "Contact links open your email application; the website has no contact-form backend. Email, hosting, network, and security providers may process information as needed to deliver the website and send, receive, or manage messages. They operate under their own applicable terms and privacy information. Information may also be disclosed where required by law."
      },
      {
        "title": "How long we keep information",
        "copy": "We keep correspondence only for as long as it is reasonably needed for the enquiry, ongoing communication, support, record-keeping, or legal obligations. Retention periods can vary depending on the situation and the services used."
      },
      {
        "title": "Your privacy choices",
        "copy": "You may contact Dovira Labs to ask about personal information connected with your enquiry or to request access, correction, or deletion. Other rights may apply depending on the law that applies to you. Please give enough detail to identify the relevant correspondence without sending unnecessary identification documents or sensitive information.",
        "email": "privacy@doviralabs.com"
      },
      {
        "title": "Security",
        "copy": "We take reasonable care when operating the website and handling communications, but no website, network, or email system can guarantee absolute security. Please avoid sending credentials or unnecessary sensitive information."
      },
      {
        "title": "Changes to this policy",
        "copy": "We may update this policy as the website, products, or working practices change. The latest revision date is shown on this page. Product-specific privacy information remains separate from this website policy."
      }
    ],
    "links": [
      ["App Lock privacy", "/privacy/app-lock"],
      ["Contact", "/contact"]
    ]
  },
  "/terms": {
    "label": "STUDIO INFORMATION",
    "title": "Terms of Use",
    "intro": "Simple terms for using the Dovira Labs website.",
    "updated": "2026-09-13",
    "sections": [
      {
        "title": "Using this website",
        "copy": "You may browse this website and contact Dovira Labs for lawful personal or business purposes. By using the site, you agree to these terms to the extent permitted by applicable law. Nothing here removes rights that the law does not allow to be excluded or waived."
      },
      {
        "title": "Acceptable use",
        "copy": "Do not use the website for unlawful activity, spam, impersonation, harassment, infringement, malicious code, unauthorised access attempts, or disruption of the site or its services. You are responsible for ensuring that you have the right to share any information you send to us."
      },
      {
        "title": "Products and work in progress",
        "copy": "Product and project pages may describe released work, concepts, experiments, or products still in development. Unless clearly stated otherwise, website content is for information only and does not create a purchase, licence, service contract, support commitment, feature guarantee, or launch-date promise. Separate product terms or agreements may apply when a product or service is offered."
      },
      {
        "title": "Intellectual property",
        "copy": "Website content, branding, artwork, design, and code may be protected by intellectual-property laws. Viewing the website does not transfer ownership or give permission to reuse Dovira Labs branding or content commercially. Third-party materials remain subject to the rights and licences that apply to them."
      },
      {
        "title": "Third-party links",
        "copy": "The website may link to third-party websites, applications, stores, or services. Those services have their own terms and policies. Dovira Labs is not responsible for their content, security, availability, or continued operation."
      },
      {
        "title": "Availability and accuracy",
        "copy": "The website, its content, and product plans may change, be corrected, interrupted, or removed. We take reasonable care when publishing information, but we do not promise that every page will always be complete, current, error-free, or continuously available."
      },
      {
        "title": "Liability",
        "copy": "To the extent permitted by applicable law, Dovira Labs is not responsible for indirect or consequential loss arising solely from use of, or inability to use, this informational website. Nothing in these terms excludes or limits liability where doing so would be unlawful."
      },
      {
        "title": "Changes to these terms",
        "copy": "We may update these terms as the website or Dovira Labs activities change. The latest revision date is shown on this page. Changes to these website terms do not change a separate written agreement."
      },
      {
        "title": "Contact",
        "copy": "For questions about these terms or general business enquiries, contact Dovira Labs.",
        "email": "hello@doviralabs.com"
      }
    ],
    "links": [
      ["Privacy", "/privacy"],
      ["Contact", "/contact"]
    ]
  }
};
