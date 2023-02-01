"use client"

import { Dialog, Transition } from "@headlessui/react"
import {
    Bars3Icon,
    CodeBracketSquareIcon,
    HomeIcon,
    MoonIcon,
    SunIcon,
    XMarkIcon,
} from "@heroicons/react/20/solid"
import Link from "next/link"
import { useTheme } from "next-themes"
import React, { Fragment, useEffect, useState } from "react"

import { CoreTooltip, GitHubIcon, LinkedInIcon, MobileSocialLink, TwitterIcon } from ".."

function Header() {
    const [open, setOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const { systemTheme, theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const renderLightTheme = () => {
        if (currentTheme === "light") {
            return
        } else {
            return setTheme("light")
        }
    }

    const renderDarkTheme = () => {
        if (currentTheme === "dark") {
            return
        } else {
            return setTheme("dark")
        }
    }

    const currentTheme = theme === "system" ? systemTheme : theme

    return (
        <header className="sticky top-0 z-20 mx-auto flex w-full justify-between bg-gray-50 p-5 dark:bg-primary-dark">
            <div className="mx-auto flex w-full max-w-5xl justify-between bg-gray-50 text-center dark:bg-primary-dark">
                <div className="hidden lg:flex lg:gap-4">
                    <CoreTooltip content="Home">
                        <Link href="/" className="mx-auto">
                            <HomeIcon className="h-[38px] w-[38px] rounded-full p-2 hover:animate-wiggle hover:bg-pink-100 hover:text-black dark:hover:bg-pink-100" />
                        </Link>
                    </CoreTooltip>

                    <CoreTooltip content="Light">
                        <button onClick={renderLightTheme}>
                            <SunIcon className="h-[38px] w-[38px] rounded-full p-2 hover:animate-wiggle hover:bg-pink-100 hover:text-black dark:hover:bg-pink-100" />
                        </button>
                    </CoreTooltip>

                    <CoreTooltip content="Dark">
                        <button onClick={renderDarkTheme}>
                            <MoonIcon className="h-[38px] w-[38px] rounded-full p-2 hover:animate-wiggle hover:bg-pink-100 hover:text-black dark:hover:bg-pink-100" />
                        </button>
                    </CoreTooltip>
                </div>

                <button
                    className="group relative z-20 cursor-pointer lg:hidden"
                    onClick={() => setOpen(true)}
                >
                    <Bars3Icon className="mx-auto h-[38px] w-[38px] rounded-full p-2 hover:bg-pink-100 hover:text-black dark:hover:bg-pink-100" />
                </button>

                <Transition.Root show={open} as={Fragment}>
                    <Dialog as="div" className="relative z-50" onClose={setOpen}>
                        <div className="fixed inset-0 bg-black/30" />

                        <div className="fixed inset-0 overflow-hidden">
                            <div className="absolute inset-0 overflow-hidden ">
                                <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="transform transition ease-in-out duration-500 sm:duration-700"
                                        enterFrom="-translate-x-full"
                                        enterTo="-translate-x-0"
                                        leave="transform transition ease-in-out duration-500 sm:duration-700"
                                        leaveFrom="-translate-x-0"
                                        leaveTo="-translate-x-full"
                                    >
                                        <Dialog.Panel className="pointer-events-auto flex w-[297px] flex-col bg-white dark:bg-primary-dark dark:text-gray-300">
                                            <div className="flex flex-col px-3">
                                                <div className="h-full items-center justify-between">
                                                    <div className="px-2 py-5">
                                                        <button
                                                            type="button"
                                                            className=" rounded-full hover:bg-pink-100 hover:text-gray-500"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            <XMarkIcon
                                                                className=" h-[38px] w-[38px] rounded-full p-[5.5px] hover:bg-pink-100 hover:text-black dark:hover:bg-pink-100"
                                                                aria-hidden="true"
                                                            />
                                                        </button>
                                                    </div>
                                                </div>

                                                <Dialog.Title className="pt-4 pb-1">
                                                    Beau Hawkinson
                                                </Dialog.Title>

                                                <div className=" flex w-full flex-col justify-start space-y-1 text-left">
                                                    <Link
                                                        href="/"
                                                        onClick={() => setOpen(false)}
                                                        className="z-20 flex items-center space-x-1 rounded-lg py-1 hover:bg-pink-100 hover:text-black"
                                                        aria-label="Go Home"
                                                    >
                                                        <HomeIcon className="h-[38px] w-[38px] rounded-full p-2 hover:animate-wiggle hover:bg-pink-100 hover:text-black dark:hover:bg-pink-100" />

                                                        <p>Home</p>
                                                    </Link>

                                                    <Link
                                                        href="/projects"
                                                        onClick={() => setOpen(false)}
                                                        className="z-20 flex items-center space-x-1 rounded-lg py-1 hover:bg-pink-100 hover:text-black"
                                                    >
                                                        <CodeBracketSquareIcon className="h-[38px] w-[38px] rounded-full p-2 hover:animate-wiggle hover:bg-pink-100 hover:text-black dark:hover:bg-pink-100" />

                                                        <p>Projects</p>
                                                    </Link>

                                                    <Dialog.Title className=" pt-4">
                                                        Socials
                                                    </Dialog.Title>

                                                    <MobileSocialLink
                                                        href="https://twitter.com/twonarly"
                                                        aria-label="Follow on Twitter"
                                                        icon={TwitterIcon}
                                                        tooltip="Twitter"
                                                        onClick={() => setOpen(false)}
                                                    />

                                                    <MobileSocialLink
                                                        href="https://github.com/Twonarly1"
                                                        aria-label="Follow on GitHub"
                                                        icon={GitHubIcon}
                                                        tooltip="GitHub"
                                                        onClick={() => setOpen(false)}
                                                    />

                                                    <MobileSocialLink
                                                        href="https://www.linkedin.com/in/beau-hawkinson-6921bb84/"
                                                        aria-label="Follow on LinkedIn"
                                                        icon={LinkedInIcon}
                                                        tooltip="LinkedIn"
                                                        onClick={() => setOpen(false)}
                                                    />

                                                    <Dialog.Title className=" pt-4">
                                                        Theme
                                                    </Dialog.Title>

                                                    <button
                                                        onClick={renderLightTheme}
                                                        className="z-20 flex items-center space-x-1 rounded-lg py-1 hover:bg-pink-100 hover:text-black"
                                                    >
                                                        <SunIcon className="h-[38px] w-[38px] rounded-full p-2 hover:animate-wiggle hover:bg-pink-100 hover:text-black dark:hover:bg-pink-100" />

                                                        <p>Light</p>
                                                    </button>

                                                    <button
                                                        onClick={renderDarkTheme}
                                                        className="z-20 flex items-center space-x-1 rounded-lg py-1 hover:bg-pink-100 hover:text-black"
                                                    >
                                                        <MoonIcon className="h-[38px] w-[38px] rounded-full p-2 hover:animate-wiggle hover:bg-pink-100 hover:text-black dark:hover:bg-pink-100" />

                                                        <p>Dark</p>
                                                    </button>
                                                </div>

                                                <footer>
                                                    <a
                                                        className="absolute left-3 bottom-2 cursor-pointer text-sm outline-none"
                                                        href="https://beau-hawkinson.vercel.app/"
                                                    >
                                                        © {new Date().getFullYear()} bhawkinson
                                                    </a>
                                                </footer>
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>

                <Link href="/projects" className="flex items-center justify-center p-2">
                    Projects
                </Link>
            </div>
        </header>
    )
}

export default Header

// type MobileNavItems = {
//     title: string
//     label: string
//     href: string
//     onClick?: () => {}
//     icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
// }

// const mobileNavItems: MobileNavItems[] = [
//     { title: "Home", icon: HomeIcon, label: "Home Page", href: "/" },
//     { title: "Projects", icon: CodeBracketSquareIcon, label: "Projects Page", href: "/projects" },
//     {
//         title: "Twitter",
//         icon: TwitterIcon,
//         label: "Follow on Twitter",
//         href: "https://twitter.com/twonarly",
//     },
//     {
//         title: "GitHub",
//         icon: GitHubIcon,
//         label: "Follow on GitHub",
//         href: "https://github.com/Twonarly1",
//     },
//     {
//         title: "LinkedIn",
//         icon: LinkedInIcon,
//         label: "Follow on LinkedIn",
//         href: "https://www.linkedin.com/in/beau-hawkinson-6921bb84/",
//     },
//     { title: "Light", icon: SunIcon, label: "", href: "" },
//     { title: "Dark", icon: MoonIcon, label: "", href: "" },
// ]
