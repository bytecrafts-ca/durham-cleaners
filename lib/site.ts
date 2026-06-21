/**
 * Durham Cleaners — site content
 */
export const siteConfig = {
  name: "Durham Cleaners",
  logoText: "DURHAM CLEANERS",
  instagramHandle: "@durhamcleaners",
  tagline: "Premium cleaning services serving Durham Region and GTA",
  heroSubtitle:
    "Durham Cleaners offer the best quality cleaning service in Durham Region and the GTA.",
  homeIntro:
    "Serving the Durham region since 1995. Eco-friendly green cleaning products, professionally trained cleaners, and a flawless finish every time.",
  description: "Home, commercial & industrial cleaning in Durham Region.",
  seo: {
    defaultTitle: "Durham Cleaners | Residential & Commercial Cleaning Durham Region & GTA",
    defaultDescription:
      "Durham Cleaners — professional residential, commercial, and industrial cleaning in Durham Region and the GTA. Courtice, Oshawa, Whitby, Ajax, Pickering & Bowmanville. Eco-friendly products. 15% off first-time & bi-weekly bookings. Call (416) 305-5187 or request a quote online.",
    keywords: [
      "Durham Cleaners",
      "Durham cleaners",
      "cleaning service Courtice",
      "house cleaning Durham Region",
      "residential cleaning Durham",
      "commercial cleaning Oshawa",
      "industrial cleaning GTA",
      "deep cleaning Whitby",
      "move in move out cleaning Ajax",
      "move out cleaning Pickering",
      "Airbnb cleaning Durham",
      "post renovation cleaning Ontario",
      "real estate pre-listing cleaning",
      "eco-friendly cleaning Durham",
      "office cleaning Durham Region",
      "bonded insured cleaners Courtice",
      "cleaning company near me Durham",
      "best cleaners Oshawa",
      "professional home cleaning GTA",
      "Bowmanville cleaning service",
      "weekly house cleaning Durham",
      "bi-weekly cleaning discount",
      "24 hour cleaning service Ontario",
    ],
    knowsAbout: [
      "Residential cleaning",
      "Commercial cleaning",
      "Industrial cleaning",
      "Deep cleaning",
      "Move-in move-out cleaning",
      "Post-renovation cleaning",
      "Airbnb turnover cleaning",
      "Real estate pre-listing cleaning",
      "Eco-friendly green cleaning",
      "Office cleaning",
    ],
    locale: "en_CA",
    priceRange: "$$",
    averageRating: 5,
    areaServed: [
      "Courtice",
      "Oshawa",
      "Bowmanville",
      "Whitby",
      "Ajax",
      "Pickering",
      "Durham Region",
      "Greater Toronto Area",
    ],
    geo: {
      latitude: 43.8975,
      longitude: -78.8158,
    },
    openingHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    openingHoursLabel: "Open 24 hours — Monday through Sunday",
    googleSiteVerification: "qW8JFVXfeXJN5Mn_4Jkflg44Fe6g-90KhXaku7otOoQ",
  },
  heroImage: "/hero.jpg",
  heroVideo: "/hero.mp4",
  logoImage: "/logo.jpeg",
  aboutImage: "/about-cleaning.jpg",
  siteUrl: "https://durhamcleaners.vercel.app",
  contact: {
    phone: "(416) 305-5187",
    phoneTel: "+14163055187",
    email: "info@durhamcleaner.com",
    address: "57 Foxhunt Trail, Courtice, ON L1E 1E4",
    addressShort: "Courtice, ON",
    formSubmitUrl: "https://formsubmit.co/ajax/info@durhamcleaner.com",
  },
  social: {
    instagram: "https://www.instagram.com/durhamcleaners/",
    facebook: "https://www.facebook.com/profile.php?id=61560764315834",
    google:
      "https://www.google.com/maps/search/?api=1&query=Durham+Cleaners+57+Foxhunt+Trail+Courtice+ON",
  },
  discounts: {
    firstTime: "15% off for first-time customers",
    biWeekly: "15% off for bi-weekly cleaning bookings",
  },
  serviceNote:
    "Eco-friendly green cleaning products. We handle the hard-to-reach places where dirt and dust accumulate.",
  processSteps: [
    {
      title: "You Book",
      description:
        "Tell us what cleaning services you need, when you need them. We will get in contact with you within 4 hours.",
    },
    {
      title: "We Clean",
      description:
        "Our professionally trained team of cleaners arrive promptly to clean the property. We guarantee a flawless finish!",
    },
    {
      title: "You Relax",
      description:
        "Take comfort knowing your property is in great hands. Relax or spend the extra time doing something you enjoy, instead of cleaning.",
    },
  ] as const,
  about: {
    body: "Serving the Durham region since 1995, Durham Cleaners has nearly three decades of experience. Our professionally trained, bonded, and insured cleaners come equipped with eco-friendly products and all the supplies needed for a spotless finish.",
    since: "1995",
  },
  requestNote:
    "Tell us what you need and your preferred day and time — we will get in contact with you within 4 hours.",
  serviceAreaLabel: "Serving Durham Region and GTA",
  timePreferenceOptions: [
    "Morning (8am – 12pm)",
    "Afternoon (12pm – 5pm)",
    "Evening (5pm – 8pm)",
    "Flexible / any time",
  ] as const,
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#request", label: "Request" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const features = [
  {
    title: "Residential",
    description:
      "Busy schedule? We arrange regular home cleanings at times that suit you — one-time, ongoing, deep cleans, and move-in/out.",
    icon: "home",
  },
  {
    title: "Commercial",
    description:
      "Comprehensive commercial cleaning tailored to your business — offices, retail, restaurants, and more.",
    icon: "building",
  },
  {
    title: "Industrial",
    description:
      "Top-tier industrial cleaning for rigorous environments — operational efficiency and compliance standards.",
    icon: "factory",
  },
] as const;

export const whyChooseUs = [
  {
    title: "Since 1995",
    description: "Nearly three decades serving the Durham region with trusted local expertise.",
  },
  {
    title: "5★ on Google",
    description: "Our 5-star rating on Google reflects the trust our customers place in us.",
  },
  {
    title: "Eco-friendly",
    description: "We use eco-friendly green cleaning products safe for your family and the environment.",
  },
  {
    title: "Always on time",
    description: "Reliable, consistent, top-quality service — always on time, every visit.",
  },
] as const;

export const services = [
  {
    id: "one-time",
    title: "One-Time Cleaning",
    description:
      "A quick, thorough clean of your entire home — kitchens, bathrooms, living rooms, bedrooms, and more. Vacuuming, mopping, dusting, and spot cleaning. Ideal for pre-event prep or a spring clean. 15% off for first-time customers.",
  },
  {
    id: "ongoing",
    title: "Ongoing Cleaning",
    description:
      "Keep your home consistently clean with regular maintenance. We cover all areas including kitchens, bathrooms, living rooms, and bedrooms. 15% off for bi-weekly cleanings.",
  },
  {
    id: "move",
    title: "Move-In & Move-Out Cleaning",
    description:
      "Every corner cleaned — kitchens, bathrooms, living rooms, bedrooms, and more. Vacuuming, mopping, dusting, and spot cleaning so your space is immaculate for the next occupant or your new beginning.",
  },
  {
    id: "deep",
    title: "Deep Cleaning",
    description:
      "A meticulous top-to-bottom refresh of every area in your home, including hard-to-reach places. Vacuuming, mopping, dusting, and spot cleaning for an exceptional deep clean.",
  },
  {
    id: "renovation",
    title: "Post-Renovation Cleaning",
    description:
      "Remove dust, debris, and construction residues from every area — kitchens, bathrooms, living rooms, bedrooms, and more. Your home pristine and ready to enjoy after renovations.",
  },
  {
    id: "realestate",
    title: "Real Estate Pre-Listing Cleaning",
    description:
      "Make your property shine for showings. We clean every area including kitchens, bathrooms, living rooms, and bedrooms — vacuuming, mopping, dusting, and spot cleaning to attract buyers.",
  },
  {
    id: "airbnb",
    title: "Airbnb Cleaning",
    description:
      "Quick turnovers or deep cleans for Airbnb hosts across Courtice, Oshawa, Bowmanville, Whitby, Ajax, and Pickering. Eco-friendly products for a safe, guest-ready home. 15% off bi-weekly cleanings.",
  },
  {
    id: "commercial",
    title: "Commercial Cleaning",
    description:
      "Offices, retail stores, restaurants, and more. Floor cleaning, window cleaning, restroom sanitation, trash removal, and dusting for a clean, inviting workplace.",
  },
  {
    id: "industrial",
    title: "Industrial Cleaning",
    description:
      "Top-tier industrial cleaning designed for rigorous industrial environments. Maintaining a clean and safe workspace essential for operational efficiency and compliance with industry standards.",
  },
] as const;

export const faqs = [
  {
    q: "How do I book a cleaning?",
    a: "Use the request form on this site, call (416) 305-5187, or email info@durhamcleaner.com. We will get in contact with you within 4 hours.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Courtice, Oshawa, Bowmanville, Whitby, Ajax, Pickering, and the broader Durham Region and GTA.",
  },
  {
    q: "Do you use eco-friendly products?",
    a: "Yes — we use eco-friendly green cleaning products to ensure safety for your family and the environment.",
  },
  {
    q: "Are there any discounts?",
    a: "First-time customers receive 15% off. Bi-weekly ongoing cleaning bookings receive 15% off.",
  },
  {
    q: "How long have you been in business?",
    a: "Durham Cleaners has served the Durham region since 1995 — nearly three decades of trusted local service.",
  },
  {
    q: "What are your hours?",
    a: "We are available 24 hours a day, Monday through Sunday.",
  },
  {
    q: "Do you offer commercial and industrial cleaning?",
    a: "Yes — we clean offices, retail spaces, restaurants, and industrial facilities tailored to each environment.",
  },
] as const;

export const reviews = [
  {
    text: "I cannot express how impressed I am with Durham Cleaner's service! From the moment they arrived, their professionalism was evident. They conducted a thorough deep clean of my house, leaving no corner untouched. The attention to detail was remarkable, and the results were beyond my expectations. Not only did they exceed in cleanliness, but their friendly demeanor and efficient work ethic made the entire experience enjoyable. I highly recommend Durham Cleaner to anyone in need of a top-notch cleaning service. Highly recommended, and i will definitely use their services again Thank you for transforming my home into a sparkling oasis!",
    author: "Kevin N.",
    rating: 5,
  },
  {
    text: "Durham Cleaners was impressively professional! I am a REALTOR®️, and I hired them to clean a client's property for me. They were in consistent communication with me prior to the clean, ensuring we were on the same page for our expectations, any allergies and ensuring timing was good. The day of the clean they followed up prior to the clean to confirm the time and after they were done. My client was very impressed about how well they cleaned the home and how hard they worked. I will definitely be using this company again. I'm very impressed.",
    author: "Nicole D.",
    rating: 5,
    role: "Real estate",
  },
  {
    text: "I recommend this place to everyone, I have had really good service from this place. They are very punctual and very concerned about the safety and cleaneness of the place. Prices are reasonable and cheaper than what I got quoted from my local cleaners. My house was really clean and ready for my new Tennants.",
    author: "Akshayanth K.",
    rating: 5,
  },
] as const;

export const galleryImages = [
  { src: "/gallery/01.jpg", alt: "Durham Cleaners — cleaning work showcase" },
  { src: "/gallery/02.jpg", alt: "Durham Cleaners — residential cleaning results" },
  { src: "/gallery/03.jpg", alt: "Durham Cleaners — home cleaning service" },
  { src: "/gallery/04.jpg", alt: "Durham Cleaners — spotless interior cleaning" },
  { src: "/gallery/05.jpg", alt: "Durham Cleaners — professional home clean" },
  { src: "/gallery/06.jpg", alt: "Durham Cleaners — detailed cleaning work" },
  { src: "/gallery/07.jpg", alt: "Durham Cleaners — kitchen and home cleaning" },
  { src: "/gallery/08.jpg", alt: "Durham Cleaners — before and after cleaning" },
  { src: "/gallery/09.jpg", alt: "Durham Cleaners — deep clean results" },
  { src: "/gallery/10.jpg", alt: "Durham Cleaners — bathroom cleaning" },
  { src: "/gallery/11.jpg", alt: "Durham Cleaners — living space cleaning" },
  { src: "/gallery/12.jpg", alt: "Durham Cleaners — move-out cleaning" },
  { src: "/gallery/13.jpg", alt: "Durham Cleaners — commercial cleaning" },
  { src: "/gallery/14.webp", alt: "Durham Cleaners — post-renovation cleaning" },
  { src: "/gallery/15.jpg", alt: "Durham Cleaners — office cleaning" },
  { src: "/gallery/16.jpg", alt: "Durham Cleaners — move-in cleaning" },
  { src: "/gallery/17.jpg", alt: "Durham Cleaners — carpet and floor cleaning" },
  { src: "/gallery/18.jpg", alt: "Durham Cleaners — residential service" },
  { src: "/gallery/20.jpg", alt: "Durham Cleaners — home cleaning Durham Region" },
  { src: "/gallery/21.jpg", alt: "Durham Cleaners — bathroom mirror cleaning" },
  { src: "/gallery/22.png", alt: "Durham Cleaners — deep cleaning before and after" },
  { src: "/gallery/23.png", alt: "Durham Cleaners — post-renovation results" },
] as const;
