import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { PageFAQ } from "@/components/PageFAQ";
import { PageHero } from "@/components/PageHero";
import { blogPosts, getAllBlogSlugs, getBlogPost } from "@/lib/local-seo/blog-posts";
import { blogPostJsonLd, buildPageJsonLd, createPageMetadata, faqPageJsonLdFromItems } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return createPageMetadata({
    title: post.title,
    description: post.metaDescription,
    path: `/blog/${slug}`,
    keywords: [...post.keywords],
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const path = `/blog/${slug}`;
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path },
  ];

  return (
    <>
      <JsonLd
        data={buildPageJsonLd({
          path,
          title: post.title,
          description: post.metaDescription,
          breadcrumbs,
          extra: [blogPostJsonLd(post), faqPageJsonLdFromItems(post.faqs)],
        })}
      />
      <PageHero breadcrumbs={breadcrumbs} title={post.title} subtitle={`${post.publishedAt} · ${post.readTime}`} />
      <article className="section section-white">
        <div className="container-site prose-local max-w-3xl">
          <p className="lead">{post.excerpt}</p>
          {post.sections.map((section) => (
            <section key={section.heading ?? section.paragraphs[0]?.slice(0, 30)}>
              {section.heading && <h2>{section.heading}</h2>}
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 50)}>{p}</p>
              ))}
            </section>
          ))}
          {post.relatedLinks.length > 0 && (
            <>
              <h2>Related pages</h2>
              <ul>
                {post.relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </article>
      <PageFAQ faqs={post.faqs} />
    </>
  );
}
