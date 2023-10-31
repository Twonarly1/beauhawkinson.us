"use client"
import { Button, Drawer, Link } from "components/core"
import { NAVIGATION } from "lib/data"
import { useBreakpoint, useDisclosure } from "lib/hooks"
import { useSelectedLayoutSegment } from "next/navigation"
import { useEffect } from "react"
import { List } from "components/icon"

import type { NavLink } from "lib/data"

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
                <div className="lg:hidden">
                    <Button variant="primary">
                        <List className="h-5 w-5" />
                    </Button>
                </div>
            }
        >
            <nav className="flex w-full flex-col items-center gap-8">
                <div className="flex flex-col items-center gap-1">
                    {NAVIGATION.slice(0, 6).map((item: NavLink) => {
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
                </div>
            </nav>
        </Drawer>
    )
}

export default Sidebar
