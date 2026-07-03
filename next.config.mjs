/** @type {import('next').NextConfig} */

// When deploying to GitHub Pages we build a static export served from a
// project sub-path (https://<user>.github.io/<repo>/). Local dev & normal
// builds are unaffected — set DEPLOY_TARGET=gh-pages to opt in.
const isGhPages = process.env.DEPLOY_TARGET === "gh-pages";
const repo = "volcano-academy";

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  ...(isGhPages
    ? {
        output: "export",
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
