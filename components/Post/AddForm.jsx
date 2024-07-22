// "use client";

import { addPostAction } from "@/actions/formActions";
import { Button } from "@radix-ui/themes";

// import { useRouter } from "next/navigation";

// toast
import { toast } from "sonner";

const AddForm = () => {

    // const router = useRouter();

    // const handleAddPost = async () => {
    //     const formData = new FormData;
    //     formData.append('title', );
    //     formData.append('description', description);
    //     formData.append('userId', userId);
    //     formData.append('body', body);

    //     try {
    //         const response = await addPostAction(formData);
    //         if (response.success) {
    //             toast.success("Post added successfully.");
    //             router.push('/blog');
    //         } else {
    //             toast.error(response.error || "Error adding post. Please try again.");
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         toast.error("Error adding post. Please try again.");
    //     }
    // }

    return (
        <form action={addPostAction} className="space-y-8">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-white">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="shadow-sm bg-transparent border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
                        placeholder="Enter a title"
                    />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-white">Description</label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        className="block p-3 w-full text-sm text-white bg-transparent rounded-lg border border-gray-300 shadow-sm"
                        placeholder="Enter description"
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label htmlFor="userId" className="block mb-2 text-sm font-medium text-white">User id</label>
                    <input
                        type="text"
                        name="userId"
                        id="userId"
                        className="shadow-sm bg-transparent border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
                        placeholder="enter your user id"
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block mb-2 text-sm font-medium text-white">Body</label>
                    <textarea
                        name="body"
                        id="body"
                        className="shadow-sm bg-transparent border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
                        placeholder="enter your body"
                        rows="10"
                    />
                </div>
            </div>
            <Button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center rounded-lg"
                size="4" color="crimson" variant="solid"
            >
                Add Post
            </Button>
        </form>
    )
}

export default AddForm
