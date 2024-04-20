import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import { writeFileSync } from "fs";
import { extractTocHeadings } from "pliny/mdx-plugins/index.js";
import { allCoreContent, sortPosts } from "pliny/utils/contentlayer.js";
import readingTime from "reading-time";
import { Post as PostType } from "./.contentlayer/generated";
import siteMetadata from "./app/data/siteMetadata";

export const Post = defineDocumentType(() => ({
    name: "Post",
    filePathPattern: "**/*.mdx", // Type of file to parse (every mdx in all subfolders)
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
            resolve: (doc) => `${doc._raw.sourceFileDir.replace("posts/", "")}/${doc.title.toLowerCase().replaceAll(" ", "-")}`,
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

function createTagCount(allPosts: PostType[]) {
    const tagCount: Record<string, number> = {};
    allPosts.forEach((file) => {
        if (file.tags) {
            file.tags.forEach((tag) => {
                const formattedTag = tag;
                if (formattedTag in tagCount) {
                    tagCount[formattedTag] += 1;
                } else {
                    tagCount[formattedTag] = 1;
                }
            });
        } else {
            throw new Error("No tags found in the article!");
        }
    });
    writeFileSync("public/tag-data.json", JSON.stringify(tagCount));
}

function createSearchIndex(allPosts: PostType[]) {
    if (siteMetadata?.search?.provider === "kbar" && siteMetadata.search.kbarConfig.searchDocumentsPath) {
        writeFileSync(`public/${siteMetadata.search.kbarConfig.searchDocumentsPath}`, JSON.stringify(allCoreContent(sortPosts(allPosts))));
        console.log("Local search index generated...");
    }
}

export default makeSource({
    contentDirPath: "app/data", // Source directory where the content is located
    documentTypes: [Post],
    onSuccess: async (importData) => {
        const { allPosts } = await importData();
        createTagCount(allPosts);
        createSearchIndex(allPosts);
    },
});
