import Image from "next/image"
import Link from "next/link"

import { fetchProjectsData } from "~/lib"

import { Heading, Stack, Text } from "~/core"

async function Projects() {
    const pastProjects: Project[] = await fetchProjectsData()

    return (
        <div className="mx-auto mt-16 flex max-w-5xl flex-col items-center justify-start px-6 ">
            <Heading as="h2">Projects</Heading>

            <Heading as="h3">Select for more details</Heading>

            <div className="mx-auto mt-16 flex flex-col gap-y-4 p-1">
                {pastProjects.map((p, i: number) => (
                    <Link
                        key={i}
                        href={`../project/${p.slug}`}
                        className="group z-10 cursor-pointer rounded-2xl p-3 hover:bg-gradient-to-r hover:from-gray-50 hover:to-pink-50/80 dark:bg-primary-dark dark:hover:from-gray-600 dark:hover:to-slate-800"
                    >
                        <Stack direction="horizontal" gap={8}>
                            <Text size="xs" color={1000}>
                                <p className="mt-1">{p.date}</p>
                            </Text>

                            <Stack>
                                <Text size="lg" weight="bold" color={400}>
                                    {p.title}
                                </Text>

                                <Text size="sm" color={1000}>
                                    {p.summary}
                                </Text>

                                <div className="hidden space-x-2 pt-4 xs:flex">
                                    {p.technologies.map((tech: any, i: number) => (
                                        <Image
                                            key={i}
                                            loading="lazy"
                                            className="h-6 w-6 opacity-0 grayscale transition duration-1000 ease-in-out group-hover:opacity-100 group-hover:grayscale-0 dark:opacity-0"
                                            src={tech.imageSrc}
                                            alt="Portrait photo of me"
                                            quality={100}
                                            width={60}
                                            height={60}
                                        />
                                    ))}
                                </div>
                            </Stack>
                        </Stack>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Projects
