import { writeFileSync } from "fs";
import { sortPosts } from "pliny/utils/contentlayer.js";
import { escape } from "pliny/utils/htmlEscaper.js";
import { allPosts } from "../../.contentlayer/generated/index.mjs";
import siteMetadata from "../data/siteMetadata.js";

const postPath = "posts";

const generateRssItem = (config, post) => `
  <item>
    <guid>${config.siteUrl}/${postPath}/${post.slug}</guid>
    <title>${escape(post.title)}</title>
    <link>${config.siteUrl}/${postPath}/${post.slug}</link>
    ${post.summary && `<description>${escape(post.summary)}</description>`}
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <author>${config.email} (${config.author})</author>
    ${post.tags && post.tags.map((t) => `<category>${t}</category>`).join("")}
  </item>
`;

const generateRss = (config, posts, page = "feed.xml") => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${escape(config.title)}</title>
      <link>${config.siteUrl}/${postPath}</link>
      <description>${escape(config.description)}</description>
      <language>${config.language}</language>
      <managingEditor>${config.email} (${config.author})</managingEditor>
      <webMaster>${config.email} (${config.author})</webMaster>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="${config.siteUrl}/${page}" rel="self" type="application/rss+xml"/>
      ${posts.map((post) => generateRssItem(config, post)).join("")}
    </channel>
  </rss>
`;

async function generateRSS(config, allPosts, page = "feed.xml") {
    const publishPosts = allPosts.filter((post) => post.draft !== true);
    // RSS for blog post
    if (publishPosts.length > 0) {
        const rss = generateRss(config, sortPosts(publishPosts));
        writeFileSync(`./public/${page}`, rss);
    }
}

export default function rss() {
    generateRSS(siteMetadata, allPosts);
    console.log("RSS feed generated...");
}
