import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { addPostAction } from "@/actions/formActions";

const AddPost = () => {
    
    return (
        <section>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-xl">
                <Link href="/blog">
                    <Button size="3" color="crimson" variant="solid">
                        Back
                    </Button>
                </Link>
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Add a new Blog Post</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
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
                            <label htmlFor="userId" className="block mb-2 text-sm font-medium text-white">Body</label>
                            <textarea
                                type="text"
                                name="body"
                                id="userId"
                                className="shadow-sm bg-transparent border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
                                placeholder="enter your user id"
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
            </div>
        </section>
    )
}

export default AddPost
