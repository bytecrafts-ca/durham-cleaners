import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { buildPageJsonLd, createPageMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "FAQ — Cleaning Service Questions",
  description:
    "Common questions about booking, areas served, eco-friendly products, discounts, and commercial cleaning with Durham Cleaners.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={buildPageJsonLd({
          path: "/faq",
          title: "FAQ — Cleaning Service Questions",
          description:
            "Common questions about booking, areas served, eco-friendly products, discounts, and commercial cleaning with Durham Cleaners.",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ],
          extra: [faqJsonLd()],
        })}
      />
      <PageHero
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}
        title={
          <>
            Frequently asked <span className="accent">questions</span>
          </>
        }
        subtitle="Booking, service areas, products, and pricing."
      />

      <section className="section section-white">
        <FAQAccordion />
        <div className="mt-10 text-center">
          <Link href="/#request" className="btn btn-primary shimmer-btn">
            Request Service
          </Link>
        </div>
      </section>
    </>
  );
}
