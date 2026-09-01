import { notFound } from "next/navigation";
import { CityLandingPage } from "@/components/CityLandingPage";
import { ServiceLandingPage } from "@/components/ServiceLandingPage";
import { getCityPage, getAllCitySlugs } from "@/lib/local-seo/city-pages";
import { getServicePage, getAllServiceSlugs } from "@/lib/local-seo/service-pages";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return [...getAllServiceSlugs(), ...getAllCitySlugs()].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (service) {
    return createPageMetadata({
      title: service.metaTitle,
      description: service.metaDescription,
      path: `/${slug}`,
      keywords: [...service.keywords],
    });
  }
  const city = getCityPage(slug);
  if (city) {
    return createPageMetadata({
      title: city.metaTitle,
      description: city.metaDescription,
      path: `/${slug}`,
      keywords: [...city.keywords],
    });
  }
  return {};
}

export default async function LandingSlugPage({ params }: Props) {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (service) return <ServiceLandingPage data={service} />;
  const city = getCityPage(slug);
  if (city) return <CityLandingPage data={city} />;
  notFound();
}
