import extractCoursePosts from "../Utilities/extractCoursePosts";
import { PostsType } from "./Main";
import PostsList from "./PostsList";

interface Props {
    posts: PostsType["posts"];
    course: string;
}

export default function CoursePosts({ posts, course }: Props) {
    const courses = extractCoursePosts(posts, course);

    return <PostsList posts={courses} maxDisplay={courses.length} />;
}
