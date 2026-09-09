import pageMetadata from "./data/metadata.json";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { SiteLayout } from "./layouts/SiteLayout";
import { Home } from "./pages/Home";
import { AppLock, InformationPage, NotFound, Projects } from "./pages/Pages";

const metadata: Record<string, string[]> = pageMetadata;
export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    const route = pathname.replace(/\/+$/, "") || "/";
    const [title, description] = metadata[route] ?? ["Page not found", "This page could not be found. Explore Dovira Labs projects or return to the homepage."];
    document.title = `Dovira Labs — ${title}`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", document.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", description);
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", `https://doviralabs.com${route}`);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", `https://doviralabs.com${route}`);
    document.querySelector('meta[name="robots"]')?.setAttribute("content", metadata[route] ? "index, follow" : "noindex, follow");
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
