"use client";

import { useState, useEffect } from "react";
import { Button } from "@radix-ui/themes";
import { updatePostAction } from "@/actions/formActions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const EditPostForm = ({ title, description, userId, body, id }) => {

    const router = useRouter();

    const [data, setData] = useState({
        title: title,
        description: description,
        userId: userId,
        body: body,
        id: id
    });

    const handleInput = (key, value) => {
        setData((prev) => {
            return {...prev,[key]: value}
        });
    }

    useEffect(() => {
        console.log(data);
    }, [data]);

    const handleSubmit = async () => {

        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("body", data.body);
        formData.append("userId", data.userId);
        formData.append("id", data.id);
        
        // Assuming you have a function to update the post
        const response = await updatePostAction(formData);

        console.log("Response", response);

        if (response.success) {
            toast.success("Post updated successfully");
            router.push('/blog');
        }
    };

    return (
        <form className="space-y-8" action={handleSubmit}>
            <input type="hidden" name="id" value={id} />
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-white">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="shadow-sm bg-transparent border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
                        placeholder="Enter a title"
                        value={data.title}
                        onChange={(e) => handleInput(e.target.name, e.target.value)}
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
                        value={data.description}
                        onChange={(e) => handleInput(e.target.name, e.target.value)}
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
                        value={data.userId}
                        onChange={(e) => handleInput(e.target.name, e.target.value)}
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label htmlFor="userId" className="block mb-2 text-sm font-medium text-white">Body</label>
                    <textarea
                        type="text"
                        name="body"
                        id="userId"
                        className="shadow-sm bg-transparent border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
                        placeholder="enter your user id"
                        rows="10"
                        value={data.body}
                        onChange={(e) => handleInput(e.target.name, e.target.value)}
                    />
                </div>
            </div>
            <Button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center rounded-lg"
                size="4" color="crimson" variant="solid"
            >
                Update Post
            </Button>
        </form>
    )
}

export default EditPostForm
