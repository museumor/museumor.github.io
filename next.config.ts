import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Emit about/index.html etc. so GitHub Pages serves both /about and /about/.
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
