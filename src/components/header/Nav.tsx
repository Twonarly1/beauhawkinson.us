import { HomeIcon } from "@heroicons/react/20/solid"
import { HomeModernIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import React from "react"
import { SocialIcon } from "react-social-icons"
import Dropdown from "./Dropdown"

const navItems = [
    { name: "GitHub", url: "https://github.com/Twonarly1" },
    { name: "Twitter", url: "https://twitter.com/twonarly" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/beau-hawkinson-6921bb84/" },
]

const Nav = () => {
    return (
        <header className="sticky top-0 z-20 mx-auto h-20 w-full items-center  bg-white p-5 dark:bg-primary-dark">
            <div className="mx-auto flex max-w-5xl justify-between ">
                <div className=" flex h-fit w-fit space-x-0">
                    <Link href="/" className="">
                        <div className="group z-20 -space-y-[5.5px]">
                            <button className="z-20 rounded-full bg-white  hover:bg-pink-100  dark:bg-primary-dark">
                                <HomeIcon className="h-[38px] w-[39px] rounded-full bg-white p-2  text-black/50 hover:bg-pink-100 dark:bg-primary-dark dark:text-gray-300/50 dark:hover:bg-pink-100 dark:hover:text-gray-400" />
                            </button>
                            <p className="invisible transition duration-500 ease-in-out group-hover:visible">
                                Home
                            </p>
                        </div>
                    </Link>

                    {navItems.map((social, i: number) => (
                        <div className="group z-20 h-fit w-fit " key={i}>
                            <SocialIcon
                                style={{ width: "38px", height: "38px" }}
                                url={social.url}
                                fgColor="gray"
                                bgColor="transparent"
                                className="rounded-full hover:bg-pink-100  dark:bg-primary-dark dark:hover:bg-pink-100"
                            />
                            <p className="invisible transition duration-500 ease-in-out group-hover:visible">
                                {social.name}
                            </p>
                        </div>
                    ))}
                </div>
                <Dropdown />
            </div>
        </header>
    )
}

export default Nav
