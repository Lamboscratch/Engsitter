import siteMetadata from "./app/Data/siteMetadata";
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { writeFileSync } from "fs";
import { extractTocHeadings } from "pliny/mdx-plugins/index.js";
import { allCoreContent, sortPosts } from "pliny/utils/contentlayer.js";
import readingTime from "reading-time";
import { Post as PostType } from "./.contentlayer/generated";

export const Post = defineDocumentType(() => ({
    name: "Post",
    filePathPattern: `**/*.mdx`, // Type of file to parse (every mdx in all subfolders)
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required: true,
        },
        date: {
            type: "date",
            required: true,
        },
        tags: {
            type: "list",
            of: {
                type: "string",
            },
            default: [],
        },
        draft: {
            type: "boolean",
            required: false,
        },
        summary: {
            type: "string",
            required: true,
        },
        lastmod: {
            type: "date",
            required: false,
        },
        images: {
            type: "json",
            required: false,
        },
    },
    computedFields: {
        readingTime: {
            type: "json",
            resolve: (doc) => readingTime(doc.body.raw),
        },
        slug: {
            type: "string",
            resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ""),
        },
        path: {
            type: "string",
            resolve: (doc) => doc._raw.flattenedPath,
        },
        filePath: {
            type: "string",
            resolve: (doc) => doc._raw.sourceFilePath,
        },
        toc: {
            type: "list",
            of: {
                type: "object",
            },
            resolve: (doc) => extractTocHeadings(doc.body.raw),
        },
    },
}));

function createSearchIndex(allPosts: PostType[]) {
    if (siteMetadata?.search?.provider === "kbar" && siteMetadata.search.kbarConfig.searchDocumentsPath) {
        writeFileSync(`public/${siteMetadata.search.kbarConfig.searchDocumentsPath}`, JSON.stringify(allCoreContent(sortPosts(allPosts))));
        console.log("Local search index generated...");
    }
}

export default makeSource({
    contentDirPath: "app/Data", // Source directory where the content is located
    documentTypes: [Post],
    onSuccess: async (importData) => {
        const { allPosts } = await importData();
        createSearchIndex(allPosts);
    },
});
