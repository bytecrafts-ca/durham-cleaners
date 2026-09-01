import { redirect } from "next/navigation";
import { googleReviewUrl } from "@/lib/local-seo/resources";

export function GET() {
  redirect(googleReviewUrl);
}
