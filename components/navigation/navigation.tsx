"use client"

import { Dialog, Transition } from "@headlessui/react"
import Link from "next/link"
import { Fragment, useState } from "react"

import { MobileSocialLink, SlideoverThemeSwitcher, Stack } from "~/core"
import { Code, GitHubIcon, House, Info, LinkedInIcon, List, TwitterIcon, X } from "~/core/icon"

import { NavigationContactButton } from "./navigation-contact-button"

export function Navigation() {
    const [open, setOpen] = useState(false)

    return (
        <header className="sticky top-0 z-20 mx-auto flex w-full justify-between bg-gray-50 p-5 dark:bg-primary-dark">
            <div className="mx-auto flex w-full max-w-5xl justify-between bg-gray-50 text-center dark:bg-primary-dark">
                <Stack direction="horizontal" gap={2}>
                    <button
                        className="group relative z-20 cursor-pointer"
                        onClick={() => setOpen(true)}
                    >
                        <List className="mx-auto h-[38px] w-[38px] rounded-full p-2 hover:bg-pink-100 hover:text-black dark:hover:bg-pink-100" />
                    </button>

                    <Link href="/" className="mx-auto p-2">
                        Home
                    </Link>
                </Stack>

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
                                        <Dialog.Panel className="pointer-events-auto flex w-[297px] flex-col bg-white dark:bg-primary-dark">
                                            <div className="mx-3 flex flex-col">
                                                <div className="px-2 py-5">
                                                    <button
                                                        type="button"
                                                        className=""
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        <X
                                                            className="h-[38px] w-[38px] rounded-full p-2 hover:bg-pink-100 hover:text-black dark:hover:bg-pink-100"
                                                            aria-hidden="true"
                                                        />
                                                    </button>
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
                                                        <House className="h-[38px] w-[38px] rounded-full p-2 " />

                                                        <p>Home</p>
                                                    </Link>

                                                    <Link
                                                        href="/projects"
                                                        onClick={() => setOpen(false)}
                                                        className="z-20 flex items-center space-x-1 rounded-lg py-1 hover:bg-pink-100 hover:text-black"
                                                    >
                                                        <Code className="h-[38px] w-[38px] rounded-full p-2 " />

                                                        <p>Projects</p>
                                                    </Link>

                                                    <Link
                                                        href="/resume"
                                                        onClick={() => setOpen(false)}
                                                        className="z-20 flex items-center space-x-1 rounded-lg py-1 hover:bg-pink-100 hover:text-black"
                                                    >
                                                        <Info className="h-[38px] w-[38px] rounded-full p-2 " />

                                                        <p>Resume</p>
                                                    </Link>

                                                    <Dialog.Title className="pt-4">
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

                                                    <Dialog.Title className="pt-4">
                                                        Theme
                                                    </Dialog.Title>

                                                    <SlideoverThemeSwitcher />
                                                </div>

                                                <footer>
                                                    <a className="absolute left-3 bottom-2 cursor-pointer text-sm outline-none">
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

                <Stack alignItems="center" direction="horizontal" gap={4}>
                    <NavigationContactButton />
                </Stack>
            </div>
        </header>
    )
}
