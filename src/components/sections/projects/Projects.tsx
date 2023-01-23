import React from "react"
import { Heading } from "src/components/core"
import Image from "next/image"

type Props = {
    projects: Project[]
}

function Projects({ projects }: Props) {
    return (
        <div className=" mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-start overflow-hidden px-6 scrollbar-hide lg:-mt-60">
            <Heading title={"Projects"} subtitle={"Select for more details"} />

            <div className="mx-auto flex flex-col gap-y-4 overflow-x-scroll p-1 scrollbar-hide">
                {projects.map((project, i: number) => (
                    <a
                        key={i}
                        href={"/" + project.id}
                        className="group z-10 cursor-default rounded-2xl bg-white  p-3 hover:bg-gradient-to-r hover:from-gray-50 hover:to-pink-50/80 dark:bg-primary-dark dark:hover:from-gray-600 dark:hover:to-slate-800"
                    >
                        <div className="relative flex w-full flex-shrink-0  flex-col rounded-2xl  ">
                            <div className="w-full space-y-2">
                                <b className="text-left text-lg text-black/80  dark:text-white/80 xs:text-xl">
                                    {project.title}
                                </b>
                                <div className="mx-auto flex h-fit w-full flex-wrap items-center gap-y-2 text-left text-sm tracking-wide text-gray-400 xs:text-lg ">
                                    {project.summary}
                                </div>
                                <p className="text-xs">{project.date}</p>
                                <div className="hidden justify-end space-x-2 pt-2 xs:flex xs:pt-0">
                                    {project.technologies.map((tech: any, i: number) => (
                                        <div
                                            key={i}
                                            className="relative h-6 w-6 rounded-full bg-white dark:bg-primary-dark"
                                        >
                                            <Image
                                                loading="lazy"
                                                className="h-6 w-6 rounded-full opacity-0 grayscale group-hover:opacity-50 group-hover:grayscale-0 dark:opacity-0"
                                                src={tech.imageSrc}
                                                alt="Portrait photo of me"
                                                quality={100}
                                                width={60}
                                                height={60}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Projects

{
    /* <div className=" mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-start overflow-hidden px-6 scrollbar-hide lg:-mt-60">
<Heading title={"Projects"} subtitle={"Select for more details"} />

<div className="mx-auto flex flex-col gap-y-4 overflow-x-scroll p-1 scrollbar-hide">
    {projects.map((project, i: number) => (
        <a
            key={i}
            href={"/" + project.id}
            className="group z-10 cursor-default rounded-2xl bg-white  p-3 hover:bg-gradient-to-r hover:from-gray-50 hover:to-pink-50/80 dark:bg-primary-dark dark:hover:from-gray-600 dark:hover:to-slate-800"
        >
            <div className="relative flex w-full flex-shrink-0  flex-col rounded-2xl  ">
                <div className="w-full space-y-2">
                    <b className="text-left text-lg text-black/80  dark:text-white/80 xs:text-xl">
                        {project.title}
                    </b>
                    <div className="mx-auto flex h-fit w-full flex-wrap items-center gap-y-2 text-left text-sm tracking-wide text-gray-400 xs:text-lg ">
                        {project.summary}
                    </div>
                    <p className="text-xs">{project.date}</p>
                    <div className="hidden justify-end space-x-2 pt-2 xs:flex xs:pt-0">
                        {project.technologies.map((tech: any, i: number) => (
                            <div
                                key={i}
                                className="relative h-6 w-6 rounded-full bg-white dark:bg-primary-dark"
                            >
                                <Image
                                    loading="lazy"
                                    className="h-6 w-6 rounded-full opacity-0 grayscale group-hover:opacity-50 group-hover:grayscale-0 dark:opacity-0"
                                    src={urlFor(tech?.image).url()}
                                    alt="Portrait photo of me"
                                    quality={100}
                                    objectFit="contain"
                                    layout="fill"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </a>
    ))}
</div>
</div> */
}
