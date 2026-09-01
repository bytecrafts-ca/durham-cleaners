import Link from "next/link";
import { servicePages } from "@/lib/local-seo/service-pages";
import { cityPages } from "@/lib/local-seo/city-pages";

export default function NotFound() {
  return (
    <section className="section section-white">
      <div className="container-site max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-navy">Page not found</h1>
        <p className="mt-4 text-[var(--gray-500)]">
          That page does not exist. Browse our cleaning services or request a quote.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-primary shimmer-btn">
            Home
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Contact
          </Link>
        </div>
        <h2 className="mt-10 text-lg font-bold">Popular services</h2>
        <ul className="mt-4 space-y-2">
          {servicePages.slice(0, 4).map((s) => (
            <li key={s.slug}>
              <Link href={`/${s.slug}`}>{s.title}</Link>
            </li>
          ))}
        </ul>
        <h2 className="mt-8 text-lg font-bold">Service areas</h2>
        <ul className="mt-4 space-y-2">
          {cityPages.slice(0, 4).map((c) => (
            <li key={c.slug}>
              <Link href={`/${c.slug}`}>{c.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
