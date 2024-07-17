"use client";

import Link from 'next/link';
import { usePathname } from "next/navigation";

const links = [
    {
        name: "Home",
        path: "/",
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
    }]

const Header = () => {

    const pathname = usePathname();

    const session = true;
    const isAdmin = false;

    return (
        <header className="px-12 py-6 bg-slate-800" id="peggy">
            <div className="flex items-center justify-between ml-10 ">
                <div className="text-3xl font-bold font-sans text-indigo-400">P e g g y ' s</div>
                <div className="flex gap-[50px] mr-8 text-2xl text-white">
                    {links.map((link, index) => {
                        return (
                            <Link key={index} href={link.path} className={`${link.path === pathname && "text-indigo-400 border-b-2 border-indigo-400"} capitalize font-medium hover:text-indigo-400 transition-all`}>
                                {link.name}
                            </Link>
                        )
                    })}
                    {session ? (
                        <>
                            {isAdmin && (
                                <Link href="/admin" className="text-white hover:text-gray-300">
                                    Admin
                                </Link>
                            )}
                            <Link href="/blog/add" className="text-white hover:text-gray-300">Add Post</Link>
                            <button className="text-white hover:text-gray-300">Logout</button>
                        </>
                    ) : (
                        <Link href="/login" className="text-white hover:text-gray-300">
                            Login
                        </Link>
                    )}
                </div>                
            </div>
            
        </header>
    )
}

export default Header
