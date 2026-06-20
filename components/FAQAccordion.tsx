"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/site";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-2xl">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <article key={faq.q} className="faq-item">
            <button
              type="button"
              className="faq-trigger"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{faq.q}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            <div className={`faq-answer ${isOpen ? "" : "faq-answer-collapsed"}`}>
              <p>{faq.a}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
