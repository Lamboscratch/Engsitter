import ReleaseDate from "@/app/components/ReleaseDate";
import type { Post } from "contentlayer/generated";
import Link from "next/link";
import { CoreContent } from "pliny/utils/contentlayer.js";

export interface PostsType {
    posts: CoreContent<Post>[];
    maxDisplay: number;
}

export default function PostsList({ posts, maxDisplay }: PostsType) {
    return (
        <ul className="flex flex-none flex-col initial:mb-[-1px] sm:mb-0 initial:gap-7 sm:gap-3 border-solid border-l-[1px] border-gray-200 dark:border-zinc-700 h-min w-full box-border content-start items-start justify-start relative">
            {posts.slice(0, Math.min(posts.length, maxDisplay)).map((post) => (
                <li key={post.slug} className="flex flex-none initial:flex-col sm:flex-row initial:gap-0 sm:gap-10 w-full content-start items-start justify-start h-min box-border static">
                    <header className="flex flex-col grow shrink-0 basis-0 h-min initial:pb-2 sm:pb-3 initial:static sm:sticky box-border content-start items-start justify-start top-20 z-10">
                        <div className="flex flex-none flex-col gap-2 box-border content-start items-start justify-start h-min overflow-visible relative">
                            <div className="shadowBoxLight dark:shadowBoxDark bg-orangeSite aspect-square rounded flex-none box-border overflow-visible absolute left-[-0.28rem] right-[1px] halfHeight w-[0.5rem] z-20"></div>
                            <div className="flex flex-col shrink-0 box-border justify-start flex-none w-auto h-auto outline-none whitespace-pre relative">
                                <ReleaseDate style="ml-5 initial:pb-1 sm:pb-2 !text-base" date={post.date} />
                            </div>
                        </div>
                        <div className="flex flex-col shrink-0 box-border justify-start flex-none h-auto whitespace-pre-wrap w-full break-words outline-none relative">
                            <h2 className="ml-5 whitespace-pre-wrap box-border tracking-tight text-start">
                                <Link className="text-3xl font-semibold hover:underline hover:decoration-solid hover:decoration-orangeSite hover:underline-offset-4" href={`/posts/${post.slug}`} aria-label={`Navigate to ${post.title} post`}>
                                    {post.title}
                                </Link>
                            </h2>
                        </div>
                    </header>
                    <div className="ml-5 flex flex-col grow shrink-0 basis-0 gap-4 box-border content-start items-start justify-start h-min relative">
                        <div className="flex flex-none flex-col justify-start shrink-0 box-border border-b border-solid border-gray-200 dark:border-zinc-700 h-auto w-full outline-none relative">
                            <p className="initial:mt-3 sm:mt-8 mb-3 text-start text-lg box-border">{post.summary}</p>
                            <Link
                                className="flex flex-row content-start items-center justify-start mb-3 text-base w-max font-semibold hover:underline hover:decoration-solid hover:decoration-orangeSite hover:underline-offset-4"
                                href={`/posts/${post.slug}`}
                                aria-label={`Navigate to ${post.title} post`}
                            >
                                <p className="inline">Read more &#10141;</p>
                            </Link>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}
