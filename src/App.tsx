import pageMetadata from "./data/metadata.json";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { SiteLayout } from "./layouts/SiteLayout";
import { Home } from "./pages/Home";
import { AppLock, InformationPage, NotFound, Projects } from "./pages/Pages";

const metadata: Record<string, string[]> = pageMetadata;
const siteUrl = "https://doviralabs.com";
const socialImage = `${siteUrl}/dovira-social-preview.png`;

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = pathname.replace(/\/+$/, "") || "/";
    const knownRoute = Boolean(metadata[route]);
    const [title, description] = metadata[route] ?? [
      "Page not found",
      "This page could not be found. Explore Dovira Labs projects or return to the homepage.",
    ];
    const fullTitle = `Dovira Labs — ${title}`;
    const canonicalUrl = `${siteUrl}${route === "/" ? "/" : route}`;

    document.title = fullTitle;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", fullTitle);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", description);
    document
      .querySelector('meta[property="og:url"]')
      ?.setAttribute("content", canonicalUrl);
    document
      .querySelector('meta[property="og:image"]')
      ?.setAttribute("content", socialImage);
    document
      .querySelector('meta[name="twitter:title"]')
      ?.setAttribute("content", fullTitle);
    document
      .querySelector('meta[name="twitter:description"]')
      ?.setAttribute("content", description);
    document
      .querySelector('meta[name="twitter:image"]')
      ?.setAttribute("content", socialImage);
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", canonicalUrl);
    document
      .querySelector('meta[name="robots"]')
      ?.setAttribute("content", knownRoute ? "index, follow" : "noindex, follow");

    const existingProductSchema = document.getElementById("product-structured-data");
    existingProductSchema?.remove();

    if (route === "/projects/app-lock") {
      const script = document.createElement("script");
      script.id = "product-structured-data";
      script.type = "application/ld+json";
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "App Lock",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Android",
        url: `${siteUrl}/projects/app-lock`,
        publisher: {
          "@type": "Organization",
          name: "Dovira Labs",
          url: `${siteUrl}/`,
        },
        description:
          "App Lock is an Android app from Dovira Labs. Full product details and availability will be published when confirmed.",
      });
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById("product-structured-data")?.remove();
    };
  }, [pathname]);

  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/app-lock" element={<AppLock />} />
        {[
          "/privacy",
          "/privacy/app-lock",
          "/support",
          "/support/app-lock",
          "/terms",
          "/contact",
        ].map((path) => (
          <Route
            key={path}
            path={path}
            element={<InformationPage path={path} />}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
