import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/seo";
import { blogPosts } from "@/lib/local-seo/blog-posts";

export const metadata = createPageMetadata({
  title: "Cleaning Tips & Guides — Durham Region Blog",
  description:
    "House cleaning costs, move-out checklists, eco-friendly tips, and local guides for Pickering, Ajax, Whitby, Oshawa, and Durham Region.",
  path: "/blog",
  keywords: ["cleaning tips Durham", "house cleaning blog Pickering"],
});

export default function BlogIndexPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
        title={
          <>
            Cleaning <span className="accent">guides</span>
          </>
        }
        subtitle="Local advice for homeowners, renters, and businesses in Durham Region."
      />
      <section className="section section-white">
        <div className="container-site">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.slug} className="blog-card">
                <p className="blog-meta">
                  {post.publishedAt} · {post.readTime}
                </p>
                <h2>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p>{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="blog-read-more">
                  Read article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
