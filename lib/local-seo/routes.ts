import { getAllCitySlugs } from "@/lib/local-seo/city-pages";
import { getAllServiceSlugs } from "@/lib/local-seo/service-pages";

export const staticSeoRoutes = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/services", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/gallery", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "/testimonials", changeFrequency: "monthly" as const, priority: 0.75 },
  { path: "/reviews", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.85 },
  { path: "/faq", changeFrequency: "monthly" as const, priority: 0.75 },
  { path: "/resources", changeFrequency: "monthly" as const, priority: 0.6 },
  { path: "/blog", changeFrequency: "weekly" as const, priority: 0.85 },
  { path: "/thank-you", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/case-studies/residential-pickering", changeFrequency: "yearly" as const, priority: 0.55 },
  { path: "/case-studies/commercial-durham", changeFrequency: "yearly" as const, priority: 0.55 },
];

export function getAllPublicPaths(): { path: string; changeFrequency: "weekly" | "monthly" | "yearly"; priority: number }[] {
  const servicePaths = getAllServiceSlugs().map((slug) => ({
    path: `/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.88,
  }));
  const cityPaths = getAllCitySlugs().map((slug) => ({
    path: `/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));
  return [...staticSeoRoutes, ...servicePaths, ...cityPaths];
}

export function resolveLandingSlug(slug: string): "service" | "city" | null {
  if (getAllServiceSlugs().includes(slug)) return "service";
  if (getAllCitySlugs().includes(slug)) return "city";
  return null;
}
