import Link from "next/link";
import { VisibleBreadcrumbs } from "@/components/VisibleBreadcrumbs";

interface PageHeroProps {
  title: React.ReactNode;
  subtitle?: string;
  breadcrumbs?: { name: string; path: string }[];
}

export function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <div className="page-header">
      <div className="container-site">
        {breadcrumbs && breadcrumbs.length > 0 && <VisibleBreadcrumbs items={breadcrumbs} />}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
}
