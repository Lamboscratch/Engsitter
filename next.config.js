const { withContentlayer } = require("next-contentlayer2");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

const cspHeader = `
        default-src 'self' https://www3.doubleclick.net/ https://marketingplatform.google.com/about/enterprise/ https://api-gateway.umami.dev/api/send;
        script-src 'self' 'sha256-eMuh8xiwcX72rRYNAGENurQBAcH7kLlAUQcoOri3BIo=' 'sha256-10/0FESKC8299B5TCE+dGDo0JdZcRdny7kTczowOIYE=' giscus.app us.umami.is;
        style-src 'self' 'sha256-jUf+GtHxjTTTtqEHmSnVBpcHE67W4pMA+IZfBvqzwYo=';
        font-src 'self';
        form-action 'self';
        frame-ancestors 'none';
        frame-src giscus.app
    `;

const contentSecurityPolicyHeaderValue = cspHeader.replace(/\s{2,}/g, " ").trim();

const securityHeaders = [
    {
        key: "Content-Security-Policy",
        value: process.env.NODE_ENV === "production" ? contentSecurityPolicyHeaderValue : "",
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
    {
        key: "Access-Control-Allow-Origin",
        value: "https://api-gateway.umami.dev/api/send",
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
