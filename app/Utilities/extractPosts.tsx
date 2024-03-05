import { PostsType } from "../Components/Main";

let coursesMap = new Map();

export default function extractPosts(posts: PostsType["posts"]) {
    let returnPostsArray: PostsType["posts"][] = [];

    const courses = posts.filter((post) => {
        return post.path.split("/")[0] === "Posts";
    });

    courses.forEach((post) => {
        coursesMap.set(post.path.split("/")[1], []);
    });

    coursesMap.forEach((value, key) => {
        coursesMap.set(
            key,
            posts.filter((post) => {
                return post.path.split("/")[1] === key;
            })
        );
    });

    coursesMap.forEach((value, key) => {
        returnPostsArray.push(value);
    });

    return returnPostsArray;
}
