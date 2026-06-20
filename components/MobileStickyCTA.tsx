import Link from "next/link";
import { Sparkles } from "lucide-react";

export function MobileStickyCTA() {
  return (
    <div className="mobile-sticky-cta" aria-label="Quick request">
      <Link href="/#request" className="btn btn-primary gap-2">
        <Sparkles className="h-4 w-4" aria-hidden />
        Request Service
      </Link>
    </div>
  );
}
