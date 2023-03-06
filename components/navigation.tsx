"use client"

import clsx from "clsx"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Stack } from "core"
import { MobileNavigation } from "./mobile-navigation"

const navItems: any = {
    "/": {
        name: "home",
        x: 0,
        y: 0,
        w: "64px",
    },
    "/project": {
        name: "projects",
        x: 60,
        y: 35,
        w: "84px",
    },
    "/resume": {
        name: "resume",
        x: 138,
        y: 69,
        w: "80px",
    },
    "/github": {
        name: "github",
        x: 214,
        y: 102,
        w: "68px",
    },
    // "/guestbook": {
    //     name: "guestbook",
    //     x: 280,
    //     y: 136,
    //     w: "100px",
    // },
}

export function Navigation() {
    let pathname = usePathname() || "/"
    if (pathname.includes("/projects/")) {
        pathname = "/projects"
    }

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
        <>
            <nav
                id="nav"
                className="sticky top-0 z-20  hidden bg-[#fefefe] py-5 dark:bg-[#111010] sm:flex lg:w-[150px] lg:flex-shrink-0"
            >
                <Stack direction={{ base: "horizontal", lg: "vertical" }}>
                    {/* {navItems[pathname] ? (
                        <>
                            Desktop version, hidden on mobile, animates y axis
                            <div className="hidden lg:block">
                                <motion.div
                                    className="absolute z-[-1] h-[34px] rounded-md bg-neutral-100 dark:bg-neutral-800"
                                    layoutId="test2"
                                    initial={{ opacity: 0, y: navItems[pathname].y }}
                                    animate={{
                                        opacity: 1,
                                        y: navItems[pathname].y,
                                        width: navItems[pathname].w,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 350,
                                        damping: 30,
                                    }}
                                />
                            </div>

                            Mobile version, hidden on desktop, animates x axis
                            <div className="hidden sm:block lg:hidden">
                                <motion.div
                                    className="absolute z-[-1] h-[34px] rounded-md bg-neutral-100 dark:bg-neutral-800"
                                    layoutId="test"
                                    initial={{ opacity: 0, x: navItems[pathname].x }}
                                    animate={{
                                        opacity: 1,
                                        x: navItems[pathname].x,
                                        width: navItems[pathname].w,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 350,
                                        damping: 30,
                                    }}
                                />
                            </div>
                        </>
                    ) : null} */}

                    {Object.entries(navItems).map(([path, { name }]: any) => {
                        const isActive = path === pathname

                        return (
                            <Link
                                key={path}
                                href={path}
                                className={clsx(
                                    "py-[5px] px-[10px] transition-all hover:text-neutral-800 dark:hover:text-neutral-200",
                                    {
                                        "text-neutral-500": !isActive,
                                        "font-bold": isActive,
                                    },
                                )}
                            >
                                {name}
                            </Link>
                        )
                    })}

                    <button className="pt-8" onClick={renderLightTheme}>
                        <p className="hidden py-[5px] px-[10px] text-start text-neutral-500 transition-all hover:text-neutral-800 dark:hover:text-neutral-200 lg:flex">
                            light
                        </p>
                    </button>

                    <button onClick={renderDarkTheme}>
                        <p className="hidden py-[5px] px-[10px] text-start text-neutral-500 transition-all hover:text-neutral-800 dark:hover:text-neutral-200 lg:flex">
                            dark
                        </p>
                    </button>
                </Stack>
            </nav>
            <MobileNavigation />
        </>
    )
}
