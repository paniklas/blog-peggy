"use server";

const { connectToDatabase } = require("@/utils/utils");
import { Post } from "@/utils/models";
import { revalidatePath } from "next/cache";
import { auth, signIn, signOut  } from '@/utils/auth';


export const addPostAction = async (formData) => {

    console.log(formData);

    const {
        title,
        description,
        userId,
        body
    } = Object.fromEntries(formData);

    try { 
        await connectToDatabase();

        const newPost = new Post({
            title: title,
            description: description,
            userId: userId,
            body: body
        });

        await newPost.save();
        console.log("Post added successfully");
        revalidatePath("/blog");
        return { success: "Post added successfully" };

    } catch (error) {
        console.log(error);
        return { error: "Error adding post. Please try again." };
    }
}

// Update a service
export const updatePostAction = async (formData) => {

    console.log(formData)

    const title = formData.get("title");
    const description = formData.get("description");
    const body = formData.get("body");
    const userId = formData.get("userId");
    const postId = formData.get("id");

    try {
        await connectToDatabase();

        const updatePost = await Post.findByIdAndUpdate(
            postId,
            {
                title: title,
                description: description,
                body: body,
                userId: userId,
            },
            { new: true }
        );

        console.log("Post updated successfully");
        revalidatePath("/blog");
        return { success: "Post updated successfully" };

    } catch (error) {
        console.log(error);
        return { error: "Error updating post. Please try again." };
    }
}

export const deletePostAction = async (formData) => {

    const { id } = Object.fromEntries(formData);

    try { 
        await connectToDatabase();

        await Post.findByIdAndDelete(id);
        console.log("Post deleted successfully");
        revalidatePath("/blog");
        return { success: "Post deleted successfully" };

    } catch (error) {
        console.log(error);
        return { error: "Error deleting post. Please try again." };
    }
}

export const handleGithubLogin = async () => {
    await signIn('github')
}

export const handleLogout = async () => {
    await signOut();
}