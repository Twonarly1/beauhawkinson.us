/* eslint-disable @next/next/no-img-element */
import { Bars3Icon, HomeIcon, XMarkIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import React, { Fragment, useEffect, useState } from "react"
import { useAccount } from "wagmi"
import { useIsMounted } from "src/lib/hooks"
import Wagmi from "./wagmi/Wagmi"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid"
import { Transition, Dialog } from "@headlessui/react"

const Nav = () => {
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

    useEffect

    if (!isMounted) return null

    return (
        <header className="sticky top-0 z-20 mx-auto flex w-full justify-between  bg-white p-5 dark:bg-primary-dark">
            <div className="mx-auto flex w-full max-w-5xl items-center justify-between text-center ">
                <div className="hidden space-x-3 bg-white dark:bg-primary-dark lg:flex">
                    <div className="group relative z-20">
                        <Link href="/" className="mx-auto">
                            <a href="" className="rounded-full">
                                <HomeIcon className="h-[38px] w-[38px] rounded-full  p-2  text-gray-400 hover:bg-pink-100 dark:text-gray-400 dark:hover:bg-pink-100 dark:hover:text-gray-400" />
                            </a>
                        </Link>

                        <p className="invisible absolute top-10 text-xs transition duration-500 ease-in-out group-hover:visible">
                            Home
                        </p>
                    </div>
                    <div className="group relative z-20 ">
                        <a href="https://twitter.com/twonarly" className="rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="z-20 mx-auto h-[38px] w-[38px] rounded-full p-2  hover:bg-pink-100 dark:hover:bg-pink-100"
                            >
                                <path
                                    fill="currentColor"
                                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                />
                            </svg>
                        </a>
                        <p className="invisible absolute top-10 text-xs transition duration-500 ease-in-out group-hover:visible">
                            Twitter
                        </p>
                    </div>
                    <div className="group relative z-20">
                        <a href="https://github.com/Twonarly1" className="rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 496 512"
                                className="z-20 mx-auto h-[38px] w-[38px] rounded-full p-2  hover:bg-pink-100  dark:hover:bg-pink-100 "
                            >
                                <path
                                    fill="currentColor"
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                />
                            </svg>
                        </a>
                        <p className="invisible absolute top-10 text-xs transition duration-500 ease-in-out group-hover:visible">
                            GitHub
                        </p>
                    </div>

                    <div className="group relative z-20 cursor-pointer border-l">
                        <SunIcon
                            onClick={renderLightTheme}
                            className="mx-auto ml-3 h-[38px] w-[38px] rounded-full p-[5.5px] hover:bg-pink-100 dark:hover:bg-pink-100"
                        />
                        <p className="invisible absolute top-10 right-[5px]  text-xs transition duration-500 ease-in-out group-hover:visible">
                            Light
                        </p>
                    </div>
                    <div className="group relative z-20 cursor-pointer">
                        <MoonIcon
                            onClick={renderDarkTheme}
                            className=" mx-auto  h-[38px] w-[38px] rounded-full p-[7px] hover:bg-pink-100 dark:hover:bg-pink-100"
                        />
                        <p className="invisible absolute left-2 top-10 text-xs transition duration-500 ease-in-out group-hover:visible">
                            Dark
                        </p>
                    </div>
                </div>
                <div className="group relative z-20 cursor-pointer lg:hidden">
                    <Bars3Icon
                        onClick={() => setOpen(true)}
                        className=" mx-auto h-[38px] w-[38px] rounded-full  hover:bg-pink-100 dark:hover:bg-pink-100"
                    />
                </div>
                <Transition.Root show={open} as={Fragment}>
                    <Dialog as="div" className="relative z-50 bg-white" onClose={setOpen}>
                        <div className="fixed inset-0 " />
                        <div className="fixed inset-0  overflow-hidden">
                            <div className="absolute  inset-0 overflow-hidden">
                                <div className=" pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
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
                                                            className=" rounded-full bg-white text-gray-400 focus:outline-none hover:bg-pink-100 hover:text-gray-500 dark:bg-primary-dark"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            <XMarkIcon
                                                                className=" h-[38px] w-[38px] rounded-full p-[5.5px] hover:bg-pink-100 dark:hover:bg-pink-100"
                                                                aria-hidden="true"
                                                            />
                                                        </button>
                                                    </div>
                                                    <Dialog.Title className="text-md mb-4 ml-3">
                                                        Beau Hawkinson
                                                    </Dialog.Title>
                                                </div>
                                                <div className=" flex w-full flex-col justify-start bg-white text-left dark:bg-primary-dark">
                                                    <div className="group z-20 flex items-center space-x-1 rounded-lg py-1 hover:bg-gray-50 hover:text-gray-500">
                                                        <Link href="/" className="mx-auto">
                                                            <a href="" className="rounded-full">
                                                                <HomeIcon className="h-[38px] w-[38px] rounded-full p-2  dark:text-gray-400 dark:hover:text-gray-400" />
                                                            </a>
                                                        </Link>

                                                        <p>Home</p>
                                                    </div>
                                                    <div className="group z-20 flex items-center space-x-1 rounded-lg py-1 hover:bg-gray-50 hover:text-gray-500">
                                                        <a
                                                            href="https://twitter.com/twonarly"
                                                            className="rounded-full"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 512 512"
                                                                className="z-20 h-[38px] w-[38px] rounded-full p-2"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                                                />
                                                            </svg>
                                                        </a>
                                                        <p>Twitter</p>
                                                    </div>
                                                    <div className="group z-20 flex items-center space-x-1 rounded-lg py-1 hover:bg-gray-50 hover:text-gray-500">
                                                        <a
                                                            href="https://github.com/Twonarly1"
                                                            className="rounded-full"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 496 512"
                                                                className="z-20 mx-auto h-[38px] w-[38px] rounded-full p-2   "
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                                                />
                                                            </svg>
                                                        </a>
                                                        <p>GitHub</p>
                                                    </div>
                                                    <div
                                                        onClick={renderLightTheme}
                                                        className="group z-20 flex w-full items-center space-x-1 rounded-lg py-1  hover:bg-gray-50 hover:text-gray-500"
                                                    >
                                                        <SunIcon className=" h-[38px] w-[38px] rounded-full p-[5.5px]" />
                                                        <p>Light</p>
                                                    </div>
                                                    <div
                                                        onClick={renderDarkTheme}
                                                        className="group z-20 flex items-center space-x-1 rounded-lg py-1 hover:bg-gray-50 hover:text-gray-500"
                                                    >
                                                        <MoonIcon className=" h-[38px] w-[38px] rounded-full p-[7px]" />
                                                        <p>Dark</p>
                                                    </div>
                                                </div>
                                                <footer>
                                                    <a
                                                        className="absolute left-3 bottom-2 cursor-pointer text-sm text-gray-400 outline-none"
                                                        href="https://beau-hawkinson.vercel.app/"
                                                    >
                                                        ©️ bhawkinson
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
                <Wagmi />
            </div>
        </header>
    )
}

export default Nav
