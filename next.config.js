const { withContentlayer } = require("next-contentlayer");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

const ContentSecurityPolicy = `
    default-src 'self' https://www3.doubleclick.net/ https://marketingplatform.google.com/about/enterprise/;
    script-src 'self' 'unsafe-inline' 'unsafe-eval' giscus.app analytics.umami.is;
    style-src 'self' 'unsafe-inline';
    font-src 'self';
    form-action 'self';
    frame-ancestors 'none';
    frame-src giscus.app
`;

const securityHeaders = [
    {
        key: "Content-Security-Policy",
        value: ContentSecurityPolicy.replace(/\n/g, ""),
    },
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
