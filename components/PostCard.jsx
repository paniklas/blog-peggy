// import { getData } from "@/utils/fetchData";
import { getPosts } from "@/utils/mongodata";
import Link from "next/link";

const PostCard = async () => {
    
    // const posts = await getData();

    // Using MongoDB
    const posts = await getPosts();
    // console.log(posts);

    // Use slice to get only the first 5 posts
    const firstFivePosts = posts.slice(0, 3);
    // console.log(firstFivePosts);

    return (
        <>
            {firstFivePosts.map((post) => (
                <div key={post.id} className="items-center flex flex-col border rounded-full border-white p-5 mb-6 ">
                    <h1 className="text-white text-sm mb-4 font-bold">{post.title}</h1>
                    {/* <p className="text-white mt-20 mb-10">{post.body}</p> */}
                    <Link href={`/blog/${post.id}`} className="text-blue-300 hover:border-b-2">Read More...</Link>
                </div>
            ))}
        </>
    )
}

export default PostCard
