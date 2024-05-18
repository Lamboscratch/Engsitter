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
    search: {
        provider: "kbar",
        kbarConfig: {
            searchDocumentsPath: "search.json", // path to load documents to search
        },
    },
};

module.exports = siteMetadata;
