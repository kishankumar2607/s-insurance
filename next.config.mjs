/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
};

export default {
  ...nextConfig,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/home-page" },
      "/auto": { page: "/auto" },
      "/home": { page: "/home" },
      "/health": { page: "/health" },
      "/life": { page: "/life" },
      "/travel": { page: "/travel" },
      "/cyber-insurance": { page: "/cyber-insurance" },
    };
  },
};
