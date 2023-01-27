"use client"

import React, { Fragment, useEffect, useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Bars3Icon, HomeIcon, MoonIcon, SunIcon, XMarkIcon } from "@heroicons/react/20/solid"
import { Transition, Dialog } from "@headlessui/react"
import { TwitterIcon, GitHubIcon, LinkedInIcon, MobileSocialLink } from "./social-icons"
import { useIsMounted } from "lib/hooks"

function Header() {
    const isMounted = useIsMounted()
    const { systemTheme, theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState<boolean>(false)
    const [open, setOpen] = useState(false)

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), [])
    if (!mounted) return null
    const currentTheme = theme === "system" ? systemTheme : theme

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

    if (!isMounted) return null
    return (
        <header className="sticky top-0 z-20 mx-auto flex w-full justify-between bg-white p-5 dark:bg-primary-dark">
            <div className="mx-auto flex w-full max-w-5xl items-center justify-between text-center ">
                <div className="hidden space-x-3 bg-white dark:bg-primary-dark lg:flex lg:gap-4">
                    <div className="group relative z-20">
                        <Link href="/" className="mx-auto">
                            <HomeIcon className="mb-2 h-[38px] w-[38px] rounded-full p-2 text-gray-400 hover:bg-pink-100 dark:text-gray-400 dark:hover:bg-pink-100 dark:hover:text-gray-400" />
                        </Link>

                        <p className="invisible text-xs transition duration-500 ease-in-out group-hover:visible">
                            Home
                        </p>
                    </div>
                    <div className="group relative z-20 cursor-pointer">
                        <button onClick={renderLightTheme}>
                            <SunIcon className="mx-auto h-[38px] w-[38px] rounded-full p-2 hover:bg-pink-100 dark:hover:bg-pink-100" />
                        </button>
                        <p className="invisible text-xs transition duration-500 ease-in-out group-hover:visible">
                            Light
                        </p>
                    </div>
                    <div className="group relative z-20 cursor-pointer">
                        <button onClick={renderDarkTheme}>
                            <MoonIcon className="mx-auto h-[38px] w-[38px] rounded-full p-2 hover:bg-pink-100 dark:hover:bg-pink-100" />
                        </button>
                        <p className="invisible text-xs transition duration-500 ease-in-out group-hover:visible">
                            Dark
                        </p>
                    </div>
                </div>
                <button
                    className="group relative z-20 cursor-pointer lg:hidden"
                    onClick={() => setOpen(true)}
                >
                    <Bars3Icon className=" mx-auto h-[38px] w-[38px] rounded-full p-2 hover:bg-pink-100 dark:hover:bg-pink-100" />
                </button>
                <Transition.Root show={open} as={Fragment}>
                    <Dialog as="div" className="relative z-50 bg-white" onClose={setOpen}>
                        <div className="fixed inset-0" />
                        <div className="fixed inset-0 overflow-hidden">
                            <div className="absolute inset-0 overflow-hidden">
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
                                        <Dialog.Panel className="pointer-events-auto flex w-[297px] flex-col bg-white text-gray-500 dark:bg-primary-dark dark:text-gray-300">
                                            <div className="flex flex-col px-3">
                                                <div className="h-full items-center justify-between bg-white dark:bg-primary-dark">
                                                    <div className="px-2 py-5">
                                                        <button
                                                            type="button"
                                                            className=" rounded-full bg-white text-gray-400 hover:bg-pink-100 hover:text-gray-500 dark:bg-primary-dark"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            <XMarkIcon
                                                                className=" h-[38px] w-[38px] rounded-full p-[5.5px] hover:bg-pink-100 dark:hover:bg-pink-100"
                                                                aria-hidden="true"
                                                            />
                                                        </button>
                                                    </div>
                                                    <Dialog.Title className="m-auto mb-2">
                                                        Beau Hawkinson
                                                    </Dialog.Title>
                                                </div>
                                                <div className=" flex w-full flex-col justify-start space-y-1 bg-white text-left dark:bg-primary-dark">
                                                    <Link
                                                        href="/"
                                                        onClick={() => setOpen(false)}
                                                        className="group z-20 flex items-center space-x-1 rounded-lg py-1 hover:bg-pink-100 hover:text-gray-500"
                                                    >
                                                        <HomeIcon className="h-[38px] w-[38px] rounded-full p-2  dark:text-gray-400 dark:hover:text-gray-400" />
                                                        <p>Home</p>
                                                    </Link>

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
                                                    <button
                                                        onClick={renderLightTheme}
                                                        className="group z-20 flex w-full items-center space-x-1 rounded-lg py-1  hover:bg-pink-100 hover:text-gray-500"
                                                    >
                                                        <SunIcon className=" h-[38px] w-[38px] rounded-full p-[5.5px]" />
                                                        <p>Light</p>
                                                    </button>
                                                    <button
                                                        onClick={renderDarkTheme}
                                                        className="group z-20 flex items-center space-x-1 rounded-lg py-1 hover:bg-pink-100 hover:text-gray-500"
                                                    >
                                                        <MoonIcon className=" h-[38px] w-[38px] rounded-full p-[7px]" />
                                                        <p>Dark</p>
                                                    </button>
                                                </div>
                                                <footer>
                                                    <a
                                                        className="absolute left-3 bottom-2 cursor-pointer text-sm text-gray-400 outline-none"
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
            </div>
        </header>
    )
}

export default Header
