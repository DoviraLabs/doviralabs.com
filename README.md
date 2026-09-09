# doviralabs.com

The official Dovira Labs website: an independent software studio and founder portfolio foundation. Built with React, TypeScript, Vite, React Router, and Tailwind CSS using the [official Vite integration](https://tailwindcss.com/docs/installation/using-vite). No remote fonts, stock imagery, analytics, or additional UI libraries are required.

## Local development

Use Node.js 22.12+ (or a compatible newer LTS release) with npm.

```sh
npm ci
npm run dev
```

Vite prints the development URL, normally `http://localhost:5173`.

```sh
npm run typecheck
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
```

The production preview is available at `http://127.0.0.1:4173`. Build output is `dist/`. The build includes strict TypeScript checks. A separate linter is not configured.

### This workspace's npm fallback

The provided environment has Node but does not expose npm on PATH. A local npm runtime was downloaded into the ignored `.tools/` directory. On this machine, the equivalent commands are:

```powershell
node .tools/package/bin/npm-cli.js run dev
node .tools/package/bin/npm-cli.js run build
node .tools/package/bin/npm-cli.js run preview -- --host 127.0.0.1 --port 4173
```

This runtime is a local convenience only; ordinary checkouts use standard npm commands.

## Structure and editing

- `src/components/`: inline SVG icons and reusable product cards.
- `src/components/ProductEcosystem.tsx`: conceptual hero interfaces and the shared App Lock phone illustration; replaceable with verified product imagery later.
- `src/layouts/SiteLayout.tsx`: shared header, responsive navigation, footer, and route scrolling.
- `src/pages/Home.tsx`: homepage sections and reusable contact CTA.
- `src/pages/Pages.tsx`: project listing, App Lock detail, information pages, and not-found page.
- `src/data/products.ts`: editable product descriptions, categories, and status labels.
- `src/App.tsx`: routes and route-specific document metadata.
- `src/styles/index.css`: Tailwind import, visual tokens, layouts, responsive rules, and reduced-motion support.
- `public/favicon.svg`: replaceable initial favicon.
- `index.html`: initial homepage metadata and canonical URL.

Artwork is decorative CSS and inline SVG, not product screenshots. Product concepts and unfinished content are explicitly labeled. The contact page intentionally contains no unverified address or nonfunctional submission form.

The visual system uses cool off-white, white surfaces, near-black type, and restrained electric blue. The sticky header, layered interface studies, large App Lock showcase, smaller upcoming-product cards, and graphite engineering section share the same responsive system. Hero movement runs once for at most five seconds; intersection-based reveals and hover transitions respect `prefers-reduced-motion`. Content remains visible when observers or animations are unavailable.

## Routes

`/`, `/projects`, `/projects/app-lock`, `/privacy`, `/privacy/app-lock`, `/support`, `/support/app-lock`, `/terms`, and `/contact`. Unrecognized routes show a consistent not-found view. About and Engineering are homepage section links.

## Cloudflare Pages readiness

When deployment is authorized, use the repository root, build command `npm run build`, and output directory `dist`. `public/_redirects` is copied to the build output and rewrites routes to `/index.html` for SPA deep links. No server, API, or environment secrets are required.

No deployment, push, or pull request was performed. This is a client-rendered SPA. The build writes a static HTML head for each of the nine routes, with unique titles, descriptions, canonical and Open Graph URLs. Page content still requires JavaScript. The canonical origin remains the existing https://doviralabs.com; confirm it before launch. Unknown paths render a not-found view with the SPA fallback's HTTP 200 response.

## Content to finalize before launch

- Confirm App Lock description, features, release status, and any store link.
- Confirm or replace the two exploratory product concepts.
- Review the concise Danish Sheikh founder biography; optionally supply a portrait.
- Official channels: hello@doviralabs.com (business/contact), support@doviralabs.com (product support), privacy@doviralabs.com (privacy/data requests).
- Review the website policies and operational privacy gaps in LEGAL-AUDIT.md. App Lock still requires a verified product privacy policy before publication.
- Replace the provisional favicon and wordmark if final brand assets are available.

## Verification

The initial production build and strict type check pass; npm reported zero known vulnerabilities at installation. Browser checks covered all nine routes plus the not-found page, route titles, mobile menu navigation and Escape dismissal, and homepage overflow checks at 320, 390, 768, 1024, and 1440 pixel viewport settings. No browser warnings or errors were reported. Recheck after changing content or dependencies.

## September 2026 refinement QA

Preserved the approved hero, blue/black/white direction and CSS/SVG device mockups. Added all five capabilities, a three-step workbench process, Danish Sheikh’s founder introduction and the supplied tagline. Improved active links, mobile Escape dismissal, route focus, touch targets and Projects heading hierarchy. No runtime dependencies or remote assets added.

All nine routes were checked at viewport settings 320, 390, 768, 1024 and 1440 for horizontal overflow, clipped content text and a single H1. Desktop, tablet and mobile visual checks were performed; tablet artwork scaling was refined to avoid cropping. Mobile menu Escape and About anchor/active state passed. Browser console showed no warnings or errors. Production build and TypeScript pass. Compressed assets: approximately 81.4 KB JavaScript and 10.1 KB CSS. These are local checks, not a Lighthouse or real-device performance certification.

Remaining launch inputs: confirmed product features/availability, finalized legal policies, canonical origin confirmation and optional social sharing artwork. No GitHub push, deployment or DNS changes were made.

## Final brand assets

The standalone mark is recreated as vector geometry from the supplied reference: a white stylized D on a #2563EB rounded square. The reference board is not shipped. `public/brand/dovira-mark.svg` (256 bytes) is the master, used by header and footer. The adjacent Dovira Labs. wordmark remains HTML text (#0F172A / #2563EB), as does the subtle footer tagline. System sans-serif fonts avoid font downloads.

- `public/favicon.svg`: same vector mark, replacing the provisional favicon.
- `public/favicon-32.png`: 32px browser fallback.
- `public/apple-touch-icon.png`: 180px Apple home-screen icon.
- `public/brand/app-icon-192.png` and `app-icon-512.png`: web app icons referenced by `public/site.webmanifest`.
- `index.html`: favicon, Apple icon and manifest links inherited by generated route heads.

PNG icons are raster exports of the SVG, not crops or screenshots of the reference. The app icons identify the studio website, not the App Lock product. No service worker, install prompt, runtime dependency or font download was introduced. Branding checks at 320, 390, 768, 1024 and 1440 viewport settings passed (images loaded, no horizontal overflow). Production build passed without warnings. No push or deployment was performed.

## Final email integration QA

Official mailto links are live on Contact (hello and support), Support and App Lock Support (support), Privacy and App Lock Privacy (privacy). Contact/support availability placeholders were removed, and the Projects introduction now reads “Products and explorations from Dovira Labs, built with care.” Legal-policy and unpublished product-detail notices remain pending confirmed content.

Production build and static route metadata verification passed. Browser QA covered all nine routes at five viewport settings (45 checks): no horizontal overflow, clipped content text, missing image alt attributes, invalid route links or empty hash links; one H1 per page, route metadata and active navigation verified. Email keyboard focus and mobile Escape dismissal passed. Mobile Contact, tablet App Lock Privacy and desktop App Lock Support were visually reviewed. Browser console reported no warnings or errors. Mailto destinations were inspected without sending messages. No dependencies, branding, deployment, DNS, Brevo or email authentication settings changed.

## Legal audit — September 9, 2026

See [LEGAL-AUDIT.md](LEGAL-AUDIT.md) for evidence, changes and remaining publication blockers. Website Privacy Policy and Terms now contain substantive revision-dated copy. Hosting/email provider identities and roles are owner-confirmed; exact retention, logging and other provider practices remain unverified. App Lock source is absent; its privacy page is explicitly a verification-required status notice.
