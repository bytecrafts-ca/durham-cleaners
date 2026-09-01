import type { Metadata } from "next";
import type { FaqItem } from "@/lib/local-seo/types";
import type { ServicePageData } from "@/lib/local-seo/types";
import type { BlogPost } from "@/lib/local-seo/types";
import { faqs, galleryImages, reviews, services, siteConfig } from "@/lib/site";

const serviceSlugMap: Record<string, string> = {
  "one-time": "residential-cleaning",
  ongoing: "residential-cleaning",
  move: "move-in-move-out-cleaning",
  deep: "deep-cleaning",
  renovation: "post-renovation-cleaning",
  realestate: "real-estate-cleaning",
  airbnb: "airbnb-cleaning",
  commercial: "commercial-cleaning",
  industrial: "industrial-cleaning",
};

export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.siteUrl;
  return url.replace(/\/$/, "");
}

function absoluteUrl(path: string): string {
  const siteUrl = getSiteUrl();
  return path === "/" ? siteUrl : `${siteUrl}${path}`;
}

function absoluteAsset(path: string): string {
  return path.startsWith("http") ? path : `${getSiteUrl()}${path}`;
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
  ogImage?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  noIndex = false,
  ogImage,
}: PageMetadataInput): Metadata {
  const siteUrl = getSiteUrl();
  const canonical = path === "/" ? siteUrl : `${siteUrl}${path}`;
  const image = ogImage ?? "/opengraph-image";
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;
  const allKeywords = [...siteConfig.seo.keywords, ...keywords] as string[];

  return {
    title,
    description,
    keywords: allKeywords,
    alternates: {
      canonical,
      languages: { "en-CA": canonical },
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.seo.locale,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — professional cleaning in Durham Region and GTA`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [imageUrl],
    },
  };
}

const businessMetaTags = {
  "geo.region": "CA-ON",
  "geo.placename": "Courtice",
  "geo.position": `${siteConfig.seo.geo.latitude};${siteConfig.seo.geo.longitude}`,
  ICBM: `${siteConfig.seo.geo.latitude}, ${siteConfig.seo.geo.longitude}`,
  "business:contact_data:street_address": "57 Foxhunt Trail",
  "business:contact_data:locality": "Courtice",
  "business:contact_data:region": "ON",
  "business:contact_data:postal_code": "L1E 1E4",
  "business:contact_data:country_name": "Canada",
  "business:contact_data:email": siteConfig.contact.email,
  "business:contact_data:phone_number": siteConfig.contact.phoneTel,
  "business:contact_data:website": getSiteUrl(),
};

export const rootMetadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.seo.defaultDescription,
  keywords: [...siteConfig.seo.keywords],
  authors: [{ name: siteConfig.name, url: getSiteUrl() }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Home Services",
  applicationName: siteConfig.name,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: getSiteUrl(),
    languages: { "en-CA": getSiteUrl() },
  },
  openGraph: {
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    url: getSiteUrl(),
    siteName: siteConfig.name,
    locale: siteConfig.seo.locale,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — professional cleaning in Durham Region and GTA`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [{ url: siteConfig.logoImage, type: "image/jpeg" }],
    apple: [{ url: siteConfig.logoImage, type: "image/jpeg" }],
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: siteConfig.seo.googleSiteVerification,
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "black-translucent",
  },
  other: businessMetaTags,
};

export const publicRoutes = [
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
];

function reviewSchema(review: (typeof reviews)[number]) {
  return {
    "@type": "Review" as const,
    author: { "@type": "Person" as const, name: review.author },
    reviewRating: {
      "@type": "Rating" as const,
      ratingValue: review.rating,
      bestRating: 5,
    },
    reviewBody: review.text,
  };
}

export function aggregateRatingJsonLd() {
  return {
    "@type": "AggregateRating" as const,
    ratingValue: siteConfig.seo.averageRating,
    bestRating: 5,
    worstRating: 1,
    ratingCount: reviews.length,
    reviewCount: reviews.length,
  };
}

export function organizationJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: siteConfig.name,
    url: siteUrl,
    logo: absoluteAsset(siteConfig.logoImage),
    image: absoluteAsset(siteConfig.heroImage),
    description: siteConfig.seo.defaultDescription,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phoneTel,
    foundingDate: siteConfig.about.since,
    knowsAbout: siteConfig.seo.knowsAbout,
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook, siteConfig.social.google],
    areaServed: siteConfig.seo.areaServed.map((area) => ({
      "@type": "Place",
      name: area,
    })),
  };
}

export function localBusinessJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "CleaningService", "ProfessionalService"],
    "@id": `${siteUrl}/#business`,
    name: siteConfig.name,
    url: siteUrl,
    image: [absoluteAsset(siteConfig.heroImage), absoluteAsset(siteConfig.logoImage)],
    logo: absoluteAsset(siteConfig.logoImage),
    description: siteConfig.seo.defaultDescription,
    telephone: siteConfig.contact.phoneTel,
    email: siteConfig.contact.email,
    priceRange: siteConfig.seo.priceRange,
    foundingDate: siteConfig.about.since,
    knowsAbout: siteConfig.seo.knowsAbout,
    areaServed: [
      { "@type": "City", name: "Pickering" },
      { "@type": "City", name: "Ajax" },
      { "@type": "City", name: "Whitby" },
      { "@type": "City", name: "Oshawa" },
      { "@type": "City", name: "Courtice" },
      { "@type": "City", name: "Bowmanville" },
      { "@type": "AdministrativeArea", name: "Durham Region" },
      { "@type": "AdministrativeArea", name: "Greater Toronto Area" },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.seo.geo.latitude,
      longitude: siteConfig.seo.geo.longitude,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "57 Foxhunt Trail",
      addressLocality: "Courtice",
      addressRegion: "ON",
      postalCode: "L1E 1E4",
      addressCountry: "CA",
    },
    openingHoursSpecification: siteConfig.seo.openingHours.map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: entry.days,
      opens: entry.opens,
      closes: entry.closes,
    })),
    aggregateRating: aggregateRatingJsonLd(),
    review: reviews.map(reviewSchema),
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook, siteConfig.social.google],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Durham Cleaners Services",
      itemListElement: [
        {
          "@type": "Offer",
          name: siteConfig.discounts.firstTime,
          priceCurrency: "CAD",
          eligibleCustomerType: "NewCustomer",
          itemOffered: { "@type": "Service", name: "First-time cleaning" },
        },
        {
          "@type": "Offer",
          name: siteConfig.discounts.biWeekly,
          priceCurrency: "CAD",
          itemOffered: { "@type": "Service", name: "Bi-weekly cleaning" },
        },
        ...services.map((service, index) => ({
          "@type": "Offer",
          position: index + 1,
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            url: `${siteUrl}/${serviceSlugMap[service.id] ?? "services"}`,
            provider: { "@id": `${siteUrl}/#business` },
          },
        })),
      ],
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phoneTel,
      email: siteConfig.contact.email,
      contactType: "customer service",
      areaServed: "CA",
      availableLanguage: "English",
    },
    potentialAction: [
      {
        "@type": "CommunicateAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/contact`,
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        },
        name: "Request a cleaning quote",
      },
      {
        "@type": "CommunicateAction",
        target: `tel:${siteConfig.contact.phoneTel}`,
        name: "Call Durham Cleaners",
      },
    ],
  };
}

export function websiteJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.seo.defaultDescription,
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en-CA",
    copyrightHolder: { "@id": `${siteUrl}/#organization` },
    creator: {
      "@type": "Organization",
      name: "Sutrel",
      url: "https://sutrel.ca",
      email: "inquire@sutrel.ca",
    },
  };
}

export function webPageJsonLd({
  path,
  title,
  description,
  type = "WebPage",
}: {
  path: string;
  title: string;
  description: string;
  type?: string;
}) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#business` },
    inLanguage: "en-CA",
    primaryImageOfPage: absoluteAsset(siteConfig.heroImage),
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function servicesItemListJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Durham Cleaners Cleaning Services",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        "@id": `${siteUrl}/${serviceSlugMap[service.id] ?? "services"}`,
        name: service.title,
        description: service.description,
        provider: { "@id": `${siteUrl}/#business` },
        areaServed: siteConfig.seo.areaServed,
        serviceType: service.title,
      },
    })),
  };
}

export function imageGalleryJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Durham Cleaners Work Gallery",
    description: "Before-and-after cleaning results from Durham Cleaners across Durham Region and GTA.",
    url: `${siteUrl}/gallery`,
    image: galleryImages.map((image) => ({
      "@type": "ImageObject",
      contentUrl: absoluteAsset(image.src),
      name: image.alt,
      description: image.alt,
    })),
  };
}

export function reviewsPageJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/testimonials#webpage`,
    name: "Durham Cleaners Client Testimonials",
    url: `${siteUrl}/testimonials`,
    mainEntity: {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#business`,
      name: siteConfig.name,
      aggregateRating: aggregateRatingJsonLd(),
      review: reviews.map(reviewSchema),
    },
  };
}

export function howToJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to book Durham Cleaners",
    description: "Book professional cleaning in three simple steps with Durham Cleaners.",
    step: siteConfig.processSteps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.description,
      url: `${siteUrl}/#process`,
    })),
  };
}

export function contactPageJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteUrl}/contact#webpage`,
    url: `${siteUrl}/contact`,
    name: "Contact Durham Cleaners",
    description: `Request a quote from Durham Cleaners. Call ${siteConfig.contact.phone}, email ${siteConfig.contact.email}, or use the online form.`,
    mainEntity: { "@id": `${siteUrl}/#business` },
  };
}

export function aboutPageJsonLd() {
  return webPageJsonLd({
    path: "/about",
    title: `About ${siteConfig.name}`,
    description: siteConfig.about.body,
    type: "AboutPage",
  });
}

type PageJsonLdInput = {
  path: string;
  title: string;
  description: string;
  breadcrumbs: { name: string; path: string }[];
  extra?: Record<string, unknown>[];
  pageType?: string;
};

export function buildPageJsonLd({
  path,
  title,
  description,
  breadcrumbs,
  extra = [],
  pageType,
}: PageJsonLdInput) {
  return [
    breadcrumbJsonLd(breadcrumbs),
    webPageJsonLd({ path, title, description, type: pageType }),
    ...extra,
  ];
}

export function globalJsonLd() {
  const stripContext = ({ "@context": _, ...node }: Record<string, unknown>) => node;

  return {
    "@context": "https://schema.org",
    "@graph": [
      stripContext(organizationJsonLd()),
      stripContext(localBusinessJsonLd()),
      stripContext(websiteJsonLd()),
    ],
  };
}

export function homePageJsonLd() {
  return [
    webPageJsonLd({
      path: "/",
      title: siteConfig.seo.defaultTitle,
      description: siteConfig.seo.defaultDescription,
      type: "WebPage",
    }),
    faqJsonLd(),
    howToJsonLd(),
    servicesItemListJsonLd(),
  ];
}

export function faqPageJsonLdFromItems(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function serviceSchemaJsonLd(data: ServicePageData) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/${data.slug}#service`,
    name: data.title,
    description: data.metaDescription,
    url: `${siteUrl}/${data.slug}`,
    provider: { "@id": `${siteUrl}/#business` },
    areaServed: siteConfig.seo.areaServed,
    serviceType: data.title,
  };
}

export function blogPostJsonLd(post: BlogPost) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@id": `${siteUrl}/#organization` },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
    inLanguage: "en-CA",
  };
}

export function articleJsonLd({
  path,
  title,
  description,
  datePublished,
}: {
  path: string;
  title: string;
  description: string;
  datePublished?: string;
}) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@id": `${siteUrl}/#organization` },
    mainEntityOfPage: absoluteUrl(path),
  };
}
