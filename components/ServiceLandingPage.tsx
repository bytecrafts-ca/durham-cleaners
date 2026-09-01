import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { InternalLinksGrid } from "@/components/InternalLinksGrid";
import { PageFAQ } from "@/components/PageFAQ";
import { PageHero } from "@/components/PageHero";
import { RequestServiceSection } from "@/components/RequestServiceSection";
import type { ServicePageData } from "@/lib/local-seo/types";
import { buildPageJsonLd, faqPageJsonLdFromItems, serviceSchemaJsonLd } from "@/lib/seo";

export function ServiceLandingPage({ data }: { data: ServicePageData }) {
  const path = `/${data.slug}`;
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: data.title, path },
  ];

  return (
    <>
      <JsonLd
        data={buildPageJsonLd({
          path,
          title: data.metaTitle,
          description: data.metaDescription,
          breadcrumbs,
          extra: [serviceSchemaJsonLd(data), faqPageJsonLdFromItems(data.faqs)],
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
          {data.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </section>
          ))}

          <h2>What&apos;s included</h2>
          <ul className="checklist">
            {data.included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="expectations-grid">
            <div>
              <h3>Before we arrive</h3>
              <ul>
                {data.expectations.before.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>After your clean</h3>
              <ul>
                {data.expectations.after.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <p className="response-note">
            Request a quote below. We aim to contact you within <strong>4 hours</strong>.
          </p>
          <Link href="/contact" className="btn btn-primary shimmer-btn inline-flex">
            Get a free quote
          </Link>
        </div>
      </article>

      <PageFAQ faqs={data.faqs} />
      <InternalLinksGrid
        title="Explore related cleaning services"
        services={data.relatedServices}
        cities={data.relatedCities}
      />
      <RequestServiceSection id="service-quote" />
    </>
  );
}
