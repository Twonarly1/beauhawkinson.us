"use client"
import { Drawer, Link } from "components/core"
import { NAV_LINKS } from "lib/data"
import { useBreakpoint, useDisclosure } from "lib/hooks"
import { useSelectedLayoutSegment } from "next/navigation"
import { useEffect } from "react"
import { FiMenu } from "react-icons/fi"

import type { LinkItem } from "lib/data"

/**
 * Mobile Sidebar component.
 */
const Sidebar = () => {
    const segment = useSelectedLayoutSegment()

    const { isOpen, onOpen, onClose } = useDisclosure()

    const currentBreakpoint = useBreakpoint()
    useEffect(() => {
        if (currentBreakpoint === "md") {
            onClose()
        }
    }, [currentBreakpoint, onClose])

    return (
        <Drawer
            open={isOpen}
            onClose={onClose}
            onOpen={onOpen}
            title="Beau Hawkinson"
            trigger={
                <div className="md:hidden">
                    <FiMenu className="h-5 w-5 cursor-pointer" />
                </div>
            }
        >
            <nav className="mt-8 flex w-full flex-col items-center gap-2">
                {NAV_LINKS.slice(0, 6).map((item: LinkItem) => {
                    const isActive = item.href === `/${segment}`
                    return (
                        <Link
                            isExternal={item.isExternal}
                            key={item.href}
                            href={item.href}
                            onClick={onClose}
                            variant={isActive ? "isActive" : "header"}
                        >
                            {item.name}
                        </Link>
                    )
                })}
            </nav>
        </Drawer>
    )
}

export default Sidebar
