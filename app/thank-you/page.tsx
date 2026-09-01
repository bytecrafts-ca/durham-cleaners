import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/seo";
import { servicePages } from "@/lib/local-seo/service-pages";
import { cityPages } from "@/lib/local-seo/city-pages";

export const metadata = createPageMetadata({
  title: "Thank You — Request Received",
  description: "Your cleaning quote request was received. Durham Cleaners will contact you within 4 hours.",
  path: "/thank-you",
});

export default function ThankYouPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Thank you — we&apos;ll be in <span className="accent">touch</span>
          </>
        }
        subtitle="We received your request and aim to contact you within 4 hours with a quote."
      />
      <section className="section section-white">
        <div className="container-site max-w-2xl text-center">
          <p className="text-[var(--gray-500)]">
            Need it sooner? Call{" "}
            <a href="tel:+14163055187" className="font-semibold text-brand-dark">
              (416) 305-5187
            </a>{" "}
            or email{" "}
            <a href="mailto:info@durhamcleaner.com" className="font-semibold text-brand-dark">
              info@durhamcleaner.com
            </a>
            .
          </p>
          <h2 className="mt-10 text-xl font-bold">Explore our services</h2>
          <ul className="mt-4 space-y-2 text-left">
            {servicePages.slice(0, 4).map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="text-brand-dark hover:text-brand">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="mt-8 text-xl font-bold">Popular service areas</h2>
          <ul className="mt-4 space-y-2 text-left">
            {cityPages.slice(0, 4).map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}`} className="text-brand-dark hover:text-brand">
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
