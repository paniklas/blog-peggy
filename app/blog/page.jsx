import Link from "next/link";
import { getPosts } from "@/utils/mongodata";
import { Button, Skeleton } from "@radix-ui/themes";
import { Delete, Pen, Trash2 } from 'lucide-react';
import DeletePostButton from "@/components/DeletePostButton";

// Post User Component
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";


const AllBlogs = async () => {

    const posts = await getPosts();
    console.log(posts);

    return (
        <section className="flex flex-col justify-center items-center gap-20 w-full pt-10">
            <div className="flex justify-center items-center gap-10">
                <h1 className="flex-1 border-4 rounded-full text-center border-indigo-400 text-indigo-400 text-4xl font-sans font-bold bg-slate-800 px-8 py-3">All Posts</h1>
                <Link href="/blog/add">
                    <Button size="4">Add Post</Button>
                </Link>
            </div>

            <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-20">
                <Suspense fallback={<Skeleton className="h-[125px] w-[250px] rounded-xl " />}>
                    {posts.map((post) => (
                        <div key={post.id} className="flex flex-col border border-white rounded-lg p-4">
                            <div className="flex justify-between items-center">
                                <div className="flex justify-center items-center gap-10">
                                    <div className="flex flex-col gap-2 items-center">
                                        {post && (
                                            <Suspense fallback={<Skeleton className="h-12 w-12 rounded-full " />}>
                                                <PostUser userId={post.userId} />
                                            </Suspense>
                                        )}
                                    </div>
                                    <h1 className="text-white text-2xl">{post.title}</h1>
                                </div>
                                <div className="flex gap-2">
                                    <Link href={`/blog/edit/${post.id}`}>
                                        <Button size="2">
                                            <Pen size={15} />
                                        </Button>
                                    </Link>
                                    <DeletePostButton postId={post.id} postTitle={post.title} />
                                </div>
                            </div>
                            <p className="text-white mt-20 mb-10">{post.body}</p>
                            <Button className="border:solid rounded-full bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-300">
                                <Link href={`/blog/${post.id}`} className="text-white ">Read More</Link>
                            </Button>
                        </div>
                    ))}
                </Suspense>
            </div>
        </section>
    )
}

export default AllBlogs
