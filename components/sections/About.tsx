import Image from "next/image"
import Link from "next/link"

import { CoreTooltip, Heading, MainviewThemeSwitcher, Stack, Text, Typewriter } from "~/core"
import { Code, GitHubIcon, Info, LinkedInIcon, TwitterIcon } from "~/core/icon"

export function About() {
    return (
        <section id="about">
            <Stack alignItems="center" gap={8}>
                <Image
                    priority
                    className="mx-auto mt-10 flex h-[254px] w-[254px] rounded-full bg-pink-200 px-1 py-1"
                    src="/bhawkinson.jpeg"
                    alt="Portrait photo of me"
                    height={254}
                    width={254}
                    quality={100}
                />

                <Stack gap={8} alignItems="center">
                    <Stack gap={2} alignItems="center" textAlign="center">
                        <Heading as="h1">Beau Hawkinson</Heading>

                        <Stack direction="horizontal" gap={2}>
                            <Text color={500} size="xl" tracking="tight">
                                Freelance
                            </Text>

                            <Typewriter
                                text={[
                                    "Software",
                                    "Frontend",
                                    "Backend",
                                    "Full-stack",
                                    "Product",
                                    "UX/UI",
                                ]}
                            />

                            <Text color={500} size="xl" tracking="tight">
                                Engineer
                            </Text>
                        </Stack>
                    </Stack>

                    <Stack direction="horizontal" gap={4}>
                        <CoreTooltip content="Twitter">
                            <a href="https://twitter.com/twonarly">
                                <TwitterIcon className="h-6 w-6 hover:scale-110 sm:h-8 sm:w-8" />
                            </a>
                        </CoreTooltip>

                        <CoreTooltip content="GitHub">
                            <a href="https://github.com/Twonarly1">
                                <GitHubIcon className="h-6 w-6 text-[#333] hover:scale-110 dark:text-[#FFF] sm:h-8 sm:w-8" />
                            </a>
                        </CoreTooltip>

                        <CoreTooltip content="LinkedIn">
                            <a href="https://www.linkedin.com/in/beau-hawkinson-6921bb84/">
                                <LinkedInIcon />
                            </a>
                        </CoreTooltip>

                        <CoreTooltip content="Projects">
                            <Link href="/projects">
                                <Code className="h-6 w-6 hover:scale-110 sm:h-8 sm:w-8" />
                            </Link>
                        </CoreTooltip>

                        <CoreTooltip content="Resume">
                            <Link href="/resume">
                                <Info className="h-6 w-6 hover:scale-110 sm:h-8 sm:w-8" />
                            </Link>
                        </CoreTooltip>

                        <MainviewThemeSwitcher />
                    </Stack>
                </Stack>
            </Stack>
        </section>
    )
}
