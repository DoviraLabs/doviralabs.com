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
        "copy": "This policy covers the Dovira Labs website and messages sent to the contact addresses published on it. Product-specific privacy information is provided separately where needed."
      },
      {
        "title": "Information you provide",
        "copy": "The website does not currently have account registration or a contact form. If you email Dovira Labs, we receive the information you choose to send, such as your name, email address, message, attachments, and relevant project or product details. Please do not send passwords or other unnecessary sensitive information."
      },
      {
        "title": "How we use information",
        "copy": "We use information you send to reply to enquiries, discuss potential work, provide product support, investigate reported issues, and respond to privacy requests. We do not add you to a marketing list simply because you contact us."
      },
      {
        "title": "Website data and cookies",
        "copy": "The services used to deliver and protect this website may process basic technical information needed to operate the site. We do not use the website for advertising or behavioural profiling, and the current website does not set non-essential cookies."
      },
      {
        "title": "Service providers",
        "copy": "We use service providers to help operate the website and manage email. They may process information only as needed to provide those services and under their own applicable terms and privacy information. Information may also be disclosed where required by law."
      },
      {
        "title": "How long we keep information",
        "copy": "We keep correspondence only for as long as reasonably needed for the enquiry, support, ongoing communication, record-keeping, or legal obligations."
      },
      {
        "title": "Your privacy choices",
        "copy": "You may contact Dovira Labs to ask about personal information connected with your enquiry or to request access, correction, or deletion where applicable. Please provide enough detail for us to identify the relevant correspondence without sending unnecessary sensitive information.",
        "email": "privacy@doviralabs.com"
      },
      {
        "title": "Security and updates",
        "copy": "We take reasonable care when operating the website and handling communications, but no online service can guarantee absolute security. We may update this policy as the website, products, or working practices change."
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
    "intro": "Terms for using the Dovira Labs website and related services.",
    "updated": "2026-09-13",
    "sections": [
      {
        "title": "Using this website",
        "copy": "You may browse this website and contact Dovira Labs for lawful personal or business purposes. By using the site, you agree to these terms to the extent permitted by applicable law."
      },
      {
        "title": "Acceptable use",
        "copy": "Do not use the website for unlawful activity, spam, impersonation, harassment, infringement, malicious code, unauthorised access attempts, or disruption of the website or its services."
      },
      {
        "title": "Products and work in progress",
        "copy": "Product and project pages may describe released work, concepts, experiments, or products still in development. Unless clearly stated otherwise, website content is for information only and does not guarantee features, availability, launch dates, support, or a commercial agreement. Separate terms may apply when a product or service is offered."
      },
      {
        "title": "Intellectual property",
        "copy": "Dovira Labs branding, website content, artwork, design, and code may be protected by intellectual-property laws. Viewing the website does not transfer ownership or grant permission to reuse protected material commercially."
      },
      {
        "title": "Third-party links",
        "copy": "The website may link to third-party websites, applications, stores, or services. Those services have their own terms and policies, and Dovira Labs is not responsible for their content, security, or availability."
      },
      {
        "title": "Availability and accuracy",
        "copy": "The website, its content, and product plans may change, be corrected, interrupted, or removed. We take reasonable care when publishing information but cannot guarantee that every page will always be complete, current, error-free, or continuously available."
      },
      {
        "title": "Liability",
        "copy": "To the extent permitted by applicable law, Dovira Labs is not responsible for indirect or consequential loss arising solely from use of, or inability to use, this informational website. Nothing in these terms limits liability where doing so would be unlawful."
      },
      {
        "title": "Changes to these terms",
        "copy": "We may update these terms as the website or Dovira Labs activities change. The latest revision date is shown on this page."
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
