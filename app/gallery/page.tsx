import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { buildPageJsonLd, createPageMetadata, imageGalleryJsonLd } from "@/lib/seo";
import { galleryImages, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Gallery — Our Cleaning Work",
  description:
    "See before-and-after results from Durham Cleaners — residential, commercial, deep, and post-renovation cleaning across Durham Region.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={buildPageJsonLd({
          path: "/gallery",
          title: "Gallery — Our Cleaning Work",
          description:
            "Before-and-after cleaning results from Durham Cleaners across Durham Region and GTA.",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Gallery", path: "/gallery" },
          ],
          extra: [imageGalleryJsonLd()],
        })}
      />
      <PageHero
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ]}
        title={
          <>
            Our <span className="accent">work</span>
          </>
        }
        subtitle="A showcase of residential, commercial, and industrial cleaning across Durham Region and GTA."
      />

      <section className="section section-white">
        <div className="container-site">
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <figure
                key={image.src}
                className={`gallery-item ${index === 0 ? "gallery-item-featured" : ""}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes={
                    index === 0
                      ? "(max-width: 900px) 100vw, 50vw"
                      : "(max-width: 900px) 50vw, 25vw"
                  }
                />
              </figure>
            ))}
          </div>
          <p className="reviews-footer mt-10">
            Follow{" "}
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-dark hover:text-brand"
            >
              {siteConfig.instagramHandle}
            </a>{" "}
            for more photos.
          </p>
          <div className="mt-6 text-center">
            <Link href="/#request" className="btn btn-primary shimmer-btn">
              Request Service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
