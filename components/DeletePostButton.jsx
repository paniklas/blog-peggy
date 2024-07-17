"use client";

// react
import { useState } from "react";

// radix ui
import { Flex, Dialog, Button } from "@radix-ui/themes";

// actions
import { deletePostAction } from "@/actions/formActions";

// toast
import { toast } from "sonner";

// lucide icons
import { Trash2 } from 'lucide-react';


const DeletePostButton = ({ postId, postTitle }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleDeleteService = async () => {
        const formData = new FormData();
        formData.append('id', postId);

        try {
            const response = await deletePostAction(formData);
            if (response.success) {
                toast.success("Post deleted successfully.");
            } else {
                toast.error(response.error || "Error deleting post. Please try again.");
            }
            setIsOpen(false);
        } catch (error) {
            console.log(error);
            toast.error("Error deleting post. Please try again.");
        }
    }

    return (
        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
            <Dialog.Trigger asChild>
                <Button>
                    <Trash2 size={15} />
                </Button>
            </Dialog.Trigger>
            <Dialog.Content>
                <Dialog.Title className="text-lg font-bold">Confirm Deletion</Dialog.Title>
                <Dialog.Description className="mt-2 text-sm text-dimBlack">
                    Are you sure you want to delete the post {" "}
                    <span className="font-bold text-red-500">{postTitle}</span>?
                    This action cannot be undone.
                </Dialog.Description>
                <Flex gap="3" justify="end">
                    <Dialog.Close>
                        <Flex gap="3" justify="column">
                            <Button
                                variant="solid"
                                color="red"
                                style={{ marginTop: "10px" }}
                                onClick={handleDeleteService}
                            >
                                Delete
                            </Button>
                            <Button
                                variant="solid"
                                color="gray"
                                style={{ marginTop: "10px" }}
                                onClick={() => setIsOpen(false)}
                            >
                                Close
                            </Button>
                        </Flex>
                    </Dialog.Close>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    )
}

export default DeletePostButton


