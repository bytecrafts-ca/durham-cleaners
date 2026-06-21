import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  Factory,
  Home,
  MapPin,
  Sparkles,
} from "lucide-react";
import { HomeAboutTeaser } from "@/components/HomeAboutTeaser";
import { JsonLd } from "@/components/JsonLd";
import { ProcessSteps } from "@/components/ProcessSteps";
import { RequestServiceSection } from "@/components/RequestServiceSection";
import { SectionHeader } from "@/components/SectionHeader";
import { ServicesBanner } from "@/components/ServicesBanner";
import { homePageJsonLd } from "@/lib/seo";
import { features, siteConfig, whyChooseUs } from "@/lib/site";

export { rootMetadata as metadata } from "@/lib/seo";

const featureIcons = {
  home: Home,
  building: Building2,
  factory: Factory,
  map: MapPin,
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={homePageJsonLd()} />
      <header className="hero">
        <div className="hero-bg">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={siteConfig.heroImage}
            aria-label="Durham Cleaners — professional cleaning in Durham Region"
          >
            <source src={siteConfig.heroVideo} type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay" />
        <div className="hero-inner container-site">
          <div className="hero-text">
            <p className="hero-eyebrow">{siteConfig.tagline}</p>
            <h1>
              Residential &amp; commercial <span className="accent">cleaning</span>
            </h1>
            <p className="hero-sub">{siteConfig.heroSubtitle}</p>
            <a
              href={siteConfig.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="google-badge mb-4"
              aria-label={`${siteConfig.seo.averageRating} out of 5 stars on Google — read reviews`}
            >
              <span className="google-badge-stars" aria-hidden>
                {"★".repeat(siteConfig.seo.averageRating)}
              </span>
              <span className="google-badge-text">
                {siteConfig.seo.averageRating}.0 on Google
              </span>
            </a>
            <div className="hero-actions">
              <a href="#request" className="btn btn-primary shimmer-btn">
                Request Service
              </a>
              <a href={`tel:${siteConfig.contact.phoneTel}`} className="btn btn-ghost">
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>
        </div>
        <a
          href="#request"
          className="hero-scroll-indicator"
          aria-label="Scroll to request form"
        >
          <span className="scroll-line" />
        </a>
      </header>

      <div id="below-hero" className="scroll-hint">
        <ChevronDown className="h-4 w-4" aria-hidden />
        Scroll to request
        <ChevronDown className="h-4 w-4" aria-hidden />
      </div>

      <ServicesBanner />

      <RequestServiceSection />

      <ProcessSteps />

      <HomeAboutTeaser />

      <section className="section section-white why-section">
        <div className="container-site">
          <SectionHeader
            tag="Durham Cleaners"
            title={
              <>
                What we <span className="accent">offer</span>
              </>
            }
          />
          <div className="features-grid md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => {
              const Icon = featureIcons[f.icon as keyof typeof featureIcons] ?? Sparkles;
              return (
                <article key={f.title} className="feature-card">
                  <div className="feature-icon">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.description}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Link href="/services" className="btn btn-outline inline-flex">
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="safety-grid container-site">
          <div>
            <SectionHeader
              tag="Why choose us"
              title={
                <>
                  Trusted since <span className="accent">{siteConfig.about.since}</span>
                </>
              }
              subtitle="Local focus · eco-friendly products · 5★ Google rating · always on time"
            />
            <div className="safety-features">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="safety-feat">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={siteConfig.social.google}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline inline-flex"
              >
                Google reviews
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/faq" className="btn btn-outline inline-flex">
                FAQ
              </Link>
            </div>
          </div>
          <div className="safety-img-wrap">
            <Image
              src={siteConfig.aboutImage}
              alt="Durham Cleaners professional cleaning"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container-site text-center">
          <p className="location-detail">{siteConfig.serviceAreaLabel}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/gallery" className="btn btn-outline inline-flex">
              View gallery
            </Link>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline inline-flex"
            >
              {siteConfig.instagramHandle}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
