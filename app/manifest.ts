import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Durham Cleaners",
    description: siteConfig.seo.defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#0a1628",
    theme_color: "#2563eb",
    icons: [
      {
        src: siteConfig.logoImage,
        sizes: "192x192",
        type: "image/jpeg",
        purpose: "any",
      },
      {
        src: siteConfig.logoImage,
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "maskable",
      },
    ],
  };
}
