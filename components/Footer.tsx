import Link from "next/link";
import { Instagram, MapPin } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

export function Footer() {
  const { contact, social, instagramHandle } = siteConfig;

  return (
    <footer className="footer">
      <section className="cta-section">
        <div className="container-site relative">
          <h2>Ready for a spotless space?</h2>
          <p>Request service, call, or email — we will get in contact with you within 4 hours.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#request" className="btn btn-primary shimmer-btn">
              Request Service
            </Link>
            <a href={`tel:${contact.phoneTel}`} className="btn btn-outline">
              {contact.phone}
            </a>
          </div>
        </div>
      </section>

      <div className="footer-grid px-8">
        <div className="footer-brand">
          <Link href="/" className="logo-text">
            DURHAM <span>CLEANERS</span>
          </Link>
          <p>{siteConfig.description}</p>
          <div className="footer-social">
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={social.google}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google reviews"
            >
              <GoogleIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Pages</h4>
          <ul>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-links">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={`tel:${contact.phoneTel}`}>{contact.phone}</a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>{contact.address}</li>
            <li>{siteConfig.seo.openingHoursLabel}</li>
            <li>
              <Link href="/#request">Request form</Link>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Follow &amp; review</h4>
          <ul className="footer-follow-list">
            <li>
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-follow-link"
              >
                <Instagram className="h-4 w-4 shrink-0" aria-hidden />
                {instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={social.google}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-follow-link"
              >
                <GoogleIcon className="h-4 w-4 shrink-0" aria-hidden />
                Google reviews
              </a>
            </li>
            <li>
              <a
                href={social.google}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-follow-link"
              >
                <MapPin className="h-4 w-4 shrink-0" aria-hidden />
                Find us on Maps
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom px-8">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p className="footer-bottom-contact">
          <a href={`tel:${contact.phoneTel}`} className="text-[var(--gray-400)] hover:text-brand">
            {contact.phone}
          </a>
          <span aria-hidden> · </span>
          <a href={`mailto:${contact.email}`} className="text-[var(--gray-400)] hover:text-brand">
            {contact.email}
          </a>
        </p>
      </div>
    </footer>
  );
}
