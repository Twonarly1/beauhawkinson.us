import { Heading } from "components/core"
import { TwitterIcon, GitHubIcon, LinkedInIcon } from "components/core/social-icons"
import Image from "next/image"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import CoreTooltip from "components/core/tooltip"

const NavItems = [
    { href: "#projects", title: "Projects" },
    { href: "#skills", title: "Technologies" },
    { href: "#experiences", title: "Experience" },
    { href: "#achievements", title: "Achievements" },
    { href: "#contact", title: "Contact" },
]

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
                    <CoreTooltip content="Twitter">
                        <a href="https://twitter.com/twonarly">
                            <TwitterIcon className="common_icon" />
                        </a>
                    </CoreTooltip>
                    <CoreTooltip content="GitHub">
                        <a href="https://github.com/Twonarly1">
                            <GitHubIcon className="common_icon" />
                        </a>
                    </CoreTooltip>
                    <CoreTooltip content="LinkedIn">
                        <a href="https://www.linkedin.com/in/beau-hawkinson-6921bb84/">
                            <LinkedInIcon className="common_icon" />
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
