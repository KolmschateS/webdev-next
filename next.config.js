/** @type {import('next').NextConfig} */ 
const nextConfig = {
    experimental: {
        serverActions: true,
      },
      
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: "Strict-Transport-Security",
                        value: "max-age=31536000; includeSubDomains; preload;"
                    },
                    {
                        key: "X-Frame-Options",
                        value: "DENY"
                    },
                    {
                        key: "Content-Security-Policy",
                        value: "frame-ancestors 'none';"
                    }
                ]
            }
        ]
    }
}

module.exports = nextConfig
