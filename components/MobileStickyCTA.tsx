"use client";

import Link from "next/link";
import { Phone, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function MobileStickyCTA() {
  return (
    <div className="mobile-sticky-cta" aria-label="Quick actions">
      <a href={`tel:${siteConfig.contact.phoneTel}`} className="btn btn-outline gap-2">
        <Phone className="h-4 w-4" aria-hidden />
        Call
      </a>
      <Link href="/#request" className="btn btn-primary gap-2">
        <Sparkles className="h-4 w-4" aria-hidden />
        Get Quote
      </Link>
    </div>
  );
}
