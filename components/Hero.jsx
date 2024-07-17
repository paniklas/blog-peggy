import Image from "next/image";
import Link from "next/link";
import meeting from "../public/meeting-1.webp";

// components
import PostCard from "./PostCard";

const Hero = () => {

    return (
        <section className="flex w-full h-full mb-60">
            <div className="flex justify-between items-start w-full ">
                <div className="w-[800px] h-[500px] relative mb-10 mx-20 ml-20 mt-20 border-4 rounded-[20px] bg-gray-800">
                    {/* Image */}
                    <Image
                        src={meeting}
                        alt="meeting"
                        fill
                        placeholder="blur"
                        className="object-contain"
                        priority
                        quality={100}
                    />
                </div>
                <div className="flex flex-col w-[600px] h-[100px] gap-3 justify-start mr-20 mt-20 ">
                    {/* Post List */}
                    <h1 className= "border-4 rounded-full ml-[140px] w-80 p-3   text-center border-indigo-400 text-indigo-400 text-3xl font-sans font-bold mb-8 bg-slate-800 ">New Posts</h1>
                    <PostCard />
                </div>
            </div>
        </section>
    )
}

export default Hero
