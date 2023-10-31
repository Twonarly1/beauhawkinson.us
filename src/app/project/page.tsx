import { fetchProjectsData } from "lib"
import Link from "next/link"

import { Heading, Text } from "components/core"

export const metadata = {
    title: "Projects",
    description: "List of projects I have created.",
}

async function Projects() {
    const projects: Project[] = await fetchProjectsData()

    return (
        <div className="flex flex-col gap-8">
            <Heading as="h2">Projects</Heading>

            {projects.map((p, i: number) => (
                <Link
                    key={i}
                    href={`/project/${p.slug}`}
                    className="z-10 flex flex-1 rounded-lg border border-neutral-100 bg-neutral-100 p-5 text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
                >
                    <div className="flex flex-col gap-2">
                        <Text size="xs">{p.date}</Text>

                        <Text size="lg" weight="bold" color={400}>
                            {p.title}
                        </Text>

                        <Text size="sm">{p.summary}</Text>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Projects
