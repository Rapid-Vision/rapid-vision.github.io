import type { NextConfig } from "next";
import nextra from "nextra";

const withNextra = nextra({
  // Nextra config
  contentDirBasePath: "/docs",
});

const nextConfig: NextConfig = withNextra({
  /* Next config */
  output: "export",
  images: { unoptimized: true },
});

export default nextConfig;
