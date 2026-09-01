export type FaqItem = { q: string; a: string };

export type ServicePageData = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroTitle: string;
  heroAccent?: string;
  heroSubtitle: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
  included: string[];
  expectations: { before: string[]; after: string[] };
  faqs: FaqItem[];
  relatedServices: { label: string; href: string }[];
  relatedCities: { label: string; href: string }[];
  formServiceValue: string;
};

export type CityPageData = {
  slug: string;
  city: string;
  type: "residential" | "commercial";
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroTitle: string;
  heroAccent?: string;
  heroSubtitle: string;
  intro: string;
  neighbourhoods: string[];
  sections: { heading: string; paragraphs: string[] }[];
  faqs: FaqItem[];
  relatedServices: { label: string; href: string }[];
  relatedCities: { label: string; href: string }[];
};

export type BlogPost = {
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  publishedAt: string;
  readTime: string;
  excerpt: string;
  sections: { heading?: string; paragraphs: string[] }[];
  faqs: FaqItem[];
  relatedLinks: { label: string; href: string }[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  metaDescription: string;
  location: string;
  service: string;
  challenge: string;
  solution: string;
  result: string;
  quote?: string;
};
