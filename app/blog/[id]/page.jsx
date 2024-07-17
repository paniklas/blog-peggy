// const getPost = async (id) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

import { getPost } from "@/utils/mongodata";

//     if (!res.ok) {
//         throw new Error('Something went wrong');
//     }
//     return res.json();
// }


const BlogPost = async ({ params }) => {

     console.log(params);
     
    const { id } = params;

    // const post = await getPost(id);

    const post = await getPost(id);
    

    return (
        <section className="gap-10 w-[800px] ml-[540px] mt-20">
            <h1 className="text-white text-6xl mb-10 text-center">{post.title}</h1>
            <p className="text-black text-2xl bg-slate-300 rounded-lg p-5">{post.body}</p>
        </section>
    )
}

export default BlogPost
