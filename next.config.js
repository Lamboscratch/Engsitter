const { withContentlayer } = require("next-contentlayer2");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

const securityHeaders = [
    {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
    },
    {
        key: "X-Frame-Options",
        value: "DENY",
    },
    {
        key: "X-Content-Type-Options",
        value: "nosniff",
    },
    {
        key: "X-DNS-Prefetch-Control",
        value: "on",
    },
    {
        key: "Strict-Transport-Security",
        value: "max-age=31536000; includeSubDomains",
    },
];

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = () => {
    const plugins = [withContentlayer, withBundleAnalyzer];
    return plugins.reduce((acc, next) => next(acc), {
        compiler: {
            removeConsole: true,
        },
        reactStrictMode: true,
        poweredByHeader: false,
        pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
        async headers() {
            return [
                {
                    source: "/",
                    headers: securityHeaders,
                },
                {
                    source: "/(.*?)",
                    headers: securityHeaders,
                },
            ];
        },
    });
};
