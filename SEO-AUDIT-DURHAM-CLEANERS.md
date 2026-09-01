# SEO Audit — Durham Cleaners (durhamcleaners.ca)

**Date:** September 1, 2026  
**Site:** https://durhamcleaners.ca  
**Stack:** Next.js 15 App Router

---

## Executive summary

Initial audit found 7 static pages, no city/service landing pages, no blog, limited internal linking, and schema without city-level `areaServed` types. **All critical issues below have been implemented in this release.**

---

## Issues found → fixes applied

| Issue | Before | After (fixed) |
|-------|--------|---------------|
| Home title/meta | Generic residential title | `House & Commercial Cleaning Durham Region \| Durham Cleaners Since 1995` + keyword-rich meta |
| H1 | "Residential & commercial cleaning" | **House cleaning Durham Region since 1995** |
| Money pages | Only `/services` list | **8 service pages** + **7 city pages** |
| Blog | None | **`/blog` + 10 articles** (900+ words each) |
| Reviews hub | `/testimonials` only | **`/reviews`** + `/review` → Google |
| Thank-you / conversion | Inline success only | **`/thank-you`** + GA4 `generate_lead` event |
| Sitemap | 7 URLs | **40+ URLs** (services, cities, blog, case studies) |
| Schema | Basic LocalBusiness | City `areaServed`, OfferCatalog (15% offers), ContactPoint, Service + FAQ per page |
| Internal links | Minimal | Footer service areas, resources, cross-links on all money pages |
| External guides | Not linked | Footer links to github.io guides |
| Sticky mobile CTA | Request only | **Call \| Get Quote** |
| 404 | Default | Custom with service/city links |
| Canonical domain | vercel.app fallback | **durhamcleaners.ca** |

---

## Title / meta — before vs after (key pages)

| URL | Before | After |
|-----|--------|-------|
| `/` | Durham Cleaners \| Residential & Commercial Cleaning… | **House & Commercial Cleaning Durham Region \| Durham Cleaners Since 1995** |
| `/house-cleaning-pickering` | (missing) | **House Cleaning Pickering ON \| Maid Service & Home Cleaning** |
| `/house-cleaning-ajax` | (missing) | **House Cleaning Ajax ON \| Home & Maid Service Durham Cleaners** |
| `/residential-cleaning` | (missing) | **Residential & House Cleaning Durham Region \| Durham Cleaners** |
| `/deep-cleaning` | (missing) | **Deep Cleaning Durham Region \| Top-to-Bottom Home Refresh** |
| `/move-in-move-out-cleaning` | (missing) | **Move Out Cleaning Pickering & Durham Region \| Deposit-Ready** |
| `/commercial-cleaning` | (missing) | **Commercial Cleaning Durham Region & Pickering \| Offices & Retail** |
| `/blog` | (missing) | **Cleaning Tips & Guides — Durham Region Blog** |
| `/reviews` | (missing) | **Google Reviews — Durham Cleaners** |

Full list: see `app/sitemap.xml` after deploy.

---

## New URLs (29+ added)

### Service pages
- `/residential-cleaning`
- `/commercial-cleaning`
- `/industrial-cleaning`
- `/deep-cleaning`
- `/move-in-move-out-cleaning`
- `/post-renovation-cleaning`
- `/airbnb-cleaning`
- `/real-estate-cleaning`

### City / local pages
- `/house-cleaning-pickering`
- `/house-cleaning-ajax`
- `/house-cleaning-whitby`
- `/house-cleaning-oshawa`
- `/house-cleaning-durham-region`
- `/commercial-cleaning-pickering`
- `/commercial-cleaning-ajax`

### Blog (10 posts)
- `/blog/how-much-does-house-cleaning-cost-durham-region-2026`
- `/blog/move-out-cleaning-checklist-pickering-renters`
- `/blog/eco-friendly-cleaning-products-durham-cleaners`
- `/blog/how-often-book-home-cleaning-weekly-vs-bi-weekly`
- `/blog/commercial-vs-residential-cleaning-differences`
- `/blog/post-renovation-cleaning-what-gets-missed`
- `/blog/airbnb-turnover-cleaning-pickering-ajax`
- `/blog/deep-cleaning-vs-regular-cleaning`
- `/blog/how-to-choose-cleaning-company-durham-region`
- `/blog/why-local-matters-durham-cleaners-since-1995`

### Conversion / trust
- `/reviews`
- `/review` (redirect to Google)
- `/thank-you`
- `/resources`
- `/case-studies/residential-pickering`
- `/case-studies/commercial-durham`

---

## Technical SEO checklist

- [x] Canonical URLs on all pages
- [x] Open Graph + Twitter cards
- [x] JSON-LD: LocalBusiness, Service, FAQPage, BreadcrumbList, BlogPosting
- [x] `robots.txt` + expanded sitemap
- [x] `llms.txt` for AI discovery
- [x] Skip link + breadcrumbs
- [x] `tel:+14163055187` on hero, footer, sticky bar
- [x] Form → `/thank-you` with GA4 hook (set `NEXT_PUBLIC_GA_MEASUREMENT_ID`)
- [x] Image lazy loading via Next.js Image on gallery/about
- [ ] **Lighthouse 95+** — run after deploy (see below)

---

## Lighthouse (run after deploy)

```bash
npx lighthouse https://durhamcleaners.ca --only-categories=performance,seo,accessibility,best-practices --form-factor=mobile --view
```

**Target:** SEO 95+, Performance 95+  
**Note:** Hero video affects Performance; consider poster-only on mobile if score is short of target.

---

## What still requires human action

1. **Google Search Console** — submit sitemap, request indexing for new URLs
2. **Google Business Profile** — see `GBP-PLAYBOOK-DURHAM-CLEANERS.md`
3. **GA4** — create property, add `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Vercel
4. **FormSubmit** — confirm activation email if not done
5. **Verify aggregate rating** — schema uses 3 on-site reviews at 5★; update if Google count differs
6. **Photos** — add 30+ GBP photos (team, van, before/after with permission)
7. **Citations** — Apple Maps, Bing, Yelp, HomeStars, etc. (exact NAP)
8. **Review QR** — print `durhamcleaners.ca/review` on invoices

---

## Anti-patterns avoided

- No duplicate city page copy (each city has unique neighbourhoods/sections)
- No fake review counts in schema beyond verified on-site testimonials
- No guaranteed #1 ranking claims on site
