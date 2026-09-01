import type { MetadataRoute } from "next";
import { getAllBlogSlugs } from "@/lib/local-seo/blog-posts";
import { getAllCaseStudySlugs } from "@/lib/local-seo/case-studies";
import { getAllCitySlugs } from "@/lib/local-seo/city-pages";
import { getAllServiceSlugs } from "@/lib/local-seo/service-pages";
import { getSiteUrl, publicRoutes } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const staticEntries = publicRoutes.map(({ path, changeFrequency, priority }) => ({
    url: path === "/" ? siteUrl : `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const serviceEntries = getAllServiceSlugs().map((slug) => ({
    url: `${siteUrl}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.88,
  }));

  const cityEntries = getAllCitySlugs().map((slug) => ({
    url: `${siteUrl}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const blogEntries = getAllBlogSlugs().map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const caseStudyEntries = getAllCaseStudySlugs().map((slug) => ({
    url: `${siteUrl}/case-studies/${slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.55,
  }));

  return [...staticEntries, ...serviceEntries, ...cityEntries, ...blogEntries, ...caseStudyEntries];
}
