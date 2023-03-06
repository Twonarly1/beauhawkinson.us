import Image from "next/image"

import { Heading, Typewriter } from "core/typography"
import { SkillsDialog, SkillsCarousel } from "components"
import { Stack, Text } from "core"
import { config } from "lib"
import { ArrowIcon, GitHubIcon, LinkedInIcon, TwitterIcon } from "core/icon"

async function HomePage() {
    return (
        <Stack gap={8}>
            <Stack direction={{ base: "vertical", sm: "horizontal" }} gap={4}>
                <Image src={config.me} alt={config.name} height={92} width={92} quality={100} />

                <Stack>
                    <Heading as="h2">{config.name}</Heading>

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

                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/Twonarly1"
                        className="flex items-center"
                    >
                        <p>⭐️ star this repo</p>
                    </a>
                </Stack>
            </Stack>

            <Text size="sm" color={1000}>
                Hey, I&apos;m Beau. I&apos;m a <b>Freelance Software Developer</b>, currently
                unemployed and 🎯 searching for opportunities. Please contact me to get connected!
            </Text>

            <SkillsDialog />

            <SkillsCarousel />

            <Stack direction={{ base: "vertical", sm: "horizontal" }} gap={2}>
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://twitter.com/twonarly"
                    className="flex w-full items-center justify-between rounded-lg border border-neutral-200 p-4 text-neutral-800 no-underline transition-all hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900"
                >
                    <div className="flex items-center">
                        <TwitterIcon />

                        <div className="ml-3">Twitter</div>
                    </div>

                    <ArrowIcon />
                </a>

                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/Twonarly1"
                    className="flex w-full items-center justify-between rounded-lg border border-neutral-200 p-4 text-neutral-800 no-underline transition-all hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900"
                >
                    <div className="flex items-center">
                        <GitHubIcon />

                        <div className="ml-3">GitHub</div>
                    </div>

                    <ArrowIcon />
                </a>

                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/beau-hawkinson-6921bb84/"
                    className="flex w-full items-center justify-between rounded-lg border border-neutral-200 p-4 text-neutral-800 no-underline transition-all hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900"
                >
                    <div className="flex items-center">
                        <LinkedInIcon />

                        <div className="ml-3">LinkedIn</div>
                    </div>

                    <ArrowIcon />
                </a>
            </Stack>
        </Stack>
    )
}

export default HomePage
