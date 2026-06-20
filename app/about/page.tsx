import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { siteConfig, whyChooseUs } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "About — Trusted Local Cleaners Since 1995",
  description:
    "Durham Cleaners has served Courtice and Durham Region since 1995 with eco-friendly products, trained teams, and a 5-star Google reputation.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        title={
          <>
            About <span className="accent">Durham Cleaners</span>
          </>
        }
        subtitle={`Serving Durham Region since ${siteConfig.about.since}.`}
      />

      <section className="section section-white">
        <div className="safety-grid container-site">
          <div>
            <p className="text-lg leading-relaxed text-[var(--gray-500)]">{siteConfig.about.body}</p>
            <div className="safety-features mt-8">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="safety-feat">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#request" className="btn btn-primary shimmer-btn">
                Request Service
              </Link>
              <a
                href={siteConfig.social.google}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Google reviews
              </a>
            </div>
          </div>
          <div className="safety-img-wrap">
            <Image
              src={siteConfig.heroImage}
              alt="Durham Cleaners team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    </>
  );
}
