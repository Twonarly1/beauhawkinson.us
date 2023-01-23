import React from "react"
import Link from "next/link"
import HeroImage from "./HeroImage"
import { Heading } from "src/components/core"

const NavItems = [
    { href: "#projects", title: "Projects" },
    { href: "#skills", title: "Technologies" },
    { href: "#experiences", title: "Experience" },
    { href: "#achievements", title: "Achievements" },
    { href: "#contact", title: "Contact" },
]

const About = () => {
    return (
        <div className="h-screen">
            <HeroImage />
            <div className="mt-8">
                <Heading title="Beau Hawkinson" subtitle="Full Stack Developer" />
            </div>

            <div className="-mt-4 flex flex-col items-center justify-center gap-2 md:gap-3 2xs:flex-row">
                {NavItems.map((item, i: number) => (
                    <Link
                        key={i}
                        href={item.href}
                        className="z-10 p-1 px-2 text-xs uppercase tracking-widest text-gray-400 transition-all hover:scale-105 hover:text-pink-300 dark:text-gray-400 dark:hover:text-pink-200"
                    >
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default About
