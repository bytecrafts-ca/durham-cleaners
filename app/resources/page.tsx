import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/seo";
import { externalGuides } from "@/lib/local-seo/resources";
import { caseStudies } from "@/lib/local-seo/case-studies";
import { blogPosts } from "@/lib/local-seo/blog-posts";

export const metadata = createPageMetadata({
  title: "Cleaning Resources & Guides",
  description:
    "Durham Region cleaning guides, blog articles, case studies, and external resources from Durham Cleaners.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
        ]}
        title={
          <>
            Cleaning <span className="accent">resources</span>
          </>
        }
        subtitle="Guides, blog posts, and case studies for Durham Region homeowners and businesses."
      />
      <section className="section section-white">
        <div className="container-site max-w-3xl">
          <h2>External guides</h2>
          <ul className="resource-list">
            {externalGuides.map((guide) => (
              <li key={guide.href}>
                <a href={guide.href} target="_blank" rel="noopener noreferrer">
                  {guide.label}
                </a>
                <p>{guide.description}</p>
              </li>
            ))}
          </ul>
          <h2 className="mt-10">Blog</h2>
          <ul className="resource-list">
            {blogPosts.slice(0, 5).map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
          <Link href="/blog" className="btn btn-outline mt-4 inline-flex">
            View all blog posts
          </Link>
          <h2 className="mt-10">Case studies</h2>
          <ul className="resource-list">
            {caseStudies.map((study) => (
              <li key={study.slug}>
                <Link href={`/case-studies/${study.slug}`}>{study.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
