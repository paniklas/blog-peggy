import { getPosts } from "@/utils/mongodata";
import Link from "next/link";
import { Button } from "@radix-ui/themes";

// components
import Hero from "@/components/Hero";

const Home = async () => {

  // Using MongoDB
  const posts = await getPosts();
  // console.log(posts);

  // Use slice to get only the featured 5 posts
  const featuredPosts = posts.slice(0, 3);

  return (
    <section className="flex flex-col">
      <Hero />
      <h1 className="text-indigo-400 text-4xl mb-10 border-4 border-indigo-400 rounded-full px-8 py-3 font-bold bg-slate-800 items-center text-center">Featured Posts</h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 rounded-lg ">
        {featuredPosts.map((post) => (
          <div key={post.id} className="flex flex-col justify-between border border-white rounded-lg p-10 w-[500px] h-[500px] mb-20 mt-10 ">
            <h1 className="text-white text-3xl">{post.title}</h1>
            <p className="text-white mt-20 mb-10">{post?.body}</p>
            <Button>
              <Link href={`/blog/edit/${post._id}`}>
                Read More
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home



