import Image from "next/image"

import { GitHubIcon } from "core/icon/github"

import { fetchProjectBySlug, fetchProjectsData } from "~/lib"

import { Stack, Text } from "~/core"

type Props = {
    params: Project
}

async function Work({ params }: Props) {
    const projectData = await fetchProjectBySlug(params.slug)

    return (
        <div className="container relative mx-auto mt-24 max-w-3xl px-10 sm:px-0">
            <Stack gap={8}>
                <Stack gap={2}>
                    <h1>
                        <Text size="lg" weight="bold" color={400}>
                            {projectData?.title}
                        </Text>
                    </h1>

                    <Text size="sm" color={1000}>
                        {projectData?.date}
                    </Text>
                </Stack>

                <Stack direction="horizontal" gap={4}>
                    {projectData?.technologies.map((tech: any, i: number) => (
                        <Image
                            key={i}
                            loading="lazy"
                            className="h-6 w-6"
                            src={tech.imageSrc}
                            alt="Portrait photo of me"
                            quality={100}
                            height={24}
                            width={24}
                        />
                    ))}
                </Stack>

                <Stack gap={8}>
                    {projectData?.points.map((bullet: any, i: number) => (
                        <Text color={1000} key={i}>
                            {bullet}
                        </Text>
                    ))}
                </Stack>

                <Stack direction="horizontal" justifyContent="between">
                    <a href={projectData?.linkToBuild} className="rounded-lg">
                        <GitHubIcon className="h-10 w-10 rounded-lg border bg-white p-2 focus:outline-none hover:bg-gray-50 dark:bg-primary-dark dark:hover:bg-white/5 dark:hover:bg-gray-500" />
                    </a>

                    {projectData?.linkToWebsite && (
                        <a
                            href={projectData?.linkToWebsite}
                            className="h-auto cursor-pointer items-center truncate rounded-lg border bg-white p-2 text-sm hover:bg-gray-50 dark:bg-primary-dark dark:hover:bg-white/5"
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
                        quality={100}
                        height={400}
                        width={400}
                    />
                ))}
            </Stack>
        </div>
    )
}

export default Work

export async function generateStaticParams() {
    const projects: Project[] = await fetchProjectsData()

    return projects.map((project: Project) => ({
        slug: project.slug,
    }))
}
