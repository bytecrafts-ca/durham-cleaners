import type { CaseStudy } from "@/lib/local-seo/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "residential-pickering",
    title: "Bi-Weekly Home Cleaning in Pickering",
    metaDescription:
      "How Durham Cleaners helped a Pickering family reclaim their weekends with reliable bi-weekly house cleaning since booking in 2024.",
    location: "Pickering, ON",
    service: "Residential cleaning",
    challenge:
      "A family of four in south Pickering with two working parents needed consistent cleaning but had bad experiences with rotating gig-economy cleaners who missed details and arrived late.",
    solution:
      "Durham Cleaners assigned a trained local team on a bi-weekly schedule with the same checklist each visit: kitchen, bathrooms, floors, and dusting using eco-friendly products safe for their dog.",
    result:
      "The home stayed guest-ready without weekend scrub sessions. The family used the 15% bi-weekly discount and reported cleaner bathrooms and less stress within the first month.",
    quote: "Reliable, on time, and noticeably more detail than our previous service.",
  },
  {
    slug: "commercial-durham",
    title: "Office Janitorial for Durham Region Business",
    metaDescription:
      "Commercial cleaning case study: after-hours office cleaning in Durham Region with consistent standards and eco-friendly products.",
    location: "Durham Region, ON",
    service: "Commercial cleaning",
    challenge:
      "A professional services office near the Pickering/Ajax corridor needed dependable after-hours cleaning when staff complained about inconsistent restroom and kitchenette standards from a previous vendor.",
    solution:
      "Durham Cleaners scoped a nightly checklist covering restrooms, floors, trash, touch points, and break room cleaning. One primary crew was assigned to reduce turnover.",
    result:
      "Staff noticed improved restrooms and kitchen areas within the first week. The client renewed on a monthly contract with clear escalation contact.",
    quote: "They show up when scheduled and communicate if anything changes.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((c) => c.slug);
}
