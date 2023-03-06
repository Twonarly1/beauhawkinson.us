"use client"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import { List, X } from "core/icon"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import Link from "next/link"

const navItems = [
    { name: "home", path: "/" },
    { name: "projects", path: "/project" },
    { name: "resume", path: "/resume" },
    { name: "github", path: "/github" },
    // { name: "guestbook", path: "/guestbook" },
]

export function MobileNavigation() {
    let pathname = usePathname() || "/"
    if (pathname.includes("/blog/")) {
        pathname = "/blog"
    }
    const [open, setOpen] = useState(false)

    return (
        <>
            <button
                className="fixed top-0 right-4 z-20 ml-1 cursor-pointer bg-[#fefefe] py-5 dark:bg-[#111010] sm:hidden"
                onClick={() => setOpen(true)}
            >
                <List className="h-6 w-6" />
            </button>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={setOpen}>
                    <div className="fixed inset-0 bg-black/30" />

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 mx-auto flex h-fit w-full p-5">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 duration-700"
                                    enterFrom="-translate-y-full"
                                    enterTo="-translate-y-0"
                                    leave="transform transition ease-in-out duration-500 duration-700"
                                    leaveFrom="-translate-y-0"
                                    leaveTo="-translate-y-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto relative mx-auto flex w-full flex-col rounded-xl border border-neutral-100 bg-neutral-100 p-5 text-center text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
                                        <button
                                            type="button"
                                            className="absolute top-2 right-2"
                                            onClick={() => setOpen(false)}
                                        >
                                            <X
                                                className="z-50 h-6 w-6 cursor-pointer rounded-full"
                                                aria-hidden="true"
                                            />
                                        </button>

                                        {navItems.map((item) => {
                                            const isActive = item.path === pathname

                                            return (
                                                <Link
                                                    key={item.path}
                                                    href={item.path}
                                                    onClick={() => setOpen(false)}
                                                    className={clsx(
                                                        "py-[5px] px-[10px] transition-all hover:text-neutral-800 dark:hover:text-neutral-200",
                                                        {
                                                            "text-neutral-500": !isActive,
                                                            "font-bold": isActive,
                                                        },
                                                    )}
                                                >
                                                    {item.name}
                                                </Link>
                                            )
                                        })}
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}
