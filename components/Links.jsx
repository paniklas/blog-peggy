"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { handleLogout } from "@/actions/formActions";

const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Users",
        path: "/users",
    },
    {
        name: "Blog",
        path: "/blog",
    },
    {
        name: "Services",
        path: "/services",
    },
    {
        name: "Contact",
        path: "/contact",
    }];

const Links = ({ session }) => {

    const pathname = usePathname();

    // const session = true;
    // const isAdmin = true;

    return (
        <div className="flex gap-[50px] mr-8 text-2xl text-white justify-center items-center">
            {links.map((link, index) => {
                return (
                    <Link key={index} href={link.path} className={`${link.path === pathname && "text-indigo-400 border-b-2 border-indigo-400"} capitalize font-medium hover:text-indigo-400 transition-all`}>
                        {link.name}
                    </Link>
                )
            })}
            {session?.user ? (
                <>
                    {session.user?.isAdmin && (
                        <Link href="/admin" className="text-white hover:text-gray-300">
                            Admin
                        </Link>
                    )}
                    <Link href="/blog/add" className="text-white hover:text-gray-300">Add Post</Link>
                    <form action={handleLogout}>
                        <button className="hover:text-gray-300 border border-white bg-white px-6 py-1 rounded-lg text-black">Logout</button>
                    </form>
                </>
            ) : (
                <Link href="/authentication/login" className="text-white hover:text-gray-300">
                    Login
                </Link>
            )}
        </div> 
    )
}

export default Links
