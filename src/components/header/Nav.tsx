import React from "react"
import { Social } from "../../../typings"
import { SocialIcon } from "react-social-icons"
import Link from "next/link"
import toast from "react-hot-toast"
import Dropdown from "./Dropdown"

type Props = {
    socials: Social[]
}

const Nav = ({ socials }: Props) => {
    // useEffect(() => {
    //     setTimeout(() => {
    //         setDotData([])
    //         toast.custom(
    //             (t) => (
    //                 <div
    //                     className={`${
    //                         t.visible ? "animate-enter" : "animate-leave"
    //                     } pointer-events-auto mr-2 -mt-2 flex max-w-4xl rounded-lg border-[4px] border-pink-400 bg-white px-4 py-2 shadow-lg `}
    //                 >
    //                     {/* ToDo: create toggle */}
    //                     <button
    //                         onClick={() => toast.dismiss(t.id)}
    //                         className="flex items-center gap-4"
    //                     >
    //                         Click the sparkles Icon for dots!!
    //                         <SparklesIcon className=" navButton  text-black hover:animate-wiggle dark:text-gray-400" />
    //                     </button>
    //                 </div>
    //             ),
    //             { duration: 4000 }
    //         )
    //     }, 5000)
    // }, [])

    return (
        <nav className="sticky top-0 z-50 flex justify-between  bg-black/5 px-6 py-5 pb-5 backdrop-blur-md dark:bg-white/10">
            <div className="mx-auto flex w-full max-w-5xl justify-between gap-4">
                <div className="z-10 flex items-center ">
                    {socials.map((social, i: number) => (
                        <SocialIcon
                            style={{ width: "40px", height: "40px" }}
                            key={i}
                            url={social.url}
                            fgColor="gray"
                            bgColor="transparent"
                            className="rounded-full hover:bg-pink-100 "
                        />
                    ))}
                    <Link href="#contact">
                        <div className="group flex items-center gap-1">
                            <SocialIcon
                                style={{ width: "40px", height: "40px" }}
                                className="cursor-pointer rounded-full group-hover:bg-pink-100"
                                network="email"
                                fgColor="gray"
                                bgColor="transparent"
                            />
                            <p className="hidden cursor-pointer font-winner  font-bold tracking-wide text-gray-900  dark:font-thin dark:text-gray-100 xs:inline-flex">
                                Get In Touch...
                            </p>
                        </div>
                    </Link>
                </div>

                <div className="">
                    <Dropdown />
                </div>
            </div>
        </nav>
    )
}

export default Nav
