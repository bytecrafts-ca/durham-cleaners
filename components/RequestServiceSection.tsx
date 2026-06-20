"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { services as serviceOptions, siteConfig } from "@/lib/site";

interface RequestServiceFormProps {
  compact?: boolean;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export function RequestServiceForm({ compact = false }: RequestServiceFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const { contact } = siteConfig;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const data = new FormData(form);
    const service = data.get("service") as string;

    data.append("_subject", `Cleaning Request — ${service}`);
    data.append("_replyto", data.get("email") as string);
    data.append("_template", "table");
    data.append("_captcha", "false");

    try {
      const response = await fetch(contact.formSubmitUrl, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.message ?? "Submission failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <p>Request sent — we&apos;ll get in contact with you within 4 hours.</p>
        <p className="mt-2 text-sm text-[var(--gray-500)]">
          Need it sooner? Call{" "}
          <a href={`tel:${contact.phoneTel}`} className="font-semibold text-brand-dark">
            {contact.phone}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form className="request-form-wrap" onSubmit={handleSubmit} noValidate={false}>
      <input type="text" name="_honey" className="sr-only" tabIndex={-1} autoComplete="off" />

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="firstName">First name</label>
          <input id="firstName" name="firstName" type="text" required autoComplete="given-name" />
        </div>
        <div className="form-field">
          <label htmlFor="lastName">Last name</label>
          <input id="lastName" name="lastName" type="text" required autoComplete="family-name" />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" />
        </div>
        <div className="form-field form-field-full">
          <label htmlFor="address">Address</label>
          <input id="address" name="address" type="text" required autoComplete="street-address" />
        </div>
        <div className="form-field form-field-full">
          <label htmlFor="service">Desired service</label>
          <select id="service" name="service" required defaultValue="">
            <option value="" disabled>
              Choose an option
            </option>
            {serviceOptions.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="preferredDay">Preferred day</label>
          <input id="preferredDay" name="preferredDay" type="date" />
        </div>
        <div className="form-field">
          <label htmlFor="preferredTime">Preferred time</label>
          <select id="preferredTime" name="preferredTime" defaultValue="">
            <option value="">Choose a time</option>
            {siteConfig.timePreferenceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        {!compact && (
          <div className="form-field form-field-full">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Any allergies, access instructions, or special requests."
            />
          </div>
        )}

        {status === "error" && (
          <div className="form-field form-field-full">
            <p className="form-error" role="alert">
              Couldn&apos;t send your request. Please call{" "}
              <a href={`tel:${contact.phoneTel}`} className="font-semibold text-brand-dark">
                {contact.phone}
              </a>{" "}
              or email{" "}
              <a href={`mailto:${contact.email}`} className="font-semibold text-brand-dark">
                {contact.email}
              </a>
              .
            </p>
          </div>
        )}

        <div className="form-field form-field-full">
          <button
            type="submit"
            className="btn btn-primary shimmer-btn w-full"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending…" : "Send Request"}
          </button>
        </div>
      </div>
    </form>
  );
}

interface RequestServiceSectionProps {
  id?: string;
}

export function RequestServiceSection({ id = "request" }: RequestServiceSectionProps) {
  const { contact } = siteConfig;

  return (
    <section className="section section-gray" id={id}>
      <div className="container-site">
        <SectionHeader
          tag="Request service"
          title={
            <>
              Tell us what you <span className="accent">need</span>
            </>
          }
          subtitle={siteConfig.requestNote}
        />

        <RequestServiceForm />

        <div className="booking-contact-lines">
          <p>
            Call us at{" "}
            <a href={`tel:${contact.phoneTel}`} className="font-semibold text-brand-dark hover:text-brand">
              {contact.phone}
            </a>
          </p>
          <p>
            Email us at{" "}
            <a href={`mailto:${contact.email}`} className="font-semibold text-brand-dark hover:text-brand">
              {contact.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
