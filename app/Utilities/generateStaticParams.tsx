import { allPosts } from "contentlayer/generated";

export const generateStaticParams = async () => {
    const paths = allPosts.map((p: any) => ({ slug: p.slug.split("/") }));

    return paths;
};
