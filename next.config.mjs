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
      "/cyber-insurance": { page: "/cyber-insurance" },
    };
  },
};
