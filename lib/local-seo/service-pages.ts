import type { ServicePageData } from "@/lib/local-seo/types";

const cityLinks = [
  { label: "House cleaning Pickering", href: "/house-cleaning-pickering" },
  { label: "House cleaning Ajax", href: "/house-cleaning-ajax" },
  { label: "House cleaning Whitby", href: "/house-cleaning-whitby" },
  { label: "House cleaning Oshawa", href: "/house-cleaning-oshawa" },
  { label: "Durham Region cleaning", href: "/house-cleaning-durham-region" },
];

function residentialRelated(): ServicePageData["relatedServices"] {
  return [
    { label: "Deep cleaning", href: "/deep-cleaning" },
    { label: "Move-in / move-out", href: "/move-in-move-out-cleaning" },
    { label: "Airbnb cleaning", href: "/airbnb-cleaning" },
    { label: "Post-renovation", href: "/post-renovation-cleaning" },
  ];
}

export const servicePages: ServicePageData[] = [
  {
    slug: "residential-cleaning",
    title: "Residential Cleaning",
    metaTitle: "Residential & House Cleaning Durham Region | Durham Cleaners",
    metaDescription:
      "Professional residential and house cleaning in Pickering, Ajax, Whitby, Oshawa and Durham Region. Eco-friendly products, trained teams, 15% off first visit. Quote within 4 hours.",
    keywords: ["house cleaning Durham Region", "residential cleaning Pickering", "home cleaning Ajax", "maid service Whitby"],
    heroTitle: "Residential & house",
    heroAccent: "cleaning",
    heroSubtitle: "Regular, one-time, and deep home cleaning across Durham Region and the GTA since 1995.",
    intro:
      "Durham Cleaners has helped homeowners across Pickering, Ajax, Whitby, Oshawa, Courtice, and Bowmanville keep their homes spotless since 1995. Whether you need a weekly tidy, a bi-weekly maintenance clean, or a one-time refresh before guests arrive, our residential team arrives on time with eco-friendly products and professional equipment.",
    sections: [
      {
        heading: "Who residential cleaning is for",
        paragraphs: [
          "Busy families in Pickering and Ajax who want evenings back instead of scrubbing kitchens. Professionals commuting to Toronto who need reliable bi-weekly cleaning. Seniors in Whitby who want a trusted local team. Landlords between tenants. Anyone who wants a consistently clean home without managing supplies, schedules, or quality control themselves.",
          "We serve detached homes, townhouses, condos, and rental units across Durham Region. Tell us your layout, pets, allergies, and priorities on the request form and we will match you with a cleaning plan that fits.",
        ],
      },
      {
        heading: "What's included in a standard residential clean",
        paragraphs: [
          "Every visit covers kitchens, bathrooms, living areas, and bedrooms unless you request a focused scope. We dust surfaces, wipe counters and appliances, clean sinks and fixtures, vacuum carpets and rugs, mop hard floors, and empty trash in serviced rooms. We use eco-friendly green products safe for children and pets.",
          "For first-time customers we offer 15% off. For bi-weekly ongoing bookings we offer 15% off as well. Submit the form and we will contact you within 4 hours with availability and a quote.",
        ],
      },
      {
        heading: "Why Durham homeowners choose us",
        paragraphs: [
          "Local since 1995 means we know Durham Region housing: split-levels in Ajax, newer builds in north Pickering, lakefront properties in Whitby, and established neighbourhoods in Oshawa. We are bonded, insured, and professionally trained. Our 5-star Google rating reflects real feedback from homeowners and REALTORS across the region.",
          "Need more than a standard clean? Pair residential service with deep cleaning, move-out cleaning, or post-renovation cleaning. Browse our gallery for real results from homes we have serviced locally.",
        ],
      },
    ],
    included: [
      "Kitchen counters, sinks, and appliance exteriors",
      "Bathroom sinks, toilets, showers, and mirrors",
      "Dusting furniture, shelves, and reachable surfaces",
      "Vacuuming carpets, rugs, and stairs",
      "Mopping hard floors",
      "Trash removal in cleaned rooms",
      "Eco-friendly green cleaning products supplied",
    ],
    expectations: {
      before: ["Pick up personal items and clutter from floors", "Note any allergy concerns or fragile areas", "Secure pets if preferred"],
      after: ["Fresh, odour-free rooms ready to use", "Consistent checklist completed each visit", "Follow-up within 4 hours on new quote requests"],
    },
    faqs: [
      { q: "How much does house cleaning cost in Durham Region?", a: "Pricing depends on home size, condition, and frequency. Request a quote online or call (416) 305-5187. We respond within 4 hours with options and our 15% first-time or bi-weekly discounts where applicable." },
      { q: "Do you bring supplies?", a: "Yes. Our teams arrive with eco-friendly products and professional equipment." },
      { q: "Can I book weekly or bi-weekly?", a: "Yes. Ongoing maintenance is available weekly, bi-weekly, or on a schedule that works for you." },
      { q: "Which cities do you serve?", a: "Pickering, Ajax, Whitby, Oshawa, Courtice, Bowmanville, and all of Durham Region." },
      { q: "Are your cleaners insured?", a: "Yes. Durham Cleaners uses professionally trained, bonded, and insured cleaning teams." },
      { q: "How fast can I get a quote?", a: "We aim to contact you within 4 hours of form submission during normal business flow." },
    ],
    relatedServices: residentialRelated(),
    relatedCities: cityLinks,
    formServiceValue: "Residential Cleaning",
  },
  {
    slug: "commercial-cleaning",
    title: "Commercial Cleaning",
    metaTitle: "Commercial Cleaning Durham Region & Pickering | Offices & Retail",
    metaDescription:
      "Commercial cleaning for offices, retail, and restaurants in Durham Region, Pickering, and Ajax. Reliable schedules, eco-friendly products, free quote within 4 hours.",
    keywords: ["commercial cleaning Durham", "office cleaning Pickering", "janitorial service Ajax", "retail cleaning Whitby"],
    heroTitle: "Commercial",
    heroAccent: "cleaning",
    heroSubtitle: "Offices, retail, restaurants, and workplaces across Durham Region.",
    intro:
      "First impressions matter for every business in Durham Region. Durham Cleaners provides commercial cleaning for offices, clinics, retail stores, restaurants, and shared workspaces in Pickering, Ajax, Whitby, Oshawa, and surrounding areas. We work around your hours, follow checklists tailored to your facility, and use products appropriate for staff and customer areas.",
    sections: [
      {
        heading: "Commercial spaces we clean",
        paragraphs: [
          "Professional offices and co-working spaces. Medical and dental waiting areas (non-clinical scope as agreed). Retail storefronts and showrooms. Restaurants front-of-house and agreed back-of-house zones. Property management common areas. Any workplace that needs reliable, scheduled cleaning with documented standards.",
          "We customize scope by square footage, traffic, and industry requirements. After-hours and early-morning slots are available across Durham Region.",
        ],
      },
      {
        heading: "Typical commercial scope",
        paragraphs: [
          "Restroom sanitation, floor care, trash removal, desk and reception wipe-downs, glass and entryway cleaning, kitchenette maintenance, and high-touch disinfection on agreed surfaces. We can combine daily, weekly, or custom frequencies.",
          "Request a walkthrough quote through our form or call (416) 305-5187. We respond within 4 hours.",
        ],
      },
      {
        heading: "Local commercial clients trust us because",
        paragraphs: [
          "We have served Durham Region since 1995. Teams are trained, insured, and consistent. We understand GTA commute corridors and can schedule cleans before staff arrive in Pickering or Ajax office parks. Eco-friendly products support healthier indoor air for employees and visitors.",
        ],
      },
    ],
    included: [
      "Restroom cleaning and restocking coordination",
      "Floor vacuuming and mopping",
      "Trash and recycling removal",
      "Desk and reception surface wipe-down",
      "Interior glass and entryway cleaning",
      "Kitchenette / break room cleaning",
      "High-touch point disinfection (as scoped)",
    ],
    expectations: {
      before: ["Share floor plan or priority zones", "Confirm access and alarm procedures", "Agree on supply storage if on-site"],
      after: ["Workplace ready for staff and customers", "Checklist sign-off available on request", "Consistent team when possible"],
    },
    faqs: [
      { q: "Do you clean after business hours?", a: "Yes. We schedule commercial cleans around your operating hours including evenings where needed." },
      { q: "Can you clean multiple locations?", a: "Yes. Tell us each address on the request form and we will quote accordingly." },
      { q: "Do you service Pickering and Ajax offices?", a: "Yes. Commercial cleaning is available across Durham Region including Pickering and Ajax." },
      { q: "What is included vs add-on?", a: "We scope each facility individually. Standard janitorial tasks are included; specialty floor work or construction cleanup may be quoted separately." },
      { q: "How do I start?", a: "Submit the contact form with your business address and preferred schedule. We contact you within 4 hours." },
    ],
    relatedServices: [
      { label: "Industrial cleaning", href: "/industrial-cleaning" },
      { label: "Residential cleaning", href: "/residential-cleaning" },
      { label: "Deep cleaning", href: "/deep-cleaning" },
    ],
    relatedCities: [
      { label: "Commercial cleaning Pickering", href: "/commercial-cleaning-pickering" },
      { label: "Commercial cleaning Ajax", href: "/commercial-cleaning-ajax" },
      { label: "House cleaning Durham Region", href: "/house-cleaning-durham-region" },
    ],
    formServiceValue: "Commercial Cleaning",
  },
  {
    slug: "industrial-cleaning",
    title: "Industrial Cleaning",
    metaTitle: "Industrial Cleaning Durham Region | Warehouses & Facilities",
    metaDescription:
      "Industrial cleaning for warehouses, production areas, and rigorous environments in Durham Region. Safety-focused teams, compliance-aware scope. Request a quote.",
    keywords: ["industrial cleaning Durham", "warehouse cleaning GTA", "factory cleaning Oshawa"],
    heroTitle: "Industrial",
    heroAccent: "cleaning",
    heroSubtitle: "Rigorous environments across Durham Region and the GTA.",
    intro:
      "Industrial facilities demand more than a standard janitorial pass. Durham Cleaners provides industrial cleaning for warehouses, production floors, logistics hubs, and other heavy-use environments in Durham Region. We focus on safety, access coordination, and scope that supports operational efficiency and compliance expectations.",
    sections: [
      {
        heading: "Industrial environments we support",
        paragraphs: [
          "Warehouses and distribution centres along Durham corridors. Manufacturing and assembly areas (non-hazardous scope as agreed). Loading bays, break rooms, and office mezzanines within industrial sites. Facilities that need scheduled deep cleans between shifts or seasonal shutdowns.",
        ],
      },
      {
        heading: "Scope and coordination",
        paragraphs: [
          "Every industrial job starts with a site assessment. We document floor types, machinery clearances, PPE requirements, and restricted zones. Cleaning may include floor scrubbing, degreasing agreed areas, high-dust removal, restroom and office pods within the facility, and post-maintenance cleanup.",
          "Contact us at (416) 305-5187 or through the form. We respond within 4 hours to begin scoping.",
        ],
      },
      {
        heading: "Why hire a local industrial cleaning partner",
        paragraphs: [
          "Durham Cleaners has nearly three decades in the region. We understand local industrial parks, shift patterns, and the need for reliable crews who show up on time. Combined with our commercial and post-renovation capabilities, we can support one-off projects and recurring contracts.",
        ],
      },
    ],
    included: [
      "Floor sweeping and scrubbing (scoped)",
      "Degreasing of agreed surfaces",
      "Dust removal from reachable structures",
      "Restroom and office area cleaning within facility",
      "Break room and common area cleaning",
      "Post-maintenance debris removal (scoped)",
      "Safety briefing and PPE compliance on site",
    ],
    expectations: {
      before: ["Site walkthrough and hazard identification", "Lockout/tagout coordination where required", "Written scope approval"],
      after: ["Cleaner, safer work environment", "Documented completion for your records", "Option for recurring schedule"],
    },
    faqs: [
      { q: "Do you handle hazardous materials?", a: "Scope is limited to non-hazardous industrial cleaning unless specifically agreed in writing with proper protocols." },
      { q: "Can you clean during shutdowns?", a: "Yes. We schedule around production calendars including weekends and shutdown windows." },
      { q: "Is industrial cleaning available in Oshawa?", a: "Yes. We serve Oshawa, Whitby, Ajax, Pickering, and all of Durham Region." },
      { q: "How is pricing calculated?", a: "By square footage, soil level, frequency, and access requirements after assessment." },
    ],
    relatedServices: [
      { label: "Commercial cleaning", href: "/commercial-cleaning" },
      { label: "Post-renovation cleaning", href: "/post-renovation-cleaning" },
    ],
    relatedCities: cityLinks.slice(0, 3),
    formServiceValue: "Industrial Cleaning",
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    metaTitle: "Deep Cleaning Durham Region | Top-to-Bottom Home Refresh",
    metaDescription:
      "Deep cleaning services in Pickering, Ajax, Whitby, Oshawa and Durham Region. Baseboards, appliances, detailed scrubbing. 15% off first visit. Quote within 4 hours.",
    keywords: ["deep cleaning Durham Region", "deep house cleaning Pickering", "detailed home cleaning Ajax"],
    heroTitle: "Deep",
    heroAccent: "cleaning",
    heroSubtitle: "Top-to-bottom detail for homes across Durham Region.",
    intro:
      "A deep clean goes beyond maintenance. Durham Cleaners deep cleaning service targets built-up grime, neglected corners, baseboards, appliance exteriors, bathroom scale, and hard-to-reach dust in homes across Pickering, Ajax, Whitby, Oshawa, and Durham Region. Ideal for seasonal refreshes, pre-event prep, or resetting your home before starting regular service.",
    sections: [
      {
        heading: "When to book a deep clean",
        paragraphs: [
          "Spring and fall seasonal refreshes. Before hosting holidays or family gatherings. When regular cleaning has slipped and you need a reset. Before starting bi-weekly maintenance so the baseline is high. After minor renovations that did not require full post-construction cleanup.",
          "Many Pickering and Ajax homeowners book a deep clean first, then switch to ongoing residential cleaning with 15% bi-weekly discount.",
        ],
      },
      {
        heading: "Deep clean vs regular cleaning",
        paragraphs: [
          "Regular cleaning maintains a home that is already in good shape. Deep cleaning adds detail work: baseboards, door frames, light switches, deeper bathroom scrubbing, interior appliance exteriors, inside microwave, detailed kitchen degreasing, and extra attention to edges and corners.",
          "Tell us your priorities on the form. We respond within 4 hours with timing and quote.",
        ],
      },
      {
        heading: "Eco-friendly detailed cleaning",
        paragraphs: [
          "We use green products suitable for families and pets. Our trained teams bring supplies and follow a detailed checklist so nothing important is missed. See our gallery for real Durham Region results.",
        ],
      },
    ],
    included: [
      "Everything in standard residential cleaning",
      "Baseboards and door frame wipe-down",
      "Detailed bathroom scrubbing and fixtures",
      "Kitchen degreasing and appliance exteriors",
      "Light switches and handles disinfected",
      "Extra dusting of blinds and reachable vents",
      "Edge and corner detail on floors",
    ],
    expectations: {
      before: ["Declutter surfaces for best access", "List any problem areas (limescale, grease)", "Plan 4–6 hours depending on size"],
      after: ["Noticeably fresher rooms and details", "Great baseline for ongoing maintenance", "Recommendations for follow-up schedule"],
    },
    faqs: [
      { q: "How long does a deep clean take?", a: "Typically longer than a standard clean depending on size and condition. We estimate timing when we quote." },
      { q: "Is deep cleaning available in Whitby?", a: "Yes. We deep clean homes across Durham Region including Whitby and Oshawa." },
      { q: "Do you offer 15% off?", a: "First-time customers receive 15% off. Bi-weekly ongoing plans also qualify for 15% off." },
      { q: "Can I combine deep and move-out cleaning?", a: "Yes. Tell us your move timeline on the form and we will scope accordingly." },
    ],
    relatedServices: residentialRelated(),
    relatedCities: cityLinks,
    formServiceValue: "Deep Cleaning",
  },
  {
    slug: "move-in-move-out-cleaning",
    title: "Move-In & Move-Out Cleaning",
    metaTitle: "Move Out Cleaning Pickering & Durham Region | Deposit-Ready",
    metaDescription:
      "Move-in and move-out cleaning in Pickering, Ajax, Whitby, Oshawa. Landlord-ready results for tenants and REALTORS. Request a quote within 4 hours.",
    keywords: ["move out cleaning Pickering", "move in cleaning Ajax", "end of tenancy cleaning Durham"],
    heroTitle: "Move-in & move-out",
    heroAccent: "cleaning",
    heroSubtitle: "Deposit-ready and move-in fresh across Durham Region.",
    intro:
      "Moving is stressful enough without scrubbing an empty home. Durham Cleaners move-in and move-out cleaning helps tenants, landlords, and REALTORS in Pickering, Ajax, Whitby, Oshawa, and Durham Region deliver spotless properties. We clean empty or furnished units top to bottom so the next chapter starts clean.",
    sections: [
      {
        heading: "Move-out cleaning for tenants",
        paragraphs: [
          "Pickering and Ajax renters use our move-out service to meet lease expectations and protect deposits. We clean empty kitchens and bathrooms, appliances inside and out where scoped, cabinets, closets, floors, and walls touch-up zones. REALTORS like Nicole D. on our testimonials page trust us for pre-listing and tenant turnover work.",
          "Book early during peak moving season (May through September). We respond within 4 hours on quote requests.",
        ],
      },
      {
        heading: "Move-in cleaning for new homeowners",
        paragraphs: [
          "Before you unpack, we sanitize and detail the space: bathrooms, kitchen, floors, cabinets, and closets. Especially valuable for resale homes in Whitby and Oshawa where you want peace of mind before settling in.",
        ],
      },
      {
        heading: "What landlords and agents should expect",
        paragraphs: [
          "Consistent communication before and after the clean. Eco-friendly products. Hard-working crews who understand tight turnover windows between tenants. Photos on request for remote owners.",
        ],
      },
    ],
    included: [
      "Full kitchen and bathroom detail in empty home",
      "Cabinet interior wipe (empty)",
      "Closet and shelf cleaning",
      "All floor vacuum and mop",
      "Appliance interior/exterior (as scoped)",
      "Light fixture and switch plate wipe",
      "Garage sweep (if requested)",
    ],
    expectations: {
      before: ["Remove all belongings unless otherwise agreed", "Provide key or lockbox access", "Share landlord checklist if applicable"],
      after: ["Rental-ready presentation", "Fresh smell without harsh chemical residue", "Ideal handoff for inspection or listing"],
    },
    faqs: [
      { q: "Do you clean empty homes only?", a: "Move-out is typically empty. Move-in can be empty or with boxes stacked to the side." },
      { q: "Can REALTORS book on behalf of clients?", a: "Yes. We communicate with agents directly as shown in our client testimonials." },
      { q: "How soon can you clean before closing?", a: "Submit the form with your date. We respond within 4 hours with availability." },
      { q: "Do you serve Pickering renters?", a: "Yes. Move-out cleaning is popular in Pickering, Ajax, and across Durham Region." },
    ],
    relatedServices: [
      { label: "Real estate pre-listing", href: "/real-estate-cleaning" },
      { label: "Deep cleaning", href: "/deep-cleaning" },
      { label: "Residential cleaning", href: "/residential-cleaning" },
    ],
    relatedCities: cityLinks,
    formServiceValue: "Move-In & Move-Out Cleaning",
  },
  {
    slug: "post-renovation-cleaning",
    title: "Post-Renovation Cleaning",
    metaTitle: "Post Renovation Cleaning GTA & Durham Region",
    metaDescription:
      "Post-renovation and construction cleanup in Durham Region and GTA. Remove dust, debris, and fine particles. Safe eco-friendly finish. Quote within 4 hours.",
    keywords: ["post renovation cleaning GTA", "construction cleanup Durham", "renovation dust cleaning Pickering"],
    heroTitle: "Post-renovation",
    heroAccent: "cleaning",
    heroSubtitle: "From construction dust to move-in ready across Durham and the GTA.",
    intro:
      "Renovations leave fine dust everywhere. Durham Cleaners post-renovation cleaning removes construction residue from kitchens, bathrooms, floors, vents, and living spaces in Durham Region and GTA homes. We help contractors, homeowners, and property managers deliver a finished project that looks as good as the new cabinets and floors.",
    sections: [
      {
        heading: "After the contractors leave",
        paragraphs: [
          "Drywall dust on baseboards. Fine particles on new countertops. Window tracks full of debris. Bathroom tile haze. We detail these areas so your renovation shines instead of hiding behind a layer of dust.",
        ],
      },
      {
        heading: "Multi-phase post-reno cleans",
        paragraphs: [
          "Large projects in Pickering or Ajax may need a rough clean after trades and a final detail before furniture returns. Tell us your timeline on the request form.",
        ],
      },
      {
        heading: "Eco-friendly final finish",
        paragraphs: [
          "We use green products safe for new finishes and families moving back in. Gallery photos show real post-renovation results across Durham Region.",
        ],
      },
    ],
    included: [
      "Fine dust removal from all surfaces",
      "Window sill and track cleaning",
      "Floor vacuum and multiple mop passes",
      "Cabinet exterior and interior wipe",
      "Bathroom and kitchen detail",
      "Light fixture and vent cover dusting",
      "Debris bagging and disposal (scoped)",
    ],
    expectations: {
      before: ["Trades complete and major debris removed", "HVAC filters noted/replaced if needed", "Walkthrough for scope"],
      after: ["Home safe for occupancy", "Surfaces ready for staging or move-in", "Final touch-up available if needed"],
    },
    faqs: [
      { q: "When should post-reno cleaning happen?", a: "After construction ends and before furniture or staging. We coordinate timing on quote." },
      { q: "Do you work with contractors?", a: "Yes. Provide site access details and we align with your punch-list schedule." },
      { q: "Is this different from deep cleaning?", a: "Yes. Post-renovation targets construction dust and debris deep cleaning does not usually cover." },
    ],
    relatedServices: [
      { label: "Deep cleaning", href: "/deep-cleaning" },
      { label: "Real estate cleaning", href: "/real-estate-cleaning" },
      { label: "Residential cleaning", href: "/residential-cleaning" },
    ],
    relatedCities: cityLinks,
    formServiceValue: "Post-Renovation Cleaning",
  },
  {
    slug: "airbnb-cleaning",
    title: "Airbnb Cleaning",
    metaTitle: "Airbnb Turnover Cleaning Pickering & Durham Region",
    metaDescription:
      "Fast Airbnb and short-term rental turnover cleaning in Pickering, Ajax, Whitby, and Durham Region. Guest-ready standards, 15% bi-weekly discount.",
    keywords: ["Airbnb cleaning Durham Region", "short term rental cleaning Pickering", "turnover cleaning Ajax"],
    heroTitle: "Airbnb & short-term rental",
    heroAccent: "cleaning",
    heroSubtitle: "Guest-ready turnovers across Pickering, Ajax, and Durham Region.",
    intro:
      "Short-term rental hosts in Pickering, Ajax, Whitby, and Durham Region depend on fast, reliable turnovers. Durham Cleaners Airbnb cleaning resets linens areas, bathrooms, kitchens, and living spaces between guests so your reviews stay strong and your calendar stays full.",
    sections: [
      {
        heading: "Turnover cleaning that protects your rating",
        paragraphs: [
          "Guests notice bathrooms and kitchens first. We restock-ready clean those zones, vacuum and mop, empty trash, reset visible surfaces, and check details hosts specify (coffee station, welcome area, patio).",
        ],
      },
      {
        heading: "Flexible scheduling for superhosts",
        paragraphs: [
          "Same-day turnovers when schedule allows. Bi-weekly discount for hosts with multiple properties. Communication by phone or email with 4-hour response on new requests.",
        ],
      },
      {
        heading: "Eco-friendly for guest health",
        paragraphs: [
          "Green products reduce chemical smells between check-in windows. Important for family-friendly listings in Durham Region lakefront and suburban neighbourhoods.",
        ],
      },
    ],
    included: [
      "Kitchen and bathroom guest-ready detail",
      "Bedroom tidy and surface dust",
      "Living area vacuum and mop",
      "Trash removal and liner reset",
      "Spot check of host checklist items",
      "Restocking coordination if supplies on site",
      "Photo confirmation on request",
    ],
    expectations: {
      before: ["Share lockbox or smart-lock code", "Provide host checklist", "Note checkout/check-in times"],
      after: ["Guest-ready presentation", "Consistent standard each turnover", "Quick rebook for next gap"],
    },
    faqs: [
      { q: "How fast can you turnover?", a: "Depends on size and same-day schedule. Tell us checkout time on the form." },
      { q: "Do you clean multiple Airbnb units?", a: "Yes. Hosts with several properties in Durham Region use us regularly." },
      { q: "Is laundry included?", a: "Linens handling can be scoped per property. Specify on the request form." },
    ],
    relatedServices: residentialRelated(),
    relatedCities: cityLinks,
    formServiceValue: "Airbnb Cleaning",
  },
  {
    slug: "real-estate-cleaning",
    title: "Real Estate Pre-Listing Cleaning",
    metaTitle: "Real Estate Pre-Listing Cleaning Durham Region | Show-Ready Homes",
    metaDescription:
      "Pre-listing and showing-ready cleaning for REALTORS and sellers in Durham Region. Impress buyers in Pickering, Ajax, Whitby, Oshawa. Quote within 4 hours.",
    keywords: ["real estate cleaning Durham", "pre-listing cleaning Pickering", "staging clean Oshawa"],
    heroTitle: "Real estate pre-listing",
    heroAccent: "cleaning",
    heroSubtitle: "Show-ready homes for REALTORS and sellers across Durham Region.",
    intro:
      "Buyers decide in the first minutes inside a home. Durham Cleaners real estate pre-listing cleaning helps REALTORS and sellers in Pickering, Ajax, Whitby, Oshawa, and Durham Region present spotless kitchens, gleaming bathrooms, and fresh-smelling living spaces before photos and showings.",
    sections: [
      {
        heading: "Built for REALTORS and sellers",
        paragraphs: [
          "Nicole D., a local REALTOR, trusts us for client properties because we communicate clearly and work hard. We clean occupied or vacant listings, coordinate around photographer schedules, and deliver results that photograph well.",
        ],
      },
      {
        heading: "Pre-listing checklist focus",
        paragraphs: [
          "Kitchen sparkle, bathroom detail, floor shine, interior glass, and removal of everyday clutter traces. Optional add-ons: garage sweep, deck wipe, deep oven/microwave for showing day.",
        ],
      },
      {
        heading: "Pair with move-out service",
        paragraphs: [
          "After closing, book move-out cleaning for buyers or tenants. One local team for the full listing lifecycle.",
        ],
      },
    ],
    included: [
      "Kitchen and bathroom showing-ready detail",
      "Appliance exterior polish",
      "Floor vacuum and mop throughout",
      "Interior glass and mirrors",
      "Dusting all visible surfaces",
      "Light declutter of surfaces (as agreed)",
      "Garage sweep optional",
    ],
    expectations: {
      before: ["Confirm photo/showing date", "Occupied vs vacant scope", "Agent contact for access"],
      after: ["Listing photography ready", "Showing-day freshness", "Buyer-ready presentation"],
    },
    faqs: [
      { q: "Can agents book without the homeowner?", a: "Yes with permission. We coordinate access and expectations in advance." },
      { q: "How soon before photos should we clean?", a: "Ideally 24–48 hours before photography. Rush slots may be available." },
      { q: "Do you work in Pickering listings?", a: "Yes. Pre-listing cleaning is available across Durham Region." },
    ],
    relatedServices: [
      { label: "Move-out cleaning", href: "/move-in-move-out-cleaning" },
      { label: "Deep cleaning", href: "/deep-cleaning" },
    ],
    relatedCities: cityLinks,
    formServiceValue: "Real Estate Pre-Listing Cleaning",
  },
];

export function getServicePage(slug: string): ServicePageData | undefined {
  return servicePages.find((p) => p.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicePages.map((p) => p.slug);
}
