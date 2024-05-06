/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
    title: "Engsitter",
    author: "Engsitter",
    headerTitle: "Engsitter",
    description: "The gateway to Networking and Cybersecurity insights",
    language: "en-us",
    theme: "system",
    siteUrl: "https://www.engsitter.com",
    siteLogo: "/images/logo_dark.svg",
    socialBanner: "/images/card_light.png",
    email: "engsitter@gmail.com",
    // github: "https://github.com",
    // twitter: "https://twitter.com/Twitter",
    // facebook: "https://facebook.com",
    // youtube: "https://youtube.com",
    // linkedin: "https://www.linkedin.com",
    // threads: "https://www.threads.net",
    // instagram: "https://www.instagram.com",
    locale: "en-US",
    analytics: {
        // If you want to use an analytics provider you have to add it to the
        // content security policy in the `next.config.js` file.
        umamiAnalytics: {
            // We use an env variable for this site to avoid other users cloning our analytics ID
            umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
            // You may also need to overwrite the script if you're storing data in the US - ex:
            // src: 'https://us.umami.is/script.js'
            // Remember to add 'us.umami.is' in `next.config.js` as a permitted domain for the CSP
        },
        // plausibleAnalytics: {
        //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
        // },
        // simpleAnalytics: {},
        // posthogAnalytics: {
        //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
        // },
        // googleAnalytics: {
        //   googleAnalyticsId: '', // e.g. G-XXXXXXX
        // },
    },
    search: {
        provider: "kbar",
        kbarConfig: {
            searchDocumentsPath: "search.json", // path to load documents to search
        },
    },
};

module.exports = siteMetadata;
