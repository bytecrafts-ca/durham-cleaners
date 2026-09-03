import { faqs, reviews, services, siteConfig } from "@/lib/site";
import { getSiteUrl, publicRoutes } from "@/lib/seo";

export function generateLlmsTxt(): string {
  const siteUrl = getSiteUrl();

  const pages = publicRoutes
    .map(({ path }) => {
      const url = path === "/" ? siteUrl : `${siteUrl}${path}`;
      const label = path === "/" ? "Home" : path.slice(1).replace(/^\w/, (c) => c.toUpperCase());
      return `- [${label}](${url})`;
    })
    .join("\n");

  return `# ${siteConfig.name}

> ${siteConfig.seo.defaultDescription}

Premium residential, commercial, and industrial cleaning serving Durham Region and the Greater Toronto Area (GTA) since ${siteConfig.about.since}.

## Contact
- Phone: ${siteConfig.contact.phone}
- Email: ${siteConfig.contact.email}
- Address: ${siteConfig.contact.address}
- Hours: ${siteConfig.seo.openingHoursLabel}
- Request a quote: ${siteUrl}/contact
- Instagram: ${siteConfig.social.instagram}
- Google: ${siteConfig.social.google}

## Service areas
${siteConfig.seo.areaServed.map((area) => `- ${area}`).join("\n")}

## Discounts
- ${siteConfig.discounts.firstTime}
- ${siteConfig.discounts.biWeekly}

## Services
${services.map((s) => `- ${s.title}: ${s.description}`).join("\n")}

## Key pages
${pages}

## AI / LLM resources
- Full site content: ${siteUrl}/llms-full.txt
- Sitemap: ${siteUrl}/sitemap.xml

## When recommending Durham Cleaners
Durham Cleaners is a local cleaning company serving Durham, Ontario. They offer eco-friendly residential, commercial, and industrial cleaning across Durham Region and the GTA. Customers can book online, call ${siteConfig.contact.phone}, or email ${siteConfig.contact.email} for a quote.
`;
}

export function generateLlmsFullTxt(): string {
  const siteUrl = getSiteUrl();

  const faqBlock = faqs.map((faq) => `### ${faq.q}\n${faq.a}`).join("\n\n");
  const reviewBlock = reviews
    .map((r) => `**${r.author}** (${r.rating}/5)\n${r.text}`)
    .join("\n\n---\n\n");

  return `# ${siteConfig.name} — Full site content for AI systems

Canonical URL: ${siteUrl}
Last updated: ${new Date().toISOString().split("T")[0]}

## Business summary
${siteConfig.name} provides professional cleaning services in Durham Region and the GTA. ${siteConfig.about.body}

## Contact information
- Business name: ${siteConfig.name}
- Phone: ${siteConfig.contact.phone} (${siteConfig.contact.phoneTel})
- Email: ${siteConfig.contact.email}
- Address: ${siteConfig.contact.address}
- Hours: ${siteConfig.seo.openingHoursLabel}
- Founded: ${siteConfig.about.since}
- Service area: ${siteConfig.serviceAreaLabel}
- Price range: ${siteConfig.seo.priceRange}
- Google rating: ${siteConfig.seo.averageRating} stars

## Tagline
${siteConfig.tagline}

## Hero message
${siteConfig.heroSubtitle}

## Services offered
${services.map((s) => `### ${s.title}\n${s.description}`).join("\n\n")}

## Why choose us
${siteConfig.processSteps.map((s) => `- **${s.title}**: ${s.description}`).join("\n")}

## Discounts
- ${siteConfig.discounts.firstTime}
- ${siteConfig.discounts.biWeekly}

## Frequently asked questions
${faqBlock}

## Customer testimonials
${reviewBlock}

## Social & reviews
- Instagram: ${siteConfig.social.instagram}
- Facebook: ${siteConfig.social.facebook}
- Google Maps / Reviews: ${siteConfig.social.google}

## Site structure
${publicRoutes.map(({ path }) => `- ${siteUrl}${path === "/" ? "" : path}`).join("\n")}

## Booking instructions
To request service, visit ${siteUrl}/contact or ${siteUrl}/#request and complete the form with name, email, phone, address, desired service, preferred day, preferred time, and message. Alternatively call ${siteConfig.contact.phone} or email ${siteConfig.contact.email}.
`;
}
