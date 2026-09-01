import type { FaqItem } from "@/lib/local-seo/types";

export function PageFAQ({ faqs, title = "Frequently asked questions" }: { faqs: FaqItem[]; title?: string }) {
  return (
    <section className="section section-light" aria-labelledby="page-faq-heading">
      <div className="container-site max-w-3xl">
        <h2 id="page-faq-heading" className="section-title text-center">
          {title}
        </h2>
        <div className="faq-list mt-8">
          {faqs.map((faq) => (
            <details key={faq.q} className="faq-item">
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
