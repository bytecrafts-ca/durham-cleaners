import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ReviewsSection } from "@/components/ReviewsSection";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Testimonials — Client Reviews",
  description:
    "Read what homeowners, REALTORS®, and landlords across Durham Region say about Durham Cleaners.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Testimonials", path: "/testimonials" },
        ])}
      />
      <PageHero
        title={
          <>
            What clients <span className="accent">say</span>
          </>
        }
        subtitle="Real feedback from homeowners, REALTORS®, and landlords across Durham Region."
      />

      <ReviewsSection />
    </>
  );
}
