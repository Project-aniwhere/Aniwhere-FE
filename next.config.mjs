/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: "default",
        remotePatterns: [{
            protocol: "https",
            hostname: "cloudfronturl",
        }],
    }
};

export default nextConfig;
