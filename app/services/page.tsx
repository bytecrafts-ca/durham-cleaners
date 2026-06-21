import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { buildPageJsonLd, createPageMetadata, servicesItemListJsonLd } from "@/lib/seo";
import { services, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Cleaning Services — Residential, Commercial & Industrial",
  description:
    "One-time, ongoing, deep, move-in/out, post-renovation, Airbnb, and commercial cleaning across Durham Region. 15% off first-time customers.",
  path: "/services",
  keywords: ["cleaning services Durham", "house cleaning Courtice", "commercial cleaning Oshawa"],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={buildPageJsonLd({
          path: "/services",
          title: "Cleaning Services — Residential, Commercial & Industrial",
          description:
            "One-time, ongoing, deep, move-in/out, post-renovation, Airbnb, and commercial cleaning across Durham Region and GTA.",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ],
          extra: [servicesItemListJsonLd()],
        })}
      />
      <PageHero
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
        title={
          <>
            Our cleaning <span className="accent">services</span>
          </>
        }
        subtitle="Residential, commercial, and specialty cleaning tailored to your space."
      />

      <section className="section section-white">
        <div className="container-site">
          <SectionHeader
            tag="Services"
            title={
              <>
                Everything we <span className="accent">clean</span>
              </>
            }
            subtitle={`${siteConfig.discounts.firstTime}. ${siteConfig.discounts.biWeekly}.`}
          />
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.id} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/#request" className="btn btn-primary shimmer-btn">
              Request Service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
