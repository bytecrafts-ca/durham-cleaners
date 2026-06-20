import { ContactLinks } from "@/components/ContactLinks";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RequestServiceSection } from "@/components/RequestServiceSection";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contact & Request Service",
  description: `Contact Durham Cleaners. Call ${siteConfig.contact.phone}, email ${siteConfig.contact.email}, or submit a service request online.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        title={
          <>
            Contact <span className="accent">&amp; request</span>
          </>
        }
        subtitle="Call, email, or fill out the form — we will get in contact with you within 4 hours."
      />

      <RequestServiceSection id="contact-form" />

      <section className="section section-white">
        <div className="container-site max-w-2xl">
          <ContactLinks />
        </div>
      </section>
    </>
  );
}
