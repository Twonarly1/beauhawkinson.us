import React, { SVGProps } from "react"
import { Heading } from "components/core"
import { TwitterIcon, GitHubIcon, LinkedInIcon } from "components/core/social-icons"
import Image from "next/image"
import { ChevronDownIcon } from "@heroicons/react/24/outline"

const NavItems = [
    { href: "#projects", title: "Projects" },
    { href: "#skills", title: "Technologies" },
    { href: "#experiences", title: "Experience" },
    { href: "#achievements", title: "Achievements" },
    { href: "#contact", title: "Contact" },
]

type SocialLinkProps = {
    href: string
    icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    tooltip: string
    onClick?: () => void | {}
}

function DesktopSocialLink({ icon: Icon, href, tooltip, ...props }: SocialLinkProps) {
    return (
        <div className="group relative z-20">
            <a rel="noopener noreferrer" target="_blank" href={href} {...props}>
                <Icon className="z-20 mx-auto mb-1 h-[38px] w-[38px] cursor-pointer rounded-full p-2  hover:bg-pink-100  dark:hover:bg-pink-100 " />
            </a>
            <p className=" invisible mx-auto items-center justify-center text-xs transition duration-500 ease-in-out group-hover:visible">
                {tooltip}
            </p>
        </div>
    )
}

const About = () => {
    return (
        <section id="about">
            <div className="mt-16 flex min-h-screen flex-col gap-y-8">
                <Image
                    priority
                    className="mx-auto flex rounded-full bg-gray-100 px-1 py-1"
                    src="/bhawkinson.jpeg"
                    alt="Portrait photo of me"
                    height={254}
                    width={254}
                    quality={100}
                />
                <Heading title="Beau Hawkinson" subtitle="Full Stack Developer" />

                <div className="mx-auto -mt-16 flex justify-center gap-4">
                    <DesktopSocialLink
                        href="https://twitter.com/twonarly"
                        aria-label="Follow on Twitter"
                        icon={TwitterIcon}
                        tooltip="Twitter"
                    />
                    <DesktopSocialLink
                        href="https://github.com/Twonarly1"
                        aria-label="Follow on GitHub"
                        icon={GitHubIcon}
                        tooltip="GitHub"
                    />
                    <DesktopSocialLink
                        href="https://www.linkedin.com/in/beau-hawkinson-6921bb84/"
                        aria-label="Follow on LinkedIn"
                        icon={LinkedInIcon}
                        tooltip="LinkedIn"
                    />
                </div>
                <div className="m-auto">
                    <ChevronDownIcon className="h-8 w-8 animate-bounce" />
                </div>
            </div>
        </section>
    )
}

export default About

{
    /* 
    <div className="flex flex-col items-center justify-center gap-2 2xs:flex-row md:gap-3">
        {NavItems.map((item, i: number) => (
            <Link
                key={i}
                href={item.href}
                className="z-10 p-1 px-2 text-xs uppercase tracking-widest text-gray-400 transition-all hover:scale-105 hover:text-pink-300 dark:text-gray-400 dark:hover:text-pink-200"
            >
                {item.title}
            </Link>
        ))}
    </div> */
}
