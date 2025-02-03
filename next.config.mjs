/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dbmt2d395muck.cloudfront.net',
                port: '',
                pathname: '**',
            }
        ]
    }
};
export default nextConfig;
