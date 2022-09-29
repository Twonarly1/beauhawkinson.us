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
        <header className="sticky top-0 z-50 flex max-w-5xl justify-between bg-white p-5 dark:bg-primary-dark">
            <div className="mx-auto flex w-full items-center gap-2">
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
