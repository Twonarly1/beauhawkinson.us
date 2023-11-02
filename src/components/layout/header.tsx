"use client"

import clsx from "clsx"
import { NAV_LINKS } from "lib/data"
import Link from "next/link"
import { usePathname } from "next/navigation"
import NetworkMenu from "./network-menu"
import Sidebar from "./sidebar"
import ThemeChanger from "./theme-changer"

/**
 * Header component.
 */
const Header = () => {
    let pathname = usePathname() || "/"

    return (
        <nav className="sticky top-0 z-50 mx-auto flex h-14 max-w-5xl items-center justify-between bg-[#fefefe] px-4 dark:bg-[#111010]">
            <div className="flex items-center gap-8">
                <Link
                    className={clsx("transition-colors duration-300", {
                        "text-pink-500": "/" === pathname,
                        "hover:text-pink-500": "/" !== pathname,
                    })}
                    href="/"
                >
                    Home
                </Link>
                <div className="hidden items-center gap-8 md:flex">
                    {NAV_LINKS.map((item) => {
                        const isActive = item.href === pathname
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={clsx(
                                    "transition-colors duration-300",
                                    {
                                        "text-pink-500": isActive,
                                        "hover:text-pink-500": !isActive,
                                    },
                                )}
                            >
                                {item.name}
                            </Link>
                        )
                    })}
                </div>
            </div>
            <div className="flex items-center gap-4">
                {pathname.includes("/nfts") && <NetworkMenu />}
                <ThemeChanger />
                <Sidebar />
            </div>
        </nav>
    )
}

export default Header
