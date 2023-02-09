import Image from "next/image"
import Link from "next/link"

import { Button, Heading, Stack, Text } from "~/core"

type Props = {
    projects: Project[]
}

function ProjectSection() {}

export function PastProjects({ projects }: Props) {
    return (
        <Stack gap={16}>
            <Stack alignItems="center">
                <Heading as="h1">Past Projects</Heading>

                <Heading as="h2">Select for more details</Heading>
            </Stack>

            <div className="mx-auto flex flex-col gap-y-4">
                {projects.map((p, i: number) => {
                    return (
                        <Link
                            key={i}
                            href={`/project/${p.slug}`}
                            className={`group relative z-10 cursor-pointer rounded-2xl p-3 hover:bg-gradient-to-r hover:from-gray-50 hover:to-pink-50/80 dark:hover:from-gray-600 dark:hover:to-slate-800 sm:px-10 ${
                                p.highlight && "border-2 border-pink-200"
                            }`}
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

                                    <div className="hidden  space-x-2 pt-4 xs:flex">
                                        {p.technologies.map((tech: any, i: number) => (
                                            <Image
                                                key={i}
                                                loading="lazy"
                                                className="h-6 w-6 opacity-0 grayscale group-hover:opacity-50 group-hover:grayscale-0 dark:opacity-0"
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
                    )
                })}

                <Button size="sm" variant="showMore" as="a" href="/projects">
                    show more &rarr;
                </Button>
            </div>
        </Stack>
    )
}
