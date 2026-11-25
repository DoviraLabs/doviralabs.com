// DoviRA Labs Website Policies and Product-Specific Policies
// Note: Company policies apply to the doviralabs.com website; product practices are documented separately.

export interface PolicySection {
  title: string;
  copy: string;
  email?: string;
  bullets?: string[];
}

export interface LegalPageConfig {
  label: string;
  title: string;
  intro: string;
  updated: string;
  sections: PolicySection[];
  links: [string, string][];
}

export const legalPages: Record<string, LegalPageConfig> = {
  // ----------------------------------------------------
  // DOVIRA LABS COMPANY-LEVEL POLICIES
  // ----------------------------------------------------
  "/privacy": {
    label: "STUDIO INFORMATION",
    title: "Privacy Policy",
    intro: "How Dovira Labs handles personal information when you use this website or contact us.",
    updated: "2026-09-17",
    sections: [
      {
        title: "About this policy",
        copy: "This policy covers the Dovira Labs website and messages sent to the contact addresses published on it. Product-specific privacy information is provided separately where needed.",
      },
      {
        title: "Information you provide",
        copy: "The website does not currently have account registration or a contact form. If you email Dovira Labs, we receive the information you choose to send, such as your name, email address, message, attachments, and relevant project or product details. Please do not send passwords or other unnecessary sensitive information.",
      },
      {
        title: "How we use information",
        copy: "We use information you send to reply to enquiries, discuss potential work, provide product support, investigate reported issues, and respond to privacy requests. We do not add you to a marketing list simply because you contact us.",
      },
      {
        title: "Website analytics",
        copy: "We use Google Analytics to understand website usage and improve the site. You can accept or reject analytics. Your choice is remembered in your browser, and you can change it at any time using Analytics preferences in the footer.",
      },
      {
        title: "Website operation",
        copy: "The services used to deliver and protect this website may process basic technical information needed to operate, secure, and measure the site. We do not use the website for behavioural advertising or profiling.",
      },
      {
        title: "Service providers",
        copy: "We use service providers to help operate the website, measure website usage, and manage email. They may process information only as needed to provide those services and under their own applicable terms and privacy information. Information may also be disclosed where required by law.",
      },
      {
        title: "How long we keep information",
        copy: "We keep correspondence only for as long as reasonably needed for the enquiry, support, ongoing communication, record-keeping, or legal obligations. Analytics information is retained according to the settings and terms of the analytics service.",
      },
      {
        title: "Your privacy choices",
        copy: "You may contact Dovira Labs to ask about personal information connected with your enquiry or to request access, correction, or deletion where applicable. You can also use browser privacy controls or blocking tools to limit analytics where supported. Please provide enough detail for us to identify the relevant correspondence without sending unnecessary sensitive information.",
        email: "privacy@doviralabs.com",
      },
      {
        title: "Security and updates",
        copy: "We take reasonable care when operating the website and handling communications, but no online service can guarantee absolute security. We may update this policy as the website, products, or working practices change.",
      },
    ],
    links: [
      ["ReplyPilot AI Privacy", "/privacy/replypilot-ai"],
      ["App Lock privacy", "/privacy/app-lock"],
      ["Contact", "/contact"],
    ],
  },

  "/terms": {
    label: "STUDIO INFORMATION",
    title: "Terms of Use",
    intro: "Terms for using the Dovira Labs website.",
    updated: "2026-09-13",
    sections: [
      {
        title: "Using this website",
        copy: "You may browse this website and contact Dovira Labs for lawful personal or business purposes. By using the site, you agree to these terms to the extent permitted by applicable law.",
      },
      {
        title: "Acceptable use",
        copy: "Do not use the website for unlawful activity, spam, impersonation, harassment, infringement, malicious code, unauthorised access attempts, or disruption of the website or its services.",
      },
      {
        title: "Products and work in progress",
        copy: "Product and project pages may describe released work, concepts, experiments, or products still in development. Unless clearly stated otherwise, website content is for information only and does not guarantee features, availability, launch dates, support, or a commercial agreement. Separate terms may apply when a product or service is offered.",
      },
      {
        title: "Intellectual property",
        copy: "Dovira Labs branding, website content, artwork, design, and code may be protected by intellectual-property laws. Viewing the website does not transfer ownership or grant permission to reuse protected material commercially.",
      },
      {
        title: "Third-party links",
        copy: "The website may link to third-party websites, applications, stores, or services. Those services have their own terms and policies, and Dovira Labs is not responsible for their content, security, or availability.",
      },
      {
        title: "Availability and accuracy",
        copy: "The website, its content, and product plans may change, be corrected, interrupted, or removed. We take reasonable care when publishing information but cannot guarantee that every page will always be complete, current, error-free, or continuously available.",
      },
      {
        title: "Liability",
        copy: "To the extent permitted by applicable law, Dovira Labs is not responsible for indirect or consequential loss arising solely from use of, or inability to use, this informational website. Nothing in these terms limits liability where doing so would be unlawful.",
      },
      {
        title: "Changes to these terms",
        copy: "We may update these terms as the website or Dovira Labs activities change. The latest revision date is shown on this page.",
      },
      {
        title: "Contact",
        copy: "For questions about these terms or general business enquiries, contact Dovira Labs.",
        email: "hello@doviralabs.com",
      },
    ],
    links: [
      ["Privacy", "/privacy"],
      ["ReplyPilot AI Terms", "/terms/replypilot-ai"],
      ["Contact", "/contact"],
    ],
  },

  // ----------------------------------------------------
  // REPLYPILOT AI PRODUCT-SPECIFIC POLICIES
  // ----------------------------------------------------
  "/privacy/replypilot-ai": {
    label: "REPLYPILOT AI / PRIVACY",
    title: "ReplyPilot AI Privacy Policy",
    intro:
      "This Privacy Policy describes how ReplyPilot AI, developed and operated by DoviRA Labs, accesses, processes, and protects your data when connecting your YouTube channel.",
    updated: "2026-11-25",
    sections: [
      {
        title: "1. Overview & Google OAuth Access",
        copy: "ReplyPilot AI is an assistive YouTube comment management platform and Chrome extension. When you connect a YouTube channel, ReplyPilot AI requests access via Google OAuth 2.0 to the scope https://www.googleapis.com/auth/youtube.force-ssl. This scope is used strictly to read comments on your channel, detect moderation state, generate AI reply suggestions, and publish replies that you manually approve.",
      },
      {
        title: "2. Google API Services User Data Policy & Limited Use",
        copy: "ReplyPilot AI's use and transfer of information received from Google APIs to any other app will adhere to the Google API Services User Data Policy, including the Limited Use requirements. We do not use Google user data for advertising, user profiling, or data resale. We do not transfer Google user data to third parties except as strictly necessary to provide the core comment management features of ReplyPilot AI or as required by law.",
      },
      {
        title: "3. Information Accessed & Stored",
        copy: "When authorized, ReplyPilot AI accesses and handles:",
        bullets: [
          "Account Credentials: Authentication identifiers and verified email managed securely via Firebase Authentication.",
          "YouTube Channel Data: Channel ID, channel title, subscriber count, and avatar via YouTube Data API v3.",
          "YouTube Comments: Comment text, comment IDs, parent thread IDs, commenter display names, and publication timestamps.",
          "Creator Reply History: Drafts and final replies that you review, edit, and approve for publication.",
          "AI Preferences & Memory: Your selected tone preferences, channel guidelines, and up to 50 examples of your edited replies stored for personalized draft generation.",
          "Developer Mode (BYOK) Keys: If you enable Developer Mode, personal API keys (such as Google Gemini, Groq, or OpenRouter) remain stored locally in your browser's localStorage.",
        ],
      },
      {
        title: "4. AI Processing",
        copy: "To generate reply suggestions, the viewer's comment text and video title are processed by Google Gemini API (or your custom BYOK provider if enabled). Viewer comments are sanitized before prompt assembly. DoviRA Labs does not permit third-party AI providers to use your private channel data for foundational model training.",
      },
      {
        title: "5. Data Storage, Security & Isolation",
        copy: "Application data is stored in Google Cloud Firestore and partitioned strictly by Firebase User ID (UID). Security rules enforce owner-only read and write access on all collections so that no user can view or modify another creator's data.",
      },
      {
        title: "6. Data Retention, Disconnection & Deletion",
        copy: "You may disconnect your channel at any time from the ReplyPilot dashboard or revoke access via Google Account Permissions (https://myaccount.google.com/permissions). To request complete account and data deletion, visit our Data Deletion page or email privacy@doviralabs.com.",
        email: "privacy@doviralabs.com",
      },
    ],
    links: [
      ["ReplyPilot AI Terms", "/terms/replypilot-ai"],
      ["Google User Data Deletion", "/data-deletion"],
      ["ReplyPilot AI Support", "/support/replypilot-ai"],
      ["About ReplyPilot AI", "/replypilot-ai"],
    ],
  },

  "/terms/replypilot-ai": {
    label: "REPLYPILOT AI / TERMS",
    title: "ReplyPilot AI Terms of Service",
    intro:
      "These Terms of Service govern your use of the ReplyPilot AI web platform and ReplyPilot Studio Chrome extension.",
    updated: "2026-11-25",
    sections: [
      {
        title: "1. Acceptance & Service Description",
        copy: "ReplyPilot AI is a creator software tool developed by DoviRA Labs. By connecting your YouTube channel or using the platform, you agree to these Terms and the YouTube Terms of Service (https://www.youtube.com/t/terms).",
      },
      {
        title: "2. Manual Approval Requirement",
        copy: "ReplyPilot AI is strictly an assistive productivity tool. YOU ARE SOLELY RESPONSIBLE FOR REVIEWING, EDITING, AND APPROVING ANY AI-GENERATED REPLY BEFORE IT IS PUBLISHED TO YOUTUBE. ReplyPilot AI never publishes content autonomously.",
      },
      {
        title: "3. Acceptable Use",
        copy: "You may not use ReplyPilot AI to post spam, engage in harassment, violate YouTube Community Guidelines, attempt to bypass access controls, or interfere with service operation.",
      },
      {
        title: "4. AI Outputs & Disclaimers",
        copy: "Reply suggestions are generated using probabilistic machine learning models. DoviRA Labs does not guarantee the factual accuracy or suitability of generated drafts. If you use Developer Mode (BYOK), you are responsible for maintaining your own API keys.",
      },
      {
        title: "5. Limitation of Liability & Contact",
        copy: "To the maximum extent permitted by law, DoviRA Labs shall not be liable for any indirect or consequential damages arising from your use of the service. For inquiries, contact:",
        email: "hello@doviralabs.com",
      },
    ],
    links: [
      ["ReplyPilot AI Privacy", "/privacy/replypilot-ai"],
      ["Google User Data Deletion", "/data-deletion"],
      ["ReplyPilot AI Support", "/support/replypilot-ai"],
    ],
  },

  "/support/replypilot-ai": {
    label: "REPLYPILOT AI / SUPPORT",
    title: "ReplyPilot AI Support & Guide",
    intro:
      "Setup instructions, FAQs, and technical troubleshooting for ReplyPilot AI and the ReplyPilot Studio Chrome extension.",
    updated: "2026-11-25",
    sections: [
      {
        title: "1. Connecting Your YouTube Channel",
        copy: "Sign in with Google and grant the requested YouTube permissions. This allows ReplyPilot AI to read comments on your channel and publish replies that you manually approve.",
      },
      {
        title: "2. Generating & Editing Replies",
        copy: "Select any comment in the Master Dashboard or YouTube Studio to view three distinct drafts (Warm, Engaging, Concise). You can edit any draft prior to sending. Your manual edits help train your 50-example personalized memory bank.",
      },
      {
        title: "3. Developer Mode (BYOK)",
        copy: "If you have personal API keys from Google AI Studio (Gemini), Groq, or OpenRouter, you can enable Developer Mode in Settings to test without server rate limits. Keys are stored locally in your browser.",
      },
      {
        title: "4. Technical Support Contact",
        copy: "If you encounter an issue connecting your channel or generating replies, contact our technical team with your registered email and channel handle:",
        email: "support@doviralabs.com",
      },
    ],
    links: [
      ["About ReplyPilot AI", "/replypilot-ai"],
      ["ReplyPilot AI Privacy", "/privacy/replypilot-ai"],
      ["ReplyPilot AI Terms", "/terms/replypilot-ai"],
      ["Google User Data Deletion", "/data-deletion"],
    ],
  },

  "/data-deletion": {
    label: "USER DATA & PRIVACY RIGHTS",
    title: "Google User Data Deletion",
    intro:
      "DoviRA Labs provides straightforward procedures to disconnect your YouTube channel and request complete deletion of your Google user data.",
    updated: "2026-11-25",
    sections: [
      {
        title: "1. Disconnecting Your YouTube Channel",
        copy: "You can revoke ReplyPilot AI's access at any time using either method:",
        bullets: [
          "In-App Disconnection: Open the ReplyPilot Master Dashboard, go to 'Connected Channels', and click 'Disconnect' next to your channel.",
          "Google Account Permissions: Visit Google Third-Party Permissions (https://myaccount.google.com/permissions), select 'ReplyPilot AI', and click 'Remove Access'.",
        ],
      },
      {
        title: "2. Requesting Permanent Data Deletion",
        copy: "To permanently delete your ReplyPilot AI account profile and all associated data, email privacy@doviralabs.com with the subject line 'Data Deletion Request' and include your connected channel name. Deletion requests are processed within 7 business days with written confirmation.",
        email: "privacy@doviralabs.com",
      },
      {
        title: "3. Data Permanently Removed",
        copy: "Upon completion of your request, we permanently remove:",
        bullets: [
          "Your Firebase user authentication record and profile.",
          "Stored YouTube channel metadata and connection records.",
          "Cached comment text, comment IDs, and author information.",
          "Your reply history, generated suggestions, and personalized learning examples.",
        ],
      },
      {
        title: "4. Contact Privacy Support",
        copy: "For questions or assistance with user data deletion, contact our privacy team:",
        email: "privacy@doviralabs.com",
      },
    ],
    links: [
      ["ReplyPilot AI Privacy", "/privacy/replypilot-ai"],
      ["ReplyPilot AI Terms", "/terms/replypilot-ai"],
      ["ReplyPilot AI Support", "/support/replypilot-ai"],
    ],
  },

  // ----------------------------------------------------
  // GENERAL DOVIRA LABS SUPPORT DIRECTORY
  // ----------------------------------------------------
  "/support": {
    label: "STUDIO SUPPORT",
    title: "Support Directory",
    intro: "Get help with Dovira Labs products or contact our team.",
    updated: "2026-11-25",
    sections: [
      {
        title: "Product Support Centers",
        copy: "Please visit the dedicated support page for the product you are using:",
        bullets: [
          "ReplyPilot AI: Setup guides, YouTube OAuth troubleshooting, and extension support at /support/replypilot-ai",
          "App Lock: Android app release information and support at /support/app-lock",
        ],
      },
      {
        title: "Direct Contact Directory",
        copy: "For general inquiries or assistance, reach our teams directly:",
        bullets: [
          "Technical & Product Support: support@doviralabs.com",
          "Privacy & Data Protection: privacy@doviralabs.com",
          "General Studio & Partnerships: hello@doviralabs.com",
        ],
        email: "support@doviralabs.com",
      },
    ],
    links: [
      ["ReplyPilot AI Support", "/support/replypilot-ai"],
      ["App Lock Support", "/support/app-lock"],
      ["Contact Dovira Labs", "/contact"],
    ],
  },
};
