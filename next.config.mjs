/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "smiletwice.com"
            },
            {
                hostname: "cdn.shopify.com",

            }
        ]
    }
};

export default nextConfig;
