/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://www.monir178.live/:path*", // replace with your new site URL
        permanent: true, // sends 308 status for SEO-friendly permanent redirect
      },
    ];
  },
};

module.exports = nextConfig;
