"use client"

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Fragment, useEffect, useState } from "react"
import { List, X } from "components/icon"
import Sidebar from "../sidebar/sidebar"

type NavProps = {
    name: string
    path: string
}[]

const navItems: NavProps = [
    { name: "home", path: "/" },
    { name: "projects", path: "/project" },
    { name: "github", path: "/github" },
]

const Header = () => {
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
            <div>
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
            </div>
        )
    }

    function NavItems() {
        return (
            <div>
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
            </div>
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

            <Sidebar />
        </>
    )
}

export default Header
