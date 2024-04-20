import { PostsType } from "../Components/Main";

export default function extractCoursePosts(posts: PostsType["posts"], course: string) {
    const courses = posts.filter((post) => {
        return post.slug.split("/")[1] === course;
    });

    return courses;
}
