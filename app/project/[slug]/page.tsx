import Image from "next/image"
import Link from "next/link"

import { Stack, CoreTooltip, Text } from "core"
import { fetchProjectBySlug, fetchProjectsData } from "lib"
import { GitHubIcon } from "core/icon"

type Props = {
    params: Project
}

export async function generateStaticParams() {
    const projects: Project[] = await fetchProjectsData()

    return projects.map((project: Project) => ({
        slug: project.slug,
    }))
}

async function Work({ params }: Props) {
    const projectData = (await fetchProjectBySlug(params.slug)) as any
    const projects: Project[] = await fetchProjectsData()

    return (
        <div className="w-full">
            <Stack direction="horizontal" justifyContent="between">
                {projectData.id > 0 && (
                    <Link
                        className="flex w-fit items-start justify-start"
                        href={`/project/${projects[projectData.id - 1].slug}`}
                    >
                        <p className="mt-2 mb-10">&larr; Prev</p>
                    </Link>
                )}

                {projectData.id < 8 && (
                    <Link
                        className="flex w-fit items-end justify-end"
                        href={`/project/${projects[projectData.id + 1].slug}`}
                    >
                        <p className="mt-2 mb-10">Next &rarr;</p>
                    </Link>
                )}
            </Stack>

            <Stack gap={8}>
                <Stack gap={2}>
                    <h1>
                        <Text size="lg" weight="bold" color={400}>
                            {projectData?.title}
                        </Text>
                    </h1>

                    <Text size="sm">{projectData?.date}</Text>
                </Stack>

                <Stack direction="horizontal" gap={{ base: 4, sm: 8 }}>
                    {projectData?.technologies.map((tech: any, i: number) => (
                        <CoreTooltip key={i} content={tech.tooltip}>
                            <Image
                                loading="lazy"
                                className="h-8 w-8"
                                src={tech.imageSrc}
                                alt="Portrait photo of me"
                                quality={100}
                                height={24}
                                width={24}
                            />
                        </CoreTooltip>
                    ))}
                </Stack>

                <Stack gap={8}>
                    {projectData?.points.map((bullet: any, i: number) => (
                        <Text color={1000} size="sm" key={i}>
                            {bullet}
                        </Text>
                    ))}
                </Stack>

                <Stack direction="horizontal" justifyContent="between" alignItems="center">
                    <a
                        href={projectData?.linkToBuild}
                        className="flex items-center justify-between rounded-lg border border-neutral-200 p-4 text-neutral-800 no-underline transition-all hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900"
                    >
                        <GitHubIcon />
                    </a>

                    {projectData?.linkToWebsite && (
                        <a
                            className="flex items-center justify-between rounded-lg border border-neutral-200 p-4 text-neutral-800 no-underline transition-all hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900"
                            href={projectData?.linkToWebsite}
                        >
                            {projectData?.linkToWebsite}
                        </a>
                    )}
                </Stack>

                {projectData?.images.map((p: string, i: number) => (
                    <Image
                        key={i}
                        loading="lazy"
                        className="mt-20 h-auto w-full rounded-3xl bg-black/5 object-cover p-8 backdrop-blur-md dark:bg-white/5"
                        src={p}
                        alt="Portrait photo of me"
                        quality={80}
                        height={400}
                        width={400}
                    />
                ))}
            </Stack>
        </div>
    )
}

export default Work
