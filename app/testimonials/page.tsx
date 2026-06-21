import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ReviewsSection } from "@/components/ReviewsSection";
import { buildPageJsonLd, createPageMetadata, reviewsPageJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Testimonials — Client Reviews",
  description:
    "Read what homeowners, REALTORS®, and landlords across Durham Region and GTA say about Durham Cleaners.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd
        data={buildPageJsonLd({
          path: "/testimonials",
          title: "Testimonials — Client Reviews",
          description:
            "Real feedback from homeowners, REALTORS®, and landlords across Durham Region and GTA.",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Testimonials", path: "/testimonials" },
          ],
          extra: [reviewsPageJsonLd()],
        })}
      />
      <PageHero
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Testimonials", path: "/testimonials" },
        ]}
        title={
          <>
            What clients <span className="accent">say</span>
          </>
        }
        subtitle="Real feedback from homeowners, REALTORS®, and landlords across Durham Region and GTA."
      />

      <ReviewsSection />
    </>
  );
}
