import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ReviewsSection } from "@/components/ReviewsSection";
import { googleReviewUrl } from "@/lib/local-seo/resources";
import { buildPageJsonLd, createPageMetadata, reviewsPageJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Google Reviews — Durham Cleaners",
  description:
    "Read Durham Cleaners Google reviews and client testimonials from Pickering, Ajax, Whitby, Oshawa, and Durham Region. Leave a review.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        data={buildPageJsonLd({
          path: "/reviews",
          title: "Durham Cleaners Reviews",
          description: "Client reviews and Google ratings for Durham Cleaners.",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Reviews", path: "/reviews" },
          ],
          extra: [reviewsPageJsonLd()],
        })}
      />
      <PageHero
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews" },
        ]}
        title={
          <>
            Google <span className="accent">reviews</span>
          </>
        }
        subtitle="Real feedback from homeowners, REALTORS, and landlords across Durham Region and GTA."
      />
      <section className="section section-white">
        <div className="container-site text-center">
          <p className="mx-auto max-w-2xl text-[var(--gray-500)]">
            Durham Cleaners maintains a 5-star Google rating built on verified client experiences. If we
            recently cleaned your home or business, we would appreciate your review.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary shimmer-btn"
            >
              Leave a Google review
            </a>
            <Link href="/contact" className="btn btn-outline">
              Request service
            </Link>
          </div>
          <p className="mt-4 text-sm text-[var(--gray-400)]">
            Invoice QR codes can link to{" "}
            <Link href="/review" className="font-semibold text-brand-dark">
              durhamcleaners.ca/review
            </Link>
          </p>
        </div>
      </section>
      <ReviewsSection showHeader={false} />
    </>
  );
}
