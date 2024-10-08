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
      "/cyber-quote": { page: "/cyber-quote" },
      "/quote": { page: "/quote" },
      "/get-quote-individual": { page: "/get-quote-individual" },
      "/get-quote-small-business": { page: "/get-quote-small-business" },
      "/get-quote-large-corporation": { page: "/get-quote-large-corporation" },
      "/make-a-claim": { page: "/make-a-claim" },
      "/get-final-quote-individual": { page: "/get-final-quote-individual" },
      "/get-final-quote-large-corporate": { page: "/get-final-quote-large-corporate" },
      "/get-final-quote-small-business": { page: "/get-final-quote-small-business" },
    };
  },
};
