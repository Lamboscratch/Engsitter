import { PostsType } from "@/app/components/Main";

let coursesMap = new Map();

export default function extractPosts(posts: PostsType["posts"]) {
    let returnPostsArray: PostsType["posts"][] = [];

    const courses = posts.filter((post) => {
        return post.slug.split("/")[0] === "posts";
    });

    courses.forEach((post) => {
        coursesMap.set(post.slug.split("/")[1], []);
    });

    coursesMap.forEach((value, key) => {
        coursesMap.set(
            key,
            posts.filter((post) => {
                return post.slug.split("/")[1] === key;
            })
        );
    });

    coursesMap.forEach((value, key) => {
        returnPostsArray.push(value);
    });

    return returnPostsArray;
}
