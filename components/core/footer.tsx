"use client"
import Link from "next/link"
import React from "react"

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="">
            {children}
        </Link>
    )
}

function Footer() {
    return (
        <footer className="mt-32">
            <div className="mx-auto max-w-7xl lg:px-8">
                <div className="border-t border-zinc-200 pt-10 pb-16 dark:border-zinc-700/60">
                    <div className="mx-auto max-w-2xl lg:max-w-5xl">
                        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                            <div className="flex gap-6 text-sm font-medium">
                                <NavLink href="/projects">projects</NavLink>
                            </div>
                            <p className="text-sm">
                                &copy; {new Date().getFullYear()} Beau Hawkinson. All rights
                                reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
