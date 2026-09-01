import Link from "next/link";
import { siteConfig } from "@/lib/site";

const items = [
  { label: `Since ${siteConfig.about.since}`, href: "/about" },
  { label: "5★ Google", href: siteConfig.social.google },
  { label: "Eco-friendly", href: "/blog/eco-friendly-cleaning-products-durham-cleaners" },
  { label: "Insured & trained", href: "/about" },
];

export function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="container-site">
        <ul>
          {items.map((item) => (
            <li key={item.label}>
              {item.href.startsWith("http") ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              ) : (
                <Link href={item.href}>{item.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
