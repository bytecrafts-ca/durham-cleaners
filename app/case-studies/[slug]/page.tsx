import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { getCaseStudy, getAllCaseStudySlugs } from "@/lib/local-seo/case-studies";
import { articleJsonLd, buildPageJsonLd, createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return createPageMetadata({
    title: study.title,
    description: study.metaDescription,
    path: `/case-studies/${slug}`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const path = `/case-studies/${slug}`;
  return (
    <>
      <JsonLd
        data={buildPageJsonLd({
          path,
          title: study.title,
          description: study.metaDescription,
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Case studies", path: "/resources" },
            { name: study.title, path },
          ],
          extra: [articleJsonLd({ path, title: study.title, description: study.metaDescription })],
        })}
      />
      <PageHero
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Case studies", path: "/resources" },
          { name: study.title, path },
        ]}
        title={study.title}
        subtitle={`${study.location} · ${study.service}`}
      />
      <article className="section section-white">
        <div className="container-site prose-local max-w-3xl">
          <h2>Challenge</h2>
          <p>{study.challenge}</p>
          <h2>Solution</h2>
          <p>{study.solution}</p>
          <h2>Result</h2>
          <p>{study.result}</p>
          {study.quote && <blockquote>&ldquo;{study.quote}&rdquo;</blockquote>}
          <Link href="/contact" className="btn btn-primary shimmer-btn inline-flex">
            Request similar service
          </Link>
        </div>
      </article>
    </>
  );
}
