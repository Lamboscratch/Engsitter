import { PostsType } from "../Components/Main";

export default function extractPosts(posts: PostsType["posts"], course: string) {
    const courses = posts.filter((post) => {
        return post.path.split("/")[0] === "Posts";
    });

    const coursesPost = courses.filter((post) => {
        return post.path.split("/")[1] === course;
    });

    console.log(coursesPost);

    return coursesPost;
}
