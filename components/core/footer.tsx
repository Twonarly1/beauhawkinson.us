"use client"
import Link from "next/link"
import React from "react"

// function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
//     return (
//         <Link href={href} className="transition hover:text-teal-500 dark:hover:text-teal-400">
//             {children}
//         </Link>
//     )
// }

function Footer() {
    return (
        <footer className="mt-32">
            <div className="mx-auto max-w-7xl lg:px-8">
                <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
                    <div className="mx-auto max-w-2xl lg:max-w-5xl">
                        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                            <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                                {/* <p>Work</p> */}
                            </div>
                            <p className="text-sm text-zinc-400 dark:text-zinc-500">
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
