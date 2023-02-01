import { ChevronDownIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

import { CoreTooltip, GitHubIcon, Heading, LinkedInIcon, TwitterIcon } from "~/core"

const NavItems = [
    { href: "#projects", title: "Projects" },
    { href: "#skills", title: "Technologies" },
    { href: "#experiences", title: "Experience" },
    { href: "#achievements", title: "Achievements" },
    { href: "#contact", title: "Contact" },
]

function About() {
    return (
        <section id="about">
            <div className="mt-16 flex min-h-screen flex-col gap-y-8">
                <Image
                    priority
                    className="mx-auto flex h-[144px] w-[144px] rounded-full bg-gray-100 px-1 py-1 sm:h-[254px] sm:w-[254px]"
                    src="/bhawkinson.jpeg"
                    alt="Portrait photo of me"
                    height={254}
                    width={254}
                    quality={100}
                />

                <Heading title="Beau Hawkinson" subtitle="Full Stack Developer" />

                <div className="mx-auto -mt-16 flex justify-center gap-4">
                    <CoreTooltip content="Twitter">
                        <a href="https://twitter.com/twonarly">
                            <TwitterIcon className="h-[38px] w-[38px] rounded-full p-2 hover:animate-wiggle hover:bg-pink-100 hover:text-black dark:hover:bg-pink-100" />
                        </a>
                    </CoreTooltip>

                    <CoreTooltip content="GitHub">
                        <a href="https://github.com/Twonarly1">
                            <GitHubIcon className="h-[38px] w-[38px] rounded-full p-2 hover:animate-wiggle hover:bg-pink-100 hover:text-black dark:hover:bg-pink-100" />
                        </a>
                    </CoreTooltip>

                    <CoreTooltip content="LinkedIn">
                        <a href="https://www.linkedin.com/in/beau-hawkinson-6921bb84/">
                            <LinkedInIcon className="h-[38px] w-[38px] rounded-full p-2 hover:animate-wiggle hover:bg-pink-100 hover:text-black dark:hover:bg-pink-100" />
                        </a>
                    </CoreTooltip>
                </div>

                <div className="m-auto">
                    <ChevronDownIcon className="h-8 w-8 animate-bounce" />
                </div>
            </div>
        </section>
    )
}

export default About
