import Link from "next/link";

type LinkItem = { label: string; href: string };

export function InternalLinksGrid({
  title,
  services,
  cities,
}: {
  title: string;
  services?: LinkItem[];
  cities?: LinkItem[];
}) {
  return (
    <section className="section section-white">
      <div className="container-site">
        <h2 className="section-title text-center">{title}</h2>
        <div className="internal-links-grid">
          {services && services.length > 0 && (
            <div>
              <h3>Related services</h3>
              <ul>
                {services.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {cities && cities.length > 0 && (
            <div>
              <h3>Service areas</h3>
              <ul>
                {cities.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
