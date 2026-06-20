import { SectionHeader } from "@/components/SectionHeader";
import { reviews, siteConfig } from "@/lib/site";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="review-stars" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(rating)}
      <span className="sr-only">{rating} out of 5</span>
    </div>
  );
}

export function ReviewsSection({ showHeader = false }: { showHeader?: boolean }) {
  return (
    <section className="section section-light" id="reviews">
      <div className="container-site">
        {showHeader && (
          <SectionHeader
            tag="Reviews"
            title={
              <>
                What clients <span className="accent">say</span>
              </>
            }
            subtitle="Real feedback from homeowners, REALTORS®, and landlords across Durham Region and GTA."
          />
        )}

        <div className="reviews-grid">
          {reviews.map((review) => (
            <article key={review.author} className="review-card">
              <StarRating rating={review.rating} />
              <p className="review-text">&ldquo;{review.text}&rdquo;</p>
              <p className="review-author">
                {review.author}
                {"role" in review && review.role ? (
                  <span className="block text-xs font-normal text-[var(--gray-400)]">
                    {review.role}
                  </span>
                ) : null}
              </p>
            </article>
          ))}
        </div>

        <p className="reviews-footer">
          {siteConfig.seo.averageRating}-star rating on{" "}
          <a
            href={siteConfig.social.google}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-dark hover:text-brand"
          >
            Google
          </a>
          {" · "}
          More photos on{" "}
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-dark hover:text-brand"
          >
            {siteConfig.instagramHandle}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
