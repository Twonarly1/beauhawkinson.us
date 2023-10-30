"use client"

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Fragment, useEffect, useState } from "react"
import { Stack } from "core"
import { Dialog, Transition } from "@headlessui/react"
import { List, X } from "core/icon"

type NavProps = {
    name: string
    path: string
}[]

const navItems: NavProps = [
    { name: "home", path: "/" },
    { name: "projects", path: "/project" },
    { name: "resume", path: "/resume" },
    { name: "github", path: "/github" },
    { name: "guestbook", path: "/guestbook" },
]

export function Navigation() {
    const [open, setOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const { systemTheme, theme, setTheme } = useTheme()
    let pathname = usePathname() || "/"
    if (pathname.includes("/projects/")) {
        pathname = "/projects"
    }

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

    function ThemeChanger() {
        return (
            <Stack direction={{ base: "vertical", sm: "horizontal" }} alignItems="center">
                <button
                    className={clsx(
                        "py-[5px] px-[10px] transition-all hover:text-neutral-800 dark:hover:text-neutral-200",
                        {
                            "rounded bg-neutral-200 font-bold dark:bg-neutral-600":
                                currentTheme === "light",
                        },
                    )}
                    onClick={renderLightTheme}
                >
                    light
                </button>

                <button
                    className={clsx(
                        "py-[5px] px-[10px] transition-all hover:text-neutral-800 dark:hover:text-neutral-200",
                        {
                            "rounded bg-neutral-200 font-bold dark:bg-neutral-600":
                                currentTheme === "dark",
                        },
                    )}
                    onClick={renderDarkTheme}
                >
                    dark
                </button>
            </Stack>
        )
    }

    function NavItems() {
        return (
            <Stack direction={{ base: "vertical", sm: "horizontal" }} alignItems="center">
                {navItems.map((item) => {
                    const isActive = item.path === pathname

                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={clsx(
                                "py-[5px] px-[10px] hover:text-neutral-800 dark:hover:text-neutral-200",
                                {
                                    "text-neutral-500": !isActive,
                                    "rounded bg-neutral-200 font-bold dark:bg-neutral-600":
                                        isActive,
                                },
                            )}
                        >
                            {item.name}
                        </Link>
                    )
                })}
            </Stack>
        )
    }

    return (
        <>
            <nav
                id="nav"
                className="fixed top-0 z-50 hidden h-[89px] w-full max-w-4xl justify-between bg-[#fefefe] px-4 dark:bg-[#111010] sm:flex"
            >
                <NavItems />
                <ThemeChanger />
            </nav>

            <>
                <button
                    className="fixed top-4 right-4 cursor-pointer bg-[#fefefe] dark:bg-[#111010] sm:hidden"
                    onClick={() => setOpen(true)}
                >
                    <List className="h-6 w-6" />
                </button>
                <Transition.Root show={open} as={Fragment}>
                    <Dialog as="div" className="relative z-50" onClose={setOpen}>
                        <div className="fixed inset-0 overflow-hidden bg-black/30" />

                        <div className="fixed inset-0 overflow-hidden">
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

                                        <NavItems />
                                        <ThemeChanger />
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>
            </>
        </>
    )
}
