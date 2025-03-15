/* @type {import('next').NextConfig} */
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
        hostname: 'image.tmdb.org',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/reissue',
        destination: 'http://15.164.142.195/api/auth/reissue',
      },
      {
        source: '/api/:path*',
        destination: 'http://15.164.142.195/api/:path*',
      },
    ];
  },
};

export default nextConfig;
