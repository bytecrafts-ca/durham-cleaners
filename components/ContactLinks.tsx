import { siteConfig } from "@/lib/site";

export function ContactLinks() {
  const { contact, social } = siteConfig;

  return (
    <div className="space-y-6 text-center">
      <p className="text-lg text-[var(--gray-500)]">
        <a href={`tel:${contact.phoneTel}`} className="location-phone">
          {contact.phone}
        </a>
      </p>
      <p>
        <a href={`mailto:${contact.email}`} className="font-semibold text-brand-dark hover:text-brand">
          {contact.email}
        </a>
      </p>
      <p className="text-[var(--gray-500)]">{contact.address}</p>
      <p className="text-sm text-[var(--gray-500)]">{siteConfig.seo.openingHoursLabel}</p>
      <div className="flex flex-wrap justify-center gap-3 pt-2">
        <a
          href={social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          Instagram
        </a>
        <a
          href={social.google}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          Google Reviews
        </a>
      </div>
    </div>
  );
}
