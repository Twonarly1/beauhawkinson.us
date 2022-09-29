import { HomeIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import React from "react"
import { SocialIcon } from "react-social-icons"
import Dropdown from "./Dropdown"

const navItems = [
    { url: "https://github.com/Twonarly1" },
    { url: "https://twitter.com/twonarly" },
    { url: "https://www.linkedin.com/in/beau-hawkinson-6921bb84/" },
]

const Nav = () => {
    return (
        <header className="sticky top-0 z-50 mx-auto flex max-w-5xl justify-between bg-white p-5 dark:bg-primary-dark">
            <div className="mx-auto flex w-full items-center gap-2">
                <Link href="/" className=" ">
                    <button className="rounded-full p-2 hover:bg-pink-100">
                        <HomeIcon className="h-[24px] w-[24px] text-gray-500" />
                    </button>
                </Link>
                {navItems.map((social, i: number) => (
                    <SocialIcon
                        style={{ width: "40px", height: "40px" }}
                        key={i}
                        url={social.url}
                        fgColor="gray"
                        bgColor="transparent"
                        className="rounded-full  hover:bg-pink-100"
                    />
                ))}
            </div>
            <Dropdown />
        </header>
    )
}

export default Nav
