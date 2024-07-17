import { getPosts } from "@/utils/mongodata";

import Link from "next/link";

// components
import Hero from "@/components/Hero";

const Home = async () => {

  // Using MongoDB
  const posts = await getPosts();
  console.log(posts);

  // Use slice to get only the featured 5 posts
  const featuredPosts = posts.slice(0, 3);

  return (
      <section className="flex flex-col">
        <Hero />
        <h1 className="text-indigo-400 text-4xl mb-10 border-4 border-indigo-400 rounded-full ml-[700px] w-[500px] p-3 text-center font-bold bg-slate-800">Featured Posts</h1>
        <div className="grid grid-cols-3 gap-10 rounded-lg ">
          {featuredPosts.map((post) => (
            <div key={post.id} className="flex flex-col px-20 justify-between border border-white rounded-lg p-10 w-[500px] h-[500px] mb-20 mt-10 ">
              <h1 className="text-white text-3xl">{post.title}</h1>
              <p className="text-white mt-20 mb-10">{post?.body}</p>
              <Link href={`/blog/${post._id}`} className= "text-blue-300">Read More...</Link>
            </div>
          ))}
        </div>
      </section>
  );
}

export default Home



