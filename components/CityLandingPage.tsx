import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { InternalLinksGrid } from "@/components/InternalLinksGrid";
import { PageFAQ } from "@/components/PageFAQ";
import { PageHero } from "@/components/PageHero";
import { RequestServiceSection } from "@/components/RequestServiceSection";
import type { CityPageData } from "@/lib/local-seo/types";
import { buildPageJsonLd, faqPageJsonLdFromItems } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export function CityLandingPage({ data }: { data: CityPageData }) {
  const path = `/${data.slug}`;
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: data.city, path },
  ];

  return (
    <>
      <JsonLd
        data={buildPageJsonLd({
          path,
          title: data.metaTitle,
          description: data.metaDescription,
          breadcrumbs,
          extra: [faqPageJsonLdFromItems(data.faqs)],
        })}
      />
      <PageHero
        breadcrumbs={breadcrumbs}
        title={
          <>
            {data.heroTitle} <span className="accent">{data.heroAccent}</span>
          </>
        }
        subtitle={data.heroSubtitle}
      />

      <article className="section section-white">
        <div className="container-site prose-local max-w-3xl">
          <p className="lead">{data.intro}</p>

          <h2>Neighbourhoods we serve in {data.city}</h2>
          <ul className="tag-list">
            {data.neighbourhoods.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>

          {data.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </section>
          ))}

          <div className="service-area-map card-panel">
            <h3>Service area</h3>
            <p>
              {data.city} and all of Durham Region. Based in Courtice since {siteConfig.about.since}.
              Call{" "}
              <a href={`tel:${siteConfig.contact.phoneTel}`} className="font-semibold text-brand-dark">
                {siteConfig.contact.phone}
              </a>{" "}
              or request a quote below. Response within 4 hours.
            </p>
          </div>

          <Link href="/contact" className="btn btn-primary shimmer-btn inline-flex">
            Get a {data.city} quote
          </Link>
        </div>
      </article>

      <section className="section section-light">
        <div className="container-site">
          <h2 className="section-title text-center">What {data.city} clients say</h2>
          <p className="mx-auto max-w-2xl text-center text-[var(--gray-500)]">
            Read verified Google reviews and testimonials from homeowners and REALTORS across Durham Region.
          </p>
          <div className="mt-6 text-center">
            <Link href="/reviews" className="btn btn-outline inline-flex">
              Read reviews
            </Link>
          </div>
        </div>
      </section>

      <PageFAQ faqs={data.faqs} title={`${data.city} cleaning FAQ`} />
      <InternalLinksGrid
        title={`Cleaning services in ${data.city}`}
        services={data.relatedServices}
        cities={data.relatedCities}
      />
      <RequestServiceSection id="city-quote" />
    </>
  );
}
