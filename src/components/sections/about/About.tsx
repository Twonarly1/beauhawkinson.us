import React from "react"
import Link from "next/link"
// import { useTheme } from "next-themes"
import HeroImage from "./HeroImage"
import { Heading } from "src/components/core"
import { PageInfo } from "typings"

type Props = {
    pageInfo: PageInfo
}

const NavItems = [
    { href: "#projects", title: "Projects" },
    { href: "#skills", title: "Technologies" },
    { href: "#experiences", title: "Experience" },
    { href: "#achievements", title: "Achievements" },
    { href: "#contact", title: "Contact" },
]

const About = ({ pageInfo }: Props) => {
    return (
        <div className="h-screen">
            <HeroImage heroImage={pageInfo?.heroImage} />
            <Heading title={pageInfo?.name} subtitle={pageInfo?.role} />
            <div className="-mt-4 flex flex-col items-center justify-center gap-2 md:gap-3 2xs:flex-row">
                {NavItems.map((item, i: number) => (
                    <Link key={i} href={item.href}>
                        <button className="z-10 p-1 px-2 text-xs uppercase tracking-widest text-gray-400 transition-all hover:scale-105 hover:text-pink-300 dark:text-gray-400 dark:hover:text-pink-200">
                            {item.title}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default About
