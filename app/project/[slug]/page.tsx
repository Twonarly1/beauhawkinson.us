import Image from "next/image"

import { Code } from "core/icon/code"

import { fetchProjectBySlug, fetchProjectsData } from "~/lib"

type Props = {
    params: Project
}

async function Work({ params }: Props) {
    const projectData = await fetchProjectBySlug(params.slug)

    return (
        <div className="mt-12  min-h-screen w-full overflow-y-scroll p-4 text-sm text-gray-700 scrollbar-hide dark:text-gray-400 sm:mt-32 sm:p-0 sm:text-xl">
            <div className="relative mx-auto mb-32 max-w-lg justify-center tracking-[0.5px]">
                <div className=" text-[22px] text-gray-900 dark:text-gray-100">
                    {projectData?.title}
                </div>

                <div className="mt-[2px] text-sm">{projectData?.date}</div>

                <div className="mt-8 flex space-x-2">
                    {projectData?.technologies.map((tech: any, i: number) => (
                        <div key={i} className="relative h-6 w-6 dark:bg-primary-dark">
                            <Image
                                loading="lazy"
                                className="h-6 w-6"
                                src={tech.imageSrc}
                                alt="Portrait photo of me"
                                quality={100}
                                height={24}
                                width={24}
                            />
                        </div>
                    ))}
                </div>

                <div className="py-6 text-[16px] ">
                    <div className="mt-4 space-y-5">
                        {projectData?.points.map((bullet: any, i: number) => (
                            <p className="" key={i}>
                                {bullet}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="relative flex h-20 w-full items-center justify-between">
                    <a href={projectData?.linkToBuild} className="rounded-lg">
                        <Code className="h-10 w-10 rounded-lg border bg-white p-2 focus:outline-none hover:bg-gray-50 dark:bg-primary-dark dark:hover:bg-white/5 dark:hover:bg-gray-500" />
                    </a>

                    {projectData?.linkToWebsite && (
                        <a
                            href={projectData?.linkToWebsite}
                            className="h-auto cursor-pointer items-center truncate rounded-lg border bg-white p-2 text-sm hover:bg-gray-50 dark:bg-primary-dark dark:hover:bg-white/5"
                        >
                            {projectData?.linkToWebsite}
                        </a>
                    )}
                </div>

                <div>
                    {projectData?.images.map((p: string, i: number) => (
                        <div
                            key={i}
                            className="rounded-3xl bg-black/5 backdrop-blur-md dark:bg-white/5"
                        >
                            <Image
                                loading="lazy"
                                className="mt-20 h-auto w-full rounded-2xl object-cover p-8"
                                src={p}
                                alt="Portrait photo of me"
                                quality={100}
                                height={400}
                                width={400}
                            />
                        </div>
                    ))}
                </div>
            </div>
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
