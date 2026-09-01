import type { CityPageData } from "@/lib/local-seo/types";

const serviceLinksResidential = [
  { label: "Residential cleaning", href: "/residential-cleaning" },
  { label: "Deep cleaning", href: "/deep-cleaning" },
  { label: "Move-in / move-out", href: "/move-in-move-out-cleaning" },
  { label: "Airbnb cleaning", href: "/airbnb-cleaning" },
];

const serviceLinksCommercial = [
  { label: "Commercial cleaning", href: "/commercial-cleaning" },
  { label: "Industrial cleaning", href: "/industrial-cleaning" },
  { label: "Post-renovation", href: "/post-renovation-cleaning" },
];

export const cityPages: CityPageData[] = [
  {
    slug: "house-cleaning-pickering",
    city: "Pickering",
    type: "residential",
    title: "House Cleaning Pickering",
    metaTitle: "House Cleaning Pickering ON | Maid Service & Home Cleaning",
    metaDescription:
      "House cleaning and maid service in Pickering, ON. Durham Cleaners since 1995. Eco-friendly, insured teams. 15% off first visit. Quote within 4 hours. Call (416) 305-5187.",
    keywords: ["house cleaning Pickering", "maid service Pickering", "home cleaning Pickering ON", "cleaning service near me Pickering"],
    heroTitle: "House cleaning",
    heroAccent: "Pickering",
    heroSubtitle: "Trusted home cleaning for Pickering families, condos, and townhomes.",
    intro:
      "Pickering sits between Toronto and Durham Region with a mix of established south neighbourhoods, growing north Pickering communities, and waterfront condos near the lake. Durham Cleaners has cleaned homes across Pickering since 1995, from Amberlea and Liverpool to Dunbarton and the Seaton area. We know local housing types and commute schedules, and we arrive on time with eco-friendly products.",
    neighbourhoods: ["Amberlea", "Liverpool", "Dunbarton", "West Shore", "Bay Ridges", "North Pickering / Seaton", "Town Centre condos"],
    sections: [
      {
        heading: "Cleaning services Pickering homeowners book most",
        paragraphs: [
          "Bi-weekly maintenance for busy families near the GO corridor. Deep cleans before holidays or after renovation. Move-out cleaning for renters near Pickering Town Centre. Airbnb turnovers for short-term hosts. Real estate pre-listing cleans before photos in competitive markets.",
          "First-time customers receive 15% off. Bi-weekly ongoing plans also qualify for 15% off. Submit the form and we contact you within 4 hours.",
        ],
      },
      {
        heading: "Why Pickering chooses Durham Cleaners",
        paragraphs: [
          "We are local to Durham Region, not a national franchise with rotating strangers. Our teams are trained, bonded, and insured. We use green products safe for kids and pets. Our Google reviews include REALTORS and landlords who need reliable results on deadline.",
          "Pickering is minutes from our Courtice base. That means responsive scheduling and crews who understand Durham Region homes.",
        ],
      },
      {
        heading: "Pickering housing we clean",
        paragraphs: [
          "Detached homes with finished basements. Stacked townhouses in newer subdivisions. Condo units with open-plan kitchens. Rental properties between tenants. Tell us your square footage and priorities on the request form for an accurate quote.",
        ],
      },
    ],
    faqs: [
      { q: "Do you serve all of Pickering?", a: "Yes. We clean across Pickering including north and south areas and waterfront condos." },
      { q: "How much is house cleaning in Pickering?", a: "Pricing depends on size and service type. Request a quote online for a response within 4 hours." },
      { q: "Do you offer move-out cleaning in Pickering?", a: "Yes. Move-out and pre-listing cleans are popular with Pickering renters and REALTORS." },
      { q: "Are products safe for pets?", a: "Yes. We use eco-friendly green cleaning products." },
      { q: "Can I book bi-weekly cleaning?", a: "Yes. Bi-weekly bookings receive 15% off." },
    ],
    relatedServices: serviceLinksResidential,
    relatedCities: [
      { label: "House cleaning Ajax", href: "/house-cleaning-ajax" },
      { label: "House cleaning Whitby", href: "/house-cleaning-whitby" },
      { label: "Commercial cleaning Pickering", href: "/commercial-cleaning-pickering" },
    ],
  },
  {
    slug: "house-cleaning-ajax",
    city: "Ajax",
    type: "residential",
    title: "House Cleaning Ajax",
    metaTitle: "House Cleaning Ajax ON | Home & Maid Service Durham Cleaners",
    metaDescription:
      "Professional house cleaning and maid service in Ajax, ON. Local since 1995. Pickering, Whitby neighbours trust us. 15% off first visit. Response within 4 hours.",
    keywords: ["house cleaning Ajax", "maid service Ajax", "home cleaning Ajax ON", "cleaning company Ajax"],
    heroTitle: "House cleaning",
    heroAccent: "Ajax",
    heroSubtitle: "Reliable home cleaning for Ajax neighbourhoods and families.",
    intro:
      "Ajax combines lakeside communities, established central neighbourhoods, and newer north Ajax growth. Durham Cleaners provides house cleaning across Ajax from Pickering Village borders to Harwood Avenue corridors and north subdivisions. Since 1995 we have supported commuters, growing families, and landlords who need dependable cleaning on schedule.",
    neighbourhoods: ["South Ajax", "Central Ajax", "North Ajax", "Pickering Village area", "Harwood / Kingston corridor", "Waterfront communities"],
    sections: [
      {
        heading: "Popular Ajax cleaning services",
        paragraphs: [
          "Weekly and bi-weekly residential maintenance. Deep cleaning for seasonal resets. Move-in and move-out for Ajax renters. Post-renovation cleaning after kitchen and basement upgrades common in older Ajax homes.",
        ],
      },
      {
        heading: "Local team, local knowledge",
        paragraphs: [
          "Ajax homes range from 1970s splits to new builds with open concept main floors. We adjust checklists accordingly. Our Courtice-based teams know Durham Region traffic patterns and schedule arrivals when you need them, including daytime cleans while you are at work downtown.",
        ],
      },
      {
        heading: "Book Ajax house cleaning",
        paragraphs: [
          "Call (416) 305-5187 or use the request form. We respond within 4 hours with quote and availability. 15% off for first-time and bi-weekly customers.",
        ],
      },
    ],
    faqs: [
      { q: "Do you clean in north Ajax?", a: "Yes. We serve all Ajax neighbourhoods." },
      { q: "Is Ajax included in your Durham Region service?", a: "Yes. Ajax is a core service area alongside Pickering and Whitby." },
      { q: "Do you clean condos in Ajax?", a: "Yes. Provide building access details on the form." },
      { q: "How do I get a same-week clean?", a: "Submit the form with your preferred date. We confirm within 4 hours." },
    ],
    relatedServices: serviceLinksResidential,
    relatedCities: [
      { label: "House cleaning Pickering", href: "/house-cleaning-pickering" },
      { label: "House cleaning Whitby", href: "/house-cleaning-whitby" },
      { label: "Commercial cleaning Ajax", href: "/commercial-cleaning-ajax" },
    ],
  },
  {
    slug: "house-cleaning-whitby",
    city: "Whitby",
    type: "residential",
    title: "House Cleaning Whitby",
    metaTitle: "House Cleaning Whitby ON | Durham Cleaners Since 1995",
    metaDescription:
      "House and home cleaning in Whitby, ON. Brooklin, downtown, and lakeshore. Eco-friendly, 5-star rated local team. 15% off first visit. Quote within 4 hours.",
    keywords: ["house cleaning Whitby", "home cleaning Brooklin", "maid service Whitby ON"],
    heroTitle: "House cleaning",
    heroAccent: "Whitby",
    heroSubtitle: "From Brooklin to the waterfront — Whitby home cleaning since 1995.",
    intro:
      "Whitby spans Brooklin village charm, growing north subdivisions, established south Whitby neighbourhoods, and waterfront properties. Durham Cleaners has cleaned Whitby homes for nearly three decades. Whether you are in a Brooklin estate, a townhome near Taunton, or a condo downtown, we deliver the same trained, insured, eco-friendly service.",
    neighbourhoods: ["Brooklin", "North Whitby", "South Whitby", "Downtown Whitby", "Pringle Creek", "Lynde Creek", "Waterfront"],
    sections: [
      {
        heading: "Whitby cleaning for every home type",
        paragraphs: [
          "Large Brooklin family homes needing bi-weekly maintenance. Downtown Whitby condos. Move-out cleans for Oshawa/Whitby border rentals. Pre-listing cleans before Brooklin and north Whitby showings in busy spring markets.",
        ],
      },
      {
        heading: "Eco-friendly cleaning Whitby trusts",
        paragraphs: [
          "Families choose us for green products and punctual crews. Our testimonials include homeowners who noticed detail other cleaners missed. We aim for that standard on every Whitby visit.",
        ],
      },
      {
        heading: "Serving Whitby and all of Durham Region",
        paragraphs: [
          "Whitby is central to our service map. Quick response, flexible scheduling, 15% discounts for new and bi-weekly clients. Request a quote today.",
        ],
      },
    ],
    faqs: [
      { q: "Do you clean in Brooklin?", a: "Yes. Brooklin and all Whitby areas are covered." },
      { q: "Can you deep clean before listing a Brooklin home?", a: "Yes. See our real estate pre-listing and deep cleaning services." },
      { q: "What hours do you work?", a: "We are available 24/7 for scheduling coordination. Visit times are arranged per booking." },
    ],
    relatedServices: serviceLinksResidential,
    relatedCities: [
      { label: "House cleaning Oshawa", href: "/house-cleaning-oshawa" },
      { label: "House cleaning Ajax", href: "/house-cleaning-ajax" },
      { label: "Durham Region overview", href: "/house-cleaning-durham-region" },
    ],
  },
  {
    slug: "house-cleaning-oshawa",
    city: "Oshawa",
    type: "residential",
    title: "House Cleaning Oshawa",
    metaTitle: "House Cleaning Oshawa ON | Local Home Cleaners Since 1995",
    metaDescription:
      "House cleaning Oshawa ON. North Oshawa, downtown, and Durham College area. Commercial and residential. 15% off first visit. Durham Cleaners — quote within 4 hours.",
    keywords: ["house cleaning Oshawa", "maid service Oshawa", "home cleaning north Oshawa"],
    heroTitle: "House cleaning",
    heroAccent: "Oshawa",
    heroSubtitle: "Oshawa home cleaning from downtown to north subdivisions.",
    intro:
      "Oshawa is Durham Region's largest city with diverse housing: north Oshawa family subdivisions, older central homes, student rentals near Durham College and Ontario Tech, and lakeshore properties. Durham Cleaners has served Oshawa since 1995 with residential, commercial, and move-out cleaning trusted by locals and REALTORS.",
    neighbourhoods: ["North Oshawa", "Central Oshawa", "South Oshawa", "Kedron", "Taunton area", "University district"],
    sections: [
      {
        heading: "Oshawa services homeowners request",
        paragraphs: [
          "Bi-weekly cleaning for north Oshawa families. Move-out cleaning for student and rental turnover. Deep cleaning for older central Oshawa homes with detailed woodwork and basements. Commercial cleaning for Oshawa offices and retail.",
        ],
      },
      {
        heading: "Local since 1995",
        paragraphs: [
          "Nearly 30 years in Durham Region means Oshawa clients get experienced crews who show up on time. Bonded, insured, eco-friendly. 5-star Google reputation built on real reviews.",
        ],
      },
      {
        heading: "Get an Oshawa quote",
        paragraphs: [
          "Form submissions answered within 4 hours. Call (416) 305-5187 for immediate questions. 15% off first-time and bi-weekly bookings.",
        ],
      },
    ],
    faqs: [
      { q: "Do you clean student rentals in Oshawa?", a: "Yes. Move-out and turnover cleaning available." },
      { q: "Do you offer commercial cleaning in Oshawa?", a: "Yes. See commercial cleaning for offices and retail." },
      { q: "Are you based locally?", a: "Yes. We are based in Courtice and serve all of Oshawa." },
    ],
    relatedServices: serviceLinksResidential,
    relatedCities: [
      { label: "House cleaning Whitby", href: "/house-cleaning-whitby" },
      { label: "House cleaning Durham Region", href: "/house-cleaning-durham-region" },
      { label: "Commercial cleaning", href: "/commercial-cleaning" },
    ],
  },
  {
    slug: "house-cleaning-durham-region",
    city: "Durham Region",
    type: "residential",
    title: "House Cleaning Durham Region",
    metaTitle: "House Cleaning Durham Region | Pickering Ajax Whitby Oshawa",
    metaDescription:
      "House cleaning across Durham Region: Pickering, Ajax, Whitby, Oshawa, Courtice, Bowmanville. Durham Cleaners since 1995. Eco-friendly. 15% off. Quote in 4 hours.",
    keywords: ["house cleaning Durham Region", "home cleaning Durham Ontario", "maid service Durham Region"],
    heroTitle: "House cleaning",
    heroAccent: "Durham Region",
    heroSubtitle: "Pickering · Ajax · Whitby · Oshawa · Courtice · Bowmanville · GTA",
    intro:
      "Durham Region is one of the fastest-growing areas in the GTA. Durham Cleaners has been the local cleaning choice since 1995, serving homeowners from Pickering in the west through Ajax and Whitby to Oshawa, Courtice, and Bowmanville. We combine residential, commercial, and specialty cleaning with one trusted team and eco-friendly standards.",
    neighbourhoods: ["Pickering", "Ajax", "Whitby", "Oshawa", "Courtice", "Bowmanville", "Clarington", "Uxbridge (by request)"],
    sections: [
      {
        heading: "Complete Durham Region coverage",
        paragraphs: [
          "Whether you need maid service in Pickering, move-out cleaning in Ajax, deep cleaning in Whitby, or commercial janitorial in Oshawa, one form connects you to our local dispatch. We respond within 4 hours.",
        ],
      },
      {
        heading: "Why local matters for house cleaning",
        paragraphs: [
          "National apps send whoever is available. Durham Cleaners sends trained teams who know Durham housing stock, commute windows, and neighbourhood expectations. That is why REALTORS, landlords, and families stay with us for years.",
        ],
      },
      {
        heading: "Discounts and guarantees",
        paragraphs: [
          "15% off first-time customers. 15% off bi-weekly bookings. Professionally trained, bonded, and insured cleaners. Eco-friendly green products on every job.",
        ],
      },
    ],
    faqs: [
      { q: "What cities are included?", a: "Pickering, Ajax, Whitby, Oshawa, Courtice, Bowmanville, and broader Durham Region." },
      { q: "Do you serve the GTA?", a: "Yes. Greater Toronto Area coverage is available for many services." },
      { q: "How long have you operated?", a: "Since 1995 — nearly three decades in Durham Region." },
    ],
    relatedServices: serviceLinksResidential,
    relatedCities: [
      { label: "Pickering", href: "/house-cleaning-pickering" },
      { label: "Ajax", href: "/house-cleaning-ajax" },
      { label: "Whitby", href: "/house-cleaning-whitby" },
      { label: "Oshawa", href: "/house-cleaning-oshawa" },
    ],
  },
  {
    slug: "commercial-cleaning-pickering",
    city: "Pickering",
    type: "commercial",
    title: "Commercial Cleaning Pickering",
    metaTitle: "Commercial & Office Cleaning Pickering ON | Durham Cleaners",
    metaDescription:
      "Office and commercial cleaning in Pickering ON. Retail, clinics, restaurants. Reliable janitorial service since 1995. Quote within 4 hours.",
    keywords: ["commercial cleaning Pickering", "office cleaning Pickering", "janitorial Pickering ON"],
    heroTitle: "Commercial cleaning",
    heroAccent: "Pickering",
    heroSubtitle: "Offices, retail, and workplaces across Pickering.",
    intro:
      "Pickering businesses along Kingston Road, Brock Road, and Town Centre need clean spaces that impress clients and protect staff health. Durham Cleaners commercial cleaning covers offices, retail, medical waiting areas, and restaurants in Pickering with scheduled janitorial service since 1995.",
    neighbourhoods: ["Pickering Town Centre", "Brock Industrial", "Kingston corridor offices", "Liverpool business parks"],
    sections: [
      {
        heading: "Pickering commercial clients",
        paragraphs: [
          "Professional offices near the GO station. Retail storefronts in shopping centres. Small clinics and service businesses. Property management lobbies. We customize frequency and scope per facility.",
        ],
      },
      {
        heading: "Reliable janitorial standards",
        paragraphs: [
          "Restrooms, floors, trash, break rooms, and touch points on checklist. After-hours availability. Insured teams. Eco-friendly products for indoor air quality.",
        ],
      },
      {
        heading: "Request a Pickering walkthrough",
        paragraphs: [
          "Submit the form with square footage and hours of operation. We contact you within 4 hours to schedule assessment and quote.",
        ],
      },
    ],
    faqs: [
      { q: "Do you clean Pickering office buildings?", a: "Yes. Offices of all sizes across Pickering." },
      { q: "Can you combine commercial and industrial?", a: "Yes. See industrial cleaning for warehouse scope." },
      { q: "What is your response time for quotes?", a: "Within 4 hours on business days for form submissions." },
    ],
    relatedServices: serviceLinksCommercial,
    relatedCities: [
      { label: "House cleaning Pickering", href: "/house-cleaning-pickering" },
      { label: "Commercial cleaning Ajax", href: "/commercial-cleaning-ajax" },
    ],
  },
  {
    slug: "commercial-cleaning-ajax",
    city: "Ajax",
    type: "commercial",
    title: "Commercial Cleaning Ajax",
    metaTitle: "Commercial & Office Cleaning Ajax ON | Janitorial Service",
    metaDescription:
      "Commercial and office cleaning Ajax ON. Retail, warehouses, workplaces. Durham Cleaners since 1995. Insured teams. Quote within 4 hours.",
    keywords: ["commercial cleaning Ajax", "office cleaning Ajax", "janitorial service Ajax ON"],
    heroTitle: "Commercial cleaning",
    heroAccent: "Ajax",
    heroSubtitle: "Janitorial and office cleaning for Ajax businesses.",
    intro:
      "Ajax business parks, retail plazas, and professional offices depend on consistent cleaning. Durham Cleaners provides commercial janitorial service across Ajax with the same local accountability we have offered Durham Region since 1995.",
    neighbourhoods: ["Ajax business parks", "Harwood retail", "Central Ajax offices", "Industrial corridors"],
    sections: [
      {
        heading: "Ajax commercial cleaning scope",
        paragraphs: [
          "Nightly or weekly office cleaning. Retail floor care. Restaurant front-of-house. Shared workspace sanitization. Custom quotes after walkthrough.",
        ],
      },
      {
        heading: "Partner with a Durham Region team",
        paragraphs: [
          "Avoid national chains with high turnover. Our crews are trained, insured, and managed locally from Courtice with fast response when you need schedule changes.",
        ],
      },
      {
        heading: "Get started",
        paragraphs: [
          "Call (416) 305-5187 or submit the form. Response within 4 hours.",
        ],
      },
    ],
    faqs: [
      { q: "Do you service Ajax industrial areas?", a: "Yes. Commercial and industrial scope available." },
      { q: "Can you clean after 6 PM?", a: "Yes. After-hours scheduling is common for Ajax offices." },
    ],
    relatedServices: serviceLinksCommercial,
    relatedCities: [
      { label: "Commercial cleaning Pickering", href: "/commercial-cleaning-pickering" },
      { label: "House cleaning Ajax", href: "/house-cleaning-ajax" },
    ],
  },
];

export function getCityPage(slug: string): CityPageData | undefined {
  return cityPages.find((p) => p.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cityPages.map((p) => p.slug);
}
