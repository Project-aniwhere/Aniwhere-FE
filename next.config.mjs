/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'default',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cloudfronturl',
      },
      {
        protocol: 'https',
        hostname: 'media.kitsu.app',
      },
    ],
  },
};

export default nextConfig;
