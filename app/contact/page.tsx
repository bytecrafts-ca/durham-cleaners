import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RequestServiceSection } from "@/components/RequestServiceSection";
import { breadcrumbJsonLd, contactPageJsonLd, createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contact Us Today — Request a Quote",
  description: `Contact Durham Cleaners for a cleaning quote. Call ${siteConfig.contact.phone}, email ${siteConfig.contact.email}, or submit the online request form.`,
  path: "/contact",
  keywords: ["contact Durham Cleaners", "cleaning quote Courtice", "request cleaning service"],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          contactPageJsonLd(),
        ]}
      />
      <PageHero
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
        title={
          <>
            Contact Us <span className="accent">Today</span>
          </>
        }
        subtitle="Call, email, or fill out the form below to receive a quote."
      />

      <RequestServiceSection id="contact-form" />
    </>
  );
}
