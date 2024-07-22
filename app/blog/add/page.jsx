import { Button } from "@radix-ui/themes";
import Link from "next/link";
import AddForm from "@/components/Post/AddForm";

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
                <AddForm />
            </div>
        </section>
    )
}

export default AddPost
