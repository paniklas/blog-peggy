import { getPost } from "@/utils/mongodata";
import { updatePostAction } from "@/actions/formActions";
import EditPostForm from "@/components/EditPostForm";

const EditPost = async ({ params }) => {

    console.log(params);

    const { id } = params;

    const post = await getPost(id);
    console.log(post);

    return (
        <div>
            <h1 className="text-white text-[50px]">Edit Post - {post.title}</h1>
            <EditPostForm
                title={post.title}
                description={post.description}
                userId={post.userId}
                body={post.body}
                id={post._id.toString()}
            />
        </div>
    )
}

export default EditPost
