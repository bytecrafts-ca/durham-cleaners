import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} — professional cleaning in Durham Region and GTA`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a1628 0%, #1e3a5f 50%, #2563eb 100%)",
          padding: 64,
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#93c5fd",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Durham Region &amp; GTA
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            maxWidth: 900,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#cbd5e1",
            marginTop: 24,
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Residential · Commercial · Industrial Cleaning
        </div>
        <div
          style={{
            display: "flex",
            gap: 24,
            marginTop: 48,
            fontSize: 24,
            color: "#ffffff",
          }}
        >
          <span>{siteConfig.contact.phone}</span>
          <span style={{ color: "#64748b" }}>|</span>
          <span>Since {siteConfig.about.since}</span>
          <span style={{ color: "#64748b" }}>|</span>
          <span>5★ Google</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
