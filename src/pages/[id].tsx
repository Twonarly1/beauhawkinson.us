/* eslint-disable @next/next/no-img-element */
import React from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import { CodeBracketIcon } from "@heroicons/react/20/solid"
import { urlFor } from "sanity"
import { fetchProjects } from "src/lib/sanity"
import { Project } from "typings"

type ScriptProps = {
    res: Project[]
}

export const getServerSideProps = async () => {
    const res = await fetchProjects()

    return {
        props: {
            res,
        },
    }
}

function Page({ res }: ScriptProps) {
    const router = useRouter()
    const path = Number(router.asPath.replace("/", ""))
    const project = res[path]

    return (
        <div className="mt-12  min-h-screen w-full overflow-y-scroll p-4 text-sm text-gray-700 scrollbar-hide dark:text-gray-400 sm:mt-32 sm:p-0 sm:text-xl">
            <div className="relative mx-auto mb-32 max-w-lg justify-center tracking-[0.5px]">
                <div className=" text-[22px] text-gray-900 dark:text-gray-100">
                    {project?.title}
                </div>
                <div className="mt-[2px] text-sm text-gray-400">{project?.date}</div>
                <div className="mt-8 flex space-x-2">
                    {project?.technologies.map((tech: any, i: number) => (
                        <div
                            key={i}
                            className="relative h-6 w-6 rounded-full bg-white dark:bg-primary-dark"
                        >
                            <Image
                                loading="lazy"
                                className="h-6 w-6 rounded-full"
                                src={urlFor(tech?.image).url()}
                                alt="Portrait photo of me"
                                quality={100}
                                objectFit="contain"
                                layout="fill"
                            />
                        </div>
                    ))}
                </div>
                <div className="py-6 text-[16px] ">
                    <div className="mt-4 space-y-5">
                        {project?.points.map((bullet: any, i: number) => (
                            <p className="" key={i}>
                                {bullet}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="relative flex h-20 w-full items-center justify-between">
                    <a href={project?.linkToBuild} className="rounded-lg">
                        <CodeBracketIcon className="h-10 w-10 rounded-lg border bg-white p-2 focus:outline-none hover:bg-gray-50 dark:bg-primary-dark dark:hover:bg-white/5 dark:hover:bg-gray-500" />
                    </a>
                    {project?.linkToWebsite && (
                        <a
                            href={project?.linkToWebsite}
                            className="h-auto cursor-pointer items-center truncate rounded-lg border p-2 text-sm hover:bg-gray-50 dark:hover:bg-white/5"
                        >
                            {project?.linkToWebsite}
                        </a>
                    )}
                </div>
                {project?.image && (
                    <div className="image-bkg">
                        <img src={urlFor(project?.image).url()} alt="" className="image" />
                    </div>
                )}
                {project?.secondImage && (
                    <div className="image-bkg">
                        <img src={urlFor(project?.secondImage).url()} alt="" className="image" />
                    </div>
                )}
                {project?.thirdImage && (
                    <div className="image-bkg">
                        <img src={urlFor(project?.thirdImage).url()} alt="" className="image" />
                    </div>
                )}
                {project?.fourthImage && (
                    <div className="image-bkg">
                        <img src={urlFor(project?.fourthImage).url()} alt="" className="image" />
                    </div>
                )}
                {project?.fifthImage && (
                    <div className="image-bkg">
                        <img src={urlFor(project?.fifthImage).url()} alt="" className="image" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Page
